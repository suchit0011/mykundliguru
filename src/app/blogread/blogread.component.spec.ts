import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogreadComponent } from './blogread.component';

describe('BlogreadComponent', () => {
  let component: BlogreadComponent;
  let fixture: ComponentFixture<BlogreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
