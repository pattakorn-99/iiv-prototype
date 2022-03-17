import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImgUploadCardComponent } from './car-img-upload-card.component';

describe('CarImgUploadCardComponent', () => {
  let component: CarImgUploadCardComponent;
  let fixture: ComponentFixture<CarImgUploadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImgUploadCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImgUploadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
