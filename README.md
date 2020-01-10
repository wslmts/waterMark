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

