import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDBComponent } from './tdb.component';

describe('TDBComponent', () => {
  let component: TDBComponent;
  let fixture: ComponentFixture<TDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
