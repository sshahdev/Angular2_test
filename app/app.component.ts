import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import{Home} from 'app/component/app-home.component';
import{Email} from 'app/component/app-email.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Home', component: Home, useAsDefault:true},
    {path: '/email', name: 'Email', component: Email},
    {path: '/**', redirectTo: ["Home"]}
])
export class AppComponent {
}

