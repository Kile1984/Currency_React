import React from 'react';
import './Value.css'

class Value extends React.Component{
    constructor(props){
        super(props);

        this.getValue = this.getValue.bind(this);
    }
    getValue(e){
        this.props.getInputValue(e.target.value);
    }
    render(){
        return (
            <div className="col-12 col-md-3 input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Value ( EUR )</span>
                </div>
                <input type="number" className="form-control" id="a" placeholder="Enter a value" aria-label="Username" aria-describedby="basic-addon1" 
                onChange={this.getValue} 
                style={{borderColor: this.props.isValidateValue}}
                />
            </div>
            );
    }
}

export default Value;