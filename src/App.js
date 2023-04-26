import './styles/App.scss';
import MainNavigation from './components/MainNavigation';
import './styles/_reset.scss'
import Table from './components/Table'
import { mainTable } from '../src/components/Table/data';

function App() {
  return (
    <div className='app'>
      <MainNavigation />
      <Table headers={mainTable}/>
    </div>
  );
}

export default App;
