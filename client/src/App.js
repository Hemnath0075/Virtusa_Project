import './App.css';
import {Routes,Route} from 'react-router-dom';
import AddTheme from './Pages/AddTheme/AddTheme';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/admin/addtheme' element={<AddTheme/>}/>
        </Routes>
    </div>
  );
}

export default App;
