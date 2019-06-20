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

@Component({
  selector: 'app-client-call-history',
  templateUrl: './client-call-history.component.html',
  styleUrls: ['./client-call-history.component.scss'],
  animations: [routerTransition()]
})
export class ClientCallHistoryComponent implements OnInit {
  public clientCallHistoryModel: ClientCallHistoryModel = <ClientCallHistoryModel>{};
  public clientCallHistoryList: Array<any> = [];
  public clientPositionList: Array<any> = [];
  public clientList: Array<any> = [];
  public recruiterList: Array<any> = [];
  public formButtonsToggler = true;
  public editButtonToggler = true;
  public urlConstants = new URLConstants();
  private selectedRecrdToDel = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  protected screenHeight: any;
  public currSearchTxt: string;
  public readOnlyForm = '';
  public enableButtonType = '';
  public trash = 'trash';
  protected getCplPromise = this.http.get(this.urlConstants.CPGetAll);
  protected getClPromise = this.http.get(this.urlConstants.ClientGetAll);
  protected getRlPromise = this.http.get(this.urlConstants.RGetAll);
  protected cchGetAllPromise = this.http.get(this.urlConstants.CCHGetAll);

  constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
  }

  ngOnInit() {
    this.joins();
    this.init();
    this.additionalPropertiesDeclare();
  }
  joins() {
    forkJoin(this.getCplPromise, this.getClPromise, this.getRlPromise).subscribe(listofrecords => {
      this.clientPositionList = listofrecords[0] as any;
      this.clientList = listofrecords[1] as any;
      this.recruiterList = listofrecords[2] as any;
      this.getRecruiterId();
      this.getTodaysDate();
    });
  }
  init() {
    this.cchGetAllPromise.subscribe(resp => {
      this.clientCallHistoryList = resp as Array<ClientCallHistoryModel>;
    });
    
  }
  getRecruiterId() {
    const temp = sessionStorage.getItem('username');
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.clientCallHistoryModel.calledBy = rl.id;
      }
    });
  }
  getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const temp = yyyy+'-'+mm+'-'+dd ;
    this.clientCallHistoryModel.calledDate = temp;
  }
  editClientCallHistory(data) {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  readOnlyEnable(id: number) {
    this.getCCHById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
  }
  getCCHById(id: number) {
    const temp = this.http.get(this.urlConstants.CCHGetById + id);
    temp.subscribe(resp => {
      this.clientCallHistoryModel = this.mapToUpdateModel(resp);
      // tslint:disable-next-line:no-shadowed-variable
      const temp = resp as any;
      if (temp.properties == null) {
        this.additionalPropertiesDeclare();
      }
    });
  }
  mapToUpdateModel(response): ClientCallHistoryModel {
    const temp = response;
    this.clientCallHistoryModel = temp;
    this.clientCallHistoryModel['cpId'] = temp.clientPosition.id;
    this.clientCallHistoryModel['calledBy'] = temp.calledBy.id;
    return this.clientCallHistoryModel;
  }
  additionalPropertiesDeclare() {
    this.clientCallHistoryModel.properties = [<AdditionalPropertiesModel>{}];
  }
  propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.clientCallHistoryModel.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.clientCallHistoryModel.properties.push(<AdditionalPropertiesModel>{});
        break;
      }
    }
  }
  enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  formReset() {
    this.clientCallHistoryModel = <ClientCallHistoryModel>{};
  }
  createClientCallHistory(clientCallHistoryForm: NgForm): void {
    const temp = this.http.post(this.clientCallHistoryModel, this.urlConstants.CCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Client Call History');
        this.init();
        this.getRecruiterId();
    this.getTodaysDate();
        this.formReset();
        clientCallHistoryForm.resetForm();
        this.additionalPropertiesDeclare();
      },
      err => {
        this.toastr.error(err.error.message, 'Client Call History');
      }
    );
  }
  updateClientCallHistory(clientCallHistoryForm: NgForm) {
    const temp = this.http.update(this.clientCallHistoryModel, this.urlConstants.CCHUpdate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.UpdateMsg, 'Client Call History');
        this.formButtonsToggler = true;
        this.formReset();
        this.init();
        this.getRecruiterId();
    this.getTodaysDate();
        clientCallHistoryForm.resetForm();
        this.additionalPropertiesDeclare();
      },
      err => {
        this.toastr.error(err.error.message, 'Client Call History');
      }
    );
  }

  cancelForm(clientCallHistoryForm: NgForm) {
    clientCallHistoryForm.resetForm();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.additionalPropertiesDeclare();
  }
  deleteCCHRecord(): void {
    const temp = this.http.delete(this.urlConstants.CCHDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Client Call History');
        this.init();
        this.getRecruiterId();
    this.getTodaysDate();
        this.close();
        this.formReset();
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
