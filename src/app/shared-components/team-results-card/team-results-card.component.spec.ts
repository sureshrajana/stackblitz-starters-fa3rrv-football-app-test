import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsCardComponent } from './team-results-card.component';

describe('TeamResultsCardComponent', () => {
  let component: TeamResultsCardComponent;
  let fixture: ComponentFixture<TeamResultsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamResultsCardComponent]
    });
    fixture = TestBed.createComponent(TeamResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
