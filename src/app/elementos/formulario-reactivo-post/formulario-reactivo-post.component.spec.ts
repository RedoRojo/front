import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoPostComponent } from './formulario-reactivo-post.component';

describe('FormularioReactivoPostComponent', () => {
  let component: FormularioReactivoPostComponent;
  let fixture: ComponentFixture<FormularioReactivoPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioReactivoPostComponent]
    });
    fixture = TestBed.createComponent(FormularioReactivoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
