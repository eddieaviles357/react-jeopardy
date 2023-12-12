"use strict";

import { render } from '@testing-library/react'
import Clue from './Clue';

test('does not crash', () => {
    render(<Clue />)
})

test('matches snapshot', () => {
    const clue = render(<Clue />);
    expect(clue.asFragment()).toMatchSnapshot();
})