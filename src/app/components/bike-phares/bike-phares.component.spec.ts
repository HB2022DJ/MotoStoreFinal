import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikePharesComponent } from './bike-phares.component';

describe('BikePharesComponent', () => {
  let component: BikePharesComponent;
  let fixture: ComponentFixture<BikePharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikePharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
