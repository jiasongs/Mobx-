import { observable, action, computed, runInAction } from 'mobx'
import BaseStore from './baseStore'

class LoginStore extends BaseStore {

    constructor(params) {
        super(params)
        this.userInfo = {

        }
    }

    @observable userInfo = {}

    @action
    doLogin = async (url, data) => {
        let reslut = await Services.post(url, data)
        runInAction(()=>{
            this.saveUserInfo(this.userInfo)
            
        })
    }

    @action
    saveUserInfo=(reslut)=>{
        this.userInfo = reslut.data
        global.token =token
        Asystroge.save('key',{})
    }
    
    @action 
    clearUserInfo=()=>{
        this.userInfo = {}
        global.token = ''
        Asystroge.remove('key')
    }
}

export default LoginStore