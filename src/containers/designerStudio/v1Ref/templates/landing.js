export const landingHtml = `<body>
<nav>
    <div class="logo"><img src="img/cube.png" alt=""></div>
    <ul class="navbar">
        <div class="close"></div>
        <a href="#">About</a>
        <a href="#">Our Work</a>
        <a href="#client">Clients</a>
        <a href="#">Contact</a>
        <a href="https://twitter.com/sa_sha26" target="_blank">Twitter</a>
    </ul>
    <div class="hamburger"></div>
</nav>
<div class="container">
    <section class="section-one">
        <div class="section-one__wrapper">
        <div class="section-one__header">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae inventore neque, eos esse deleniti non.</p>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus placeat accusantium unde doloribus. </p>
        </div>			
        </div>
    </section>

    <section class="section-two">
        <div class="section-two__wrapper">
        <div class="child heading">Service</div>	
        <div class="child">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto qui possimus tempore cum, in.</div>
        <div class="child"> eius suscipit veritatis illum alias quod eligendi voluptatibus. Adipisci aperiam quas distinctio sunt rem voluptate, laudantium.</div>
        </div>
    </section>

    <section class="section-three">
        <h1>Features and Ethics</h1>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus vitae ullam ducimus dolores at veniam, voluptate eum perspiciatis beatae harum perferendis debitis, omnis distinctio, sequi aut maiores ea laborum voluptates.</p>
        <div class="section-three__grid">
        <div class="child">
            <img src="img/light-bulb.png" alt="">
            <p>Great Ideas</p>
        </div>	
        <div class="child"><img src="img/bars.png" alt="">
            <p>Proven Result</p></div>
        <div class="child"> <img src="img/flash.png" alt="">
            <p>Fast, Reliable</p></div>
        </div>		
    </section>
    <section class="section-four" id="client">
        <h1 class="heading">Our Clients</h1>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ex voluptatem aliquam eaque sed, repellat minima consectetur temporibus recusandae minus </p>
        <div class="section-four__grid">
        <div class="child"><img src="http://logo.clearbit.com/forever21.com" alt=""></div>	
        <div class="child"><img src="http://logo.clearbit.com/apple.com" alt=""></div>
        <div class="child"> <img src="http://logo.clearbit.com/google.com" alt=""></div>
        <div class="child"><img src="http://logo.clearbit.com/hm.com" alt=""></div>	
        <div class="child"><img src="http://logo.clearbit.com/mailchimp.com" alt=""></div>
        <div class="child"> <img src="http://logo.clearbit.com/salesforce.com" alt=""></div>
        <div class="child"> <img src="http://logo.clearbit.com/producthunt.com" alt=""></div>
        <div class="child"> <img src="http://logo.clearbit.com/postmates.com" alt=""></div>
        <div class="child"> <img src="http://logo.clearbit.com/lyft.com" alt=""></div>
        </div>	
    </section>
</div>
<footer>
    <div class="footer-grid">
    <div class="child">
        <p>Address</p>
        <p>288 Polk St. San Francisco</p>
    </div>
    <div class="child">
        <p>outside@gmail.com</p>
        <p>+82471848179</p>
    </div>
    <div class="child">
        <ul>
            <a href="https://twitter.com/sa_sha26" target="_blank">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="https://github.com/sashatran" target="_blank">Github</a>
            <a href="">Dribbble</a>
    </ul></div>
    </div>
    <div class="copyright">
        <p>Template coded by Sasha Tran</p>
    </div>
</footer>
</body>`

export const landingStyle = `<style>
@import url("https://fonts.googleapis.com/css?family=Barlow:200,300,400,500");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700");
:root {
  --bg: white;
  --main: #F56476;
  --text: #333;
  --border: #AAA;
  --size: calc(100% / 3); }

body {
  position: relative;
  padding: 0;
  margin: 0;
  background-color: var(--bg);
  overflow-x: hidden; }

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; }
  nav .logo {
    margin: 0 15px;
    animation: bounce 2s ease infinite alternate; }
    nav .logo img {
      width: 40px; }
  nav .navbar {
    display: flex;
    position: relative;
    padding: 0 15px; }
    nav .navbar a {
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      color: var(--text);
      margin: 10px 15px;
      text-decoration: none;
      position: relative; }
      nav .navbar a:before {
        position: absolute;
        content: '';
        width: 0;
        background: var(--main);
        height: 2px;
        transition: 0.5s all ease;
        bottom: -4px; }
      nav .navbar a:hover:before {
        width: 100%;
        transition: 0.5s all ease; }
  nav .loaded {
    transform: translateX(0); }

@keyframes bounce {
  from {
    transform: translateY(0px); }
  to {
    transform: translateY(-5px); } }

.hamburger {
  width: 50px;
  height: 50px;
  position: relative;
  display: none;
  cursor: pointer; }
  .hamburger:before, .hamburger:after {
    position: absolute;
    content: '';
    width: 30px;
    height: 2px;
    background: var(--main);
    left: 0; }
  .hamburger:before {
    top: 20px; }
  .hamburger:after {
    top: 25px; }

.close {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: none; }
  .close:before, .close:after {
    position: absolute;
    content: '';
    width: 30px;
    height: 2px;
    background: white;
    left: 0; }
  .close:before {
    transform: rotate(-45deg);
    top: 25px; }
  .close:after {
    transform: rotate(45deg);
    top: 25px; }

section, footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; }

section {
  padding: 50px 0; }

.section-one {
  position: relative;
  align-items: flex-start;
  padding: 100px 0;
  padding-bottom: 70px; }
  .section-one__wrapper {
    display: flex;
    width: 70%;
    justify-content: center; }
  .section-one__header {
    width: 80%; }
    .section-one__header p:first-child {
      font-family: 'Roboto Condensed', sans-serif;
      color: var(--main);
      font-size: 50px;
      text-transform: uppercase; }

.section-two {
  flex-direction: row;
  justify-content: center;
  padding: 25px 0; }
  .section-two__wrapper {
    display: flex;
    justify-content: center;
    width: 90%; }
  .section-two .child {
    position: relative;
    width: var(--size);
    border-top: 1px solid var(--border);
    height: 150px;
    margin: 30px; }
  .section-two .heading {
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--main);
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300; }

.section-three, .section-four {
  justify-content: center; }
  .section-three h1, .section-four h1 {
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--main);
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 0; }
  .section-three p, .section-four p {
    max-width: 700px;
    text-align: center; }

.section-four {
  padding-bottom: 150px; }

.section-three__grid, .section-four__grid {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 50px 0; }
  .section-three__grid .child, .section-four__grid .child {
    position: relative;
    filter: grayscale(1) brightness(1.1);
    border: 0;
    width: 120px;
    height: 120px;
    flex-direction: column;
    justify-content: center;
    margin: 5px; }
    .section-three__grid .child img, .section-four__grid .child img {
      width: 70px; }

.section-three__grid {
  width: 90%; }
  .section-three__grid .child {
    height: 150px; }

.section-four__grid {
  max-width: 35%; }

.child {
  display: flex;
  align-items: center;
  color: var(--text);
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 300; }

hr {
  width: 20%;
  border-top: 1px solid var(--border); }

.desc {
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: var(--text); }

footer {
  width: 100%;
  background: var(--main);
  min-height: 150px;
  justify-content: center; }
  footer .footer-grid {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 50px 0;
    margin-bottom: 0; }
    footer .footer-grid .child {
      width: var(--size);
      font-size: 17px;
      border-bottom: 1px solid white;
      padding-bottom: 20px;
      margin: 0 30px;
      flex-direction: column;
      align-items: flex-start; }
      footer .footer-grid .child a, footer .footer-grid .child p {
        color: white; }
      footer .footer-grid .child ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 0; }
      footer .footer-grid .child a {
        width: 50%;
        margin: 5px 0;
        text-decoration: none; }

.copyright {
  display: flex;
  padding: 15px 50px;
  font-family: 'Barlow', sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: var(--text); }
  .copyright p {
    color: white; }

@media (max-width: 900px) {
  section {
    padding: 25px 0; }
  h1 {
    margin: 0;
    padding: 0; }
  nav .logo {
    margin: 0; }
  nav .navbar {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(-350px);
    top: 0px;
    left: 0px;
    transition: 0.8s all ease;
    background: var(--main);
    width: 100%;
    padding: 70px 0;
    margin: 0; }
    nav .navbar a {
      color: white; }
  nav .show {
    opacity: 1;
    transform: translateY(0px);
    transition: 0.8s all ease;
    z-index: 999; }
  nav .close {
    display: block; }
  .hamburger {
    display: block; }
  .section-one {
    align-items: center;
    padding: 0; }
    .section-one__header {
      width: 100%; }
      .section-one__header p {
        text-align: center; }
      .section-one__header p:first-child {
        font-size: 1.5em; }
  .section-two {
    flex-direction: column; }
    .section-two__wrapper {
      flex-direction: column;
      align-items: center; }
    .section-two .child {
      justify-content: center;
      text-align: center;
      height: auto;
      width: 80%;
      margin: 10px 0;
      border-top: none; }
  .section-three__grid, .section-four__grid {
    margin: 30px 0; }
  .section-three__grid {
    flex-direction: column; }
  .section-three, .section-four {
    padding: 25px 0; }
    .section-three p, .section-four p {
      width: 80%; }
  footer .footer-grid {
    flex-direction: column;
    width: 80%;
    margin-bottom: 0; }
    footer .footer-grid .child {
      margin: 0;
      width: 100%; } }
</style>
`
