import React from 'react';

class Calculate extends React.Component{
    constructor(props){
        super(props);
    
        this.calculate = this.calculate.bind(this);
    }

    calculate(e){
        let rates = this.props.rates;
        let value = this.props.valueFromValueComponent.value;
        let currency = this.props.valueFromValueComponent.currency;
        let result = 0;
        let valueBorderColor = "green";
        let currencyBorderColor = "green";

        if ( currency === "" || currency === "Choose..." ){
            currencyBorderColor = "red"
        }else{
            currencyBorderColor = "green"
        }
        
        value === "" ? valueBorderColor = "red" : valueBorderColor = "green";
        
        Object.entries(rates).map(currentRate=> currentRate[0] === currency &&
        (result = (currentRate[1] * value).toFixed(2)));

       
        
        this.props.calculateValue(result, valueBorderColor, currencyBorderColor);
    }
    render(){
        return(
            <div className="col-12 col-md-3 mb-3 btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" 
                onClick={this.calculate}>Calculate</button>
            </div>
        );
    }
}

export default Calculate;