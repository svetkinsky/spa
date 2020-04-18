import {
    WFMPipe
} from 'framework'
import {
    _
} from '../../../framework/tools/util'

class AppMultiPipe extends WFMPipe {
    constructor(config) {
        super(config)
    }
}

export const appMultiPipe = new AppMultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        //if (_.isUnderfined(number)) return value
        return +value * number
    }
})