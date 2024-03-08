import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMenuButtonComponent } from './toggle-menu-button.component';

describe('ToggleMenuButtonComponent', () => {
  let component: ToggleMenuButtonComponent;
  let fixture: ComponentFixture<ToggleMenuButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleMenuButtonComponent]
    });
    fixture = TestBed.createComponent(ToggleMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
