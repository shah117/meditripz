// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
//var mainbottom = document.getElementById('#centerDIV').offset().top + document.getElementById('#centerDIV').height();

// on scroll, 
/*window.on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        document.getElementById('#header').appendClass('past-main');
    } else {
        document.getElementById('#header').removeClass('past-main');
   }

});
*/

var $logo = $('#header');
$(document).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$logo.css('height', '50px');
		$('#facebook').removeClass('facebook-top');
		$('#facebook').addClass('facebook-bottom');
		
		$('#signin').removeClass('signin-top');
		$('#signin').addClass('signin-bottom');

		$('#logoClass').removeClass('logoClass-top');
		$('#logoClass').addClass('logoClass-bottom');
	}
		
	else {
		$logo.css('height', 'auto');
		$('#facebook').removeClass('facebook-bottom');
		$('#facebook').addClass('facebook-top');
		$('#signin').removeClass('signin-bottom');
		$('#signin').addClass('signin-top');
		$('#logoClass').removeClass('logoClass-bottom');
		$('#logoClass').addClass('logoClass-top');
	}
});


function updatecities(){

	var sel = document.getElementById("cityEnter").value;
	//document.getElementById("demo").innerHTML = "You Selected: " + sel;
}

function updateproblem(){

	var city = document.getElementById("cityEnter").value;
	var prob = document.getElementById("problemEnter").value;
	document.getElementById("selected").innerHTML = "Showing you " + prob + " related Hospitals in " + city;

	var firstRow = document.getElementById("hospitalTable").rows[0];
    

    var hospitalList = ["AIIMS", "gangaram"];

    for (var i = hospitalList.length - 1; i >= 0; i--) {
    	var x = firstRow.insertCell(-1);
    	x.innerHTML="";
    	var divi = document.createElement('div');
	    var img = document.createElement('img');
	    img.src = "images/"+ hospitalList[i] + ".jpg";
	    img.className = "singleHospital";

	    var link = document.createElement("a");
	    link.href = "#hotels";
	    link.appendChild(img);

	    var namePara = document.createElement("p");
	    var name = document.createTextNode(hospitalList[i]);
	    namePara.appendChild(name);
	    divi.appendChild(link);
	    
	    divi.appendChild(namePara);

	    x.appendChild(divi);
    };
    



}