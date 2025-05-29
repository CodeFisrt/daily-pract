import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { SettingComponent } from './dashboard/setting/setting.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     component:HomeComponent
    // },
    // {
    //     path:'footer',
    //     component:FooterComponent
    // },
    // {
    //     path:'sidebar/:id',
    //     component:SidebarComponent
    // },
    // {
    //     path:'footer',
    //     component:FooterComponent
    // },
    // {
    //     path:'',
    //     redirectTo:'/home',
    //     pathMatch:'full',
    // },
    // {
    //     path:"**",
    //     component:FooterComponent
    // },
    // {
    //     path:'dashboard',
    //     component:HeaderComponent,
    //     children:[
    //         {
    //             path:'subheader',
    //             component:SidebarComponent
    //         }
    //     ]
    // }
    {
        path:'',
        component:HeaderComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'footer',
        component:FooterComponent
    },
    {
        path:"sidebar/:id",
        component:SidebarComponent,
        // data: [{ title: 'Gorakh Kharat',education:"BE" },{ title: 'Gorakh Kharat 1',education:"BE 1" }]
    },
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'user',
                component:UserComponent
            },
            {
                path:'settings',
                component:SettingComponent
            }
        ]
    }
];
