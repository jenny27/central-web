import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Organization } from 'src/app/organization';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-organization-home',
  templateUrl: './organization-home.component.html',
  styleUrls: ['./organization-home.component.css']
})
export class OrganizationHomeComponent implements OnInit {

  organizationForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      legalEntity: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  arrOrganization: Organization[] = [];
  displayedColumns: string[] = ['name', 'legalEntity', 'action'];
  constructor(public apiService: ApiServiceService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.getOrganizations();
  }

  createOrganization() {
    console.log("Entra aqui");
    console.log(this.organizationForm);
    if (this.organizationForm.valid) {
      console.log(this.organizationForm.value);
      this.apiService.createOrganization(this.organizationForm.value).subscribe((res) => {
        console.log(res);
      });
    }

  }

  public getOrganizations() {
    this.apiService.getOrganization().subscribe((res) => {
      console.log(res);
      this.arrOrganization = res;
      console.log( res);
    });
  }

  public deleteOrganization(id) {
    console.log(id);
    this.apiService.deleteOrganization(id).subscribe(res => {
    });
  }

  goDetails(id) {
    console.log(id);
    console.log('actualizar');
    this.router.navigate(['/main/organization/'.concat(id)]);
  }
}
