import { store } from '../../../plugins/store'

import { ApiPost, ApiGet, ApitListGet, ApiDelete, ApiPut } from '../apiService';
import { ToastService } from '../toast/toastService';

const finishLoad = () =>{
    store.dispatch('setLoading', false);
}
const path = 'appliences';


const handleResquest = async (res, error, pathStore = false ) =>{
    const method = res.config.method.toUpperCase()
    await finishLoad();

    if(error.error){
       await ToastService('danger', res.message);
        return res.message
    } 


    if(pathStore){
        store.dispatch(pathStore, res.data)
    }
    if(method == 'POST' || method == 'PUT' || method == 'DELETE' ){
        ToastService('success', 'Realziado com sucesso');
    }
}

export async function PostApplience(payload){
    await ApiPost(path, payload , (res, error) => handleResquest(res, error))
}

export async function PutApplience(payload, payloadId){
    await ApiPut(path, payloadId, payload, (res, error) => handleResquest(res, error))
}

export async function GetApplience(payloadId){
    await ApiGet(path, payloadId, (res, error) => handleResquest(res, error, 'setApplience' ))
}

export async function GetListAppliences(){
    await ApitListGet(path, (res, error) => handleResquest(res, error, 'setAppliences'))
}

export async function DeleteApplience(payloadId){
    await ApiDelete(path, payloadId, (res, error)=> handleResquest(res, error))
}

