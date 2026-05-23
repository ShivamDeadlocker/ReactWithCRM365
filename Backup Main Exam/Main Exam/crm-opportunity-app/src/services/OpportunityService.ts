import { getXrm } from '../xrm/XrmHelper'

export class OpportunityService {

    //Getting the XRM Object
    xrm = getXrm()


    /**
     * This Function Get All the Opportunites
     * 
     * @param accountId GUID of the Account For Getting the Associated Opportunity
     * @returns 
     */
    async getOpportunities(accountId: string) {
        return await this.xrm.WebApi
            .retrieveMultipleRecords(
                "opportunity",
                `?$select=name,opportunityid&$filter=_parentaccountid_value eq ${accountId}`
            )
    }

    /**
     * This Function Create the Opportunity
     * 
     * @param name Opportunity Name
     * @param accountId Account ID For Which Opportunity Associated
     * @returns 
     */
    async createOpportunity(name: string, accountId: string) {
        const data = {
            name: name,
            "parentaccountid@odata.bind": `/accounts(${accountId})`
        }

        return await this.xrm.WebApi
            .createRecord(
                "opportunity",
                data
            )
    }

    /**
     * This function updates the specific opportunity
     * 
     * @param id Opportunity Id Of Which We are Updating the Data
     * @param name Updated Name Of the Opportunity
     * @returns 
     */
    async updateOpportunity(id: string, name: string) {

        return await this.xrm.WebApi
            .updateRecord(
                "opportunity",
                id,
                {
                    name: name
                }
            )
    }

    /**
     * This Function Delete the specific Opportunity
     * 
     * @param id Opportunity ID which we are deleting
     * @returns 
     */
    async deleteOpportunity(id: string) {

        return await this.xrm.WebApi
            .deleteRecord(
                "opportunity",
                id
            )
    }

}
