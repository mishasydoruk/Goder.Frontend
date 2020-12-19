import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SignlnModalComponent } from 'src/app/scenes/components/signln-modal/signln-modal.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'frontend';

    constructor(public authService: AuthService, public dialog: MatDialog) {}

    async signIn(): Promise<void> {
        const dialogRef = this.dialog.open(SignlnModalComponent);
    }
}
