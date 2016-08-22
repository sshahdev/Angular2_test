import {Component,bind} from 'angular2/core';
import {ROUTER_PROVIDERS,APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppComponent} from 'app/app.component';

import {bootstrap} from 'angular2/platform/browser';

bootstrap(AppComponent, [HTTP_PROVIDERS,
    ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname)
]);