import {
    Inject,
    Injectable,
    PLATFORM_ID
} from '@angular/core';
import { LocationStrategy } from '@angular/common';
import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor( @Inject(PLATFORM_ID) public platformId: Object,
                 private locationStrategy: LocationStrategy,
    ) {}
    addToken(req: HttpRequest<any> ): HttpRequest<any> {
        return req.clone({
            setHeaders: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': 'http://ecommerceux.wpengine.com',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
            }
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        return next.handle(this.addToken(req))


    }
}
