const Nav = () => {
	return `<nav class="nav" role="navigation">
	<h3 class="logo" id="change">Portfo<span>lio</span></h3>
	<ul class="nav__items" id="SideBar">
		<li class="nav__item">
			<a href="#top" class="nav__link">Home</a>
		</li>
		<li class="nav__item">
			<a href="#About" class="nav__link">About</a>
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
			<a href="./img/Krishna Keshav Resume.pdf" download="Krishna Keshav Resume" title="Download Resume" class="btn">My Resume</a>
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
`
}

const contact = () => {

	return `<div class="row" id="address">
	
	<div class="contact__info">
	    <h2>Contact Me</h2>
		<a href="mailto:krishna2000chy@gmail.com" class="btn">Mail</a>
		<a class="btn" href="tel:+91 9304264670" data-rel="external">Phone</a>
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
document.querySelector("#nav").innerHTML = Nav();

document.querySelector("#top").innerHTML = header();

document.querySelector("#About").innerHTML = about();

document.querySelector("#Skills").innerHTML = skills();

document.querySelector("#contact").innerHTML = contact();

document.querySelector(".footer").innerHTML = footer();

document.querySelector(".TechStack").innerHTML = stack();

document.querySelector(".work__boxes").innerHTML = Project();

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

const root = document.documentElement;
const Elements = getComputedStyle(root).getPropertyValue("--Myslills-elements-displayed");
const MySkills = document.querySelector("ul.Thechical");

root.style.setProperty("--Myslills-elements", MySkills.children.length);

for (let i = 0; i < Elements; i++) {
	MySkills.appendChild(MySkills.children[i].cloneNode(true));
}

const TechStack = () => {
	let skills = ["Java", "Mysql", "Spring boot", "JavaScript", "DSA", "Hibernate", "HTML", "CSS", "Git",]
	return skills;
}
const len = TechStack();
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

var frm = document.querySelector("#contact");
frm.addEventListener("submit", (e) => {
	e.preventDefault();
	let name = document.getElementById("name").value;
	let messege = document.getElementById("messege").value;
	var win = window.open(
		`https://wa.me/+919304264670?text=Hi%20I%27m%20${name},%20${messege}`,
		"_blank"
	);
});