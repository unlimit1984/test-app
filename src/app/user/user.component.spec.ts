import { async, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('Component: User:', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data')); //тут мы заменяем реальный вызов на fake, но без тоже работает
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously with fakeAsync and tick 1', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data')); //тут мы заменяем реальный вызов на fake, но без тоже работает
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));

  it('should fetch data successfully if called asynchronously with fakeAsync and tick 2', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    // let spy = spyOn(dataService, 'getDetails')
    //   .and.returnValue(Promise.resolve('Data')); //тут мы заменяем реальный вызов на fake, но без тоже работает
    fixture.detectChanges();
    tick(3700);
    expect(app.data).toBe('Data');
  }));

  it('should fetch data successfully if called asynchronously with fakeAsync and tick 3', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    // let spy = spyOn(dataService, 'getDetails')
    //   .and.returnValue(Promise.resolve('Data')); //тут мы заменяем реальный вызов на fake, но без тоже работает
    fixture.detectChanges();
    tick(3699);
    tick(1);
    expect(app.data).toBe('Data');
  }));

  it('should fetch data successfully if called asynchronously with fakeAsync and tick 4', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    // let spy = spyOn(dataService, 'getDetails')
    //   .and.returnValue(Promise.resolve('Data')); //тут мы заменяем реальный вызов на fake, но без тоже работает
    fixture.detectChanges();
    flush();
    expect(app.data).toBe('Data');
  }));

});
