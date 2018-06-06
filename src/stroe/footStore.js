import { observable, action, computed, runInAction } from 'mobx'
import BaseStore from './baseStore'

class FootStore extends BaseStore {

    constructor(params) {
        super(params)
        this.name = 0
    }

    @observable name

    @computed
    get getAddName() {
        return this.name + 100
    }

    @action
    changeName = (params) => {
        this.name = params
    }

    @action
    requestDataSource = async () => {
        let relust = await fetch('http://', { method: 'POST', })
        runInAction(() => {
            // 更新

        })
        // this.loading = true
        // fetch('http://', { method: 'POST', }).then(() => {
        //     runInAction(() => {
        //         // 更新
        //         this.loading = true
        //     })
        // })
    }
    @action
    then = () => {
        this.loading = false
    }

}

export default FootStore
