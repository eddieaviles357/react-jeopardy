"use strict";

import { render } from '@testing-library/react';
import Title from './Title';

test('does not crash', () => {
    render(<Title />);
})

test('matches snapshot', () => {
    const title = render(<Title />);
    expect(title.asFragment()).toMatchSnapshot();
})