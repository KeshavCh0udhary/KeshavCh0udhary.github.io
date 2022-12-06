const Nav = () => {
	return `<nav class="nav" role="navigation">
	  
	<a href="#top"><h3 class="logo" id="change">Portfo<span>lio</span></h3></a>
	<ul class="nav__items" id="SideBar">
		<li class="nav__item">
			<a href="#top" class="nav__link">Home</a>
		</li>
		<li class="nav__item">
			<a href="#About" class="nav__link">About</a>
		</li>

		<li class="nav__item">
		<a href="https://drive.google.com/uc?export=download&id=1X993G4KNPlVUhdNaDCBToXCt3_NUzH78" title="Download Resume" class="nav__link" id="resume_button_1">Resume</a>
		</li>
		
		<li class="nav__item">
			<a href="#Skills" class="nav__link">Skills</a>
		</li>
		<li class="nav__item">
			<a href="#projects" class="nav__link">Projects</a>
		</li>
		<li class="nav__item">
			<a href="#contact" class="nav__link">Contact</a>
		</li>

		<li class="nav__item">
			<a href="#Git" class="nav__link">Contribution</a>
		</li>
		

        <i class="fa-sharp fa-solid fa-xmark" onclick="closeMenu()"></i>
	</ul>
    <i class="fa-solid fa-bars" onclick="openMenu()"></i>
</nav>`
}

const header = () => {
	return `<div class="header__text-box row" id="header__text">
	<div class="header__text">
		<h4>Hello, my name is</h4>
		<h1>Krishna <span>Keshav</span></h1>
		<h3>I'am a Full Stack Web Developer.</h3>
		<a href="tel:+91 9304264670" data-rel="external" class="btn" title="Call">Let's talk</a>
	</div> </div>`
}

const about = () => {

	return `<div class="row">
	<h2>About Me</h2>
	<div class="about__content">
	
		<div class="about__text">
		   <p>Aspiring Full Stack Developer with a specialization in Java, Spring Boot, SQL, Git/Github, HTML, CSS, Javascript, Object-oriented, design Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to honing my skills in a challenging work environment.</p>
			<a href="https://drive.google.com/uc?export=download&id=1X993G4KNPlVUhdNaDCBToXCt3_NUzH78" title="Download Resume" class="btn" id="resume_button_2">My Resume</a>
		</div>
		<div class="about__photo-container">
	
			<img class="about__photo" src="./img/main-img.jpg" alt="Profile" />
		</div
	</div>
	
</div>`

}

const skills = () => {

	return `<div class="row">
	<h2>My Skills</h2>
	<div class="Myslills">
		<ul class="Thechical">
		  <li><img src="./img/Java-PNG-Clipart.png" class="project__logo" alt="Java" /></li>
		  <li><img src="./img/spring.png" class="project__logo" alt="Springboot" /></li>
		  <li><img src="./img/mysql.png" class="project__logo" alt="MySql" /></li>
		  <li><img src="./img/hibernate.png" class="project__logo" alt="Hibernate" /></li>
		  <li><img src="./img/js-logo.png" class="project__logo" alt="JavaScript" /></li>
		  <li><img src="./img/dsa.webp" class="project__logo" alt="DSA" /></li>
		  <li><img src="./img/HTML5_Logo_512.png" class="project__logo" alt="HTML" /></li>
		  <li><img src="./img/css-3-logo-png-transparent.png" class="project__logo" alt="CSS" /></li>
		  <li><img src="./img/git.png" class="project__logo" alt="Git" /></li>
		  <p></p>
		</ul>
	</div>
</div>`

}

const Project = () => {
	return `<div class="project">
	<div class="project__text">
		<h3>Hindustan Times</h3>
		<p>
			Hindustan Times is an Indian English-language daily newspaper website. I have cloned
			This website in five Days.
		</p>
		<h4><span>Tech Stack</span></h4>
		<ul class="project__list">
			<li>Javascript</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>APIs</li>
		</ul>

		<div class="project__links">
			<a href="https://eloquent-melomakarona-13c3e8.netlify.app/" class="link__text"
			target="_blank" title="Click">
				Live ↗
			</a>
			<a href="https://github.com/KeshavCh0udhary/-messy-grape-1778" target="_blank">
				<i class="fab fa-github" title="Source Code"></i>
			</a>

		</div>
	</div>
	<div class="project__image-box">
		<img src="./img/ht.png" class="work__image" alt="Project 1" />
	</div>
</div>

<div class="project">
	<div class="project__text">
		<h3>Mytheresa</h3>
		<p>
			Mytheresa is a German e-commerce website We have cloned in six days.
		</p>
		<h4><span>Tech Stack</span></h4>
		<ul class="project__list">
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
		</ul>
		<div class="project__links">
			<a href="https://resplendent-elf-e32d23.netlify.app/" target="_blank" class="link__text"
				title="Click">
				Live ↗
			</a>

			<a href="https://github.com/Deepaksharma-39/1st_GroupProject-Masai" title="Source Code"
				target="_blank">
				<i class="fab fa-github" title="Source Code"></i>
			</a>
		</div>
	</div>
	<div class="project__image-box">
		<img src="./img/Mytheresa.png" class="work__image" alt="Project 1" />
	</div>
</div>

<div class="project">
	<div class="project__text">
		<h3>soulFood</h3>
		<p>
		soulFood is a Self made online food Delivery App We have created the API for this in four days.
		</p>
		<h4><span>Tech Stack</span></h4>
		<ul class="project__list">
		<li>Java</li>
		<li>Spring Data JPA</li>
		<li>Hibernate</li>
		<li>MySql</li>
		
		</ul>
		<div class="project__links">
			<a href="https://drive.google.com/file/d/1hYerHKDXECCkLeVVcQZFpn6-hPMrxg1j/view?usp=sharing" target="_blank" class="link__text"
				title="Click">
				Video ↗
			</a>

			<a href="https://github.com/vinitshahilverma/wide-eye-6503" title="Source Code"
				target="_blank">
				<i class="fab fa-github" title="Source Code"></i>
			</a>
		</div>
	</div>
	<div class="project__image-box">
		<img src="https://user-images.githubusercontent.com/105925560/201616514-93a563e6-29ad-455b-829c-780b47ea1a0b.png" class="work__image" alt="Project 1" />
	</div>
</div>

`
}

const contact = () => {

	return `<div class="row" >
	
	<div id="address">

		<div>
			<h2>Contact Me</h2>
			<a href="mailto:krishna2000chy@gmail.com" class="btn">Mail</a>
			<a class="btn" href="tel:+91 9304264670" data-rel="external">Phone</a>
			
		</div> 

	    <div class="SendMessage">
       
	        <h4>Leave Message</h4>
	  
			<form name="Send_Message_To_Keshav" class="form-group">
			    <textarea id="0" name="Message" rows="6" placeholder="Your Message"></textarea>
				<input id="1" type="text" name="Name" placeholder="Your Name" required>
				<input id="2" type="text" name="Email" placeholder="Email" required>
				<input id="3" type="number" name="Phone" placeholder="Phone Number" required>
				<button id="btn" type="submit">Send message</button>
		    </form>
		    <span id="message"></span>
	     </div> 

	</div> 

</div>`

}

const footer = () => {

	return `<div class="row">
	<h3>Krishna <span>Keshav</span></h3>

	<div class="social">
		<a href="https://github.com/KeshavCh0udhary" target="_blank"><i class="fa-brands fa-github" title="GitHub"></i></a>
		<a href="https://www.linkedin.com/in/krishna-keshav-baa164233/" target="_blank"><i class="fa-brands fa-linkedin" title="LinkedIn"></i></a>
		<a href="https://twitter.com/Krishna__Keshav" target="_blank"><i <i class="fa-brands fa-square-twitter" title="Twitter"></i></a>
		<a href="https://instagram.com/keshav_ch0udhary" target="_blank"><i <i class="fa-brands fa-square-instagram" title="Instagram"></i></a>
        
	</div>
	</ul>
	<a class="button-two" title="Phone" href="tel:+91 9304264670" data-rel="external"><i class="fa-duotone fa-phone"></i><span>+91</span> 9304264670</a>
	<a class="button-two" title="Mail" href="mailto:krishna2000chy@gmail.com"><i class="fa-solid fa-envelope"></i><span>krishna2000chy</span>@gmail.com</a>
</div>`

}

const stack = () => {

	return `<div class="row" > <h2>Tech Stack</h2>
			
	            <div id="Stack"></div>
  
           </div>`;

}

const contributions = () => {

	return `<div class="row" >
				<h2>My Contribution</h2>

				<div class="calendar" id="Github">
					Loading the data just for you.
				</div>

				<div>
					<br/>
					<a  href="https://github.com/keshavch0udhary"><img alt="Krishna Keshav's Github Stats" src="https://github-readme-stats.vercel.app/api?username=keshavch0udhary&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" /></a>
					<a   href="https://github.com/keshavch0udhary"><img alt="Krishna Keshav's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=keshavch0udhary&langs_count=9&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" /></a>
					<a href="https://github.com/KeshavCh0udhary"><img alt="Krishna Keshav Activity Graph" src="https://github-readme-activity-graph.cyclic.app/graph?username=KeshavCh0udhary&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" /></a>

				</div>

				

			</div>`

}

const Stat = () => {
	return `<div class="row">
	<h2>Statistics</h2>
		<div class="counter">
			<!-- <h1 class="statistics"> STAT<span>ISTICS</span> </h1> -->
			<div class="box">
				<span>1200+</span>
				<h5>hours of coding</h5>
			</div>

			<div class="box">
				<span>500+</span>
				<h5>hours of DSA</h5>
			</div>

			<div class="box">
				<span>6</span>
				<h5>months of training</h5>
			</div>
	
			<div class="box">
				<span>3</span>
				<h5>projects completed</h5>
			</div>
	
			<div class="box">
				<span>6</span>
				<h5>months of training on interpersonal skills</h5>
			</div>
		</div>
</div>`
}

document.querySelector("#nav").innerHTML = Nav();

document.querySelector("#top").innerHTML = header();

document.querySelector("#About").innerHTML = about();

document.querySelector("#Skills").innerHTML = skills();

document.querySelector("#contact").innerHTML = contact();

document.querySelector(".footer").innerHTML = footer();

document.querySelector(".TechStack").innerHTML = stack();

document.querySelector(".work__boxes").innerHTML = Project();

document.querySelector(".contribution").innerHTML = contributions();

document.querySelector(".Statistics").innerHTML = Stat();

let sidemenu = document.getElementById("SideBar");

const openMenu = () => {
	sidemenu.style.right = "0";
}

const closeMenu = () => {
	sidemenu.style.right = "-200px";
}

const handleFirstTab = (e) => {
	if (e.key === 'Tab') {
		document.body.classList.add('user-is-tabbing');
		window.removeEventListener('keydown', handleFirstTab);
		window.addEventListener('mousedown', handleMouseDownOnce);
	}
};

const handleMouseDownOnce = () => {
	document.body.classList.remove('user-is-tabbing');

	window.removeEventListener('mousedown', handleMouseDownOnce);
	window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const back = document.querySelector('.back-to-top');
let isBack = false;

let alterStyles = (isBack) => {
	back.style.visibility = isBack ? 'visible' : 'hidden';
	back.style.opacity = isBack ? 1 : 0;
	back.style.transform = isBack ? 'scale(1)' : 'scale(0)';
};

window.addEventListener('scroll', () => {
	if (window.scrollY > 700) {
		isBack = true;
		alterStyles(isBack);
	} else {
		isBack = false;
		alterStyles(isBack);
	}

});


const root = document.documentElement;
const Elements = getComputedStyle(root).getPropertyValue("--Myslills-elements-displayed");
const MySkills = document.querySelector("ul.Thechical");

root.style.setProperty("--Myslills-elements", MySkills.children.length);

for (let i = 0; i < Elements; i++) {
	MySkills.appendChild(MySkills.children[i].cloneNode(true));
}

const Href = () => {
	let Src = [
		"./img/Java-PNG-Clipart.png",
		"./img/js-logo.png",
		"./img/spring.png",
		"./img/hibernate.png",
		"./img/mysql.png",
		"./img/dsa.webp",
		"./img/HTML5_Logo_512.png",
		"./img/css-3-logo-png-transparent.png",
		"./img/git.png",
	];
	return Src;
};

const TechStack = () => {
	let skills = ["Java", "Mysql", "Spring boot", "JavaScript", "DSA", "Hibernate", "HTML", "CSS", "Git",]
	return skills;
}
const len = TechStack();

const Src = Href();

let y = document.createElement("h3");
let x = document.getElementById("Stack");
for (let i = 0; i < len.length; i++) {
	x.innerHTML += `<h3 class="stack"><span><img class="icn"src=${Src[i]} alt=""></span></h3>`
}


window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".hero");
	const change = document.getElementById("change");

	if (window.pageYOffset > 100) {
		navbar.style.backgroundColor = "rgba(20, 20, 20,0.9)";
		navbar.style.color = "pink";
		change.style.color = "teal";
	} else if (window.pageYOffset == 0) {
		navbar.style.backgroundColor = "transparent";
		navbar.style.color = "white";
		change.style.color = "white";
	}

});

//resume downloadable buttons

document.getElementById("resume_button_1").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1X993G4KNPlVUhdNaDCBToXCt3_NUzH78/view?usp=sharing", "_blank");

})

document.getElementById("resume_button_2").addEventListener("click", () => {

	window.open("https://drive.google.com/file/d/1X993G4KNPlVUhdNaDCBToXCt3_NUzH78/view?usp=sharing", "_blank");

})

const counters = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: "btn" },];

let container = document.getElementsByClassName('form-group')[0];
let inputs = container.children;

for (let i = 0; i < inputs.length; i++) {
	let input = inputs.item(i);
	input.addEventListener('mouseenter', function (evt) {
		let id = evt.target.id;
		let counter = findElement(counters, id);
		if (counter) {
			document.getElementById(id).focus();
		}
	});
}

const findElement = (array, id) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i].id == id)
			return array[i];
	}
}

const scriptURL = "https://script.google.com/macros/s/AKfycbysPMFg84Mj5juI-RtURRWnCDLeRdWHBKMGUWogm_gh0WfMOO6HCELIBSJKKAzHf7Nt-A/exec"

const form = document.forms["Send_Message_To_Keshav"]

const msg = document.getElementById("message");

form.addEventListener("keypress", function (e) {
	if (e.keyCode === "Enter") {
		e.preventDefault();
		document.getElementById("btn").click();
	}
});

form.addEventListener("submit", e => {
	e.preventDefault()
	let buttoncolor = document.getElementById("btn");
	buttoncolor.innerText = "Sending....."
	msg.style.color = "pink";

	buttoncolor.style.backgroundColor = "lightblue";
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then(response => {
			msg.innerHTML = "Message sent Successfully!";
			buttoncolor.innerText = "Send message";
			setTimeout(() => {
				msg.innerHTML = "";
			}, 1000);

			form.reset();
			buttoncolor.style.backgroundColor = "transparent";
		})
		.catch(error => {

			msg.innerHTML = "Some Error Occurs Please try again"

			setTimeout(() => {
				msg.innerHTML = "";
			}, 1000);

			form.reset();
			buttoncolor.style.backgroundColor = "transparent";
		})
});

