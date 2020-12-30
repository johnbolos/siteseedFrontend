import { assetsUrl } from "../../../settings";

export const customCss = `
@media only screen and (max-width: 720px) {
    .blog-lst{
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    
    .f-tst{
    padding-bottom: 0px !important;
    padding: 10px;
}
    h1.footer-text{
        padding-top: 100px;
    }
    .spc-f1{
   font-size: 13px;
    }
  .testi-row {
    padding-right: 25px;
    padding-left: 25px;
    }
    .top-heading-services{
        width: 95%;
    }
    .box {
    width: 340px;
}
      h1.top-heading.T-1{
            width: 100% !important;
        }
    .bottom-txt {
    display: block !important;
}
    p.B-name {
    margin-top: 12px;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #200960;
}
    p.G-postion {
    padding-top: 2px;
    }
    .social-spn-2 {
    padding-left: 55px;
    padding-right: 0px;
}
    .social-spn {
    padding-left: 55px;
}
    span#hom-1 {
    z-index: 999;
    border: 2px solid #fff;
    width: 50px;
    border-radius: 50px;
    background-color: #D58F76;
    padding: 10px;
    height: 50px;
}
    span#hom-1:hover {
    z-index: 999;
    border: 2px solid #fff;
    width: 50px;
    border-radius: 50px;
    background-color: #200960;
    padding: 10px;
    height: 50px;
}
    span#hom {
    z-index: 999;
    border: 2px solid #fff;
    width: 50px;
    border-radius: 50px;
    background-color: #D58F76;
    padding: 10px;
    height: 50px;
}
    span#hom:hover {
    z-index: 999;
    border: 2px solid #fff;
    width: 50px;
    border-radius: 50px;
    background-color: #200960;
    padding: 10px;
    height: 50px;
}
    img.popup.image_on {
    display: block;
    width: 14px;
}
    .popup {
    margin-left: 8px;
    margin-top: 5px;
}

    .top-text {
    left: 25px !important;
    position: absolute;
    top: 150px !important;
}
    .footer-inner {
    padding-top: 50px;
    padding-left: 35px;
}
    h2.D-text{
        margin-bottom: 12px;
    }
    p.copyright-txt {
    margin-top: 0px;
    }
    .main-1 {
    margin-top: 50px;
}
    h1.footer-text {
    width: 350px;
    }
    .top-heading {
    padding-bottom: 12px;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #200960;
}
    .web-img{
    display: none !important;
}
 .mobi-img {
    height: 1000px;
    display: block !important;
}
    .weour-section {
    padding-left: 25px;
    margin-top: 50px;
    padding-right: 25px;
}
    
    .row.top-banner {
    padding-left: 0px;
    padding-right: 0px;
}
  .features {
    flex-direction: column;
    padding: 50px;
  }
    .Testimonial-section{
        margin-top: 50px;
    }
    .parallax-section{
        margin-top: 50px;
    }
  .nav-wrapper {
    padding-left: 25px; 
    padding-right: 25px; 
    width: 100%;
    top: 40px;
    background-color: #fff;
}
  .navbar ul {
    height:115vh;  
    left: 0px;
    z-index: 99999;  
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: start;
    top: 83px;
    background-color: #f6f3ee;
    width: 100%;
    transform: translate(-101%);
    text-align: center;
    overflow: hidden;
  }
  
  .navbar li {
    padding-bottom: 50px !important;
  }
  
  .navbar li:first-child {
    margin-top: 50px;
  }
  
  .navbar li a {
    font-size: 36px;
  }
   
  .menu-toggle, .bar {
    display: block;
    cursor: pointer;
  }
  
  .mobile-nav {
  transform: translate(0%)!important;
}
.ipad.mobi-v {
display: none;
}
  .gallery {
    padding-right: 25px;
    padding-left: 25px;
}
    .main {
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    height: 250px;
    width: 325px;
    overflow: hidden;
    background: #ccc;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 18px;
}
  .G-detail {
    left: 61px;
    position: absolute;
    bottom: 94px;
    z-index: 1;
}
    p.G-name{
        font-size: 22px;
    }
    .thumb {
    border-radius: 5px;
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
    }
    .overlay-1 span {
    margin-top: 120px;
    top: 0%;    
    }
    
    .thumb:hover:after {
    margin-left: -25px;}
    
    
    
    #section-four {
    margin-top: 50px;
    padding-left: 25px;
}
    .p-spc {
    width: 90%;
}
    .blog-cntx{
        width: 100%;
    }
    .swiper-slide {
    flex-shrink: 0;
    width: 80% !important;
    }
    .vedio-section {
    padding-left: 25px;
    margin-top: 50px;
    padding-right: 25px;
}
    .top-text-1 {
    position: relative;
    top: 50px;
}
    .V-text {
    padding-left: 30px;
    padding-right: 30px;
}
    .img-vedio{
        border-radius: 10px;
    background-image: url(${assetsUrl}/templates/therapists/images/2x/vedio-mobil-img.jpg);
    min-height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    }
    
    .Team-section {
    position: relative;
    padding-right: 25px;
    margin-top: 50px;
    padding-left: 25px;
}
    .Team-right{
        margin-top: 50px;
    }
    .F-1 {margin-top: 0px;text-align: center;}
    .F-2 {margin-top: 10px;text-align: center;}
    .F-3 {margin-top: 10px;text-align: center;}
    .F-4 {margin-top:10px;text-align: center;}
    .img-text {
    text-align: left;
}
    .client-img{
        height: 80px;
        width: 80px;
    }
    .Blog-section {
    margin-top: 50px;
    padding-left: 25px;
}
    p.testi-content{
        padding-left: 15px;
        padding-right: 15px;
        width: 89%;
    }
    .L-img{
        top: 130px;
        left: 14px;
        max-width: 60px;
        z-index: -1;
    }
    .overlay span{
        top: 55%;
    }
   .R-img{
        right: 43px;
        top: 462px;
        max-width: 60px;
        z-index: -1;
    } 
    .footer-outer{
        margin-top: 50px;
    }
    .bottom-footer {
    padding-left: 0px;
    margin-top: 20px;
}
    p.copyright-txt{
        margin-bottom: 50px;
        padding-left: 35px;
    }
    
    .Con-sec{
        margin-top: 20px;
    }
    p.D-para {
    width: 58%;
}
    .navbar {
    grid-template-columns: 1fr 3fr;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
    overflow: hidden;
}
    .menu-toggle .bar{
        background-color: #00214D;
    }
    .social-spc{
        width: 100%;
    }
    .vedio-main{
        padding-left: 15px;
        padding-right: 15px;
    }
   .team-spc {
    width: 100%;
}
    h1.top-heading.spc-2 {
    width: 82%;
}
    .pic.text-center{
        margin-bottom: 50px;
    }
  .bottom-txt {
    right: 10px !important;
    position: absolute;
    bottom: -220px !important;
    padding-bottom: 50px;
}
    .thumb{
        margin-right: 15px;
    }
    
.scroll-txt{
margin-left: 15px;    
font-family: 'Barlow', sans-serif; 
font-style: normal;
font-weight: bold;
font-size: 11px;
letter-spacing: 0.16em;
color: #D6AFA4;
    }
    .menu-toggle{
        margin-right: 0px;
    }
    .shape-1 {
    display: none;}

   .shape-2 {
    display: none;}

   .shape-3 {
    display: none;}
    .spc-f {
    padding-right: 5px;
    border-right: 1px solid #ddd;
}
    .spc-f1 {
    padding-left: 5px;
}
}


/*420 resolution*/
@media only screen and (max-width: 430px) and (min-width: 400px){
  .mobi-img {
    display: block !important;
}
    
    .G-detail {
    left: 85px !important;
    }
    h1.footer-text {
    width: 350px !important;
}
    .R-img{
      right: 14px !important;
      top: 434px !important;    
    }
    .bottom-txt {
    right: 28px !important;
    position: absolute;
    bottom: -64% !important;
}
}

/*540 resolution*/
@media only screen and (max-width: 550px) and (min-width: 500px){
 .main {
    width: 525px !important;   
    }
    .img-vedio {
        min-height: 500px !important;
    }
}



/*320 resolution*/
@media only screen and (max-width: 330px) and (min-width: 300px){
  .scroll-txt {
    margin-left: 8px !important;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 8px !important;
    letter-spacing: 0.16em;
    color: #D6AFA4;
}
    .bottom-txt {
    right: 3px !important;
    }
    .R-img{
      right: -3px !important;
      top: 606px !important;    
    }
}


/*1366 resolution*/
@media only screen and (max-width: 1380px) and (min-width: 1300px){
    .L-img{
    left: 3px;
    top: 115px;} 
        
.R-img{
    top: 246px;
    left: -196px;}
}

  /*1600 resolution*/
@media only screen and (max-width: 1650px) and (min-width: 1600px){ 
    img.allabout-image-22 {
    position: absolute;
    left: 14%;
    top: 71%;
}
  .main {
    height: 740px !important;
}
      .shape-1{
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 116%;
}

.shape-2 {
    z-index: -1;
    left: -127px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: 0px;
}
.shape-3 {
    position: absolute;
}
    .bottom-shp{
    right: -60%;
    position: relative;
    top: -299px;  
    }
    .allabout-image-1 {
    margin-top: -30px;
}
}

 /*1440 resolution*/
@media only screen and (max-width: 1450px) and (min-width: 1400px){  
  .team-spc {
    width: 100%;
}
    .L-img{
        left: 33px;
        top: 116px;
    }
    .R-img{
        right: 197px;
        top: 247px;
    }
      .shape-1{
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 116%;
}

.shape-2 {
    z-index: -1;
    left: -127px;
    position: absolute;
}

    .allabout-image-1{
      margin-top: -30px;  
    }
    
    .allabout-image{
    z-index: -1;
    margin-top: 84px;
}
.shape-3 {
    position: absolute;
}
    .bottom-shp{
    right: -48%;
    position: relative;
    top: -351px;  
    }
}
    
    
/*1280 resolution*/
@media only screen and (max-width: 1290px) and (min-width: 1200px){  
  .top-text {
    left: 133px;
    position: absolute;
    top: 296px !important;
}
    .F-1 {padding: 10px;}
    .F-2 {padding: 10px;}
    .F-3 {padding: 10px;}
    .F-4 {padding: 10px;}
    
      .shape-1{
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 131%;
}

.shape-2 {
    z-index: -1;
    left: -135px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: 20px;
}
.shape-3 {
    position: absolute;
}
    .bottom-shp{
    right: -48%;
    position: relative;
    top: -299px;  
    }
    .allabout-image-1{
      margin-top: -30px;  
    }
} 

    
/*1536 resolution*/
@media only screen and (max-width: 1540px) and (min-width: 1500px){  
    .L-img{
        top: 92px;
        left: 30px;
    } 
    .R-img{
        right: 202px;
    }
    .team-spc {
    width: 100% !important;
}
    .shape-1 {
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 160%;
}

.shape-2 {
    z-index: -1;
    left: -138px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: -30px;
}
.shape-3 {
    position: absolute;
}
    .bottom-shp {
    right: -57%;
    position: relative;
    top: -326px;
}
    .allabout-image-1 {
    margin-top: -30px;
}
}


/*768 resolution*/
@media only screen and (max-width: 820px) and (min-width: 760px){
    .social-spc {
    width: 345px !important;
    padding-top: 30px;
}
    .social-spn {
    padding-left: 50px !important;
}
    .social-spn-1 {
    padding-left: 50px !important;
}
    .social-spn-2 {
    padding-left: 50px !important;
    padding-right: 50px !important;
}
    .blog-cntx {
    width: 95% !important;
}
    p.B-name{
        font-weight: 600;
    }
    .overlay-1 span {
     top: 40% !important;
    }
    .top-subhead{
        padding-bottom: 0px !important;
    }
    p.Therapy-name{
        font-weight: 600 !important;
    }
    .swiper-slide{
    width: 300px !important;
}
    .p-spc {
    width: 100%;
}
    .team-spc {
    width: 100%;
}
    .web-img{
        display: none !important;
    }
    .menu-toggle .bar {
    background-color: #00214D;
}
    .topipad-img{
    width: 786px;    
    display: block !important;
}
    .img-vedio {
    padding: 0px;
    border-radius: 20px;
    background-image: url(${assetsUrl}/templates/therapists/images/2x/vedio-ipad.jpg);
    min-height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
    .F-1{padding: 10px !important;}
    .F-2{padding: 10px !important;}
    .F-3{padding: 10px !important;}
    .F-4{padding: 10px !important;}
  .nav-wrapper {
    padding-left: 50px; 
    padding-right: 50px; 
    width: 100%;
    top: 40px;
    background-color: #fff;
}
  .navbar ul {
    height: 100%;  
    left: 0px;
    z-index: 9999;  
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: start;
    top: 83px;
    background-color: #fff;
    width: 100%;
    transform: translate(-101%);
    text-align: center;
    overflow: hidden;
  }
  
  .navbar li {
    padding-bottom: 50px;
  }
  
  .navbar li:first-child {
    margin-top: 50px;
  }
  
  .navbar li a {
    font-size: 36px;
  }
   
  .menu-toggle, .bar {
    display: block;
    cursor: pointer;
  }
  
  .mobile-nav {
  transform: translate(0%)!important;
}
.ipad.mobi-v {
display: none;
}
    .row.top-banner {
    padding-left: 0px;
    padding-right: 0px;
}
    .top-text {
    left: 50px;
    position: absolute;
    top: 250px;
}
    .top-heading {
    padding-bottom: 12px;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #200960;
}
    .head-para {
    width: 50%;
    }
    .gallery {
    padding-right: 50px;
    padding-left: 50px;
}
    .G-detail {
    left: 100px !important;
    }
    .main {
     height: 450px;
    }
    #section-four {
    margin-top: 50px;
    padding-left:50px;
}
    .vedio-section {
    padding-left: 50px;
    margin-top: 50px;
    padding-right: 50px;
}
    .Team-section {
    position: relative;
    padding-right: 50px;
    margin-top: 50px;
    padding-left: 50px;
}
    .Blog-section {
    margin-top: 50px;
    padding-left: 50px;
}
    p.B-name {
    margin-top: 0px;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #200960;
}
    p.testi-content{
        width: auto;
    }
    .R-img {
    position: absolute;
    right: 21px;
    top: 246px;
}
    .L-img{
        z-index: -1;
        max-width: 50px;
        top: 107px;
        left: 3px;
    }
    .R-img{
     max-width: 50px;    
     z-index: -1;
     right: 62px;
     top: 260px;    
    }
    .footer-inner {
    padding-top: 50px;
    padding-left: 50px;
}
    .bottom-footer {
    padding-left: 50px;
    margin-top: 50px;
}
   h1.footer-text {
    width: 400px;
}
    .thumb {
        margin-right: 15px;
    }
      .shape-1{
     display: none;      
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 139%;
}

.shape-2 {
    display: none;
    z-index: -1;
    left: -127px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: -30px;
}
.shape-3 {
     display: none;
    position: absolute;
}
    .bottom-shp{
    right: -48%;
    position: relative;
    top: -299px;  
    }
}

/*1024 resolution*/
@media only screen and (max-width: 1030px) and (min-width: 1000px){
  .nav-wrapper {
    padding-left: 100px;
    padding-right: 100px;
    }
    li.nav-item {
    padding-left: 0px;
    padding-right: 10px;
}
  .top-text {
    left: 100px;
    position: absolute;
    top: 235px;
}
    .top-heading {
    padding-bottom: 12px;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 40px;
    color: #200960;
}
 .gallery {
    padding-right: 100px;
    padding-left: 100px;
}
  .G-detail {
    left: 160px;
    }
    .R-img{
        top: 240px !important;
    }
    .img-vedio{
        height: 650px !important
    }
    .team-spc {
    width: 95% !important;
}
    .L-img{
        top: 130px !important;
    }
    #section-four {
    margin-top: 100px;
    padding-left: 100px;
}
    .vedio-section {
    padding-left: 100px;
    margin-top: 100px;
    padding-right: 100px;
}
  .Team-section {
    padding-right: 50px;
    margin-top: 100px;
    padding-left: 100px;
}  
    .Blog-section {
    margin-top: 100px;
    padding-left: 100px;
}
    .footer-inner {
    padding-top: 100px;
    padding-left: 100px;
}
    .bottom-footer {
    padding-left: 100px;
    margin-top: 100px;
}
    h1.footer-text {
    width: 360px;
    }
    button.Book-now-button{
        font-size: 15px;
    }
    .nav-item a{
        font-size: 15px;
    }
    .row.top-banner {
    padding-left: 0px;
    padding-right: 0px;
}
    .L-img{
        max-width: 50px;
        top: 103px;
        left: 6px;
        z-index: -1;
    } 
    
    .R-img{
      max-width: 50px;
      z-index: -1;
      right: 160px;    
    }
      .shape-1{
     display: none;      
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 122%;
}

.shape-2 {
     display: none;
    z-index: -1;
    left: -127px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: -30px;
}
.shape-3 {
     display: none;
    position: absolute;
}
    .bottom-shp{
    right: -48%;
    position: relative;
    top: -299px;  
    }
    
.F-1 {padding: 10px;}
.F-2 {padding: 10px;}
.F-3 {padding: 10px;}
.F-4 {padding: 10px;}    
}


   /*screen 1920*/
    @media only screen and (max-width: 1930px) and (min-width: 1900px){
        .box {
    width: auto !important;
}
        .big-img{
    display: block !important;
}
        img.allabout-image-22 {
    position: absolute;
    left: 14%;
    top: 92%;
}
  .web-img{display: none !important;}
        
    .main {
    border-radius: 20px;
    position: relative;
    height: 850px !important;
    }
      
    .G-detail {
    left: 260px !important;
    position: absolute;
    bottom: 169px;
    z-index: 1;
}
    h1.top-heading.V-text {
    width: 60%;
    margin: 0 auto;
}
 .img-vedio {
    border-radius: 20px;
    background-image: url(${assetsUrl}/templates/therapists/images/2x/Hero%20Banner_02.jpg);
    min-height: 900px !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
} 
    .top-text-1 {
    position: relative;
    top: 100px !important;
}
   .spc-2 {
    width: 60%;
}
  .spc-1 {
    width: 60% !important;
}
   .shape-1{
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 100%;
}

.shape-2 {
    z-index: -1;
    left: -127px;
    position: absolute;
}
.allabout-image {
    z-index: -1;
    margin-top: 550px;
}
.shape-3 {
    position: absolute;
}  
   .bottom-shp {
    right: -84%;
    position: relative;
    top: -335px;
}
.L-img{
    left: 31px;
    top: 113px;} 
        
.R-img{top: 246px;
    left: 643px;}
}

/*End 1920*/

.spc-f1{
    font-size: 13px;
}
.mfp-iframe-holder .mfp-close {
    font-family: 'Barlow', sans-serif;
   }
    .mfp-iframe-scaler iframe {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 8px rgb(0 0 0 / 0%);
    }
  .mfp-container {
    text-align: center;
    position: fixed;
    }
    .mfp-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    background-color: rgba(21, 20, 26, 0.8);
}
	
	
`

export const baseCss = `
html{
    scroll-behavior: smooth;
}

a:hover {
    color: #999999;
    text-decoration: none;
}
.Hover-E:hover {
    height: 50px;
    padding: 5px;
    background-color: #f4f4f461;
    border-radius: 50px;
    width: 50px;
}

.book-btn{
 color: #200960;
 text-decoration: none;
}
.book-btn:hover{
 color: #fff;
 text-decoration: none;
}

button:focus {
    outline: 1px dotted;
    outline: 1px solid transparent;
}
.container-fluid{overflow: hidden;}  
p {
    margin-top: 0;
    margin-bottom: 0px;
}
h1{
    margin-bottom: 0px;
}
/*navbar*/
li.nav-item {
 padding-left: 0px;
 padding-right: 30px;    
}


button.Book-now-button {
    background-color: transparent;
    font-family: 'Barlow', sans-serif;
    color: #200960;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: 1px solid #200960;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 17px;
}


/*Thumbnail css*/

.gallery .inner {
	position: relative;
	overflow: hidden;
	display: block;
	width: auto;
	max-width: 100%;
}
.gallery img {
	display: none;
}
.gallery {
    padding-right: 192px;
    padding-left: 192px;
}
.main {
    border-radius: 20px;
    margin: 0 auto;
	position: relative;
	height:650px;
    width: auto;
	overflow: hidden;
	background: #ccc;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	overflow: hidden;
	margin-bottom: 30px;
}
.main:before {
content: "";
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 100px;
}
.main-selected {
	animation: crossfade 0.5s ease;
	-webkit-animation: crossfade 0.5s ease;
	-moz-animation: crossfade 0.5s ease;
}
@keyframes crossfade {
	0% { opacity: 0.7; }
	100% { opacity: 1; }
}

@-webkit-keyframes crossfade {
	0% { opacity: 0.7; }
	100% { opacity: 1; }
}

@-moz-keyframes crossfade {
	0% { opacity: 0.7; }
	100% { opacity: 1; }
}
.main span {
    display: none;
	position: absolute;
	text-align: center;
	font-size: 16px;
	font-family: sans-serif;
	color: #fff;
	bottom: 10px;
	left: 0;
	right: 0;
}
.thumb-roll {
text-align: center;
position: relative;
width: auto;
overflow-x: auto;
overflow-y: hidden;	
white-space: nowrap;
}
.thumb {
    border-radius: 10px;
	display: inline-block;
	position: relative;
	width: 100px;
	height: 100px;
	margin-right: 30px;
	background: #ccc;
	overflow: hidden;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	overflow: hidden;
	cursor: pointer;
}
.thumb:last-of-type {
	margin-right: 0px;
}
.thumb:before{
    background: rgba(255,255,255,0.4);
}
.thumb:after {
    margin-left: -50px;
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	}

.thumb:hover:after {
    border-radius: 10px;
    margin-left: -50px;
	border: 2px solid #d58f76;
}
.Gallery-section{
    margin-top: 50px;
    position: relative;
}
.testi-space {
    width: 312px;
    margin: 0 auto;
}

/*TOP-BANNER*/
.top-text {
    left: 133px;
    position: absolute;
    top: 396px;
}
.bg-img{
position: relative;}

.top-text-1 {
    position: relative;
    top: 100px;
}
.row.top-banner {
    padding-left: 60px;
    padding-right: 60px;
}
.top-subhead {
    font-weight: 400;
    font-family: 'Barlow', sans-serif;
    font-size: 22px;
    color: #D58F76;
    padding-bottom: 10px;
}
.top-heading {
    padding-bottom: 12px;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 52px;
    color: #200960;
}

p.top-paragraph {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #999999;
    }

.btn-spc{
    margin-top: 50px;
}

/*second sec*/
.weour-section{
    margin-top: 100px;
}


/*Services section*/
#section-four{
    margin-top: 114px;
    padding-left: 192px;
}
.swiper-container{
    margin-top: 50px;
}
.p-spc{
    width: 63%;
}
p.Therapy-name{
margin-top: 22px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 22px;
color: #200960;   
}

/*Vedio section*/
.G-detail {
    left: 251px;
    position: absolute;
    bottom: 169px;
    z-index: 1;
}
p.G-name{
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 32px;
color: #200960
}

p.G-postion{
padding-top: 6px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #999999;
}
.vedio-section{
    padding-left: 120px;
    margin-top: 150px;
    padding-right: 120px;
}
.img-vedio {
    padding: 0px;
    border-radius: 20px;
    background-image: url(${assetsUrl}/templates/therapists/images/2x/Hero%20Banner_02.jpg);
    min-height: 750px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.popup{
    margin-left: 5px;
}
.overlay span {
    z-index: 999;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
}
span#hom{
    z-index: 999;
    border: 2px solid #fff;
    width: 80px;
    border-radius: 50px;
    background-color: #D58F76;
    padding: 25px;
    height: 80px;
}

span#hom:hover{
    z-index: 999;
    border: 2px solid #fff;
    width: 80px;
    border-radius: 50px;
    background-color: #200960;
    padding: 25px;
    height: 80px;
}

.overlay-1 span {
    z-index: 999;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
}
span#hom-1{
    z-index: 999;
    border: 2px solid #fff;
    width: 80px;
    border-radius: 50px;
    background-color: #D58F76;
    padding: 25px;
    height: 80px;
}

span#hom-1:hover{
    z-index: 999;
    border: 2px solid #fff;
    width: 80px;
    border-radius: 50px;
    background-color: #200960;
    padding: 25px;
    height: 80px;
}
img.popup.image_on {
    display: block;
}

/*Help-care-section*/
.Team-section {
    position: relative;
    padding-right: 212px;
    margin-top: 150px;
    padding-left: 193px;
}
.team-spc{
    width: 77%;
}
h5.Team-name{
margin-top: 13px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 22px;
color: #D58F76;
}

p.Team-P{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
color: #999999;
opacity: 0.7;
}
.F-1{
    padding: 0px;
    }

.F-2 {
    padding: 0px;
    margin-top: 100px;
}
.F-3 {
    padding: 0px;
    margin-top: -70px;
}
.F-4 {
    padding: 0px;
    margin-top: 30px;
}

/*Blog-section*/
.Blog-section{
    margin-top: 100px;
    padding-left: 193px;
}

.spc-1{
    width: 80%;
}
p.B-date{
margin-top: 22px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #D58F76;
}
p.B-name{
margin-top: 12px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 28px;
color: #200960;
}
p.B-para{
margin-top: 6px;       
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
color: #999999
}
.swiper-1{
    width: 500px !important;
}
.blog-cntx {
    width: 70%;
}

/*Testimonial-section*/
.L-img{
    position: absolute;
    left: 6px;
    top: 92px;
}
.R-img {
    position: absolute;
    right: 182px;
    top: 222px;
}
.Testimonial-section{
    margin-top: 150px;
}
.parallax-section{
    margin-top: 81px;
}

.client-img{
  height: 112px;
  width: 112px;    
}
p.testi-content {
    width: 775px;
    margin-bottom: 50px;
    margin-top: 22px;
    color: #200960;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    margin: 0 auto;
}

p.client-name{
margin-top: 50px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 22px;
color: #D58F76  
}

p.client-position{
margin-top: 4px;    
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
color: #999999;
opacity: 0.7;
}

button.Book-now-button:hover{
    background-color: #200960;
    color: #fff;
}

/*Footer-section*/
.footer-outer{
    background-color: #F6F3EE;
    margin-top: 150px;
}
.footer-inner{
    padding-top: 150px; 
    padding-left: 193px;
}
h1.footer-text{
width: 500px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 22px;
color: #200960;  
}
.cntx-sec{
    margin-top: 50px;
}
h2.D-text{
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #D58F76;
}
.spc-f{
    font-size: 13px !important;
}
.D-para{
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
color: #999999;
opacity: 0.7;
}
.main-1{
  margin-top: 42px;  
}
.bottom-footer{
    padding-left: 193px;
    margin-top: 164px;
}

.spc-f{padding-right: 5px;border-right: 1px solid #ddd;}
.spc-f1{padding-left: 5px;}

.social-spc{
    width: 409px;
    padding-top: 30px;
}
.social-spn{
    padding-left: 75px;
}

.social-spn-1{
    padding-left: 55px;
}

.social-spn-2{
    padding-left: 55px;
    padding-right: 75px;
}
p.copyright-txt{
margin-top: 30px;    
font-family: 'Barlow', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 13px;
color: #999999;  
}

/*NAVBAR DESIGN*/
.nav-wrapper {
  padding-left: 120px;
  padding-right: 120px;    
  width: 100%;
  top: 40px;
  background-color: #fff;
}

.navbar {
  grid-template-columns: 1fr 3fr;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 41px;    
  overflow: hidden;
}

.navbar img {
   width: auto;
  justify-self: start;
  }

.navbar ul {
  list-style: none;
  grid-template-columns: repeat(6,1fr);
  justify-self: center;
  
}

.nav-item a {
  font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color:  #999999;
    text-decoration: none;
   transition: color 0.3s ease-out;
}
.nav-item a:hover{
  font-weight: 600;    
  padding-bottom: 10px;    
  color: #200960;
  border-bottom: 1px solid #D58F76;    
}

.nav-item a:active{
  padding-bottom: 10px;    
  color: #200960;
  border-bottom: 1px solid #D58F76;    
}
.search {
  transform: translate(-35%);
  -webkit-transform: translate(-35%);
  transition: transform 0.7s ease-in-out;
  color: #3498db;
}

.no-search {
  transform: translate(0);
  transition: transform 0.7s ease-in-out;
}

/* MOBILE MENU & ANIMATION */

.menu-toggle .bar{
  width: 25px;
  height: 3px;
  background-color: #3f3f3f;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.menu-toggle {
  justify-self: end;
  margin-right: 25px;
  display: none;
}

.menu-toggle:hover{
  cursor: pointer;
}

#mobile-menu.is-active .bar:nth-child(2){
  opacity: 0;
}

#mobile-menu.is-active .bar:nth-child(1){
  -webkit-transform: translateY(8px) rotate(45deg);
  -ms-transform: translateY(8px) rotate(45deg);
  -o-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
}

#mobile-menu.is-active .bar:nth-child(3){
  -webkit-transform: translateY(-8px) rotate(-45deg);
  -ms-transform: translateY(-8px) rotate(-45deg);
  -o-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
}
.web-img{
    display: block;
}
.mobi-img{
  display: none;
}

.box{
    width: 280px;
}
.big-img{
    display: none;
}
.bottom-txt{
    display: none;
}

.topipad-img{
    display: none;
}

.pic.text-center{
    margin-bottom: 22px;
}
.f-tst{
    padding: 0px;
}
.footer-image{
    height: 36px;
    width: 175px;
}
.allabout-image-11{
    left: 77%;
    position: absolute;
    top: 9%;
}
img.allabout-image-22 {
    position: absolute;
    left: 20%;
    top: 80%;
}
/*Mobile view*/


li.nav-item {
    padding: 0px 15px;
} 
    .top-text {
    left: 133px;
    position: absolute;
    top: 330px;
}
      .shape-1{
    z-index: 999;
    right: 0px;
    position: absolute;
    top: 125%;
}

.shape-2 {
    z-index: -1;
    left: -140px;
    position: absolute;
}
.allabout-image{
    z-index: -1;
    margin-top: -23px;
}
.shape-3 {
    position: absolute;
}
    .bottom-shp{
    right: -48%;
    position: relative;
    top: -299px;  
    }
    .allabout-image-1 {
    margin-top: -30px;
}
    .F-1 {padding: 10px;}
    .F-2 {padding: 10px;}
    .F-3 {padding: 10px;}
    .F-4 {padding: 10px;}


  `
export const style = `
  <style>
    ${`@media {background: red;}` + baseCss}
  </style>
  `

export const html = `
<!-- Navigation -->
<div class="nav-wrapper">
<nav class="navbar p-0">
  <img src="${assetsUrl}/templates/therapists/SVG/Logo.svg" alt="Company Logo">
  <div class="menu-toggle" id="mobile-menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
  <ul class="nav no-search">
    <li class="nav-item"><a href="#section-one" >Home</a></li>
    <li class="nav-item"><a href="#section-two">About us</a></li>
    <li class="nav-item"><a href="#section-four">Services</a></li>
    <li class="nav-item"><a href="#section-six">Doctors</a></li>
    <li class="nav-item"><a href="#section-seven">Blog</a></li>
    <li class="nav-item"><a href="#section-eight">Testimonial</a></li>
    <li class="nav-item"><a href="#section-nine">Contact us</a></li>
  </ul>
   <div class="ipad mobi-v">
  <div class="header-module">
      <a class="book-btn"href="#"><button class="Book-now-button">Book Appointment</button></a>
  </div></div>
</nav>
    
</div>

<!---banner-image--->
<div class="container-fluid p-0">
<section id="section-one">      
<div class="row top-banner ">
<img class="img-fluid bg-img web-img" alt="#" src="${assetsUrl}/templates/therapists/images/2x/Hero_Banner.jpg">
<img class="img-fluid bg-img big-img" alt="#"src="${assetsUrl}/templates/therapists/images/2x//banner-1920.jpg">       
<img class="img-fluid bg-img mobi-img" alt="#"src="${assetsUrl}/templates/therapists/images/2x/mobile-image.png">
<img class="img-fluid bg-img topipad-img" alt="#"src="${assetsUrl}/templates/therapists/images/2x/banner-ipad.jpg">      
  <div class="top-text">
          <div data-aos="fade-right" class="col-lg-12 col-md-12 mb-12 Web-space p-0">
              <p class="top-subhead">Get your lifestyle back</p>
              <h1 class="top-heading">Best chiropractors <br><b>and physical therapists</b></h1>      
              <div class="col-lg-6 col-mb-6 mb-12 p-0">
              <p class="top-paragraph head-para ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat. Nam tempus, augue in dapibus scelerisque, enim dui.</p></div>
              <div class="col-lg-6 col-mb-6 mb-12 p-0">
              <a class="book-btn"href="#"><button class="Book-now-button btn-spc">Book Appointment</button></a>
              </div>    
          </div>
      </div> 
    <div class="bottom-txt">
   <span><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/line.png"></span>      
    <span class="scroll-txt">SCROLL FOR MORE</span>
    </div>
</div>    
</section>
    
    
 <!---Welcome section-->
 <div class="shape-1">
  <img class="allabout-image" alt="#"src="${assetsUrl}/templates/therapists/SVG/Vector%202.svg"><img class="allabout-image-22" alt="#"src="${assetsUrl}/templates/therapists/SVG/Vector%203.svg">
  </div>
  <section id="section-two" class="weour-section">   
  <div class="row text-center">
   <div data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1000"class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 mb-12">
   <p class="top-subhead">Who we are</p>     
   <h1 class="top-heading">Welcome to <b>Physio Therapy<br>
    & Chiroparctor Clinic</b></h1>
       
    <p class="top-paragraph Spc-sec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat hendrerit feugiat. Phasellus eget lorem vitae dolor varius vehicula vitae vel dolor. Sed a risus ac urna lobortis molestie. Nulla vel ullamcorper enim, suscipit ultrices dolor. Cras aliquam efficitur orci. Etiam eleifend diam sed lectus accumsan tempus. Interdum et malesuada.</p>     
   </div>
  </div>
  </section>    
      
      
  <section id="section-three">  
  <div class="row Gallery-section">
  <div class="col-lg-12 col-md-12 mb">
  <div class="gallery">
<img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/13015.png" />
      <a class="popup-youtube"id="videoId"href="https://www.youtube.com/embed/pBFQdxA-apI"><div class="overlay-1"> <span id="hom-1"><img class="popup image_on" alt="#"src="${assetsUrl}/templates/therapists/SVG/Polygon%201.svg"></span></div></a> 
<div class="G-detail">        
<p class="G-name">Molly Nix</p>
<p class="G-postion">Senior Product  Designer at Uber</p>      
</div>
      
<img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/2783.png" />
<div class="G-detail">        
<p class="G-name">Molly Nix</p>
<p class="G-postion">Senior Product  Designer at Uber</p>      
</div>
      
<img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/136924%201.png" />
<div class="G-detail">        
<p class="G-name">Molly Nix</p>
<p class="G-postion">Senior Product  Designer at Uber</p>      
</div>
      
<img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/image%2015.png" />
<div class="G-detail">        
<p class="G-name">Molly Nix</p>
<p class="G-postion">Senior Product  Designer at Uber</p>      
</div>
      
<img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/image%2017.png" />
<div class="G-detail">        
<p class="G-name">Molly Nix</p>
<p class="G-postion">Senior Product  Designer at Uber</p>      
</div>      
</div>    
  </div>  
  </div>  
    </section> 
    
  <!---Services section-->
  <section id="section-four">  
  <div class="row">
   <div data-aos="fade-right"data-aos-offset="100"data-aos-easing="ease-in-sine" class="col-lg-6 col-md-6 mb-12">
   <p class="top-subhead">What we offer</p>     
   <h1 class="top-heading top-heading-services">What Service <b>Provide</b></h1>
       
    <p class="top-paragraph p-spc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat. Nam tempus, augue in dapibus scelerisque, enim dui.</p>     
   </div>
  </div>  
  <div class="swiper-container">
      <div class="swiper-wrapper" style="height: auto;">
          <div class="swiper-slide"><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Service_Images_01.jpg">
          <p class="Therapy-name">Chiropratic Therapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid" alt="#" src="${assetsUrl}/templates/therapists/images/2x/Service_Images_02.jpg">
          <p class="Therapy-name">Physiotherapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid" alt="#" src="${assetsUrl}/templates/therapists/images/2x/Service_Images_03.jpg">
          <p class="Therapy-name">Massage Therapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid" alt="#" src="${assetsUrl}/templates/therapists/images/2x/Service_Images_04.jpg">
          <p class="Therapy-name">Cold Laser Therapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid"alt="#" src="${assetsUrl}/templates/therapists/images/2x/Service_Images_01.jpg">
          <p class="Therapy-name">Chiropratic Therapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Service_Images_02.jpg">
          <p class="Therapy-name">Physiotherapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Service_Images_03.jpg">
          <p class="Therapy-name">Massage Therapy</p>
          </div>
          
          <div class="swiper-slide"><img class="img-fluid"alt="#"src="${assetsUrl}/templates/therapists/images/2x/Service_Images_04.jpg">
          <p class="Therapy-name">Cold Laser Therapy</p>
          </div></div></div>
    </section>
    
    <!---Care-help section--> 
    <section id="section-five" class="vedio-section"> 
  <div class="row text-center vedio-main">
   <div class="col-lg-12 col-md-12 mb-12 img-vedio">
   <div data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1000"class="top-text-1 text-center">
         <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 mb-12">
              <h1 class="top-heading V-text">How Can <b>Chiropractic Care Help You? </b></h1>      
              <div class="col-lg-12 col-mb-12 mb-12">
              <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis blandit tincidunt. Vivamus sodales lorem faucibus lobortis iaculis. Donec vel orci gravida, suscipit turpis at, mattis sem. Suspendisse venenatis neque semper urna ultricies venenatis. </p></div>
      </div>       
          </div>
      </div>
       
       <a class="popup-youtube"id="videoId"href="https://www.youtube.com/embed/WsptdUFthWI?showinfo=0"><div class="overlay"> <span id="hom"><img class="popup image_on"alt="#" src="${assetsUrl}/templates/therapists/SVG/Polygon%201.svg"></span></div></a> 
   </div>
  </div>
  </section>  
    
  <div class="shape-2">
  <img class="allabout-image-1 img-fluid" alt="#" src="${assetsUrl}/templates/therapists/SVG/Vector%207.svg"><img class="allabout-image-11 img-fluid" alt="#" src="${assetsUrl}/templates/therapists/SVG/Vector%203.svg">
  </div>
  <!---Care-help section-->
     <section id="section-six" class="Team-section">
    <div class="row">
          <div data-aos="fade-right"data-aos-offset="100"data-aos-easing="ease-in-sine" class="col-lg-5 col-md-5 mb-12 ">
              <p class="top-subhead">What we offer</p>
               <div class="col-lg-8 col-mb-8 mb-12 p-0">
              <h1 class="top-heading ">My team of <b>professionals</b></h1>      
              <p class="top-paragraph team-spc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat. Nam tempus, augue in dapibus scelerisque, enim dui.</p></div>
              <div class="col-lg-6 col-mb-6 mb-12 p-0">
                  <a class="book-btn"href="#"><button class="Book-now-button btn-spc">Book Appointment</button></a>
              </div>
             </div>
             
             <div class="col-lg-7 col-md-7 mb-12 Team-right">
              <div class="row">
              <div class="col-md-6 F-1 ">
                      <img class="img-fluid M-B box" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Team_Images_01.jpg">
                         <div class="img-text">
                         <h5 class="Team-name">Marie Jordan</h5>
                         <p class="Team-P">Psychologist</p>
                      </div>
                  </div>
                  
                  <div class="col-md-6 F-2">
                      <img class="img-fluid M-B box" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Team_Images_02.jpg">
                      <div class="img-text">
                         <h5 class="Team-name">Marie Jordan</h5>
                         <p class="Team-P">Psychologist</p>
                      </div>   
                  </div>
                  
                  <div class="col-md-6 F-3">
                      <img class="img-fluid M-B box" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Team_Images_03.jpg">
                         <div class="img-text">
                         <h5 class="Team-name">Marie Jordan</h5>
                         <p class="Team-P">Psychologist</p>
                      </div>
                  </div>
                  
                  <div class="col-md-6 F-4">
                      <img class="img-fluid M-B box" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Team_Images_04.jpg">
                        <div class="img-text">
                         <h5 class="Team-name">Marie Jordan</h5>
                         <p class="Team-P">Psychologist</p>
                      </div>
                  </div>
              </div>
             </div>
       
       </div>
         <div class="shape-3">
  <img class="bottom-shp img-fluid"  alt="#"src="${assetsUrl}/templates/therapists/SVG/Vector%206.svg">
  </div>
    </section>
    
   
    
    <!---Latest Blogs section-->
  <section id="section-seven" class="Blog-section">
  <div class="row">
   <div data-aos="fade-right"data-aos-offset="100"data-aos-easing="ease-in-sine"class="col-lg-4 col-md-8 mb-12 p-0 blog-lst">
   <p class="top-subhead">Latest Blogs</p>     
   <h1 class="top-heading spc-2">Get Your <b>Life Style Back</b></h1>
       
    <p class="top-paragraph spc-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat. </p>     
   </div>
      
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide swiper-1"><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Blog_01.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          <div class="swiper-slide swiper-1"><img class="img-fluid" alt="#"src="${assetsUrl}/templates/therapists/images/2x/Blog_02.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          <div class="swiper-slide swiper-1"><img alt="#"class="img-fluid "src="${assetsUrl}/templates/therapists/images/2x/Blog_03.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          <div class="swiper-slide swiper-1"><img alt="#"class="img-fluid"src="${assetsUrl}/templates/therapists/images/2x/Blog_01.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          <div class="swiper-slide swiper-1"><img alt="#"class="img-fluid"src="${assetsUrl}/templates/therapists/images/2x/Blog_02.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          <div class="swiper-slide swiper-1"><img alt="#"class="img-fluid"src="${assetsUrl}/templates/therapists/images/2x/Blog_03.jpg">
          <div class="blog-cntx">
          <p class="B-date">09-Aug-2020</p>
          <p class="B-name">History of Chiropractic Care</p>
          <p class="B-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat.</p>    
          </div>
          </div>
          
          
          </div></div>    
  </div>
    </section>    
    
    
    <!---Testimonial section-->
  <section id="section-eight" class="Testimonial-section">
  <div class="row text-center testi-row">
   <div data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1000" class="col-lg-12 col-md-12 mb-12">
   <p class="top-subhead">Our Testimonial</p>     
   <h1 class="top-heading T-1">What our <b>clients say</b></h1>
   <p class="top-paragraph testi-space">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia porttitor placerat. </p>     
   </div>
  </div>
   <div id="testimonial" class="parallax-section">
          <div class="overlay"></div>
          <div class="container p-0">
              <div class="col-lg-10 offset-lg-1 col-md-10 offset-md-1 mb-12 ts-testimonial-slide">
                  <div class="ts-testimonial-item text-center">
                      <div class="pic text-center"><img class="client-img" src="${assetsUrl}/templates/therapists/images/2x/Portrait%20Image.jpg" alt="#"></div>
                      <span><img class="L-img"src="${assetsUrl}/templates/therapists/SVG/quotes_01.svg"></span>
                      <p class="testi-content">"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."</p>
                      <span><img alt="#"class="R-img" src="${assetsUrl}/templates/therapists/SVG/quotes_02.svg"></span>
                         
                      <div class="infor-client">
                          <p class="client-name">Marie Jordan</p>
                          <p class="client-position">Psychologist</p>
                      </div>
                  </div>
                  
                  <div class="ts-testimonial-item text-center">
                      <div class="pic text-center"><img class="client-img" src="${assetsUrl}/templates/therapists/images/2x/Portrait%20Image.jpg" alt="#"></div>
                      <span><img class="L-img"src="${assetsUrl}/templates/therapists/SVG/quotes_01.svg"></span>
                      <p class="testi-content">"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."</p>
                      <span><img class="R-img" alt="#"src="${assetsUrl}/templates/therapists/SVG/quotes_02.svg"></span>
                         
                      <div class="infor-client">
                          <p class="client-name">Marie Jordan</p>
                          <p class="client-position">Psychologist</p>
                      </div>
                  </div>
                  
                  <div class="ts-testimonial-item text-center">
                      <div class="pic text-center"><img class="client-img" src="${assetsUrl}/templates/therapists/images/2x/Portrait%20Image.jpg" alt="#"></div>
                      <span><img class="L-img"src="${assetsUrl}/templates/therapists/SVG/quotes_01.svg"></span>
                      <p class="testi-content">"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."</p>
                      <span><img class="R-img" alt="#"src="${assetsUrl}/templates/therapists/SVG/quotes_02.svg"></span>
                         
                      <div class="infor-client">
                          <p class="client-name">Marie Jordan</p>
                          <p class="client-position">Psychologist</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
    </section>


<!-- Footer -->
<footer id="section-nine"class="footer-outer">
<div class="row footer-inner">
<div class="col-lg-5 col-md-5 mb-12 f-tst">
 <a href="#"><img class="footer-image img-fluid"alt="#"src="${assetsUrl}/templates/therapists/SVG/Logo.svg"></a>   
</div>
 <div class="col-lg-7 col-md-7 mb-12 f-tst">
 <h1 class="footer-text">Ready to start your next project? Drop us a line or
 stop by our office. We are open for creative minds
 and collaboration!</h1>
 <div class="row cntx-sec">
     <div class="col-lg-6 col-md-6 mb-12 Add-sec "><h2 class="D-text">Address</h2><p class="D-para">1029 Goldenrod Dr, Nampa, <br>ID, 83686, california</p></div>
     
     <div class="col-lg-6 col-md-6 mb-12 Con-sec"><h2 class="D-text">Contact Us</h2><p class="D-para">info@siteseed.com</p><p class="D-para">+1 333-444-5555</p></div>
     
     <div class="col-lg-6 col-md-6 mb-12 main-1"><p><a class="D-para spc-f" href="#">Terms of Service</a>
         
      <a class="D-para spc-f1"  href="#">Privacy Policy</a>
     </div>
     
 </div>
 </div>    
</div>
<div class="row bottom-footer">
<div class="col-lg-5 col-md-5 mb-12 f-tst"><p class="copyright-txt">Copyright © SiteSeed 2020.  All rights reserved.</p></div>
<div class="col-lg-7 col-md-7 mb-12 f-tst"><div class="social-spc" style="background-color: #D58F76;height: 80px;">
  <span class="social-spn"><a href="#"><img alt="#"src="${assetsUrl}/templates/therapists/SVG/facebook.svg"></a></span>   
  <span class="social-spn-1"><a  href="#"><img alt="#"src="${assetsUrl}/templates/therapists/SVG/twitter.svg"></a></span>   
  <span class="social-spn-1"><a href="#"> <img alt="#"src="${assetsUrl}/templates/therapists/SVG/instagram.svg"></a></span>   
  <span class="social-spn-2"><a  href="#"><img alt="#"src="${assetsUrl}/templates/therapists/SVG/youtube.svg"></a></span>   
  </div></div>    
</div>      
</footer></div>
  
  

<!-- Bootstrap core JavaScript -->    
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script>
    $(function () {
      $(".popup-youtube, .popup-vimeo").magnificPopup({
        type: "iframe",
      });
      $.extend(true, $.magnificPopup.defaults, {
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "videoId",
              src: "https:%id%",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "videoId2",
              src: "https:/%id%",
            },
          },
        },
      });
    });
  </script> 
<script>
AOS.init();
</script>
  
<script>
 //TESTIMONIAL SLIDER
  if ($(".ts-testimonial-slide").length > 0) {
  
      $(".ts-testimonial-slide").owlCarousel({
          autoPlay: 2000,
          slideSpeed: 1000,
          navigation: false,
          pagination: true,
          singleItem: true
      });
  };
</script>    
<script>
$("#search-icon").click(function() {
$(".nav").toggleClass("search");
$(".nav").toggleClass("no-search");
$(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
 $(".nav").toggleClass("mobile-nav");
 $(this).toggleClass("is-active");
});

</script>
  
<script>
      var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  </script> 
  
  <script>
// Fit inner div to gallery
$('<div />', { 'class': 'inner'  }).appendTo('.gallery');

// Create main image block and apply first img to it
var imageSrc1 = $('.gallery').children('img').eq(0).attr('src');
$('<div />', { 'class': 'main'  }).appendTo('.gallery .inner').css('background-image', 'url(' + imageSrc1 + ')');

// Create image number label
var noOfImages = $('.gallery').children('img').length;
$('<span />').appendTo('.gallery .inner .main').html('Image 1 of ' + noOfImages);

// Create thumb roll
$('<div />', { 'class': 'thumb-roll'  }).appendTo('.gallery .inner');

// Create thumbail block for each image inside thumb-roll
$('.gallery').children('img').each( function() {
  var imageSrc = $(this).attr('src');
  $('<div />', { 'class': 'thumb'  }).appendTo('.gallery .inner .thumb-roll').css('background-image', 'url(' + imageSrc + ')');
});

// Make first thumbnail selected by default
$('.thumb').eq(0).addClass('current');

// Select thumbnail function
$('.thumb').click(function() {
  
  // Make clicked thumbnail selected
  $('.thumb').removeClass('current');
  $(this).addClass('current');
  
  // Apply chosen image to main
  var imageSrc = $(this).css('background-image');
  $('.main').css('background-image', imageSrc);
  $('.main').addClass('main-selected');
  setTimeout(function() {
      $('.main').removeClass('main-selected');
  }, 500);
  
  // Change text to show current image number
  var imageIndex = $(this).index();
  $('.gallery .inner .main span').html('Image ' + (imageIndex + 1) + ' of ' + noOfImages);
});

// Arrow key control function
$(document).keyup(function(e) {

// If right arrow
if (e.keyCode === 39) {

  // Mark current thumbnail
  var currentThumb = $('.thumb.current');
  var currentThumbIndex = currentThumb.index();
  if ( (currentThumbIndex+1) >= noOfImages) { // if on last image
      nextThumbIndex = 0; // ...loop back to first image
  } else {
      nextThumbIndex = currentThumbIndex+1;
  }
  var nextThumb = $('.thumb').eq(nextThumbIndex);
  currentThumb.removeClass('current');
  nextThumb.addClass('current');
  
  // Switch main image
  var imageSrc = nextThumb.css('background-image');
  $('.main').css('background-image', imageSrc);
  $('.main').addClass('main-selected');
  setTimeout(function() {
      $('.main').removeClass('main-selected');
  }, 500);
  
  // Change text to show current image number
  $('.gallery .inner .main span').html('Image ' + (nextThumbIndex+1) + ' of ' + noOfImages);
  
}

// If left arrow
if (e.keyCode === 37) { 

  // Mark current thumbnail
  var currentThumb = $('.thumb.current');
  var currentThumbIndex = currentThumb.index();
  if ( currentThumbIndex == 0) { // if on first image
      prevThumbIndex = noOfImages-1; // ...loop back to last image
  } else {
      prevThumbIndex = currentThumbIndex-1;
  }
  var prevThumb = $('.thumb').eq(prevThumbIndex);
  currentThumb.removeClass('current');
  prevThumb.addClass('current');
  
  // Switch main image
  var imageSrc = prevThumb.css('background-image');
  $('.main').css('background-image', imageSrc);
  $('.main').addClass('main-selected');
  setTimeout(function() {
      $('.main').removeClass('main-selected');
  }, 500);
  
  // Change text to show current image number
  $('.gallery .inner .main span').html('Image ' + (prevThumbIndex+1) + ' of ' + noOfImages);
  
}
  
});

</script>
  `
//   ===================================================

/*
  Steps
  1. extract basic and @media/@-webkit-keyframes/@keyframes styles from style.css of template
  2. put basic styles in template1StyleCss variable
  3. put later styles in template1StyleMedia variable
  4. put html>body content in template1Html also append scripts tags in the end of this variable
  5. Remove all inline styles and add them in css with proper ids
  6. If you want to drag and move components which has scripts. The script tags should be in the immediate parent of that component.
  */


  export default {
	  html,
	  baseCss,
	  customCss,
	  style,
  }