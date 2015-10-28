/**
 * Created by Tink on 2015/10/23.
 */

module.exports = {
    ErrorCode: {

    },
    TodoPriority: {
        NORMAL: 'normal',
        EMERGENCY: 'emergency',
        IMPORTANT: 'important'
    },
    TodoStatus: {
        ONGOING: 'ongoing',
        SUCCESS: 'success',
        EXPIRED: 'expired',
        DISCARD: 'discard'
    },
    TodoRecurrence: {
        TODAY: 'today',
        TOMORROW: 'tomorrow',
        //ONCE_A_WEEK: 'onceAWeek',
        ONE_DAY: 'oneDay', // 某一天

        EVERY_DAY: 'everyDAY',
        EVERY_WEEK: 'everyWeek',
        EVERY_WEEKDAYS: 'everyWeekdays',
        EVERY_WEEKENDS: 'everyWeekends',

        RANDOMS_EVERY_WEEK: 'randomsEveryWeek', // 任意选中的几天, 每周重复
        RANDOMS_ONCE: 'randomsOnce' // 任意的几天, 只提醒一次
    }
}