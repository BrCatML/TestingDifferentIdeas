import {createEvent, createStore} from "effector"


export const toggle = createEvent()
export const isChecked = createStore(false).on(toggle, checked => !checked)

export const LoadTextEvent = createEvent<typeStoreEffector>()

type typeStoreEffector = {
    type: string
    currentItems: string
    history: string[]
}

export const textStore = createStore<typeStoreEffector | null>(null).on(LoadTextEvent, (_, schema) => schema)
