import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PaymentsModel } from './payments.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss'],
    animations: [routerTransition()]
})
export class PaymentsComponent implements OnInit {

    public paymentModel: PaymentsModel = <PaymentsModel>{};
    public paymentsList: any = [];
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';

    public screenHeight: any;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    public trash = 'trash';
    public apName = '';
    public apValue = '';
    private modalRef: NgbModalRef;

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
        this.getScreenSize();
     }
     @HostListener('window:resize', ['$event'])
     getScreenSize(event?) {
           this.screenHeight = window.innerHeight;
     }
    ngOnInit() {
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.PaymentGetAll).subscribe(resp => {
            this.paymentsList = resp as any;
        });
    this.paymentModel.properties = [];
    }
    private validate(value: any): boolean {
        const bool = (value == null) ? true : false;
        return bool;
    }
    edit() {
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
        const temp = this.http.get(this.urlConstants.PaymentGetById + id);
        temp.subscribe(resp => {
            this.paymentModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
             if (this.paymentModel.properties == null) {
                    this.paymentModel.properties = [];
                }
            });
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
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(event: any) {
        if (event.id) {
            this.selectedRecrdToDel = event.id;
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
}
