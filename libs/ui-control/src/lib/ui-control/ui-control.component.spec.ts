import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiControlComponent } from './ui-control.component';

describe('UiControlComponent', () => {
  let component: UiControlComponent;
  let fixture: ComponentFixture<UiControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
