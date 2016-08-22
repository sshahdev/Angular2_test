import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CommonService} from '../service/common.service'

@Component({
    selector: 'my-folder',
    template: `<div class="container">
    You are here: <a  [routerLink]="['Home']">Home</a> > {{ folder.title }}
    <h2>{{ folder.title }}</h2><hr>
    <div class="row">
    <p *ngFor="#item of folder.items">
    <span class="glyphicon glyphicon-folder-open">
      <a [routerLink]="['SubFolder']"> {{ item.title }}</a></span>
     </p> 
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CommonService]
})

export class MyFolder {
    constructor(private _CommonService:CommonService) {
        this._CommonService = _CommonService;
    }
    ngOnInit() {
        this.folder={};
        this._CommonService.getMyFolderData()
            .subscribe(
                data => this.folder = data,
                error => alert("Please enable CORS")
            );
    }
}


