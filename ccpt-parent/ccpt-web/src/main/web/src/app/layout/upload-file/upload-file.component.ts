import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { UploadFileModel } from "./upload-file.model";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"],
  animations: [routerTransition()]
})
export class UploadFileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
