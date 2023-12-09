"use strict";

import { render, screen } from '@testing-library/react';
import PlayBtn from "./PlayBtn";
import MockContextProvider from "../../helpers/MockContextProvider";

test('does not crash', () => {
    render(
        <MockContextProvider>
            <PlayBtn />
        </MockContextProvider>);
});

test('matches snapshot', () => {
    const playBtn = render(
        <MockContextProvider>
            <PlayBtn />
        </MockContextProvider>);
    expect(playBtn.asFragment()).toMatchSnapshot();
})

describe('should render Loading if prop loading is true', () => {
    const playBtn = render(
        <MockContextProvider initialProps={{ loading: true }}>
            <PlayBtn />
        </MockContextProvider>
    );
    const loading = screen.getByText(/Loading/i);
    expect(loading.textContent).toBe('Loading');
})