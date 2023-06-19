import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePComponent } from './detalle-p.component';

describe('DetallePComponent', () => {
  let component: DetallePComponent;
  let fixture: ComponentFixture<DetallePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePComponent]
    });
    fixture = TestBed.createComponent(DetallePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
