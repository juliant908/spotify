import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistItemCardComponent } from './playlist-item-card.component';

describe('PlaylistItemCardComponent', () => {
  let component: PlaylistItemCardComponent;
  let fixture: ComponentFixture<PlaylistItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
