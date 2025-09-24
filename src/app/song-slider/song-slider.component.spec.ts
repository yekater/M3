import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSliderComponent } from './song-slider.component';

describe('SongSliderComponent', () => {
  let component: SongSliderComponent;
  let fixture: ComponentFixture<SongSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
