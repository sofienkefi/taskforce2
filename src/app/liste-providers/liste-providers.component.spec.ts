import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProvidersComponent } from './liste-providers.component';

describe('ListeProvidersComponent', () => {
  let component: ListeProvidersComponent;
  let fixture: ComponentFixture<ListeProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
