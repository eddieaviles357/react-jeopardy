"use strict";

import { render } from '@testing-library/react';
import Home from './Home';
import { useState } from 'react'
import JeopardyContext from '../../JeopardyContext'

const MockCtx = ({ children }) => {
    const [isPlaying] = useState(false)
    return (
        <JeopardyContext.Provider value={isPlaying}>
            {children}
        </JeopardyContext.Provider>
    )
}

test('does not crash', () => {
    render(
        <MockCtx>
            <Home />
        </MockCtx>);
});

test('matches snapshot', () => {
    const home = render(
        <MockCtx>
            <Home />
        </MockCtx>);
    expect(home.asFragment()).toMatchSnapshot();
});