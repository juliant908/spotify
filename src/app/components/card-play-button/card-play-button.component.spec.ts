import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayButtonComponent } from './card-play-button.component';

describe('CardPlayButtonComponent', () => {
  let component: CardPlayButtonComponent;
  let fixture: ComponentFixture<CardPlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlayButtonComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
