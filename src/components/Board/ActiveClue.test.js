'use strict';

import ActiveClue from './ActiveClue'
import { render } from '@testing-library/react'

test('does not crash', () => {
    render(<ActiveClue />);
});

test('Matches snapshot', () => {
    const activeClue = render(<ActiveClue />);
    expect(activeClue.asFragment()).toMatchSnapshot();
});