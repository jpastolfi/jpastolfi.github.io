import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommonComponent } from './card-common.component';

describe('CardCommonComponent', () => {
  let component: CardCommonComponent;
  let fixture: ComponentFixture<CardCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCommonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
