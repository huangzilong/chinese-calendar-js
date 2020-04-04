# chinese-calendar-js

判断一天是不是法定节假日/法定工作日（查看节假日安排）。

## 使用方法

### 安装

- npm

```shell
  npm i chinese-calendar
```

- yarn

```shell
  yarn add chinese-calendar
```

### 使用

- 浏览器下(基于 webpack 构建)

```JavaScript
  import calendar from 'chinese-calendar'
  calendar.isHoliday('2020-10-08') // true
  calendar.getHolidayDetail('2020-10-07') // ['National Day', '国庆节', 3]
```

- NodeJS 下

```JavaScript
  const calendar = require('chinese-calendar)
  calendar.isHoliday('2020-10-08') // true
  calendar.getHolidayDetail('2020-10-07') // ['National Day', '国庆节', 3]
```

## 其他语言版本

- [Python 版本](https://github.com/LKI/chinese-calendar)

## 后续更新

- [ ]  【chore】使用 GitHub Actions 直接构建
- [ ]  【feat】提供判断某天是否为法定工作日的功能
- [ ]  【feat】提供判断某天是否为调休的功能(本来应该是周一到周五的某一天，结果调休了)
- [ ]  【feat】把20年之前的历史数据加进来
- [ ]  【feat】支持直接传 Date 对象
- [ ]  【feat】提供 cli 支持
