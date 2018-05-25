import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponentComponent } from './submodule/entry-component/entry-component.component';
import { DefaultRootComponent } from './default-root/default-root.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultRootComponent
  },
  {
    path: 'submodule',
    component: EntryComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
