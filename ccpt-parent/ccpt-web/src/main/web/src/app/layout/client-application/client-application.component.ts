import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { forkJoin } from 'rxjs';
import { URLConstants } from '../components/constants/url-constants';
import { map } from 'rxjs/operators';
import { ClientApplicationModel } from './client-application.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientApplicationStatusModel } from '../client-application-status/client-application-status.model';
import { ConsultantModel } from '../consultant/consultant.model';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';


@Component({
    selector: 'app-client-application',
    templateUrl: './client-application.component.html',
    styleUrls: ['./client-application.component.scss'],
    animations: [routerTransition()]
})
export class ClientApplicationComponent implements OnInit {
    public CAModel: ClientApplicationModel = <ClientApplicationModel>{};
    public clientApplicationList: Array<any> = [];
    public consultantList: Array<any> = [];
    public clientApplicationStatusList: Array<ClientApplicationStatusModel> = [];
    public clientPositionList: Array<any> = [];
    public recruiterList: Array<any> = [];
    private urlConstants = new URLConstants();
    public currSearchTxt = '';
    public formButtonsToggler = true;
    public editButtonToggler = true;
    public isInterviewScheduled = false;
    public showProperties = false;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public screenHeight: any;
    public readOnlyForm = '';
    public enableButtonType = '';
    public download = 'download';
    public trash = 'trash';
    public upload = 'upload';
    public uploader: FileUploader = new FileUploader({});
    public apName = '';
    public apValue = '';
    public loggedInRole = '';
    public comments = '';
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

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
    }

    ngOnInit() {
        this.loggedInRole = sessionStorage.getItem('role');
        this.init();
        this.getAllDropdowns();
    }
    init() {
        this.http.get(this.urlConstants.CAGetAll).subscribe(resp => {
            this.clientApplicationList = resp as any;
        });
        this.CAModel.properties = [];
        this.CAModel.caStatus = 'New';
    }
    getAllDropdowns() {
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
        });
    }

    formReset() {
        this.CAModel = <ClientApplicationModel>{};
        this.CAModel.properties = [];
        this.CAModel.caStatus = 'New';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {

        // this.isInterviewScheduled = true;
        this.getCAById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getCAById(id: number) {
        const temp = this.http.get(this.urlConstants.CAGetById + id);
        temp.subscribe(resp => {
            this.CAModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if(this.CAModel.interviewDate != null){
                this.isInterviewScheduled = true;
            }else{
                this.isInterviewScheduled = false;
            }
            if(this.CAModel.properties == null){
                this.CAModel.properties = [];
              }
        });
    }
    mapToUpdateModel(response): ClientApplicationModel {
        const temp = response;
        this.CAModel = temp;
        this.CAModel['cpId'] = temp.clientPosition.id;
        this.CAModel['consultantId'] = temp.consultant.id;
        this.CAModel['caStatus'] = temp.status.code;
        this.CAModel['creatorId'] = temp.creator.id;
        return this.CAModel;
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.CAModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.CAModel.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
                this.apName = '';
                this.apValue = '';
                break;
            }
        }
    }
    createClientApplication(clientApplicationForm: NgForm): void {
        const temp = this.http.post(this.CAModel, this.urlConstants.CACreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client Application');
            this.init();
            this.formReset();
            clientApplicationForm.resetForm();

        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
        });

    }
    editClientApplication(data) {
        this.isInterviewScheduled = true;
        this.CAModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    updateClientApplication(clientApplicationForm: NgForm) {
        const temp = this.http.update(this.CAModel, this.urlConstants.CAUpdate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client Application');
            this.formReset();
            this.init();
            clientApplicationForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.error.message, 'Client Application');
        });
        this.formReset();
    }

    cancelForm(clientApplicationForm: NgForm) {
        clientApplicationForm.resetForm();
        this.init();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';

    }
    deleteCARecord(): void {
        const temp = this.http.delete(this.urlConstants.CADelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client Application');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
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
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any) {
        this.selectedRecrdToDel = 0;
        if (event.id) {
            this.selectedRecrdToDel = event.id;
        }
        if (event.type === this.download) {
            // this.getFilesById(this.selectedRecrdToDel); TODO:Need to fix for multiple downloads
            this.http.get('file/download?refType=ClientApplication&refId=' + this.selectedRecrdToDel).subscribe(resp => {

            }, err => {
                if (err.status == 200)
                    window.open(err.url);
            });
        } else {
            this.modalRef = this.modalService.open(event.content);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }

    }
    close() {
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
    getFiles(): FileLikeObject[] {
        return this.uploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    /** Upload documents of respective consultant */
    uploadFiles() {
        const files = this.getFiles();
        const formData = new FormData();
        formData.append('file', files[0].rawFile, files[0].name);
        const params = 'refId=' + this.selectedRecrdToDel + '&refType=CLientApplication&comments=' + this.comments;
        this.http.upload('file/save?' + params, formData).subscribe(resp => {
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
}
