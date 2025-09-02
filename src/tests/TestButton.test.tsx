import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import TestButton from '../components/TestButton';

describe('TestButton', () => {
  it('renders with default props', () => {
    render(<TestButton />);

    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me: 0');
  });

  it('renders with custom props', () => {
    render(<TestButton initialCount={5} label="Custom Button" />);

    const button = screen.getByTestId('test-button');
    expect(button).toHaveTextContent('Custom Button: 5');
  });

  it('increments count when clicked', async () => {
    const user = userEvent.setup();
    render(<TestButton />);

    const button = screen.getByTestId('test-button');

    await user.click(button);
    expect(button).toHaveTextContent('Click me: 1');

    await user.click(button);
    expect(button).toHaveTextContent('Click me: 2');
  });

  it('calls onClick callback with correct count', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(<TestButton onClick={mockOnClick} />);

    const button = screen.getByTestId('test-button');

    await user.click(button);
    expect(mockOnClick).toHaveBeenCalledWith(1);

    await user.click(button);
    expect(mockOnClick).toHaveBeenCalledWith(2);
  });

  it('applies correct CSS classes', () => {
    render(<TestButton />);

    const button = screen.getByTestId('test-button');
    expect(button).toHaveClass(
      'px-4',
      'py-2',
      'bg-blue-500',
      'text-white',
      'rounded',
      'hover:bg-blue-600',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500',
      'focus:ring-opacity-50',
      'transition-colors',
    );
  });

  it('has correct accessibility attributes', () => {
    render(<TestButton />);

    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('data-testid', 'test-button');
  });
});
