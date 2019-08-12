import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic0aComponent } from './topic0a.component';

describe('Topic0aComponent', () => {
  let component: Topic0aComponent;
  let fixture: ComponentFixture<Topic0aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic0aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic0aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
