import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaymentsModel, ActionsList } from './payments.model';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
    animations: [routerTransition()]
})
export class PaymentsComponent implements OnInit {

    public model: PaymentsModel = <PaymentsModel>{};
    public paymentsList: any = [];
    public clientApplicationList: Array<any> = [];
    public consultantList: Array<any> = [];
    private urlConstants = new URLConstants();
    public properties = new Properties();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    public caId = 0;
    public screenHeight: any;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    public apName = '';
    public apValue = '';
    public comments = '';
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public uploader: FileUploader = new FileUploader({});
    public action: string = null;
    private modalRef: NgbModalRef;
    private getAllCA = this.http.get(this.urlConstants.CAJobConfirmed);
    public listReturned: boolean;
     public paginateConfig :any={
       itemsPerPage: this.properties.ITEMSPERPAGE,
       currentPage: 1,
       totalItems: 0
     }
    constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
    }
    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(['/login']);
        }
        this.init();
        this.initialGetAll(); 
        this.spinner(true);
        this.getAllDropdowns();
    }
    init() {
        // this.spinner(false);
        // this.http.get(this.urlConstants.PaymentGetAll).subscribe(resp => {
        //     this.paymentsList = resp as any;
        //     this.spinner(true);
        // });
        this.getTodaysDate();
        this.setDefaultValues();
        this.model.properties = [];
        this.model.files=[];
    }
    public initialGetAll(){
        let pageNumber = this.paginateConfig.currentPage-1
        let temp=this.http.get(this.urlConstants.PaymentGetAll+ pageNumber + "&pageSize=50&sortBy=id");
        temp.subscribe(resp => {
          this.paymentsList = resp as any;
          //this.pageChange(this.page);
          this.paginateConfig.totalItems = this.paymentsList.noOfRecords
        });
      }
    getAllDropdowns() {
        this.spinner(false);
        forkJoin(
            this.getAllCA,
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.clientApplicationList = listofrecords[0] as any;
            this.spinner(true);
        });
    }
    private validate(value: any): boolean {
        const bool = (value == null) ? true : false;
        return bool;
    }
    private setDefaultValues(){
        this.model.branchHeadName = this.properties.HEAD;
        this.model.phone = this.properties.PHONE;
        this.model.branchLocation = this.properties.LOCATION;
        this.model.paidStatus=this.properties.PAYMENT_STATUS[1];
    }
    private getTodaysDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        const temp = yyyy + '-' + mm + '-' + dd;
        this.model.invoiceDate = temp;
        this.model.joiningDate = temp;
    }
    public setJoiningDate(){
        this.model.joiningDate = this.model.invoiceDate;
    }
    public dblSetModel() {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action = null;
    }
    enableFormEditable(): void {

        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }

    public setModel(id) {
        this.spinner(false);
        this.getById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getById(id) {
        const temp = this.http.get(this.urlConstants.PaymentGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            this.spinner(true);
            if (this.model.properties == null) {
                this.model.properties = [];
            }
        });
    }
    public getCPDetails(caId) {
        this.spinner(false);
        this.http.get(this.urlConstants.CAGetById + caId).subscribe(resp => {
            let temp = resp as any;
            this.model.companyName = temp.clientPosition.client.name;
            this.model.companyWebsite = temp.clientPosition.client.website;
            this.model.companyGstNum = temp.clientPosition.client.gst;
            this.model.creditPeriod = temp.clientPosition.client.creditPeriod;
            this.model.gauranteePeriod = temp.clientPosition.client.guaranteePeriod;
            this.model.contactPerson = temp.clientPosition.client.clientContacts[0].fullname;
            this.model.contactPersonNum = temp.clientPosition.client.clientContacts[0].phone;
            this.model.contactPersonEmail = temp.clientPosition.client.clientContacts[0].email;
            this.model.designation = temp.clientPosition.role;
            this.model.billingAddress = temp.clientPosition.client.billingAddress;
            this.model.serviceCharge = temp.clientPosition.client.serviceCharge;
            this.model.candidateName = temp.consultant.fullname
            this.spinner(true);
        })
    }
    private mapToUpdateModel(response) {
        const temp = response;
        this.model = temp;
        return this.model;
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
                    let propertyExist :boolean;
                    for(let i=0; i<this.model.properties.length; i++){
                        if(this.model.properties[i].name==this.apName&&this.model.properties[i].value==this.apValue){
                            propertyExist = true;
                        }
                        else{
                            propertyExist = false;
                        }
                    }
                    if(propertyExist){
                        this.toastr.error(this.properties.PROPERTY_EXIST, this.properties.PROPERTIES);
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
    public actions(value, trashContent, form) {
        console.log(value);
        switch (value) {
            case 'Delete': {
                this.open(this.model.id, trashContent);
                break;
            }
            case 'Edit': {
                this.enableFormEditable();
                break;
            }
            case 'Close': {
                this.cancelForm(form);
            }
        }
    }
    private formReset() {
        this.model = <PaymentsModel>{ properties: [] };
    }
    public create(paymentsForm: NgForm): void {
        this.spinner(false);
        const temp = this.http.post(this.model, this.urlConstants.PaymentCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.CREATE, this.properties.CONTACT);
            this.init();
            this.formReset();
            paymentsForm.resetForm();
            this.paginateConfig.currentPage=1;
            this.initialGetAll();
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, this.properties.CONTACT);
            this.spinner(true);
        });
    }
    public update(paymentsForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.PaymentUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.properties.UPDATE, this.properties.CONTACT);
            this.init();
            paymentsForm.resetForm();
            this.initialGetAll();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, this.properties.CONTACT);
            this.spinner(true);
        });
    }
    public cancelForm(consultantCallHistory: NgForm) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.init();
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.PaymentDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.properties.DELETE, this.properties.CONTACT);
            this.init();
            this.close();
            this.formReset();
            this.initialGetAll();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, this.properties.CONTACT);
            this.spinner(true);
        });
    }
    /** Get Uploaded files */
  private getFiles(): FileLikeObject[] {
    return this.uploader.queue.map(fileItem => {
      return fileItem.file;
    });
  }
  /**Download file */
  public downloadFile(id: number) {
    this.http.get(this.urlConstants.FileDownload + id).subscribe(
      resp => { },
      err => {
        if (err.status == 200) window.open(err.url);
      }
    );
  }
  /** Upload documents of respective consultant */
  public uploadFiles() {
    const files = this.getFiles();
    const formData = new FormData();
    formData.append('file', files[0].rawFile, files[0].name);
    const params = 'refId=' + this.selectedRecrdToDel + '&refType=Payment&comments=' + this.comments;
    this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(
      resp => {
        let temp: any = resp;
        this.uploader=new FileUploader({});
        this.toastr.success(temp.message, 'Client');
        this.close();
      },
      err => {
        this.toastr.success(err.error.message, 'Client');
      }
    );
  }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    public open(event: any, content: any) {
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
    private spinner(isSpinner: boolean) {
        this.listReturned = isSpinner;
    }
    /**Download file */
  public downloadBif() {
    this.http.get(this.urlConstants.PaymentGetExcel + this.model.id).subscribe(
      resp => { },
      err => {
        if (err.status == 200) window.open(err.url);
      }
    );
  }
}
