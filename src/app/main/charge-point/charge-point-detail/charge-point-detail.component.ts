import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
import { ChargePoint } from 'src/app/ChargePoint';

@Component({
  selector: 'app-charge-point-detail',
  templateUrl: './charge-point-detail.component.html',
  styleUrls: ['./charge-point-detail.component.css']
})
export class ChargePointDetailComponent implements OnInit {

  chargePointForm = this.fb.group({
    chargeid: [ null, [Validators.required]],
    identity: ['', [Validators.required]],
    id: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder,
              public apiService: ApiServiceService,
              public router: Router) { }

  ngOnInit() {
    this.getChargePoint();

  }

  public getChargePoint() {
    const direccion = this.router.url.split('/');
    const id = direccion[direccion.length - 1];
    console.log(id);
    let data: ChargePoint;
    this.apiService.getChargePointById(id).subscribe(res => {
      console.log(res);
      data = res;
      this.chargePointForm.setValue({
        chargeid: data.chargeid,
        identity: data.identity || '',
        id: data.id || '',
      });
    });
  }

  public updateChargePoint() {
    console.log(this.chargePointForm.value);
    console.log('Llamamos update');
    this.apiService.updateChargePoint(this.chargePointForm.value).subscribe();
  }

  goBack(){
    this.router.navigate(['/main/chargePoint']);
  }
}
