import { RequestOptions,HttpModule, Headers, Http, BaseRequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions{
    headers:Headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
}
