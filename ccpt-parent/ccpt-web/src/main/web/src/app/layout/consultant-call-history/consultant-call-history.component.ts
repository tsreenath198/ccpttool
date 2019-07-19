import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantCallHistoryModel, ActionsList } from './consultant-call-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultant-call-history',
  templateUrl: './consultant-call-history.component.html',
  styleUrls: ['./consultant-call-history.component.scss'],
  animations: [routerTransition()]
})
export class ConsultantCallHistoryComponent implements OnInit {
  public model: ConsultantCallHistoryModel = <any>{};
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
  public screenHeight: any;
  public readOnlyForm = '';
  public enableButtonType = '';
  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action: string = null;
  public isCreate: boolean = false;
  public apName = '';
  public apValue = '';
  public key: string = 'name'; 
  public reverse: boolean = false;
  public page: number = 1;
  public consultantListLength: number;
  public pageSize: number = 20;
  public incr:number = 0;
  public listReturned:boolean;
  public getCplPromise = this.http.get(this.urlConstants.CPDropdown);
  public getClPromise = this.http.get(this.urlConstants.CDropdown);
  public getRlPromise = this.http.get(this.urlConstants.RDropdown);
  public cochGetAllPromise = this.http.get(this.urlConstants.CoCHGetAll);

  constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService, private modalService: NgbModal) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = (window.innerHeight - 237);
  }
  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()){
      this.router.navigate(['/login']);
    }
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
  private init() {
    this.spinner(false);
    this.cochGetAllPromise.subscribe(resp => {
      this.consultantCallHistoryList = resp as Array<ConsultantCallHistoryModel>;
      this.spinner(true);
      // this.pagedConsultantList = resp as any;
      // this.consultantListLength = this.consultantCallHistoryList.length;
      // this.pageChange(this.page);
    });
    this.model.properties = [];
    this.page = 1
  }
  public dblSetModel() {
    this.readOnlyForm = 'U'; 
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action = null;
  }
  public setModel(id: number) {
    this.spinner(false);
    this.getConsultantById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getConsultantById(id: number) {
    const temp = this.http.get(this.urlConstants.CoCHGetById + id);
    temp.subscribe(resp => {
      this.model = this.mapToUpdateModel(resp);
      this.spinner(true);
    });
  }
  private mapToUpdateModel(response): ConsultantCallHistoryModel {
    const temp = response;
    this.model = temp;
    this.model['consultantId'] = temp.consultant.id;
    this.model['calledBy'] = temp.calledBy.id;
    this.model['cpId'] = temp.clientPosition ? temp.clientPosition.id : 0;
    this.model.properties =
      this.model.properties == null ? [] : this.model.properties;
    return this.model;
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
                    this.toastr.error('Property already exists', 'Properties');
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
  public enter(event): void {
    if (event.keyCode === 13) {
      this.propertiesListIncrement(event.target, 0);
    }
  }
  private enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  private formReset() {
    this.model = <ConsultantCallHistoryModel>{ calledBy: 0, calledDate: '' };
    this.model.properties = [];
  }
  public create(consultantCallHistory: NgForm): void {
    this.isCreate = true;
    this.spinner(false);
    const temp = this.http.post(this.model, this.urlConstants.CoCHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant Call History');
        this.init();
        consultantCallHistory.resetForm();
        this.formReset();
        this.callAfterFormReset();
        this.spinner(true);
        this.isCreate= false;
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
        this.isCreate= false;
        this.spinner(true);
      }
    );
  }
  public update(consultantCallHistory: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.CoCHUpdate);
    temp.subscribe(
      resp => {
        consultantCallHistory.resetForm();
        this.formReset();
        this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant Call History');
        this.init();
        this.callAfterFormReset();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
        this.spinner(true);
      }
    );
  }
 public cancelForm(consultantCallHistory: NgForm) {
    consultantCallHistory.resetForm();
    this.formReset();
    this.init();
    this.callAfterFormReset();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.CoCHDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant Call History');
        this.init();
        this.close();
        this.formReset();
        this.callAfterFormReset();
        this.spinner(true);
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant Call History');
        this.spinner(true);
      }
    );
  }
  private getRecruiterId() {
    const temp = sessionStorage.getItem('username');
    this.recruiterList.forEach(rl => {
      if (rl.email === temp) {
        this.model.calledBy = rl.id;
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
 private callAfterFormReset(): void {
    this.getRecruiterId();
    this.getTodaysDate();
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
  // public pageChange(event) {
  //   const from = ((event - 1) * this.pageSize);
  //   const lst = this.consultantCallHistoryList;
  //   const uplst = lst.slice(from, from + this.pageSize);
  //   this.pagedConsultantList = uplst;
  // }
  public  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  } 
  private spinner(isSpinner: boolean){
      this.listReturned = isSpinner;
    }
}
