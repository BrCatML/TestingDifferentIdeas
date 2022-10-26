import React from 'react'
import {useStore} from "effector-react"
import {toggle, isChecked,plus,minus,$counter,$counterText,$counterCombined} from './store'
import './style.css'

const ThemeSwitcher = () => {
    return(
    <input
    type="checkbox"
    id="themeSwitch"
    name="theme-switch"
    className="theme-switch__input"
    checked={useStore(isChecked)}
    onChange={(e: any) => toggle(e)}
    />
)}

const App = () => {
  const counter = useStore($counter)
  const counterText = useStore($counterText)
  const counterCombined = useStore($counterCombined)
  return(
	<div>
    <ThemeSwitcher />
    <label htmlFor="themeSwitch" className="theme-switch__label">
        <span>Switch theme</span>
    </label>
    <main>
        <div className="wrapper">
            <h1>CSS Theme Switcher</h1>
            <p>Switch from light to dark mode using the toggle.</p>
        </div>
        <div>
            <button onClick={(e: any) => plus(e)}>Plus</button>
            <button onClick={(e: any) => minus(e)}>minus</button>
            <div>counter: {counter}</div>
            <div>counterText: ${counterText}</div>
            <div>counterCombined: {counterCombined.counter}, {counterCombined.text}</div>
        </div>
    </main>
  </div>
)}

export default App

