import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesChampsComponent } from './mes-champs.component';

describe('MesChampsComponent', () => {
  let component: MesChampsComponent;
  let fixture: ComponentFixture<MesChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesChampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
