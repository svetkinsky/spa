import {
    _
} from '../../tools/util'

export function renderComponent(c) {
    if (!_.isUnderfined(c.onInit)) c.onInit()

    c.render()

    if (!_.isUnderfined(c.afterInit)) c.afterInit()
}