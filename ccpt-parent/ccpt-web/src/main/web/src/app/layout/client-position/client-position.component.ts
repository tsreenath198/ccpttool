import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from './client-position.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientpositionStatusModel } from '../client-position-status/client-position-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';


@Component({
    selector: 'app-client-position',
    templateUrl: './client-position.component.html',
    styleUrls: ['./client-position.component.scss'],
    animations: [routerTransition()]
})
export class ClientPositionComponent implements OnInit {
    public clientPositionModel: ClientPositionModel = <ClientPositionModel>{};
    public clientPositionList: Array<ClientPositionModel> = [];
    public clientPositionStatusList: Array<ClientpositionStatusModel> = [];
    public clientList:Array<ClientModel>=[];
    public formButtonsToggler: boolean = true;
    public editButtonToggler: boolean = true;
    public invalidAppCode: boolean = false;
    
    private selectedRecrdToDel: number = 0;
    public closeResult: string = '';
    private modalRef: NgbModalRef;
    public urlConstants = new URLConstants();
    public currSearchTxt: string ;
    public readOnlyForm: string = '';
    public enableButtonType: string = '';
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CPSGetAll).subscribe(resp => {
            this.clientPositionStatusList = resp as any;
        });
        this.http.get(this.urlConstants.ClientGetAll).subscribe(resp=>{
            this.clientList=resp as any;
        })
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.CPGetAll).subscribe(resp => {
            this.clientPositionList = resp as any;
        })
    }
    editClientPosition(data) {
        this.clientPositionModel = JSON.parse(JSON.stringify(data));;
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(data) {
        this.clientPositionModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    formReset() {
        this.clientPositionModel = <ClientPositionModel>{};
    }
    createClientPosition(clientPositionForm:NgForm): void {
        if (this.clientPositionModel.clientPositionCode) {
            this.validateCPCode(this.clientPositionModel.clientPositionCode);
        }
        if (!this.invalidAppCode) {
            this.http.create(this.clientPositionModel, this.urlConstants.CPCreate).subscribe(resp => {
                this.toastr.success("Form Submitted Successfully", "Client Position");
                this.init();
                this.formReset();
                clientPositionForm.resetForm();
            }, err => {
                this.toastr.error(err.statusText, "Client Position");
            })
        }
    }
    /** Validate Client Position Code */
    private validateCPCode(code: string): void {
        let arr = code.split("-");
        if (arr.length === 4 && this.containsOnlyDigits(arr[0]) && arr[3].length === 3) {
            for (var i = 1; i < arr.length - 1; i++) {
                if (!this.containsOnlyAlphabets(arr[i])) {
                    this.invalidAppCode = true;
                    return
                } else {
                    this.invalidAppCode = false;
                }
            }
        } else {
            this.invalidAppCode = true;
        }
    }

    /** Check contains Only Digits */
    private containsOnlyDigits(code): boolean {
        let isnum = /^\d+$/.test(code);
        return isnum
    }
    /** Check contains Only alphabets */
    private containsOnlyAlphabets(code): boolean {
        let isStr = /^[a-zA-Z]+$/.test(code)
        if (isStr === false) {
            return false
        }
        return isStr
    }
    updateClientPosition(clientPositionForm:NgForm) {
        this.http.update(this.clientPositionModel, this.urlConstants.CPUpdate).subscribe(resp => {
            this.toastr.success("Form Updated Successfully", "Client Position");
            this.formReset();
            this.init();
            clientPositionForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';

        }, err => {
            this.toastr.error(err.statusText, "Client Position");
        })
    }
    cancelForm(clientPositionForm:NgForm) {
        this.formReset();
        clientPositionForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';

    }
    deleteCPRecord(): void {
        this.http.delete(this.urlConstants.CPDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success("Record Deleted Successfully", "Client Position");
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
