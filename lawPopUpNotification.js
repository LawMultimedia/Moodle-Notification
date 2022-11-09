window.addEventListener('load', function(){
// grab the unit title out of the image/banner header at the top of the site, remove all the spaces in the name, and take the first 3 characters.
var headerTitle = $('.header-title').text().replace(/\s/g,'').slice(0,3);
// change constant for testing purposes
//	const expirationDuration = 1000 * 60 * 2;
// define expiration duration as 144 hours/7 days
	const expirationDuration = 1000 * 60 * 60 * 288;
// save the time of the current login to localStorage
	const savedTime = localStorage.getItem('savedTime');
// get the time of the current login
	const currentTime = new Date().getTime();
// make a constant that refers to when there is no record of a login
	const notAccepted = savedTime == undefined;
// make a constant that refers to when the login has a history, and meets the requirements to display the notification again
	const AcceptedExpired = savedTime != undefined && currentTime - savedTime > expirationDuration;
// Attendance requirements notification
	$('.sectionname').before('<div class="container"><div class="modal fade" id="attNotification" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" style="background:#006dae"><h4 class="modal-title text-white">Attendance expectations</h4><button type="button" class="close text-white" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>The Faculty of Law has an expectation that you attend all classes and participate in all learning activities. All the evidence suggests that student academic success is greatly impacted by class attendance and participation</p></div><div class="modal-footer"><button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Close</button></div></div></div></div></div>');
// if the unit has LAW in its title and its either the first visit, or their first visit since the user has gone over the expirationDuration time
	if (headerTitle.indexOf("LAW") != -1){
 		if(notAccepted || AcceptedExpired){
  		$('#attNotification').modal('show');
  		localStorage.setItem("savedTime", currentTime);
 		}
    		else{
      		//Do nothing
    		}
	}
  });

