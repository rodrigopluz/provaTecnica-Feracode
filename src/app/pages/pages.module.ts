import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    declarations: [
        SignupComponent,
        CompanyComponent
    ]
})

export class PagesModule { }
