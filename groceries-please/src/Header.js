import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';

const options = [
    { value: 'Food', label: 'Food' },
    { value: 'Pantry', label: 'Pantry' },
    { value: 'Deli', label: 'Deli' },
    { value: 'Dairy', label: 'Dairy' },
    { value: 'Produce', label: 'Fresh Produce' },
    { value: 'Meat', label: 'Meat' },
    { value: 'FrozenFood', label: 'Frozen Food' }   
];

class Header extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected: `, selectedOption);
    };
    
    render() {
        const { selectedOption } = this.state;

    return (
        <div>
            <div>
                <h1>Groceries Please!</h1>
            </div>
            <div>
                <a href="#">Home</a>
                <Select options={options} />
                <a href="#">Recipes</a>
                <a href="#">Log In</a>
            </div>
        </div>
        )
    };
}

export default Header;