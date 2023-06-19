import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePostAdminComponent } from './unique-post-admin.component';

describe('UniquePostAdminComponent', () => {
  let component: UniquePostAdminComponent;
  let fixture: ComponentFixture<UniquePostAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniquePostAdminComponent]
    });
    fixture = TestBed.createComponent(UniquePostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
