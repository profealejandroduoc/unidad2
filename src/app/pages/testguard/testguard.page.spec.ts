import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestguardPage } from './testguard.page';

describe('TestguardPage', () => {
  let component: TestguardPage;
  let fixture: ComponentFixture<TestguardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestguardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
