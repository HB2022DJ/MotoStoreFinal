import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeMarqueComponent } from './bike-marque.component';

describe('BikeMarqueComponent', () => {
  let component: BikeMarqueComponent;
  let fixture: ComponentFixture<BikeMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
