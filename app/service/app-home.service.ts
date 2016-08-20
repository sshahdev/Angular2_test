import {Injectable} from "angular2/core"
import {Http, Headers} from 'angular2/http';
import {AppSettings} from '../constant/AppSettings.class';
import 'rxjs/Rx'

@Injectable()
export class AppHomeService {
    endpoint_url:String = `${AppSettings.API_ENDPOINT}`;

    constructor(http:Http) {
        this.http = http;
    }

    createAcceptHeader(headers:Headers) {
        headers.append('Accept', 'application/json');
    }

    getUsers() {
        let headers = new Headers();
        this.createAcceptHeader(headers);
        return this.http.get(this.endpoint_url,
            {
                headers: headers
            }).map(res => res.json());
    }

}