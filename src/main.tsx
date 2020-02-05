import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { NumberSetterComponent } from './components/setter/NumberSetter'
import { NumberViewerComponent } from './components/viewer/NumberList'
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <>
      <NumberSetterComponent />
      <NumberViewerComponent />
    </>
  </Provider>,
  document.getElementById('root')
);
