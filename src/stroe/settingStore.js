import { observable, action, computed, runInAction } from 'mobx'
import BaseStore from './baseStore'

class SettingStore extends BaseStore {

    constructor(params) {
        super(params)
        this.age = 18
    }

    @observable age

    @action
    actionName = () => {

    }

}

export default SettingStore