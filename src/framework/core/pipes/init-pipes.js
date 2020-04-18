import {
    _
} from "../../tools/util"
import {
    pipesFactory
} from './pipes-factory'

export function initPipes(pipes) {
    if (_.isUnderfined(pipes)) return

    pipes.forEach(p => pipesFactory.registerPipe(p))
}