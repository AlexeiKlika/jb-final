
var bio = {
	"name": "Alexei",
	"role": "Web Developer",
	"contacts": {
		"phone": "777-777-7777",
		"email": "fakeymcfakerson@yahoo.com"
	},
	"biopic": "https://lh6.googleusercontent.com/-j4mAvBrzA3s/UWxLaJqNpMI/AAAAAAAAAB0/6TLHY-IgfPk/s622-no/gavatar.png",
	"welcome_message": "Thanks for stopping by! Feel free to look around.",
	"skills" : ["HTML","Javascript","Smiling"]
}

bio.display = function () {
	// display bio info
};

var education = {
	"schools" : [
		{
			"name": "YUI",
			"location": "Jersey",
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
	// display education info
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
	// display work info
};

var projects {
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
	// display projects info
}