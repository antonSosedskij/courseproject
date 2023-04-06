import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsRecComponent } from './adverts-rec.component';

describe('AdvertsRecComponent', () => {
  let component: AdvertsRecComponent;
  let fixture: ComponentFixture<AdvertsRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertsRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
