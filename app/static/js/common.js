class common {
    /**
     * 时间戳格式化函数
     * @param  {string} format    格式
     * @param  {int}    timestamp 要格式化的时间 默认为当前时间
     * @return {string}           格式化的时间字符串
     */
    static getTimestamptoDate(timestamp, format) {

        let dateTime = new Date(timestamp*1) ;

            var date = {
                "M+": dateTime.getMonth() + 1,
                "d+": dateTime.getDate(),
                "h+": dateTime.getHours(),
                "m+": dateTime.getMinutes(),
                "s+": dateTime.getSeconds(),
                "q+": Math.floor((dateTime.getMonth() + 3) / 3),
                "S+": dateTime.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;



    }
}

export default common;