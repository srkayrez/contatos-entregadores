import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportContatoComponent } from './report-contato.component';

describe('ReportContatoComponent', () => {
  let component: ReportContatoComponent;
  let fixture: ComponentFixture<ReportContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
