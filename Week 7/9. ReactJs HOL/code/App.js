import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

function App(){
  const flag = true;

  return(
    <div style={{padding: '20px'}}>
      <h1>Cricket Application</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;