import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Editlistmodel from '../components/editmodel';

test('renders save button', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/save/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders list of nouns/verbs', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/EditableWordList/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders list edit story', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/Edit story/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders description box ', () => {     //pass
    render(<Editlistmodel />);
    const linkElement = screen.getByText(/Description/i);
    expect(linkElement).toBeInTheDocument();
});







