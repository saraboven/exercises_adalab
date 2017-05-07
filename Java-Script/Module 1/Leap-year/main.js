var leapyearinterval=4
var currentyear=2017
var givenyear= 2050
var targetyear= givenyear -1
var lastleapyeartop= targetyear - targetyear % leapyearinterval
var lastleapyearlow= currentyear - currentyear % leapyearinterval
var leapyeartoprange = lastleapyeartop / leapyearinterval
var leapyearlowrange = lastleapyearlow / leapyearinterval
var result = leapyeartoprange - leapyearlowrange
console.log(result);
