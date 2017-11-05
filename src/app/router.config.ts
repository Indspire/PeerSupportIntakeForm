import {Route} from '@angular/router';
import { HomeComponent} from './home/home.component'
import { MentorFormComponent} from './form/mentor-form/mentor-form.component';
import { MenteeFormComponent} from './form/mentee-form/mentee-form.component';


export const routerConfig: Route[] =[{
  path:'home',
  component: HomeComponent,
  children:[
    {
      path: 'mentor',
      component: MentorFormComponent,
    },
    {
      path: 'mentee',
      component: MenteeFormComponent,
    }

  ]
},
{
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full',
}

 /*  {
    path:'**',
    redirectTo: 'home',
    pathMatch: "full"
  },*/

]
