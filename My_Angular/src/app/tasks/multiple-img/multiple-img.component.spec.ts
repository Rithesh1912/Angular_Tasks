import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImgComponent } from './multiple-img.component';

describe('MultipleImgComponent', () => {
  let component: MultipleImgComponent;
  let fixture: ComponentFixture<MultipleImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
