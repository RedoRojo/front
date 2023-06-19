import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPostsComponent } from './mis-posts.component';

describe('MisPostsComponent', () => {
  let component: MisPostsComponent;
  let fixture: ComponentFixture<MisPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPostsComponent]
    });
    fixture = TestBed.createComponent(MisPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
