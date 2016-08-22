import {Injectable} from "angular2/core"
import {Http, Headers} from 'angular2/http';
import {ApiEndPoint} from '../constant/ApiEndPoint.class';
import 'rxjs/Rx'

@Injectable()
export class CommonService {
    plone_url:String = `${ApiEndPoint.PLONE_ENDPOINT}`;

    constructor(http:Http) {
        this.http = http;
    }
    createAcceptHeader(headers:Headers) {
        headers.append('Accept', 'application/json');
    }

    getNewsData(){
        let headers = new Headers();
        this.createAcceptHeader(headers);
        return this.http.get(this.plone_url+'/news', {
            headers: headers
        }).map(res => res.json());
    }

    getEventData(){
        let headers = new Headers();
        this.createAcceptHeader(headers);
        return this.http.get(this.plone_url+'/events', {
            headers: headers
        }).map(res => res.json());
    }

    getMyFolderData(){
        let headers = new Headers();
        this.createAcceptHeader(headers);
        return this.http.get(this.plone_url+'/my-folder', {
            headers: headers
        }).map(res => res.json());
    }

    getSubFolder(){
        let headers = new Headers();
        this.createAcceptHeader(headers);
        return this.http.get(this.plone_url+'/my-folder/my-subfolder', {
            headers: headers
        }).map(res => res.json());
    }
}