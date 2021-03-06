## react

#### react 环境搭建

使用官方提供的脚手架 create-app,如何使用

1.`npx create-react-app` 前提 Node >= 8.10 和 npm >= 5.6
或：全局安装 create-react-app 包. npm i -g create-react-app

#### react 的基础知识

##### JXS 语法

在 js 文件内写 HTML 语法 1.如何在 html 内写 js html 内的 js 语法都使用 {} 套上

###### 条件渲染

直接在 html 内使用 js 做判断即可。
例子

```

```

###### 列表渲染

将你的列表使用 map 方法转化成标签数组直接放到 html 内，自动会被渲染 注意要加 key 属性

###### 事件处理

如何绑定事件

1.首先在组件的 class 内创建一个方法 handleClick 2.使用标签的 onClick 属性绑定事件 例如 `<button onClick={this.add}>+</button>`

事件绑定如何传递参数 1.事件绑定的必须是一个函数不能是函数调用 2.要把你定义好的 handleClick 放到一个箭头函数去执行并且传参，然后将箭头函数绑定给标签的 onClick 属性。
例子：
`<button onClick={()=>{this.add(argument)}}>+</button>`
**需要注意的是 事件对象 event . 这个对象必须是事件函数才有的**

###### state

组件的状态，react 框架要求页面的所有的变化需要和 state 有直接的关系 1.如何定义
在 class 内

```js
class Button extends Component {
  state = {
    count: 0
  };
}
```

2.render 函数内获取 this.state 3.修改 state 必须通过 setState 函数修改

###### props

父组件传递数据

1.在父组件内直接给子组件自定义一个属性把想传递的数据当做属性值传递过去
`<Button text='父组件的数据'>`

2.在子组件内会有一个默认的 props 属性用来存储父组件传递过来的数据
`this.props.text`

3.可以通过 Button(组件名).defaultProps 设置 props 的默认值，也可以使用环境自带的 props-types 包对 props 进行类型检查

```js
import PropTypes from 'prop-types';
Button.propTypes = {
  text: PropTypes.string
};
Button.defaultProps = {
  text: '默认值'
};
```
