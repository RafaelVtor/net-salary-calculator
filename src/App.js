import React, { Component, useState } from 'react';
import SalarioBruto from './components/salarioBruto/SalarioBruto';
import BaseINSS from './components/baseINSS/BaseINSS';
import DescontoINSS from './components/descontoINSS/DescontoINSS';
import BaseIRPF from './components/baseIRPF/BaseIRPF';
import DescontoIRPF from './components/descontoIRPF/DescontoIRPF';

import css from './App.module.css'
import SalarioLiquido from './components/salarioLiquido/SalarioLiquido';
import StatusBar from './components/statusBar/StatusBar';



export default class App extends Component {

  constructor() {
    super()

    this.state = {
      salarioBruto: 0,
      salarioLiquido: 0,
      // baseINSS: 0,
      // baseIRPF: 0,
      descontoINSS: 0,
      descontoIRPF: 0,
    }
  }

  handleSalarioBruto = (salarioBruto) => {
    this.setState({
      salarioBruto
    })
  }




  handleDescontoINSS = (descontoINSS) => {
    this.setState({
      descontoINSS
    })
  }


  handleDescontoIRPF = (descontoIRPF) => {
    this.setState({
      descontoIRPF
    })
  }


  handleSalarioLiquido = (salarioLiquido) => {
    this.setState({
      salarioLiquido
    })
  }



  render() {
    const { salarioBruto, baseIRPF, salarioLiquido, descontoIRPF, descontoINSS } = this.state
    return (
      <div className={css.content}>
        <SalarioBruto value={salarioBruto} onChangeValue={this.handleSalarioBruto} />
        <div className={css.calculos}>
          <BaseINSS value={salarioBruto} />
          <DescontoINSS value={salarioBruto} valueINSS={descontoINSS} onChangeValue={this.handleDescontoINSS} />
          <BaseIRPF value={salarioBruto} valueBaseIRPF={baseIRPF} onChangeValue={this.handleBaseIRPF} />
          <DescontoIRPF value={salarioBruto} valueBaseIRPF={descontoIRPF} onChangeValue={this.handleDescontoIRPF} />
        </div>
        <SalarioLiquido value={salarioBruto} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <StatusBar value={20} color="orange" />
          <StatusBar value={30} color="red" />
          <StatusBar value={30} color="green" />
        </div>
      </div>
    )
  }
}
