import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NgForm } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ConsultantModel, ActionsList } from './consultant.model';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ConsultantStatusModel } from '../consultant-status/consultant-status.model';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { AdditionalPropertiesModel } from 'src/app/additional-properties.model';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss'],
  animations: [routerTransition()]
})
export class ConsultantComponent implements OnInit {
  public consultantModel: ConsultantModel = <ConsultantModel>{};
  public consultantList: Array<ConsultantModel> = [];
  public pagedConsultantList: Array<ConsultantModel> = [];
  public consultantStatusList: Array<ConsultantStatusModel> = [];
  public formButtonsToggler = true;
  public readOnlyForm = '';
  public enableButtonType = '';
  public genderList = ['Male', 'Female', 'Other'];
  public uploadFileList: Array<any> = [];
  public fileList: Array<any> = [];
  public refType = '';
  public comments = '';
  public isFresher: boolean;
  public uploader: FileUploader = new FileUploader({});
  private selectedRecrdToDel = 0;
  public closeResult = '';
  public download = 'download';
  public trash = 'trash';
  public upload = 'upload';
  public apName = '';
  public apValue = '';
  public screenHeight: any;
  private modalRef: NgbModalRef;
  public urlConstants = new URLConstants();

  public showAction: boolean = false;
  public actionsList = new ActionsList();
  public action:string;

  public currSearchTxt: string;
  public idToActivate: number;
  public page: number;
  public consultantListLength: number;
  public pageSize: number = 10;
  public cSGetAllPromise = this.http.get(this.urlConstants.CSGetAll);
  public cGetAllPromise = this.http.get(this.urlConstants.CGetAll);
  constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    /* Here we are decreasing screenheight to 237 for pagination */
    this.screenHeight = (window.innerHeight - 237);
  }
  ngOnInit() {
    this.cSGetAllPromise.subscribe(resp => {
      this.consultantStatusList = resp as any;
    });
    this.init();
  }

  init(): void {
    this.cGetAllPromise.subscribe(resp => {
      this.consultantList = resp as any;
      this.pagedConsultantList = resp as any;
      this.consultantListLength = this.consultantList.length;
      this.pagedConsultantList.forEach(cl => {
        if (this.validate(cl.fullname) || this.validate(cl.email) || this.validate(cl.phone) || this.validate(cl.dob)) {
          cl['isProfileCompleted'] = false;
        } else {
          cl['isProfileCompleted'] = true;
        }
      });
      this.pageChange(this.page);
    });
    this.consultantModel['properties'] = [];
    this.consultantModel['conStatus'] = 'Active';
    this.consultantModel['phone'] = '+91';
    this.page = 1;
  }
  private validate(value: any): boolean {
    const bool = value == null ? true : false;
    return bool;
  }
  defaultValues() {
    this.consultantModel['properties'] = [];
    this.consultantModel['conStatus'] = 'Active';
    this.consultantModel['phone'] = '+91';
  }
  consultantEdit(id: number) {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
    this.showAction = true;
    this.action=null;
  }
  readOnlyEnable(id: number) {
    this.getConsultantById(id);
    this.readOnlyForm = 'R';
    this.enableButtonType = 'E';
    this.showAction = true;
    this.action=null;
  }
  enableFormEditable(): void {
    this.readOnlyForm = 'U';
    this.enableButtonType = 'U';
  }
  formReset() {
    this.consultantModel = <ConsultantModel>{ properties: [] };
    this.consultantModel['conStatus'] = 'Active';
    this.consultantModel['phone'] = '+91';
  }
  createConsultant(consultantForm: NgForm): void {
    const temp = this.http.post(this.consultantModel, this.urlConstants.CCreate);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant');
        consultantForm.resetForm();
        this.init();
        this.formReset();
      },
      err => {
        this.toastr.error(err.error.message, 'Consultant');
      }
    );
  }
  updateConsultant(consultantForm: NgForm) {
    const temp = this.http.update(this.consultantModel, this.urlConstants.CUpdate);
    temp.subscribe(
      resp => {
        consultantForm.resetForm();
        this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant');
        this.formReset();
        this.init();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        this.toastr.error(err.statusText, 'Consultant');
      }
    );
  }
  getConsultantById(id: number) {
    const temp = this.http.get(this.urlConstants.CGetById + id);
    temp.subscribe(resp => {
      this.consultantModel = this.mapToUpdateModel(resp);
      // tslint:disable-next-line:no-shadowed-variable

      if (this.consultantModel.properties == null) {
        this.consultantModel.properties = [];
      }
    });
  }
  getFilesById(id: number) {
    this.http.get('/uploadFile/id?id=' + id).subscribe(resp => {
      this.fileList.push(resp);
      console.log(this.fileList);
    });
  }
  cancelForm(consultantForm: NgForm) {
    consultantForm.resetForm();
    this.formReset();
    this.readOnlyForm = '';
    this.enableButtonType = '';
    this.showAction = false;
    this.defaultValues();
  }
  deleteConsultantRecord(): void {
    const temp = this.http.delete(this.urlConstants.CDelete + this.selectedRecrdToDel);
    temp.subscribe(
      resp => {
        this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant');
        this.init();
        this.close();
        this.formReset();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.showAction = false;
      },
      err => {
        if (err.status === 200) {
          this.init();
          this.close();
          this.formReset();
          return this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant');
        }
        this.toastr.error(err.statusText, 'Consultant');
      }
    );
  }
  mapToUpdateModel(response): ConsultantModel {
    const temp = response;
    this.consultantModel = temp;
    this.consultantModel['conStatus'] = temp.status.code;
    return this.consultantModel;
  }
  propertiesListIncrement(event, i: number) {
    switch (event.id) {
      case 'decrease': {
        this.consultantModel.properties.splice(i, 1);
        break;
      }
      case 'increase': {
        this.consultantModel.properties.push(<AdditionalPropertiesModel>{ 'name': this.apName, 'value': this.apValue });
        this.apName = '';
        this.apValue = '';
        break;
      }
    }
  }
  actions(value,trashContent,uploadContent,downloadContent,form){
    switch(value){
      case 'Delete':{
        this.open(this.consultantModel.id,trashContent);
        break;
      }
      case 'File Upload':{
        this.open(this.consultantModel.id,uploadContent);
        break;
      }
      case 'File Download':{
        this.open(this.consultantModel.id,downloadContent);
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
  imposeMinMax(el) {
    if (el.value !== '') {
      // tslint:disable-next-line:radix
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      // tslint:disable-next-line:radix
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }
  activateId() {
    const id = this.idToActivate;
    const temp = this.http.get(this.urlConstants.CActivate + id);
    temp.subscribe(resp => {
      this.toastr.success(this.urlConstants.ActivatedMsg, 'Consultant');
      this.init();
    });
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
  open(event: any , content: any) {
    this.selectedRecrdToDel = 0;
    if (event) {
      this.selectedRecrdToDel = event;
    }
    // if (event.type === this.download) {
    //     // this.getFilesById(this.selectedRecrdToDel); TODO:Need to fix for multiple downloads
    //     this.http.get('file/download?refType=Consultant&refId=' + this.selectedRecrdToDel).subscribe(resp => {
    //     }, err => {
    //       if (err.status == 200)
    //           window.open(err.url);
    //   });
    // } else {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //}

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
  /** Get Uploaded files */
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map(fileItem => {
      return fileItem.file;
    });
  }
  /**Download file */
  downloadFile(id: number) {
    this.http.get(this.urlConstants.FileDownload + id).subscribe(resp => {
    }, err => {
      if (err.status == 200)
        window.open(err.url);
    });
  }
  /** Upload documents of respective consultant */
  uploadFiles() {
    const files = this.getFiles();
    const formData = new FormData();
    formData.append('file', files[0].rawFile, files[0].name);
    const params = 'refId=' + this.selectedRecrdToDel + '&refType=Consultant&comments=' + this.comments;
    this.http.upload(this.urlConstants.FileUpload + params, formData).subscribe(resp => {
      let temp: any = resp;
      this.toastr.success(temp.message, 'Client');
      this.close();
    }, err => {
      this.toastr.success(err.error.message, 'Client');
    });
    /* let requests = [];
         files.forEach((file) => {
             let formData = new FormData();
             formData.append('file', file.rawFile, file.name);
             console.log(formData);
             this.http.upload('', formData[0]).subscribe(resp => {
                 console.log("resp=====", resp);
             })
             // requests.push(this.uploadService.upload(formData));
         });*/

    /*concat(...requests).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );*/
  }
  pageChange(event) {
    const from = ((event - 1) * this.pageSize);
    const lst = this.consultantList;
    const uplst = lst.slice(from, from + this.pageSize);
    this.pagedConsultantList = uplst;
  }
}
