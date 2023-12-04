"use strict";

import { render, screen } from '@testing-library/react';
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

describe('Component rendered test', () => {
    it('should render button', () => {
        render(
            <MockCtx>
                <Home />
            </MockCtx>);
        const btn = screen.getByText(/Play/i);
        expect(btn.textContent).toBe('Play');
        expect(btn.className).toBe('Play-btn btn')
    });

    it('should render Title', () => {
        render(
            <MockCtx>
                <Home />
            </MockCtx>);
        const title = screen.getByText(/Jeopardy/i);
        expect(title.textContent).toBe('Jeopardy');
        expect(title.id).toBe('jeopardy-title');
    })

})