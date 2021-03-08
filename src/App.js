import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import NewsTop from './components/news-top';

function App() {
  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
        </Jumbotron>
        <NewsTop query={`crypto`}/>
      </Container>
    </div>
  );
}

export default App;
