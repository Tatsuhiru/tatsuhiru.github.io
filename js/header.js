const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" media="screen">	
	<link rel="stylesheet" type="text/css" href="css/magnific-popup.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/flexslider.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/responsive.css" media="screen">
	
    <header>
			<div class="logo-box">
				<a class="logo" href="index.html"><img alt="" src="images/logo.png"></a>
			</div>
			
			<a class="elemadded responsive-link" href="#">Menu</a>

			<div class="menu-box">
				<ul class="menu">
					<li><a class="active" href="index.html"><span>Home</span></a></li>
					<li><a href="about.html"><span>About</span></a></li>
					<li><a href="blog.html"><span>blog</span></a></li>
					<!--<li><a href="single-post.html"><span>Single Post</span></a></li>
					<li class="drop"><a href="#"><span>Go To Level 2</span></a>
						<ul class="drop-down">
							<li><a href="#"><span>Level 2</span></a></li>
							<li class="drop"><a href="#"><span>Go To Level 3</span></a>
								<ul class="drop-down">
									<li><a href="#"><span>Level 3</span></a></li>
									<li><a href="#"><span>Level 3</span></a></li>
								</ul>
							</li>
							<li><a href="#"><span>Level 2</span></a></li>
						</ul>
					</li>
					<li><a href="contact.html"><span>Contact</span></a></li>-->
				</ul>				
			</div>

			<div class="social-box">
				<ul class="social-icons">
					<li><a href="#" class="facebook" ><i class="fa fa-facebook"></i></a></li>
					<li><a href="#" class="twitter" ><i class="fa fa-twitter"></i></a></li>
					<!--<li><a href="#" class="google" ><i class="fa fa-google-plus"></i></a></li>
					<li><a href="#" class="linkedin" ><i class="fa fa-linkedin"></i></a></li>
					<li><a href="#" class="pinterest" ><i class="fa fa-pinterest"></i></a></li>-->
					<li><a href="#" class="youtube" ><i class="fa fa-youtube"></i></a></li>
					<li><a href="#" class="github" ><i class="fa fa-github"></i></a></li>
				</ul>
				<p class="copyright">&#169; 2022 Tatsuhiru, All Rights Reserved</p>
			</div>
		</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);