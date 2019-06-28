import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel, Roles, ActionsList } from './recruiter.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss'],
  animations: [routerTransition()]
})
export class RecruiterComponent implements OnInit {
  public recruiterModel: RecruiterModel = <RecruiterModel>{};
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public recruiterList: Array<RecruiterModel> = [];
  public rolesModel = new Roles();
  public rolesList: any = [];
  public urlConstants = new URLConstants();
  
  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action:string = null;
  
  public isCreate: boolean = false;
  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public genderList = ['Male', 'Female', 'Other'];
  public currSearchTxt: string;
  public trash = 'trash';
  public screenHeight: any;
  public readOnlyForm = '';
  public enableButtonType = '';
  public apName = '';
  public apValue = '';

  constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
  }
  ngOnInit() {
    this.init();
    this.rolesList = this.rolesModel.roles;
  }
  init() {
    this.http.get(this.urlConstants.RGetAll).subscribe(resp => {
      this.recruiterList = resp as any;
    });

    this.recruiterModel.properties = [];
    this.recruiterModel['phone'] = '+91';
  }
  recruiterEdit(data) {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action=null;
  }
  enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  readOnlyEnable(id: number) {
    this.getById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action=null;
  }
  getById(id) {
    const temp = this.http.get(this.urlConstants.RGetById + id);
    temp.subscribe(resp => {
      this.recruiterModel = this.mapToUpdateModel(resp);
      
      if(this.recruiterModel.properties == null){
        this.recruiterModel.properties = [];
      }
    });
  }
  mapToUpdateModel(response) {
    const temp = response;
    this.recruiterModel = temp;
    return this.recruiterModel;
  }
  additionalPropertiesDeclare() {
    this.recruiterModel.properties = [<AdditionalPropertiesModel>{}];
    this.recruiterModel['phone'] = '+91';
  }
  propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.recruiterModel.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.recruiterModel.properties.push(
            <AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue }
        );
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
        this.open(this.recruiterModel.id,trashContent);
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
    this.recruiterModel = <RecruiterModel>{properties: []};
  }
  createRecruiter(recruiterForm: NgForm): void {
    this.isCreate=true;
    const temp = this.http.post(this.recruiterModel, this.urlConstants.RCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Recruiter');
        this.init();
        this.formReset();
        recruiterForm.resetForm();
      },
      err => {
        this.toastr.error(err.error.message + err.status, 'Recruiter');
      }
    );
  }
  updateRecruiter(recruiterForm: NgForm) {
    const temp = this.http.update(this.recruiterModel, this.urlConstants.RUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.UpdateMsg, 'Recruiter');
        this.init();
        this.formReset();
        recruiterForm.resetForm();

        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Recruiter');
      }
    );
  }
  cancelForm(recruiterForm: NgForm) {
    recruiterForm.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  deleteRecruiterRecord(): void {
    const temp = this.http.delete(this.urlConstants.RDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        const response: any = resp;
        this.toastr.success(response.message, 'Recruiter');
        this.close();
        this.init();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Recruiter');
      }
    );
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
  open(event: any, content: any) {
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
