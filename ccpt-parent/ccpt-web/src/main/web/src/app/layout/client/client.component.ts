import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel } from './client.model';
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

    private selectedRecrdToDel = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;
    protected screenHeight: any;
    public download = 'download';
    public trash = 'trash';
    public upload = 'upload';
    protected apName = '';
    protected apValue = '';
    public loggedInRole = '';
    protected config: AngularEditorConfig = {
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
    }
    clientContactDeclare() {
        this.clientModel.clientContacts = [{ 'fullname': '', 'email': '', 'phone': '' }];
    }
    editClient(data) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getById(id) {
        const temp = this.http.get(this.urlConstants.ClientGetById + id);
        temp.subscribe(resp => {
            this.clientModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
            if(this.clientModel.properties == null){
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
        this.clientModel = <ClientModel>{};
    }
    clientCreate(clientForm: NgForm): void {
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
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
    }
    cancelForm(consultantCallHistory: NgForm) {
        this.formReset();
        consultantCallHistory.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
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
        }, err => {
            if (err.status === 200) {
                this.init();
                this.close();
                this.formReset();
                return this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            }
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
    open(event: any) {
        this.selectedRecrdToDel = 0;
        if (event.id) {
            this.selectedRecrdToDel = event.id;
        }
        if (event.type === this.download) {
            this.getFilesById(this.selectedRecrdToDel);
        }
        this.modalRef = this.modalService.open(event.content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
        const params = 'refId=' + this.selectedRecrdToDel + '&refType= Consultant &comments=' + this.comments;
        this.http.upload('file/create?' + params, formData).subscribe(resp => {
            console.log('resp =====', resp);
            this.close();
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
