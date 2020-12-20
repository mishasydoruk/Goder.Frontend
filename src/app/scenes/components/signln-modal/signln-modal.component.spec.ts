import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignlnModalComponent } from './signln-modal.component';

describe('SignlnModalComponent', () => {
    let component: SignlnModalComponent;
    let fixture: ComponentFixture<SignlnModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignlnModalComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignlnModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
