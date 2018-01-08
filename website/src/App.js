// main Component

import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
// import Components
import Header from './Components/Header';
import About from './Components/About';

import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // put json data as the state
      resumeData:{}
    }
  }
// grab json data to put in the state
getResumeData() {
  $.ajax({
    url:'https://eelizan1.github.io/hello/resumeData.json',
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({resumeData:data});
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err);
      alert(err);
    }
  });
}

componentDidMount(){
  this.getResumeData();
}

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
      {/* must be in the order of appearance */}
      <Header data={this.state.resumeData.main} />
      <About data={this.state.resumeData.main}  />
      <Resume data={this.state.resumeData.resume}/>
      <Portfolio data={this.state.resumeData.portfolio} />
      <Footer />
      </div>
    );
  }
}

export default App;
