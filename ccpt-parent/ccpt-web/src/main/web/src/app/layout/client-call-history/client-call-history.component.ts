import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientCallHistoryModel } from './client-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ClientPositionModel } from '../client-position/client-position.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../client/client.model';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { RecruiterModel } from '../recruiter/recruiter.model';
import { forkJoin } from 'rxjs';
import { ActionsList } from '../consultant-call-history/consultant-call-history.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-call-history',
  templateUrl: './client-call-history.component.html',
  styleUrls: ['./client-call-history.component.scss'],
  animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
  public model: ClientCallHistoryModel = <ClientCallHistoryModel>{};
  public clientCallHistoryList: Array<any> = [];
  public clientPositionList: Array<any> = [];
  public clientList: Array<any> = [];
  public recruiterList: Array<any> = [];
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public urlConstants = new URLConstants();
  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string;
  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public screenHeight: any;
  public currSearchTxt: string;
  public readOnlyForm = '';
  public enableButtonType = '';
  public apName = '';
  public apValue = '';
  public loggedInRole = '';
  public isCreate: boolean = false;
  public page: number;
  public consultantListLength: number;
  public pageSize: number = 10;
  public listReturned:boolean;
  public getCplPromise = this.http.get(this.urlConstants.CPDropdown);
  public getClPromise = this.http.get(this.urlConstants.ClientGetAll);
  public getRlPromise = this.http.get(this.urlConstants.RDropdown);
  public cchGetAllPromise = this.http.get(this.urlConstants.CCHGetAll);

  constructor(
    private http: HttpClientService,
    private toastr: ToastrCustomService,
    private modalService: NgbModal,
    private router: Router
  ) {
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
    this.joins();
    this.init();
    this.loggedInRole = sessionStorage.getItem('role');
  }
  private joins() {
    forkJoin(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(listofrecords => {
      this.clientPositionList = listofrecords[0] as any;
      this.clientList = listofrecords[1] as any;
      this.recruiterList = listofrecords[2] as any;
      this.getRecruiterId();
      this.getTodaysDate();
    });
  }
  private init() {
    this.spinner(false);
    this.cchGetAllPromise.subscribe(resp => {
      this.clientCallHistoryList = resp as Array<ClientCallHistoryModel>;
      this.spinner(true);
    });
    this.model.properties = [];
  }
  private getRecruiterId() {
    const temp = sessionStorage.getItem('username');
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.model.calledBy = rl.id;
      }
      if (this.model.properties == null) {
        this.model.properties = [];
      }
    });
  }

  private getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy + '-' + mm + '-' + dd;
    this.model.calledDate = temp;
  }
  public dblSetModel() {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action = null;
  }
  public setModel(id: number) {
    this.getCCHById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getCCHById(id: number) {
    const temp = this.http.get(this.urlConstants.CCHGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
    });
  }
  private mapToUpdateModel(response): ClientCallHistoryModel {
    const temp = response;
    this.model = temp;
    this.model['cpId'] = temp.clientPosition.id;
    this.model['calledBy'] = temp.calledBy.id;
    return this.model;
  }
  public propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.model.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.model.properties.push(<AdditionalPropertiesModel>{ name: this.apName, value: this.apValue });
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
  private enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  private formReset() {
    this.model = <ClientCallHistoryModel>{};
    this.model.properties = [];
    this.getRecruiterId();
    this.getTodaysDate();
  }
  public create(clientCallHistoryForm: NgForm): void {
    this.isCreate = true;
    this.spinner(false);
    const temp = this.http.post(this.model, this.urlConstants.CCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Client Call History');
        this.init();
        this.getRecruiterId();
        this.isCreate = false;
        this.getTodaysDate();
        this.formReset();
        this.spinner(true);
        clientCallHistoryForm.resetForm();
        this.isCreate = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Client Call History');
      }
    );
  }
  public update(clientCallHistoryForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.CCHUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.UpdateMsg, 'Client Call History');
        this.formButtonsToggler = true;
        this.formReset();
        this.init();
        this.getRecruiterId();
        this.getTodaysDate();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        clientCallHistoryForm.resetForm();
      },
      err => {
        this.toastr.error(err.error.message, 'Client Call History');
      }
    );
  }

  public cancelForm(clientCallHistoryForm: NgForm) {
    clientCallHistoryForm.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.CCHDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Client Call History');
        this.init();
        this.getRecruiterId();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.getTodaysDate();
        this.close();
        this.formReset();
        this.spinner(true);
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Client Call History');
      }
    );
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  public open(event: any, content) {
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
  private spinner(isSpinner: boolean){
      this.listReturned = isSpinner;
    }
}
