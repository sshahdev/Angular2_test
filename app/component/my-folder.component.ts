import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteParams} from 'angular2/router';
import {CommonService} from '../service/common.service'

@Component({
    selector: 'my-folder',
    template: `<div class="container">
    You are here: <a  [routerLink]="['Home']">Home</a> > {{ folder.title }}
    <h2>{{ folder.title }}</h2><hr>
    <div class="row">
    <p *ngFor="#item of folder.items">
    <span class="glyphicon glyphicon-folder-open">
      <a [routerLink]="['MyFolder',{value:item.title}]"> {{ item.title }}</a></span>
     </p>
     <h2>{{ queryResult.title }}</h2><hr>{{ queryResult.items }}
    <div class="row">
      <h6 *ngIf="queryResult.items==''">There are currently no items in this folder.</h6>
    </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CommonService]
})

export class MyFolder implements OnInit {
    path:string;
    constructor(private _CommonService:CommonService, private params:RouteParams) {
        this._CommonService = _CommonService;
        this.path = params.get('value');
        this.folder={};
        this._CommonService.getMyFolderData()
            .subscribe(
                data => this.folder = data,
                error => alert("Please enable CORS")
            );

    }
    ngOnInit() {   //after constructor
        this.queryResult={};
        if(this.path!=''){
            this._CommonService.getSubFolder(this.path)
                .subscribe(
                    data => this.queryResult = data,
                    error => alert("Please enable CORS")
                );
        }

    }
}


