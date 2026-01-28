import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumParlayComponent } from './premium-parlay.component';

describe('PremiumParlayComponent', () => {
  let component: PremiumParlayComponent;
  let fixture: ComponentFixture<PremiumParlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumParlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumParlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
