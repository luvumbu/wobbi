import { RotateCw } from 'lucide-react';

export function SpinToggleButton({ pressed, onClick, label = 'Rotation' }) {
  return (
    <button
      type="button"
      className="spin-toggle-button"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      onClick={onClick}
    >
      <RotateCw size={14} aria-hidden="true" />
    </button>
  );
}
