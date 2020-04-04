# chinese-calendar-js

判断一天是不是法定节假日/法定工作日（查看节假日安排） https://github.com/LKI/chinese-calendar 对应的 JavaScript 版本

## 使用方法

- 浏览器下(基于 webpack 构建)

```JavaScript
  import calendar from 'chinese-calendar'
  calendar.isHoliday('2020-10-08') // true
  calendar.getHolidayDetail('2020-10-07') // ['National Day', '国庆节', 3]
```

- NodeJS 下

```JavaScript
  const caledar = require('chinese-calendar)
  calendar.isHoliday('2020-10-08') // true
  calendar.getHolidayDetail('2020-10-07') // ['National Day', '国庆节', 3]
```
