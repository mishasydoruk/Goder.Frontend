import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemPageComponent } from '../scenes/components/problem-page/problem-page.component';
import { ProblemsPageComponent } from '../scenes/components/problems-page/problems-page.component';

const routes: Routes = [
    {
        path: 'problems',
        component: ProblemsPageComponent,
    },
    {
        path: 'problem/:id',
        component: ProblemPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
