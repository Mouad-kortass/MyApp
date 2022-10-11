import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSectionComponent } from './ajouter-section.component';

describe('AjouterSectionComponent', () => {
  let component: AjouterSectionComponent;
  let fixture: ComponentFixture<AjouterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
