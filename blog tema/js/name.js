
$(document).ready(function(){

	/******************************
	 ADD ANIMATION TO THE TEXT 
	******************************/
	animation()	
	
	
	/*********************
	 SET ROW'S COLOR
	*********************/
	$.each($('.row'), function() { 
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	});
	
	
	
	
	/******************
	 SEARCH BOX
	******************/
	var input = $('#search-wrap input');
	var sw = $('#search-wrap');
	var tw = $('.tags-wrap');
	var sr = $('#search-results');
	
	//show the search box
	$('#search-btn').click(function(){
		sw.addClass('active');
		input.focus();
	});	
	
	//close the search box
	$('#content-wrap, #li-4').click(function(){
		//collapse bars
		fcollapse(sw,tw)
		
		//reset search
		input.val("");
		nsearch(sr)	
		
	});
	
	//key up function
	input.keyup(function(e){
		tw.addClass('active');
		
		//if input is 'EMPTY'
		if($(this).val().length == 0){
			tw.removeClass('active');			
			nsearch(sr)	
		}
		
		//if we press 'ENTER'
		if (e.keyCode == 13) {
		    fsearch(input, sr, tw)
	    }
		
		//if we press 'BACKSPACE'
		if (e.keyCode == 8) {
		   nsearch(sr)
	    }
	});
	
	
	
	/*TAGS CLICK*/
	$('.tags-wrap ul li').click(function(){
		var txt = $(this).text();
		input.val(txt);
		input.focus();		
	});
	
	
	/*SEARCH CLICK*/
	$('#li-3').click(function(){
		fsearch(input, sr, tw)
	});
	
	
	
	
	
	
	
	/*************************
	 ON WINDOW SCROLL FUNCTION
	*************************/
	var count = 0;
	$(window).scroll(function(event){		

		var scrolled = $(this).scrollTop();		
		
	    if (scrolled > count){  
			//scroll down
			count++;
			$('#nav-wrap').addClass('active');		
		} 
		else { 			
			//scroll up
			count--; 
			$('#nav-wrap').removeClass('active');
		}
	    
		//Check if we've reached the top
		count = scrolled;		
		
		if(count == 0){
			animation()
			$('#first-row i').removeClass('active');
		}else{
			$('h1 ,h2').removeClass('animationActive');
			$('#first-row i').addClass('active');
		}
		
		if(count == 200){
			//collapse
			fcollapse(sw,tw)
		}
	
	});
	
	
	/*****************
		MOBILE
	*****************/
	var mob = $('#menu-mob');
	mob.click(function(){
		$(this).toggleClass('active');
		$('#nav-wrap ul li').toggleClass('mob');
	});	

});//DOCUMENT READY
	
	
	
	
/*Animation Text*/
function animation(){
	$('h1').addClass('animationActive');
	
	var count = 0;
	var limit = 10;
	
	var interval = setInterval(function(){
       count++;
	   if (count === limit) { 
	   		clearInterval(interval);			
			$('h2').addClass('animationActive');	
		}
	}, 50);	
}



/*Collapse Bars Function*/
function fcollapse(sw, tw){
	sw.removeClass('active');
	tw.removeClass('active');	
}



/*Search Function*/
function fsearch(input, sr, tw){
	var r = input.val();
	$('.tags-wrap ul').css('display', 'none');
	sr.html('Sorry, 0 results were found for: <span> "' + r + '"</span>');
	tw.addClass('active');	
}



/*Clear/New function*/
function nsearch(sr){
	sr.html('');
	$('.tags-wrap ul').css('display', 'inline-block');
}