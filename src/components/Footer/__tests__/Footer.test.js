
import { render, screen } from '@testing-library/react';
import Footer from "..";

test('renders and checks the <Footer /> Component', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const msg = screen.getByText(`Copyright Edgemony ${year}`);
    expect(msg).toBeInTheDocument();
  });