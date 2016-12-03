import {provideRouter, RouterConfig} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {EmptyComponent} from "./empty.component";
import {AuthGuard} from "./security/authGuard";
import {MyTasksComponent} from "./tasks/mytasks/mytasks.component";

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'mytasks',
        component: MyTasksComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent,
        canActivate : [AuthGuard]
    },
    {
        path: '',
        component: EmptyComponent
    }

];

export const authProviders = [AuthGuard];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    authProviders
];
