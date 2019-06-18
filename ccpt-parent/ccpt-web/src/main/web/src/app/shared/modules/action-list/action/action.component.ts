import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor() { }
  @Input() trashContent;
  @Input() shortListContent;
  @Input() sendSMSContent;
  @Input() sendMailContent;

  @Input() id;

  @Input() isTrash;
  @Input() isSendSMS;
  @Input() isSendMail;
  @Input() isShortList;

  @Output() trash = new EventEmitter();
  @Output() sendSMS = new EventEmitter();
  @Output() shortList = new EventEmitter();
  @Output() sendMail = new EventEmitter();

  ngOnInit() {
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
}
