var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "條件判斷",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay) {
    //一次設定好月份與日期
    startDate.setMonth(startMonth - 1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
var mystr = thedate;

setMonthAndDay(mystr.charAt(0, 1), mystr.charAt(2, 4));