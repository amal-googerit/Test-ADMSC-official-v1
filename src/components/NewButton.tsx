type TestButtonProps = {
  label: string;
  onClick?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TestButton: any = ({ label, onClick }: TestButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};
