import React from 'react';
import Value from './Value/Value';
import Currency from './Currency/Currency';
import Calculate from './Calculate/Calculate';
import Result from './Result/Result';
import Table from './Table/Table';

class Section extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: "",
            convertedValue: "0",
            currency: "",
            borderColorValue: "",
            borderColorCurrency: ""
        }

        this.getInputValue = this.getInputValue.bind(this);
        this.getSelectedRateValue = this.getSelectedRateValue.bind(this);
        this.calculateValue = this.calculateValue.bind(this);
    }

    getInputValue(value){
        this.setState({
            value: value
        });
    }

    getSelectedRateValue(value){
        this.setState({
            currency: value
        });
    }
    
    calculateValue(value, colorValue, colorCurrency){
        this.setState({
            convertedValue: value,
            borderColorValue: colorValue,
            borderColorCurrency: colorCurrency
        });
    }
    render(){
        return(
            <div className="container">
            <div className="row">

              <Value getInputValue={this.getInputValue}
                     isValidateValue={this.state.borderColorValue}
                     />

              <Currency rates={this.props.rates} 
                        selectedValue={this.state.currency} 
                        getSelectedRateValue={this.getSelectedRateValue}
                        isValidateCurrency={this.state.borderColorCurrency}
                        />

              <Calculate valueFromValueComponent={this.state} 
                         rates={this.props.rates} 
                         calculateValue={this.calculateValue}/>

              <Result convertedValue={this.state.convertedValue}
                      currency={this.state.currency}/>

            </div>
            <div className="row">

              <Table rates={this.props.rates}/>
              
            </div>
          </div>
        );
    }
}

export default Section;