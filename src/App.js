import logo from './logo.svg';
import './App.css';
import TableData from './table';
import store from './store/store';
import pstore from './store/store';
import {Provider} from 'react-redux';
import Sample from './sample';
import { PersistGate } from 'redux-persist/integration/react';
import AllTab from './tab';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        
     <AllTab/>
     
     </Provider>
    </div>
  );
}

export default App;
