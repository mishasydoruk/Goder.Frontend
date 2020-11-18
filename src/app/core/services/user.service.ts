import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../../shared/models/user';
import { first } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private currentUser: User = null;
    private userRegistered = new ReplaySubject<User>(1);
    public userRegistered$ = this.userRegistered.asObservable();

    constructor(private httpService: HttpService) {}

    public registerUser(firebaseUser: firebase.User): void {
        this.httpService
            .postFullRequest<firebase.User, User>('/api/registration', firebaseUser)
            .pipe(first())
            .subscribe(
                (user) => {
                    this.userRegistered.next(user.body);
                    this.currentUser = user.body;
                },
                (error) => {
                    this.httpService
                        .postFullRequest<firebase.User, User>('api/registration', firebaseUser)
                        .pipe(first())
                        .subscribe((user) => {
                            this.userRegistered.next(user.body);
                            this.currentUser = user.body;
                        });
                }
            );
    }
}
