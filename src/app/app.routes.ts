import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products page'
    },
    {
        path: 'clients',
        component: ClientsComponent,
        title: 'Clients page'
    },
    {
        path: 'orders',
        component: OrdersComponent,
        title: 'Orders page'
    },
    {
        path: 'new-order',
        component: NewOrderComponent,
        title: 'New order page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
    }
];
