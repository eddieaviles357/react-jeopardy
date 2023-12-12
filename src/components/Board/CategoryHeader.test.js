"use strict";

import { render } from '@testing-library/react'
import CategoryHeader from './CategoryHeader';

test('does not crash', () => {
    render(<CategoryHeader />)
})

test('matches snapshot', () => {
    const categoryHeader = render(<CategoryHeader />);
    expect(categoryHeader.asFragment()).toMatchSnapshot();
})