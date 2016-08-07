// The usual bootstrapping imports
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {AuthenticationService} from "./security/authentication.service";
import {HttpClient} from "./httpClient/httpClient";

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    [HttpClient, AuthenticationService],
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
]);
