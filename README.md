# 半小时内学会mobx

## 一、mobx在react native工程中的配置
### 1、下载到项目
`npm install mobx  mobx-react  —save` <br>
`npm install  babel-preset-react-native-stage-0   babel-plugin-transform-decorators-legacy  -D`

**备注：**<br>

`babel-plugin-transform-decorators-legacy ：转义装饰器@ ` <br>
`babel-preset-react-native-stage-0 ：转义ES7语法`<br>

### 2、配置转义
打开项目根目录下 .babelrc文件 （mac默认不显示.开头的文件，直接在工程里可以看到） <br>
把以下代码复制进去： <br>
```
{
    "presets": ["react-native"],
    "plugins": ["transform-decorators-legacy"]
}
```

## 二、使用
具体请看项目

## 三、需要注意的事项

- FlatList或者列表组件的data是数组，但是Mobx所观察的都是对象，所以使用的时候需要转换一下：<br>
```
 <FlatList
    data={store.dataSouce.slice()}
 />
```
- 优化：<br>
如果你考虑优化你的项目，你可以设置一个计算属性：
```
 @computed
 get getDataSouce() {
      return this.dataSouce.slice()
 }
 
 <FlatList
    data={store.getDataSouce}
 />
```
- 开启严格模式后，只能在`@action`里更新store的状态(数据)
- 如果有网络请求，比如：
```
@action
requestDataSource = async () => {
     let relust = await fetch('http://', { method: 'POST', })
     runInAction(() => {
           // 更新

     })
     fetch('http://', { method: 'POST', }).then(() => {
            runInAction(() => {
                // 更新

            })
      })
}
```

你需要在`runInAction`里更新你的状态，因为fetch返回的是一个Promise对象，你.then或者await之后，`()=>`是一个新的箭头函数对象，不是mobx的`@action`，我们开启了严格模式后，所有的状态更新必须在`@action`里。
`runInAction`是`action函数`的语法糖。
