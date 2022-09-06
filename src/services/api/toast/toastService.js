import { store } from "../../../plugins/store";

export function ToastService(type, message){
    const toast = {
        show: true,
        type,
        message
    }

    const toastReset = {
        show: false,
        type: null,
        message: null
    }
    store.dispatch('setToast', toast);

    setTimeout(() => {
        store.dispatch('setToast', toastReset);
    }, 3000);
}