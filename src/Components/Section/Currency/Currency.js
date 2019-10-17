import React from 'react';

class Currency extends React.Component{

    constructor(props){
        super(props);

        this.getSelectVal = this.getSelectVal.bind(this);
    }
    getSelectVal(e) {
        this.props.getSelectedRateValue(e.target.value);
    };

    render(){
        return(
            <div className="col-12 col-md-3 input-group mb-3">
                <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                </div>
                <select className=" custom-select" id="inputGroupSelect01" 
                style={{borderColor: this.props.isValidateCurrency}}
                onChange={this.getSelectVal}
                >
                    <option defaultValue>Choose...</option>
                    {
                        Object.entries(this.props.rates).map((el) => {
                            return (
                                <option>{el[0]}</option>
                            );
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Currency;