import { useState, useEffect } from "react";

/**
 * The Below Inteface is use for the Opportunity Model Props
 * 
 * We define the Type
 * 
 * This Interface Tell What properties OpportunityModal receives
 *
 */
interface OpportunityModalProps {
  open: boolean;
  name: string;
  onSave: (name: string) => void;
  onClose: () => void;
}

// Opportunity Model Component
export default function OpportunityModal({
  open,
  name,
  onSave,
  onClose,
}: OpportunityModalProps) {

  // Store Input Text Value At Initial Value is ""
  const [value, setValue] = useState("");

  // This error is because of the liniting rule
  // Runs After the Rendering
  // Also Runs When The Dependecies are change i.e opne = When popup open or opportunity changes

  useEffect(() => {
    if (open) {
      setValue(name || "");
    }
  }, [open, name]);

  if (!open) {
    return null;
  }

  //  Render popup UI
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Opportunity</h3>

        <input
          className="modal-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="save-btn" onClick={() => onSave(value)}>Save</button>

          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
