import './styles/App.scss';
import MainNavigation from './components/MainNavigation';
import './styles/_reset.scss'
import Table from './components/Table'
import { mainTable } from '../src/components/Table/data';

function App() {
  const tableOptionsArray = [
    {name: 'add',callback:{}}, {name: 'addList',callback:{}}, {name: 'addContract',callback:{}}, {name: 'print',callback:{}}

  ]

  return (
    <div className='app'>
      <MainNavigation />
      <Table headers={mainTable} tabaleButtonsType={'edit'} tableOptionsArray={tableOptionsArray} />
    </div>
  );
}

export default App;
