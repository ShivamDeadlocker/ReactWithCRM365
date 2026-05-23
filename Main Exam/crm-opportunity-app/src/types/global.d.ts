/**
 * CRM Automatically Xrm properties in the Windows Global Object
 * Because Windows object dose not contains the XRM so we have to declare globally
 * 
 *  The global Xrm object follows this structure.
 *  Xrm.XrmStatic
     
    Xrm: [WebApi, Utility, Navigation, App, etc...]
 */

declare global {
    interface Window {
        Xrm: Xrm.XrmStatic
    }

}
export { }
