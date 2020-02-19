# waterMark
添加水印

## 使用方法
- npm i -S @zcc/watermark
- import {waterMark} from '@zcc/watermark'
- waterMark({options})
options:以下参数都有默认值；

```
    width=每个签名占据宽度,
    height=每个签名占据高度,
    rotate = 旋转角度,
    color = 文字颜色,
    textAlign = 对齐方式,
    textBaseline = 基线,
    font = 字体,
    content = 水印内容,
    opacity = 水印透明度,
    zIndex = 层叠顺序,
    container = 水印容器
```

以上参数都有默认值，不合适的根据使用情况自己调整；
container默认是body,建议至少添加此项；

## 新增浏览器直接调用

```
把dist目录下的watermark.min.js复制到自己项目js目录下，页面引用以后；
直接调用 waterMark({options});
参数含义同上；

注意：waterMark是全局变量，不要冲突了；
```