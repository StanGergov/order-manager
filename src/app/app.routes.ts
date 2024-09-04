import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products page',
        canActivate: [AuthGuard]
    },
    {
        path: 'clients',
        component: ClientsComponent,
        title: 'Clients page',
        canActivate: [AuthGuard]
    },
    {
        path: 'orders',
        component: OrdersComponent,
        title: 'Orders page',
        canActivate: [AuthGuard]
    },
    {
        path: 'new-order',
        component: NewOrderComponent,
        title: 'New order page',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    }
];