import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import{Home} from 'app/component/home.component';
import{News} from 'app/component/news.component';
import{Events} from 'app/component/events.component';
import{MyFolder} from 'app/component/my-folder.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: Home, useAsDefault:true},
    {path: '/news', name: 'News', component: News},
    {path: '/events', name: 'Events', component: Events},
    {path: '/myFolder/:value', name: 'MyFolder', component: MyFolder},
    {path: '/**', redirectTo: ['Home']}
])
export class AppComponent {

}

