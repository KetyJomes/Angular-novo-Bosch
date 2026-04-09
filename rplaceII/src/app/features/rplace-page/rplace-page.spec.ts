import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RplacePage } from './rplace-page';

describe('RplacePage', () => {
  let component: RplacePage;
  let fixture: ComponentFixture<RplacePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RplacePage],
    }).compileComponents();

    fixture = TestBed.createComponent(RplacePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
