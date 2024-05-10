import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayurComponent } from './mayur.component';

describe('MayurComponent', () => {
  let component: MayurComponent;
  let fixture: ComponentFixture<MayurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayurComponent]
    });
    fixture = TestBed.createComponent(MayurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
