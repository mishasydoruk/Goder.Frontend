import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../../shared/models/user';
import { FirebaseUser } from '../../shared/models/firebaseUser';
import { first } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public currentUser: User = null;
    private userRegistered = new ReplaySubject<User>(1);
    public userRegistered$ = this.userRegistered.asObservable();

    constructor(private httpService: HttpService) {}

    public registerUser(firebaseUser: firebase.User): void {
        const fireUser: FirebaseUser = {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            photoURL: firebaseUser.photoURL,
        };
        this.httpService
            .postFullRequest<FirebaseUser, User>('/api/registration', fireUser)
            .pipe(first())
            .subscribe(
                (user) => {
                    this.userRegistered.next(user.body);
                    this.currentUser = user.body;
                },
                (error) => {
                    this.httpService
                        .postFullRequest<FirebaseUser, User>('/api/registration', fireUser)
                        .pipe(first())
                        .subscribe((user) => {
                            this.userRegistered.next(user.body);
                            this.currentUser = user.body;
                        });
                }
            );
    }
}
