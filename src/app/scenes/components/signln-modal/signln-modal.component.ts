import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-signln-modal',
    templateUrl: './signln-modal.component.html',
    styleUrls: ['./signln-modal.component.sass'],
})
export class SignlnModalComponent {
    constructor(public auth: AuthService, public dialogRef: MatDialogRef<SignlnModalComponent>) {}

    ngOnInit(): void {}

    public googleLogin(): void {
        this.auth.signInWithGoogle().then((status) => {
            this.dialogRef.close();
        });
    }
}
