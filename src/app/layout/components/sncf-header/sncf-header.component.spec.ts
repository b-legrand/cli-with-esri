import { async, ComponentFixture } from '@angular/core/testing';

import { SncfHeaderComponent } from './sncf-header.component';
import { RouterModule } from '@angular/router';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('SncfHeaderComponent', () => {
  let component: SncfHeaderComponent;
  let fixture: ComponentFixture<SncfHeaderComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ SncfHeaderComponent ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SncfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
