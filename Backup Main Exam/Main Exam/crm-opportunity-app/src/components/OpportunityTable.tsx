import { useEffect, useState } from "react";

import OpportunityModal from "./OpportunityModal";

import { OpportunityService } from "../services/OpportunityService";

import { getCurrentAccountId } from "../xrm/XrmHelper";

export default function OpportunityTable() {
  const service = new OpportunityService();

  const [records, setRecords] = useState([]);

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState<any>(null);

  //Getting the Current Account ID
  const accountId = getCurrentAccountId();

  const load = async () => {
    const result = await service.getOpportunities(accountId);

    setRecords(result.entities);
  };

  useEffect(() => {
    load();
  }, []);

  const edit = (item: any) => {
    setSelected(item);

    setOpen(true);
  };

  const save = async (name: string) => {
    await service.updateOpportunity(
      selected.opportunityid,

      name,
    );

    setOpen(false);

    load();
  };

  const remove = async (id: string) => {
    if (!window.confirm("Delete?")) return;

    await service.deleteOpportunity(id);

    load();
  };

  const create = () => {
    setSelected(null);

    setOpen(true);
  };

  const createSave = async (name: string) => {
    await service.createOpportunity(name, accountId);

    setOpen(false);

    load();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Opportunity Name</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item: any) => (
            <tr key={item.opportunityid}>
              <td>{item.name}</td>

              <td>
                <button onClick={() => edit(item)}>Edit</button>

                <button onClick={() => remove(item.opportunityid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={create}>Create Opportunity</button>

      <OpportunityModal
        open={open}
        name={selected?.name || ""}
        onSave={selected ? save : createSave}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
