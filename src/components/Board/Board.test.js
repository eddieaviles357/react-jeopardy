"use strict";

import { render } from '@testing-library/react'
import Board from './Board'
import MockContextProvider from '../../helpers/MockContextProvider';

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
})