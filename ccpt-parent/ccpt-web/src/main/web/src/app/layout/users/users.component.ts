import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {  UsersModel, UserRoles } from './users.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
    public usersModel: UsersModel = <UsersModel>{};
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
    private modalRef: NgbModalRef;
    public trash:string = 'trash';

    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }

    ngOnInit() {
        this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
            this.getAllR = resp as any;
        });
        this.init();
        this.additionalPropertiesDeclare();
        this.rolesList = this.rolesModel.roles;

    }
    init() {
        this.http.get(this.urlConstants.UserGetAll).subscribe(resp => {
            this.usersList = resp as any;
        });
    }
    editUser(data) {
        this.usersModel = JSON.parse(JSON.stringify(data));
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getUserById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    getUserById(id: number) {
        this.http.get(this.urlConstants.UserGetById + id).subscribe(resp => {
        this.usersModel = this.mapToUpdateModel(resp);
        const temp = resp as any;
        if (temp.properties == null) {
            this.additionalPropertiesDeclare();
        }
        });
    }
    mapToUpdateModel(response): UsersModel {
        const temp = response;
        this.usersModel = temp;
        return this.usersModel;
    }
    additionalPropertiesDeclare() {
        this.usersModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.usersModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.usersModel.properties.push(<AdditionalPropertiesModel>{});
                break;
            }
        }
    }
    formReset() {
        this.usersModel = <UsersModel>{};
    }
    createUser(usersForm: NgForm): void {
        this.http.post(this.usersModel, this.urlConstants.UserCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'User');
            usersForm.resetForm();
            this.init();
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Users');
        });
    }
    updateUsers(usersForm: NgForm): void {
        this.http.update(this.usersModel, this.urlConstants.UserUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'User');
            this.init();
            usersForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'User' );
        });
    }
    deleteUserRecord(): void {
        this.http.delete(this.urlConstants.UserDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'User');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.error.message, 'User' );
        });
    }
    cancelForm(usersForm: NgForm) {
        usersForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();
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
