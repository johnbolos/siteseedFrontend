// import {countdown} from "./icons";

export const extras = (editor) => {
  // editor.BlockManager.add("pop-up", {
  //   label: `<div>Pop Up</div>`,
  //   category: "Extras",
  //   // editable: false,
  //   draggable: true,
  //   stylable: true,
  //   // selectable: false,
  //   content: {
  //     type: 'pop-up',
  //     components: `
  //     <button class="btn btn-danger" id="open-modal">Open Modal</button>
  //   <!-- The Modal -->
  //   <div id="myModal" class="ss-modal" data-gjs-icon='<i class="fa fa-superpowers"></i>' data-gjs-custom-name="ss-pop-up">

  //   <!-- Modal content -->
  //   <div class="modal-content">
        
  //   <span class="close float-right" data-gjs-editable="false" data-gjs-removable="false" data-gjs-draggable="false">&times;</span>
      
             
  //                   <!--Section: Content-->
  //                   <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                
  //                     <!--Grid row-->
  //                     <div class="row d-flex justify-content-center">
                
  //                       <!--Grid column-->
  //                       <div class="col-md-6">
                
  //                         <!-- Default form subscription -->
  //                         <form class="text-center" action="#!">
                
  //                           <p class="h4 mb-4">Subscribe</p>
                
  //                           <p>Join our mailing list. We write rarely, but only the best content.</p>
                
  //                           <p>
  //                             <a href="" target="_blank">See the last newsletter</a>
  //                           </p>
                
  //                           <!-- Name -->
  //                           <input type="text" id="defaultSubscriptionFormPassword" class="form-control mb-4" placeholder="Name">
                
  //                           <!-- Email -->
  //                           <input type="email" id="defaultSubscriptionFormEmail" class="form-control mb-4" placeholder="E-mail">
                
  //                           <!-- Sign in button -->
  //                           <button class="btn btn-info btn-block" type="submit">Sign in</button>
                
                
  //                         </form>
  //                         <!-- Default form subscription -->
                
  //                       </div>
  //                       <!--Grid column-->
                
  //                     </div>
  //                     <!--Grid row-->
                
                
  //                   </section>
  //                 </div>
  //   </div>

  //   <style>
  //   @keyframes slideInFromLeft {
  //     0% {
  //       transform: translateX(-100%);
  //     }
  //     100% {
  //       transform: translateX(0);
  //     }
  //   }
  //   div[ss-pop-up] .ss-modal  {
  //     visibility: visible;
  //     opacity: 1;
  //   }
  //   .ss-modal {
  //      display: block; /* Hidden by default */
  //       position: fixed; /* Stay in place */
  //       z-index: 1; /* Sit on top */
  //       padding-top: 100px; /* Location of the box */
  //       left: 0;
  //       top: 0;
  //       width: 100%; /* Full width */
  //       height: 100%; /* Full height */
  //       overflow: auto; /* Enable scroll if needed */
  //       background-color: rgb(0,0,0); /* Fallback color */
  //       background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  //       visibility: hidden;
  //       opacity: 0;
  //       transition: visibility 0s, opacity 0.5s linear;
  //       animation: 1s ease-out 0s 1 slideInFromLeft;
  //     }
      
  //     /* Modal Content */
  //     .modal-content {
  //       background-color: #fefefe;
  //       margin: auto;
  //       padding: 20px;
  //       border: 1px solid #888;
  //       width: 80%;
  //       color: #000
  //     }
      
  //     /* The Close Button */
  //     .close {
  //       color: #aaaaaa;
  //       width: 20px;
  //       font-size: 28px;
  //       font-weight: bold;
  //     }
      
  //     .close:hover,
  //     .close:focus {
  //       color: #000;
  //       text-decoration: none;
  //       cursor: pointer;
  //     }
  //     </style>
  //   <script>
  //   // Get the modal
  //   var modal = document.getElementById("myModal");

  //   // Get the button that opens the modal
  //   var btn = document.getElementById("open-modal");

  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  //   // When the user clicks the button, open the modal 
  //   // btn.ondblclick = function() {
  //   // modal.style.display = "block";
  //   // }

  //   //open the modal on triple click
  //   btn.addEventListener('click', function (evt) {
  //     if (evt.detail === 2) {
  //        // modal.style.display = "block";
  //        modal.style.visibility= "visible";
  //        modal.style.opacity= 1;
  //     }
  // });


  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function() {
  //   modal.style.opacity= 0;
  //   modal.style.visibility= "hidden";
  //   }

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.opacity= 0;
  //     modal.style.visibility= "hidden";
  //   }
  //   }
  //   </script>`
  //   },
  // });

















  //bootstrap modal
  /* editor.BlockManager.add("pop-up-2", {
    label: `<div>Pop Up2</div>`,
    category: "Extras",
    editable: false,
    draggable: true,
    stylable: true,
    selectable: false,
    content: `
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fullHeightModalRight">
  Launch demo modal
</button>

<!-- Full Height Modal Right -->
<div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">

  <!-- Add class .modal-full-height and then add class .modal-right (or other classes from list above) to set a position to the modal -->
  <div class="modal-dialog modal-full-height modal-right" role="document">


    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Full Height Modal Right -->
  `,
  }); */
};
