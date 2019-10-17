import React from 'react';

class Table extends React.Component{
 
    render(){
        return(
            <div className="col-12 mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">RATES</th>
                            <th scope="col">CURRENCY</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Object.entries(this.props.rates).map((el)=>{
                                return(
                                    <tr>
                                        <td>{el[0]}</td>
                                        <td>{el[1].toFixed(2)}</td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;