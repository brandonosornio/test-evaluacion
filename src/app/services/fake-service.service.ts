import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from '../../assets/data.json';

@Injectable()

export class FakeServiceService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url == 'add-person' && req.method == 'POST') {
      return of( new HttpResponse({ status: 200, body: req.body as any }));
    }
    if(req.url == 'get-person' && req.method == 'GET') {
      return of( new HttpResponse({ status: 200, body: ((data) as any).default.find( el => el.id == req.params.get('key'))}));
    }
    return next.handle(req);
  }

}
