import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterListComponent } from './harry-potter-list.component';

describe('HarryPotterListComponent', () => {
  let component: HarryPotterListComponent;
  let fixture: ComponentFixture<HarryPotterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarryPotterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarryPotterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
