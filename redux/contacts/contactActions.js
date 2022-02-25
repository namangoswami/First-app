import { GET_CONTACT } from "./contactTypes";

export const getContact=(contacts=[])=>{
    return {
        type:GET_CONTACT,
        payload:contacts
    }
}