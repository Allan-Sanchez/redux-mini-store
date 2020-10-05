import {SHOW_ALERT,CLOSE_ALERT} from "../types";

export function showAlertAction(alert) {
    return (dispatch) =>{
        dispatch(showAlert(alert));
    }  
}

const showAlert = (alert) =>({
    type:SHOW_ALERT,
    payload:alert
})

export function closeAlertAction (){
    return (dispatch) =>{
        dispatch(closeAlert());
    }
}

const closeAlert = () =>({
    type:CLOSE_ALERT
})