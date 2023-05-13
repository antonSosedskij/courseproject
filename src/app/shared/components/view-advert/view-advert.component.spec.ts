import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvertComponent } from './view-advert.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { GalleryModule } from '../gallery/gallery.component';

describe('ViewAdvertComponent', () => {
  let component: ViewAdvertComponent;
  let fixture: ComponentFixture<ViewAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdvertComponent ],
      imports: [
        BreadcrumbModule,
        ButtonModule,
        GalleryModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
