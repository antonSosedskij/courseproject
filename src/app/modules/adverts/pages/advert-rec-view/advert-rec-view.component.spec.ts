import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertRecViewComponent } from './advert-rec-view.component';

describe('AdvertRecViewComponent', () => {
  let component: AdvertRecViewComponent;
  let fixture: ComponentFixture<AdvertRecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertRecViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertRecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
