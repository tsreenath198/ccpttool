import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel, Roles, ActionsList } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss'],
  animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
  public model: RecruiterModel = <RecruiterModel>{};
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public recruiterList: Array<RecruiterModel> = [];
  public rolesModel = new Roles();
  public rolesList: any = [];
  public urlConstants = new URLConstants();
  public properties = new Properties();

  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string = null;

  public isCreate: boolean = false;
  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public genderList = ['Male', 'Female', 'Other'];
  public currSearchTxt: string;
  public screenHeight: any;
  public readOnlyForm = '';
  public enableButtonType = '';
  public apName = '';
  public apValue = '';
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
    this.rolesList = this.rolesModel.roles;
  }
  init() {
    this.spinner(false);
    this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
      this.recruiterList = resp as any;
      this.spinner(true);
    });

    this.model.properties = [];
    this.model['phone'] = '+91';
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
    this.getById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getById(id) {
    const temp = this.http.get(this.urlConstants.RGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      this.spinner(true);
      if (this.model.properties == null) {
        this.model.properties = [];
      }
    });
  }
  private mapToUpdateModel(response) {
    const temp = response;
    this.model = temp;
    return this.model;
  }
  public additionalPropertiesDeclare() {
    this.model.properties = [<AdditionalPropertiesModel>{}];
    this.model['phone'] = '+91';
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
    this.model = <RecruiterModel>{ properties: [] };
  }
  public create(recruiterForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    const temp = this.http.post(this.model, this.urlConstants.RCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.RECRUITER);
        this.init();
        this.formReset();
        recruiterForm.resetForm();
        this.isCreate = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message + err.status, this.properties.RECRUITER);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  public update(recruiterForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.RUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.UPDATE, this.properties.RECRUITER);
        this.init();
        this.formReset();
        recruiterForm.resetForm();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, this.properties.RECRUITER);
        this.spinner(true);
      }
    );
  }
  public cancelForm(recruiterForm: NgForm) {
    recruiterForm.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.RDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        const response: any = resp;
        this.toastr.success(response.message, this.properties.RECRUITER);
        this.close();
        this.init();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.RECRUITER);
        this.spinner(true);
      }
    );
  }
  public transformTitleCase(ip: HTMLInputElement) {
    let temp = ip.value.length === 0 ? '' :
      ip.value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
    ip.value = temp;
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
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
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
