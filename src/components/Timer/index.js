import React, { useState } from 'react'
import Button from '../Button'
import TimeList from '../TimeList'

import './index.css'

export default () => {
  const [state, setState] = useState({ currentTime: 0, pausado: true, timeList: [] })
  const [timer, setTimer] = useState(null)

  function zerar() {
    clearInterval(timer)
    setTimer(0)
    setState({ timeList: [state.currentTime, ...state.timeList], currentTime: 0, pausado: true })
  }

  function pausar() {
    clearInterval(timer)
    setTimer(0)
    setState({ ...state, pausado: true })
  }

  function apagar() {
    clearInterval(timer)
    setTimer(0)
    setState({ ...state, pausado: true, timeList: [] })
  }

  function iniciar() {
    setState({ ...state, pausado: false })
    setTimer(setInterval(() => {
      setState(state => { 
        return { ...state, currentTime: state.currentTime + 1 }
      })
    }, 1000))
  }

  return (
    <div>
      <h1>Cronômetro</h1>
      <section className="main-buttons">
        <Button handleClick={zerar} disabled={state.currentTime === 0}>Zerar</Button>
        <Button handleClick={pausar} disabled={state.pausado}>Pausar</Button>
        <Button handleClick={iniciar} disabled={!state.pausado}>Iniciar</Button>
      </section>
      <section>
        <Button handleClick={apagar} disabled={state.timeList.length < 1}>Limpar</Button>
      </section>
      <p className="pl" style={{fontSize:'1.5em'}}>{ state.currentTime }</p>
      <TimeList timeList={state.timeList} />
    </div>
  )
}