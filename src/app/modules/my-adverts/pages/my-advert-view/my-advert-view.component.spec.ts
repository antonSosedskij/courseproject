import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvertViewComponent } from './my-advert-view.component';

describe('MyAdvertViewComponent', () => {
  let component: MyAdvertViewComponent;
  let fixture: ComponentFixture<MyAdvertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdvertViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAdvertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
