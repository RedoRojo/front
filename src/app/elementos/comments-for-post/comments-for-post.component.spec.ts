import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsForPostComponent } from './comments-for-post.component';

describe('CommentsForPostComponent', () => {
  let component: CommentsForPostComponent;
  let fixture: ComponentFixture<CommentsForPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsForPostComponent]
    });
    fixture = TestBed.createComponent(CommentsForPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
