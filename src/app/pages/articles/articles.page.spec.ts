import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPage } from './articles.page';

describe('ArticlesPage', () => {
  let component: ArticlesPage;
  let fixture: ComponentFixture<ArticlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
