"use strict";

import { render, screen } from '@testing-library/react'
import Board from './Board'
import MockContextProvider from '../../helpers/MockContextProvider';
import { MOCK_TEST_DATA } from '../../constants'

test('Does not crash', () => {
    render(
        <MockContextProvider>
            <Board />
        </MockContextProvider>);
});

test('Matches snapshot', () => {
    const board = render(
        <MockContextProvider>
            <Board />
        </MockContextProvider>
    );
    expect(board.asFragment()).toMatchSnapshot();
});

describe('Makes sure first child and last child are on screen', () => {
    const board = render(
        <MockContextProvider>
            <Board />
        </MockContextProvider>
    );
    const firstClueElement = screen.getByText(MOCK_TEST_DATA[0].title);
    expect(firstClueElement.textContent).toBe(MOCK_TEST_DATA[0].title);

    const lastClueElement = screen.getByText(MOCK_TEST_DATA[MOCK_TEST_DATA.length - 1].title);
    expect(lastClueElement.textContent).toBe(MOCK_TEST_DATA[MOCK_TEST_DATA.length - 1].title);
})