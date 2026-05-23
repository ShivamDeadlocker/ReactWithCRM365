import { useState } from "react";

export default function OpportunityModal({ open, name, onSave, onClose }: any) {
  const [value, setValue] = useState(name);

  if (!open) return null;

  return (
    <div>
      <h3>Opportunity</h3>

      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button onClick={() => onSave(value)}>Save</button>

      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
