import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemsPageComponent } from '../scenes/components/problems-page/problems-page.component';

const routes: Routes = [
    {
        path: 'problems',
        component: ProblemsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
