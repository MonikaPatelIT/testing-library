

import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

it('render Hello world', () => {
    render(<Hello />);
    const innerHTML = screen.getByText('Hello world');
    expect(innerHTML).toBeInTheDocument()
})