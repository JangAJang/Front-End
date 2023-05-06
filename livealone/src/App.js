import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  const name = "Janghee";
  const naver = {
    name: "네이버",
    url: "http://www.naver.com"
  }
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
    </div>
  );
}

export default App;
