import {combine, createEvent, createStore} from "effector"


export const toggle = createEvent()
export const isChecked = createStore(false).on(toggle, checked => !checked)

export const LoadTextEvent = createEvent<typeStoreEffector>()

type typeStoreEffector = {
    type: string
    currentItems: string
    history: string[]
}

export const textStore = createStore<typeStoreEffector | null>(null).on(LoadTextEvent, (_, schema) => schema)

//counter
export const plus = createEvent()
export const minus = createEvent()

export const $counter = createStore(1)
  .on(plus, n => n + 10)
  .on(minus, n => n - 1)
  export const $counterText = $counter.map(n => `current value = ${n}`)
  export const $counterCombined = combine({counter: $counter, text: $counterText})


export const inpTextEvent = createEvent<string>()
export const inpTextStore = createStore('').on(inpTextEvent, (_, e:any) => e.currentTarget.value)