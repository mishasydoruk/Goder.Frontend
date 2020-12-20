import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SignlnModalComponent } from './components/signln-modal/signln-modal.component';

import { SomeFeatureComponent } from './components/some-feature/some-feature.component';
import { ProblemsPageComponent } from './components/problems-page/problems-page.component';
import { ProblemPageComponent } from './components/problem-page/problem-page.component';
import { CodeEditorModule } from '@ngstack/code-editor';
@NgModule({
    declarations: [SomeFeatureComponent, ProblemsPageComponent, SignlnModalComponent, ProblemPageComponent],
    imports: [CommonModule, SharedModule, CodeEditorModule.forRoot()],
    exports: [SharedModule, ProblemsPageComponent, ProblemPageComponent],
})
export class ScenesModule {}
