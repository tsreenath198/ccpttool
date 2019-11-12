import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "../shared/services/http.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  collapedSideBar: boolean;
  backupStatus: boolean;

  constructor(private http: HttpClientService) {}

  ngOnInit() {
    this.http.getSubject().subscribe(resp => {
      this.collapedSideBar = resp;
    });
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  checkBackupStatus(event){
    this.backupStatus = event
  }
}
