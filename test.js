function prettyDate(now, time) {
    var date = new Date(time || "");
    var diff = (new Date(now).getTime() - date.getTime()) / 1000;
    var day_diff = Math.floor(diff / 86400);
    return (
        (day_diff == 0 &&
            ((diff < 60 && "just now") ||
                (diff < 120 && "1 minute ago") ||
                (diff < 7200 && "1 hour ago") ||
                (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
        (day_diff == 1 && "Yesterday") ||
        (day_diff < 7 && day_diff + " days ago") ||
        (day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago")
    );
}
function prettyDateTest(then, expected) {
    var result = prettyDate(then, "2022/02/19 22:25:00");
    if (result !== expected)
        console.log("Fail: Excepted " + expected + ", but was " + result);
    else console.log("Pass: Excepted " + expected + " was " + result);
}
prettyDateTest("2022/02/19 22:25:13", "just now");
prettyDateTest("2022/02/19 22:26:00", "1 minute ago");
prettyDateTest("2022/02/20 22:25:00", "Yesterday");
prettyDateTest("2022/02/20 22:25:00", "Yesterday");
prettyDateTest("2022/02/20 22:25:00", "Yesterday");
prettyDateTest("2022/02/20 22:25:00", "Yesterday");
