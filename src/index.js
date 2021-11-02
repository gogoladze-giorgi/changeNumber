import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from '../src/component/store/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

