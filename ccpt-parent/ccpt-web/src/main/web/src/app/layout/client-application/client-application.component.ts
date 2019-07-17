import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { forkJoin } from 'rxjs';
import { URLConstants } from '../components/constants/url-constants';
import { ClientApplicationModel,ActionsList } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { Router } from '@angular/router';


@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public model: ClientApplicationModel = <ClientApplicationModel>{};
    
    public bodyMailModel: any = <any>{};
    public clientApplicationList: Array<any> = [];
    public pagedCAList: Array<any> = [];
    public consultantList: Array<any> = [];
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    public clientPositionList: Array<any> = [];
    public recruiterList: Array<any> = [];
    public urlConstants = new URLConstants();

    
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action:string;
    
    public currSearchTxt = '';
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public isInterviewScheduled = false;
    public showProperties = false;
    private selectedRecrd = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public screenHeight: any;
    public readOnlyForm = '';
    public enableButtonType = '';
    public download = 'download';
    public upload = 'upload';
    public uploader: FileUploader = new FileUploader({});
    public apName = '';
    public apValue = '';
    public loggedInRole = '';
    public comments = '';
    public isCreate: boolean = false;
    public page: number;
    public caListLength: number;
    public pageSize: number = 20;
    public cpGeneratedCode: string = '';
    public fileList: Array<any> = [];
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        translate: 'no'
    };

    private getAllCAS = this.http.get(this.urlConstants.CASGetAll);
    private getAllC = this.http.get(this.urlConstants.CDropdown);
    private getAllCP = this.http.get(this.urlConstants.CPDropdown);
    private getAllR = this.http.get(this.urlConstants.RDropdown);

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal, private router: Router) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
    }

    ngOnInit() {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()){
            this.router.navigate(['/login']);
          }
        this.loggedInRole = sessionStorage.getItem('role');
        this.getAllDropdowns();
        this.init();
    }
    private init() {
        this.http.get(this.urlConstants.CAGetAll).subscribe(resp => {
            this.clientApplicationList = resp as any;
            this.pagedCAList = resp as any;
            this.caListLength = this.clientPositionList.length;
            this.pageChange(this.page);
        });
        this.model.properties = [];
        this.model['files'] = [];
        this.model.caStatus = 'New';
        this.page=1;
    }
    private getAllDropdowns() {
        forkJoin(
            this.getAllCAS,
            this.getAllC,
            this.getAllCP,
            this.getAllR
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.clientApplicationStatusList = listofrecords[0] as any;
            this.consultantList = listofrecords[1] as any;
            this.clientPositionList = listofrecords[2] as any;
            this.recruiterList = listofrecords[3] as any;
            this.getRecruiterId();
        });
    }
    private getRecruiterId() {
        const temp = sessionStorage.getItem('username');
        this.recruiterList.forEach(rl => {
          if (rl.email === temp) {
            this.model.creatorId = rl.id;
          }
        });
      }
    private formReset() {
        this.model = <ClientApplicationModel>{};
        this.model.properties = [];
        this.model.caStatus = 'New';
    }
    private enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    public setModel(id: number) {

        // this.isInterviewScheduled = true;
        this.getCAById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action=null;
    }
    private getCAById(id: number) {
        const temp = this.http.get(this.urlConstants.CAGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if(this.model.interviewDate != null){
                this.isInterviewScheduled = true;
            }else{
                this.isInterviewScheduled = false;
            }
        });
    }
    private mapToUpdateModel(response): ClientApplicationModel {
        const temp = response;
        this.model = temp;
        this.cpGeneratedCode = temp.clientPosition.generatedCode; 
        this.model['cpId'] = temp.clientPosition.id;
        this.model['consultantId'] = temp.consultant.id;
        this.model['caStatus'] = temp.status.code;
        this.model['creatorId'] = temp.creator.id;
        return this.model;
    }
    public propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.model.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.model.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
                this.apName = '';
                this.apValue = '';
                break;
            }
        }
    }
    public actions(value,trashContent,bodyMail,uploadContent,downloadContent,form){
        switch(value){
          case 'Delete':{
            this.open(this.model.id,trashContent);
            break;
          }
          case 'Body Mail':{
            this.open(this.model.id,bodyMail);
            this.getBodyMail();
            break;
          }
          case 'File Upload':{
            this.open(this.model.id,uploadContent);
            break;
          }
          case 'File Download':{
            this.open(this.model.id,downloadContent);
            break;
          }
          case 'Edit':{
            this.enableFormEditable();
            break;
          }
          case 'Close':{
            this.cancelForm(form);
          }
        }
      }
    public create(clientApplicationForm: NgForm): void {
        this.isCreate= true;
        const temp = this.http.post(this.model, this.urlConstants.CACreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application');
            this.init();
            this.formReset();
            clientApplicationForm.resetForm();
            this.isCreate= false;
            this.getRecruiterId();

        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
            this.isCreate= false;
        });

    }
    public dblSetModel(data) {
        this.isInterviewScheduled = true;
        this.model = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action=null;
    }
    public update(clientApplicationForm: NgForm) {
        const temp = this.http.update(this.model, this.urlConstants.CAUpdate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Application');
            this.formReset();
            this.init();
            clientApplicationForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.getRecruiterId();
        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
        });
        this.formReset();
    }

    public cancelForm(clientApplicationForm: NgForm) {
        clientApplicationForm.resetForm();
        this.init();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.getRecruiterId();
    }
    public trash(): void {
        const temp = this.http.delete(this.urlConstants.CADelete + this.selectedRecrd);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.getRecruiterId();
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application');
            }
            this.toastr.error(err.error.message, 'Client Application');
        });
    }
    public getBodyMail(): void{
        let id=this.selectedRecrd
        this.http.get(this.urlConstants.CABodyMail+id).subscribe(resp=>{
            this.bodyMailModel = resp as any;
        })
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any , content) {
        this.selectedRecrd = 0;
        if (event) {
            this.selectedRecrd = event;
        }
        // if (event.type === this.download) {
        //     // this.getFilesById(this.selectedRecrd); TODO:Need to fix for multiple downloads
        //     this.http.get('file/download?refType=ClientApplication&refId=' + this.selectedRecrd).subscribe(resp => {

        //     }, err => {
        //         if (err.status == 200)
        //             window.open(err.url);
        //     });
        // } else {
            this.modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static' });
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
            
        //}

    }
    /**Download file */
    public downloadFile(id:number){
        this.http.get(this.urlConstants.FileDownload + id).subscribe(resp => {
                }, err => {
                    if (err.status == 200)
                        window.open(err.url);
                });
    }
    public close() {
        this.modalRef.close();
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    /** Get Uploaded files */
    private getFiles(): FileLikeObject[] {
        return this.uploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    /** Upload documents of respective consultant */
    public uploadFiles() {
        const files = this.getFiles();
        const formData = new FormData();
        formData.append('file', files[0].rawFile, files[0].name);
        const params = 'refId=' + this.selectedRecrd + '&refType=Client Application&comments=' + this.comments;
        this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(resp => {
            let temp: any = resp;
            this.toastr.success(temp.message, 'Client');
            this.close();
        }, err => {
            this.toastr.success(err.error.message, 'Client');
        });
        /* let requests = [];
         files.forEach((file) => {
             let formData = new FormData();
             formData.append('file', file.rawFile, file.name);
             console.log(formData);
             this.http.upload('', formData[0]).subscribe(resp => {
                 console.log("resp=====", resp);
             })
             // requests.push(this.uploadService.upload(formData));
         });*/

        /*concat(...requests).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );*/
    }
    public pageChange(event) {
        const from = ((event - 1) * this.pageSize);
        const lst = this.clientApplicationList;
        const uplst = lst.slice(from, from + this.pageSize);
        this.pagedCAList = uplst;
      }
}
