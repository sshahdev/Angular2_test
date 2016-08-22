import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CommonService} from '../service/common.service'

@Component({
    selector: 'news',
    template: `<div class="container">
    You are here: <a  [routerLink]="['Home']">Home</a> > {{ newsData.title }}
    <h2>{{ newsData.title }}</h2><hr>
    <div class="row">
      <h3>{{ newsData.description }}</h3>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CommonService]
})

export class News {
    constructor(private _CommonService:CommonService) {
        this._CommonService = _CommonService;
    }
    ngOnInit() {
        this.newsData={};
        this._CommonService.getNewsData()
            .subscribe(
                data => this.newsData = data,
                error => alert("Please enable CORS")
            );
    }
}


