import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCardComponent } from './side-menu-card.component';

describe('SideMenuCardComponent', () => {
  let component: SideMenuCardComponent;
  let fixture: ComponentFixture<SideMenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
