import React from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';

const countries = [
    { value: 'EN-gb', label: 'England' },
    { value: 'ES-es', label: 'Spain'},
    { value: 'TH-th', label: 'Thailand' },
    { value: 'EN-en', label: 'USA'}
];


export class SelectCurrency extends React.Component {
    state = { value: 'ES-es' };

    handleChange = (value) => {
        this.setState({value: value});
    };

    render () {
        return (
            <Dropdown
                auto={false}
                onChange={this.handleChange}
                source={countries}
                value={this.state.value}
            />
        );
    }
}
