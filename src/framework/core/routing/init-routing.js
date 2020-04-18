import {
    _
} from "../../tools/util"
import {
    RoutingModule
} from "./routing.module"

export function initRouting(routes, dispatcher) {
    if (_.isUnderfined(routes)) return

    let routing = new RoutingModule(routes, dispatcher)
    routing.init()
}