import {Injectable} from "angular2/core"
import {Http} from 'angular2/http';
import {AppSettings} from '../constant/AppSettings.class';
import 'rxjs/Rx'

@Injectable()
export class AppEmailService {
    endpoint_url:String = `${AppSettings.API_ENDPOINT}`;

    constructor(http:Http) {
        this.http = http;
    }
    getEmails(userId) {
       return this.http.get(this.endpoint_url+'/'+userId+'/comments')
                .map(res => res.json());
    }
}