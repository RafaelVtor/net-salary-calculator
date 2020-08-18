import React, { Component } from 'react'
import { calculateSalaryFrom } from '../salary'
import { formatNumber } from '../../Helpers/formatHelpers'

export default class DescontoINSS extends Component {


    render() {

        const { value, onChangeValue } = this.props
        const { discountINSS } = calculateSalaryFrom(value)

        const porcentagem = (discountINSS * 100) / value

        const discountINSSString = `R$ ${formatNumber(discountINSS)} (${porcentagem.toFixed(2)}%) `



        return (
            <div>
                <label>
                    Desconto do INSS
                </label>
                <input type="text" value={discountINSSString} disabled />
            </div>
        )
    }
}
