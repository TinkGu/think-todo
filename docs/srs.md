# think-todo 需求分析

标签（空格分隔）： 未分类

---

# modules
---
## todo
土豆
+ 新建土豆
+ 删除土豆
+ 更改土豆
```
var todo = {
    _id                     : String,
    participants            : [String],
    title                   : String,
    desc                    : {type: String, default: ''},
    level                   : {type: Number, default: constant.todoLevel.Normal},
    goals                   : [GoalAndExp],
    status                  : {type: Number, default: constant.todoStatus.Ongoing},
    loopStyle               : {type: String, default: constant.todoLoopStyle.Tomorrow}, // 重复模式, 一般选为明天, 精确到小时
    fixDates                : [Date], // 约定时间
    fixWeekdays             : [Number], // 约定的周几
    nextDate                : Date, // 最近需要通知的时间
}
```
常量
```
todoStatus: {
        Ongoing             : 1, // 进行中
        Success             : 2, // 完成
        Expired             : 3, // 过期
    },
todoLevel: {
        Normal              : 1, // 正常
        Important           : 2, // 重要
        Emergency           : 3, // 紧急
    },
todoLoopStyle: {

        Today               : 'today',
        Tomorrow            : 'tomorrow',
        OnceAWeek           : 'onceAWeek',
        OneDay              : 'oneDay',

        EveryDay            : 'everyDay',
        EveryWeek           : 'everyWeek',
        EveryWeekdays       : 'everyWeekdays',
        EveryWeekends       : 'everyWeekends',

        RandomsEveryWeek    : 'everyRandomsInAWeek', //一周的某几天
        RandomsOnce         : 'randomsOnce', // 任意几天, 一次
    },

```

说明
>     1. 一次性时间
>         不管是一次性几个时间, 全部存到fixDates中, 前一个提醒日期到期时, 就把fixDates里的第一个值放进去
>     2. 每周几/每周工作日/每周休息日/每周任意几天
>         根据选中的日期, 记录到fixWeekdays里
>     3. 每天
>         直接把nextDate保持在当天就好了

---
## goal
目标
+ 添加目标
+ 删除目标
+ 目标升级
+ 目标嵌套管理. 可以由子模块的进度计算得到父目标的等级
+ 按目标检索todo
```
var Goal = new Schema({
    name                    : String,
    desc                    : String,
    level                   : { type:Number, default: 0 },
    score                   : { type:Number, default: 0 }
})
```
---

## log (later)
---

## user (later)
用户管理模块
+ 用户账号的新建, 删除.
+ 搜索
```
var user = {

}
```