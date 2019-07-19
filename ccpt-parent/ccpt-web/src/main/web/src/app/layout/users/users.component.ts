import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UsersModel, UserRoles, ActionsList } from './users.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    public model: UsersModel = <UsersModel>{};
    public usersList: Array<UsersModel> = [];
    private urlConstants = new URLConstants();
    public rolesModel = new UserRoles();
    public rolesList: any = [];
    public getAllR: any;
    public readOnlyForm = '';
    public enableButtonType = '';
    public currSearchTxt = '';
    private selectedRecrdToDel = 0;
    public closeResult = '';
    public apName = '';
    public apValue = '';
    public isCreate: boolean = false;
    public showAction: boolean = false;
    public actionsList = new ActionsList();
    public action: string = null;
    private modalRef: NgbModalRef;
    public screenHeight: any;
    public viewPassword: boolean;
    public listReturned: boolean;

    constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService, private modalService: NgbModal,
        private el: ElementRef) {
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
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.getAllR = resp as any;
        });
        this.init();
        this.rolesList = this.rolesModel.roles;
        this.viewPassword = false;
    }
    private init() {
        this.spinner(false);
        this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
            this.usersList = resp as any;
            this.spinner(true);
        });
        this.model.properties = [];
    }
    public dblSetModel() {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
        this.showAction = true;
        this.action = null;
    }
    private enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    public setModel(id: number) {
        this.spinner(false);
        this.getUserById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
        this.showAction = true;
        this.action = null;
    }
    private getUserById(id: number) {
        let temp = this.http.get(this.urlConstants.UserGetById + id);
        temp.subscribe(resp => {
            this.model = this.mapToUpdateModel(resp);
            if (this.model.properties == null) {
                this.model.properties = [];
            }
            this.spinner(true);
        });
    }
    private mapToUpdateModel(response): UsersModel {
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
                this.model.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
                this.apName = '';
                this.apValue = '';
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
    public toogle(html: HTMLInputElement) {
        if (html.type === 'password') {
            html.type = 'text';
            this.viewPassword = true;
        } else {
            html.type = 'password';
            this.viewPassword = false;
        }

    }
    private formReset() {
        this.model = <UsersModel>{ properties: [] };
    }
    public create(usersForm: NgForm): void {
        this.spinner(false);
        this.isCreate = true;
        let temp = this.http.post(this.model, this.urlConstants.UserCreate);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'User');
            usersForm.resetForm();
            this.init();
            this.isCreate = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'Users');
            this.isCreate = false;
            this.spinner(true);
        });
    }
    public update(usersForm: NgForm): void {
        this.spinner(false);
        let temp = this.http.update(this.model, this.urlConstants.UserUpdate);
        temp.subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'User');
            this.init();
            usersForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'User');
            this.spinner(true);
        });
    }
    public trash(): void {
        this.spinner(false);
        let temp = this.http.delete(this.urlConstants.UserDelete + this.selectedRecrdToDel);
        temp.subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'User');
            this.init();
            this.close();
            this.formReset();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.showAction = false;
            this.spinner(true);
        }, err => {
            this.toastr.error(err.error.message, 'User');
            this.spinner(true);
        });
    }
    public cancelForm(usersForm: NgForm) {
        this.init();
        usersForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
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
