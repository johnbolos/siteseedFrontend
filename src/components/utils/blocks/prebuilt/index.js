import { header } from "./icons";

export const prebuiltBlocks = (editor) => {

    editor.BlockManager.add("header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Prebuilt",
        content: `
        <div class="ss-header-container">
                <div class="ss-nav">
                    <div class="ss-logo">
                        <a href="#"><img class="ss-logo-img" att="" /></a>
                    </div>
                    <div class="ss-nav-items">
                        <ul class="ss-nav-items-list">
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#about-section">About</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#gallery-section">Gallery</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#features-sectionn">Features</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#pricing-sectionn">Pricing</a>
                            </li>
                            <li class="ss-nav-item ss-cool-link"> <a class="ss-nav-link" href="#faq-section">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="ss-nav-actions">
                        <button class="ss-action-btn">Button Text</button>
                    </div>
                </div>
                <div class="ss-toogler" onclick="
                	let nav = document.querySelector('.ss-nav');
                    if (nav.style.marginLeft == '100%' || nav.style.marginLeft == '') {
                    	nav.style.marginLeft = '0%'
                    } else {
                    	nav.style.marginLeft = '100%'
                    }
                    console.log(nav, nav.style.marginLeft, 'aaa.p');
                    let hamburger = document.querySelector('.ss-hamburger');
                    let close = document.querySelector('.ss-close');
                    hamburger.style.display = (hamburger.style.display == 'block' || hamburger.style.display == '') ? 'none' : 'block';
                    close.style.display = (close.style.display == 'none' || close.style.display == '') ? 'block' : 'none';
                    
                ">
                    <svg class="ss-hamburger" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="2" fill="black"/>
                        <rect y="8" width="24" height="2" fill="black"/>
                        <rect y="16" width="24" height="2" fill="black"/>
                    </svg>
                    <svg class="ss-close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.807617" y="17.7782" width="24" height="2" transform="rotate(-45 0.807617 17.7782)" fill="white"/>
                        <rect x="17.7782" y="19.1924" width="24" height="2" transform="rotate(-135 17.7782 19.1924)" fill="white"/>
                    </svg>
                </div>
                <style>
                    .ss-header-container {
                        padding: 10px 10px;
                        background-color: #ffffff;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 110px;
                        z-index: 5;
                    }
                    .ss-nav {
                        padding: 10px 110px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        transition: margin-left 1s;
                    }
                    .ss-logo {
                        height: 70px;
                        width: 70px;
                        overflow: hidden;
                        padding: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .ss-toogler {
                        display: none;
                        position: absolute;
                        right: 120px;
                        top: 50px;
                    }
                    .ss-hamburger {
                    	display: block;
                    }
                    .ss-close {
                    	display: none;
                    }
                    .ss-nav-items {
                        flex: 1;
                        padding: 0px 35px;
                    }
                    .ss-nav-items-list {
                        list-style: none;
                        padding: 0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        float: right;
                    }
                    .ss-nav-item {
                        margin: 0px 10px;
                        padding: 0px 7.5px;
                    }
                    .ss-nav-link {
                        text-decoration: none;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        color: #95A1BB !important;
                    }
                    .ss-nav-link:hover {
                        color: #363940 !important;
                        text-decoration-line: underline !important;
                    }
                    .ss-action-btn {
                        height: 50px;
                        width: 120px;
                        border: none;
                        background-color: #006CFF;
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: normal;
                        font-size: 16px;
                        line-height: 22px;
                        color: #ffffff;
                    }
                </style>
                <style>
                @media screen and (max-width: 1024px) {
                	.ss-header-container {
                    	padding: 0px;
                    }
                    .ss-header-container .ss-toogler {
                        display: block;
                        z-index: 2;
                    }
                    .ss-nav {
                    	margin-left: 100%;
                        background-color: antiquewhite;
                        padding: 0px;
                        flex-direction: column;
                        position: fixed;
    					height: 100%;
    					width: 100%;
    					justify-content: space-evenly;
                        z-index: 1;
                    }
                    .ss-logo {
                    	align-self: flex-start;
    					position: fixed;
    					top: 20px;
    					left: 120px;
                    }
                    .ss-nav-items {
                    	flex: none;
                    }
                    .ss-nav-items-list {
                    	flex-direction: column;
                    }
                    .ss-nav-item {
                    	margin: 30px 10px;
                    }
                }
                @media screen and (min-width: 1024px) {
                    .ss-nav {
                        margin-left: 0% !important;
                    }
                }
                @media screen and (max-width: 640px) {
                    .ss-logo {
                        left: 25px;
                    }
                    .ss-toogler {
                    	right: 25px;
                    }
                }
                </style>
            </div>
        `
    })

    editor.BlockManager.add("pop-up", {
        label: `<div>Pop Up</div>`,
        category: "Prebuilt",
        // editable: false,
        draggable: true,
        stylable: true,
        // selectable: false,
        content: {
            type: 'pop-up',
            components: `
          <button class="btn btn-danger" id="open-modal">Open Modal</button>
        <!-- The Modal -->
        <div id="myModal" class="ss-modal" data-gjs-icon='<i class="fa fa-superpowers"></i>' data-gjs-custom-name="ss-pop-up">
    
        <!-- Modal content -->
        <div class="modal-content">
            
        <span class="close float-right" data-gjs-editable="false" data-gjs-removable="false" data-gjs-draggable="false">&times;</span>
          
                 
                        <!--Section: Content-->
                        <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    
                          <!--Grid row-->
                          <div class="row d-flex justify-content-center">
                    
                            <!--Grid column-->
                            <div class="col-md-6">
                    
                              <!-- Default form subscription -->
                              <form class="text-center" action="#!">
                    
                                <p class="h4 mb-4">Subscribe</p>
                    
                                <p>Join our mailing list. We write rarely, but only the best content.</p>
                    
                                <p>
                                  <a href="" target="_blank">See the last newsletter</a>
                                </p>
                    
                                <!-- Name -->
                                <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">
                    
                                <!-- Email -->
                                <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail">
                    
                                <!-- Sign in button -->
                                <button class="btn btn-info btn-block" type="submit">Sign in</button>
                    
                    
                              </form>
                              <!-- Default form subscription -->
                    
                            </div>
                            <!--Grid column-->
                    
                          </div>
                          <!--Grid row-->
                    
                    
                        </section>
                      </div>
        </div>
    
        <style>
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        div[ss-pop-up] .ss-modal  {
          visibility: visible;
          opacity: 1;
        }
        .ss-modal {
           display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s linear;
            animation: 1s ease-out 0s 1 slideInFromLeft;
          }
          
          /* Modal Content */
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            color: #000
          }
          
          /* The Close Button */
          .close {
            color: #aaaaaa;
            width: 20px;
            font-size: 28px;
            font-weight: bold;
          }
          
          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          </style>
        <script>
        // Get the modal
        var modal = document.getElementById("myModal");
    
        // Get the button that opens the modal
        var btn = document.getElementById("open-modal");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks the button, open the modal 
        // btn.ondblclick = function() {
        // modal.style.display = "block";
        // }
    
        //open the modal on triple click
        btn.addEventListener('click', function (evt) {
          if (evt.detail === 2) {
             // modal.style.display = "block";
             modal.style.visibility= "visible";
             modal.style.opacity= 1;
          }
      });
    
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.opacity= 0;
        modal.style.visibility= "hidden";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.opacity= 0;
          modal.style.visibility= "hidden";
        }
        }
        </script>`
        },
    });


};