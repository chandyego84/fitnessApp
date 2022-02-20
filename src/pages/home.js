import logo from '../logo.svg';
import '../App.css';
import NavBar from '../components/navbar.js';

function Home() {
  return (
    <div>
        <NavBar />
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Start of Chandler's new website...Here we go again.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            </a>
        </header>
        </div>
    </div>
  );
}

export default Home;
