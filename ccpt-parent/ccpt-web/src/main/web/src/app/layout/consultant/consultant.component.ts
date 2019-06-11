import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { NgForm } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ConsultantModel } from './consultant.model';
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
    public copyConList: Array<ConsultantModel> = [];
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
    private modalRef: NgbModalRef;
    public urlConstants = new URLConstants();
    public currSearchTxt: string;
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) { }

    ngOnInit() {
        this.http.get(this.urlConstants.CSGetAll).subscribe(resp => {
            this.consultantStatusList = resp as any;
        });
        this.init();
        this.additionalPropertiesDeclare();
    }

    init(): void {
        this.http.get(this.urlConstants.CGetAll).subscribe(resp => {
            this.consultantList = resp as any;
            this.copyConList = resp as any;
        });
    }
    consultantEdit(id: number) {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    readOnlyEnable(id: number) {
        this.getConsultantById(id);
        this.readOnlyForm = 'R';
        this.enableButtonType = 'E';
    }
    enableFormEditable(): void {
        this.readOnlyForm = 'U';
        this.enableButtonType = 'U';
    }
    formReset() {
        this.consultantModel = <ConsultantModel>{};
    }
    createConsultant(consultantForm: NgForm): void {
        this.http.post(this.consultantModel, this.urlConstants.CCreate).subscribe(resp => {
            this.toastr.success(this.urlConstants.SuccessMsg, 'Consultant');
            this.init();
            this.formReset();
            consultantForm.resetForm();
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.error.message, 'Consultant');
        });
    }
    updateConsultant(consultantForm: NgForm) {
        this.http.update(this.consultantModel, this.urlConstants.CUpdate).subscribe(resp => {
            this.formReset();
            this.toastr.success(this.urlConstants.UpdateMsg, 'Consultant');
            this.init();
            consultantForm.resetForm();
            this.readOnlyForm = '';
            this.enableButtonType = '';
            this.additionalPropertiesDeclare();
        }, err => {
            this.toastr.error(err.statusText, 'Consultant');
        });
    }
    getConsultantById(id: number) {
        this.http.get(this.urlConstants.CGetById + id).subscribe(resp => {
            this.consultantModel = this.mapToUpdateModel(resp);
        });
    }
    getFilesById() {
        this.http.get('/uploadFile/id?id=' + 2).subscribe(resp => {
            this.fileList.push(resp);
            console.log(this.fileList);
        });
    }
    cancelForm(consultantForm: NgForm) {
        this.formReset();
        consultantForm.resetForm();
        this.readOnlyForm = '';
        this.enableButtonType = '';
        this.additionalPropertiesDeclare();
    }
    deleteConsultantRecord(): void {
        this.http.delete(this.urlConstants.CDelete + this.selectedRecrdToDel).subscribe(resp => {
            this.toastr.success(this.urlConstants.DeleteMsg, 'Consultant');
            this.init();
            this.close();
            this.formReset();
        }, err => {
            this.toastr.error(err.statusText, 'Consultant');
        });
    }
    mapToUpdateModel(response): ConsultantModel {
        let temp = response;
        this.consultantModel = temp;
        this.consultantModel['cstatus'] = temp.status.code;
        return this.consultantModel
    }
    additionalPropertiesDeclare() {
        this.consultantModel.properties = [<AdditionalPropertiesModel>{}];
    }
    propertiesListIncrement(event, i: number) {
        switch (event.id) {
            case 'decrease': {
                this.consultantModel.properties.splice(i, 1);
                break;
            }
            case 'increase': {
                this.consultantModel.properties.push(<AdditionalPropertiesModel>{});
                break;
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
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number) {
        this.selectedRecrdToDel = 0;
        if (selected) {
            this.selectedRecrdToDel = selected;
        }
        this.modalRef = this.modalService.open(content);
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
    /** Get Uploaded files */
    getFiles(): FileLikeObject[] {
        return this.uploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    /** Upload documents of respective consultant */
    uploadFiles() {
        const files = this.getFiles();
        const formData = new FormData();
        formData.append('file', files[0].rawFile, files[0].name);
        const params = 'refId=' + this.selectedRecrdToDel + '&refType= Consultant &comments=' + this.comments;
        this.http.upload('file/create?' + params, formData).subscribe(resp => {
            console.log('resp =====', resp);
            this.close();
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
}
