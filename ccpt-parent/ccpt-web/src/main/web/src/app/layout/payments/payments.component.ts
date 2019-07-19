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
import { Router } from '@angular/router';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
    animations: [routerTransition()]
})
export class PaymentsComponent implements OnInit {

    public model: PaymentsModel = <PaymentsModel>{};
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
    public apName = '';
    public apValue = '';
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    private modalRef: NgbModalRef;
    private getAllCP = this.http.get(this.urlConstants.CPDropdown);
    private getAllC = this.http.get(this.urlConstants.CDropdown);
    public listReturned: boolean;

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
        this.getAllDropdowns();
    }
    init() {
        this.spinner(false);
        this.http.get(this.urlConstants.PaymentGetAll).subscribe(resp => {
            this.paymentsList = resp as any;
            this.spinner(true);
        });
        this.getTodaysDate();
        this.model.properties = [];
    }
    getAllDropdowns() {
        this.spinner(false);
        forkJoin(
            this.getAllC,
            this.getAllCP,
            // forkJoin on works for observables that complete
        ).subscribe(listofrecords => {
            this.consultantList = listofrecords[0] as any;
            this.clientPositionList = listofrecords[1] as any;
            this.spinner(true);
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
        const temp = yyyy + '-' + mm + '-' + dd;
        this.model.invoiceDate = temp;
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
    public getCPDetails(cpId) {
        this.spinner(false);
        this.http.get(this.urlConstants.CPGetById + cpId).subscribe(resp => {
            let temp = resp as any;
            this.model.companyName = temp.client.name;
            this.model.companyWebsite = temp.client.website;
            this.model.companyGstNum = temp.client.gst;
            this.model.creditPeriod = temp.client.creditPeriod;
            this.model.gauranteePeriod = temp.client.guaranteePeriod;
            this.model.contactPerson = temp.client.clientContacts[0].fullname;
            this.model.contactPersonNum = temp.client.clientContacts[0].phone;
            this.model.contactPersonEmail = temp.client.clientContacts[0].email;
            this.model.designation = temp.role;
            this.model.billingAddress = temp.client.billingAddress;
            this.model.serviceCharge = temp.client.serviceCharge;
            this.spinner(true);
        })
    }
    public getConsultantDetails() {
        let id = 0;
        for (let i = 0; i < this.consultantList.length; i++) {
            if (this.model.candidateName == this.consultantList[i].name) {
                id = this.consultantList[i].id;
            }
        }
        this.http.get(this.urlConstants.CGetById + id).subscribe(resp => {
            let temp = resp as any;
            this.model.phone = temp.phone;
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
            this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
            this.init();
            this.formReset();
            paymentsForm.resetForm();
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
            this.spinner(true);
        });
    }
    public update(paymentsForm: NgForm) {
        this.spinner(false);
        const temp = this.http.update(this.model, this.urlConstants.PaymentUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Contact ');
            this.init();
            paymentsForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
            this.spinner(true);
        });
    }
    public cancelForm(consultantCallHistory: NgForm) {
        consultantCallHistory.resetForm();
        this.formReset();
        this.init();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
    }
    public trash(): void {
        this.spinner(false);
        const temp = this.http.delete(this.urlConstants.PaymentDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Contact');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
            this.spinner(true);
        });
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
}
