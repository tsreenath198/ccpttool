import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { OtherContactsModel } from './other-contacts.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'app-other-contacts',
    templateUrl: './other-contacts.component.html',
    styleUrls: ['./other-contacts.component.scss'],
    animations: [routerTransition()]
})
export class OtherContactsComponent implements OnInit {

    public OCModel: OtherContactsModel = <OtherContactsModel>{};
    public OCList: any = [];
    private urlConstants = new URLConstants();
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';

    protected screenHeight: any;
    private selectedRecrdToDel = 0;
    public closeResult = '';
    public trash = 'trash';
    protected apName = '';
    protected apValue = '';
    private modalRef: NgbModalRef;
    protected config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
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
        this.init();
    }
    init() {
        this.http.get(this.urlConstants.OCGetAll).subscribe(resp => {
            this.OCList = resp as any;
            this.OCList.forEach(cl => {
                if (this.validate(cl.name) || this.validate(cl.email) || this.validate(cl.phone)) {
                    cl['isProfileCompleted'] = false;
                } else {
                    cl['isProfileCompleted'] = true;
                }
            });
        });
    this.OCModel.properties = [];
    this.OCModel['phone'] = '+91';
    }
    private validate(value: any): boolean {
        const bool = (value == null) ? true : false;
        return bool;
    }
    edit() {
        this.readOnlyForm = 'U';
        this.config.editable = true;
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {

        this.readOnlyForm = 'U';
        this.config.editable = true;
        this.enableButtonType = 'U';
    }

    readOnlyEnable(id) {
        this.getById(id);
        this.readOnlyForm = 'R';
        this.config.editable = false;
        this.enableButtonType = 'E';
    }
    getById(id) {
        const temp = this.http.get(this.urlConstants.OCGetById + id);
        temp.subscribe(resp => {
            this.OCModel = this.mapToUpdateModel(resp);
            // tslint:disable-next-line:no-shadowed-variable
             if (this.OCModel.properties == null) {
                    this.OCModel.properties = [];
                }
            });
    }
    mapToUpdateModel(response) {
        const temp = response;
        this.OCModel = temp;
        return this.OCModel;
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
              this.OCModel.properties.splice(i, 1);
              break;
            }
            case 'increase': {
              this.OCModel.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
              this.apName = '';
              this.apValue = '';
              break;
            }
          }
    }
    formReset() {
        this.OCModel = <OtherContactsModel>{}; 
        this.OCModel.properties = [];
        this.OCModel['phone'] = '+91';
    }
    create(otherContactForm: NgForm): void {
        const temp = this.http.post(this.OCModel, this.urlConstants.OCCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Contact');
            this.init();
            this.formReset();
            otherContactForm.resetForm();
        }, err => {
            this.toastr.error(err.error.message, 'Contact');
        });
    }
    update(otherContactForm: NgForm) {
        const temp = this.http.update(this.OCModel, this.urlConstants.OCUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Contact ');
            this.init();
            otherContactForm.resetForm();
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
        const temp = this.http.delete(this.urlConstants.OCDelete + this.selectedRecrdToDel);
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
    transformTitleCase(ip: HTMLInputElement) {
        let temp = ip.value.length === 0 ? '' :
            ip.value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        ip.value = temp;
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
