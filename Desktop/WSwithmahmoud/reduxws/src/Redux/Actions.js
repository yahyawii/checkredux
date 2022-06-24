import { HANDELADD, HANDELDONE} from "./Actiontypes"

export const handelAdd =(payload)=>{
    return (
        {
            type: HANDELADD ,
            payload
        }
    )
}

export const handelDone =(payload)=>{
    return (
        {
            type:HANDELDONE,
            payload

        }
    )
}
