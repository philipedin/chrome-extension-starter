import React from 'react';

import HelloWorld from './components/HelloWorld';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default App;