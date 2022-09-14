const Nav = () => {
    return `<nav class="nav" role="navigation">
	<h3 class="logo">Portfo<span>lio</span></h3>
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
        <p>I am a full-stack web developer. I can make the website interactive with Css.
        </p>
			<a href="./img/KrishnaKeshavResume.pdf" download="Krishna Keshav Resume" title="Download Resume" class="btn">My Resume</a>
		</div>

		<div class="about__photo-container">
			<img class="about__photo" src="./img/main-img.jpg" alt="" />
		</div>
	</div>
</div>`

}

const skills = () => {

    return `<div class="row">
	<h2>My Skills</h2>

	<div class="project__logos">
		<div>
			<ul class="project__list">

				<li>Java</li>
				<li>JavaScript</li>
				<li>Data Structures & Algorithms</li>
				<li>Html</li>
				<li>Css</li>
				<li>Git</li>
				
			</ul>
		</div>

		<div>
			<img src="./img/Java-PNG-Clipart.png" class="project__logo" alt="" id="src_change"
				style="background-color: white; border-radius: 12px; width: 150px" />
		</div>

	</div>
</div>`

}

const contact = () => {

    return `<div class="row">
	<h2>Contect Me</h2>
	<div class="contact__info">
		<a href="mailto:krishna2000chy@gmail.com" class="btn">Mail</a>
		<a class="btn" href="tel:+91 9304264670" data-rel="external">Phone</a>
	</div> </div>`

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
</div>
<p><span>Thanks for visiting my Portfolio</span></p>`

}

document.querySelector("#nav").innerHTML = Nav();

document.querySelector("#top").innerHTML = header();

document.querySelector("#About").innerHTML = about();

document.querySelector("#Skills").innerHTML = skills();

document.querySelector("#contact").innerHTML = contact();

document.querySelector(".footer").innerHTML = footer();

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
    "./img/HTML5_Logo_512.png",
    "./img/css-3-logo-png-transparent.png",
    "./img/git.png",
];

let logo = 0;

const textId = setInterval(() => {
    document.getElementById("src_change").src = Src[logo];
    logo++;
    if (logo == Src.length) {
        logo = 0;
    }
}, 1500);