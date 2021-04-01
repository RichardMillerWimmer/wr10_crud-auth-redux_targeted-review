import { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import routes from './routes';

class App extends Component {
  componentDidMount() {
    // we'll have some functionality here where we don't lose our user info in redux if they refresh.
  }

  render() {
    return (
      <div className="site-container">
        <Header />
        <main className='main-view'>
          {routes}
        </main>
      </div>
    );
  }
}

export default App;
