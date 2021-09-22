import './App.css';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
