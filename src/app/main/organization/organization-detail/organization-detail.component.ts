import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
import { Organization } from 'src/app/Organization';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

  organizationForm = this.fb.group({
    id: [ null, [Validators.required]],
    name: ['', [Validators.required]],
    legalEntity: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder,
              public apiService: ApiServiceService,
              public router: Router) { }

  ngOnInit() {
    this.getOrganization();

  }

  public getOrganization() {
    const direccion = this.router.url.split('/');
    const id = direccion[direccion.length - 1];
    console.log(id);
    let data: Organization;
    this.apiService.getOrganizationById(id).subscribe(res => {
      console.log(res);
      data = res;
      this.organizationForm.setValue({
        id: data.id,
        name: data.name || '',
        legalEntity: data.legalEntity || '',
      });
    });
  }

  public updateOrganization() {
    console.log(this.organizationForm.value);
    console.log('Llamamos update');
    this.apiService.updateOrganization(this.organizationForm.value).subscribe();
  }

  goBack(){
    this.router.navigate(['/main/organization']);
  }
}


