import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSwiperComponent } from './app-swiper.component';

describe('AppSwiperComponent', () => {
  let component: AppSwiperComponent;
  let fixture: ComponentFixture<AppSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
