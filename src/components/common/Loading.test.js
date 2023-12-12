"use strict";

import { render } from '@testing-library/react'
import Loading from './Loading';

test('does not crash', () => {
    render(<Loading />)
})

test('matches snapshot', () => {
    const loading = render(<Loading />);
    expect(loading.asFragment()).toMatchSnapshot();
})