import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForAndngIfComponent } from './ng-for-andng-if.component';

describe('NgForAndngIfComponent', () => {
  let component: NgForAndngIfComponent;
  let fixture: ComponentFixture<NgForAndngIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForAndngIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForAndngIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
