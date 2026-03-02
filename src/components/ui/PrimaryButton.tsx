interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function PrimaryButton({ label, onClick, type = "button" }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md 
                 hover:bg-blue-700 active:scale-95 transition-all 
                 duration-200 shadow-sm w-full md:w-auto"
    >
      {label}
    </button>
  );
}