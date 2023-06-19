import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePostComponent } from './unique-post.component';

describe('UniquePostComponent', () => {
  let component: UniquePostComponent;
  let fixture: ComponentFixture<UniquePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniquePostComponent]
    });
    fixture = TestBed.createComponent(UniquePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
