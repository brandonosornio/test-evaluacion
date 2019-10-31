import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormularioComponent } from './formulario.component';
import { Component1Component } from '../component1/component1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClient, HttpParams, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let component2: Component1Component;
  let fixture: ComponentFixture<FormularioComponent>;
  let fixture2: ComponentFixture<Component1Component>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent,Component1Component ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SlickCarouselModule
      ],
      providers: [
        HttpClient, 
        { provide: HttpParams, useValue: 'append' },
        HttpHandler,
        MatSnackBar,
        Overlay,
        
      ]
    })
    .compileComponents().then( () => {
      fixture = TestBed.createComponent(FormularioComponent);
      fixture2 = TestBed.createComponent(Component1Component);
      component = fixture.componentInstance;
      component2 = fixture2.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
  
  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    component.testForm.controls['name'].setValue('');
    component.testForm.controls['age'].setValue('');
    component.testForm.controls['comments'].setValue('');
    expect(component.testForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.testForm.controls['name'].setValue('hola');
    component.testForm.controls['age'].setValue('12');
    component.testForm.controls['comments'].setValue('text');
    expect(component.testForm.valid).toBeTruthy();
  }));

});
