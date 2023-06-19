import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAdminComponent } from './comments-admin.component';

describe('CommentsAdminComponent', () => {
  let component: CommentsAdminComponent;
  let fixture: ComponentFixture<CommentsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsAdminComponent]
    });
    fixture = TestBed.createComponent(CommentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
