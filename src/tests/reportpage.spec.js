import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Editlistmodel from '../components/editmodel';

test('renders nouns list ', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/"Nouns"/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Verbs list ', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/"Verbs"/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders grammatical parser repot page', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/"Grammatical Parser Report Page"/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders story title ', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/"Created Third Party API"/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders add another story ', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/"Add another story"/i);
    expect(linkElement).toBeInTheDocument();
});
