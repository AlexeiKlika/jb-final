
var bio = {
	"name": "Alexei",
	"role": "Web Developer",
	"contacts": {
		"mobile": "777-777-7777",
		"email": "fakeymcfakerson@yahoo.com",
		"twitter": "twitter.com/fakeymcfakerson",
		"location": "60102 Illinois"
	},
	"bioPic": "https://lh6.googleusercontent.com/-j4mAvBrzA3s/UWxLaJqNpMI/AAAAAAAAAB0/6TLHY-IgfPk/s622-no/gavatar.png",
	"WelcomeMsg": "Thanks for stopping by! Feel free to look around.",
	"skills" : ["HTML","Javascript","Smiling"]
}

bio.display = function () {
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	for (var i in bio.contacts) {
		if (window["HTML" + i]) {
			$("#topContacts").append(window["HTML" + i].replace("%data%",bio.contacts[i]));
		}
	}

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
	$("#header").append(formattedWelcomeMsg);
};


var education = {
	"schools" : [
		{
			"name": "YUI",
			"location": "28012 NC",
			"degree": "none",
			"majors": ["Tom Foolery"],
			"dates": "A long time ago",
			"url": "http://www.yale.edu/"			
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "03/11/2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "Intro to Computer Science",
			"school" : "Udacity",
			"date" : "01/05/2015",
			"url" : "https://www.udacity.com/course/cs101"
		}
	]
}

education.display = function () {

	for (var i in education.schools) {
		$("#education").append(HTMLschoolStart);
		for (var c in education.schools[i]) {
			console.log(c);
			var key = c.slice(0,1).toUpperCase() + c.slice(1).toLowerCase();
			if (window["HTMLschool" + key]) {
				$(".education-entry:last").append(window["HTMLschool" + key].replace("%data%",education.schools[i][c]));
			}
		}
	}

};

var work =  {
	"jobs": [
		{
			"employer": "CTA",
			"title": "Marketing Assistant",
			"location": "Seattle",
			"dates":"June 2019 - October 2022",
			"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rerum culpa eos nobis repudiandae nisi quis, ex animi officia quisquam voluptates recusandae esse obcaecati officiis accusantium consequuntur qui. Recusandae, dolorem!"
		},
		{
			"employer": "CW",
			"title": "Frontend Web Designer",
			"location": "Denmark",
			"dates":"Then-Current",
			"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste blanditiis cupiditate culpa temporibus minus explicabo neque odio aperiam eaque iure!"
		}
	]
}

work.display = function () {
	for (var i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		for (var c in work.jobs[i]) {
			var key = c.slice(0,1).toUpperCase() + c.slice(1).toLowerCase();
			if (window["HTMLwork" + key]) {
				$(".work-entry:last").append(window["HTMLwork" + key].replace("%data%",work.jobs[i][c]));
			}
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "CW website launch",
			"dates": "March 2011 - May 2012",
			"description": "Customization magento frontend, and implementing custom php functionality",
			"images":
				[
					"https://lh6.googleusercontent.com/-6xy-pXU5u5Q/AAAAAAAAAAI/AAAAAAAAAAA/IGguq5yDy1I/photo.jpg",
					"http://38.media.tumblr.com/avatar_497c78dc767d_128.png",
					"https://38.media.tumblr.com/avatar_ef5a40c11ea9_128.png"
				]
		},
		{
			"title": "Dog Sitter",
			"dates": "January 2002 - December 2013",
			"description": "#passion",
			"images": [
				"https://lh4.googleusercontent.com/-nW1hre_D5Yc/T2JgV1xu4RI/AAAAAAAAAFU/ye46tbXepVs/w800-h800/very-cute-dog-background-1600x1200-1007067.jpg",
				"http://www.lovethispic.com/uploaded_images/37623-Cute-Dog.jpg"
			]
		}
	]
}

projects.display = function () {
	for (var i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		for (var c in projects.projects[i]) {
			var key = c.slice(0,1).toUpperCase() + c.slice(1).toLowerCase();
			if (window["HTMLproject" + key]) {
				$(".project-entry:last").append(window["HTMLproject" + key].replace("%data%",projects.projects[i][c]));
			}
		}
		// insert images
		for (var t in projects.projects[i].images){
			var img = projects.projects[i].images[t];
			$(".project-entry:last").append(HTMLprojectImage.replace('%data%',img));
		}
	}
}


// Display All
bio.display();
education.display();
work.display();
projects.display();

// Append Google Map

$("#mapDiv").append(googleMap);