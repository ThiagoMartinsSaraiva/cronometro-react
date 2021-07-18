import React, { Component } from 'react'
import Button from '../Button'
import TimeList from '../TimeList'

import './index.css'

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      currentTime: 0,
      pausado: true,
      timeList: []
    }
  }

  zerar = () => {
    clearInterval(this.timer)
    this.setState({ timeList: [...this.state.timeList, this.state.currentTime], currentTime: 0, pausado: true })
  }

  pausar = () => {
    clearInterval(this.timer)
    this.setState({ pausado: true })
  }

  apagar = () => {
    clearInterval(this.timer)
    this.setState({ pausado: true, timeList: [] })
  }

  iniciar = () => {
    this.setState({ pausado: false })
    this.timer = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + 1 })
    }, 1000);
  }

  render() {
    const { state } = this
    return (
      <div>
        <h1>Cronômetro</h1>
        <section className="main-buttons">
          <Button handleClick={() => this.zerar()} disabled={state.currentTime === 0}>Zerar</Button>
          <Button handleClick={() => this.pausar()} disabled={state.pausado}>Pausar</Button>
          <Button handleClick={() => this.iniciar()} disabled={!state.pausado}>Iniciar</Button>
        </section>
        <section>
          <Button handleClick={() => this.apagar()} disabled={state.timeList.length < 1}>Limpar</Button>
        </section>
        <p className="pl" style={{fontSize:'1.5em'}}>{ state.currentTime }</p>
        <TimeList timeList={state.timeList} />
      </div>
    )
  }
}

// import React, { useState } from 'react'
// import Button from '../Button'
// import TimeList from '../TimeList'

// export default () => {
//   const zerar = () => {
//     clearInterval(this.timer)
//     this.setState({ timeList: [...this.state.timeList, this.state.currentTime], currentTime: 0, pausado: true })
//   }

//   const pausar = () => {
//     clearInterval(this.timer)
//     this.setState({ pausado: true })
//   }

//   const apagar = () => {
//     clearInterval(this.timer)
//     this.setState({ pausado: true, timeList: [] })
//   }

//   const iniciar = () => {
//     this.setState({ pausado: false })
//     this.timer = setInterval(() => {
//       this.setState({ currentTime: this.state.currentTime + 1 })
//     }, 1000);
//   }

//   return (
//     <div>
//       <h1>Cronômetro</h1>
//       <section className="main-buttons">
//         <Button handleClick={() => zerar()} disabled={state.currentTime === 0}>Zerar</Button>
//         <Button handleClick={() => pausar()} disabled={state.pausado}>Pausar</Button>
//         <Button handleClick={() => iniciar()} disabled={!state.pausado}>Iniciar</Button>
//       </section>
//       <section>
//         <Button handleClick={() => apagar()} disabled={state.timeList.length < 1}>Limpar</Button>
//       </section>
//       <p className="pl" style={{fontSize:'1.5em'}}>{ state.currentTime }</p>
//       <TimeList timeList={state.timeList} />
//     </div>
//   )
// }