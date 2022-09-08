import React from 'react';
import {Provider} from 'react-redux';
import { store } from './ios/src/redux/store/store';
import RootNavigator from './ios/src/navigation/RootNavigator'
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;