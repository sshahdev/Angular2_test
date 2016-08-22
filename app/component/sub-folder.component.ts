import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CommonService} from '../service/common.service'


@Component({
    selector: 'sub-folder',
    template: `<div class="container">
    You are here: <a  [routerLink]="['Home']">Home</a> > <a  [routerLink]="['MyFolder']">My Folder</a> >  {{ subfolder.title }}
    <h2>{{ subfolder.title }}</h2><hr>{{ subfolder.items }}
    <div class="row">
      <h6 *ngIf="subfolder.items==''">There are currently no items in this folder.</h6>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CommonService]
})

export class SubFolder {
    constructor(private _CommonService:CommonService) {
        this._CommonService = _CommonService;
    }

    ngOnInit() {   //after constructor
        this.subfolder={};
        this._CommonService.getSubFolder()
            .subscribe(
                data => this.subfolder = data,
                error => alert("Please enable CORS")
            );
    }
}


