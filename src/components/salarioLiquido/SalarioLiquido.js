import React, { Component } from 'react'
import { calculateSalaryFrom } from '../salary'
import { formatNumber } from '../../Helpers/formatHelpers'

export default class SalarioLiquido extends Component {
    render() {

        const { value } = this.props
        const { netSalary } = calculateSalaryFrom(value)

        const porcentagem = (netSalary * 100) / value
        const netSalaryString = `R$ ${formatNumber(netSalary)} (${porcentagem.toFixed(2)}%) `

        return (
            <div>
                <label>
                    Salário Liquido
                </label>
                <input type="text" value={netSalaryString} disabled />
            </div>
        )
    }
}
