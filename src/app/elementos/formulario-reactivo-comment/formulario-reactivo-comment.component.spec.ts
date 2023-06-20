import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoCommentComponent } from './formulario-reactivo-comment.component';

describe('FormularioReactivoCommentComponent', () => {
  let component: FormularioReactivoCommentComponent;
  let fixture: ComponentFixture<FormularioReactivoCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioReactivoCommentComponent]
    });
    fixture = TestBed.createComponent(FormularioReactivoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
