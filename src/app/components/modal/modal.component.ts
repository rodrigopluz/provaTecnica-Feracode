import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">Cadastro</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="col-lg-12 col-sm-12 mr-auto ml-auto">
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="register-form">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" formControlName="name" class="form-control" [ngClass]="{ 'is-invalid': submitted && formulario.name.errors }" />
                    <div *ngIf="submitted && formulario.name.errors" class="invalid-feedback">
                        <div *ngIf="formulario.name.errors.required">Nome é obrigatorio</div>
                    </div>
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" formControlName="email" class="form-control" [ngClass]="{ 'is-invalid': submitted && formulario.email.errors }" />
                    <div *ngIf="submitted && formulario.email.errors" class="invalid-feedback">
                        <div *ngIf="formulario.email.errors.required">E-mail é obrigatorio</div>
                        <div *ngIf="formulario.email.errors.email">O email deve ser um endereço de email válido</div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" formControlName="phone" class="form-control" [ngClass]="{ 'is-invalid': submitted && formulario.name.errors }" />
                    <div *ngIf="submitted && formulario.phone.errors" class="invalid-feedback">
                        <div *ngIf="formulario.phone.errors.required">Telefone é obrigatorio</div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Senha</label>
                    <input type="password" formControlName="password" class="form-control" [ngClass]="{ 'is-invalid': submitted && formulario.password.errors }" />
                    <div *ngIf="submitted && formulario.password.errors" class="invalid-feedback">
                        <div *ngIf="formulario.password.errors.required">Senha é obrigatorio</div>
                        <div *ngIf="formulario.password.errors.minlength">A senha deve ter pelo menos 6 caracteres</div>
                    </div>
                </div>
                <div class="left-side">
                    <button type="button" class="btn btn-primary btn-link">Salvar</button>
                </div>
                <div class="right-side">
                    <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
    `
})

export class NgbdModalContent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    
    // @Input() name: string;
    // @Input() email: string;
    // @Input() phone: string;
    // @Input() password: string;
    
    constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get formulario() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        alert("success!! :-)\n\n" + JSON.stringify(this.registerForm.value));
    }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})

export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
