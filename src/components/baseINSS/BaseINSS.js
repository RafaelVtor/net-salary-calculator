import React, { Component } from 'react'
import { calculateSalaryFrom } from '../salary'
import { formatNumber } from '../../Helpers/formatHelpers'

export default class BaseINSS extends Component {
    render() {

        const { value } = this.props
        const { baseINSS } = calculateSalaryFrom(value)
        const baseINSSString = 'R$ ' + formatNumber(baseINSS)

        return (
            <div>
                <label>
                    Base do INSS
                </label>
                <input type="text" value={baseINSSString} disabled />
            </div>
        )
    }
}
