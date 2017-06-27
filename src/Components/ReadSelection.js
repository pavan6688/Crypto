/**
 * Created by pavan on 6/25/17.
 */
import React from 'react';
import SelectCurrency from './Components/SelectCurrency.js';

export class ReadSelection extends React.Component{

    constructor(props){
        super(props);
       this.state ={value: ''};
    }

    showSelected(selected){
        this.setState({value: selected}, this.getSampleText);
    }
    render(){
        return("");
    }
}
