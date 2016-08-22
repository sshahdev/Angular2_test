import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CommonService} from '../service/common.service'

@Component({
    selector: 'events',
    template: `<div class="container">
    You are here: <a  [routerLink]="['Home']">Home</a> > {{ event.title }}
    <h2>{{ event.title }}</h2><hr>
    <div class="row">
   
     <h3>{{ event.description }}</h3>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CommonService]
})

export class Events {
    constructor(private _CommonService:CommonService) {
        this._CommonService = _CommonService;
    }
    ngOnInit() {
        this.event={};
        this._CommonService.getEventData()
            .subscribe(
                data => this.event = data,
                error => alert("Please enable CORS")
            );
    }
}


