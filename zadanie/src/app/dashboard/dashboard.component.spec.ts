import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../auth.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {
    authServiceStub = {
      isLoggedIn: true,
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLoggedIn correctly from AuthService', () => {
    expect(component.isLoggedIn).toEqual(true);
  });
});
