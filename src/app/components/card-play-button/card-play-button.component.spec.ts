import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayButtonComponent } from './card-play-button.component';
import { PlayerService } from 'src/app/services/player.service';

const playerServiceMock = {
  currentMusic: () => {},
  setCurrentMusic: () => {},
    isPlaying: () => {},
  setIsPlaying: () => {}
}
describe('CardPlayButtonComponent', () => {
  let component: CardPlayButtonComponent;
  let fixture: ComponentFixture<CardPlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlayButtonComponent],
      // providers: [{provides: PlayerService, useValue: playerServiceMock}]
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
