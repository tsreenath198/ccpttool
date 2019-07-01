import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaymentsModel, ActionsList } from './payments.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
    animations: [routerTransition()]
})
export class PaymentsComponent implements OnInit {

    public paymentModel: PaymentsModel = <PaymentsModel>{};
    public paymentsList: any = [];
    public clientPositionList: Array<any> = [];
    public consultantList: Array<any> = [];
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    public cpId = 0;
    public screenHeight: any;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    public trash = 'trash';
    public apName = '';
    public apValue = '';
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action:string = null;
    private modalRef: NgbModalRef;
    private getAllCP = this.http.get(this.urlConstants.CPDropdown);
    private getAllC = this.http.get(this.urlConstants.CDropdown);

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
     }
     @HostListener('window:resize', ['$event'])
     getScreenSize(event?) {
           this.screenHeight = window.innerHeight;
     }
    ngOnInit() {
        this.init();
        this.getAllDropdowns();
    }
    init() {
        this.http.get(this.urlConstants.PaymentGetAll).subscribe(resp => {
            this.paymentsList = resp as any;
        });
         this.getTodaysDate();
    this.paymentModel.properties = [];
    }
    getAllDropdowns() {
        forkJoin(
            this.getAllC,
            this.getAllCP,
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.consultantList = listofrecords[0] as any;
            this.clientPositionList = listofrecords[1] as any;
        });
    }
    private validate(value: any): boolean {
        const bool = (value == null) ? true : false;
        return bool;
    }
    getTodaysDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        const temp = yyyy + '-' + mm + '-' + dd ;
        this.paymentModel.invoiceDate = temp;
      }
    edit() {
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
        const temp = this.http.get(this.urlConstants.PaymentGetById + id);
        temp.subscribe(resp => {
            this.paymentModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
             if (this.paymentModel.properties == null) {
                    this.paymentModel.properties = [];
                }
            });
    }
    getCPDetails(cpId){
        this.http.get(this.urlConstants.CPGetById + cpId).subscribe(resp=>{
            let  temp = resp as any;
            this.paymentModel.companyName = temp.client.name;
            this.paymentModel.companyWebsite = temp.client.website;
            this.paymentModel.companyGstNum = temp.client.gst;
            this.paymentModel.creditPeriod = temp.client.creditPeriod;
            this.paymentModel.gauranteePeriod = temp.client.guaranteePeriod;
            this.paymentModel.contactPerson = temp.client.clientContacts[0].fullname;
            this.paymentModel.contactPersonNum = temp.client.clientContacts[0].phone;
            this.paymentModel.contactPersonEmail = temp.client.clientContacts[0].email;
            this.paymentModel.designation = temp.role;
            this.paymentModel.billingAddress = temp.client.billingAddress;
        })
    }
    getConsultantDetails(){
        let id=0;
        for(let i=0 ;i<this.consultantList.length;i++){
            if(this.paymentModel.candidateName == this.consultantList[i].name){
                id=this.consultantList[i].id;
            }
        }
        this.http.get(this.urlConstants.CGetById+id).subscribe(resp=>{
            let temp = resp as any;
            this.paymentModel.phone = temp.phone;
        })
    }
    mapToUpdateModel(response) {
        const temp = response;
        this.paymentModel = temp;
        return this.paymentModel;
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
              this.paymentModel.properties.splice(i, 1);
              break;
            }
            case 'increase': {
              this.paymentModel.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
              this.apName = '';
              this.apValue = '';
              break;
            }
          }
    }
    actions(value,trashContent,form){
        console.log(value);
        switch(value){
          case 'Delete':{
            this.open(this.paymentModel.id,trashContent);
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
    formReset() {
        this.paymentModel = <PaymentsModel>{properties: []};
    }
    create(paymentsForm: NgForm): void {
        const temp = this.http.post(this.paymentModel, this.urlConstants.PaymentCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
            this.init();
            this.formReset();
            paymentsForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
        });
    }
    update(paymentsForm: NgForm) {
        const temp = this.http.update(this.paymentModel, this.urlConstants.PaymentUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Contact ');
            this.init();
            paymentsForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
        });
    }
    cancelForm(consultantCallHistory: NgForm) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    delete(): void {
        const temp = this.http.delete(this.urlConstants.PaymentDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Contact');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any, content:any) {
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
}
