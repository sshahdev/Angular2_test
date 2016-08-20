import {Component, OnInit} from 'angular2/core';
import {AppHomeService} from '../service/app-home.service'

@Component({
    selector: 'app-home',
    template: `<div class="container">
    <h2>Users</h2>
    <p>This is the list of users for public REST API</p>
    <table class="table table-bordered">
        <thead><tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
        </tr></thead>
        <tbody><tr *ngFor="#user of users; #i=index">
            <td *ngIf="i<15">{{user.id}}</td>
            <td *ngIf="i<15">{{user.title}}</td>
            <td *ngIf="i<15">{{user.body}}</td></tr>
        </tbody></table></div>`,
    providers: [AppHomeService]
})

export class Home {
    constructor(private _AppHomeService:AppHomeService) {
        this._AppHomeService = _AppHomeService;
    }

    ngOnInit() {   //after constructor
        this.users = [];
        this._AppHomeService.getUsers()
            .subscribe(
                data => this.users = data,
                error => this.error = "Please try again later"
            );
    }
}


