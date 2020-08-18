import React, { Component } from 'react'
import { calculateSalaryFrom } from '../salary'
import { formatNumber } from '../../Helpers/formatHelpers'


export default class BaseIRPF extends Component {

    render() {

        const { value } = this.props
        const { baseIRPF } = calculateSalaryFrom(value)
        const baseIRPFString = 'R$ ' + formatNumber(baseIRPF)
        return (
            < div >
                <label>
                    Base do IRPF
                </label>
                <input type="text" value={baseIRPFString} disabled />
            </div >
        )
    }
}
