import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapersComponent } from './listapers.component';

describe('ListapersComponent', () => {
  let component: ListapersComponent;
  let fixture: ComponentFixture<ListapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListapersComponent]
    });
    fixture = TestBed.createComponent(ListapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
