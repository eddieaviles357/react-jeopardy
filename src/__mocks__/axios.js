'use strict';

import { MOCK_TEST_DATA } from '../constants'

console.log('Mocking Axios Data')
module.exports = {
    setBoardData: () => {
        return Promise.resolve(MOCK_TEST_DATA)
    },
}