import './styles/App.scss';
import MainNavigation from './components/MainNavigation';
import './styles/_reset.scss'
import Table from './components/Table'
import { mainTable, planTable,contractTable,printTable,printTableSecond,customerTable } from '../src/components/Table/data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const maindbOptionsArray = [
    // { name: 'add', callback: {} }, { name: 'addList', callback: {} }, { name: 'addContract', callback: {} }, { name: 'print', callback: {} }
    { name: 'add', callback: {} }

  ]
  const planOptionsArray = [
    { name: 'add', callback: {} }, { name: 'addList', callback: {} }, { name: 'addContract', callback: {} }, { name: 'print', callback: {} }

  ]
  const printOptionsArray = [
    { name: 'add', callback: {} },  { name: 'print', callback: {} }

  ]


  return (
    <div className='app'>
      <Router>
        <MainNavigation />
        <Routes>
          <Route path="/maindb" element={<Table headers={mainTable} tabaleButtonsType={'edit'} tableOptionsArray={maindbOptionsArray} url={'api/v1/main'} />} />
          <Route path="/plan" element={<Table headers={planTable} tabaleButtonsType={'view'} tableOptionsArray={planOptionsArray} url={'api/v1/main'} />} />
          <Route path="/contracts" element={<Table headers={contractTable} tabaleButtonsType={'edit'}  url={'api/v1/main'} />} />
          <Route path="/print" element={<Table headers={printTable} tabaleButtonsType={'edit'} tableOptionsArray={printOptionsArray} url={'api/v1/main'} />} />
          <Route path="/print" element={<Table headers={customerTable} tabaleButtonsType={'edit'}  url={'api/v1/main'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
