import React, { Component } from 'react'
import { calculateSalaryFrom } from '../salary'
import { formatNumber } from '../../Helpers/formatHelpers'

export default class DescontoIRPF extends Component {
    render() {

        const { value } = this.props
        const { discountIRPF } = calculateSalaryFrom(value)

        const porcentagem = (discountIRPF * 100) / value
        const discountIRPFString = `R$ ${formatNumber(discountIRPF)} (${porcentagem.toFixed(2)}%) `

        return (
            <div>
                <label>
                    Base do INSS
                </label>
                <input type="text" value={discountIRPFString} disabled />
            </div>
        )
    }
}
