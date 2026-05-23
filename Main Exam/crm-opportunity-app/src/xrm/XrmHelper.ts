/***
 * Getting The XRM Object
 */
export const getXrm = () => {

    return window.parent.Xrm

}

/***
 * Getting The Account ID
 */
export const getCurrentAccountId = () => {

    const id = window.parent.Xrm.Page.data.entity.getId();

    //Check If the ID is Null
    if (!id) {
        window.parent.Xrm.Page.ui
            .setFormNotification(
                "Please save the Account record first.",
                "WARNING",
                "accountIdMissing"
            );
        return null;
    }
    else {
        // Remove notification if ID exists
        window.parent.Xrm.Page.ui
            .clearFormNotification(
                "accountIdMissing"
            );
            
        return id
            .replace("{", "")
            .replace("}", "")
    }

    // return window.parent.Xrm.Page.data.entity
    //     .getId()
    //     .replace("{", "")
    //     .replace("}", "")
}
