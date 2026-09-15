import { Dices } from 'lucide-react';

export function RandomizeButton({ label, onClick }) {
  return (
    <button
      type="button"
      className="randomize-button"
      aria-label={`Choix aléatoire : ${label}`}
      title="Choix aléatoire"
      onClick={onClick}
    >
      <Dices size={14} aria-hidden="true" />
    </button>
  );
}
