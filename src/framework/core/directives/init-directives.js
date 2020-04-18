import {
    _
} from "../../tools/util"

export function initDirectives(directives) {
    if (_.isUnderfined(directives)) return

    directives.forEach(d => d.init())
}