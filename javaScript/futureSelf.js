$.fn.futureSelf=function(options){

var item = this;
var counter = 0;
// var selectItem = $(item);

var settings = $.extend({
	endDate: new Date (2027, 06, 24)
}, options);
console.log(settings.endDate);

//make a variable for time

//console.log('There are ' + diffDays + ' Days ' + diffHours + ' Hours ' + diffMins + ' Mins ' + diffSecs + ' seconds ' + ' between' + currentDate + ' and ' + endDate);

var countdown = window.setInterval(function(){
	var currentDate = new Date;
	var diffMs = settings.endDate - currentDate;
	var diffDays = Math.round(diffMs / 86400000);
	var diffHours = Math.round((diffMs % 86400000) /3600000);
	var diffMins = Math.round(((diffMs % 86400000)% 3600000)/ 60000);
	var diffSecs = Math.round((((diffMs % 86400000)% 3600000)% 60000) /1000);
	$(item).addClass('timeDisplay').html('<div class="time">' + diffDays + '<br> days </div>' + '<div class="time">' + diffHours + '<br> hours </div>' + '<div class="time">' + diffMins + '<br> minutes </div>' + '<div class="time">' + diffSecs + '<br> seconds</div>');
}, 1000);
// allow user to set the date
// return this.Date(endDate);

//count down
return this;


//display on page


}