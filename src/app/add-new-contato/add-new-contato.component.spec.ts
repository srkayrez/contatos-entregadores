import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewContatoComponent } from './add-new-contato.component';

describe('AddNewContatoComponent', () => {
  let component: AddNewContatoComponent;
  let fixture: ComponentFixture<AddNewContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
