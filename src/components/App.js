import React from 'react';
import SeachBar from './SearchBar';

class App extends React.Component {
  onSerchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SeachBar onSubmit={this.onSerchSubmit}/>
      </div>
    );
  }
}

export default App;