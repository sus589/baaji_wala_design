import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoAllComponent } from './casino-all.component';

describe('CasinoAllComponent', () => {
  let component: CasinoAllComponent;
  let fixture: ComponentFixture<CasinoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasinoAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
