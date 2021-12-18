import {Header} from './components/ui-components'
import Homepage from './components/pages/homepage/Homepage'
import DetailMovie from './components/pages/detailMovie/DetailMovie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// REDUX
import store from './redux/store'
import {Provider} from 'react-redux'

import 'spectre.css';
import './App.scss'

function App() {
  return (     
    <Provider store={store}>
      <BrowserRouter>      
        <div className='body-container'>        
          <div className='container container__content'>   
            <Header/>
            <Routes>   
              <Route path="/" element={<Homepage/>} />                                         
              <Route path="/details/:id" element={<DetailMovie/>} />                                         
            </Routes>
          </div>        
        </div>      
      </BrowserRouter>
    </Provider>    
  );
}

export default App;
