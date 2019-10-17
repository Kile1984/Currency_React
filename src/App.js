import React from 'react';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      date: "",
      base: "",
      rates: ""
    }
  }

  componentDidMount(){
    fetch('https://api.exchangeratesapi.io/latest ')
    .then(response => response.json())
    .then(data => {
      this.setState({
        date: data.date,
        base: data.base,
        rates: data.rates
      });
    });
}

  render(){
    return (
      <>
      <Header base={this.state.base} date={this.state.date} />
      <Section rates={this.state.rates}/>
      </>
     );
  }
 
}

export default App;
