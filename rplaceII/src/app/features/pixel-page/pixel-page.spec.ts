import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelPage } from './pixel-page';

describe('PixelPage', () => {
  let component: PixelPage;
  let fixture: ComponentFixture<PixelPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PixelPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
