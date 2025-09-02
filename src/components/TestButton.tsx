import React, { useState } from 'react';

interface TestButtonProps {
  initialCount?: number;
  label?: string;
  onClick?: (_count: number) => void;
}

const TestButton: React.FC<TestButtonProps> = ({
  initialCount = 0,
  label = 'Click me',
  onClick,
}) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    onClick?.(newCount);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
      data-testid="test-button"
    >
      {label}: {count}
    </button>
  );
};

export default TestButton;
