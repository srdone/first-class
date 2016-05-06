import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2AppComponent } from '../app/ng2.component';

beforeEachProviders(() => [Ng2AppComponent]);

describe('App: Ng2', () => {
  it('should create the app',
      inject([Ng2AppComponent], (app: Ng2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2 works!\'',
      inject([Ng2AppComponent], (app: Ng2AppComponent) => {
    expect(app.title).toEqual('ng2 works!');
  }));
});
