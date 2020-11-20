import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: ToastrService) {
    
  }

  showSuccess(success: string) {
    this.toastrService.success(success);
  }

  showError(error: string) {
    this.toastrService.error(error);
  }

}
