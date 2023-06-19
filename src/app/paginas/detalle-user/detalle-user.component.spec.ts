import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUserComponent } from './detalle-user.component';

describe('DetalleUserComponent', () => {
  let component: DetalleUserComponent;
  let fixture: ComponentFixture<DetalleUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleUserComponent]
    });
    fixture = TestBed.createComponent(DetalleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
