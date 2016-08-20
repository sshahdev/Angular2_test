import {Component} from 'angular2/core';
import {AppEmailService} from '../service/app-email.service'

@Component({
    selector: 'app-email',
    template: `<div class="container">
    <h2>See Emails Sent by users</h2>
    <div class="row">
        <form (ngSubmit)="getEmailOfUser()">
            <div class="form-group">
                <label>USER ID(1-100)</label>
                <input type="text" [(ngModel)]="userId">
            </div>
            <button class="btn btn-default" type="submit">See Email</button>
        </form>
    </div>
    <div class="row">
        <h1>Emails sent by user ID {{ userId }}</h1>
        <table class="table table-bordered">
            <thead><tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th></tr>
            </thead>
            <tbody><tr *ngFor="#email of emails">
                <td>{{email.name}}</td>
                <td>{{email.email}}</td>
                <td>{{email.body}}</td>
            </tr></tbody>
        </table></div></div>`,
    providers: [AppEmailService]
})

export class Email {
    constructor(private _AppEmailService:AppEmailService) {
        this._AppEmailService = _AppEmailService;
    }

    getEmailOfUser() {
        var userID = this.userId
        if (userID > 0 && userID < 101) {
            this._AppEmailService.getEmails(userID)
                .subscribe(
                    data => this.emails = data,
                    error => this.error = "Please try again later"
                );
        }
        else {
            alert('Invalid user ID');
        }
    }
}


