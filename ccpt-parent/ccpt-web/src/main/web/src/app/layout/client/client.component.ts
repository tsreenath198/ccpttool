import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel, ActionsList } from './client.model';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';



@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
    public model: ClientModel = <ClientModel>{};
    public clientList: any = [];
    public currSearchTxt = '';
    public urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public comments = '';
    public uploader: FileUploader = new FileUploader({});
    public fileList: Array<any> = [];
    public address = false;

    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action:string;
    
    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    public screenHeight: any;
    public download = 'download';
    public upload = 'upload';
    public apName = '';
    public apValue = '';
    public loggedInRole = '';
    public isCreate: boolean = false;
    public listReturned: boolean;
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        translate: 'no'
    };

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal, private router: Router) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    private getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()){
          this.router.navigate(['/login']);
        }
        this.loggedInRole = sessionStorage.getItem('role');
        this.clientContactDeclare();
        this.init();
    }
    init() {
        this.spinner(false);
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
            this.spinner(true);
        });
        this.model.properties = [];
        this.model['files'] = [];
        this.model.serviceCharge = '8.33';
        this.model.guaranteePeriod = '3 months';
        this.model.creditPeriod = '1 month';
        this.model.phone = '+91';
    }
    private clientContactDeclare() {
        this.model.clientContacts = [{ 'fullname': '', 'email': '', 'phone': '+91' }];
    }
    public dblSetModel() {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action=null;
    }
    private enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    public setModel(id) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action=null;
    }
    private getById(id) {
        this.spinner(false);
        const temp = this.http.get(this.urlConstants.ClientGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if (this.model.properties == null) {
                this.model.properties = [];
            }
            this.spinner(true);
        });
    }
    private mapToUpdateModel(response) {
        const temp = response;
        this.model = temp;
        return this.model;
    }
    private formReset() {
        this.model = <ClientModel>{properties : []};
        this.model.serviceCharge = '8.33';
        this.model.guaranteePeriod = '3 months';
        this.model.creditPeriod = '1 month';
        this.model.phone = '+91';
    }
    public create(clientForm: NgForm): void {
        this.isCreate = true;
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.ClientCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client');
            this.init();
            this.formReset();
            clientForm.resetForm();
            this.clientContactDeclare();
            this.spinner(true);
            this.isCreate= false;
        }, err => {
            this.toastr.error(err.error.message, 'Client');
            this.isCreate= false;
            this.spinner(true);
        });
    }
    public update(clientForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.ClientUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client');
            this.init();
            clientForm.resetForm();
            this.clientContactDeclare();
            this.spinner(true);

            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client');
            this.spinner(true);
        });
    }
    public cancelForm(consultantCallHistory: NgForm) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.clientContactDeclare();
    }
    public clientContactListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.model.clientContacts.splice(i, 1);
                break;
            }
            case 'increase': {
                this.model.clientContacts.push({ 'fullname': '', 'email': '', 'phone': '+91' });
                break;
            }
        }
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
    public actions(value,trashContent,uploadContent,downloadContent,form){
        switch(value){
          case 'Delete':{
            this.open(this.model.id,trashContent);
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
    public billngAddressMatch() {
        if (this.address === true) {
            this.model.billingAddress = this.model.address;
        } else {
            this.model.billingAddress = '';
        }
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.ClientDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            this.init();
            this.close();
            this.formReset();
            this.spinner(true);
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client');
            this.spinner(true);
        });
    }
    public getFilesById(id: number) {
        this.spinner(false);
        this.http.get('/uploadFile/id?id=' + id).subscribe(resp => {
            this.fileList.push(resp);
            this.spinner(true);
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any, content:any) {
        this.selectedRecrdToDel = 0;
        if (event) {
            this.selectedRecrdToDel = event;
        }
        // if (event.type === this.download) {
        //     // this.getFilesById(this.selectedRecrdToDel); TODO:Need to fix for multiple downloads
        //     this.http.get('file/download?refType=Client&refId=' + this.selectedRecrdToDel).subscribe(resp => {
        //     }, err => {
        //         if (err.status == 200)
        //             window.open(err.url);
        //     });
        // } else {
            this.modalRef = this.modalService.open(content);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        //}

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
    /**Download file */
    public downloadFile(id:number){
        this.http.get(this.urlConstants.FileDownload + id).subscribe(resp => {
                }, err => {
                    if (err.status == 200)
                        window.open(err.url);
                });
    }
    /** Upload documents of respective consultant */
    public uploadFiles() {
        const files = this.getFiles();
        const formData = new FormData();
        formData.append('file', files[0].rawFile, files[0].name);
        const params = 'refId=' + this.selectedRecrdToDel + '&refType=Client&comments=' + this.comments;
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
    public transformTitleCase(ip: HTMLInputElement) {
        let temp = ip.value.length === 0 ? '' :
            ip.value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        ip.value = temp;
    }
    private spinner(isSpinner: boolean){
        this.listReturned = isSpinner;
      }
}
