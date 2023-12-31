"use strict";

import { render, screen } from '@testing-library/react';
import Home from './Home';
import MockContextProvider from '../../helpers/MockContextProvider.js'


test('does not crash', () => {
    render(
        <MockContextProvider>
            <Home />
        </MockContextProvider>);
});

test('matches snapshot', () => {
    const home = render(
        <MockContextProvider>
            <Home />
        </MockContextProvider>);
    expect(home.asFragment()).toMatchSnapshot();
});

describe('Component rendered test', () => {
    it('should render button', () => {
        render(
            <MockContextProvider>
                <Home />
            </MockContextProvider>);
        const btn = screen.getByText(/Play/i);
        expect(btn.textContent).toBe('Play');
        expect(btn.className).toBe('Play-btn btn')
    });

    it('should render Title', () => {
        render(
            <MockContextProvider>
                <Home />
            </MockContextProvider>);
        const title = screen.getByText(/Jeopardy/i);
        expect(title.textContent).toBe('Jeopardy');
        expect(title.id).toBe('jeopardy-title');
    })
})

describe('Should display Error', () => {
    const testErrObj = { isError: true, message: ['Mock Error'] }
    const home = render(
        <MockContextProvider initialProps={{ err: testErrObj }} >
            <Home />
        </MockContextProvider >);

    const errMsg = screen.getByText(/Message/i);
    expect(errMsg.textContent).toMatch(`Something bad happened. Message: ${testErrObj.message}`)
})
