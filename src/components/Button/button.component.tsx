type ButtonProps = {
    label: string;
    isSelected: boolean;
    onClick: () => void; 
}

export function Button({ label, isSelected, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={`transition-all active:border-b-[3px] block w-full border-solid ${isSelected ? 'border-blue-400 bg-blue-300 border-b-[6px]' : 'border-b-[6px] bg-indigo-300 border-indigo-400'} rounded-md text-start p-4`}>{label}</button>
    )
}