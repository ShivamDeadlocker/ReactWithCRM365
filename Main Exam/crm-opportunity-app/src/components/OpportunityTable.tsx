// useState -> store/change values
// useEffect -> execute side effects after render
// useCallback -> prevent function recreation
import { useEffect, useState, useCallback } from "react";

// Import popup component
import OpportunityModal from "./OpportunityModal";

// Import service that work with CRM i.e CRUD
import { OpportunityService } from "../services/OpportunityService";

// Import helper to get current Account ID
import { getCurrentAccountId } from "../xrm/XrmHelper";

// Import TypeScript type definition
import type { IOpportunity } from "../types/IOpportunity";

export default function OpportunityTable() {
  // Creating the OpportunityService Object which contains CRUD operations related to Opportunity Entity
  // Reuse same object forever
  const [service] = useState(() => new OpportunityService());

  // Initialize with the empty array
  // It Stores All the opportunity records in the array of  IOpportunity
  // i.e [{opportunityid:"", name:""}, {opportunityid:"", name:""}]

  const [records, setRecords] = useState<IOpportunity[]>([]);

  // Store popup open/close state

  // false = popup hidden
  // true = popup visible
  const [open, setOpen] = useState(false);

  // Store selected opportunity
  const [selected, setSelected] = useState<IOpportunity | null>(null);

  // Getting the Current Account ID
  const accountId = getCurrentAccountId();

  /**
   * Here Loading Opportunity records
   *
   * useCallback is a built-in React Hook that caches (memoizes) a function definition
   * across re-renders.
   *
   * It prevents the function from being recreated on every render unless its
   * dependencies change, which optimizes performance by avoiding unnecessary
   * child-component re-renders when passed as a prop
   */
  const load = useCallback(async () => {
    // Handling for the NULL Account ID

    if (!accountId) {
      // Empty the records array
      setRecords([]);

      return;
    }

    // Calling the CRM Web API
    const result = await service.getOpportunities(accountId);

    // Save Records into the state
    setRecords(result.entities);
  }, [accountId, service]);

  /**
   *  Execute after component loads
   *
   * The useEffect Hook in React allows you to synchronize your component with
   * external systems or perform "side effects" after the component renders.
   *
   * Render On Every Time when load dependency changes
   */
  useEffect(() => {
    const fetchData = async () => {
      await load();
    };

    fetchData();
  }, [load]);

  // If Account is not saved
  if (!accountId) {
    return (
      <div className="table-container">
        <h3>Please save Account first</h3>
      </div>
    );
  }

  // Edit Button Click
  const edit = (item: IOpportunity) => {
    // Store the Clicked Record
    // With Spread : selected → same object reference
    // Without Spread: selected → new object copy
    setSelected({ ...item });

    // Open Popup
    setOpen(true);
  };

  // Save the Edited Record
  const save = async (name: string) => {
    try {
      // Handling for the NUll
      if (!selected) return;

      await service.updateOpportunity(selected.opportunityid, name);

      // Close Popup
      setOpen(false);

      // Clear selected record
      setSelected(null);

      // Reload the table
      await load();

      // Showing the Alert Dialog
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Opportunity Updated Successfully",

        title: "Success",
      });
    } catch {
      // Showing the Alert Dialog
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Failed to update opportunity",

        title: "Error",
      });
    }
  };

  // Delete Opportunity
  const remove = async (id: string) => {
    try {
      // Handling for the NULL
      if (!id) return;

      // Ask confirmation
      if (!window.confirm("Delete?")) return;

      await service.deleteOpportunity(id);

     // Clear selected record
      setSelected(null);

      // Reload the table
      await load();

      // Showing the Alert Dialog
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Opportunity Deleted Successfully",

        title: "Success",
      });
    } catch {
      // Showing the Alert Dialog
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Failed to delete Opportunity",

        title: "Error",
      });
    }
  };

  // Create button click
  const create = () => {
    // Empty selection
    setSelected(null);

    setOpen(true);
  };

  // Save new Opportunity
  const createSave = async (name: string) => {
    try {
      await service.createOpportunity(name, accountId);

      setOpen(false);

      setSelected(null);

      await load();

      // Showing the Alert Dialog
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Opportunity Created Successfully",

        title: "Success",
      });
    } catch {
      await window.parent.Xrm.Navigation.openAlertDialog({
        text: "Failed to create Opportunity",

        title: "Error",
      });
    }
  };

  /***
   * The records is already Initialize with the empty [] so no
   * handling of null here
   */
  return (
    <div className="table-container">
      {/* Top Section */}

      <div className="top-section">
        <h2 className="grid-title">Opportunity List</h2>

        <button className="create-btn" onClick={create}>
          Create Opportunity
        </button>
      </div>

      {/* Scroll container */}

      <div className="table-wrapper">
        <table className="opportunity-table">
          <thead>
            <tr>
              <th>Opportunity Name</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.length > 0 ? (
              records.map((item: IOpportunity) => (
                <tr key={item.opportunityid}>
                  <td>{item.name}</td>

                  <td className="action-column">
                    <button className="edit-btn" onClick={() => edit(item)}>
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => remove(item.opportunityid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="empty-message" colSpan={2}>
                  No Opportunities Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <OpportunityModal
        open={open}
        name={selected?.name || ""}
        onSave={selected ? save : createSave}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
