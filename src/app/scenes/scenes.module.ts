import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeFeatureComponent } from './components/some-feature/some-feature.component';
import { ProblemsPageComponent } from './components/problems-page/problems-page.component';
import { SharedModule } from '../shared/shared.module';
import { SignlnModalComponent } from './components/signln-modal/signln-modal.component';

@NgModule({
    declarations: [SomeFeatureComponent, ProblemsPageComponent, SignlnModalComponent],
    imports: [CommonModule, SharedModule],
    exports: [SharedModule, ProblemsPageComponent],
})
export class ScenesModule {}
