import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel } from './client.model';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';



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
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    }
    ngOnInit() {
        this.clientContactDeclare();
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
        });
    }
    clientContactDeclare() {
        this.clientModel.clientContacts = [{ 'fullname': '', 'email': '', 'phone': '' }];
    }
    editClient(data) {
        this.clientModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(data) {
        this.clientModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    formReset() {
        this.clientModel = <ClientModel>{};
    }
    clientCreate(clientForm: NgForm): void {
        this.http.post(this.clientModel, this.urlConstants.ClientCreate).subscribe(resp => {
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
        this.http.update(this.clientModel, this.urlConstants.ClientUpdate).subscribe(resp => {
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
    billngAddressMatch() {
        if (this.address === true) {
            this.clientModel.billingAddress = this.clientModel.address;
        } else {
            this.clientModel.billingAddress = '';
        }
    }
    deleteClientRecord(): void {
        this.http.delete(this.urlConstants.OCDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Client');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'Client');
        });
    }
    getFilesById() {
        this.http.get('/uploadFile/id?id=' + 3).subscribe(resp => {
            this.fileList.push(resp);
            console.log(this.fileList);
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number) {
        if (selected) {
            this.selectedRecrdToDel = selected;
        }
        this.modalRef = this.modalService.open(content);
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
            console.log("resp =====", resp);
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
