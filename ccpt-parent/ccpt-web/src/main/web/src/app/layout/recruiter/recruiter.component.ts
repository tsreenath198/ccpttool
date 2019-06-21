import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterModel, Roles } from './recruiter.model';
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
  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public genderList = ['Male', 'Female', 'Other'];
  public currSearchTxt: string;
  public trash = 'trash';
  protected screenHeight: any;
  public readOnlyForm = '';
  public enableButtonType = '';
  protected apName = '';
  protected apValue = '';

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
  }
  recruiterEdit(data) {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  readOnlyEnable(id: number) {
    this.getById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
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
  formReset() {
    this.recruiterModel = <RecruiterModel>{};
  }
  createRecruiter(recruiterForm: NgForm): void {
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
      },
      err => {
        this.toastr.error(err.error.message, 'Recruiter');
      }
    );
  }
  cancelForm(recruiterForm: NgForm) {
    this.formReset();
    recruiterForm.resetForm();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
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
      },
      err => {
        this.toastr.error(err.error.message, 'Recruiter');
      }
    );
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
