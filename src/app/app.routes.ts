import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './layout/layout';
import { Users } from './users/users';
import { Orders } from './features/orders/orders';
import { UserDetails } from './users/user-details/user-details';
import { AuthGuard } from './core/auth-guard';
import { Kitchen } from './features/kitchen/kitchen';
import { Menu } from './features/menu/menu';

// Route configuration for login, dashboard, users, orders, kitchen, and menu pages.
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Form },

  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard ,canActivate: [AuthGuard]},
      { path: 'users', component: Users },
       { path: 'users/:id', component: UserDetails },
       { path: 'orders', component: Orders },
       { path: 'kitchen', component: Kitchen },
       { path: 'menu', component: Menu }
    ]
  }
];