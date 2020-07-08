import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ChargePoint } from 'src/app/ChargePoint';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-charge-point-home',
  templateUrl: './charge-point-home.component.html',
  styleUrls: ['./charge-point-home.component.css']
})
export class ChargePointHomeComponent implements OnInit {

  chargePointForm = this.fb.group(
    {
      identity: ['', [Validators.required]],
      id: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  arrChargePoint: ChargePoint[] = [];
  displayedColumns: string[] = ['identity', 'cpo', 'action'];

  constructor(public apiService: ApiServiceService,
              private fb: FormBuilder,
              private router: Router) { }

ngOnInit(): void {
this.getChargePoints();
}

createChargePoint() {
  console.log(this.chargePointForm);
  if (this.chargePointForm.valid) {
    console.log(this.chargePointForm.value);
    this.apiService.createChargePoint(this.chargePointForm.value).subscribe((res) => {
          console.log(res);
    });
}

}

public getChargePoints() {
  this.apiService.getChargePoints().subscribe((res) => {
    console.log(res);
    this.arrChargePoint = res;
    console.log('Esto es lo que llega');
    console.log( res);
  });
}

public deleteChargePoint(id) {
  console.log(id);
  this.apiService.deleteChargePoint(id).subscribe(res => {});
}

goDetails(id) {
  console.log(id);
  console.log('actualizar');
  this.router.navigate(['/main/chargePoint/'.concat(id)]);
}

}
