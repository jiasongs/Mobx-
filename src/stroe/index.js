import footStore from './footStore';
import settingStore from './settingStore';
import loginStore from './loginStore';
export default {
    footStore: new footStore(),
    settingStore: new settingStore(),
    loginStore: new loginStore()
}