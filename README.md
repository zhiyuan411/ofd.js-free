# ofd.js


### 修改的核心内容
本项目基于开源协议 Apache-2.0 license 在允许范围内进行如下修改：

1. 去除水印，包括但不限于：背景纯文字testdemo水印，背景图片DEMO水印，前景SVG格式Test水印。
2. 去除组件的倒计时提示以及到期之后的功能限制等措施。


### 在使用ofd.js前请务必悉知  [《ofd.js免责声明》](https://github.com/DLTech21/ofd.js/blob/master/%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E.md)

![-](https://img.shields.io/badge/language-js-orange.svg) [![license](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE)

目前方案采用：svg及canvas渲染实现，百分百纯前端渲染

效果： 
![示例](./ofd.jpg)



```md
npm i ofd.js
```

#### 解析OFD文件
```
parseOfdDocument({
        ofd: ofdFile,
        success() {
            
        },
        fail(error){
            console.log(error)
        }
    })
```

#### 一次性渲染OFD对应文档的所有页，适合页数少
**此方法需要在parseOfdDocument success回调后使用**

| 参数        | 说明                                                           | 是否必填 |
| ----------- | ------------------------------------------------------------ | -------- |
| documentIndex   | ofd文档中document的索引，默认从0开始                              | 是       |
| width   | 预期渲染的宽度，像素值 ，如800                             | 否       |

```
const divs = renderOfd(documentIndex, width)
// do something
```

#### 渲染OFD对应文档的对应页
**此方法需要在parseOfdDocument success回调后使用**

| 参数        | 说明                                                           | 是否必填 |
| ----------- | ------------------------------------------------------------ | -------- |
| documentIndex   | ofd文档中document的索引，默认从0开始                              | 是       |
| pageIndex   | ofd文档中页码，默认从0开始                              | 是       |
| width   | 预期渲染的宽度，像素值 ，如800                             | 否       |

```
const div = renderOfdByIndex(documentIndex, pageIndex, width)
// do something

```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


