import { action, observable, configure } from 'mobx'

configure({ enforceActions: true }); // 开启严格模式

class BaseStore {

    constructor(params) {
        this.loading = false
        this.error = { isError: '', errorMsg: '' };
    }

    @observable loading = true;
    @observable error = { isError: '', errorMsg: '' };


}

export default BaseStore;
