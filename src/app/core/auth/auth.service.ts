import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, from } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public currentUser: firebase.User;
    public user$: Observable<firebase.User>;
    public isSignedIn = false;
    public hasLoaded = false;

    constructor(private fireAuth: AngularFireAuth, private userService: UserService) {
        this.user$ = fireAuth.authState;

        this.user$.subscribe((user) => {
            this.hasLoaded = true;
            if (user) {
                this.isSignedIn = true;
                this.currentUser = user;
                this.userService.registerUser(user);
            } else {
                this.isSignedIn = false;
                this.currentUser = null;
            }
        });
    }

    public async signInWithGoogle(): Promise<boolean> {
        return (await this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())) !== null;
    }

    public logout(): Promise<void> {
        return this.fireAuth.signOut();
    }

    public getToken(): Observable<string> {
        return this.fireAuth.idToken;
    }

    public refreshToken(): Observable<string> {
        return this.user$.pipe(
            filter((user) => Boolean(user)),
            mergeMap(async (user) => await user.getIdToken(true))
        );
    }
}
