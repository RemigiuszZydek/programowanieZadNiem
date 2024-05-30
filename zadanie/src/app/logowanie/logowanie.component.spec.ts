import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    await TestBed.configureTestingModule({
      declarations: [LogowanieComponent],
      imports: [FormsModule, CommonModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in successfully with correct credentials', fakeAsync(() => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    authService.login.and.callFake(() => of(true)); // Symulacja udanego logowania

    component.logowanie();
    tick();

    expect(authService.login).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  }));

  it('should handle login error with incorrect credentials', () => {
    component.formData.username = 'wrongUsername';
    component.formData.password = 'wrongPassword';
    authService.login.and.callFake(() => of(false));

    component.logowanie();
  });
});
