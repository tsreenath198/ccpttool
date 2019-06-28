import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantCallHistoryModel, ActionsList } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantModel } from '../consultant/consultant.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientPositionModel } from '../client-position/client-position.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-consultant-call-history',
  templateUrl: './consultant-call-history.component.html',
  styleUrls: ['./consultant-call-history.component.scss'],
  animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
  public consultantCallHistoryModel: ConsultantCallHistoryModel = <any>{};
  public consultantCallHistoryList: Array<any> = [];
  public currSearchTxt = '';
  public pagedConsultantList: Array<ConsultantCallHistoryModel> = [];
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public consultantList: Array<any> = [];
  public clientPositionList: Array<any> = [];
  public recruiterList: Array<any> = [];
  public urlConstants = new URLConstants();

  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public trash = 'trash';
  public screenHeight: any;
  public readOnlyForm = '';
  public enableButtonType = '';
  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string = null;
  public isCreate: boolean = false;
  public apName = '';
  public apValue = '';

  public page: number;
  public consultantListLength: number;
  public pageSize: number = 13;
  public getCplPromise = this.http.get(this.urlConstants.CPDropdown);
  public getClPromise = this.http.get(this.urlConstants.CDropdown);
  public getRlPromise = this.http.get(this.urlConstants.RDropdown);
  public cochGetAllPromise = this.http.get(this.urlConstants.CoCHGetAll);

  constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = (window.innerHeight - 237);
  }
  ngOnInit() {
    this.joins();
    this.init();
  }
  joins() {
    forkJoin(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(listofrecords => {
      this.clientPositionList = listofrecords[0] as any;
      this.consultantList = listofrecords[1] as any;
      this.recruiterList = listofrecords[2] as any;
      this.callAfterFormReset();
    });
  }
  init() {
    this.cochGetAllPromise.subscribe(resp => {
      this.consultantCallHistoryList = resp as Array<ConsultantCallHistoryModel>;
      this.pagedConsultantList = resp as any;
      this.consultantListLength = this.consultantCallHistoryList.length;
      this.pageChange(this.page);
    });
    this.consultantCallHistoryModel.properties = [];
    this.page = 1
  }
  consultantCallHistoryEdit(data) {
    this.consultantCallHistoryModel = JSON.parse(JSON.stringify(data));
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action = null;
  }
  readOnlyEnable(id: number) {
    this.getConsultantById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  getConsultantById(id: number) {
    const temp = this.http.get(this.urlConstants.CoCHGetById + id);
    temp.subscribe(resp => {
      this.consultantCallHistoryModel = this.mapToUpdateModel(resp);
    });
  }
  mapToUpdateModel(response): ConsultantCallHistoryModel {
    const temp = response;
    this.consultantCallHistoryModel = temp;
    this.consultantCallHistoryModel['consultantId'] = temp.consultant.id;
    this.consultantCallHistoryModel['calledBy'] = temp.calledBy.id;
    this.consultantCallHistoryModel['cpId'] = temp.clientPosition ? temp.clientPosition.id : 0;
    this.consultantCallHistoryModel.properties =
      this.consultantCallHistoryModel.properties == null ? [] : this.consultantCallHistoryModel.properties;
    return this.consultantCallHistoryModel;
  }
  propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.consultantCallHistoryModel.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.consultantCallHistoryModel.properties.push(<AdditionalPropertiesModel>{ name: this.apName, value: this.apValue });
        this.apName = '';
        this.apValue = '';
        break;
      }
    }
  }
  actions(value, trashContent, form) {
    console.log(value);
    switch (value) {
      case 'Delete': {
        this.open(this.consultantCallHistoryModel.id, trashContent);
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
  enter(event): void {
    if (event.keyCode === 13) {
      this.propertiesListIncrement(event.target, 0);
    }
  }
  enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  formReset() {
    this.consultantCallHistoryModel = <ConsultantCallHistoryModel>{ calledBy: 0, calledDate: '' };
    this.consultantCallHistoryModel.properties = [];
  }
  createConsultantCallHistory(consultantCallHistory: NgForm): void {
    this.isCreate = true;
    const temp = this.http.post(this.consultantCallHistoryModel, this.urlConstants.CoCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant Call History');
        this.init();
        consultantCallHistory.resetForm();
        this.formReset();
        this.callAfterFormReset();
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
      }
    );
  }
  updateConsultantCallHistory(consultantCallHistory: NgForm) {
    const temp = this.http.update(this.consultantCallHistoryModel, this.urlConstants.CoCHUpdate);
    temp.subscribe(
      resp => {
        consultantCallHistory.resetForm();
        this.formReset();
        this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant Call History');
        this.init();
        this.callAfterFormReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
      }
    );
  }
  cancelForm(consultantCallHistory: NgForm) {
    consultantCallHistory.resetForm();
    this.formReset();
    this.init();
    this.callAfterFormReset();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  deleteCoCHRecord(): void {
    const temp = this.http.delete(this.urlConstants.CoCHDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Call History');
        this.init();
        this.close();
        this.formReset();
        this.callAfterFormReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
      }
    );
  }
  getRecruiterId() {
    const temp = sessionStorage.getItem('username');
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.consultantCallHistoryModel.calledBy = rl.id;
      }
    });
  }
  getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy + '-' + mm + '-' + dd;
    this.consultantCallHistoryModel.calledDate = temp;
  }
  callAfterFormReset(): void {
    this.getRecruiterId();
    this.getTodaysDate();
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  open(event: any, content) {
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
  pageChange(event) {
    const from = ((event - 1) * this.pageSize);
    const lst = this.consultantCallHistoryList;
    const uplst = lst.slice(from, from + this.pageSize);
    this.pagedConsultantList = uplst;
  }
}
