import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerUtilisateurComponent } from './lister-utilisateur.component';

describe('ListerUtilisateurComponent', () => {
  let component: ListerUtilisateurComponent;
  let fixture: ComponentFixture<ListerUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
