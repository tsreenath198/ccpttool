import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor() { }

  @Input() content;
  @Input() id;
  @Input() type;
  @Output() action = new EventEmitter();
  // @Input() trashContent;
  // @Input() shortListContent;
  // @Input() sendSMSContent;
  // @Input() sendMailContent;
  
  // @Input() id;

  // @Input() isTrash;
  // @Input() isSendSMS;
  // @Input() isSendMail;
  // @Input() isShortList;

  // @Output() trash = new EventEmitter();
  // @Output() sendSMS = new EventEmitter();
  // @Output() shortList = new EventEmitter();
  // @Output() sendMail = new EventEmitter();

   ngOnInit() {
     console.log(this.type)
   }

   trash() {
     this.action.emit({ "content": this.content, "id": this.id ,"type":this.type});
   }
  // sendSmsData() {
  //   this.sendSMS.emit({ "content": this.sendSMSContent, "id": this.id });
  // }
  // sendMailData() {
  //   this.sendMail.emit({ "content": this.sendMailContent, "id": this.id });
  // }
  // shortListData() {
  //   this.shortList.emit({ "content": this.shortListContent, "id": this.id });
  // }

}
