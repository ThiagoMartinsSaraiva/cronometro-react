import React, { useState } from 'react'
import Button from '../Button'
import TimeList from '../TimeList'

import { FiPlay, FiPause, FiPlus, FiTrash2 } from 'react-icons/fi'

import './index.css'

export default () => {
  const [state, setState] = useState({ currentTime: 0, paused: true, timeList: [] })
  const [timer, setTimer] = useState(null)

  function zerar() {
    clearInterval(timer)
    setTimer(0)
    setState({ timeList: [state.currentTime, ...state.timeList], currentTime: 0, paused: true })
  }

  function pausar() {
    clearInterval(timer)
    setTimer(0)
    setState({ ...state, paused: true })
  }

  function apagar() {
    clearInterval(timer)
    setTimer(0)
    setState({ ...state, paused: true, timeList: [] })
  }

  function iniciar() {
    setState({ ...state, paused: false })
    setTimer(setInterval(() => {
      setState(state => { 
        return { ...state, currentTime: state.currentTime + 0.01 }
      })
    }, 10))
  }

  return (
    <div>
      <h1>Cronômetro</h1>
      <section className="main-buttons">
        <Button handleClick={zerar} disabled={state.currentTime === 0}><FiPlus /></Button>
        <Button handleClick={pausar} disabled={state.paused}><FiPause /></Button>
        <Button handleClick={iniciar} disabled={!state.paused}><FiPlay /></Button>
      </section>
      <section>
        <Button handleClick={apagar} disabled={state.timeList.length < 1}><FiTrash2 /></Button>
      </section>
      <p className="pl" style={{fontSize:'1.5em'}}>{ Number(state.currentTime).toFixed(2) }</p>
      <TimeList timeList={state.timeList} />
    </div>
  )
}