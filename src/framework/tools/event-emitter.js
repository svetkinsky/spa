import {
    _
} from './util'
export class EventEmmiter {
    constructor() {
        this.listeners = {}
    }

    on(eventName, func) {
        if (_.isUnderfined(this.listeners[eventName])) this.listeners[eventName] = []

        this.listeners[eventName].push(func)
    }

    emit(eventName, data) {
        if (_.isUnderfined(this.listeners[eventName])) return

        this.listeners[eventName].forEach(f => f(data))
    }
}