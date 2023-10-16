import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConguardiaPage } from './conguardia.page';

describe('ConguardiaPage', () => {
  let component: ConguardiaPage;
  let fixture: ComponentFixture<ConguardiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConguardiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
