import React, { Component } from 'react'


export default class SalarioBruto extends Component {

    handleInputChange = (event) => {

        const novoSalario = event.target.value
        this.props.onChangeValue(novoSalario)

    }
    render() {
        const { value } = this.props
        return (
            <div>
                <label>Salário bruto</label>
                <input type="number" value={value} onChange={this.handleInputChange} placeholder='0' />
            </div>
        )
    }
}
