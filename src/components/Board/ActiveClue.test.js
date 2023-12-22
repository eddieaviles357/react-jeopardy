'use strict';

import ActiveClue from './ActiveClue'
import { render, screen } from '@testing-library/react'

test('does not crash', () => {
    render(<ActiveClue />);
});

test('Matches snapshot', () => {
    const activeClue = render(<ActiveClue />);
    expect(activeClue.asFragment()).toMatchSnapshot();
});

describe('Displays component', () => {
    const jData = {
        question: 'One of the Teletubbies',
        answer: 'Dipsy',
    };
    test('Go Back gets displayed', () => {
        const activeClue = render(
            <ActiveClue
                question={jData.question}
                answer={jData.answer}
                isAnswered={false}
                setIsAnswered={() => true}
                setIsShowing={() => true}
            />);

        const goBack = screen.getByText(/go back/i);
        expect(goBack.textContent).toBe('Go Back');
    });

    test('Go Back gets displayed', () => {
        const activeClue = render(
            <ActiveClue
                question={jData.question}
                answer={jData.answer}
                isAnswered={false}
                setIsAnswered={() => true}
                setIsShowing={() => true}
            />);

        const revealAnswer = screen.getByText(/reveal answer/i);
        expect(revealAnswer.textContent).toBe('Reveal Answer');
    })

});