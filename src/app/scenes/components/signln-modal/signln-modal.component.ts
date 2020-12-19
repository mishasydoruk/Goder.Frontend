import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
    selector: 'app-signln-modal',
    templateUrl: './signln-modal.component.html',
    styleUrls: ['./signln-modal.component.sass'],
})
export class SignlnModalComponent extends SimpleModalComponent<null, boolean> {
    constructor(public auth: AuthService) {
        super();
    }

    ngOnInit(): void {}

    public googleLogin(): void {
        this.auth.signInWithGoogle().then((status) => {
            this.result = status;
            this.close();
        });
    }

    public cancel(): void {
        this.result = false;
        this.close();
    }
}
