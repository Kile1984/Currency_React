import React from 'react';
import './Result.css';

function Result(props){
    return (
        <div className="col-12 col-md-3 input-group mb-3">
            <h3>Result: <span>{`${props.convertedValue}`}</span> {props.currency}</h3>
        </div>
    );
}

export default Result;