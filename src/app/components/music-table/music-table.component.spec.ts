import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTableComponent } from './music-table.component';

describe('MusicTableComponent', () => {
  let component: MusicTableComponent;
  let fixture: ComponentFixture<MusicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
