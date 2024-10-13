import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyTaaskComponent } from './list-my-taask.component';

describe('ListMyTaaskComponent', () => {
  let component: ListMyTaaskComponent;
  let fixture: ComponentFixture<ListMyTaaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMyTaaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMyTaaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
