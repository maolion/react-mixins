[![NPM Package](https://badge.fury.io/js/react-mixins-decorator.svg)](https://www.npmjs.com/package/react-mixins-decorator)
[![Build Status](https://travis-ci.org/maolion/react-mixins-decorator.svg)](https://travis-ci.org/maolion/react-mixins-decorator)

# React Mixins Decorator

用于实现在 react component class(es6风格) 使用 react mixins 特性的类装饰器


# 版本更新提示

- 0.1.x

    组件被实现


# 安装

```
npm install react-mixins-decorator --save
```

# 使用

```
import { Component } from 'react';
import reactMixins from 'react-mixins-decorator';


@reactMixins([MixinTargetA, MixinTargetB, MixinTargetC, ....])
class TargetComponent extends Component {
    ....
}
```
