 //just getting safety tip   
	function triviapage (){
	  	var trivia = postsafetytip()
		document.write (trivia);
	}
	//finished running this function
	function getdate(){
		 return new Date();
		
	}
	//calling getplaygame from jquery and passing her the date
	function getplaygame(){
		var thedate = getdate();
		getplaygame (thedate)
	}
	