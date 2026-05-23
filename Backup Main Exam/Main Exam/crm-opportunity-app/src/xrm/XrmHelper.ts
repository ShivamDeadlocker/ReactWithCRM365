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

    return window.parent.Xrm.Page.data.entity
        .getId()
        .replace("{", "")
        .replace("}", "")
}
