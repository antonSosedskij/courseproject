import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvertComponent } from './create-advert.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';


describe('CreateAdvertComponent', () => {
  let component: CreateAdvertComponent;
  let fixture: ComponentFixture<CreateAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdvertComponent ],
      imports: [
        InputTextModule,
        InputNumberModule,
        ButtonModule,
        // ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
