import { Routes } from '@angular/router';
<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';

=======
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
<<<<<<< Updated upstream
=======
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.guard';
>>>>>>> Stashed changes

>>>>>>> Stashed changes


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
<<<<<<< Updated upstream
        title: 'Home page'
=======
        title: 'Home page',
        canActivate: [AuthGuard]
>>>>>>> Stashed changes
    },
    {
        path: 'products',
        component: ProductsComponent,
<<<<<<< Updated upstream
        title: 'Products page'
=======
        title: 'Products page',
        canActivate: [AuthGuard]
>>>>>>> Stashed changes
    },
    {
        path: 'clients',
        component: ClientsComponent,
<<<<<<< Updated upstream
        title: 'Clients page'
=======
        title: 'Clients page',
        canActivate: [AuthGuard]
>>>>>>> Stashed changes
    },
    {
        path: 'orders',
        component: OrdersComponent,
<<<<<<< Updated upstream
        title: 'Orders page'
=======
        title: 'Orders page',
        canActivate: [AuthGuard]
>>>>>>> Stashed changes
    },
    {
        path: 'new-order',
        component: NewOrderComponent,
<<<<<<< Updated upstream
        title: 'New order page'
<<<<<<< Updated upstream
=======
=======
<<<<<<< Updated upstream
        title: 'New order page'
=======
        title: 'New order page',
        canActivate: [AuthGuard]
>>>>>>> Stashed changes
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login page'
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    }
];
=======
>>>>>>> Stashed changes
    }
];
>>>>>>> Stashed changes
>>>>>>> Stashed changes
