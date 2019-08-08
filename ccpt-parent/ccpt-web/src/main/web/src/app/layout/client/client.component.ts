import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientModel, ClientContactsModel, ActionsList } from './client.model';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '@angular/router';
import { StorageService, HttpClientService, ToastrCustomService } from '../../shared/services';



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

    constructor(private http: HttpClientService, 
        private toastr: ToastrCustomService, 
        private modalService: NgbModal, 
        private router: Router,
        private storageService:StorageService) {
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
        this.setClientContactModel();
        this.init();
        this.storageService.clientId= null
    }
    init() {
        this.spinner(false);
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp => {
            this.clientList = resp as any;
            this.spinner(true);
        });
        this.model.properties = [];
        this.model.files = [];
        this.model.serviceCharge = '8.33';
        this.model.guaranteePeriod = '3 months';
        this.model.creditPeriod = '1 month';
        this.model.phone = '+91';
    }
    private setClientContactModel() {
        this.model.clientContacts = [{ 'fullname': '', 'email': '', 'phone': '+91' }];
    }
    private editForm(): void {
        this.readOnlyForm = '';
        this.enableButtonType = 'U';
    }
    public setModel(id) {
        this.getById(id);
        this.readOnlyForm = 'U';
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
            this.successHandle();
            clientForm.resetForm();
            this.setClientContactModel();
            this.isCreate= false;
            this.addCP(resp);
        }, err => {
            this.errorHandle(err);
            this.isCreate= false;
        });
    }
    private successHandle(){
        this.toastr.success(this.urlConstants.SuccessMsg, 'Client');
            this.init();
            this.formReset();
            this.spinner(true);
    }
    private addCP(resp : any){
        let decision = confirm("Do you want to create an application");
        if(decision== true){
          /**set consultant id in storage service*/
          this.storageService.clientId = resp.id;
            this.router.navigate(['/layout/client-position'])
        }
      }
    public update(clientForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.ClientUpdate);
        temp.subscribe(resp => {
            this.successHandle()
            this.setClientContactModel();
            clientForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.errorHandle(err);
        });
    }
    public emptyForm(cchForm: NgForm) {
        cchForm.resetForm();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.setClientContactModel();
    }
    public contactListIncrement(event, i: number) {
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
                if(this.model.properties.length==0){
                    this.model.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });      
                    this.apName = '';
                    this.apValue = '';
                }
                else{
                    let propertyExist :any;
                    /**TODO: replace loop with filter(High) */
                   propertyExist= this.model.properties.filter(prop => prop.name==this.apName && prop.value==this.apValue)
                    if(propertyExist){
                        this.toastr.error('Property already exists', 'Properties');
                    }
                    else{ 
                        this.model.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });     
                        this.apName = '';
                        this.apValue = '';
                    }
                }
                break;
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
            this.successHandle();
            this.close();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.errorHandle(err);
        });
    }
    private errorHandle(err:any){
        this.toastr.error(err.error.message, 'Client');
        this.spinner(true);
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
            this.modalRef = this.modalService.open(content);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
