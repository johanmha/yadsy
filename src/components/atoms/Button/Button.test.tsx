import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('yadsy-button');
    expect(button).toHaveClass('yadsy-button--primary');
    expect(button).toHaveClass('yadsy-button--medium');
    expect(button).not.toBeDisabled();
  });

  test('renders button with custom variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button', { name: /secondary button/i });

    expect(button).toHaveClass('yadsy-button--secondary');
    expect(button).not.toHaveClass('yadsy-button--primary');
  });

  test('renders button with custom size', () => {
    render(<Button size="large">Large Button</Button>);

    const button = screen.getByRole('button', { name: /large button/i });

    expect(button).toHaveClass('yadsy-button--large');
    expect(button).not.toHaveClass('yadsy-button--medium');
  });

  test('renders disabled button', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });

    expect(button).toBeDisabled();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Class Button</Button>);

    const button = screen.getByRole('button', { name: /custom class button/i });

    expect(button).toHaveClass('custom-class');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick} disabled>
        Disabled Clickable Button
      </Button>
    );

    const button = screen.getByRole('button', {
      name: /disabled clickable button/i,
    });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('forwards additional props to button element', () => {
    render(
      <Button data-testid="custom-test-id" aria-label="Custom Button">
        Props Button
      </Button>
    );

    const button = screen.getByTestId('custom-test-id');

    expect(button).toHaveAttribute('aria-label', 'Custom Button');
  });

  test('renders all variant types correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--secondary');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--outline');
  });

  test('renders all size types correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--small');

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--medium');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('yadsy-button--large');
  });
});
