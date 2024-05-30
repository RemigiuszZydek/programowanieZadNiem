// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LogowanieComponent } from './logowanie.component';

// describe('LogowanieComponent', () => {
//   let component: LogowanieComponent;
//   let fixture: ComponentFixture<LogowanieComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LogowanieComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LogowanieComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form data', () => {
    expect(component.formData).toBeDefined();
    expect(component.formData.username).toBe('');
    expect(component.formData.password).toBe('');
  });

  it('should log in successfully with correct credentials', () => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'przykladoweHaslo';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Zalogowano pomyslnie');
  });

  it('should handle login error with incorrect username', () => {
    component.formData.username = 'incorrectUser';
    component.formData.password = 'przykladoweHaslo';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Blad logowania. Sprawdz dane');
  });

  it('should handle login error with incorrect password', () => {
    component.formData.username = 'przykladowyUzytkownik';
    component.formData.password = 'incorrectPassword';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Blad logowania. Sprawdz dane');
  });

  it('should handle login error with incorrect credentials', () => {
    component.formData.username = 'incorrectUser';
    component.formData.password = 'incorrectPassword';
    spyOn(console, 'log');
    component.logowanie();
    expect(console.log).toHaveBeenCalledWith('Blad logowania. Sprawdz dane');
  });
});
