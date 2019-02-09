import React from 'react';
import Menu11 from "./Menu";
import DemoCarousel from "./DemoCarousel";


class App extends React.Component {
  styleM ={
    backgroundColor: 'lightblue',
    margin: '0px',
    padding: '0px',
      position: 'fixed',
      top: '30px'
    };
  state = {
    selectedSection: 'paris'
  };

  selectSection = (sectionName) => {
    this.setState({selectedSection: sectionName});
  }


  render () {
    const {selectedSection} = this.state;

    return (
        <React.Fragment >
          <Menu11  selectedSection={this.state.selectedSection} selectSection={this.selectSection}/>

        </React.Fragment>
    );
  }
}

export default App;