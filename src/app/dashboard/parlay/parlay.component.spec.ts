import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlayComponent } from './parlay.component';

describe('ParlayComponent', () => {
  let component: ParlayComponent;
  let fixture: ComponentFixture<ParlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
