import React from 'react'
import {useStore} from "effector-react"
import {toggle, isChecked} from './store'
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

const inpTextComponent = () => {
    return(
    <input
    id="inpTextComponent"
    name="inpTextComponent"
    // className="theme-switch__input"
    value={useStore(inpTextStore)}
    onChange={(e: any) => {
        console.log(e)
        inpTextEvent(e)
    }}
    />
)}

const App = () => (
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
    {/*@ts-ignore*/}
	<form onSubmit={submitForm} data-form autoComplete="off">
    <header>
      <h4>Serialized form</h4>
      <sub>Fill form and reload page</sub>
    </header>
    <Field store={nickname} onChange={changeNickname} />
    <Field store={email} onChange={changeEmail} />
  </form>
    </main>
  </div>
)

export default App

import {createDomain, createEvent, createStore} from "effector"


export const inpTextEvent = createEvent<string>()
export const inpTextStore = createStore('').on(inpTextEvent, (_, e:any) => e.currentTarget.value)

const signUpForm = createDomain('signUpForm')
loadFromStorage(signUpForm, localStorage)
saveToStorage(signUpForm, localStorage)
const nickname = signUpForm.store('', {name: 'nickname'})
const email = signUpForm.store('', {name: 'email'})
const submitForm = createEvent()
const changeEmail = onChangeField(email)
const changeNickname = onChangeField(nickname)

function onChangeField(store) {
    const onChange = createEvent()
    store.on(onChange, (_, e) => e.currentTarget.value)
    return onChange
}

const Field = ({store, onChange}) => {
    const value = useStore(store)
    const name = store.shortName
    return (
      <>
        <label htmlFor={name}>
          <strong>{name}</strong>
        </label>
        <input 
          id={name} 
          name={name} 
          value={value as string | number | readonly string[] | undefined} 
          onChange={onChange} 
          type="text" 
        />
      </>
    )
  }

// submitForm.watch(e => e.preventDefault())

function loadFromStorage(domain, storage) {
    return domain.onCreateStore(store => {
      const key = `${domain.shortName}/${store.shortName}`
      const raw = storage.getItem(key)
      if (!raw) return
      const parsed = JSON.parse(raw)
      store.setState(parsed)
    })
  }
  
  function saveToStorage(domain, storage) {
    return domain.onCreateStore(store => {
      const key = `${domain.shortName}/${store.shortName}`
      store.watch(value => {
        storage.setItem(
          key,
          JSON.stringify(value),
        )
      })
    })
  }


//   export default Form