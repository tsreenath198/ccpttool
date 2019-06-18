import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  public loggedInRole: string = '';
  constructor() { }
  @Input() trashContent;
  @Input() shortListContent;
  @Input() sendSMSContent;
  @Input() sendMailContent;
  @Input() uploadContent;
  @Input() downloadContent;

  @Input() id;

  @Input() isTrash;
  @Input() isSendSMS;
  @Input() isSendMail;
  @Input() isShortList;
  @Input() isUpload;
  @Input() isDownload;

  @Output() trash = new EventEmitter();
  @Output() sendSMS = new EventEmitter();
  @Output() shortList = new EventEmitter();
  @Output() sendMail = new EventEmitter();
  @Output() download = new EventEmitter();
  @Output() upload = new EventEmitter();

  ngOnInit() {
    this.loggedInRole = sessionStorage.getItem('role');
  }

  trashData() {
    this.trash.emit({ content: this.trashContent, id: this.id, type: this.isTrash });
  }
  sendSmsData() {
    this.sendSMS.emit({ content: this.sendSMSContent, id: this.id, type: this.isSendSMS });
  }
  sendMailData() {
    this.sendMail.emit({ content: this.sendMailContent, id: this.id, type: this.isSendMail });
  }
  shortListData() {
    this.shortList.emit({ content: this.shortListContent, id: this.id, type: this.isShortList });
  }
  uploadData() {
    this.upload.emit({ content: this.uploadContent, id: this.id, type: this.isUpload });
  }
  downloadData() {
    this.download.emit({ content: this.downloadContent, id: this.id, type: this.isDownload });
  }
}
