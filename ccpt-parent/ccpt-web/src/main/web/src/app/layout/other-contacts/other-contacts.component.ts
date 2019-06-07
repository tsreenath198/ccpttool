import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { OtherContactsModel } from './other-contacts.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-other-contacts',
    templateUrl: './other-contacts.component.html',
    styleUrls: ['./other-contacts.component.scss'],
    animations: [routerTransition()]
})
export class OtherContactsComponent implements OnInit {
    constructor(private http:HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }
    public OCModel:OtherContactsModel=<OtherContactsModel>{};
    public OCList:any=[];
    private urlConstants = new URLConstants();    
    public readOnlyForm: string = '';
    public enableButtonType: string = '';
    public currSearchTxt: string=''; 

    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    ngOnInit() {
        this.init();
    }
    init(){
        this.http.get(this.urlConstants.OCGetAll).subscribe(resp => {
            this.OCList = resp as any;
        })
    }
    edit(data) {
        this.OCModel = JSON.parse(JSON.stringify(data));;
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(data) {
        this.OCModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    formReset() {
        this.OCModel = <OtherContactsModel>{};
    }
    create(otherContactForm: NgForm): void {
        this.http.post(this.OCModel, this.urlConstants.OCCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, "Contact");
            this.init();
            this.formReset();
            otherContactForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, "Contact");
        });
    }
    update(otherContactForm: NgForm) {
        this.http.update(this.OCModel, this.urlConstants.OCUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, "Contact ");
            this.init();
            otherContactForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
        }, err => {
            this.toastr.error(err.statusText, "Contact");
        })
    }
    cancelForm(consultantCallHistory: NgForm) {
        this.formReset();
        consultantCallHistory.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = ''; 
    }
    delete(): void {
        this.http.delete(this.urlConstants.OCDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, "Client");
            this.init();
            this.close();
            this.formReset();
        })
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
}
