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



@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
    public clientModel: ClientModel = <ClientModel>{};
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
    public trash = 'trash';
    public upload = 'upload';
    public apName = '';
    public apValue = '';
    public loggedInRole = '';
    public isCreate: boolean = false;
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        translate: 'no'
    };

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        this.loggedInRole = sessionStorage.getItem('role');
        this.clientContactDeclare();
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
        });
        this.clientModel.properties = [];
        this.clientModel.serviceCharge = '8.33';
        this.clientModel.guaranteePeriod = '3 months';
        this.clientModel.creditPeriod = '1 month';
        this.clientModel.phone = '+91';
    }
    clientContactDeclare() {
        this.clientModel.clientContacts = [{ 'fullname': '', 'email': '', 'phone': '' }];
    }
    editClient(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action=null;
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action=null;
    }
    getById(id) {
        const temp = this.http.get(this.urlConstants.ClientGetById + id);
        temp.subscribe(resp => {
            this.clientModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if (this.clientModel.properties == null) {
                this.clientModel.properties = [];
            }
        });
    }
    mapToUpdateModel(response) {
        const temp = response;
        this.clientModel = temp;
        return this.clientModel;
    }
    formReset() {
        this.clientModel = <ClientModel>{properties : []};
        this.clientModel.serviceCharge = '8.33';
        this.clientModel.guaranteePeriod = '3 months';
        this.clientModel.creditPeriod = '1 month';
        this.clientModel.phone = '+91';
    }
    clientCreate(clientForm: NgForm): void {
        this.isCreate = true;
        const temp = this.http.post(this.clientModel, this.urlConstants.ClientCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Client');
            this.init();
            this.formReset();
            clientForm.resetForm();
            this.clientContactDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
    }
    updateClient(clientForm: NgForm) {
        const temp = this.http.update(this.clientModel, this.urlConstants.ClientUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Client');
            this.init();
            clientForm.resetForm();
            this.clientContactDeclare();

            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
    }
    cancelForm(consultantCallHistory: NgForm) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.clientContactDeclare();
    }
    clientContactListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.clientModel.clientContacts.splice(i, 1);
                break;
            }
            case 'increase': {
                this.clientModel.clientContacts.push({ 'fullname': '', 'email': '', 'phone': '' });
                break;
            }
        }
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.clientModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.clientModel.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
                this.apName = '';
                this.apValue = '';
                break;
            }
        }
    }
    actions(value,trashContent,uploadContent,downloadContent,form){
        switch(value){
          case 'Delete':{
            this.open(this.clientModel.id,trashContent);
            break;
          }
          case 'File Upload':{
            this.open(this.clientModel.id,uploadContent);
            break;
          }
          case 'File Download':{
            this.open(this.clientModel.id,downloadContent);
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
    billngAddressMatch() {
        if (this.address === true) {
            this.clientModel.billingAddress = this.clientModel.address;
        } else {
            this.clientModel.billingAddress = '';
        }
    }
    deleteClientRecord(): void {
        const temp = this.http.delete(this.urlConstants.ClientDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
    }
    getFilesById(id: number) {
        this.http.get('/uploadFile/id?id=' + id).subscribe(resp => {
            this.fileList.push(resp);
            console.log(this.fileList);
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any, content:any) {
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
    /**Download file */
    downloadFile(id:number){
        this.http.get(this.urlConstants.FileDownload + id).subscribe(resp => {
                }, err => {
                    if (err.status == 200)
                        window.open(err.url);
                });
    }
    /** Upload documents of respective consultant */
    uploadFiles() {
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
    transformTitleCase(ip: HTMLInputElement) {
        let temp = ip.value.length === 0 ? '' :
            ip.value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        ip.value = temp;
    }
}
