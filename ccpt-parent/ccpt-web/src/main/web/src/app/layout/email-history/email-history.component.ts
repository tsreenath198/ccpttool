import { Component, OnInit, HostListener } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EmailHistoryModel } from './email-history.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { URLConstants } from '../components/constants/url-constants';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';
import { Router } from '@angular/router';
import { Properties } from '../components/constants/properties';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'email-history',
  templateUrl: './email-history.component.html',
  styleUrls: ['./email-history.component.scss'],
  animations: [routerTransition()]
})
export class EmailHistoryComponent implements OnInit {
  public model: EmailHistoryModel = <EmailHistoryModel>{};
  public ehList: any = [];
  private urlConstants = new URLConstants();
  public properties = new Properties();

  public showAction: boolean = false;
  public action: string = null;

  public readOnlyForm = '';
  public enableButtonType = '';
  public currSearchTxt = '';
  public listReturned: boolean;
  public isCreate: boolean = false;
  public screenHeight: any;
  private selectedRecrdToDel = 0;
  public closeResult = '';
  public apName = '';
  public apValue = '';
  private modalRef: NgbModalRef;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no'
  };
  public paginateConfig: any = {
    itemsPerPage: 0,
    currentPage: 0,
    totalItems: 0
  };
  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal
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
    this.init();
    this.paginateConfigDeclare(this.properties.ITEMSPERPAGE,1,0);
    this.initialGetAll();
    this.spinner(true);
  }
  private init() {
    // this.spinner(false);
    // this.http.get(this.urlConstants.SearchGetAll).subscribe(resp => {
    //     this.ehList = resp as any;
    //     this.spinner(true);
    // });
    this.model.properties = [];
  }
  private paginateConfigDeclare(itemsPerPage,currentPage,totalItems){
    this.paginateConfig.itemsPerPage = itemsPerPage,
    this.paginateConfig.currentPage = currentPage,
    this.paginateConfig.totalItems = totalItems
  }
  public initialGetAll() {
    let pageNumber = this.paginateConfig.currentPage - 1;
    let temp = this.http.get(this.urlConstants.EHGetAll + pageNumber + '&pageSize=50&sortBy=id');
    temp.subscribe(resp => {
      this.ehList = resp as any;
      //this.pageChange(this.page);
      this.paginateConfig.totalItems = this.ehList.noOfRecords;
    });
  }
  public enableFormEditable(): void {
    this.readOnlyForm = '';
    //this.config.editable = true;
    this.enableButtonType = 'U';
  }
  public setModel(id) {
    this.spinner(false);
    this.getById(id);
    this.readOnlyForm = 'U';
    // this.config.editable = false;
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action = null;
  }
  private getById(id) {
    const temp = this.http.get(this.urlConstants.EHGetById + id);
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
  private formReset() {
    this.model = <EmailHistoryModel>{};
    this.model.properties = [];
  }
  public create(searchBankForm: NgForm): void {
    this.spinner(false);
    this.isCreate = true;
    const temp = this.http.post(this.model, this.urlConstants.EHCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.CREATE, this.properties.EMAIL_HISTORY);
        this.init();
        this.formReset();
        searchBankForm.resetForm();
        this.paginateConfig.currentPage = 1;
        this.initialGetAll();
        this.isCreate = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.EMAIL_HISTORY);
        this.isCreate = false;
        this.spinner(true);
      }
    );
  }
  public update(searchBankForm: NgForm) {
    this.spinner(false);
    const temp = this.http.update(this.model, this.urlConstants.EHUpdate);
    temp.subscribe(
      resp => {
        this.formReset();
        this.toastr.success(this.properties.UPDATE, this.properties.EMAIL_HISTORY);
        this.init();
        searchBankForm.resetForm();
        this.initialGetAll();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.EMAIL_HISTORY);
        this.spinner(true);
      }
    );
  }
  public cancelForm(consultantCallHistory: NgForm) {
    consultantCallHistory.resetForm();
    this.formReset();
    this.init();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
  }
  public trash(): void {
    this.spinner(false);
    const temp = this.http.delete(this.urlConstants.EHDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.properties.DELETE, this.properties.EMAIL_HISTORY);
        this.init();
        this.close();
        this.formReset();
        this.initialGetAll();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
        this.spinner(true);
      },
      err => {
        this.toastr.error(err.error.message, this.properties.EMAIL_HISTORY);
        this.spinner(true);
      }
    );
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
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  pageChanged(event) {
    this.paginateConfig.currentPage = event;
    this.initialGetAll();
  }
  public search(){
    this.paginateConfig.currentPage =1
    if(this.currSearchTxt.length == 0){
      this.paginateConfigDeclare(this.properties.ITEMSPERPAGE,1,0);
      this.initialGetAll();
    }
    else if(this.currSearchTxt.length > 3){
      let temp = this.http.get(this.urlConstants.SearchAllSearch + this.currSearchTxt)
      temp.subscribe(resp => {
        this.ehList.list = resp as any;
        this.paginateConfigDeclare(this.ehList.list.length,1,this.ehList.list.length)
      })
    }
  }
}
