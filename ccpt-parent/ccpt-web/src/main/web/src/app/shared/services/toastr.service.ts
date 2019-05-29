import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrCustomService {

  constructor(private toastr: ToastrService) { }
  success(msg, current) {
    this.toastr.success(msg, current);
  }
  error(msg, current) {
    this.toastr.error(msg, current);
  }
}
