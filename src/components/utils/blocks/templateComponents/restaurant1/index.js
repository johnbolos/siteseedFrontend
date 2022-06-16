import { assetsUrl } from "../../../../../settings";
import { countdown } from "../../extras/icons";
import { header, gallery, popUp, faq, team, form, testimonials, footer, cta, pricing } from "./icons";

export const restaurant1 = (editor) => {

    editor.BlockManager.add("restaurant1-header", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Header</div>
        </div>`,
        category: "Template Components",
        content: `
        <nav id="myHeader" class="navbar navbar-expand-lg navbar-dark">
            <div class="container nav-container"><img src="${assetsUrl}/templates/restaurant1/images/Logo.png" class="img-fluid">
                <div id="navbarResponsive" class="navbar-collapse hideshow content2 w100">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a href="#home-section" class="nav-link animate__animated">Home
                                <span class="sr-only">(current)</span></a></li>
                        <li class="nav-item"><a href="#About-section" class="nav-link animate__animated">About</a></li>
                        <li class="nav-item"><a href="#Gallery-secrion" class="nav-link animate__animated">Gallery</a></li>
                        <li class="nav-item"><a href="#Menu-section" class="nav-link animate__animated">Menu</a></li>
                        <li class="nav-item"><a href="#Contact-section" class="nav-link animate__animated">Find Us</a></li>
                    </ul>
                </div>
                <div id="menu-revealer" class="wrapper"><button data-label="" role="button" class="menu-toggle"><span class="icon-bars"></span></button></div>
            </div>
        </nav>`
    })

    editor.BlockManager.add("restaurant1-banner", {
        label: `<div class="inherit-color-svg">${header}
            <div style="margin-top: 4.14px">Banner</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="top-sec main-body Most-top-sec">
            <div class="top-header-shape"><img src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_01.png" class="img-fluid top-shape"></div>
            <div class="top-header-shape-1920"><img src="${assetsUrl}/templates/restaurant1/images/shp-11.png" class="img-fluid top-shape"></div>
            <div class="row">
                <div class="col-lg-9 col-md-9 mb-12">
                    <p class="top-tagline">The Future of tradition</p>
                    <h1 class="top-heading">Food so good... it’s <br>addictive</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem urna, elementum nec ultrices sed, commodo eget augue. </p>
                </div>
                <div class="col-lg-6 col-md-12 mb-12 buttons-div"><button type="button" data-toggle="modal" data-target="#booktable" class="btn btn-outline">Reserve a table</button></div>
            </div>
        </div>`
    })

    editor.BlockManager.add("restaurant1-about", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="slider-sec main-body">
            <div class="row crousla-row">
                <main id="Home-section">
                    <div class="container slider-inner-cont">
                        <div id="main-carousel" data-ride="carousel" class="carousel slide">
                            <ol class="carousel-indicators">
                                <li data-target="#main-carousel" data-slide-to="0" class=""></li>
                                <li data-target="#main-carousel" data-slide-to="1" class="active"></li>
                                <li data-target="#main-carousel" data-slide-to="2" class=""></li>
                            </ol><!-- /.carousel-indicators -->
                            <div class="carousel-inner">
                                <div class="carousel-item active carousel-item-left"><img src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="" class="d-block img-fluid"></div>
                                <div class="carousel-item carousel-item-next carousel-item-left"><img src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="" class="d-block img-fluid"></div>
                                <div class="carousel-item"><img src="${assetsUrl}/templates/restaurant1/images/image%2045.jpg" alt="" class="d-block img-fluid"></div>
                            </div><!-- /.carousel-inner --><a href="#main-carousel" data-slide="prev" class="carousel-control-prev"><span><img src="${assetsUrl}/templates/restaurant1/images/Next_Left.png" class="img-fluid"></span><span aria-hidden="true" class="sr-only">Prev</span></a><a href="#main-carousel" data-slide="next" class="carousel-control-next"><span><img src="${assetsUrl}/templates/restaurant1/images/Next_Right.png" class="img-fluid"></span><span aria-hidden="true" class="sr-only">Next</span></a>
                        </div>
                    </div>
                </main>
            </div>
        </section>
        <section class="tradition-sec main-body">
            <div class="F-left-shape"><img src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_02.png" class="img-fluid L-shape"></div>
            <div class="F-left-shape-1920"><img src="${assetsUrl}/templates/restaurant1/images/shp-22.png" class="img-fluid L-shape-1920"></div>
            <div class="row">
                <div class="col-lg-4 col-md-4 mb-12"></div>
                <div class="col-lg-8 col-md-12 mb-12">
                    <p class="top-tagline">The Future of tradition</p>
                    <h1 class="B-heading">Get more of what you really want!</h1>
                    <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus etiam.</p><br>
                    <p class="top-paragraph">Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum nam rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("restaurant1-partner", {
        label: `<div class="inherit-color-svg">${testimonials}
            <div style="margin-top: 4.14px">Partners</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="our-partner main-body">
            <div class="row mobil-space">
                <div class="col-md-3 b-w agency-partner-sec"><img src="${assetsUrl}/templates/restaurant1/images/Vimeo.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w agency-partner-sec no-border"><img src="${assetsUrl}/templates/restaurant1/images/Spotify.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w agency-partner-sec"><img src="${assetsUrl}/templates/restaurant1/images/Woodendummy.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w-2 agency-partner-sec"><img src="${assetsUrl}/templates/restaurant1/images/Max.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w-1 agency-partner-sec"><img src="${assetsUrl}/templates/restaurant1/images/Aria.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w-1 agency-partner-sec no-border"><img src="${assetsUrl}/templates/restaurant1/images/Bauknecht.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 b-w-1 agency-partner-sec N-Border-m"><img src="${assetsUrl}/templates/restaurant1/images/Jeep.png" class="l-1 img-fluid"></div>
                <div class="col-md-3 agency-partner-sec"><img src="${assetsUrl}/templates/restaurant1/images/Placeholder.png" class="l-1 img-fluid"></div>
            </div>
        </section>`
    })

    editor.BlockManager.add("restaurant1-about2", {
        label: `<div class="inherit-color-svg">${team}
            <div style="margin-top: 4.14px">About Us 2</div>
        </div>`,
        category: "Template Components",
        content: `
        <section id="About-section" class="thechef-sec main-body">
            <div class="row xs-div">
                <div class="col-lg-6 col-md-6 mb-12 text-sec-spacing text-div">
                    <p class="top-tagline">The chef</p>
                    <h1 class="B-heading">Mauro <br>COLAGRECO</h1>
                    <p class="top-paragraph">Through his personal interpretations of ingredients and flavour combinations, Mauro Colagreco has forged a style of his own.<br>
                        He has absorbed his Italian-Argentinian cultural heritage and that of the chefs with whom he trained, and now follows his intuition as he draws on the local culture on both sides of the border.
                    </p><br>
                    <p class="top-paragraph">Inspired by the sea, the mountains and the fruit and vegetables grown in his own gardens, Mauro invents colourful, pictorial dishes that play with textures and bold contrasts.</p>
                </div>
                <div class="col-lg-6 col-md-6 mb-12 image-div"><img src="${assetsUrl}/templates/restaurant1/images/image%2055.jpg" class="img-fluid shadow-bg"></div>
            </div>
        </section>`
    })

    editor.BlockManager.add("restaurant1-recipe", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Recipe</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="recipie-sec main-body">
            <div class="row">
                <div class="col-lg-12 col-md-12 mb-12"><img src="${assetsUrl}/templates/restaurant1/images/image%2057.jpg" class="img-fluid shadow-bg"></div>
                <div class="col-lg-12 col-md-12 mb-12">
                    <h1 class="recipe-head">Chateau Marguii Rose</h1>
                    <p class="recipe-para"> France (Provence) Cinsault, Grenache France (Provence)<br>
                        Cinsault, Grenache
                    </p>
                </div>
            </div>
        </section>`
    })

    editor.BlockManager.add("restaurant1-gallery", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Gallery</div>
        </div>`,
        category: "Template Components",
        content: `
        <div id="Gallery-section" class="row inner-recipie-sec main-body">
            <div class="col-lg-6 col-md-6 mb-12 inner-mid-space"><img src="${assetsUrl}/templates/restaurant1/images/image%2063.jpg" class="img-fluid inner-full-width shadow-bg">
                <h1 class="recipe-head">Aubry 1er Cru Brut </h1>
                <p class="recipe-para"> France (Champagne) Chardonnay, Pinot Noir </p>
            </div>
            <div class="col-lg-6 col-md-6 mb-12 inner-sec-mobi"><img src="${assetsUrl}/templates/restaurant1/images/image%2062.jpg" class="img-fluid shadow-bg">
                <h1 class="recipe-head POS-L">Niepoort ‘Redoma Branco’</h1>
                <p class="recipe-para POS-L">Portugal (Douro) Rabigato, Codéga de LarinhoFrance
                    (Provence) Cinsault
                </p>
            </div>
        </div>
        <div class="row full-recipie-sec main-body">
            <div class="offset-lg-2 col-lg-8 offset-md-2 col-md-8 mb-12 R-pading"><img src="${assetsUrl}/templates/restaurant1/images/image%2061.jpg" class="img-fluid shadow-bg">
                <h1 class="recipe-head">Guillot Broux ‘Genievrieres’ </h1>
                <p class="recipe-para">France (Burgundy) Chardonnay </p>
            </div>
        </div>
        <div class="row inner-recipie-sec main-body">
            <div class="col-lg-6 col-md-6 mb-12 R-pading"><img src="${assetsUrl}/templates/restaurant1/images/image%2064.jpg" class="img-fluid shadow-bg">
                <h1 class="recipe-head">Day Wines ‘Cancilla Vineyard’ </h1>
                <p class="recipe-para">France (Champagne) Chardonnay, Pinot Noir </p>
            </div>
            <div class="col-lg-6 col-md-6 mb-12 inner-mid-space s inner-sec-mobi"><img src="${assetsUrl}/templates/restaurant1/images/image%2058.jpg" class="img-fluid shadow-bg">
                <h1 class="recipe-head POS-L1">Chateau Marguii Rose </h1>
                <p class="recipe-para POS-L1">France (Provence) Cinsault </p>
            </div>
        </div>`
    })

    editor.BlockManager.add("restaurant1-menuoftheday", {
        label: `<div class="inherit-color-svg">${gallery}
            <div style="margin-top: 4.14px">Menu of the Day</div>
        </div>`,
        category: "Template Components",
        content: `
        <section class="menuoftheday">
            <div class="row marq-des">
                <div class="col-lg-12 col-md-12 mb-12 slide-right" id="i3dryo">
                    <marquee width="100%" direction="right" scrolldelay="90" scrollamount="20">
                        <h1 class="menu-inner-text">Menu of </h1>
                    </marquee>
                    <marquee width="100%" direction="left" scrolldelay="90" scrollamount="20">
                        <h1 class="menu-inner-text Right-text">the Day</h1>
                    </marquee>
                </div>
            </div>
            <div class="row marq-mob">
                <div class="col-lg-12 col-md-12 mb-12 slide-right" id="iws06f">
                    <marquee width="100%" direction="right" scrolldelay="300" scrollamount="20">
                        <h1 class="menu-inner-text">Menu of </h1>
                    </marquee>
                    <marquee width="100%" direction="left" scrolldelay="300" scrollamount="20">
                        <h1 class="menu-inner-text Right-text">the Day</h1>
                    </marquee>
                </div>
            </div>
        </section>
        <section class="bottom-tradition main-body">
            <div class="row">
                <div class="col-lg-9 col-md-12 mb-12">
                    <p class="top-tagline">The Future of tradition</p>
                    <h1 class="B-heading">Where the flavor <br>inebriates you</h1>
                    <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
                </div>
            </div>
        </section>
        <div class="cs-menu-mob-upper"></div>
        <section id="Menu-section" class="tabs-section main-body cs-menu">
            <div class="row">
                <div class="col-md-12">
                    <div class="nav nav-pills scrollmenu"><a data-toggle="pill" href="#menu1" class="active tab">Cocktails</a><a data-toggle="pill" href="#menu2" class="L-M tab">Afterdinner Cocktails</a><a data-toggle="pill" href="#menu3" class="L-M tab">Maindish</a><a data-toggle="pill" href="#menu4" class="L-M tab">Wine</a><a data-toggle="pill" href="#menu3" class="L-M tab">Beer</a></div>
                    <div class="menu-shape"><img src="${assetsUrl}/templates/restaurant1/images/Vector_Outline_03.png" class="img-fluid menu-image"></div>
                    <div class="menu-shape-1920"><img src="${assetsUrl}/templates/restaurant1/images/shp-3.png" class="img-fluid menu-image"></div>
                    <div class="tab-content">
                        <div id="menu1" class="tab-pane fade active show">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-12">
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Aubry 1er Cru Brut </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
                                            <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
                                                Cinsault, Grenache
                                            </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
                                            <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">70$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
                                            <p class="tabs-para">France (Burgundy) Chardonnay </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">30$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014 </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013 </p>
                                            <p class="tabs-para">France (Loire) </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012 </p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato</p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">80$</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-12 inner-image"><img src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg" class="img-fluid shadow-bg"><img src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg" class="img-fluid sub-image shadow-bg"></div>
                            </div>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-12">
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Aubry 1er Cru Brut </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
                                            <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
                                                Cinsault, Grenache
                                            </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
                                            <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">70$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
                                            <p class="tabs-para">France (Burgundy) Chardonnay </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">30$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
                                            <p class="tabs-para">France (Loire) </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato</p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">80$</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-12 inner-image"><img src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg" class="img-fluid shadow-bg"><img src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg" class="img-fluid sub-image shadow-bg"></div>
                            </div>
                        </div>
                        <div id="menu3" class="tab-pane fade">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-12">
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Aubry 1er Cru Brut </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
                                            <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
                                                Cinsault, Grenache
                                            </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
                                            <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">70$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
                                            <p class="tabs-para">France (Burgundy) Chardonnay </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">30$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
                                            <p class="tabs-para">France (Loire) </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato</p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">80$</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-12 inner-image"><img src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg" class="img-fluid shadow-bg"><img src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg" class="img-fluid sub-image shadow-bg"></div>
                            </div>
                        </div>
                        <div id="menu4" class="tab-pane fade">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-12">
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Aubry 1er Cru Brut </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
                                            <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
                                                Cinsault, Grenache
                                            </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
                                            <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">70$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
                                            <p class="tabs-para">France (Burgundy) Chardonnay </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">30$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
                                            <p class="tabs-para">France (Loire) </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato</p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">80$</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-12 inner-image"><img src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg" class="img-fluid shadow-bg"><img src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg" class="img-fluid sub-image shadow-bg"></div>
                            </div>
                        </div>
                        <div id="menu5" class="tab-pane fade">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mb-12">
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Aubry 1er Cru Brut </p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Chateau Marguii Rose 2016 </p>
                                            <p class="tabs-para">France (Provence) Cinsault, Grenache France (Provence)
                                                Cinsault, Grenache
                                            </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2016</p>
                                            <p class="tabs-para"> France (Loire) Sauvignon Blanc France (Loire) Sauvignon Blanc </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">50$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2015</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato, Codéga de LarinhoFrance(Provence) Cinsault </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">70$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Guillot Broux ‘Genievrieres’ 2015</p>
                                            <p class="tabs-para">France (Burgundy) Chardonnay </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">30$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Day Wines ‘Cancilla Vineyard’ 2014</p>
                                            <p class="tabs-para"> France (Champagne) Chardonnay, Pinot Noir </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Clos Tue Boeuf ‘Petit Blanc’ 2013</p>
                                            <p class="tabs-para">France (Loire) </p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">20$</p>
                                        </div>
                                    </div>
                                    <div class="row inner-table">
                                        <div class="col-md-10 L-list">
                                            <p class="tabs-heading">Niepoort ‘Redoma Branco’ 2012</p>
                                            <p class="tabs-para"> Portugal (Douro) Rabigato</p>
                                        </div>
                                        <div class="col-md-2 R-list">
                                            <p class="tabs-heading">80$</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 mb-12 inner-image"><img src="${assetsUrl}/templates/restaurant1/images/image%2054.jpg" class="img-fluid shadow-bg"><img src="${assetsUrl}/templates/restaurant1/images/image%2053.jpg" class="img-fluid sub-image shadow-bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="cs-menu-mob-down"></div>`
    })

    editor.BlockManager.add("restaurant1-form", {
        label: `<div class="inherit-color-svg">${form}
            <div style="margin-top: 4.14px">Book Now</div>
        </div>`,
        category: "Template Components",
        content: `
        <div class="row avilable-section main-body">
            <div class="col-lg-7 col-md-6 mb-12">
                <p class="top-tagline">Make online Reservation</p>
                <h1 class="B-heading head-W">We are available for dinnings &amp; <br>events</h1>
            </div>
            <div class="col-lg-5 col-md-6 mb-12 p-0">
                <p class="top-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                <p class="top-paragraph book-margin-top">Book online or give us a call +1-541-754-3700 between 10:30am - 6.00pm on weekdays. and between 11pm - 4.30pm on weekends </p>
            </div>
        </div>
        <div class="row book-now-sec main-body">
            <form class="book-table-form">
                <div id="basic-select-1" class="col-lg-3 col-md-3 mb-12 R-pading"><input type="text" id="datepicker" value="25/09/2020" class="datepicker form-control hasDatepicker">
                    <!--<select id="cars-1" name="cars">
                    <option value="volvo">13/07/2020</option>
                    <option value="saab">14/07/2020</option>
                    <option value="fiat">15/07/2020</option>
                    <option value="audi">16/07/2020</option>
                </select>-->
                </div>
                <div id="basic-select-2" class="col-lg-3 col-md-3 mb-12 R-pading"><select id="cars-2" name="cars">
                        <option value="time">1:00 am</option>
                        <option value="time">2:00 am</option>
                        <option value="time">3:00 am</option>
                        <option value="time">4:00 am</option>
                        <option value="time">5:00 am</option>
                        <option value="time">6:00 am</option>
                        <option value="time">7:00 am</option>
                        <option value="time">8:00 am</option>
                        <option value="time">9:00 am</option>
                        <option value="time">10:00 am</option>
                        <option value="time">11:00 am</option>
                        <option value="time">12:00 am</option>
                        <option value="time">1:00 am</option>
                        <option value="time">2:00 pm</option>
                        <option value="time">3:00 pm</option>
                        <option value="time">4:00 pm</option>
                        <option value="time">5:00 pm</option>
                        <option value="time">6:00 pm</option>
                        <option value="time">7:00 pm</option>
                        <option value="time">8:00 pm</option>
                        <option value="time">9:00 pm</option>
                        <option value="time">10:00 pm</option>
                        <option value="time">11:00 pm</option>
                        <option value="time">12:00 pm</option>
                    </select></div>
                <div id="basic-select-3" class="col-lg-3 col-md-3 mb-12 R-pading"><select id="cars-3" name="cars">
                        <option value="volvo" class="color-set">2 People</option>
                        <option value="saab" class="color-set">3 People</option>
                        <option value="fiat" class="color-set">4 People</option>
                        <option value="audi" class="color-set">5 People</option>
                    </select></div>
                <div class="col-lg-3 col-md-3 mb-12 R-pading"><button type="submit" class="book-table">Book a Table</button></div>
            </form>
        </div>
        <div id="booktable" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4" aria-hidden="true" class="modal fade">
            <div role="document" class="modal-dialog modal-dialog-centered modal-dialog-zoom modal-lg">
                <div class="modal-content">
                    <div class="modal-header"><button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true"><img src="${assetsUrl}/templates/restaurant1/images/popup-cross.png" class="img-fluid shadow-bg"></span></button></div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <p class="popup-top-tagline">The Fututre of tradition</p>
                                <h1 class="popup-top-heading">Book a Table</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9 col-lg-9 col-sm-12">
                                <p class="popup-top-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem urna, elementum nec ultrices sed, commodo eget augue. </p>
                            </div>
                        </div>
                        <div class="row custom-form-ele">
                            <div class="col-md-12 col-lg-12 col-sm-12">
                                <ul>
                                    <form>
                                        <li>
                                            <div class="form-group"><input type="text" placeholder="Your name" class="form-control"></div>
                                        </li>
                                        <li>
                                            <div class="form-group"><input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" class="form-control"></div>
                                        </li>
                                        <li>
                                            <div class="form-group"><input type="text" placeholder="Your phone" class="form-control"></div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <div id="guest-select" class="guest-main arrow-select"><select class="form-control">
                                                        <option selected="" class="guest-list demo">Number of guests</option>
                                                        <option class="guest-list">2 People</option>
                                                        <option class="guest-list">3 People</option>
                                                        <option class="guest-list">4 People</option>
                                                        <option class="guest-list">5 People</option>
                                                    </select></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <div id="date-select" class="date-main arrow-select"><input type="text" id="datepicker1" value="23/11/2020" class="datepicker form-control hasDatepicker"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-group">
                                                <div id="time-select" class="time-main arrow-select"><select class="form-control">
                                                        <option selected="selected" class="time-list demo">Select time</option>
                                                        <option class="time-list">2 pm </option>
                                                        <option class="time-list">3 pm</option>
                                                        <option class="time-list">4 pm</option>
                                                        <option class="time-list">5 pm</option>
                                                    </select></div>
                                            </div>
                                        </li>
                                        <li class="msgbody">
                                            <div class="form-group">
                                                <div id="text-select" class="guest-main"><textarea name="message" placeholder="Enter your message"></textarea></div>
                                            </div>
                                        </li>
                                        <li class="submitbutton">
                                            <div class="form-group">
                                                <div class="modal-footer"><button type="button" class="btn btn-primary">Submit your reservation</button></div>
                                            </div>
                                        </li>
                                    </form>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    editor.BlockManager.add("restaurant1-footer", {
        label: `<div class="inherit-color-svg">${footer}
            <div style="margin-top: 4.14px">Footer</div>
        </div>`,
        category: "Template Components",
        content: `
        <footer id="Contact-section" class="py-5 bg-dark main-body">
            <div class="container R-pading">
                <div class="row">
                    <div class="col-lg-3 col-md-3 mb-6 left-col">
                        <h5 class="footer-header">Address</h5>
                        <ul class="list-unstyled quick-links">
                            <li class="footer-paragraph">4108 Columbia Ave, Ridge</li>
                            <li class="footer-paragraph">Spring, SC, 29129</li>
                            <ul class="list-unstyled quick-links">
                                <h5 class="footer-header bottom-gap">Opening hours</h5>
                                <li class="footer-paragraph">Monday to Saturday</li>
                                <li class="footer-paragraph">11:00 - 16.30</li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-3 mb-6 left-col">
                        <h5 class="footer-header">Phone</h5>
                        <ul class="list-unstyled quick-links">
                            <li class="footer-paragraph">+1-541-754-3700</li>
                            <li class="footer-paragraph">+1-541-368-3700</li>
                            <ul class="list-unstyled quick-links">
                                <h5 class="footer-header bottom-gap">Email</h5>
                                <li class="footer-paragraph">info@siteSeed.com</li>
                            </ul>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-3 mb-6 left-col">
                        <h5 class="follow-us-text">Follow us</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a id="hom-1" href="#"><img src="${assetsUrl}/templates/restaurant1/images/Instagram.png" class="social-icons img-fluid image_on"><img src="${assetsUrl}/templates/restaurant1/images/insta-hover.png" class="social-icons img-fluid image_off"></a><a id="hom-2" href="#"><img src="${assetsUrl}/templates/restaurant1/images/Facebook.png" class="social-icons img-fluid image_on"><img src="${assetsUrl}/templates/restaurant1/images/fb-hover.png" class="social-icons img-fluid image_off"></a><a id="hom-3" href="#"><img src="${assetsUrl}/templates/restaurant1/images/Linkedin.png" class="social-icons img-fluid image_on"><img src="${assetsUrl}/templates/restaurant1/images/linkedin-hover.png" class="social-icons img-fluid image_off"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <p class="copyright-text">© 2020 SiteSeed. All Rights Reserved.</p>
                    </div>
                </div>
            </div><!-- /.container -->
        </footer>`
    })

    // =====================================================================
};