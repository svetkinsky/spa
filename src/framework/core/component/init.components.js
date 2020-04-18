import {
    renderComponent
} from "./render-component"
import {
    _
} from "../../tools/util"

export function initComponents(bootstrap, components) {
    if (_.isUnderfined(bootstrap)) {
        throw new Error('Bootstrap component is not defined')
    }


    [bootstrap, ...components].forEach(renderComponent)
}