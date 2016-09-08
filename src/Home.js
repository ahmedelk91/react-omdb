// Developer TODO: Define App component defintion here
import React, {Component} from 'react';
import Search from './Search'

class Home extends Component {
  render(){
    return(
      <div>
      <h1> Kool Flix </h1>
      <Search />
      </div>
    );
  }
}

export default Home;
