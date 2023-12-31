import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsLayoutComponent } from './requests-layout.component';

describe('RequestsLayoutComponent', () => {
  let component: RequestsLayoutComponent;
  let fixture: ComponentFixture<RequestsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsLayoutComponent]
    });
    fixture = TestBed.createComponent(RequestsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
