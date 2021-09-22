import './App.css';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Hello</div>
      </div>
    </div>
  );
}

export default App;
