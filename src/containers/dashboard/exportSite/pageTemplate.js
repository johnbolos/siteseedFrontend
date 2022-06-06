import React from "react";

export default class PageTemplate extends React.Component {
	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(null);
	}
	async getAllFileForWp() {
		const {footerJSON, headerJSON, socialJSON, siteName} = this.props;
		const themeName = `${siteName} By SiteSeed`;
		const logoWidth = "150";
		const logoHeight = "30";
		let headerMenu = "",
			headerUlClass = "",
			headerLiClass;
		headerJSON.map((h, index) => {
			headerUlClass = h.ul_class || "";
			let x = h.menuItems;
			headerLiClass = x.menu_li_class || false;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace("\\", "")
				: x.menu_name
				? x.menu_name
				: `Header-${index}`;
			let menuLink = x.menu_link || "#";
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";

			headerMenu =
				headerMenu +
				`
			wp_update_nav_menu_item($menu_id, 0, array(
			'menu-item-title' =>  __('${menuIcon}'),
    	'menu-item-url' => home_url( '${menuLink}' ), 
    	'menu-item-status' => 'publish',
			'menu-item-classes' =>'${menuLiClass}',
			'menu-item-xfn' =>'${menuAClass}'));`;
		});

		let footerMenu = "",
			footerUlClass,
			footerLiClass;
		footerJSON.map((f, index) => {
			footerUlClass = f.ul_class || "";
			let x = f.menuItems;
			footerLiClass = x.menu_li_class || false;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace("\\", "")
				: x.menu_name
				? x.menu_name
				: `Footer-${index}`;
			let menuLink = x.menu_link || "#";
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";

			footerMenu =
				footerMenu +
				`
			wp_update_nav_menu_item($footer_menu_id, 0, array(
			'menu-item-title' =>  __('${menuIcon}'),
    		'menu-item-url' => home_url( '${menuLink}' ), 
    		'menu-item-status' => 'publish',
			'menu-item-classes' =>'${menuLiClass}',
			'menu-item-xfn' =>'${menuAClass}'));`;
		});

		let socialMenu = "",
			socialUlClass,
			socialLiClass;
		socialJSON.map((s, index) => {
			socialUlClass = s.ul_class || "";
			let x = s.menuItems;
			socialLiClass = x.menu_li_class || false;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace("\\", "")
				: x.menu_name
				? x.menu_name
				: `Social-${index}`;
			let menuLink = x.menu_link || "#";
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";

			socialMenu =
				socialMenu +
				`
			wp_update_nav_menu_item($social_menu_id, 0, array(
			'menu-item-title' =>  __('${menuIcon}'),
    		'menu-item-url' => home_url( '${menuLink}' ), 
    		'menu-item-status' => 'publish',
			'menu-item-classes' =>'${menuLiClass}',
			'menu-item-xfn' =>'${menuAClass}'));`;
		});

		const pageNotFound = `<?php get_header(); ?>
<div id="primary" class="content-area fullwidth">
    <main id="main" class="site-main" role="main">
        <section class="error-404 not-found">
            <span class="error-404-text">404</span>
                <h1 class="page-title">
                    <?php _e( 'Oops! That page can&rsquo;t be found.', '${themeName}' ); ?>
                </h1>
            <div class="page-content">
                <p>
                    <?php _e( 'It looks like nothing was found at this location.', '${themeName}' ); ?>
                </p>
            </div><!-- .page-content -->
        </section><!-- .error-404 -->
    </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>`;

		const singlePage = `<?php
get_header();
the_post(); ?>
<div class="container-fluid p-0">
<section class="page-wrapper">
	<div class="container">
		<div id="content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="row">
			   <div>
					<div class="col-lg-12">
					<h3><a title="<?php the_title_attribute(); ?>" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					<?php if(is_page() || is_singular() || is_home()) { the_content(); } else { the_excerpt(); } ?>
					</div>
				</div>
				<div class="clearfix"></div>
				<hr>
			</div>
		</div>
	</div>
</section>
<?php get_footer(); ?>
</div>`;

		const singlePost = `<?php get_header();

/* Start the Loop */
while ( have_posts() ) :
	the_post();
?>

<div class="container-fluid p-0">
<article id="post-<?php the_ID(); ?>" <?php post_class('container'); ?>>
	<header class="entry-header alignwide">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before'   => '<nav class="page-links" aria-label="' . esc_attr__( 'Page', '${themeName}' ) . '">',
				'after'    => '</nav>',
				/* translators: %: page number. */
				'pagelink' => esc_html__( 'Page %', '${themeName}' ),
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer default-max-width">
	</footer><!-- .entry-footer -->


	<?php
	if ( is_attachment() ) {
		// Parent post navigation.
		the_post_navigation(
			array(
				/* translators: %s: parent post link. */
				'prev_text' => sprintf( __( '<span class="meta-nav">Published in</span><span class="post-title">%s</span>', '${themeName}' ), '%title' ),
			)
		);
	}

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
?>

</article><!-- #post-<?php the_ID(); ?> -->
<?php endwhile;  // End of the loop.

get_footer();?>
	</div>`;

		const siteBrand = `<?php

$blog_info    = get_bloginfo( 'name' );
$description  = get_bloginfo( 'description', 'display' );
$show_title   = ( true === get_theme_mod( 'display_title_and_tagline', false ) );
$header_class = $show_title ? 'site-title' : 'screen-reader-text';
$header_class_text = (true === $args['data']['is-mobile']) ? 'site-title-a-mob' : 'site-title-a';
$description_class_text = (true === $args['data']['is-mobile']) ? 'site-description-mob' : 'site-description';
?>

<?php if (has_custom_logo()) : ?>
	<?php the_custom_logo(); ?>
<?php endif; ?>

<div class="site-branding">
	<?php if ( $blog_info  && $show_title ) : ?>
	<h2 class="<?php echo esc_attr( $header_class ); ?>" style="max-height: 35px;font-size: 35px;"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="<?php echo esc_attr( $header_class_text ); ?>"><?php echo esc_html( $blog_info ); ?></a></h2>
	<?php endif; ?>

	<?php if ( $description  && $show_title ) : ?>
		<p class="<?php echo esc_attr( $description_class_text ); ?>" style="margin-bottom: 0px;font-size: 13px;line-height: 15px;">
			<?php echo $description; // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</p>
	<?php endif; ?>
</div><!-- .site-branding -->`;

		const indexFile = `<?php get_header(); ?>
<?php get_footer(); ?>`;
		let primaryMenu =
			headerJSON.length > 0
				? `'primary'   		=> __('Primary menu', '${themeName}'),`
				: "";
		let secondaryMenu =
			footerJSON.length > 0
				? `'secondary' 		=> __('Footer Menu', '${themeName}'),`
				: "";
		let socialLinksMenu =
			socialJSON.length > 0
				? `'social'    		=> __('Social Links Menu', '${themeName}'),`
				: "";
		let headerMenuForGivenTheme =
			headerJSON.length > 0
				? `$menuname = 'Header Menu For ${themeName}';
	$menu_exists = wp_get_nav_menu_object( $menuname );

	if(!$menu_exists) {
		$menu_id = wp_create_nav_menu($menuname);
		${headerMenu}

		$locations['primary'] = $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	} else {
		$locations['primary'] = $menu_exists->term_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}`
				: "";

		let secondaryMenuForGivenTheme =
			footerJSON.length > 0
				? `$footermenuname = 'Footer Menu For ${themeName}';
	$footer_menu_exists = wp_get_nav_menu_object( $footermenuname );

	if(!$footer_menu_exists) {
		$footer_menu_id = wp_create_nav_menu($footermenuname);
		${footerMenu}

		$locations['secondary'] = $footer_menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	} else {
		$locations['secondary'] = $footer_menu_exists->term_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}`
				: "";

		let socialLinksMenuForGivenTheme =
			socialJSON.length > 0
				? `$socialmenuname = 'Social Menu For ${themeName}';
	$social_menu_exists = wp_get_nav_menu_object( $socialmenuname );

	if(!$social_menu_exists) {
		$social_menu_id = wp_create_nav_menu($socialmenuname);
		${socialMenu}

		$locations['social'] = $social_menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	} else {
		$locations['social'] = $social_menu_exists->term_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}`
				: "";
		const functionTxt = `<?php
               
function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
} 
add_action('get_header', 'remove_admin_login_header');

/**
 * Add custom class on anchor tag
 */
function add_menu_link_class($atts, $item, $args)
{
    if($item->xfn != '') {
		 $atts['class'] = $item->xfn;
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);

function change_link_to_heading($menu, $args) {
	if($menu && isset($args->replace_li) !='') 
	{
		$str = '/li/';
    	$replace = $args->replace_li;
    	$menu = preg_replace($str, $replace, $menu );   
		  print_r($menu);
	}
    return $menu;  
}

add_filter('wp_nav_menu','change_link_to_heading',1,3); 

function wpb_custom_new_menu() {
     register_nav_menus(
		 array(
        	${primaryMenu}
        	${secondaryMenu}
        	${socialLinksMenu}
    	)
	);
}
add_action( 'after_setup_theme', 'wpb_custom_new_menu' );

/**
* Add support for core custom logo.
*
* @link https://codex.wordpress.org/Theme_Logo
*/
	$logo_width  = ${logoWidth};
	$logo_height = ${logoHeight};

	add_theme_support(
		'custom-logo',
		array(
				'height'               => $logo_height,
				'width'                => $logo_width,
				'flex-width'           => true,
				'flex-height'          => true,
			)
		);

function mytheme_setup() {
        $installed = get_option('${themeName}_installed');
        if (!$installed) {
			$homepage = array(
            'post_type'    => 'page',
            'post_title'    => 'Front Page',
            'post_content'  => '',
            'post_status'   => 'publish',
            'post_author'   => 1,
			'post_name' => 'Front Page'
        ); 
        $homepage_id =  wp_insert_post( $homepage );
		
        update_post_meta($homepage_id, '_wp_page_template', 'page-templates/front-page.php');

		update_option( 'page_on_front', $homepage_id );
		update_option( 'show_on_front', 'page' );
        update_option('${themeName}_installed', true);
		 setMenu();
        }
    }
add_action( 'after_switch_theme', 'mytheme_setup' );

function setMenu() {
  ${headerMenuForGivenTheme}

  ${secondaryMenuForGivenTheme}

  ${socialLinksMenuForGivenTheme}
	
}

function siteseed_admin_notices() {
	echo '<div class="updated notice notice-success notice-alt is-dismissible"><p><strong>Activated</strong>: Welcome! Thank you for choosing  ${themeName}!!!</p></div>';
}

function siteseed_one_activation_admin_notice() {
    global $pagenow;
    if ( is_admin() && ('themes.php' == $pagenow) && isset( $_GET['activated'] ) ) {
        add_action( 'admin_notices', 'siteseed_admin_notices' );
    }
}

add_action( 'load-themes.php',  'siteseed_one_activation_admin_notice'  );

	function register( $wp_customize ) {
		// Add "display_title_and_tagline" setting for displaying the site-title & tagline.
			$wp_customize->add_setting(
				'display_title_and_tagline',
				array(
					'capability'        => 'edit_theme_options',
					'default'           => false,
				)
			);

			// Add control for the "display_title_and_tagline" setting.
			$wp_customize->add_control(
				'display_title_and_tagline',
				array(
					'type'    => 'checkbox',
					'section' => 'title_tagline',
					'label'   => esc_html__( 'Display Site Title & Tagline', '${themeName}' ),
				)
			);
	}
add_action( 'customize_register', 'register', 11 );
add_theme_support( 'title-tag' );`;
		return {
			pageNotFound,
			singlePage,
			singlePost,
			siteBrand,
			indexFile,
			functionTxt,
			headerUlClass,
			headerLiClass,
			footerUlClass,
			footerLiClass,
			socialUlClass,
			socialLiClass,
		};
	}
	async getAllFileForShopify() {
		const {
			footerJSON,
			headerJSON,
			socialJSON,
			sectionTemplate,
			contentForIndex,
			cssJSON,
			siteName,
			templateName,
		} = this.props;

		const themeName = `${siteName} By SiteSeed`;
		let header_li_class = [],
			header_a_class = [],
			header_block_obj = {},
			header_block_order = [];
		headerJSON.map((h, index) => {
			let x = h.menuItems;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace(/"/g, "'")
				: x.menu_name
				? x.menu_name
				: `Header-${index}`;
			let c = {
				type: "content",
				settings: {
					header_icon_img: menuIcon,
					header_link: x.menu_link.replaceAll("/", "/") || "/#",
				},
			};
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";
			header_li_class.push(menuLiClass);
			header_a_class.push(menuAClass);
			header_block_obj = {...header_block_obj, [`header-${index}`]: {...c}};
			header_block_order.push(`header-${index}`);
			return header_block_obj;
		});
		header_li_class = header_li_class.join(",");
		header_a_class = header_a_class.join(",");

		let footer_li_class = [],
			footer_a_class = [],
			footer_block_obj = {},
			footer_block_order = [];
		footerJSON.map((f, index) => {
			let x = f.menuItems;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace(/"/g, "'")
				: x.menu_name
				? x.menu_name
				: `Footer-${index}`;
			let c = {
				type: "content",
				settings: {
					footer_icon_img: menuIcon,
					footer_link: x.menu_link.replaceAll("/", "/") || "/#",
				},
			};
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";
			footer_li_class.push(menuLiClass);
			footer_a_class.push(menuAClass);
			footer_block_obj = {...footer_block_obj, [`footer-${index}`]: {...c}};
			footer_block_order.push(`footer-${index}`);
			return footer_block_obj;
		});
		footer_li_class = footer_li_class.join(",");
		footer_a_class = footer_a_class.join(",");

		let social_li_class = [],
			social_a_class = [];
		socialJSON.map((s, index) => {
			let x = s.menuItems;
			let menuIcon = x.menu_icon
				? x.menu_icon.replace(/"/g, "'")
				: x.menu_name
				? x.menu_name
				: `Social-${index}`;
			let c = {
				type: "custom",
				settings: {
					social_icon_img: menuIcon,
					social_link: x.menu_link.replaceAll("/", "/") || "/#",
				},
			};
			let menuLiClass = x.menu_li_class || "";
			let menuAClass = x.menu_a_class || "";
			social_li_class.push(menuLiClass);
			social_a_class.push(menuAClass);
			footer_block_obj = {...footer_block_obj, [`social-${index}`]: {...c}};
			footer_block_order.push(`social-${index}`);
			return footer_block_obj;
		});

		social_li_class.join(",");
		social_a_class.join(",");

		const pageNotFound = `
<section class="error-404 not-found">
   <span class="error-404-text">404</span>
            <h1 class="page-title">
                Oops! That page can't be found.
            </h1>
         <div class="page-content">
             <p>
                It looks like nothing was found at this location.
             </p>
         </div>
</section>`;

		const articleTemplate = `<div class="container">
{%- comment -%}
  Comments may not appear right after they are submitted, either to be checked by Shopify's spam filter
  or to await moderation. When a comment is submitted, the browser is redirected to a page
  that includes the new comment id in its URL.
    Example: http://shopname.myshopify.com/blogs/news/2022072-my-post?comment=3721372
{%- endcomment -%}

  {%- assign number_of_comments = article.comments_count -%}


<article class="page-width" aria-labelledby="title-0">
  <div class="grid">
    <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
      {% section 'article-template' %}
    </div>
  </div>
</article>

{% if blog.comments_enabled? %}
  {% if number_of_comments > 0 %}
    <hr aria-hidden="true">
    <div class="page-width">
      <div class="grid">
        <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
          <h2 class="h3">{{ 'blogs.comments.comments_with_count' | t: count: number_of_comments }}</h2>

          {% paginate article.comments by 5 %}

            {% comment %}
              #comments is required, it is used as an anchor link by Shopify.
            {% endcomment %}
          
			<div class="blog-post-details">
  				{% if comment.status == 'pending' %}
                    {% include 'comment', comment: comment %}
                {% endif %}

                {% for comment in article.comments %}
                    {% include 'comment', comment: comment %}
                {% endfor %}
          
			</div>
              {%- if paginate.pages > 1 -%}
                {% include 'pagination', paginate: paginate %}
              {%- endif -%}

            </div>
          {% endpaginate %}
        </div>
      </div>
    </div>
  {% endif %}

  <hr aria-hidden="true">
  <div class="page-width">
    <div class="grid">
      <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
        <div class="comment-form form-vertical">
          {% form 'new_comment', article %}

            {%- assign formId = 'CommentForm' -%}

            <h2 class="h3">{{ 'blogs.comments.title' | t }}</h2>

            {%- assign post_message = 'blogs.comments.success' -%}
            {%- if blog.moderated? and comment.status == 'pending' -%}
              {%- assign post_message = 'blogs.comments.success_moderated' -%}
            {%- elsif comment.status == 'unapproved' or comment.status == 'spam' -%}
              {%- assign post_message = 'blogs.comments.unapproved' -%}
            {%- endif -%}

            {% include 'form-status', form: form, form_id: formId, success_message: post_message %}

            <div class="grid">

              <div class="grid__item medium-up--one-half">
                <label for="{{ formId }}-author">{{ 'blogs.comments.name' | t }}</label>
                <input type="text" name="comment[author]" id="{{ formId }}-author" class="input-full{% if form.errors contains 'author' %} input--error{% endif %}" value="{{ form.author }}"{% if form.errors contains 'author' %} aria-invalid="true" aria-describedby="{{ formId}}-author-error"{% endif %}>
                {% if form.errors contains 'author' %}
                  <span id="{{ formId}}-author-error" class="input-error-message">
                    <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                    <span style="color:#d20000;">{{ 'blogs.comments.name' | t }} {{ form.errors.messages['author'] }}.</span>
                  </span>
                {% endif %}
              </div>

              <div class="grid__item medium-up--one-half">
                <label for="{{ formId }}-email">{{ 'blogs.comments.email' | t }}</label>
                <input type="email" name="comment[email]" id="{{ formId }}-email" class="input-full{% if form.errors contains 'email' %} input--error{% endif %}" value="{{ form.email }}" autocorrect="off" autocapitalize="off" {% if form.errors contains 'email' %} aria-invalid="true" aria-describedby="{{ formId}}-email-error"{% endif %}>
                {% if form.errors contains 'email' %}
                  <span id="{{ formId}}-email-error" class="input-error-message">
                    <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                    <span style="color:#d20000;">{{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}.</span>
                  </span>
                {% endif %}
              </div>

              <div class="grid__item">
                <label for="{{ formId }}-body">{{ 'blogs.comments.message' | t }}</label>
                <textarea name="comment[body]" id="{{ formId }}-body" class="input-full{% if form.errors contains 'body' %} input--error{% endif %}"{% if form.errors contains 'body' %} aria-invalid="true" aria-describedby="{{ formId}}-body-error"{% endif %}>{{ form.body }}</textarea>
                {% if form.errors contains 'body' %}
                  <span id="{{ formId}}-body-error" class="input-error-message">
                    <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                    <span style="color:#d20000;">{{ 'blogs.comments.message' | t }} {{ form.errors.messages['body'] }}.</span>
                  </span>
                {% endif %}
              </div>

            </div>

            {% if blog.moderated? %}
              <p class="fine-print">{{ 'blogs.comments.moderated' | t }}</p>
            {% endif %}

            <input type="submit" class="btn" value="{{ 'blogs.comments.post' | t }}">
          {% endform %}
        </div>
      </div>
    </div>
  </div>
{% endif %}

<div class="text-center return-link-wrapper page-width">
  <button onclick="window.location.href='{{ blog.url }}'" style="width:fit-content;">
    {% include 'icon-arrow-left' %}
    {{ 'blogs.article.back_to_blog' | t: title: blog.title }}
  </button>
</div>

</div>
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Article",
  "articleBody": {{ article.content | strip_html | json }},
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": {{ shop.url | append: page.url | json }}
  },
  "headline": {{ article.title | json }},
  {% if article.excerpt != blank %}
    "description": {{ article.excerpt | strip_html | json }},
  {% endif %}
  {% if article.image %}
    {% assign image_size = article.image.width | append: 'x' %}
    "image": [
      {{ article | img_url: image_size | prepend: "https:" | json }}
    ],
  {% endif %}
  "datePublished": {{ article.published_at | date: '%Y-%m-%dT%H:%M:%SZ' | json }},
  "dateCreated": {{ article.created_at | date: '%Y-%m-%dT%H:%M:%SZ' | json }},
  "author": {
    "@type": "Person",
    "name": {{ article.author | json }}
  },
  "publisher": {
    "@type": "Organization",
    {% if page_image %}
      {% assign image_size = page_image.width | append: 'x' %}
      "logo": {
        "@type": "ImageObject",
        "height": {{ page_image.height | json }},
        "url": {{ page_image | img_url: image_size | prepend: "https:" | json }},
        "width": {{ page_image.width | json }}
      },
    {% endif %}
    "name": {{ shop.name | json }}
  }
}
</script>`;

		const blogTemplate = `{% comment %}
  The contents of the blog.liquid template can be found in /sections/blog-template.liquid
{% endcomment %}

<div class="container">
{% section 'blog-template' %}
</div>
`;

		const cartTemplate = `{% comment %}
  The contents of the cart.liquid template can be found in /sections/cart-template.liquid
{% endcomment %}

<div class="container">
{% section 'cart-template' %}
</div>
`;

		const collectionTemplate = `{% comment %}
  The contents of the collection.liquid template can be found in /sections/collection-template.liquid
{% endcomment %}

<div class="container">
 {%section 'swatch' %}
{% section 'collection-template' %}
</div>
`;

		const customerAccountTemplate = `<div class="container">
  <div class="section-header text-center">
    <h1>{{ 'customer.account.title' | t }}</h1>
    {{ 'layout.customer.log_out' | t | customer_logout_link }}
  </div>

  <div class="grid myaccount container-fluid">
    <div class="grid__item myaccount__order-history">
      <h2>{{ 'customer.orders.title' | t }}</h2>

      {% paginate customer.orders by 20 %}
        {% if customer.orders.size != 0 %}

          <table class="responsive-table">
            <thead>
              <tr>
                <th scope="col">{{ 'customer.orders.order_number' | t }}</th>
                <th scope="col">{{ 'customer.orders.date' | t }}</th>
                <th scope="col">{{ 'customer.orders.payment_status' | t }}</th>
                <th scope="col">{{ 'customer.orders.fulfillment_status' | t }}</th>
                <th scope="col">{{ 'customer.orders.total' | t }}</th>
              </tr>
            </thead>
            <tbody>
              {% for order in customer.orders %}
                <tr>
                  <td data-label="{{ 'customer.orders.order_number' | t }}" scope="row">
                    <a href="{{ order.customer_url }}"  aria-label="{{ 'customer.orders.order_number_link' | t: number: order.name }}">{{ order.name }}</a>
                  </td>
                  <td data-label="{{ 'customer.orders.date' | t }}">{{ order.created_at | time_tag: format: 'date' }}</td>
                  <td data-label="{{ 'customer.orders.payment_status' | t }}">{{ order.financial_status_label }}</td>
                  <td data-label="{{ 'customer.orders.fulfillment_status' | t }}">{{ order.fulfillment_status_label }}</td>
                  <td data-label="{{ 'customer.orders.total' | t }}">{{ order.total_price | money }}</td>
                </tr>
              {% endfor %}
            </tbody>
          </table>

        {% else %}

          <p>{{ 'customer.orders.none' | t }}</p>

        {% endif %}
        {%- if paginate.pages > 1 -%}
          {% include 'pagination', paginate: paginate %}
        {%- endif -%}
      {% endpaginate %}
    </div>
    <div class="grid__item myaccount__account-details">
      <h2>{{ 'customer.account.details' | t }}</h2>

      {{ customer.default_address | format_address }}

      <button onCLick ="window.location.href='{{ routes.account_addresses_url }}'"> {{ 'customer.account.view_addresses' | t }} ({{ customer.addresses_count }})</button>
    </div>
  </div>
</div>`;

		const customerActivateAccountTemplate = `<div class="page-width text-center">
  <div class="grid">
    <div class="grid__item medium-up--one-half medium-up--push-one-quarter">
      <div class="section-header">
        <h1>{{ 'customer.activate_account.title' | t }}</h1>
        <p>{{ 'customer.activate_account.subtext' | t }}</p>
      </div>

      <div class="form-vertical">
        {% form 'activate_customer_password' id:'activate_customer_password'  %}

          {%- if form.errors -%}
            <div class="form-message form-message--error">
              {{ form.errors | default_errors }}
            </div>
          {%- endif -%}

          <label for="CustomerPassword" class="label--hidden">{{ 'customer.activate_account.password' | t }}</label>
          <input type="password" value="" name="customer[password]" id="CustomerPassword" placeholder="{{ 'customer.activate_account.password' | t }}">

          <label for="CustomerPasswordConfirmation" class="label--hidden">{{ 'customer.activate_account.password_confirm' | t }}</label>
          <input type="password" value="" name="customer[password_confirmation]" id="CustomerPasswordConfirmation" placeholder="{{ 'customer.activate_account.password_confirm' | t }}">

          <input type="submit" class="btn" value="{{ 'customer.activate_account.submit' | t }}">
          <div><input type="submit" name="decline" value="{{ 'customer.activate_account.cancel' | t }}"></div>
        {% endform %}
      </div>
    </div>
  </div>
</div>`;

		const customerAddressTemplate = `<div class="container">
{% paginate customer.addresses by 5 %}

<div class="page-width text-center">
  <header class="section-header">
    <h1>{{ 'customer.addresses.title' | t }}</h1>
    <p><a href="{{ routes.account_url }}">{{ 'customer.account.return' | t }}</a></p>
    <p>
      <button type="button" class="btn address-new-toggle" id="AddressNewButton" aria-expanded="false" aria-owns="AddressNewForm">{{ 'customer.addresses.add_new' | t }}</button>
    </p>
  </header>
</div>

<div class="page-width">
  <div class="grid">
    <div class="grid__item medium-up--two-thirds medium-up--push-one-sixth">
      {% comment %}
        Add address form, hidden by default
      {% endcomment %}
      <div id="AddressNewForm" class="form-vertical hide">
        {% form 'customer_address', customer.new_address %}
          <h2>{{ 'customer.addresses.add_new' | t }}</h2>

          <div class="grid">
            <div class="grid__item medium-up--one-half" id="customer_address">
              <label for="AddressFirstNameNew">{{ 'customer.addresses.first_name' | t }}</label>
              <input type="text" id="AddressFirstNameNew" name="address[first_name]" value="{{ form.first_name }}" autocomplete="given-name">
            </div>

            <div class="grid__item medium-up--one-half" id="customer_address">
              <label for="AddressLastNameNew">{{ 'customer.addresses.last_name' | t }}</label>
              <input type="text" id="AddressLastNameNew" name="address[last_name]" value="{{ form.last_name }}" autocomplete="family-name">
            </div>
          </div>

          <div class="grid">
            <div class="grid__item"  id="customer_address">
              <label for="AddressCompanyNew">{{ 'customer.addresses.company' | t }}</label>
              <input type="text" id="AddressCompanyNew" name="address[company]" value="{{ form.company }}" autocomplete="organization">

              <label for="AddressAddress1New">{{ 'customer.addresses.address1' | t }}</label>
              <input type="text" id="AddressAddress1New" name="address[address1]" value="{{ form.address1 }}" autocomplete="street-address address-line1">

              <label for="AddressAddress2New">{{ 'customer.addresses.address2' | t }}</label>
              <input type="text" id="AddressAddress2New" name="address[address2]" value="{{ form.address2 }}" autocomplete="street-address address-line2">
            </div>
          </div>

          <div class="grid">
            <div class="grid__item medium-up--one-half"  id="customer_address">
              <label for="AddressCityNew">{{ 'customer.addresses.city' | t }}</label>
              <input type="text" id="AddressCityNew" name="address[city]" value="{{ form.city }}" autocomplete="address-level2">
            </div>

            <div class="grid__item medium-up--one-half"  id="customer_address">
              <label for="AddressCountryNew">{{ 'customer.addresses.country' | t }}</label>
              <select id="AddressCountryNew" name="address[country]" data-default="{{ form.country }}" autocomplete="country">{{ all_country_option_tags }}</select>
            </div>
          </div>

          <div id="AddressProvinceContainerNew" style="display:none" >
            <label for="AddressProvinceNew" id="customer-address-label">{{ 'customer.addresses.province' | t }}</label>
            <select id="AddressProvinceNew" name="address[province]" data-default="{{ form.province }}" autocomplete="address-level1"></select>
          </div>

          <label for="AddressZipNew" id="customer-address-label">{{ 'customer.addresses.zip' | t }}</label>
          <input type="text" id="AddressZipNew" name="address[zip]" value="{{ form.zip }}" autocapitalize="characters" autocomplete="postal-code">

          <label for="AddressPhoneNew" id="customer-address-label">{{ 'customer.addresses.phone' | t }}</label>
          <input type="tel" id="AddressPhoneNew" name="address[phone]" value="{{ form.phone }}" autocomplete="phone">

          {{ form.set_as_default_checkbox }}
          <label for="address_default_address_new" id="customer-address-label">{{ 'customer.addresses.set_default' | t }}</label>

          <div><input type="submit" class="btn" value="{{ 'customer.addresses.add' | t }}"></div>
          <div><button type="button" class="text-link address-new-toggle">{{ 'customer.addresses.cancel' | t }}</button></div>

        {% endform %}
        <hr>
      </div>

      {% comment %}
        List all customer addresses with a unique edit form.
        Also add pagination in case they have a large number of addresses
      {% endcomment %}
	<div class="page-width">
  		<div class="grid">      
        {% for address in customer.addresses %}
            <div class="address text-center">
              {% if address == customer.default_address %}
                <h2 class="h4">{{ 'customer.addresses.default' | t }}</h2>
              {% endif %}

              {{ address | format_address }}

                  <button
                    id="EditFormButton_{{ address.id }}"
                    type="button"
                    class="btn btn--small address-edit-toggle"
                    data-form-id="{{ address.id }}"
                    aria-owns="EditAddress_{{ address.id }}"
                    aria-expanded="false"
                  >
                    {{ 'customer.addresses.edit' | t }}
                  </button>
                  <button
                    type="button"
                    class="btn btn--secondary btn--small address-delete"
                    data-target="{{ address.url }}"
                    data-confirm-message="{{ 'customer.addresses.delete_confirm' | t }}"
                  >
                    {{ 'customer.addresses.delete' | t }}
                  </button>
            </div>

            <div id="EditAddress_{{ address.id }}" class="form-vertical hide">
              {% form 'customer_address', address %}

                <h2>{{ 'customer.addresses.edit_address' | t }}</h2>

                <div class="grid">
                  <div class="grid__item medium-up--one-half" id="customer_address">
                    <label for="AddressFirstName_{{ form.id }}">{{ 'customer.addresses.first_name' | t }}</label>
                    <input type="text" id="AddressFirstName_{{ form.id }}" name="address[first_name]" value="{{ form.first_name }}" autocomplete="given-name">
                  </div>

                  <div class="grid__item medium-up--one-half" id="customer_address">
                    <label for="AddressLastName_{{ form.id }}">{{ 'customer.addresses.last_name' | t }}</label>
                    <input type="text" id="AddressLastName_{{ form.id }}" name="address[last_name]" value="{{ form.last_name }}" autocomplete="family-name">
                  </div>
                </div>

                <label for="AddressCompany_{{ form.id }}" id="customer-address-label">{{ 'customer.addresses.company' | t }}</label>
                <input type="text" id="AddressCompany_{{ form.id }}" name="address[company]" value="{{ form.company }}" autocomplete="organization">

                <label for="AddressAddress1_{{ form.id }}" id="customer-address-label">{{ 'customer.addresses.address1' | t }}</label>
                <input type="text" id="AddressAddress1_{{ form.id }}" name="address[address1]" value="{{ form.address1 }}" autocomplete="street-address address-line1">

                <label for="AddressAddress2_{{ form.id }}" id="customer-address-label">{{ 'customer.addresses.address2' | t }}</label>
                <input type="text" id="AddressAddress2_{{ form.id }}" name="address[address2]" value="{{ form.address2 }}" autocomplete="street-address address-line2">

                <div class="grid">
                  <div class="grid__item medium-up--one-half" id="customer_address">
                    <label for="AddressCity_{{ form.id }}">{{ 'customer.addresses.city' | t }}</label>
                    <input type="text" id="AddressCity_{{ form.id }}" name="address[city]" value="{{ form.city }}" autocomplete="address-level2">
                  </div>
                  <div class="grid__item medium-up--one-half" id="customer_address">
                    <label for="AddressCountry_{{ form.id }}">{{ 'customer.addresses.country' | t }}</label>
                    <select id="AddressCountry_{{ form.id }}" class="address-country-option" data-form-id="{{ form.id }}" name="address[country]" data-default="{{ form.country }}" autocomplete="country">{{ all_country_option_tags }}</select>
                  </div>
                </div>

                <div id="AddressProvinceContainer_{{ form.id }}" style="display:none">
                  <label for="AddressProvince_{{ form.id }}" id="customer-address-label">{{ 'customer.addresses.province' | t }}</label>
                  <select id="AddressProvince_{{ form.id }}" name="address[province]" data-default="{{ form.province }}" autocomplete="address-level1"></select>
                </div>

                <div class="grid">
                  <div class="grid__item" id="customer_address">
                    <label for="AddressZip_{{ form.id }}">{{ 'customer.addresses.zip' | t }}</label>
                    <input type="text" id="AddressZip_{{ form.id }}" name="address[zip]" value="{{ form.zip }}" autocapitalize="characters" autocomplete="postal-code">
                  </div>

                  <div class="grid__item" id="customer_address">
                    <label for="AddressPhone_{{ form.id }}">{{ 'customer.addresses.phone' | t }}</label>
                    <input type="tel" id="AddressPhone_{{ form.id }}" name="address[phone]" value="{{ form.phone }}" autocomplete="phone">
                  </div>
                </div>

                <div class="text-center">
                  {{ form.set_as_default_checkbox }}
                  <label for="address_default_address_{{ form.id }}" id="customer-address-label">{{ 'customer.addresses.set_default' | t }}</label>

                  <div><input type="submit" class="btn" value="{{ 'customer.addresses.update' | t }}"></div>
                  <div><button type="button" class="text-link address-edit-toggle" data-form-id="{{ form.id }}">{{ 'customer.addresses.cancel' | t }}</button></div>
                </div>

              {% endform %}
              <hr>
            </div>
        {% endfor %}
      </div>
     </div>
            

      {%- if paginate.pages > 1 -%}
        {% include 'pagination', paginate: paginate %}
      {%- endif -%}
    </div>
  </div>
      

</div>
{% endpaginate %}
</div>`;

		const customerLoginTemplate = `<div class="container">
  <div class="grid">

    <div class="grid__item medium-up--one-half medium-up--push-one-quarter">
      <div class="form-message form-message--success hide" id="ResetSuccess" tabindex="-1">
        {{ 'customer.recover_password.success' | t }}
      </div>

      <div id="CustomerLoginForm" class="form-vertical">

        <h1 id="LoginHeading" class="text-center">{{ 'customer.login.title' | t }}</h1>

        {% form 'customer_login', novalidate: 'novalidate' %}

          {%- if form.errors -%}
            <div class="form-message form-message--error">
              <h2 class="h3 form-message__title " tabindex="-1" data-form-status>{{ 'contact.form.error_heading' | t }}</h2>
              {{ form.errors | default_errors }}
            </div>
          {%- endif -%}

          <label for="CustomerEmail">{{ 'customer.login.email' | t }}</label>
          <input
            type="email"
            name="customer[email]"
            id="CustomerEmail"
            autocomplete="email"
            autocorrect="off"
            autocapitalize="off"
            {%- if form.errors contains 'form' -%}
              class="input--error"
              aria-invalid="true"
            {%- endif -%}
            >

          {% if form.password_needed %}
            <label for="CustomerPassword">{{ 'customer.login.password' | t }}</label>
            <input
              type="password"
              value=""
              name="customer[password]"
              id="CustomerPassword"
              {%- if form.errors contains 'form' -%}
                class="input--error"
                aria-invalid="true"
              {%- endif -%}
            >
          {% endif %}

          <div class="text-center">
            {% if form.password_needed %}
              <p><a href="#recover" id="RecoverPassword">{{ 'customer.login.forgot_password' | t }}</a></p>
            {% endif %}

            <input type="submit" class="btn" value="{{ 'customer.login.sign_in' | t }}">

            <p>
              {{ 'layout.customer.create_account' | t | customer_register_link }}
            </p>
          </div>

        {% endform %}
      </div>

      <div id="RecoverPasswordForm" class="hide">

        <div class="text-center">
          <h2 id="RecoverHeading">{{ 'customer.recover_password.title' | t }}</h2>
          <p>{{ 'customer.recover_password.subtext' | t }}</p>
        </div>

        <div class="form-vertical">
          {% form 'recover_customer_password',id:'recover_customer_password' %}

            {% comment %}
              Add a hidden span to indicate the form was submitted succesfully.
            {% endcomment %}
            {% if form.posted_successfully? %}
              <span class="hide reset-password-success"></span>
            {% endif %}

            <label for="RecoverEmail" id="RecoverEmail">{{ 'customer.recover_password.email' | t }}</label>
            <input
              type="email"
              value=""
              name="email"
              id="RecoverEmail"
              class="input-full{% if form.errors %} input--error{% endif %}"
              autocorrect="off"
              autocapitalize="off"
              {% if form.errors %}
                aria-invalid="true"
                aria-describedby="RecoverEmail-email-error"
              {%- endif -%}
              >
            {%- if form.errors -%}
              <span id="RecoverEmail-email-error" class="input-error-message">
                <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                {% include 'icon-error' %}
                <span>{{ form.errors.messages['form'] }}</span>
              </span>
            {%- endif -%}

            <div class="text-center">
              <p>
                <input type="submit" class="btn" value="{{ 'customer.recover_password.submit' | t }}">
              </p>

              <a href="#LoginHeading" id="HideRecoverPasswordLink">{{ 'customer.recover_password.cancel' | t }}</a>
            </div>
          {% endform %}
        </div>

      </div>

      {% comment %}
        If accounts are set as optional, the following will be shown as an option
        during checkout, not on the default /login page.
      {% endcomment %}
      {% if shop.checkout.guest_login %}
        <div class="text-center">
          <hr class="hr--invisible">
          <h2>{{ 'customer.login.guest_title' | t }}</h2>

          {% form 'guest_login' %}
            <input type="submit" class="btn" value="{{ 'customer.login.guest_continue' | t }}">
          {% endform %}
        </div>
      {% endif %}
    </div>

  </div>
</div>`;

		const customerOrderTemplate = `<div class="container">
  <div class="section-header text-center">
    <h1>{{ 'customer.account.title' | t }}</h1>
    <p><a href="{{ routes.account_url }}">{{ 'customer.account.return' | t }}</a></p>
  </div>

  <div class="grid myaccount">
    <div class="grid__item myaccount__order-history">
      <h2>{{ 'customer.order.title' | t: name: order.name }}</h2>

      {%- assign order_date = order.created_at | time_tag: format: "date_at_time" -%}
      <p>{{ 'customer.order.date_html' | t: date: order_date }}</p>

      {%- if order.cancelled -%}
        <div class="order--cancelled">
          {%- assign cancelled_at = order.cancelled_at | time_tag: format: "date_at_time" -%}
          <p>{{ 'customer.order.cancelled_html' | t: date: cancelled_at }}</p>
          <p>{{ 'customer.order.cancelled_reason' | t: reason: order.cancel_reason_label }}</p>
        </div>
      {%- endif -%}

      <table class="order-table">
        <thead>
          <tr>
            <th scope="col">{{ 'customer.order.product' | t }}</th>
            <th scope="col">{{ 'customer.order.sku' | t }}</th>
            <th class="text-right" scope="col">{{ 'customer.order.price' | t }}</th>
            <th class="text-right" scope="col">{{ 'customer.order.quantity' | t }}</th>
            <th class="text-right" scope="col">{{ 'customer.order.total' | t }}</th>
          </tr>
        </thead>
        <tbody>
          {%- for line_item in order.line_items -%}
            <tr id="{{ line_item.key }}">
              <th class="order-table__product" scope="row" data-label="{{ 'customer.order.product' | t }}">
                <div>
                  {{ line_item.title | link_to: line_item.product.url }}
                  {%- assign property_size = line_item.properties | size -%}
                  {% unless line_item.selling_plan_allocation == nil and property_size == 0 %}
                    <div class="item-props">
                      {% unless line_item.selling_plan_allocation == nil  %}
                        <span class="item-props__property">
                          {{ line_item.selling_plan_allocation.selling_plan.name }}
                        </span>
                      {% endunless %}
                      {% if property_size != 0 %}
                        {% for property in line_item.properties %}
                          {% assign property_first_char = property.first | slice: 0 %}
                          {% if property.last != blank and property_first_char != '_' %}
                            <span class="item-props__property">
                              {{ property.first }}:&nbsp;
                              {%- if property.last contains '/uploads/' -%}
                                <a href="{{ property.last }}">{{ property.last | split: '/' | last }}</a>
                              {%- else -%}
                                {{ property.last }}
                              {%- endif -%}
                            </span>
                          {% endif %}
                        {% endfor %}
                      {% endif %}
                    </div>
                  {% endunless %}
                  {%- if line_item.line_level_discount_allocations != blank -%}
                    <ul class="order-discount order-discount--list order-discount--title" aria-label="{{ 'customer.order.discount' | t }}">
                      {%- for discount_allocation in line_item.line_level_discount_allocations -%}
                        <li class="order-discount__item">
                          {% include 'icon-saletag' %}{{ discount_allocation.discount_application.title }} (-{{ discount_allocation.amount | money }})
                        </li>
                      {%- endfor -%}
                    </ul>
                  {%- endif -%}
                </div>
                {%- if line_item.fulfillment -%}
                  <div class="note">
                    {%- assign created_at = line_item.fulfillment.created_at | time_tag: format: 'date' -%}
                    {{ 'customer.order.fulfilled_at_html' | t: date: created_at }}
                    <div>
                      {%- if line_item.fulfillment.tracking_url -%}
                        <a href="{{ line_item.fulfillment.tracking_url }}">
                          {{ 'customer.order.track_shipment' | t }}
                        </a>
                      {%- endif -%}
                      <div>
                        {{ line_item.fulfillment.tracking_company }}
                        {%- if line_item.fulfillment.tracking_number -%} #{{ line_item.fulfillment.tracking_number }} {%- endif -%}
                      </div>
                    </div>
                  </div>
                {%- endif -%}
              </th>
              <td data-label="{{ 'customer.order.sku' | t }}">{{ line_item.sku }}</td>
              <td class="text-right" data-label="{{ 'customer.order.price' | t }}">
                <dl>
                  {%- if line_item.original_price != line_item.final_price -%}
                    <dt>
                      <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                    </dt>
                    <dd>
                      <s>{{ line_item.original_price | money }}</s>
                    </dd>
                    <dt>
                      <span class="visually-hidden">{{ 'products.product.sale_price' | t }}</span>
                    </dt>
                    <dd>
                      <span class="order-discount">{{ line_item.final_price | money }}</span>
                    </dd>
                  {%- else -%}
                    <dt>
                      <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                    </dt>
                    <dd>
                      {{ line_item.original_price | money }}
                    </dd>
                  {%- endif -%}

                  {%- if line_item.unit_price_measurement -%}
                    <dt>
                      <span class="visually-hidden visually-hidden--inline">{{ 'products.product.unit_price_label' | t }}</span>
                    </dt>
                    <dd>
                      <span class="price-unit-price">
                        {%- capture unit_price_separator -%}
                          <span aria-hidden="true">/</span><span class="visually-hidden">{{ 'general.accessibility.unit_price_separator' | t }}&nbsp;</span>
                        {%- endcapture -%}
                        {%- capture unit_price_base_unit -%}
                          {%- if line_item.unit_price_measurement.reference_value != 1 -%}
                            {{- line_item.unit_price_measurement.reference_value -}}
                          {%- endif -%}
                          {{ line_item.unit_price_measurement.reference_unit }}
                        {%- endcapture -%}

                        <span data-unit-price>{{ line_item.unit_price | money }}</span>{{- unit_price_separator -}}{{- unit_price_base_unit -}}
                      </span>
                    </dd>
                  {%- endif -%}
                </dl>
              </td>
              <td class="text-right" data-label="{{ 'customer.order.quantity' | t }}">{{ line_item.quantity }}</td>
              <td class="text-right" data-label="{{ 'customer.order.total' | t }}">
                {%- if line_item.original_line_price != line_item.final_line_price -%}
                  <dl>
                    <dt>
                      <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                    </dt>
                    <dd>
                      <s>{{ line_item.original_line_price | money }}</s>
                    </dd>
                    <dt>
                      <span class="visually-hidden">{{ 'products.product.sale_price' | t }}</span>
                    </dt>
                    <dd>
                      <span class="order-discount">{{ line_item.final_line_price | money }}</span>
                    </dd>
                  </dl>
                {%- else -%}
                  {{ line_item.original_line_price | money }}
                {%- endif -%}
              </td>
            </tr>
          {%- endfor -%}
        </tbody>
        <tfoot>
          <tr>
            <th class="small--hide" scope="row" colspan="4">{{ 'customer.order.subtotal' | t }}</th>
            <td class="text-right" data-label="{{ 'customer.order.subtotal' | t }}">{{ order.line_items_subtotal_price | money }}</td>
          </tr>

          {%- if order.cart_level_discount_applications != blank -%}
            <tr>
              {%- for discount_application in order.cart_level_discount_applications -%}
                <th class="small--hide" scope="row" colspan="4">
                  {{ 'customer.order.discount' | t }}
                  <span class="order-discount order-discount--title">
                    {% include 'icon-saletag' %}{{- discount_application.title -}}
                  </span>
                </th>
                <td class="text-right" data-label="{{ 'customer.order.discount' | t }}">
                  <div class="order-discount-wrapper">
                    <span class="order-discount order-discount--title text-left medium-up--hide">
                      {% include 'icon-saletag' %}{{- discount_application.title -}}
                    </span>
                    <span class="order-discount">-{{ discount_application.total_allocated_amount | money }}</span>
                  </div>
                </td>
              {%- endfor -%}
            </tr>
          {%- endif -%}

          {%- for shipping_method in order.shipping_methods -%}
            <tr>
              <th class="small--hide" scope="row" colspan="4">{{ 'customer.order.shipping' | t }} ({{ shipping_method.title }})</th>
              <td class="text-right" data-label="{{ 'customer.order.shipping' | t }} ({{ shipping_method.title }})">{{ shipping_method.price | money }}</td>
            </tr>
          {%- endfor -%}

          {%- for tax_line in order.tax_lines -%}
            <tr>
              <th class="small--hide" scope="row" colspan="4">{{ 'customer.order.tax' | t }} ({{ tax_line.title }} {{ tax_line.rate | times: 100 }}%)</th>
              <td class="text-right" data-label="{{ 'customer.order.tax' | t }} ({{ tax_line.title }} {{ tax_line.rate | times: 100 }}%)">{{ tax_line.price | money }}</td>
            </tr>
          {%- endfor -%}

          <tr>
            <th class="small--hide" scope="row" colspan="4">{{ 'customer.order.total' | t }}</th>
            <td class="text-right" data-label="{{ 'customer.order.total' | t }}">{{ order.total_price | money_with_currency }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="grid__item myaccount__account-details">
      <h3>{{ 'customer.order.billing_address' | t }}</h3>

      <p><strong>{{ 'customer.order.payment_status' | t }}:</strong> {{ order.financial_status_label }}</p>

      {{ order.billing_address | format_address }}

      <h3>{{ 'customer.order.shipping_address' | t }}</h3>

      <p><strong>{{ 'customer.order.fulfillment_status' | t }}:</strong> {{ order.fulfillment_status_label }}</p>

      {{ order.shipping_address | format_address }}
    </div>
  </div>
</div>`;

		const customerRegisterTemplate = `<div class="container">
  <div class="grid">
    <div class="grid__item medium-up--one-half medium-up--push-one-quarter">

      <div class="form-vertical">

        <h1 class="text-center">{{ 'customer.register.title' | t }}</h1>

        {%- assign formId = 'RegisterForm' -%}
        {% form 'create_customer', id: formId, novalidate: 'novalidate' %}
          {% include 'form-status', form: form, form_id: formId %}

          <label for="{{ formId }}-FirstName">{{ 'customer.register.first_name' | t }}</label>
          <input type="text" name="customer[first_name]" id="{{ formId }}-FirstName" {% if form.first_name %}value="{{ form.first_name }}"{% endif %} autocomplete="given-name">

          <label for="{{ formId }}-LastName">{{ 'customer.register.last_name' | t }}</label>
          <input type="text" name="customer[last_name]" id="{{ formId }}-LastName" {% if form.last_name %}value="{{ form.last_name }}"{% endif %} autocomplete="family-name">

          <label for="{{ formId }}-email">{{ 'customer.register.email' | t }}</label>
          <input
            type="email"
            name="customer[email]"
            id="{{ formId }}-email"
            class="{% if form.errors contains 'email' %} input--error{% endif %}"
            {% if form.email %} value="{{ form.email }}"{% endif %}
            autocorrect="off"
            autocapitalize="off"
            autocomplete="email"
            aria-required="true"
            {%- if form.errors contains 'email' -%}
              class="input--error"
              aria-invalid="true"
              aria-describedby="{{ formId }}-email-error"
            {%- endif -%}
          >
          {%- if form.errors contains 'email' -%}
            <span id="{{ formId }}-email-error" class="input-error-message">
              <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
              {% include 'icon-error' %}
              <span>{{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}.</span>
            </span>
          {%- endif -%}

          <label for="{{ formId }}-password">{{ 'customer.register.password' | t }}</label>
          <input
            type="password"
            name="customer[password]"
            id="{{ formId }}-password"
            class="{% if form.errors contains 'password' %} input--error{% endif %}"
            aria-required="true"
            {%- if form.errors contains 'password' -%}
              class="input--error"
              aria-invalid="true"
              aria-describedby="{{ formId }}-password-error"
            {%- endif -%}
          >
          {%- if form.errors contains 'password' -%}
            <span id="{{ formId}}-password-error" class="input-error-message">
              {% include 'icon-error' %}
              <span>{{ form.errors.translated_fields['password'] | capitalize }} {{ form.errors.messages['password'] }}.</span>
            </span>
          {%- endif -%}

          <p class="text-center">
            <input type="submit" value="{{ 'customer.register.submit' | t }}" class="btn">
          </p>

        {% endform %}
      </div>
    </div>
  </div>
</div>`;

		const customerResetPassword = `<div class="container">
  <div class="grid">
    <div class="grid__item medium-up--one-half medium-up--push-one-quarter">
      <div class="section-header">
        <div class="form-vertical">
          {% form 'reset_customer_password',id:'reset_customer_password' %}

            <h1 class="text-center">{{ 'customer.reset_password.title' | t }}</h1>

            <p class="text-center">{{ 'customer.reset_password.subtext' | t: email: email }}</p>

            {%- if form.errors -%}
              <div class="form-message form-message--error">
                {{ form.errors | default_errors }}
              </div>
            {%- endif -%}

            <label for="ResetPassword" id="ResetPassword">{{ 'customer.reset_password.password' | t }}</label>
            <input type="password" value="" name="customer[password]" id="ResetPassword" class="{% if form.errors contains 'password' %} input--error{% endif %}">

            <label for="PasswordConfirmation">{{ 'customer.reset_password.password_confirm' | t }}</label>
            <input type="password" value="" name="customer[password_confirmation]" id="PasswordConfirmation" class="{% if form.errors contains 'password_confirmation' %} input--error{% endif %}">

            <input type="submit" class="btn text-center" value="{{ 'customer.reset_password.submit' | t }}">
          {% endform %}
        </div>

      </div>
    </div>
  </div>
</div>`;

		const giftCardTemplate = `{% layout 'gift_card' %}

{%- assign formatted_initial_value = gift_card.initial_value | money_without_trailing_zeros: gift_card.currency -%}
{%- assign formatted_initial_value_stripped = formatted_initial_value | strip_html -%}

<header class="giftcard__header text-center" role="banner">
  <div class="site-header__logo h1 text-center">
    <a href="{{ shop.url }}" class="site-header__link site-header__logo-link">{{ shop.name }}</a>
  </div>

  <h1>{{ 'gift_cards.issued.subtext' | t }}</h1>
  {% unless gift_card.enabled %}
    <p class="giftcard__tag">{{ 'gift_cards.issued.disabled' | t }}</p>
  {% endunless %}
  {% assign gift_card_expiry_date = gift_card.expires_on | date: format: "basic" %}
  {% if gift_card.expired and gift_card.enabled %}
    <p class="giftcard__tag">{{ 'gift_cards.issued.expired' | t: expiry: gift_card_expiry_date }}</p>
  {% endif %}
  {% if gift_card.expired != true and gift_card.expires_on and gift_card.enabled %}
    <p class="giftcard__tag giftcard__tag--active">{{ 'gift_cards.issued.active' | t: expiry: gift_card_expiry_date }}</p>
  {% endif %}
</header>

<div class="giftcard-wrapper">
  <main class="giftcard" role="main">
    <div class="giftcard__wrap">
      <img src="{{ 'gift-card/card.jpg' | shopify_asset_url }}" alt="">

      {%- assign initial_value_size = formatted_initial_value | size -%}
      <div class="h1 giftcard__amount{% if initial_value_size > 6 %} giftcard__amount--medium{% endif %}">
        {% if gift_card.balance != gift_card.initial_value %}
          <span class="giftcard__tooltip">
            <span class="giftcard__tooltip-label">{{ 'gift_cards.issued.remaining_html' | t: balance: gift_card.balance | money }}</span>
          </span>
        {% endif %}
        <strong>{{ formatted_initial_value }}</strong>
      </div>

      {%- assign code_size = gift_card.code | format_code | size -%}
      <div class="giftcard__code">
        <div class="giftcard__code__inner">
          <input type="text"
            class="giftcard__code__text{% if gift_card.expired or gift_card.enabled != true %} disabled{% endif %}"
            id="GiftCardDigits"
            value="{{ gift_card.code | format_code }}"
            aria-label="{{ 'gift_cards.issued.gift_card_code' | t }}"
            readonly />
        </div>
      </div>
    </div>

    <p class="text-center">
      {{ 'gift_cards.issued.redeem_html' | t: value: formatted_initial_value_stripped }}
    </p>

    <div id="QrCode" class="giftcard__qr-code" data-identifier="{{ gift_card.qr_identifier }}"></div>

    <ul class="giftcard-action-list text-center">
      <li class="giftcard-action-list__item">
        <a href="{{ shop.url }}"
          class="btn"
          target="_blank"
          rel="noopener"
          aria-describedby="a11y-new-window-message">
            {{ 'gift_cards.issued.shop_link' | t }}
            {% include 'icon-arrow-right' %}
        </a>
      </li>
      <li>
        <button type="button" class="btn btn--secondary print-link" onclick="window.print();">
          {{ 'gift_cards.issued.print' | t }}
        </button>
      </li>
      {% if gift_card.pass_url %}
        <li>
          <a class="giftcard__apple-wallet" href="{{ gift_card.pass_url }}">
            <img class="giftcard__apple-wallet-image" src="{{ 'gift-card/add-to-apple-wallet.svg' | shopify_asset_url }}" width="120" height="40" alt="{{ 'gift_cards.issued.add_to_apple_wallet' | t }}">
          </a>
        </li>
      {% endif %}
    </ul>
  </main>
</div>`;

		const listCollectionsTemplate = `{% comment %}
  The contents of the lists-collections.liquid template can be found in /sections/lists-collections-template.liquid
{% endcomment %}

<div class="container">
{% section 'list-collections-template' %}
</div>`;

		const passwordTemplate = `{% layout 'password' %}

{% comment %}
  The contents of the password.liquid templates can be found in /sections
{% endcomment %}

{% section 'password-header' %}
{% section 'password-content' %}
{% section 'password-footer' %}`;

		const productTemplate = `{% comment %}
  The contents of the product.liquid template can be found in /sections/product-template.liquid
{% endcomment %}

<div class="container">
  {%section 'swatch' %}
{% section 'product-template' %}
{% section 'product-recommendations' %}
{% if collection %}
  <div class="text-center return-link-wrapper page-width">
     <button onclick="window.location.href='{{ collection.url }}'" style="width:fit-content;">
      {% include 'icon-arrow-left' %}
      {{ 'products.product.back_to_collection' | t: title: collection.title }}
    </button>
  </div>
  {%else%}
    <div class="text-center return-link-wrapper page-width">
    <button onclick="window.location.href='/collections/all'" style="width:fit-content;">
      {% include 'icon-arrow-left' %}
      {{ 'products.product.back_to_collection' | t: title: 'all collections' }}
    </button>
  </div>
  {% endif %}
</div>
<script>
  // Override default values of shop.strings for each template.
  // Alternate product templates can change values of
  // add to cart button, sold out, and unavailable states here.
  theme.productStrings = {
    addToCart: {{ 'products.product.add_to_cart' | t | json }},
    soldOut: {{ 'products.product.sold_out' | t | json }},
    unavailable: {{ 'products.product.unavailable' | t | json }}
  }
</script>

{% assign current_variant = product.selected_or_first_available_variant %}

<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Product",
  "name": {{ product.title | json }},
  "url": {{ shop.url | append: product.url | json }},
  {%- if product.featured_media -%}
    {%- assign media_size = product.featured_media.preview_image.width | append: 'x' -%}
    "image": [
      {{ product.featured_media | img_url: media_size | prepend: "https:" | json }}
    ],
  {%- endif -%}
  "description": {{ product.description | strip_html | json }},
  {%- if current_variant.sku != blank -%}
    "sku": {{ current_variant.sku | json }},
  {%- endif -%}
  "brand": {
    "@type": "Thing",
    "name": {{ product.vendor | json }}
  },
  "offers": [
    {%- for variant in product.variants -%}
      {
        "@type" : "Offer",
        {%- if variant.sku != blank -%}
          "sku": {{ variant.sku | json }},
        {%- endif -%}
        "availability" : "http://schema.org/{% if variant.available %}InStock{% else %}OutOfStock{% endif %}",
        "price" : {{ variant.price | divided_by: 100.00 | json }},
        "priceCurrency" : {{ cart.currency.iso_code | json }},
        "url" : {{ shop.url | append: variant.url | json }}
      }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
}
</script>`;

		const searchTemplate = `
<div class="container" style="margin-bottom:105px;">
{% paginate search.results by 10 %}

<div class="page-width">
  {% if search.performed == false %}
    <div class="text-center">
      <h1 class="h2">{{ 'general.search.title' | t }}</h1>
  {% else %}
    <div class="text-center">
      <h1 class="h2">
        <span class="visually-hidden">{{ 'general.search.heading' | t: count: search.results_count }}:</span>
        {{ 'general.search.results_with_count' | t: terms: search.terms, count: search.results_count }}
      </h1>
  {% endif %}
      <div class="grid">
        <div class="grid__item medium-up--six-tenths medium-up--push-two-tenths">
          {% if search.performed and search.results_count == 0 %}
            <div class="rte search--no-results-found">
              <p>{{ 'general.search.no_results' | t }}</p>
            </div>
          {% endif %}
          <form action="{{ routes.search_url }}" method="get" role="search" class="search-form search-page-form" id="search-form">
            <div class="input-group input-group--nowrap">
              <div class="input-group__field input-group__field--connected search-form__input-wrapper">
                <input
                  type="search"
                  name="q"
                  value="{{ search.terms | escape }}"
                  placeholder="{{ 'general.search.placeholder' | t }}"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-owns="predictive-search-results"
                  aria-expanded="false"
                  aria-label="{{ 'general.search.placeholder' | t }}"
                  aria-haspopup="listbox"
                  class="search-form__input"
                  data-search-page-predictive-search-input
                  data-base-url="{{ routes.search_url }}"
                />

                <input type="hidden" name="options[prefix]" value="last" aria-hidden="true" />

                <a onclick="document.getElementById('search-form').reset();" class="search-form__clear-action" aria-label="{{ 'general.search.clear_search_term' | t }}" data-search-page-predictive-search-clear>
                  {% include 'icon-close' %}
                </a>

                <div class="predictive-search-wrapper" data-predictive-search-mount="default"></div>
              </div>

              <a onclick="$(this).closest('form').submit()" class="search-form__connected-submit" aria-label="{{ 'general.search.submit' | t }}" data-search-page-predictive-search-submit>
                {% include 'icon-search' %}
              </a>
            </div>
          </form>
        </div>
      </div>
  </div>
</div>


{% if search.performed %}
  {% if search.results_count > 0 %}
    <hr aria-hidden="true" />
  {% endif %}

  <h2 class="visually-hidden">{{ 'general.search.heading' | t: count: search.results_count }}</h2>

  <ul data-sectionId="{% if section.id %}{{section.id}}{% endif %}" data-settings='{% if section.settings %}{{section.settings | json}}{% endif %}' id="gf-products" class="page-width list-view-items">
    {% for item in search.results %}
      <li class="list-view-item">
        {% if item.object_type == 'product' %}
          {% include 'product-card-list', product: item ,show_vendor:settings.predictive_search_show_vendor,show_price:settings.predictive_search_show_price%}
        {% else %}
          <div class="product-card product-card--list">
            <a href="{{ item.url }}" class="full-width-link">
              <span class="visually-hidden">{{ item.title }}</span>
            </a>
            <div class="list-view-item__link">
              <div class="list-view-item__image-column">
                <div class="list-view-item__image-wrapper product-card__image-wrapper">
                  {% unless item.image == null %}
                    <img class="list-view-item__image" src="{{ item.image.src | img_url: '600x600' }}" alt="{{ item.image.alt | escape }}">
                  {% endunless %}
                </div>
              </div>

              <div class="list-view-item__title-column">
                <div class="list-view-item__title" aria-hidden="true">
                  <span class="product-card__title">{{ item.title }}</span>
                </div>
                <div>
                  {% if item.published_at %}{{ item.published_at | date: format: "date" }} &#8212; {% endif %}
                  {{ item.content | strip_html | truncate: 200 }}
                </div>
              </div>
            </div>
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>

  {%- if paginate.pages > 1 -%}
    {% include 'pagination', paginate: paginate %}
  {%- endif -%}
{% endif %}

{% if search.results_count < 2  %}
  <div class="search--less-than-2-results"></div>
{% endif %}

{% endpaginate %}
  </div>`;

		const singlePage = `
<div class="container">
      {{ page.content }}
</div>`;

		const articleTemplateSection = `<div class="container">
  <div class="row">
   <div class="col-lg-8 col-md-8 col-sm2">
  	<h1 class="product-name" id="title-0">{{ article.title }}</h1>
   		<div class="blog-post-details">
           {% if section.settings.blog_show_author or section.settings.blog_show_date%}
                {% if section.settings.blog_show_author %}
                    <p class="poster-name">{{ 'blogs.article.by_author' | t: author: article.author }}
                        {% if section.settings.blog_show_date %}
                            <span class="blog-date"> {{ article.published_at | time_tag: format: 'date' }}</span>
                        {% endif %}
                    </p>
                {% endif %}
            {% endif %}
          </div>
           {% if article.image %}
                  {% capture img_id %}ArticleImage-{{ article.image.id }}{% endcapture %}
                  {% capture img_wrapper_id %}ArticleImageWrapper-{{ article.image.id }}{% endcapture %}
                  {%- assign img_url = article.image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

                  {% include 'image-style', image: article.image, height: 600, wrapper_id: img_wrapper_id, img_id: img_id %}

                  <div id="{{ img_wrapper_id }}" class="article__list-image-wrapper js ">
                    <a href="{{ article.url }}" style="padding-top:{{ 1 | divided_by: article.image.aspect_ratio | times: 100 }}%;" class="article__list-image-container" data-image-loading-animation>
                      <img id="{{ img_id }}"
                           class="article__list-image lazyload"
                           data-src="{{ img_url }}"
                           data-widths="[180, 360, 540, 720, 905, 1090, 1296, 1512, 1728, 2048]"
                           data-aspectratio="{{ article.image.aspect_ratio }}"
                           data-sizes="auto"
                           alt="">
                    </a>

                  <noscript>
                    <p>
                      <a href="{{ article.url }}">
                        {{ article | img_url: '455x300', scale: 2 | img_tag: article.title }}
                      </a>
                    </p>
                  </noscript>
             {% endif %}
				</div>
     <p class="product-view-descpt-post-view ">
       {{ article.content }}
     </p>     
	</div>
    <div class="col-lg-4 col-md-4 col-sm12 categoris-sec-top">
    {% if article.tags.size > 0 %}
      <p class="product-view-descpt-post-view cat-pros">Categories</p>
      <div class="categogies-product">
            {% for tag in article.tags %}
                    <p class="categories-title"> <a href="{{ blog.url }}/tagged/{{ tag | handle }}" class="article__grid-tag">{{ tag }}</a></p>
                  {% endfor %}
              </div>
     {% endif %}
  </div>
  </div>
</div>
{% schema %}
{
  "name": "Posts",
  "settings": [
    {
      "type": "checkbox",
      "id": "blog_show_author",
      "label": "Show author",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "blog_show_date",
      "label": "Show date",
      "default": true
    }
  ]
}
{% endschema %}`;

		const blogTemplateSection = `{% paginate blog.articles by 12 %}

<div class="page-width">
  <header class="section-header text-center">
    <h1>{{ page_title }}</h1>
    {% if blog.tags.size > 0 %}
      <div class="blog-filter">
        <label class="blog-filter__label select-label" for="BlogTagFilter">{{ 'collections.filters.title_tags' | t }}</label>
        <div class="select-group filter-select">
          <select id="BlogTagFilter" aria-describedby="a11y-refresh-page-message a11y-selection-message" data-blog-tag-filter>
            <option value="{{ blog.url }}">{{ 'blogs.article.all_topics' | t }}</option>
            {% for tag in blog.all_tags %}
              <option value="{{ blog.url }}/tagged/{{ tag | handleize }}" {% if current_tags contains tag %}selected{% endif %}>{{ tag }}</option>
            {% endfor %}
          </select>
          {% include 'icon-chevron-down' %}
        </div>
      </div>
    {% endif %}
  </header>
</div>

  <div class="page-width">
    <ul class="grid grid--uniform grid--blog">
      {% for article in blog.articles %}
        <li class="grid__item medium-up--one-third">
            {% if article.image %}
              {% capture img_id %}ArticleImage-{{ article.image.id }}{% endcapture %}
              {% capture img_wrapper_id %}ArticleImageWrapper-{{ article.image.id }}{% endcapture %}
              {%- assign img_url = article.image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

              {% include 'image-style', image: article.image, height: 345, wrapper_id: img_wrapper_id, img_id: img_id %}
              <div id="{{ img_wrapper_id }}" class="article__grid-image-wrapper js">
                <div class="article__grid-image-container" style="padding-top:{{ 1 | divided_by: article.image.aspect_ratio | times: 100 }}%;" data-image-loading-animation>
                  <img id="{{ img_id }}"
                      class="article__grid-image lazyload"
                      data-src="{{ img_url }}"
                      data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                      data-aspectratio="{{ article.image.aspect_ratio }}"
                      data-sizes="auto"
                      alt="">
                </div>
              </div>
              <noscript>
                <div class="article__grid-image-wrapper">
                  {{ article | img_url: '345x345', scale: 2 | img_tag: article.title, 'article__grid-image' }}
                </div>
              </noscript>
            {% endif %}
            <div class="product-descpt blog-descpt-bottom">
            {% if section.settings.blog_show_date %}
			 <p class="blog-date">
                {{ article.published_at | time_tag: format: 'date' }}
              </p>
            {% endif %}
            <p class="product-n-blog">
              {{ article.title | escape }}
            </p>
            <a href="{{ article.url }}" class="lrn-text" aria-label="{{ 'blogs.article.read_more_title' | t: title: article.title }}">
            {{ 'blogs.article.learn_more' | t }}
            </a>
            </div>
      </li>
      {% endfor %}
    </ul>
  </div>

{%- if paginate.pages > 1 -%}
  {% include 'pagination', paginate: paginate %}
{%- endif -%}

{% endpaginate %}






{% schema %}
{
  "name": "Blog pages",
  "settings": [
    {
      "type": "checkbox",
      "id": "blog_show_author",
      "label": "Show author",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "blog_show_date",
      "label": "Show date",
      "default": true
    }
  ]
}
{% endschema %}
`;

		const cartTemplateSection = `<div class="page-width" data-section-id="{{ section.id }}" data-section-type="cart-template" data-ajax-enabled="{{ section.settings.cart_ajax_enable }}">

  <div {% if cart.item_count == 0 %}class="hide" {% endif %}data-cart-wrapper>
    <div class="cart-header">
      <h1 class="cart-header__title">{{ 'cart.general.title' | t }}</h1>
      <button onclick="location.href='{{ routes.all_products_collection_url }}'" style="width:fit-content;" class="btn btn--has-icon-after cart__continue-btn">
        {{ 'cart.general.continue_shopping' | t }}{% include 'icon-arrow-right' %}
      </button>
    </div>

    <form action="{{ routes.cart_url }}" method="post" novalidate class="cart">
      <table>
        <thead class="cart__row cart__row--heading">
          <th scope="col">{{ 'cart.label.product' | t }}</th>
          <th class="text-right" scope="col">{{ 'cart.label.price' | t }}</th>
          <th class="text-right small--hide" scope="col">{{ 'cart.label.quantity' | t }}</th>
          <th class="text-right small--hide" scope="col">{{ 'cart.label.total' | t }}</th>
        </thead>
        <tbody data-cart-line-items>
          {%- for item in cart.items -%}
            <tr class="cart__row" data-cart-item data-cart-item-key="{{ item.key }}" data-cart-item-url="{{ item.url }}" data-cart-item-title="{{ item.title }}" data-cart-item-index="{{ forloop.index }}" data-cart-item-quantity="{{ item.quantity }}">
              <td class="cart__meta small--text-left" data-cart-table-cell>
                <div class="cart__product-information">
                  <div class="cart__image-wrapper">
                    <img class="cart__image{% if item.image == null %} hide{% endif %}" src="{{ item | img_url: 'x190' }}" alt="{{ item.image.alt | escape }}" data-cart-item-image>
                  </div>
                  <div>
                    <div class="list-view-item__title">
                      <a href="{{ item.url }}" class="cart__product-title" data-cart-item-title data-role="product-title">
                        {{ item.product.title }}
                      </a>
                    </div>

                    {%- assign variant_options = 'template ' | split: ' ' -%}
                    {%- if item.product.has_only_default_variant != true -%}
                      {%- assign variant_options = item.options_with_values -%}
                    {%- endif -%}
                    {%- assign property_size = item.properties | size -%}

                    <ul class="product-details{% if item.product.has_only_default_variant and property_size == 0 and item.selling_plan_allocation == nil %} hide{% endif&nbsp %}" data-cart-item-details aria-label="{{ 'cart.label.product_details' | t }}">
                      {%- for option in variant_options -%}
                        <li class="product-details__item product-details__item--variant-option{% if item.product.has_only_default_variant %} hide{% endif %}" data-cart-item-option>{{ option.name }} : {{ option.value }}&nbsp;&nbsp;&nbsp;&nbsp;</li>
                      {%- endfor -%}

                      <li
                        class="product-details__item product-details__item--property
                        {% if item.selling_plan_allocation == empty %} hide {% endif %}"
                        data-cart-item-selling-plan-name
                      >
                        {{ item.selling_plan_allocation.selling_plan.name }}
                      </li>

                      {%- comment -%}
                        Optional, loop through custom product line items if available

                        Line item properties come in as having two parts. The first part will be passed with the default form,
                        but p.last is the actual custom property and may be blank. If it is, don't show it.

                        For more info on line item properties, visit:
                          - http://docs.shopify.com/support/your-store/products/how-do-I-collect-additional-information-on-the-product-page-Like-for-a-monogram-engraving-or-customization
                      {%- endcomment -%}

                      {%- assign properties = 'template ' | split: ' ' -%}
                      {%- if property_size > 0 -%}
                        {%- assign properties = item.properties -%}
                      {%- endif -%}

                      {%- for p in properties -%}
                        {% assign property_first_char = p.first | slice: 0 %}
                        <li class="product-details__item product-details__item--property
                          {%if property_size == 0 or p.last == blank or property_first_char == '_' %} hide{% endif %}" data-cart-item-property>
                          <span class="product-details__item-label" data-cart-item-property-name>{{ p.first }}: </span>

                          {%- comment -%}
                            Check if there was an uploaded file associated
                          {%- endcomment -%}
                          <span data-cart-item-property-value>
                            {%- if p.last contains '/uploads/' -%}
                              <a href="{{ p.last }}" data-role="product-upload">{{ p.last | split: '/' | last }}</a>
                            {%- else -%}
                              {{ p.last }}
                            {%- endif -%}
                          </span>
                        </li>
                      {%- endfor -%}
                    </ul>

                    <p class="cart__remove">
                      <a href="/cart/change?line={{ forloop.index }}&amp;quantity=0" class="text-link text-link--accent" aria-label="{{ 'cart.label.remove' | t: product: item.title }}" data-cart-remove data-role="product-remove">{{ 'cart.general.remove' | t }}</a>
                    </p>
                  </div>
                </div>
              </td>
              <td class="cart__price text-right">

                {%- assign hasDiscount = false -%}
                {%- if item.original_price != item.final_price -%}
                  {%- assign hasDiscount = true -%}
                {%- endif -%}

                <div data-cart-item-price>
                  <dl data-cart-item-price-list>
                    {%- comment -%}
                      Markup template for discount item
                    {%- endcomment -%}
                    <div {% unless hasDiscount %}class="hide" {% endunless %}data-cart-item-discounted-price-group>
                      <dt>
                        <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                      </dt>
                      <dd>
                        <s data-cart-item-original-price>{{ item.original_price | money }}</s>
                      </dd>
                      <dt>
                        <span class="visually-hidden">{{ 'products.product.sale_price' | t }}</span>
                      </dt>
                      <dd>
                        <span class="order-discount" data-cart-item-final-price>{{ item.final_price | money }}</span>
                      </dd>
                    </div>

                    {%- comment -%}
                      Markup template for regular price item
                    {%- endcomment -%}
                    <div {% if hasDiscount %}class="hide" {% endif %}data-cart-item-regular-price-group>
                      <dt>
                        <span class="visually-hidden">{{ 'products.product.regular_price' | t }}</span>
                      </dt>
                      <dd data-cart-item-regular-price>
                        {{ item.original_price | money }}
                      </dd>
                    </div>

                    {%- comment -%}
                      Markup template for unit price
                    {%- endcomment -%}
                    <div {% unless item.unit_price_measurement %}class="hide" {% endunless %}data-unit-price-group>
                      <dt>
                        <span class="visually-hidden visually-hidden--inline">{{ 'products.product.unit_price_label' | t }}</span>
                      </dt>
                      <dd>
                        <span class="price-unit-price">
                          {%- capture unit_price_separator -%}
                            <span aria-hidden="true">/</span><span class="visually-hidden">{{ 'general.accessibility.unit_price_separator' | t }}&nbsp;</span>
                          {%- endcapture -%}
                          {%- capture unit_price_base_unit -%}
                            {%- if item.unit_price_measurement.reference_value != 1 -%}
                              {{- item.unit_price_measurement.reference_value -}}
                            {%- endif -%}
                            {{ item.unit_price_measurement.reference_unit }}
                          {%- endcapture -%}

                          <span data-unit-price>{{ item.unit_price | money }}</span>{{- unit_price_separator -}}<span data-unit-price-base-unit>{{- unit_price_base_unit -}}</span>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>

                {%- assign itemDiscounts = 'template ' | split: ' ' -%}
                {%- if item.line_level_discount_allocations != blank -%}
                  {%- assign itemDiscounts = item.line_level_discount_allocations -%}
                {%- endif -%}

                <ul class="order-discount order-discount--list order-discount--title order-discount--cart{% if item.line_level_discount_allocations == blank %} hide{% endif %}" aria-label="{{ 'customer.order.discount' | t }}" data-cart-item-discount-list>
                  {%- for discount_allocation in itemDiscounts -%}
                    <li class="order-discount__item" data-cart-item-discount>
                      {% include 'icon-saletag' %}
                      <span data-cart-item-discount-title>
                        {{- discount_allocation.discount_application.title -}}
                      </span> (-<span data-cart-item-discount-amount>{{ discount_allocation.amount | money }}</span>)
                    </li>
                  {%- endfor -%}
                </ul>

                <div class="cart__qty medium-up--hide">
                  <label for="updates_{{ item.key }}" class="cart__qty-label" aria-label="{{ 'cart.label.quantity' | t }}" data-quantity-label-mobile>
                    {{ 'cart.label.qty' | t }}
                  </label>
                  <input id="updates_{{ item.key }}" class="cart__qty-input" type="number"
                    value="{{ item.quantity }}" min="0" pattern="[0-9]*"
                    data-quantity-input data-quantity-item="{{ forloop.index }}" data-quantity-input-mobile data-role="product-quantity-mobile">
                </div>
                <div class="cart__qty-error-message-wrapper cart__qty-error-message-wrapper--mobile hide" role="alert" data-cart-quantity-error-message-wrapper>
                  <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                  {% include 'icon-error' %}
                  <span class="cart__qty-error-message" data-cart-quantity-error-message></span>
                </div>
              </td>
              <td class="cart__quantity-td text-right small--hide">
                <div class="cart__qty">
                  <label for="updates_large_{{ item.id }}" class="cart__qty-label" data-quantity-label-desktop>{{ 'cart.label.quantity' | t }}</label>
                  <input type='button' value='-' class='qtyminus hide' field='updates_large_{{ item.id }}' style="padding: 10px;border: none;" />
                  <input id="updates_large_{{ item.id }}" class="cart__qty-input" type="number"
                    name="updates[]" value="{{ item.quantity }}" min="0" pattern="[0-9]*"
                    data-quantity-input data-quantity-item="{{ forloop.index }}" data-quantity-input-desktop data-role="product-quantity-desktop">
                  <input type='button' value='+' class='qtyplus hide' field='updates_large_{{ item.id }}' style="padding: 10px;border: none;"/>
                </div>
                <div class="cart__qty-error-message-wrapper cart__qty-error-message-wrapper--desktop hide" role="alert" data-cart-quantity-error-message-wrapper>
                  <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                  {% include 'icon-error' %}
                  <span class="cart__qty-error-message" data-cart-quantity-error-message></span>
                </div>
              </td>
              <td class="cart__final-price text-right small--hide" data-cart-item-line-price>
                {%- comment -%}
                  Markup template for discount item
                {%- endcomment -%}
                <dl {% unless item.original_line_price != item.final_line_price %}class="hide" {% endunless %}data-cart-item-discounted-price-group>
                  <dt>
                    <span class="visually-hidden">{{ 'cart.label.regular_total' | t }}</span>
                  </dt>
                  <dd>
                    <s data-cart-item-original-price>{{ item.original_line_price | money }}</s>
                  </dd>
                  <dt>
                    <span class="visually-hidden">{{ 'cart.label.discounted_total' | t }}</span>
                  </dt>
                  <dd>
                    <span class="order-discount" data-cart-item-final-price>{{ item.final_line_price | money }}</span>
                  </dd>
                </dl >

                {%- comment -%}
                  Markup template for regular price item
                {%- endcomment -%}
                <div {% if item.original_line_price != item.final_line_price %}class="hide" {% endif %}data-cart-item-regular-price-group>
                  <span data-cart-item-regular-price>{{ item.original_line_price | money }}</span>
                </div>
              </td>
            </tr>
          {%- endfor -%}
        </tbody>
      </table>

      <div class="cart__footer">
        <div class="grid">
          {%- if section.settings.cart_notes_enable -%}
            <div class="grid__item medium-up--one-half cart-note grid__item_right">
              <label for="CartSpecialInstructions" class="cart-note__label small--text-center">{{ 'cart.general.note' | t }}</label>
              <textarea name="note" id="CartSpecialInstructions" class="cart-note__input" data-cart-notes>{{ cart.note }}</textarea>
            </div>
          {%- endif -%}
          <div class="grid__item text-right grid__item_right small--text-center{% if section.settings.cart_notes_enable %} medium-up--one-half{% endif %}">

            {%- assign cartDiscounts = 'template ' | split: ' ' -%}
            {%- if cart.cart_level_discount_applications.size > 0 -%}
              {%- assign cartDiscounts = cart.cart_level_discount_applications -%}
            {%- endif -%}
            <div{% if cart.cart_level_discount_applications.size == 0 %} class="hide"{% endif %} data-cart-discount-wrapper>
              <div class="order-discount-card-wrapper" data-cart-discount>
                {%- for discount_application in cartDiscounts -%}
                  <span class="order-discount order-discount--title order-discount--cart">
                    {% include 'icon-saletag' %}<span class="visually-hidden">{{ 'customer.order.discount' | t }}:</span><span data-cart-discount-title>{{- discount_application.title -}}</span>
                  </span>
                  <span class="order-discount order-discount--cart order-discount--cart-total">
                    -<span data-cart-discount-amount>{{ discount_application.total_allocated_amount | money }}</span>
                  </span>
                {%- endfor -%}
              </div>
            </div>

            <div class="cart-subtotal">
              <span class="cart-subtotal__title">{{ 'cart.general.subtotal' | t }}</span>
              <span class="cart-subtotal__price" data-cart-subtotal>{{ cart.total_price | money_with_currency }}</span>
            </div>

            {%- capture taxes_shipping_checkout -%}
              {%- if cart.taxes_included and shop.shipping_policy.body != blank -%}
                {{ 'cart.general.taxes_included_and_shipping_policy_html' | t: link: shop.shipping_policy.url }}
              {%- elsif cart.taxes_included -%}
                {{ 'cart.general.taxes_included_but_shipping_at_checkout' | t }}
              {%- elsif shop.shipping_policy.body != blank -%}
                {{ 'cart.general.taxes_and_shipping_policy_at_checkout_html' | t: link: shop.shipping_policy.url }}
              {%- else -%}
                {{ 'cart.general.taxes_and_shipping_at_checkout' | t }}
              {%- endif -%}
            {%- endcapture -%}
            <div class="cart__shipping rte">{{ taxes_shipping_checkout }}</div>
            <div class="cart__buttons-container">
              <div class="cart__submit-controls">
                {%- unless section.settings.cart_ajax_enable -%}
                <input type="submit" name="update"
                  class="cart__submit btn btn--small-wide cart-page-update-btn"
                  value="{{ 'cart.general.update' | t }}">
                {%- endunless -%}
                <input type="submit" name="checkout"
                  class="cart__submit btn btn--small-wide"
                  value="{{ 'cart.general.checkout' | t }}">
              </div>

              <div class="cart__error-message-wrapper hide" role="alert" data-cart-error-message-wrapper>
                <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
                {% include 'icon-error' %}
                <span class="cart__error-message" data-cart-error-message></span>
              </div>

              {%- if additional_checkout_buttons -%}
                <div class="additional-checkout-buttons">{{ content_for_additional_checkout_buttons }}</div>
              {%- endif -%}
            </div>
          </div>
        </div>
      </div>
    </form>

    <p class="visually-hidden" data-cart-status
      aria-live="polite"
      role="status"
    ></p>
  </div>

  <div class="empty-page-content{% if cart.item_count > 0 %} hide{% endif %} text-center" data-empty-page-content>
    <h1>{{ 'cart.general.title' | t }}</h1>
    <p class="cart--empty-message">{{ 'cart.general.empty' | t }}</p>
    <div class="cookie-message">
      <p>{{ 'cart.general.cookies_required' | t }}</p>
    </div>
    <button onclick="location.href='{{ routes.all_products_collection_url }}'" class="btn btn--has-icon-after cart__continue-btn">{{ 'general.404.link' | t }}{% include 'icon-arrow-right' %}</button>
  </div>
</div>

<script>
  jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[id='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[id='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[id='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[id='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[id='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[id='+fieldName+']').val(0);
        }
    });
});
</script>

{% schema %}
{
  "name": "Cart page",
  "settings": [
    {
      "type": "checkbox",
      "id": "cart_ajax_enable",
      "label":"Enable automatic cart updates",
      "info": "Updates the cart as soon as customer changes are made",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "cart_notes_enable",
      "label":"Enable cart notes",
      "default": false
    }
  ]
}
{% endschema %}`;

		const collectionSection = `<div class="page-width">
  {% if section.settings.title != blank %}
    <div class="section-header text-center">
      <h2>{{ section.settings.title | escape }}</h2>
    </div>
  {% endif %}

  {%- assign collection = collections[section.settings.collection] -%}

  {% case section.settings.grid %}
    {% when 2 %}
      {%- assign max_height = 530 -%}
      {%- assign grid_item_width = 'medium-up--one-half' -%}
    {% when 3 %}
      {%- assign max_height = 345 -%}
      {%- assign grid_item_width = 'small--one-half medium-up--one-third' -%}
    {% when 4 %}
      {%- assign max_height = 250 -%}
      {%- assign grid_item_width = 'small--one-half medium-up--one-quarter' -%}
    {% when 5 %}
      {%- assign max_height = 195 -%}
      {%- assign grid_item_width = 'small--one-half medium-up--one-fifth' -%}
  {% endcase %}

  {%- assign product_limit = section.settings.grid | times: section.settings.rows -%}

  <ul data-sectionId="{% if section.id %}{{section.id}}{% endif %}" data-settings='{% if section.settings %}{{section.settings | json}}{% endif %}' id="gf-products" class="grid grid--uniform grid--view-items">
    {% for product in collection.products limit: product_limit %}
      <li class="grid__item grid__item--{{section.id}} {{ grid_item_width }}">
        {% include 'product-card-grid', max_height: max_height, product: product, show_vendor: section.settings.show_vendor %}
      </li>
    {% else %}

      {% for i in (1..product_limit) %}
        <li class="grid__item grid__item--{{section.id}} {{ grid_item_width }}">
          <div class="grid-view-item product-card">
            <a class="grid-view-item__link grid-view-item__image-container full-width-link" href="#">
              <span class="visually-hidden">{{ 'homepage.onboarding.product_title' | t }}</span>
            </a>
            <div class="grid-view-item__image-wrapper">
              {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
              {{ 'product-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
            </div>
            <div class="h4 grid-view-item__title" aria-hidden="true">{{ 'homepage.onboarding.product_title' | t }}</div>
            {% include 'product-price' %}
          </div>
        </li>
      {% endfor %}
    {% endfor %}
  </ul>

  {% if section.settings.show_view_all %}
    <hr class="hr--invisible" aria-hidden="true" />
    <div class="text-center">
      <a href="{{ collection.url }}" class="btn" aria-label="{{ 'collections.general.view_all_label' | t: collection_name: collection.title }}">
        {{ 'collections.general.view_all' | t }}
      </a>
    </div>
  {% endif %}

</div>



{% schema %}
{
  "name": "Featured collection",
  "class": "index-section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label":"Heading",
      "default":"Featured collection"
	},
    {
      "id": "collection",
      "type": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "grid",
      "label": "Products per row",
      "min": 2,
      "max": 5,
      "step": 1,
      "default": 4
    },
    {
      "type": "range",
      "id": "rows",
      "label": "Rows",
      "min": 1,
      "max": 5,
      "step": 1,
      "default": 2
    },
    {
      "type": "checkbox",
      "id": "show_vendor",
      "label": "Show product vendors",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "show_view_all",
      "label": "Show 'View all' button",
      "default": false
    }
  ],
  "presets": [
    {
      "name": "Featured collection",
      "category": "Collection"
    }
  ]
}
{% endschema %}`;

		const collectionListSection = `<div class="page-width">
  {% if section.settings.title != blank %}
    <div class="section-header text-center">
      <h2>{{ section.settings.title | escape }}</h2>
    </div>
  {% endif %}

  {% case section.settings.grid %}
    {% when 2 %}
      {%- assign grid_item_width = 'medium-up--one-half' -%}
    {% when 3 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-third' -%}
    {% when 4 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-quarter' -%}
    {% when 5 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-fifth' -%}
  {% endcase %}

  <div class="collection-grid">
    <ul class="grid grid--uniform">
      {% for block in section.blocks limit: section.blocks.size %}
        <li class="grid__item {{ grid_item_width }}" {{ block.shopify_attributes }}>
          {%- assign collection = collections[block.settings.collection] -%}
          {% include 'collection-grid-item', collection: collection %}
        </li>
      {% endfor %}
    </ul>
  </div>

  {% if section.blocks.size == 0 %}
    {% include 'no-blocks' %}
  {% endif %}
</div>



{% schema %}
{
  "name": "Collection list",
  "class": "index-section",
  "max_blocks": 12,
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label":"Heading",
      "default":"Collection list"
    },
    {
      "type": "range",
      "id": "grid",
      "label":"Collections per row",
      "min": 2,
      "max": 8,
      "step": 1,
      "default": 2
    }
  ],
  "blocks": [
    {
      "type": "featured_collection",
      "name": "Collection",
      "settings": [
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Collection list",
      "category":"Collection",
      "blocks": [
        {
          "type": "featured_collection"
        },
        {
          "type": "featured_collection"
        },
        {
          "type": "featured_collection"
        }
      ]
    }
  ]
}
{% endschema %}`;

		const collectionTemplateSection = `{%- assign max_height = 250 -%}
{%- assign limit = 4-%}


{% paginate collection.products by limit %}

<div data-section-id="{{ section.id }}" data-section-type="collection-template">
  <header class="collection-header">
    {%- assign is_filter_by_available = false -%}
    {%- if collection.all_tags.size > 0 -%}
      {%- assign is_filter_by_available = true -%}
    {%- endif -%}

    {% if collection.image %}
      <div class="collection-hero">
        <div class="collection-hero__image ratio-container lazyload js"
             data-bgset="{% include 'bgset', image: collection.image %}"
             data-sizes="auto"
             data-parent-fit="cover"
             data-image-loading-animation
        ></div>
        <noscript>
          <div class="collection-hero__image" style="background-image: url({{ collection.image | img_url: '2048x600', crop: 'top' }});"></div>
        </noscript>
        <div class="collection-hero__title-wrapper">
          <h1 class="collection-hero__title page-width">
              <span class="visually-hidden">{{ 'collections.general.collection_label' | t }}: </span>
              {{ collection.title }}
          </h1>
        </div>
      </div>
      {% if is_filter_by_available == false %}
        <div class="page-width">
          <span class="filters-toolbar__product-count">{{ 'collections.general.items_with_count' | t: count: collection.products_count }}</span>
        </div>
      {% endif %}
      {% if collection.description != blank %}
        <div class="rte collection-description page-width">
          {{ collection.description }}
        </div>
      {% endif %}
    {% else %}
      <div class="page-width">
        <div class="section-header text-center">
          <h1>
              <span class="visually-hidden">{{ 'collections.general.collection_label' | t }}: </span>
              {{ collection.title }}
          </h1>
          {% if collection.description != blank %}
            <div class="rte">
              {{ collection.description }}
            </div>
          {% endif %}
          {% if is_filter_by_available == false %}
            <span class="filters-toolbar__product-count">{{ 'collections.general.items_with_count' | t: count: collection.products_count }}</span>
          {% endif %}
        </div>
      </div>
    {% endif %}

    {% if is_filter_by_available  %}
      <div class="filters-toolbar-wrapper{% if is_filter_by_available %} filters-toolbar--has-filter{% endif %}">
        <div class="page-width">
          <div class="filters-toolbar">
            <div class="filters-toolbar__item-wrapper">
                <div class="filters-toolbar__item-child">
                  {%- assign sort_by = collection.sort_by | default: collection.default_sort_by -%}
                  <label class="filters-toolbar__label select-label" for="SortBy">{{ 'collections.sorting.title' | t }}</label>
                  <div class="filters-toolbar__input-wrapper select-group">
                    <select name="sort_by" id="SortBy"
                      class="filters-toolbar__input hidden"
                      aria-describedby="a11y-refresh-page-message a11y-selection-message"
                      data-default-sortby="{{ collection.default_sort_by }}"
                      data-select-input
                    >
                      {%- for option in collection.sort_options -%}
                        <option value="{{ option.value }}" {% if option.value == sort_by %}selected="selected"{% endif %}>{{ option.name }}</option>
                      {%- endfor -%}
                    </select>
                    {% include 'icon-chevron-down' %}
                  </div>
                </div>
            </div>

            <div class="filters-toolbar__item filters-toolbar__item--count">
              <span class="filters-toolbar__product-count">{{ 'collections.general.items_with_count' | t: count: collection.products_count }}</span>
            </div>
          </div>
        </div>
      </div>
    {% endif %}
  </header>
  <div class="page-width" id="Collection">
{%- assign grid_item_width = 'small--one-half medium-up--one-quarter' -%}
      <ul data-sectionId="{% if section.id %}{{section.id}}{% endif %}"  id="gf-products" class="grid grid--uniform{% if collection.products_count > 0 %} grid--view-items{% endif %}">
        {% for product in collection.products %}
          <li class="grid__item grid__item--{{section.id}} {{ grid_item_width }}">
          </li>
        {% else %}
          {% comment %}
          Add default products to help with onboarding for collections/all only.

          The onboarding styles and products are only loaded if the
          store has no products.
          {% endcomment %}
          {% if collection.handle == 'all' and collection.all_vendors.size == 0 and collection.all_types.size == 0 %}
            <li class="grid__item">
              <div class="grid grid--uniform">
                {% for i in (1..limit) %}
                  <div class="grid__item {{ grid_item_width }}">
                    <div class="grid-view-item">
                      <a href="#" class="grid-view-item__link">
                        <div class="grid-view-item__image">
                          {% capture current %}{% cycle 1, 2, 3, 4, 5, 6 %}{% endcapture %}
                          {{ 'product-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
                        </div>
                        <div class="h4 grid-view-item__title">{{ 'homepage.onboarding.product_title' | t }}</div>
                        <div class="grid-view-item__meta">
                          <span class="product-price__price">$19.99</span>
                        </div>
                      </a>
                    </div>
                  </div>
                {% endfor %}
              </div>
            </li>
          {% else %}
            {%- assign is_empty_collection = true -%}
          {% endif %}
        {% endfor %}
      </ul>
	{% if is_empty_collection %}
      <div class="grid__item small--text-center">
        <p class="text-center">{{ 'collections.general.no_matches' | t }}</p>
      </div>
    {% endif %}
{%comment%}
    {%- if paginate.pages > 1 -%}
      {% include 'pagination', paginate: paginate %}
    {%- endif -%}
    {%endcomment%}
  </div>
</div>

{% endpaginate %}`;

		const listCollectionsTemplateSection = `<div class="page-width">
  <header class="section-header text-center">
    <h1>{{ page_title }}</h1>
  </header>

  {%- assign blocks = section.blocks | sort: 'collection.all_products_count' -%}

  {% case section.settings.grid %}
    {% when 2 %}
      {%- assign grid_item_width = 'medium-up--one-half' -%}
      {%- assign image_size = '530x' -%}
    {% when 3 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-third' -%}
      {%- assign image_size = '350x' -%}
    {% when 4 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-quarter' -%}
      {%- assign image_size = '250x' -%}
    {% when 5 %}
      {%- assign grid_item_width = 'small--one-half medium-up--one-fifth' -%}
      {%- assign image_size = '225x' -%}
  {% endcase %}

  <ul class="grid grid--uniform">
    {% if section.settings.display_type == 'all' %}
      {% case section.settings.sort %}
        {% when 'products_high' or 'products_low' %}
          {%- assign collections = collections | sort: 'all_products_count' -%}
        {% when 'date' or 'date_reversed' %}
          {%- assign collections = collections | sort: 'published_at' -%}
      {% endcase %}
      {% if section.settings.sort == 'products_low' or section.settings.sort == 'date' or section.settings.sort == 'alphabetical' %}
        {% for collection in collections %}
          <li class="grid__item {{ grid_item_width }}">
            {% include 'collection-grid-item', collection: collection %}
          </li>
        {% endfor %}
      {% else %}
        {% for collection in collections reversed %}
          <li class="grid__item {{ grid_item_width }}">
            {% include 'collection-grid-item', collection: collection %}
          </li>
        {% endfor %}
      {% endif %}
    {% else %}
      {% for block in section.blocks %}
        <li class="grid__item {{ grid_item_width }}">
          {%- assign collection = collections[block.settings.collection] -%}
          {% include 'collection-grid-item', collection: collection %}
        </li>
      {% endfor %}
    {% endif %}
  </ul>
</div>



{% schema %}
{
  "name": "Collections list page",
  "settings": [
    {
      "type": "paragraph",
      "content": "All of your collections are listed by default. To customize your list, choose 'Selected' and add collections."
    },
    {
      "type": "radio",
      "id": "display_type",
      "label": "Select collections to show",
      "default": "all",
      "options": [
        {
          "value": "all",
          "label": "All"
        },
        {
          "value": "selected",
          "label": "Selected"
        }
      ]
    },
    {
      "type": "select",
      "id": "sort",
      "label": "Sort collections by:",
      "info": "Sorting only applies when 'All' is selected",
      "default": "alphabetical",
      "options": [
        {
          "value": "products_high",
          "label": "Product count, high to low"
        },
        {
          "value": "products_low",
          "label": "Product count, low to high"
        },
        {
          "value": "alphabetical",
          "label": "Alphabetically, A-Z"
        },
        {
          "value": "alphabetical_reversed",
          "label": "Alphabetically, Z-A"
		},
        {
          "value": "date",
          "label": "Date, old to new"
        },
        {
          "value": "date_reversed",
          "label": "Date, new to old"
        }
      ]
    },
    {
      "type": "range",
      "id": "grid",
      "label": "Collections per row",
      "default": 3,
      "min": 2,
      "max": 5,
      "step": 1
    }
  ],
  "blocks": [
    {
      "type": "collection",
      "name": "Collection",
      "settings": [
        {
          "label": "Collection",
          "id": "collection",
          "type": "collection"
        }
      ]
    }
  ]
}
{% endschema %}`;

		const passwordContentSection = `{% comment %}
  Password message which you can edit on http://www.shopify.com/admin/online_store/preferences
{% endcomment %}
<div class="password-content">
  {% unless shop.password_message == blank %}
    <div class="password-message">
      {{ shop.password_message }}
    </div>
  {% endunless %}
</div>

{% if section.settings.newsletter_enable %}
  <div class="password-content password-content--rte">
    <p class="h4">
      {{ section.settings.newsletter_form_heading | escape }}
    </p>
    {% if section.settings.newsletter_form_subheading != blank %}
      <div class="password__form-subheading rte">{{ section.settings.newsletter_form_subheading }}</div>
    {% endif %}
  </div>
  {% form 'customer', id: 'ContactPassword', class: 'contact-form form-single-field' %}
    {%- assign formId = 'PasswordNewsletterForm' -%}
    <input type="hidden" name="contact[tags]" value="prospect, password page">
    <label for="{{ formId }}-email" class="label--hidden">{{ 'general.password_page.signup_form_email_label' | t }}</label>

    {%- if form.posted_successfully? -%}
      <p class="form-message form-message--success" tabindex="-1" data-form-status>
        {{ 'general.password_page.signup_form_success' | t }}
      </p>
    {%- endif -%}

    <div class="input-group{% if form.errors %} input-group--error{% endif %}">
        <input
          type="email"
          name="contact[email]"
          id="{{ formId }}-email"
          class="input-group__field {% if form.errors contains 'email' %} input--error{% endif %}"
          placeholder="{{ section.settings.newsletter_placeholder | escape }}"
          {%- if form.errors contains 'email' -%}
            aria-invalid="true"
            aria-describedby="{{ formId }}-email-error"
            data-form-status
          {%- endif -%}
        >
      <span class="input-group__btn">
        <button type="submit" name="commit" class="btn">
          <span>{{ section.settings.newsletter_button_text | escape }}</span>
        </button>
      </span>
    </div>
    {%- if form.errors contains 'email' -%}
      <span id="{{ formId }}-email-error" class="input-error-message">
        <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
        {% include 'icon-error' %}
        <span>{{ form.errors.translated_fields['email'] | capitalize }} {{ form.errors.messages['email'] }}.</span>
      </span>
    {%- endif -%}

  {% endform %}
{% endif %}



{% schema %}
{
  "name": "Content",
  "settings": [
    {
      "type": "checkbox",
      "id": "newsletter_enable",
      "label": "Show newsletter signup",
      "default": true
    },
    {
      "type": "text",
      "id": "newsletter_form_heading",
      "label": "Newsletter form heading",
      "default": "Be the first to know when we launch."
    },
    {
      "type": "richtext",
      "id": "newsletter_form_subheading",
      "label":"Subheading",
      "default": "<p>Promotions, new products and sales. Directly to your inbox.</p>"
	},
    {
      "type": "text",
      "id": "newsletter_placeholder",
      "label": "Newsletter placeholder text",
      "default": "Email address"
    },
    {
      "type": "text",
      "id": "newsletter_button_text",
      "label": "Newsletter button text",
      "default": "Notify me"
    }
  ]
}
{% endschema %}
`;
		const passwordFooterSection = `<div class="password-content">
  {% if section.settings.show_share_buttons %}
    <div class="password-social-sharing">
      <p class="password__form-heading h4">{{ section.settings.social_message | escape }}</p>
    </div>
  {% endif %}

  <div class="password-powered-by">
    <small>{{ powered_by_link }}</small>
  </div>
</div>


{% schema %}
{
  "name":"Footer",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_share_buttons",
      "label": "Show social sharing buttons",
      "default": true
    },
    {
      "type": "text",
      "id": "social_message",
      "label":  "Social sharing buttons heading",
      "default": "Spread the word"
    }
  ]
}
{% endschema %}
`;

		const passwordHeaderSection = `<div class="password-content">
  {% if section.settings.logo %}
    {%- assign img_url = section.settings.logo | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}
    <a href="{{ routes.root_url }}" itemprop="url" class="site-header__logo-image" data-image-loading-animation>
      {% capture logo_alt %}{{ section.settings.logo.alt | default: shop.name }}{% endcapture %}
      <img class="lazyload js"
          data-src="{{ img_url }}"
          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
          data-aspectratio="{{ section.settings.logo.aspect_ratio }}"
          data-sizes="auto"
          alt="{{ logo_alt | escape }}"
          style="max-width: {{ section.settings.logo_max_width }}px">
      <noscript>
        {% capture image_size %}{{ section.settings.logo_max_width | escape }}x{% endcapture %}
        <img src="{{ section.settings.logo | img_url: image_size }}"
            srcset="{{ section.settings.logo | img_url: image_size }} 1x, {{ section.settings.logo | img_url: image_size, scale: 2 }} 2x"
            alt="{{ section.settings.logo.alt | default: shop.name }}"
            itemprop="logo"
            style="max-width: {{ section.settings.logo_max_width }}px;">
      </noscript>
    </a>
  {% else %}
    <h1 class="site-header__logo-link">
      <span class="logo">{{ shop.name }}</span>
    </h1>
  {% endif %}

  <span class="h2 password-content__title">{{ section.settings.header | escape }}</span>
</div>


{% schema %}
{
  "name": "Header",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label":  "Logo image"
    },
    {
      "type": "range",
      "id": "logo_max_width",
      "label": "Custom logo width",
      "min": 50,
      "max": 500,
      "step": 10,
      "unit": "px",
      "default": 100
    },
    {
      "type": "text",
      "id": "header",
      "label": "Heading",
      "default": "Coming Soon"
    }
  ]
}
{% endschema %}
`;

		const productRecommendationsSection = `{%- if section.settings.show_product_recommendations -%}
  {%- if recommendations.performed -%}
    {%- if recommendations.products_count > 0 -%}
      <div class="product-recommendations__inner">
        {%- if section.settings.heading != blank -%}
          <div class="section-header text-center">
            <h2>{{ section.settings.heading | escape }}</h2>
          </div>
        {%- endif -%}
        <ul class="grid grid--uniform grid--view-items">
          {%- for product in recommendations.products -%}
            <li class="grid__item small--one-half medium-up--one-quarter">
              {% include 'product-card-grid', max_height: 250, product: product, show_vendor: section.settings.show_vendor %}
            </li>
          {%- endfor -%}
        </ul>
      </div>
    {%- endif -%}
  {%- else  -%}
    <div class="page-width" data-base-url="{{ routes.product_recommendations_url }}" data-product-id="{{ product.id }}" data-section-id="{{ section.id }}" data-section-type="product-recommendations"></div>
  {%- endif -%}
{%- endif -%}

{% schema %}
{
  "name": "Product recommendations",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_product_recommendations",
      "label": "Show dynamic recommendations",
      "info": "Dynamic recommendations change and improve with time. [Learn more](https://help.shopify.com/en/themes/development/recommended-products)",
      "default": true
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "You may also like"
    },
    {
      "type": "checkbox",
      "id": "show_vendor",
      "label": "Show vendor",
      "default": false
    }
  ]
}
{% endschema %}
`;
		const scriptStyleTagForProduct =
			templateName == "therapists"
				? ""
				: `<script src="{{ 'siteseed.bundle.min.js' | asset_url }}" defer="defer"></script>
  <style>
  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }
  .collapse:not(.show) {
    display: none;
  }
  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }
  </style>`;
		const productTemplateSection = `<div class="product-template__container page-width"
  id="ProductSection-{{ section.id }}"
  data-section-id="{{ section.id }}"
  data-section-type="product"
  data-enable-history-state="true"
  data-ajax-enabled="{{ settings.enable_ajax }}"
>
  {% comment %}
    Get first variant, or deep linked one
  {% endcomment %}
  {%- assign current_variant = product.selected_or_first_available_variant -%}
  {%- assign product_image_zoom_size = '1024x1024' -%}
  {%- assign product_image_scale = '2' -%}
  {%- assign enable_image_zoom = section.settings.enable_image_zoom -%}
  {%- assign compare_at_price = current_variant.compare_at_price -%}
  {%- assign price = current_variant.price -%}

  {% case section.settings.media_size %}
    {% when 'small' %}
      {%- assign product_media_width = 'medium-up--one-third' -%}
      {%- assign product_description_width = 'medium-up--two-thirds' -%}
      {%- assign height = 345 -%}
    {% when 'medium' %}
      {%- assign product_media_width = 'medium-up--one-half' -%}
      {%- assign product_description_width = 'medium-up--one-half' -%}
      {%- assign height = 530 -%}
    {% when 'large' %}
      {%- assign product_media_width = 'medium-up--two-thirds' -%}
      {%- assign product_description_width = 'medium-up--one-third' -%}
      {%- assign height = 720 -%}
    {% when 'full' %}
      {%- assign product_media_width = '' -%}
      {%- assign product_description_width = '' -%}
      {%- assign height = 1090 -%}
      {%- assign enable_image_zoom = false -%}
  {% endcase %}
  {% assign descriptions = product.description | split: "<!-- split -->" %}
  {% assign short_desc = product.description  %}
  {% assign long_desc = descriptions[1] %}
  <div class="grid product-single{% if section.settings.enable_payment_button %} product-single--{{ section.settings.media_size }}-media{% endif %}">
    <div class="grid__item product-single__media-group {{ product_media_width }}{% if section.settings.media_size == 'full' %} product-single__media-group--full{% endif %}" data-product-single-media-group>
      {%- assign featured_media = product.selected_or_first_available_variant.featured_media | default: product.featured_media -%}

      {%- for media in product.media -%}
        {% include 'media', media: media, featured_media: featured_media, height: height, enable_image_zoom: enable_image_zoom, image_zoom_size: product_image_zoom_size, image_scale: product_image_scale %}
      {%- endfor -%}

      <noscript>
        {% capture product_image_size %}{{ height }}x{% endcapture %}
        <img src="{{ featured_media | img_url: product_image_size, scale: product_image_scale }}" alt="{{ featured_media.alt }}" id="FeaturedMedia-{{ section.id }}" class="product-featured-media" style="max-width: {{ height }}px;">
      </noscript>

      {% assign first_3d_model = product.media | where: "media_type", "model" | first %}

      {%- if first_3d_model -%}
        <button
          aria-label="{{ 'products.product.view_in_space_label' | t }}"
          class="product-single__view-in-space"
          data-shopify-xr
          data-shopify-model3d-id="{{ first_3d_model.id }}"
          data-shopify-title="{{ product.title | escape }}"
          data-shopify-xr-hidden
        >
          {% include 'icon-3d-badge-full-color' %}<span class='product-single__view-in-space-text'>{{ 'products.product.view_in_space' | t }}</span>
        </button>
      {%- endif -%}


      {% if product.media.size > 1 %}
        {% if product.media.size > 4 %}
          {%- assign enable_thumbnail_slides = true -%}
        {% endif %}

        <div data-thumbnail-slider>
          <div class="thumbnails-wrapper{% if enable_thumbnail_slides == true %} slider-active{% endif %}" data-slider>
            {% if enable_thumbnail_slides == true %}
              <button type="button" class="btn btn--link hide thumbnails-slider__btn thumbnails-slider__prev thumbnails-slider__prev--{{ section.id }}" data-slider-button>
                {% include 'icon-arrow-left' %}
                <span class="icon__fallback-text">{{ 'sections.slideshow.previous_slide' | t }}</span>
              </button>
            {% endif %}

            <ul class="product-single__thumbnails product-single__thumbnails-{{ section.id }}" data-slider-container>
              {% if enable_thumbnail_slides == true %}
                <div class="product-single__thumbnails-slider-track" data-slider-track>
              {% endif %}

              {% for media in product.media %}
                <li class="product-single__thumbnails-item product-single__thumbnails-item--{{ section.settings.media_size }} {% if enable_thumbnail_slides == true %} product-single__thumbnails-item-slide{% endif %} js"{% if enable_thumbnail_slides == true %} data-slider-slide-index="{{ forloop.index0 }}" data-slider-item{% endif %}>
                  <a href="{{ media.preview_image | img_url: product_image_zoom_size, scale: product_image_scale }}"
                    class="text-link product-single__thumbnail product-single__thumbnail--{{ section.id }}"
                    data-thumbnail-id="{{ section.id }}-{{ media.id }}"
                    {% if enable_thumbnail_slides == true %} data-slider-item-link{% endif %}
                    {% if enable_image_zoom %}data-zoom="{{ media.preview_image | img_url: product_image_zoom_size, scale: product_image_scale }}"{% endif %}>

                      {%- capture thumbnailAlt -%}
                        {%- if media.media_type == 'video' or media.media_type == 'external_video' -%}
                          {{ 'sections.featured_product.video_thumbnail_alt' | t: imageAlt: media.alt | escape }}
                        {%- elsif media.media_type == 'model' -%}
                          {{ 'sections.featured_product.model_thumbnail_alt' | t: imageAlt: media.alt | escape }}
                        {%- else -%}
                          {{ 'sections.featured_product.gallery_thumbnail_alt' | t: imageAlt: media.alt | escape }}
                        {%- endif -%}
                      {%- endcapture -%}

                      <img class="product-single__thumbnail-image" src="{{ media.preview_image | img_url: '110x110', scale: 2 }}" alt="{{ thumbnailAlt }}">
                      {%- if media.media_type == 'video' or media.media_type =='external_video' -%}
                        <div class="product-single__thumbnail-badge">
                          {% include 'icon-video-badge-full-color' %}
                        </div>
                      {%- endif -%}
                      {%- if media.media_type == 'model' -%}
                        <div class="product-single__thumbnail-badge">
                          {% include 'icon-3d-badge-full-color' %}
                        </div>
                      {%- endif -%}
                  </a>
                </li>
              {% endfor %}

              {% if enable_thumbnail_slides == true %}
                </div>
              {% endif %}
            </ul>
            {% if enable_thumbnail_slides == true %}
              <button type="button" class="btn btn--link hide thumbnails-slider__btn thumbnails-slider__next thumbnails-slider__next--{{ section.id }}" data-slider-button data-slider-button-next>
                {% include 'icon-arrow-right' %}
                <span class="icon__fallback-text">{{ 'sections.slideshow.next_slide' | t }}</span>
              </button>
            {% endif %}
          </div>
        </div>
      {% endif %}
	<section class="product-custom-sec4">
				<div class="container">
					<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 p-0">
                     <div class="panel-group wrap" id="accordion" role="tablist" aria-multiselectable="true">
     {%if shop.shipping_policy.body != blank %}
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingshipping_policy">
          <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseshipping_policy" aria-expanded="true" aria-controls="collapseshipping_policy">
         <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 p-0"><p class="Acc-theam">{{shop.shipping_policy.title}}</p></div>     
         </div>
        </a>
      </h4>
        </div>
        <div id="collapseshipping_policy" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingshipping_policy">
          <div class="panel-body">
             
           <div class="col-md-12 col-lg-12 col-sm-12 p-0">
           <p class="acc-P">{{shop.shipping_policy.body}}</div>    
              
            </div> 
          </div>
        </div>    
        {%endif%}
        {%if shop.refund_policy.body != blank %}
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingrefund_policy">
          <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapserefund_policy" aria-expanded="true" aria-controls="collapserefund_policy">
         <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 p-0"><p class="Acc-theam">{{shop.refund_policy.title}}</p></div>     
         </div>
        </a>
      </h4>
        </div>
        <div id="collapserefund_policy" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingrefund_policy">
          <div class="panel-body">
             
           <div class="col-md-12 col-lg-12 col-sm-12 p-0">
           <p class="acc-P">{{shop.refund_policy.body}}</div>    
              
            </div> 
          </div>
        </div>    
        {%endif%}
        {%if shop.privacy_policy.body != blank %}
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingprivacy_policy">
          <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseprivacy_policy" aria-expanded="true" aria-controls="collapseprivacy_policy">
         <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 p-0"><p class="Acc-theam">{{shop.privacy_policy.title}}</p></div>     
         </div>
        </a>
      </h4>
        </div>
        <div id="collapseprivacy_policy" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingprivacy_policy">
          <div class="panel-body">
             
           <div class="col-md-12 col-lg-12 col-sm-12 p-0">
           <p class="acc-P">{{shop.privacy_policy.body}}</div>    
              
            </div> 
          </div>
        </div>    
      {%endif%}
       {%if shop.terms_of_service.body != blank %}
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingterms_of_service">
          <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseterms_of_service" aria-expanded="true" aria-controls="collapseterms_of_service">
         <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 p-0"><p class="Acc-theam">{{shop.terms_of_service.title}}</p></div>     
         </div>
        </a>
      </h4>
        </div>
        <div id="collapseterms_of_service" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingterms_of_service">
          <div class="panel-body">
             
           <div class="col-md-12 col-lg-12 col-sm-12 p-0">
           <p class="acc-P">{{shop.terms_of_service.body}}</div>    
              
            </div> 
          </div>
        </div>    
      {%endif%}
    </div>    
                    </div>	
					</div>
					
				</div>
			</section>
    </div>

    <div class="grid__item {{ product_description_width }}">
      <div class="product-single__meta">

        <h1 class="product-single__title">{{ product.title }}</h1>
        {{ short_desc }}
          <div class="product__price">
            {% include 'product-price', variant: current_variant, show_vendor: section.settings.show_vendor %}
          </div>
          {% capture "form_classes" -%}
            product-form product-form-{{ section.id }}
            {%- if section.settings.enable_payment_button and product.has_only_default_variant %} product-form--payment-button-no-variants {%- endif -%}
            {%- if current_variant.available == false %} product-form--variant-sold-out {%- endif -%}
          {%- endcapture %}

          {% form 'product', product, class:form_classes, novalidate: 'novalidate', data-product-form: '' %}

            {% unless product.has_only_default_variant %}
              {% for option in product.options_with_values %}
                {% assign is_color = false %}
                {% assign option_name = option.name | downcase %}
                {% assign file_extension = 'png' %}
                {% assign option_id = 'option' | append: forloop.index %}
        
                {% if option_name contains 'color' or option_name contains 'colour'%}
                 	{% assign is_color = true %}
                {% endif %}
                <div class="product-form__controls-group">    
                    <p class="p-type">{{option.name}}:</p>
        		</div>
        		{% if is_color and settings.enable_color_swatch%}
               <div type="radio" data-index="option{{ forloop.index }}" class="product-form__controls-group single-option-selector single-option-selector-{{ section.id }} product-form__input"
                      id="SingleOptionSelector-{{ forloop.index0 }}">   
                 {% else %}
                <div type="radio"  data-index="option{{ forloop.index }}" class="InputGroup single-option-selector single-option-selector-{{ section.id }} product-form__input"
                      id="SingleOptionSelector-{{ forloop.index0 }}">
                  {% endif %}
                {%- for value in option.values -%}
                  <!-- Check to see if there's a product size option. If there is a size, check to see if there's any availble for purchase. If not, set the variat control in a "disabled" state. -->
                  {%- assign variant_label_state = true -%}

                  {%- if product.options.size == 1 -%}
                    {%- unless product.variants[forloop.index0].available -%}
                      {%- assign variant_label_state = false -%}
                    {%- endunless -%}
                  {%- endif -%}
                  
                {% if is_color and settings.enable_color_swatch%}
                  <span data-value="{{ value | escape }}" class="product-color-selector color-swatch-element">{% endif %}
                    <input type="radio"
                      {% if option.selected_value == value %} checked="checked"{% endif %}
                      value="{{ value | escape }}"
                      data-name="{{ option.name | handleize }}"
                      name="{{ option_id }}"
                      id="ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}"
                      >
                    {% if is_color and settings.enable_color_swatch%}
                    <label tabindex="0" class="color-view-product" id="Label-ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}" for="ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}" style="background-color: {{ value }}; border:1px solid #c8c4c4;">
                    </label>
                    {%- else -%}
                    <label tabindex="0" for="ProductSelect-option-{{ option.name | handleize }}-{{ value | escape }}">
                      {{ value | escape }}
                    </label>
                    {%- endif -%}
                 {% if is_color %} </span>{% endif %}
                {%- endfor -%}
              </div>
            {%- endfor -%}
            {% endunless %}

		<select name="id" id="ProductSelect-{{ section.id }}" class="product-form__variants no-js">
              {% for variant in product.variants %}
                <option value="{{ variant.id }}"
                  {%- if variant == current_variant %} selected="selected" {%- endif -%}
                >
                  {{ variant.title }}  {%- if variant.available == false %} - {{ 'products.product.sold_out' | t }}{% endif %}
                </option>
              {% endfor %}
            </select>
            {% if section.settings.show_quantity_selector %}
              <div id="product-quantity-block">
              <div class="product-form__controls-group">
                <div class="product-form__item">
                  <p for="Quantity-{{ section.id }}" class="p-type">{{ 'products.product.quantity' | t }}</p>
                </div>
              </div>
			    <div>
                  <input type='button' value='-' class='qtyminus' field='Quantity-{{ section.id }}' />
                  <input type="text" id="Quantity-{{ section.id }}" 
                  oninput="this.value = var maxValue = parseInt($('#stock-qty').text());  if(maxValue < parseInt(this.value)){
          				this.value=this.value.slice(0, -1);
        				}"
                    name="quantity" value="1" min="1" pattern="[0-9]*"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    class="product-quantity-input" data-quantity-input style="width: 50%;"
                  >
                  <input type='button' value='+' class='qtyplus' field='Quantity-{{ section.id }}'/>
                </div>
                 </div>
            {% endif %}

            <div class="product-form__error-message-wrapper product-form__error-message-wrapper--hidden{% if section.settings.enable_payment_button %} product-form__error-message-wrapper--has-payment-button{% endif %}"
              data-error-message-wrapper
              role="alert"
            >
              <span class="visually-hidden">{{ 'general.accessibility.error' | t }} </span>
              {% include 'icon-error' %}
              <span class="product-form__error-message" data-error-message>{{ 'products.product.quantity_minimum_message' | t }}</span>
            </div>
                 {% for variant in product.variants %}
                  {% if variant.inventory_management == "shopify" and variant.inventory_policy != "continue" and variant.inventory_quantity >0 %}
                 <div id="stock-qty-{{variant.id}}" class="hide" value={{variant.inventory_quantity}}>{{variant.inventory_quantity}}</div>
                 {%endif%}
                  {% endfor %}
 			<div id="variant-inventory" class="{% unless current_variant.available %} hide {% endunless %}">
              {% if current_variant.inventory_management == "shopify" and current_variant.inventory_policy != "continue" %}
              Only <span id="stock-qty">{{ current_variant.inventory_quantity }} </span>pices in stock!
              {% else %}
              This product is available.
              {% endif %}
            </div>
            <div class="product-form__controls-group product-form__controls-group--submit">
              <div class="product-form__item product-form__item--submit
                {%- if section.settings.enable_payment_button %} product-form__item--payment-button {%- endif -%}
                {%- if product.has_only_default_variant %} product-form__item--no-variants {%- endif -%}"
              >
                <button type="submit" name="add" id="add_to_cart_product"
                  {% unless current_variant.available %} aria-disabled="true"{% endunless %}
                  aria-label="{% unless current_variant.available %}{{ 'products.product.sold_out' | t }}{% else %}{{ 'products.product.add_to_cart' | t }}{% endunless %}"
                  class="site button" style="    width: 100%;margin-bottom: 5px;"
                  {% if settings.enable_ajax %}aria-haspopup="dialog"{% endif %}
                  data-add-to-cart>
                  <span data-add-to-cart-text>
                    {% unless current_variant.available %}
                      {{ 'products.product.sold_out' | t }}
                    {% else %}
                      {{ 'products.product.add_to_cart' | t }}
                    {% endunless %}
                  </span>
                  <span class="hide" data-loader>
                    {% include 'icon-spinner' %}
                  </span>
                </button>
                {% if section.settings.enable_payment_button %}
                  {{ form | payment_button }}
                {% endif %}
              </div>
            </div>
          {% endform %}
        </div>

        {%- comment -%}
          Live region for announcing updated price and availability to screen readers
        {%- endcomment -%}
        <p class="visually-hidden" data-product-status
          aria-live="polite"
          role="status"
        ></p>

        {%- comment -%}
          Live region for announcing that the product form has been submitted and the
          product is in the process being added to the cart
        {%- endcomment -%}

        {% if section.settings.show_share_buttons %}
          {% include 'social-sharing', share_title: product.title, share_permalink: product.url, share_image: product.featured_media %}
        {% endif %}
    </div>
  </div>
</div>
{% unless product == empty %}
  <script type="application/json" id="ProductJson-{{ section.id }}">
    {{ product | json }}
  </script>
  <script type="application/json" id="ModelJson-{{ section.id }}">
    {{ product.media | where: 'media_type', 'model' | json }}
  </script>
{% endunless %}
<script>
  jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[id='+fieldName+']').val());
      	var maxValue = parseInt($('#stock-qty').text());
        // If is not undefined
        if (!isNaN(currentVal) && maxValue >= currentVal + 1) {
            // Increment
            $('input[id='+fieldName+']').val(currentVal + 1);
        } else if(maxValue < currentVal + 1){
          return;
        }
      else {
            // Otherwise put a 0 there
            $('input[id='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[id='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[id='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[id='+fieldName+']').val(0);
        }
    });
});
  </script>
  ${scriptStyleTagForProduct}
{% schema %}
{
   "name":"Product pages",
   "settings":[
      {
         "type":"checkbox",
         "id":"show_quantity_selector",
         "label":"Show quantity selector",
         "default":false
      },
      {
         "type":"checkbox",
         "id":"show_vendor",
         "label":"Show vendor",
         "default":false
      },
      {
         "type":"checkbox",
         "id":"enable_payment_button",
         "label":"Show dynamic checkout button",
         "info":"Each customer will see their preferred payment method from those available on your store, such as PayPal or Apple Pay. [Learn more](https://help.shopify.com/manual/using-themes/change-the-layout/dynamic-checkout)",
         "default":true
      },
      {
         "type":"checkbox",
         "id":"show_share_buttons",
         "label":"Show social sharing buttons",
         "default":true
      },
      {
         "type":"header",
         "content":"Media",
         "info":"Learn more about [media types](https://help.shopify.com/manual/products/product-media)"
      },
      {
         "type":"select",
         "id":"media_size",
         "label":"Size",
         "options":[
            {
               "value":"small",
               "label":"Small"
            },
            {
               "value":"medium",
               "label":"Medium"
            },
            {
               "value":"large",
               "label":"Large"
            },
            {
               "value":"full",
               "label":"Full-width"
            }
         ],
         "default":"medium"
      },
      {
         "type":"checkbox",
         "id":"enable_image_zoom",
         "label":"Enable image zoom",
         "default":true
      }
   ]
}
{% endschema %}
`;
		const swatchSection = `<div style="display:none" id="colorswatch">
  <div id="colorswatch-total">{{section.blocks.size}}</div>
  <div id="colorSwatch-FileUrl">{{''| file_url }}</div>
  {% for block in section.blocks %}
  <div id="colorswatch-{{forloop.index}}" value={{block.settings.color_text}} img-for={{block.settings.color_swatch_img}} hexcode={{block.settings.color_hexcode}}>
    {"color_text":"{{block.settings.color_text | downcase}}","color_swatch_img":"{{block.settings.color_swatch_img}}","color_swatch_hexcode":"{{block.settings.color_hexcode}}"}
  </div>
{%endfor%}
</div>


{% schema %}
{

  "name": "Color Swatches",
	  "settings":[	 
       {
         "type":"header",
         "content":"Color",
         "info":"Add color text which is same as used in product with image or hexcode"
      }
	],
   "blocks":[
      {
         "type":"content",
         "name":"Color",		 
         "settings":[
            {
               "type":"text",
               "id":"color_text",
               "label":"Color Title",
               "info":"Add same name with which is added in product"
            },
            {
               "type":"image_picker",
               "id":"color_swatch_img",
               "label":"Image"		   
            },
            {
               "type":"text",
               "id":"color_hexcode",
               "label":"Color HexCode",
			   "info":"If image is added then image is used as swatch"
            }
         ]
      }
   ]
}
{% endschema %}`;

		const headerSchema = `
{% if request.page_type == 'index' %}
  {% assign potential_action_target = shop.url | append: routes.search_url | append: "?q={search_term_string}" %}
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": {{ shop.name | json }},
      "potentialAction": {
        "@type": "SearchAction",
        "target": {{ potential_action_target | json }},
        "query-input": "required name=search_term_string"
      },
      "url": {{ shop.url | append: page.url | json }}
    }
  </script>
{% endif %}
</div>
{% schema %}
{
   "name":"Header",
   "blocks":[
      {
         "type":"content",
         "name":"Header Menu",
         "settings":[
            {
               "type":"image_picker",
               "id":"header_icon",
               "label":"Image"
            },
            {
               "type":"text",
               "id":"header_icon_img",
               "label":"Header Icon Title/Img tag",
               "info":"If image is added then it is used as menu"
            },
            {
               "type":"text",
               "id":"header_link",
               "label":"Link"
            }
         ]
      }
   ],
   "settings":[
      {
         "type":"image_picker",
         "id":"logo",
         "label":"Logo",
         "info":"150 x 30px recommended"
      },
      {
         "type":"header",
         "content":"Main menu"
      },
      {
         "type":"link_list",
         "id":"nav_menu",
         "label":"Menu",
         "default":"main-menu",
         "info":"If menu is added then it will replace menu in header."
      },
      {
         "type":"header",
         "content":"Announcement bar"
      },
      {
         "type":"checkbox",
         "id":"show_announcement",
         "label":"Show announcement",
         "default":false
      },
      {
         "type":"text",
         "id":"header_text",
         "label":"Text",
         "default":"Announce something here"
      },
      {
         "type":"url",
         "id":"announcement_link",
         "label":"Link",
         "info":"Optional"
      }
   ],
   "presets":[
      {
         "name":"Header Menu",
         "category":"Header Menu"
      }
   ]
}
{% endschema %}`;

		const footerSchema = `
{% schema %}
{
   "name":"Footer Menu",
   "blocks":[
      {
         "type":"content",
         "name":"Footer Menu",
         "settings":[
            {
               "type":"image_picker",
               "id":"footer_icon",
               "label":"Image"
            },
            {
               "type":"text",
               "id":"footer_icon_img",
               "label":"Footer Icon Title/Img tag",
               "info":"If image is added then it is used as menu"
            },
            {
               "type":"text",
               "id":"footer_link",
               "label":"Link"
            }
         ]
      },
      {
         "type":"custom",
         "name":"Footer Social Icon",
         "settings":[
            {
               "type":"image_picker",
               "id":"social_icon",
               "label":"Image"
            },
            {
               "type":"text",
               "id":"social_icon_img",
               "label":"Social Icon Title/Img tag",
               "info":"If image is added then it is used as menu"
            },
            {
               "type":"text",
               "id":"social_link",
               "label":"Link"
            }
         ]
      }
   ],
   "presets":[
      {
         "name":"Footer Menu",
         "category":"Footer Menu"
      }
   ],
   "settings":[
      {
         "type":"link_list",
         "id":"footer_nav_menu",
         "label":"Footer Menu",
         "info":"If menu is added then it will replace menu in footer."
      },
      {
         "type":"checkbox",
         "id":"show_newsletter",
         "label":"Show News Letter Form",
         "default":true
      }
   ]
}
{% endschema %}`;
		let sections = sectionTemplate;
		const settingData = {
			current: {
				sections: {
					header: {
						type: "header",
						settings: {
							nav_menu: "",
							show_announcement: false,
						},
						blocks: {...header_block_obj},
						block_order: [...header_block_order],
					},
					footer: {
						type: "footer",
						settings: {
							footer_nav_menu: "",
						},
						blocks: {...footer_block_obj},
						block_order: [...footer_block_order],
					},
					"product-template": {
						type: "product-template",
						settings: {
							show_quantity_selector: true,
							show_vendor: true,
							enable_payment_button: true,
							show_share_buttons: true,
							media_size: "large",
							enable_image_zoom: true,
						},
					},
					"blog-template": {
						type: "blog-template",
						settings: {
							blog_show_author: true,
							blog_show_date: true,
						},
					},
					"product-recommendations": {
						type: "product-recommendations",
						settings: {
							show_product_recommendations: true,
							heading: "You may also like",
							show_vendor: true,
						},
					},
					"article-template": {
						type: "article-template",
						settings: {
							blog_show_author: true,
							blog_show_date: true,
						},
					},
					"password-header": {
						type: "password-header",
						settings: {
							logo_max_width: 100,
							header: "Coming Soon",
						},
					},
					"password-content": {
						type: "password-content",
						settings: {
							newsletter_enable: true,
							newsletter_form_heading: "Be the first to know when we launch.",
							newsletter_form_subheading:
								"<p>Promotions, new products and sales. Directly to your inbox.</p>",
							newsletter_placeholder: "Email address",
							newsletter_button_text: "Notify me",
						},
					},
					"password-footer": {
						type: "password-footer",
						settings: {
							show_share_buttons: true,
							social_message: "Spread the word",
						},
					},
					"collection-template": {
						type: "collection-template",
						settings: {},
					},
					...sectionTemplate,
				},
				content_for_index: contentForIndex,
			},
		};

		let siteNameWithMaxChar = siteName;
		if (siteNameWithMaxChar.length > 25) {
			siteNameWithMaxChar = siteNameWithMaxChar.substring(0, 25);
			var lastIndex = siteNameWithMaxChar.lastIndexOf(" ");
			if (lastIndex != -1)
				siteNameWithMaxChar = siteNameWithMaxChar.substring(0, lastIndex);
		}
		const settingSchema = `[
  {
    "name": "theme_info",
    "theme_name": "${siteNameWithMaxChar}",
    "theme_author": "SiteSeed",
    "theme_version": "1.0.0",
    "theme_documentation_url": "https:\/\/159.65.145.117:8090\/SiteSeed",
    "theme_support_url": "https:\/\/159.65.145.117:8090\/SiteSeed"
  },
  {
    "name": "Favicon",
    "settings": [
      {
        "type": "image_picker",
        "id": "favicon",
        "label": "Favicon image",
        "info": "Will be scaled down to 32 x 32px"
      }
    ]
  },
  {
    "name": "Home Page",
    "settings": [
      {
        "type": "checkbox",
        "id": "enable_homepage",
        "label": "Show Default Home Page Content",
        "default": true
      }
    ]
  },
  {
    "name": "Add to cart notification",
    "settings": [
      {
        "type": "checkbox",
        "id": "enable_ajax",
        "label": "Show notification when item is added to cart",
        "default": true
      }
    ]
  },
  {
    "name": "Color Swatch",
    "settings": [
      {
        "type": "checkbox",
        "id": "enable_color_swatch",
        "label": "Show Color swatch in collection and product page",
        "default": true
      }
    ]
  },
  {
    "name": "Search",
    "settings": [
      {
        "type": "header",
        "content": "Product suggestions"
      },
      {
        "type": "checkbox",
        "id": "predictive_search_enabled",
        "label": "Enable product suggestions",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "predictive_search_show_vendor",
        "label": "Show vendor",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "predictive_search_show_price",
        "label": "Show price",
        "default": true
      }
    ]
  },
  {
    "name": "Social Media",
    "settings": [
      {
        "type": "checkbox",
        "id": "share_facebook",
        "label": "Share on facebook",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "share_twitter",
        "label": "Share on Twitter",
        "default": true
      },
      {
        "type": "checkbox",
        "id": "share_pinterest",
        "label": "Share on Pintrest",
        "default": true
      }
    ]
  }
]`;

		const bgsetSnippets = `{%- if image != blank -%}
    {% if image.width > 180 %}{{ image | img_url: '180x' }} 180w {{ 180 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 360 %}{{ image | img_url: '360x' }} 360w {{ 360 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 540 %}{{ image | img_url: '540x' }} 540w {{ 540 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 720 %}{{ image | img_url: '720x' }} 720w {{ 720 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 900 %}{{ image | img_url: '900x' }} 900w {{ 900 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 1080 %}{{ image | img_url: '1080x' }} 1080w {{ 1080 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 1296 %}{{ image | img_url: '1296x' }} 1296w {{ 1296 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 1512 %}{{ image | img_url: '1512x' }} 1512w {{ 1512 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 1728 %}{{ image | img_url: '1728x' }} 1728w {{ 1728 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 1950 %}{{ image | img_url: '1950x' }} 1950w {{ 1950 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 2100 %}{{ image | img_url: '2100x' }} 2100w {{ 2100 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 2260 %}{{ image | img_url: '2260x' }} 2260w {{ 2260 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 2450 %}{{ image | img_url: '2450x' }} 2450w {{ 2450 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 2700 %}{{ image | img_url: '2700x' }} 2700w {{ 2700 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 3000 %}{{ image | img_url: '3000x' }} 3000w {{ 3000 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 3350 %}{{ image | img_url: '3350x' }} 3350w {{ 3350 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 3750 %}{{ image | img_url: '3750x' }} 3750w {{ 3750 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {% if image.width > 4100 %}{{ image | img_url: '4100x' }} 4100w {{ 4100 | divided_by: image.aspect_ratio | round }}h,{% endif %}
    {{ image | img_url: 'master' }} {{ image.width }}w {{ image.height }}h
{%- endif -%}
`;

		const cartPopUpSnippets = `{%- style -%}
  {% assign cart_popup_box_shadow = settings.color_borders | color_modify: 'alpha', 0.5 %}

  .cart-popup {
    box-shadow: 1px 1px 10px 2px {{ cart_popup_box_shadow }};
  }
{%- endstyle -%}

<div class="cart-popup-wrapper cart-popup-wrapper--hidden critical-hidden" role="dialog" aria-modal="true" aria-labelledby="CartPopupHeading" data-cart-popup-wrapper>
  <div class="cart-popup" data-cart-popup tabindex="-1">
    <div class="cart-popup__header">
      <h2 id="CartPopupHeading" class="cart-popup__heading">{{ 'cart.popup.added_to_cart' | t }}</h2>
      <a class="cart-popup__close" aria-label="{{ 'general.accessibility.close_modal' | t }}" data-cart-popup-close>{% include 'icon-close' %}</a>
    </div>
    <div class="cart-popup-item">
      <div class="cart-popup-item__image-wrapper hide" data-cart-popup-image-wrapper data-image-loading-animation></div>
      <div class="cart-popup-item__description">
        <div>
          <h3 class="cart-popup-item__title" data-cart-popup-title></h3>
          <ul class="product-details" aria-label="{{ 'cart.popup.product_details' | t }}" data-cart-popup-product-details></ul>
        </div>
        <div class="cart-popup-item__quantity">
          <span class="visually-hidden" data-cart-popup-quantity-label></span>
          <span aria-hidden="true">{{ 'cart.popup.quantity' | t }}:</span>
          <span aria-hidden="true" data-cart-popup-quantity></span>
        </div>
      </div>
    </div>

    <a href="{{ routes.cart_url }}" class="cart-popup__cta-link btn">
      {{ 'products.product.view_cart' | t }} (<span style="color: unset !important;" data-cart-popup-cart-quantity></span>)
    </a>

    <div class="cart-popup__dismiss">
      <button class="cart-popup__dismiss-button" data-cart-popup-dismiss>
        {{ 'cart.general.continue_shopping' | t }}
      </button>
    </div>
  </div>
</div>
`;

		const collectionGridItemSnippets = `{% comment %}
    Renders a list of products from a collection

    Accepts:
    - collection: {Object} Collection Liquid object (required)

    Usage:
    {% include 'collection-grid-item', collection: collection %}
{% endcomment %}
{% if collection.image %}
  {%- assign collection_image = collection.image -%}
{% elsif collection.products.first and collection.products.first.media != empty %}
  {%- assign collection_image = collection.products.first.featured_media.preview_image -%}
{% else %}
  {% assign collection_image = blank %}
{% endif %}

<div class="collection-grid-item">
  <a href="{% if collection.products == empty %}#{% else %}{{ collection.url }}{% endif %}" class="collection-grid-item__link">
    {% unless collection_image == blank %}
      <div class="collection-grid-item__overlay box ratio-container lazyload js"
        data-bgset="{% include 'bgset', image: collection_image %}"
        data-sizes="auto"
        data-parent-fit="cover"
        data-image-loading-animation>
      </div>
      <noscript>
        <div class="collection-grid-item__overlay" style="background-image: url('{{ collection_image | img_url: '1024x1024' }}')"></div>
      </noscript>
    {% else %}
      {% if collection == empty %}
        <div class="collection-grid-item__overlay">
          {% capture current %}{% cycle 1, 2, 3 %}{% endcapture %}
          {{ 'collection-' | append: current | placeholder_svg_tag: 'placeholder-svg' }}
        </div>
      {% else %}
        <div class="collection-grid-item__overlay" style="background-image: url('{{ collection_image | img_url: '1024x1024' }}')"></div>
      {% endif %}
    {% endunless %}

    <div class="collection-grid-item__title-wrapper">
      <div class="collection-grid-item__title h3">
        {% if collection.title == blank %}
          {{ 'homepage.onboarding.collection_title' | t }}
        {% else %}
          {{ collection.title }}
        {% endif %}
      </div>
    </div>
  </a>
</div>
`;
		const commentSnippets = `{%if comment.author != blank and comment.content != blank  %}
    <div class="testimonial-content row">
         <div class="pic col-md-2 col-lg-2 col sm-2">
           {%if comment.author != blank %}
            <img class="round" width="60" height="60" avatar="{{comment.author}}" style="border-radius: 50%;">
          {%else%}
            <img src="{{ 'user-icon.png' | asset_img_url: '100x' }}" alt="#" />
          {%endif%}
         </div>
          <div class="content-t col-md-9 col-lg-9 col sm-9">
             <h4 class="poster-name">{{ comment.author }}</h4>
              <span class="post-detals">{{ comment.content }}</span>
           </div>
     </div>
<script>
      (function(w, d){


        function LetterAvatar (name, size) {

            name  = name || '';
            size  = size || 60;

            var nameSplit = String(name).toUpperCase().split(' '),
                initials, charIndex, colourIndex, canvas, context, dataURI;


            if (nameSplit.length == 1) {
                initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
            } else {
                initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
            }

            if (w.devicePixelRatio) {
                size = (size * w.devicePixelRatio);
            }
                
            charIndex     = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
            colourIndex   = charIndex % 20;
            canvas        = d.createElement('canvas');
            canvas.width  = size;
            canvas.height = size;
            context       = canvas.getContext("2d");
             
            context.fillStyle = "${cssJSON["font-color"]}";
            context.fillRect (0, 0, canvas.width, canvas.height);
            context.font = Math.round(canvas.width/2)+"px Arial";
            context.textAlign = "center";
            context.fillStyle = "#FFF";
            context.fillText(initials, size / 2, size / 1.5);

            dataURI = canvas.toDataURL();
            canvas  = null;

            return dataURI;
        }

        LetterAvatar.transform = function() {

            Array.prototype.forEach.call(d.querySelectorAll('img[avatar]'), function(img, name) {
                name = img.getAttribute('avatar');
                img.src = LetterAvatar(name, img.getAttribute('width'));
                img.removeAttribute('avatar');
                img.setAttribute('alt', name);
            });
        };


        if (typeof define === 'function' && define.amd) {
            
            define(function () { return LetterAvatar; });
        
        } else if (typeof exports !== 'undefined') {
            if (typeof module != 'undefined' && module.exports) {
                exports = module.exports = LetterAvatar;
            }

            exports.LetterAvatar = LetterAvatar;

        } else {
            
            window.LetterAvatar = LetterAvatar;

            d.addEventListener('DOMContentLoaded', function(event) {
                LetterAvatar.transform();
            });
        }

    })(window, document);
</script>
{%endif%}`;
		const cssVariablesSnippets = `{% comment %}
This is used to create CSS custom variables with Liquid references
The file variables.scss is referring these CSS custom variables as Sass variables
to use throughout the stylesheet
{% endcomment %}
{% style %}


  :root {
	--color-text: ${cssJSON["font-color"]};
    --color-text-rgb: 58, 58, 58;
    --color-body-text: ${cssJSON["font-color"]};
    --color-sale-text: #e22120;
    --color-small-button-text-border: #3a3a3a;
    --color-text-field: #ffffff;
    --color-text-field-text: ${cssJSON["font-color"]};
    --color-text-field-text-rgb: 0, 0, 0;
    --color-btn-primary: ${cssJSON["button-background-color"]};
    --color-btn-primary-darker: ${cssJSON["button-background-color"]};
    --color-btn-primary-text: ${cssJSON["button-text-color"]};
    --color-blankstate: rgba(51, 50, 50, 0.35);
    --color-blankstate-border: rgba(51, 50, 50, 0.2);
    --color-blankstate-background: rgba(51, 50, 50, 0.1);
    --color-text-focus: unset;
    --color-overlay-text-focus: unset;
    --color-btn-primary-focus: ${cssJSON["button-background-color-hover"]};
    --color-btn-social-focus:  ${cssJSON["button-background-color-hover"]};
    --color-small-button-text-border-focus: ${cssJSON["button-text-color-hover"]};
    --predictive-search-focus: ${cssJSON["font-color"]};
    --color-body: #ffffff;
    --color-bg: #ffffff;
    --color-bg-rgb: 255, 255, 255;
    --color-bg-alt: rgba(51, 50, 50, 0.05);
    --color-bg-currency-selector: rgba(51, 50, 50, 0.2);
    --color-overlay-title-text: ${cssJSON["font-color"]};;
    --color-image-overlay: #fff;
    --color-image-overlay-rgb: 255, 255, 255;
    --opacity-image-overlay: 0.4;
    --hover-overlay-opacity: 0.8;
    --color-border: #ebebeb;
    --color-border-form: #cccccc;
    --color-border-form-darker: #b3b3b3;
    --svg-select-icon: '';
    --slick-img-url: '';
    --font-weight-body--bold: 700;
    --font-weight-body--bolder: 700;
    --font-stack-header: ${cssJSON["font-family-header"]};
    --font-style-header: normal;
    --font-weight-header: 400;
    --font-stack-body: ${cssJSON["font-family-body"]};
    --font-style-body: normal;
    --font-weight-body: 400;
    --font-size-header: 26;
    --font-size-base: 17;
    --font-h1-desktop: 35;
    --font-h1-mobile: 32;
    --font-h2-desktop: 20;
    --font-h2-mobile: 18;
    --font-h3-mobile: 20;
    --font-h4-desktop: 17;
    --font-h4-mobile: 15;
    --font-h5-desktop: 15;
    --font-h5-mobile: 13;
    --font-h6-desktop: 14;
    --font-h6-mobile: 12;
    --font-mega-title-large-desktop: 65;
    --font-rich-text-large: 19;
    --font-rich-text-small: 14;
    --color-video-bg: #f2f2f2;
    --global-color-image-loader-primary: rgba(58, 58, 58, 0.06);
    --global-color-image-loader-secondary: rgba(58, 58, 58, 0.12);
    --font-family-body: ${cssJSON["font-family-body"]};
  }
{% endstyle %}
`;
		const formStatusSnippets = `{% comment %}
    Renders a form status message
    Accepts:
    - form: {Object} Form Liquid object (required)
    - form_id: {String} Form's id attribute for accessibility purpose (required)
    - success_message: {String} Success message locale key. Default to 'contact.form.post_success' (optional)

    Usage:
    {% include 'form-status', form: form, form_id: formId, success_message: post_message %}
{% endcomment %}
{%- if form.posted_successfully? -%}
  <p class="form-message form-message--success" tabindex="-1" data-form-status>
    {{ success_message | default: 'contact.form.post_success' | t }}
  </p>
{%- endif -%}

{% comment %} We need to add this so the errors are output in the right order {% endcomment %}
{% assign error_order = "author, email, body, password, form" | split: ", " %}

{%- if form.errors -%}

  {%- if form.errors.translated_fields.size == 1 and form.errors.first == 'form' -%}
    <p class="form-message" tabindex="-1" data-form-status>
      {{ form.errors.messages['form'] }}
    </p>

  {% else %}
    <div class="form-message form-message--error">
      <h2 class="h3 form-message__title" tabindex="-1" data-form-status>{{ 'contact.form.error_heading' | t }}</h2>

      <ul>
        {% for error in error_order %}
          {% for field in form.errors %}
            {% if error == field %}

              {% capture field_label %}
                {% case field %}
                  {% when 'author' %}
                    {{ 'contact.form.name' | t }}
                  {% when 'body' %}
                    {{ 'contact.form.message' | t }}
                  {% else %}
                    {{ form.errors.translated_fields[field] }}
                {% endcase %}
              {% endcapture %}
              <li>
                {%- if field == 'form' -%}
                  {{ form.errors.messages[field] }}
                {%- else -%}
                  {% comment %} the href should match the input's id {% endcomment %}
                  <a href="#{{ form_id }}-{{ field }}" class="form-message__link">{{ field_label | strip | capitalize }} {{ form.errors.messages[field] }}</a>
                {%- endif -%}
              </li>
            {% endif %}
          {% endfor %}
        {% endfor %}
      </ul>
    </div>
  {%- endif -%}
{%- endif -%}
`;
		const iconArrowLeftSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"/></svg>`;
		const iconArrowRightSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#fff" fill-rule="evenodd"/></svg>`;
		const iconCartSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" style="fill:unset" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"/></svg>`;
		const iconChevronDownSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-down" viewBox="0 0 9 9"><path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="#fff"/></svg>`;
		const iconCloseSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 40 40"><path d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z" class="layer"/></svg>`;
		const iconErrorSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-error" viewBox="0 0 14 14"><g fill="none" fill-rule="evenodd"><path d="M7 0a7 7 0 0 1 7 7 7 7 0 1 1-7-7z"/><path class="icon-error__symbol" d="M6.328 8.396l-.252-5.4h1.836l-.24 5.4H6.328zM6.04 10.16c0-.528.432-.972.96-.972s.972.444.972.972c0 .516-.444.96-.972.96a.97.97 0 0 1-.96-.96z"/></g></svg>`;
		const iconFacebookSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 20 20"><path fill="#444" d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"/></svg>`;
		const iconLoginSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-login" style="fill:unset" viewBox="0 0 28.33 37.68"><path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path></svg>`;
		const iconPintrestSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-pinterest" viewBox="0 0 20 20"><path fill="#444" d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z"/></svg>`;
		const iconSaleTagSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-saletag"><path d="M10 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-3H7a1 1 0 0 0-.71.29l-6 6a1 1 0 0 0 0 1.42l4 4a1 1 0 0 0 1.42 0c.19-.2 5.8-5.81 6-6A1 1 0 0 0 12 5V2a2 2 0 0 0-2-2z" fill="#231F20"/></svg>`;
		const iconSearchSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"/></svg>`;
		const iconSpinnerSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB"/></svg>`;
		const iconTwitterSnippets = `<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 20 20"><path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"/></svg>`;
		const imageStyleSnippets = `<style>
  {%- if image.height <= height %}
    {% assign maximum_height = image.height %}
  {% else %}
    {% assign maximum_height = height %}
  {% endif -%}

  {%- assign maximum_width = maximum_height | times: image.aspect_ratio -%}

  #{{ img_id }} {
    max-width: {{ maximum_width }}px;
    max-height: {{ maximum_height }}px;
  }

  #{{ wrapper_id }} {
    max-width: {{ maximum_width }}px;
  }
</style>
`;
		const mediaSnippets = `{% comment %}
  Renders a media element for the product gallery.
  Media types include: image, video, external_video and model.
  Accepts:
  - media: {Object} Media Liquid object (required)
  - featured_media: {Object} Media Liquid object (required) - featured media of a given product or variant
  - height: {Number} Maximum height of the gallery (required)
  - image_zoom_size: {String} Size of the zoomed image (e.g., '1024x1024') (required for media type image)
  - enable_image_zoom: {Boolean} Image zoom setting (required for media type image)
  - image_scale:  {String} Image scale (e.g., '2') (required for media type image)

  Usage:
  {%- for media in product.media -%}
    {% include 'media', media: media, featured_media: featured_media, height: height %}
  {%- endfor -%}

  {%- for media in product.media -%}
    {% include 'media', media: media, featured_media: featured_media, height: height,
     enable_image_zoom: enable_image_zoom, image_zoom_size: product_image_zoom_size, image_scale: product_image_scale %}
  {%- endfor -%}
{% endcomment %}

{% capture media_id %}FeaturedMedia-{{ section.id }}-{{ media.id }}{% endcapture %}
{% capture media_class %}product-featured-media{% endcapture %}
{% capture media_wrapper_id %}{{ media_id }}-wrapper{% endcapture %}

{%- comment -%}
  Load different poster image sizes depending on the product layout
{%- endcomment -%}
{% capture image_size %}{{ height }}x{{ height }}{% endcapture %}

<div id="{{ media_wrapper_id }}"
    class="product-single__media-wrapper js{% unless featured_media == media %} hide{% endunless %}"
    {% if media.media_type == 'video' or media.media_type == 'external_video' %} data-product-media-type-video data-enable-video-looping="{{ section.settings.enable_video_looping }}"{% endif %}
    {% if media.media_type == 'model' %} data-product-media-type-model{% endif %}
    {% if media.media_type == 'external_video' %} data-video-id="{{ media.external_id }}"{% endif %}
    data-product-single-media-wrapper
    data-media-id="{{ section.id }}-{{ media.id }}"
    tabindex="-1">
  {% case media.media_type %}
    {% when 'image' %}
      {% capture zoom_media_id %}ImageZoom-{{ section.id }}-{{ media.id }}{% endcapture %}
      {%- assign img_url = media | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}
      {% include 'image-style', height: height, wrapper_id: media_wrapper_id, img_id: media_id, image: media.preview_image %}
      <div
        id="{{ zoom_media_id }}"
        style="padding-top:{{ 1 | divided_by: media.preview_image.aspect_ratio | times: 100}}%;"
        class="product-single__media{% if product.media.size > 1 %} product-single__media--has-thumbnails{% endif %}{% if enable_image_zoom %} js-zoom-enabled{% endif %}"
        {% if enable_image_zoom %} data-image-zoom-wrapper data-zoom="{{ media | img_url: image_zoom_size, scale: image_scale }}"{% endif %}
        data-image-loading-animation>
        <img id="{{ media_id }}"
          class="feature-row__image {{ media_class }} lazyload{% unless featured_media == media %} lazypreload{% endunless %}"
          data-src="{{ img_url }}"
          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
          data-aspectratio="{{ media.preview_image.aspect_ratio }}"
          data-sizes="auto"
          {% if enable_image_zoom %} data-image-zoom {% endif %}
          alt="{{ media.alt | escape }}"
          {% if featured_media == media and request.page_type == 'product' %} onload="window.performance.mark('debut:product:image_visible');"{% endif %}>
      </div>
    {% when 'external_video' %}
      <div class="product-single__media" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100 }}%;">
        {{ media | external_video_tag }}
      </div>
    {% when 'video' %}
      <div class="product-single__media product-single__media--video product-single__media--{{ media.id }}" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100 }}%;">
        {{ media | video_tag: class: 'media-video', image_size: image_size }}
      </div>
    {% when 'model' %}
      <div class="product-single__media" style="padding-top: 100%">
        {{ media | model_viewer_tag: image_size: image_size, reveal: 'interaction', toggleable: true, data-model-id: media.id }}
      </div>
    {% else %}
      <div class="product-single__media" style="padding-top: {{ 1 | divided_by: media.aspect_ratio | times: 100 }}%;">
        {{ media | media_tag: class: 'media-item', image_size: image_size }}
      </div>
  {% endcase %}
</div>
`;
		const paginationSnippets = `{% comment %}
    Renders a pagination bar

    Accepts:
    - paginate: {Object} Paginate Liquid object (required)

    Usage:
    {% include 'pagination', paginate: paginate %}
{% endcomment %}

<div class="center">
  <div class="pagination">
  {% if paginate.previous.is_link %}
      <a href="{{ paginate.previous.url }}">
        {% include 'icon-arrow-left' %}
        <span class="icon__fallback-text">{{ 'general.pagination.previous' | t }}</span>
      </a>
  {% endif %}
     {%- for part in paginate.parts -%}
          {%- if part.is_link -%}
              <a href="{{ part.url }}" class="{%if part.title == paginate.current_page %} active {%endif%}">
               {{ part.title }}
              </a>
          {%- else -%}
            {%- if part.title == paginate.current_page -%}
              <a class="active" aria-current="page">
               {{ part.title }}
              </a>
            {%- else -%}
              <a>
                 {{ part.title }}
              </a>
            {%- endif -%}
          {%- endif -%}
        {%- endfor -%}

  {% if paginate.next.is_link %}
      <a href="{{ paginate.next.url }}">
        {% include 'icon-arrow-right' %}
        <span class="icon__fallback-text">{{ 'general.pagination.next' | t }}</span>
      </a>
  {% endif %}
</div>
</div>`;
		const productCardGridSnippets = `{% comment %}
    Renders a product card using "Grid" style
    Accepts:
    - max_height: {Number} Maximum height of the product's image (required)
    - product: {Object} Product Liquid object (required)
    - show_vendor: {Boolean} Show the product's vendor depending on the section setting (optional)

    Usage:
    {% include 'product-card-grid', max_height: max_height, product: product, show_vendor: section.settings.show_vendor %}
{% endcomment %}
{%- liquid
  if product.title
    assign compare_at_price = product.compare_at_price
    assign price = product.price
    assign available = product.available
    assign variant = product.variants.first
  else
    assign compare_at_price = 1999
    assign price = 1999
    assign available = true
  endif

  assign money_price = price | money
-%}
{% assign date_published = product.published_at | date:'%s' %}
{% assign date_now = 'now' | date:'%s' %}
{% assign date_difference = date_now | minus: date_published %}

<div class="grid-view-item {% unless product.available %} grid-view-item--sold-out{% endunless %} product-card">
  {%if product.available != true %}
    <div class="sold-out">
	<p class="p_sold-out">SOLD OUT</p>
</div>
  {%elsif compare_at_price > price %}
    <div class="sale">
	<p class="p_sale">SALE</p>
</div>
  {%elsif date_difference < 1209600 %}
  	<div class="new-arrival">
	<p class="p_new-arrival">NEW</p>
	</div>
  {% endif %}

  <a class="grid-view-item__link grid-view-item__image-container full-width-link" href="{{ product.url | within: collection }}">
    <span class="visually-hidden">{{ product.title }}</span>
  </a>

  {% capture img_id %}ProductCardImage-{{ section.id }}-{{ product.id }}{% endcapture %}
  {% capture wrapper_id %}ProductCardImageWrapper-{{ section.id }}-{{ product.id }}{% endcapture %}
  {%- assign preview_image = product.featured_media.preview_image -%}
  {%- assign img_url = preview_image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

  {% unless preview_image == blank %}
  <div>
    {% include 'image-style', image: preview_image, height: max_height, wrapper_id: wrapper_id, img_id: img_id %}</div>
  {% endunless %}

  <div class="product-card__image-with-placeholder-wrapper" data-image-loading-animation>
    <div id="{{ wrapper_id }}" class="grid-view-item__image-wrapper product-card__image-wrapper js">
      <div style="padding-top:{% unless preview_image == blank %}{{ 1 | divided_by: preview_image.aspect_ratio | times: 100 }}%{% else %}100%{% endunless %};">
        <img id="{{ img_id }}"
              class="grid-view-item__image lazyload"
              alt="{{ preview_image.alt }}"
              data-src="{{ img_url }}"
              data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
              data-aspectratio="{{ preview_image.aspect_ratio }}"
              data-sizes="auto"
              data-image>
      </div>
    </div>
  </div>

  <noscript>
    {% capture image_size %}{{ max_height }}x{{ max_height }}{% endcapture %}
    <img class="grid-view-item__image" src="{{ preview_image | img_url: image_size, scale: 2 }}" alt="{{ preview_image.alt }}" style="max-width: {{ max_height | times: preview_image.aspect_ratio }}px;">
  </noscript>

  <div class="h4 grid-view-item__title product-card__title" aria-hidden="true">{{ product.title }}</div>

  {% include 'product-price-listing', product: product, show_vendor: show_vendor %}

</div>
`;
		const productCardListSnippets = `{% comment %}
    Renders a product card using "List" style

    Accepts:
    - product: {Object} Product Liquid object (required)
    - show_vendor: {Boolean} Show the product's vendor depending on the section setting (optional)

    Usage:
    {% include 'product-card-list', product: product, show_vendor: section.settings.show_vendor %}
{% endcomment %}
<div class="product-card product-card--list">
  <a class="full-width-link" href="{{ product.url }}">
    <span class="visually-hidden">{{ product.title }}</span>
  </a>

  <div class="list-view-item__link">
    <div class="list-view-item__image-column">
      <div class="list-view-item__image-wrapper product-card__image-wrapper">
      {% unless product.featured_media == null %}
        <img class="list-view-item__image" src="{{ product.featured_media | img_url: '95x95', scale: 2 }}" alt="{{ product.featured_media.alt }}">
      {% endunless %}
      </div>
    </div>

    <div class="list-view-item__title-column">
      <div class="list-view-item__title" aria-hidden="true">
        <span class="product-card__title">{{ product.title }}</span>
      </div>
      {% if show_vendor %}
        <div class="list-view-item__vendor">{{ product.vendor }}</div>
      {% endif %}
    </div>
    {%if show_price%}
    <div class="list-view-item__price-column">
      {% include 'product-price-listing', product: product, show_vendor: false %}
    </div>
    {% endif %}
  </div>
</div>
`;
		const productPriceSnippets = `{% comment %}
    Renders a list of product's price (regular, sale, unit)
    Accompanies product forms and meant to be updated dynamically
    Accepts:
    - variant: {Object} Variant Liquid object (optional)
    - product: {Object} Product Liquid object (optional)
    - show_vendor: {Boolean} Show the product's vendor depending on the section setting (optional)

    Usage:
    {% include 'product-price', variant: current_variant, product: product %}
{% endcomment %}
{%- liquid
  if variant.title
    assign compare_at_price = variant.compare_at_price
    assign price = variant.price
    assign available = variant.available
  else
    assign compare_at_price = 1999
    assign price = 1999
    assign available = true
  endif

  assign money_price = price | money
-%}

<dl class="price
  {% if available == false %} price--sold-out {% endif %}
  {% if compare_at_price > price %} price--on-sale {% endif %}
  {% if variant.unit_price_measurement %} price--unit-available {% endif %}"
  data-price
>

  {% if show_vendor and product %}
    <div class="price__vendor product-view-descpt">
      <dt>
        <span class="visually-hidden">{{ 'products.product.vendor' | t }}</span>
      </dt>
      <dd>
        {{ product.vendor }}
      </dd>
    </div>
  {%else%}<div class="product-view-descpt">
  {% endif %}

  {%- comment -%}
    Explanation of description list:
      - div.price__regular: Displayed when there are no variants on sale
      - div.price__sale: Displayed when a variant is a sale
      - div.price__unit: Displayed when the first variant has a unit price
      - div.price__availability: Displayed when the product is sold out
  {%- endcomment -%}
  <div class="price__pricing-group">
    <div class="price__regular">
      <dt>
        <span class="visually-hidden visually-hidden--inline">{{ 'products.product.regular_price' | t }}</span>
      </dt>
      <dd>
        <span class="price-item price-item--regular" data-regular-price>
          {{ money_price }}
        </span>
      </dd>
    </div>
    <div class="price__sale">
      <dt>
        <span class="visually-hidden visually-hidden--inline">{{ 'products.product.sale_price' | t }}</span>
      </dt>
      <dd>
        <span class="price-item price-item--sale" data-sale-price>
          {{ money_price }}
        </span>
      </dd>
      <dt>
        <span class="visually-hidden visually-hidden--inline">{{ 'products.product.regular_price' | t }}</span>
      </dt>
      <dd>
        <s class="price-item price-item--regular" data-regular-price>
          {{ compare_at_price | money }}
        </s>
      </dd>
    </div>
    <div class="price__badges">
      <span class="price__badge price__badge--sale" aria-hidden="true">
        <p class="p_sale">{{ 'products.product.on_sale' | t }}</p>
      </span>
      <span class="price__badge price__badge--sold-out">
      <p class="p_sold-out">{{ 'products.product.sold_out' | t }}</p>
      </span>
    </div>
  </div>
  <div class="price__unit">
    <dt>
      <span class="visually-hidden visually-hidden--inline">{{ 'products.product.unit_price_label' | t }}</span>
    </dt>
    <dd class="price-unit-price">
      {%- capture unit_price_separator -%}
        <span aria-hidden="true">/</span><span class="visually-hidden">{{ 'general.accessibility.unit_price_separator' | t }}&nbsp;</span>
      {%- endcapture -%}
      {%- capture unit_price_base_unit -%}
        <span data-unit-price-base-unit>
          {%- if variant.unit_price_measurement -%}
            {%- if variant.unit_price_measurement.reference_value != 1 -%}
              {{- variant.unit_price_measurement.reference_value -}}
            {%- endif -%}
            {{ variant.unit_price_measurement.reference_unit }}
          {%- endif -%}
        </span>
      {%- endcapture -%}

      <span data-unit-price>{{ variant.unit_price | money }}</span>{{- unit_price_separator -}}{{- unit_price_base_unit -}}
    </dd>
  </div>
       {%- if cart.taxes_included -%}
            <div class="product__policies rte" data-product-policies>
              {%- if cart.taxes_included -%}
                {{ 'products.product.include_taxes' | t }}
              {%- endif -%}
            </div>
          {%- endif -%}
</dl>
`;
		const productPriceListingSnippets = `{% comment %}
    Renders a list of product's price (regular, sale, unit)
    Accompanies product listings (collection page, search result) and not updated dynamically
    Accepts:
    - variant: {Object} Variant Liquid object (optional)
    - product: {Object} Product Liquid object (optional)
    - show_vendor: {Boolean} Show the product's vendor depending on the section setting (optional)

    Usage:
    {% include 'product-price-listing', product: product %}
{% endcomment %}
{%- liquid
  if product.title
    assign compare_at_price = product.compare_at_price
    assign price = product.price
    assign available = product.available
    assign variant = product.variants.first
  else
    assign compare_at_price = 1999
    assign price = 1999
    assign available = true
  endif

  assign money_price = price | money
-%}

<dl class="price price--listing
  {%- if available == false %} price--sold-out {% endif -%}
  {%- if compare_at_price > price %} price--on-sale {% endif -%}
  {%- if product.price_varies == false and product.compare_at_price_varies %} price--compare-price-hidden {% endif -%}
  {%- if variant.unit_price_measurement %} price--unit-available {% endif -%}"
>
  {% if show_vendor and product %}
    <div class="price__vendor price__vendor--listing">
      <dt>
        <span class="visually-hidden">{{ 'products.product.vendor' | t }}</span>
      </dt>
      <dd>
        {{ product.vendor }}
      </dd>
    </div>
  {% endif %}

  {%- comment -%}
    Explanation of description list:
      - div.price__regular: Displayed when there are no variants on sale
      - div.price__sale: Displayed when a variant is a sale
      - div.price__unit: Displayed when the first variant has a unit price
      - div.price__availability: Displayed when the product is sold out
  {%- endcomment -%}
  <div class="price__regular">
    <dt>
      <span class="visually-hidden visually-hidden--inline">{{ 'products.product.regular_price' | t }}</span>
    </dt>
    <dd>
      <span class="price-item price-item--regular">
        {%- if product.price_varies -%}
          {{ 'products.product.from_lowest_price_html' | t: lowest_price: money_price }}
        {%- else -%}
          {{ money_price }}
        {%- endif -%}
      </span>
    </dd>
  </div>
  <div class="price__sale">
    <dt>
      <span class="visually-hidden visually-hidden--inline">{{ 'products.product.sale_price' | t }}</span>
    </dt>
    <dd>
      <span class="price-item price-item--sale">
        {%- if product.price_varies -%}
          {{ 'products.product.from_lowest_price_html' | t: lowest_price: money_price }}
        {%- else -%}
          {{ money_price }}
        {%- endif -%}
      </span>
    </dd>
    <div class="price__compare">
      <dt>
        <span class="visually-hidden visually-hidden--inline">{{ 'products.product.regular_price' | t }}</span>
      </dt>
      <dd>
        <s class="price-item price-item--regular">
          {{ compare_at_price | money }}
        </s>
      </dd>
    </div>
  </div>
  <div class="price__unit">
    <dt>
      <span class="visually-hidden visually-hidden--inline">{{ 'products.product.unit_price_label' | t }}</span>
    </dt>
    <dd class="price-unit-price">
      {%- capture unit_price_separator -%}
        <span aria-hidden="true">/</span><span class="visually-hidden">{{ 'general.accessibility.unit_price_separator' | t }}&nbsp;</span>
      {%- endcapture -%}
      {%- capture unit_price_base_unit -%}
        <span>
          {%- if variant.unit_price_measurement -%}
            {%- if variant.unit_price_measurement.reference_value != 1 -%}
              {{- variant.unit_price_measurement.reference_value -}}
            {%- endif -%}
            {{ variant.unit_price_measurement.reference_unit }}
          {%- endif -%}
        </span>
      {%- endcapture -%}

      <span>{{ variant.unit_price | money }}</span>{{- unit_price_separator -}}{{- unit_price_base_unit -}}
    </dd>
  </div>
</dl>
`;
		const searchDrawerSnippets = `<div id="SearchDrawer" class="search-bar drawer drawer--top critical-hidden" role="dialog" aria-modal="true" aria-label="{{ 'general.search.placeholder' | t }}" data-predictive-search-drawer>
  <div class="search-bar__interior">
    <div class="search-form__container" data-search-form-container>
      <form class="search-form search-bar__form" action="{{ routes.search_url }}" method="get" role="search">
        <div class="search-form__input-wrapper">
          <input
            type="text"
            name="q"
            placeholder="{{ 'general.search.placeholder' | t }}"
            role="combobox"
            aria-autocomplete="list"
            aria-owns="predictive-search-results"
            aria-expanded="false"
            aria-label="{{ 'general.search.placeholder' | t }}"
            aria-haspopup="listbox"
            class="search-form__input search-bar__input"
            data-predictive-search-drawer-input
            data-base-url="{{ routes.search_url }}"
          />
          <input type="hidden" name="options[prefix]" value="last" aria-hidden="true" />
          <div class="predictive-search-wrapper predictive-search-wrapper--drawer" data-predictive-search-mount="drawer"></div>
        </div>

        <a class="search-bar__submit search-form__submit"
           onclick="$(this).closest('form').submit()"
          data-search-form-submit>
          {% include 'icon-search' %}
          <span class="icon__fallback-text">{{ 'general.search.submit' | t }}</span>
        </a>
      </form>

      <div class="search-bar__actions">
        <a class="btn--link search-bar__close js-drawer-close">
          {% include 'icon-close' %}
          <span class="icon__fallback-text">{{ 'general.search.close' | t }}</span>
        </a>
      </div>
    </div>
  </div>
</div>
`;
		const siteseedFilterActionSnippets = `{%- assign home_filter = false -%}
{%- if request.page_type != 'index' -%}{%- assign home_filter = false -%}{%- endif -%}
{% if request.page_type == 'collection'  or home_filter %}
<script id="gspfFilterTree"   type="template/html">{% include 'siteseed.filter.tree' %}</script>
<script id="gspfFilterSort"   type="template/html">{% include 'siteseed.filter.sort' %}</script>
<script id="gspfProduct"      type="template/html">{% include 'siteseed.filter.product' %}</script>
<script id="gspfNoResults"    type="template/html">{% include 'siteseed.filter.no_results' %}</script>
<script id="gspfPagination"   type="template/html">{% include 'siteseed.filter.pagination' %}</script>
{% endif %}
`;
		const siteseedFilterNoResultSnippets = `{% raw %}
  <div class="spf-col-xl-12 spf-col-lg-12 spf-col-md-12 spf-col-sm-12">
    {% if translation.product.no_results %}
      {{translation.product.no_results}}
    {% else %}
      No products found
    {% endif %}
  </div>
{% endraw %}
`;
		const siteseedFilterPaginationSnippets = `{% raw %}
{% if paginate.last_page > 1 %}
  <div class="pagination" id="pagination">
    {% if paginate.current_page > 1 %}
    <span class="prev"><a {% if paginate.current_page != 1 %} onclick="setPage({{paginate.current_page | minus: 1}})"{% endif %} href="javascript:;" rel="prev">&larr;</a></span>
    {% endif %}
    {% if paginate.current_page > 1 %}
    <span class="page"><a onclick="setPage(1)" href="javascript:">1</a></span>
    {% endif %}
    {% if paginate.current_page > 4 %}
    <span class="deco">…</span>
    {% endif %}
    {% if paginate.current_page > 3 %}
    <span class="page"><a onclick="setPage({{paginate.current_page | minus: 2}})" href="javascript:;">{{paginate.current_page | minus: 2}}</a></span>
    {% endif %}
    {% if paginate.current_page > 2 %}
    <span class="page"><a onclick="setPage({{paginate.current_page | minus: 1}})" href="javascript:;">{{paginate.current_page | minus: 1}}</a></span>
    {% endif %}
    <span class="page current">{{paginate.current_page}}</span>
    {% assign prevPage = paginate.last_page | minus: 1 %}
    {% if prevPage > paginate.current_page %}
    <span class="page"><a onclick="setPage({{paginate.current_page | plus: 1}})" href="javascript:;">{{paginate.current_page | plus: 1}}</a></span>
    {% endif %}
    {% assign _prevPage = paginate.last_page | minus: 2 %}
    {% if _prevPage > paginate.current_page %}
    <span class="page"><a onclick="setPage({{paginate.current_page | plus: 2}})" href="javascript:;">{{paginate.current_page | plus: 2}}</a></span>
    {% endif %}
    {% assign __prevPage = paginate.last_page | minus: 3 %}
    {% if __prevPage > paginate.current_page %}
    <span class="deco">…</span>
    {% endif %}
    {% if paginate.last_page > paginate.current_page %}
    <span class="page"><a onclick="setPage({{paginate.last_page}})" href="javascript:;">{{paginate.last_page}}</a></span>
    {% endif %}
    {% if paginate.current_page < paginate.last_page %}
    <span class="next"><a {% if paginate.current_page != paginate.last_page %} onclick="setPage({{paginate.current_page | plus: 1}})"{% endif %} href="javascript:;" rel="next">&rarr;</a></span>
    {% endif %}
  </div>
{% endif %}
{% endraw %}
`;
		const siteseedFilterProductSnippets = `{% raw %}
  {% assign root_url = {% endraw %}"{%- if routes.root_url != "/" -%}{{ routes.root_url }}{%- endif -%}"{% raw %} %}
  {% assign currencyFormat = {% endraw %}{{ shop.money_format | json }}{% raw %} %}
  {% assign swatch_options = 'Color' | downcase | replace: ', ', ',' | split: ","  %}
  {% assign image_options  = '' | downcase | replace: ', ', ',' | split: ","  %}
  {% assign text_options   = 'Size' | downcase | replace: ', ', ',' | split: ","  %}
  {% assign show_selected_variant_info = true %}

  {% assign image_size     = '360x504' %}
  {% assign images_count   = product.images | size %}
  {% assign variants_count = product.variants | size %}
  {% assign options_count  = product.options | size %}
  {% assign no_image = 'https://cdn.shopify.com/s/images/themes/product-1.png' %}

  {% assign featured_image            = product.featured_image %}
  {% assign product_price             = product.price %}
  {% assign product_compare_at_price  = product.compare_at_price %}
  {% assign second_image_index        = 2 %}
  {% assign selected_or_first_available_variant = product.selected_or_first_available_variant %}

  {% if show_selected_variant_info and product.selected_variant %}
    {% assign selected_or_first_available_variant = product.selected_variant %}
    {% assign product_price             = selected_or_first_available_variant.price %}
    {% assign product_compare_at_price  = selected_or_first_available_variant.compare_at_price %}
    {% if selected_or_first_available_variant.image %}
      {% assign featured_image  = selected_or_first_available_variant.image %}
    {% endif %}
    {% for image in product.images %}
      {% if image.id == featured_image.id %}
        {% if forloop.index == images_count %}
          {% assign second_image_index = 1 %}
        {% else %}
          {% assign second_image_index = forloop.index | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endif %}


        {%- assign grid_item_width = 'small--one-half medium-up--one-quarter' -%}


<div{% if forloop.first %} data-page="{{page}}"{% endif %} class="{{ grid_item_width }}">
      <div class="grid-view-item {% unless product.available %} grid-view-item--sold-out{% endunless %} product-card">
          <div class="product-card__image-with-placeholder-wrapper" data-image-loading-animation>

          <div class="spf-product-card__inner">
            {% unless product.available %}
             <div class="sold-out">
				<p class="p_sold-out">SOLD OUT</p>
			</div>
            {% elsif product_compare_at_price > product_price %}
          	<div class="sale">
				<p class="p_sale">SALE</p>
			</div>
             {% endunless %}

            <a class="spf-product-card__image-wrapper{% if images_count > 1 %} hover-effect{% endif %}" href="{{root_url}}{{product.url}}" style="padding-top:140%;">
              {% if images_count > 0 %}
                {% for image in product.images %}
                  <img
                    data-variants="{% if image.variant_ids %}{{image.variant_ids | join: ','}}{% endif %}"
                    class="gflazyload spf-product-card__image spf-product-card__image-{% if featured_image.id == image.id %}main{% elsif forloop.index == second_image_index %}secondary{% else %}hidden{% endif %}"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    src="{{image.src | img_url: image_size}}"
                    data-src="{{image.src | img_lazyload_url}}"
                    data-sizes="auto"
                    data-aspectratio="{{image.aspect_ratio}}"
                    data-parent-fit="contain"
                    alt="{{image.alt | escape}}"
                    />
                {% endfor %}
              {% else %}
              <img data-variants="" class="gflazyload spf-product-card__image spf-product-card__image-main" src="{{no_image}}" alt="{{product.title | escape}}">
              {% endif %}
            </a>
                        <div class="spf-product__swatchs_container">
              {% for option in product.options %}
              {% assign option_index = 'option' | append: forloop.index %}
              {% assign option_name  = option.name | downcase %}
              {% assign option_index_number = forloop.index %}              {% if option.values.size > 1 %}              {% if swatch_options contains option_name or text_options contains option_name or image_options contains option_name %}
              
              {% endif %}              {% endif %}              {% endfor %}
            </div>
                      </div>

          <div class="spf-product__info">
                     <a translatable href="{{root_url}}{{product.url}}">
                        <div class="h4 spf-product-card__title">{{product.title}}</div>
            {% if product.vendor %}<div class="spf-product-card__vendor">{{product.vendor}}</div>{% endif %}
                                    <div class="spf-product-card__price-wrapper">
              {% if product_compare_at_price > product_price %}
              <span class="spf-product-card__oldprice{% unless currencyFormat contains 'money' %} money{% endunless %}">{{ product_compare_at_price | money }}</span>
              <span class="spf-product-card__saleprice{% unless currencyFormat contains 'money' %} money{% endunless %}">{{ product_price | money }}</span>
              {% else %}
              <span class="spf-product-card__price{% unless currencyFormat contains 'money' %} money{% endunless %}">{{ product_price | money }}</span>
              {% endif %}
            </div>
            </a>
          </div>
        </div>
      </div>
      </div>
      {% endraw %}
`;
		const siteseedFilterScriptSnippets = `{%- assign home_filter = false -%}
{%- if request.page_type != 'index' -%}{%- assign home_filter = false -%}{%- endif -%}
{%- if request.page_type == 'collection' or home_filter -%}
{%- assign assets_url = 'product-1.png' | asset_img_url: '50x' | split: 'product-1_50x.png' -%}
{%- assign files_url  = 'product-1.png' | file_img_url: '50x' | split: 'product-1_50x.png' -%}
{%- assign primary_locale = 'null' -%}
{%- assign enable_color_swatch = settings.enable_color_swatch -%}
{%- for locale in shop.published_locales -%}{%- if locale.primary -%}{%- assign primary_locale = locale.iso_code | json -%}{%- endif -%}{%- endfor -%}

<script>
  window.moneyFormat = "{{ shop.money_format | replace: '"', "'" }}";
  window.SiteseedMoneyFormat = "{{ shop.money_format | replace: '"', "'" }}";
  window.shopCurrency = "{{ shop.currency }}";
  window.isMultiCurrency = {% assign is_multicurrency = shop.enabled_currencies | size %}{% if is_multicurrency > 1 and is_multicurrency < 6 and false %}true{% else %}false{% endif %};
  window.assetsUrl = '{{ assets_url[0] }}';
  window.filesUrl = '{{ files_url[0] }}';
  var page_id = {% if request.page_type contains 'collection' %}{% if collection.handle == 'all' %}1{% else %}{{collection.id | default: 1}}{% endif %}{% elsif request.page_type contains 'search' %}2{% else %}0{% endif %};
  var SiteseedFilterConfig = {
    shop: {
      name: "{{ shop.name | escape }}",
      url: "{{ shop.url }}",
      domain: "{{ shop.permanent_domain }}",
      is_multicurrency: {% assign is_multicurrency = shop.enabled_currencies | size %}{% if is_multicurrency > 1 and false %}true{% else %}false{% endif %},
      currency: {{shop.currency | json}},
      cur_currency: {{cart.currency.iso_code | json}},
      cur_locale: {{request.locale.iso_code | json}},
      locale: {{primary_locale}},
      product_image: {width: 360, height: 504},
      no_image_url: "https://cdn.shopify.com/s/images/themes/product-1.png",
      themeStoreId: 0,
      translation: {"default":{"enable_color_swatch":{{enable_color_swatch}},"search":{"suggestions":"Suggestions","collections":"Collections","pages":"Pages","product":"Product","products":"Products","view_all":"Search for","not_found":"Sorry, nothing found for"},"filter":{"filter_by":"Filter By","clear_all":"Clear All","view":"View","clear":"Clear","in_stock":"In Stock","out_of_stock":"Out of Stock","ready_to_ship":"Ready to ship","search":"Search options"},"sort":{"sort_by":"Sort By","manually":"Featured","availability_in_stock_first":"Availability","best_selling":"Best Selling","alphabetically_a_z":"Alphabetically, A-Z","alphabetically_z_a":"Alphabetically, Z-A","price_low_to_high":"Price, low to high","price_high_to_low":"Price, high to low","date_new_to_old":"Date, new to old","date_old_to_new":"Date, old to new","sale_off":"% Sale off"},"product":{"add_to_cart":"Add to cart","unavailable":"Unavailable","sold_out":"Sold out","sale":"Sale","load_more":"Load more","limit":"Show","search":"Search products","no_results":"Sorry, there are no products in this collection"}}},
      images: ["user-icon.png"],
      settings: {{ settings | json }},
      home_filter: {{home_filter}},
      page: {{request.page_type | json}}
    },
    filter: {
      id: {"default":35353}[page_id] || {"default":35353}['default'] || 0,
      layout: 1,
      showCount: 1,
      isLoadMore: 0
    },
    collection: {
      id: {{ collection.id | default: 0 }},
      handle: '{{ collection.handle }}',
      sort: {% if request.page_type contains 'collection' %}"{{ 'title+asc' | default: 'best-selling' }}"{% else %}'best-selling'{% endif %},
      tags: {% if current_tags %}[{% for tag in current_tags %}{{ tag | json }},{{ tag | handle | json }}{% unless forloop.last %},{% endunless %}{% endfor %}]{% else %}null{% endif %},
      vendor: {{ collection.current_vendor | json }},
      type: {{ collection.current_type | json }},
      term: {{ search.terms | escape | json }},
      limit: 12,
      products_count: {{collection.products_count | default: 0}}
    },
    customer: {% if customer %}{id: {{customer.id}}, tags: {{customer.tags | json}}}{% else %}false{% endif %},
    selector: {
      sortBy: '.collection-sorting',
      pagination: '.pagination:first, .paginate:first, .pagination-custom:first, #pagination:first, #gf_pagination_wrap',
      products: '.grid.grid-collage'
    }
  };
</script>
<script defer src="{{ 'siteseed.filter.lib.js' | asset_url }}"></script>
{% if request.page_type == 'collection' or  home_filter %}
<style>{%include 'siteseed-filter-css'%}</style>
{% endif %}
{% endif %}
`;
		const siteseedFilterSearchSnippets = `{% raw %}
{% assign root_url = {% endraw %}"{%- if routes.root_url != "/" -%}{{ routes.root_url }}{%- endif -%}"{% raw %} %}
{% if result.isEmpty %}
  <li class="gf-search-no-result" aria-label="{% if translation.search.not_found %}{{translation.search.not_found }}{% else %}Sorry, nothing found for{% endif %} "{{result.term}}": {{result.term}}">
    <p>{% if translation.search.not_found %}{{translation.search.not_found }}{% else %}Sorry, nothing found for{% endif %}&nbsp;<b>{{result.term}}</b></p>
  </li>
{% else %}
    {% if result.suggestions %}
    <li class="gf-search-suggestions">
      <a class="gf-search-header">{{translation.search.suggestions | default: "Suggestions"}}</a>
      <ul>
        {% for suggestion in result.suggestions %}
          <li aria-label="{{translation.search.suggestions | default: "Suggestions"}}: {{suggestion.keyword}}">
            <a href="{{root_url}}/search?q={{suggestion.keyword | url_encode}}">{{suggestion.keyword}}<span class="count">{{suggestion.count}}</span></a>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endif %}
      {% if result.collections %}
    <li class="gf-search-collections">
      <a class="gf-search-header">{{translation.search.collections | default: "Collections"}}</a>
      <ul>
        {% for collection in result.collections %}
          <li aria-label="{{translation.search.collections | default: "Collections"}}: {{collection.title}}"><a href="{{root_url}}/collections/{{collection.handle}}">{{collection.title}}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% endif %}
    {% if result.pages %}
    <li class="gf-search-pages">
      <a class="gf-search-header">{{translation.search.pages | default: "Pages"}}</a>
      <ul>
        {% for page in result.pages %}
          <li aria-label="{{translation.search.pages | default: "Pages"}}: {{page.title}}"><a href="{{root_url}}/pages/{{page.handle}}">{{page.title}}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% endif %}
    {% if result.products %}
    <li class="gf-search-products">
      <a class="gf-search-header">{{translation.search.products | default: "Products"}}</a>
      <ul>
        {% for product in result.products %}
          <li aria-label="{{translation.search.products | default: "Products"}}: {{product.title}}">
            <a aria-label="{{product.handle}}" href="{{root_url}}/products/{{product.handle}}">
              <div class="gf-search-left">
                {% if product.image %}
                <img src="{{product.image.src | img_url: '100x'}}">
                {% else %}
                <img src="{{'https://cdn.shopify.com/s/images/themes/product-1.png' | img_url: '100x'}}">
                {% endif %}
              </div>
              <div class="gf-search-right">
                <div class="gf-search-item-product-title">{{product.title}}</div>
                                {% if product.vendor %}
                <div class="gf-search-item-product-vendor">{{product.vendor}}</div>
                {% endif %}
                                                                              </div>
            </a>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endif %}
    <li class="gf-search-item gf-search-item-product gf-search-viewall">
    <a href="{% if result.url %}{{result.url}}{% else %}{{root_url}}/search?q={{result.term | url_encode}}{% endif %}">
      {% if translation.search.view_all %}{{translation.search.view_all}}{% else %}Search for{% endif %} "{{result.term}}"
    </a>
  </li>
{% endif %}
{% endraw %}
`;
		const siteseedFilterSortSnippets = `{% raw %}
{% assign root_url = {% endraw %}"{%- if routes.root_url != "/" -%}{{ routes.root_url }}{%- endif -%}"{% raw %} %}

<div id="gf-controls-container">
  {%comment%}
    <form class="gf-controls-search-form">
    <input value="{{terms}}" onkeyup="this.setAttribute('value', this.value); searchProducts(this.value);" name="q" placeholder="{{translation.product.search | default: "Search products"}}" autocomplete="off" class="gf-controls-search-input"/>
    <button onclick="clearSearchProducts()" type="button" class="gf-controls-clear-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#5C5F62"/></svg>
    </button>
    <button type="button" class="gf-controls-search-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm17.707 10.293l-5.395-5.396A7.946 7.946 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.954 7.954 0 004.897-1.688l5.396 5.395A.998.998 0 0020 19a1 1 0 00-.293-.707z" fill="#3d4246"/></svg>
    </button>
  </form>
  
{%endcomment%}
    {% if pagination.total > 0 %}
  <div class="gf-actions">
    <div class="gf-filter-trigger">
      <h3 class="gf-refine-toggle-mobile" tabindex="0">
        <span onclick="siteseedfilter.toggleCanvas()"><i class="fa fa-tasks" aria-hidden="true"></i> {{translation.filter.filter_by | default: "Filter by"}}</span>
      </h3>
    </div>

    <span class="gf-summary">
            {% assign plurality = translation.search.products | default: "Products" %}
      {% assign singular = translation.search.product | default: "Product" %}
      <b>{{pagination.total}}</b> {{pagination.total | pluralize: singular, plurality}}
          </span>

    <div class="gf-filter-selection">

        <div class="sort-by limit-by hidden-xs">
          <label for="setLimit"><span>{{translation.product.limit | default: "Show"}}</span></label>
        <select id="setLimit" class="sortby-select" onchange="setLimit(this.value); return false;">
          <option value="12">12</option><option  value="24">24</option><option  value="36">36</option> </select>
      </div>
          
    {% assign available_sort  = 'available+desc,best_selling,title-ascending,title+asc,title+desc,price+asc,price+desc,created_at+desc,created_at+asc,sale-descending' | append: ',{% endraw %}{{collection.default_sort_by}}{% raw %}'  | split: "," %}

      {% capture sort_by_text %}
        {% case sort_by %}
        {% when 'best_selling' %}
          {{translation.sort.best_selling | default: "Best Selling"}}
        {% when 'manual' %}
          {{translation.sort.manually | default: "Featured"}}
        {% when 'featured' %}
          {{translation.sort.manually | default: "Featured"}}
        {% when 'available+desc' %}
          {{translation.sort.availability_in_stock_first | default: "Availability"}}
        {% when 'title+asc' %}
          {{translation.sort.alphabetically_a_z | default: "Alphabetically, A-Z"}}
        {% when 'title+desc' %}
          {{translation.sort.alphabetically_z_a | default: "Alphabetically, Z-A"}}
        {% when 'price+asc' %}
          {{translation.sort.price_low_to_high | default: "Price, low to high"}}
        {% when 'price+desc' %}
          {{translation.sort.price_high_to_low | default: "Price, high to low"}}
        {% when 'created_at+desc' %}
          {{translation.sort.date_new_to_old | default: "Date, new to old"}}
        {% when 'created_at+asc' %}
          {{translation.sort.date_old_to_new | default: "Date, old to new"}}
        {% when 'sale-descending' %}
          {{translation.sort.sale_off | default: "% Sale off"}}"}}
        {% endcase %}
      {% endcapture %}
      <div class="sort-by">
        <label for="globo-dropdown-sort_options" class="sort-by-toggle" role="button" tabindex="0" aria-expanded="false"><span>{{sort_by_text}}</span></label>
        <div id="globo-dropdown-sort_options" class="globo-dropdown-custom__options">
          {% if available_sort contains 'best_selling' %}<span data-sort="best_selling" onclick="changeSortBy('best_selling');">{{translation.sort.best_selling | default: "Best Selling"}}</span>{% endif %}
          {% if available_sort contains 'featured' %}<span data-sort="manual" onclick="changeSortBy('manual');">{{translation.sort.manually | default: "Featured"}}</span>{% endif %}
          {% if available_sort contains 'available+desc' %}<span data-sort="available+desc" onclick="changeSortBy('available+desc');">{{translation.sort.availability_in_stock_first | default: "Availability"}}</span>{% endif %}
          {% if available_sort contains 'title+asc' %}<span data-sort="title+asc" onclick="changeSortBy('title+asc');">{{translation.sort.alphabetically_a_z | default: "Alphabetically, A-Z"}}</span>{% endif %}
          {% if available_sort contains 'title+desc' %}<span data-sort="title+desc" onclick="changeSortBy('title+desc');">{{translation.sort.alphabetically_z_a | default: "Alphabetically, Z-A"}}</span>{% endif %}
          {% if available_sort contains 'price+asc' %}<span data-sort="price+asc" onclick="changeSortBy('price+asc');">{{translation.sort.price_low_to_high | default: "Price, low to high"}}</span>{% endif %}
          {% if available_sort contains 'price+desc' %}<span data-sort="price+desc" onclick="changeSortBy('price+desc');">{{translation.sort.price_high_to_low | default: "Price, high to low"}}</span>{% endif %}
          {% if available_sort contains 'created_at+desc' %}<span data-sort="created_at+desc" onclick="changeSortBy('created_at+desc');">{{translation.sort.date_new_to_old | default: "Date, new to old"}}</span>{% endif %}
          {% if available_sort contains 'created_at+asc' %}<span data-sort="created_at+asc" onclick="changeSortBy('created_at+asc');">{{translation.sort.date_old_to_new | default: "Date, old to new"}}</span>{% endif %}
         {%comment %} {% if available_sort contains 'sale-descending' %}<span data-sort="sale-descending" onclick="changeSortBy('sale-descending');">{{translation.sort.sale_off | default: "% Sale off"}}</span>{% endif %}{%endcomment%}
        </div>
      </div>
          </div>

    <div class="globo-selected-items-wrapper visible-xs">
      {% if has_filter and filters %}
      <ul class="globo-selected-items">
        {% capture selected_item_html %}
        {% assign filter_count = 0 %}
        {% for filter in filters %}
          {% if filter.is_selected %}
            {% if filter.style == 'Slider' %}
              {% assign filter_count = filter_count | plus: 1 %}
              <li class="selected-item gf-option-label">
                <a onclick="removeFilter({{filter.id}})">
                  <span class="selected-item">
                    <strong>
                      {% if filter.attribute == 'Price' %}
                        <span class="money">{{filter.values.min | times: 100 | money}}</span> - <span class="money">{{filter.values.max | times: 100 | money}}</span>
                      {% elsif filter.attribute == 'Percent Sale' %}
                        {{filter.values.min}}% - {{filter.values.max}}%
                      {% else %}
                        {{filter.values.min}} - {{filter.values.max}}
                      {% endif %}
                    </strong>
                  </span>
                  <span class="gf-clear">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#5C5F62"/></svg>
                  </span>
                </a>
              </li>
            {% else %}
              {% for value in filter.values %}
                {% if value.selected %}
                  {% assign filter_count = filter_count | plus: 1 %}
                  <li class="selected-item gf-option-label">
                    <a onclick="removeFilterValue({{filter.id}},'{{value.value | replace:"'", "'" | escape_once}}')">
                      <span class="selected-item"><strong>{{value.label}}</strong></span>
                      <span class="gf-clear"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#5C5F62"/></svg></span>
                    </a>
                  </li>
                {% endif %}
              {% endfor %}
            {% endif %}
          {% endif %}
        {% endfor %}
        {% endcapture %}
        {% if filter_count > 1 %}
        <li class="selected-item gf-option-label"><a onclick="clearAllFilter()" class="clear-refinements">{{ translation.filter.clear_all | default: "Clear all"}}</a></li>
        {% endif %}
        {{selected_item_html}}
      </ul>
      {% endif %}
    </div>
  </div>
  {% endif %}
</div>
{% endraw %}
`;
		const siteseedFilterTreeSnippets = `{% raw %}
{% assign ready_to_ship_label = translation.filter.ready_to_ship | default: "Ready to ship" %}
{% assign in_stock_label      = translation.filter.in_stock | default: "In Stock" %}
{% assign out_of_stock_label  = translation.filter.out_of_stock | default: "Out of Stock" %}

<div class="gf-filter-header">
  <div class="gf-filter-heading">{{translation.filter.filter_by | default: "Filter by"}}</div>
  {% if has_filter %}<a onclick="clearAllFilter()" class="gf-refine-toggle visible-xs">{{ translation.filter.clear_all | default: "Clear all"}}</a>{%endif%}
  <span onclick="siteseedfilter.toggleCanvas()" class="gf-close-canvas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z" fill="#5C5F62"></path></svg></span>
</div>
<div class="globo-selected-items-wrapper">
  {% if has_filter %}
  <div class="gf-block-title hidden-xs">
    <h3><span>{{ translation.filter.filter_by | default: "Filter by"}}</span></h3>
    <a onclick="clearAllFilter()" class="gf-refine-toggle hidden-xs">{{ translation.filter.clear_all | default: "Clear all"}}</a>
  </div>
  <div class="gf-block-content globo-selected-items">
    {% for filter in filters %}
      {% if filter.is_selected %}
        {% if filter.style == 'Slider' %}
          <div class="selected-item gf-option-label">
            <a onclick="removeFilter({{filter.id}})">
              <span  class="selected-item">
                <span class="">{% if translation.labels and translation.labels[filter.id] %}{{translation.labels[filter.id]}}{% else %}{{filter.label}}{% endif %}</span>
                <strong>
                  {% if filter.attribute == 'Price' %}
                    <span class="money">{{filter.values.min | times: 100 | money}}</span> - <span class="money">{{filter.values.max | times: 100 | money}}</span>
                  {% elsif filter.attribute == 'Percent Sale' %}
                    {{filter.values.min}}% - {{filter.values.max}}%
                  {% else %}
                    {{filter.values.min}} - {{filter.values.max}}
                  {% endif %}
                </strong>
              </span>
              <span class="gf-clear"></span>
            </a>
          </div>
        {% else %}
          {% for value in filter.values %}
            {% if value.selected %}
              {% if filter.attribute == 'Ready to ship' %}
                {% assign value_label = ready_to_ship_label %}
              {% elsif filter.attribute == 'Availability' %}
                {% if value.value == 1 %}
                  {% assign value_label = in_stock_label %}
                {% elsif value.value == 0 %}
                  {% assign value_label = out_of_stock_label %}
                {% endif %}
              {% else %}
                {% assign value_label = value.label %}
              {% endif %}
              <div class="selected-item gf-option-label">
                <a onclick="removeFilterValue({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')">
                  <span class="selected-item"><span class="" >{% if translation.labels and translation.labels[filter.id] %}{{translation.labels[filter.id]}}{% else %}{{filter.label}}{% endif %}</span><strong><span class="gf-label">{{value_label}}</span></strong></span>
                  <span class="gf-clear"></span>
                </a>
              </div>
            {% endif %}
          {% endfor %}
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
</div>

<div class="gf-filter-contents">
  {% if filters %}
    {% for filter in filters %}
    {% unless filter.values.size == 1 and filter.values.first.selected == false and filter.values.first.count == pagination.total %}    <div data-filter-type="{{filter.attribute | replace: 'option:', ''}}" data-filter-id="{{filter.id}}" class="gf-option-block {{filter.class}}{% if filter.is_collapse %} is-collapsed{% endif %}">
      <div class="gf-block-title">
        <h3><span>{% if translation.labels and translation.labels[filter.id] %}{{translation.labels[filter.id]}}{% else %}{{filter.label}}{% endif %}</span></h3>
        {% if filter.help %}
        <span class="gf-tooltip-trigger" aria-hidden="true">?</span>
        <div class="gf-tooltip"><div class="gf-tooltip-content" >{{filter.help | newline_to_br}}</div></div>
        {% endif %}
        {% if filter.is_selected %}
        <a class="gf-clear" onclick="removeFilter({{filter.id}})">{{ translation.filter.clear | default: "Clear"}}</a>
        {% endif %}
      </div>
      <div class="gf-block-content">
        {% if filter.searchable and filter.style != 'Slider' %}<input type="text" placeholder="{{ translation.filter.search | default: "Search options"}}" value="" onkeyup="siteseedfilter.searchValues(this);" class="gf-search">{% endif %}
        {% assign values_count = 0 %}
        {% if filter.values %}{% assign values_count = filter.values | size %}{% endif %}

        <div class="gf-scroll {% if filter.style != 'Slider' and values_count > 10 %}gf-block-scroll{% endif %}">
          {% if filter.style == 'Slider' %}
          <div class="gf-range-inputs">
             <div class="gf-range-inputs">
            <input class="gf-range-min" id="min-{{filter.id}}" value="{{filter.values.min}}" type="text" aria-label="Min value">
            <span class="gf-range-split"> - </span>
            <input class="gf-range-max" id="max-{{filter.id}}" value="{{filter.values.max}}" type="text" aria-label="Max value">
          </div>
            <div class="gf-range-slider" data-min="{{filter.ranges.min}}" data-max="{{filter.ranges.max}}" data-id="{{filter.id}}" data-attribute="{{filter.id}}" id="slider-{{filter.id}}"></div>
          </div>
          {% else %}
          <ul class="gf-option-box">
            {% if filter.attribute == 'Collection' %}
              {% assign collection_id = {% endraw %}{{collection.id | default: 0}}{% raw %} %}
              {% if filter.tree %}
                {% for node in filter.tree %}
                  <li>
                    <div>
                    {% if filter.style == 'Checkbox' %}
                      <a {% if node.selected or node.value == collection_id %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{node.value}}')" title="{{node.label | escape}}">
                        <span class="gf-Checkbox"></span>
                        <span class="gf-label">{{node.label}}</span>
                        <span class="gf-count">({{node.count}})</span>                      </a>
                    {% elsif filter.style == 'Radio' %}
                      <a {% if node.selected or node.value == collection_id %} class="checked"{% endif %} onclick="toggleRadioFilter({{filter.id}},'{{node.value}}')" title="{{node.label | escape}}">
                        <span class="gf-RadioButton"></span>
                        <span class="gf-label">{{node.label}}</span>
                        <span class="gf-count">({{node.count}})</span>                      </a>
                    {% elsif filter.style == 'Collection' %}
                      <a {% if node.selected or node.value == collection_id %} class="checked"{% endif %} onclick="changeCollection('{{node.handle}}')" title="{{node.label | escape}}">
                        <span class="gf-label">{{node.label}}</span>
                        <span class="gf-count">({{node.count}})</span>                      </a>
                    {% endif %}
                    {% if node.children %}<span></span>{% endif %}
                    </div>
                    {% if node.children %}
                    <ul>
                      {% for child in node.children %}
                        <li>
                          <div>
                          {% if filter.style == 'Checkbox' %}
                            <a {% if child.selected or child.value == collection_id %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{child.value | replace:"'", "\'" | escape}}')" title="{{child.label | escape}}">
                              <span class="gf-Checkbox"></span>
                              <span class="gf-label">{{child.label}}</span>
                              <span class="gf-count">({{child.count}})</span>                            </a>
                          {% elsif filter.style == 'Radio' %}
                            <a {% if child.selected or child.value == collection_id %} class="checked"{% endif %} onclick="toggleRadioFilter({{filter.id}},'{{child.value | replace:"'", "\'" | escape}}')" title="{{child.label | escape}}">
                              <span class="gf-RadioButton"></span>
                              <span class="gf-label">{{child.label}}</span>
                              <span class="gf-count">({{child.count}})</span>                            </a>
                          {% elsif filter.style == 'Collection' %}
                            <a {% if child.selected or child.value == collection_id %} class="checked"{% endif %} onclick="changeCollection('{{child.handle}}')" title="{{child.label | escape}}">
                              <span class="gf-label">{{child.label}}</span>
                              <span class="gf-count">({{child.count}})</span>                            </a>
                          {% endif %}
                          {% if child.children %}<span></span>{% endif %}
                          </div>
                          {% if child.children %}
                            <ul>
                              {% for child2 in child.children %}
                                <li>
                                  {% if filter.style == 'Checkbox' %}
                                    <a {% if child2.selected or child2.value == collection_id %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{child2.value | replace:"'", "\'" | escape}}')" title="{{child2.label | escape}}">
                                      <span class="gf-Checkbox"></span>
                                      <span class="gf-label">{{child2.label}}</span>
                                      <span class="gf-count">({{child2.count}})</span>                                    </a>
                                  {% elsif filter.style == 'Radio' %}
                                    <a {% if child2.selected or child2.value == collection_id %} class="checked"{% endif %} onclick="toggleRadioFilter({{filter.id}},'{{child2.value | replace:"'", "\'" | escape}}')" title="{{child2.label | escape}}">
                                      <span class="gf-RadioButton"></span>
                                      <span class="gf-label">{{child2.label}}</span>
                                      <span class="gf-count">({{child2.count}})</span>                                    </a>
                                  {% elsif filter.style == 'Collection' %}
                                    <a {% if child2.selected or child2.value == collection_id %} class="checked"{% endif %} onclick="changeCollection('{{child2.handle}}')" title="{{child2.label | escape}}">
                                      <span class="gf-label">{{child2.label}}</span>
                                      <span class="gf-count">({{child2.count}})</span>                                    </a>
                                  {% endif %}
                                </li>
                              {% endfor %}
                            </ul>
                          {% endif %}
                        </li>
                      {% endfor %}
                    </ul>
                    {% endif %}
                  </li>
                {% endfor %}
              {% else %}
                {% for value in filter.values %}
                <li>
                  <div>
                  {% if filter.style == 'Checkbox' %}
                    <a {% if value.selected or value.value == collection_id %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')" title="{{value.label | escape}}">
                      <span class="gf-Checkbox"></span>
                      <span class="gf-label">{{value.label}}</span>
                      <span class="gf-count">({{value.count}})</span>                    </a>
                  {% elsif filter.style == 'Radio' %}
                    <a {% if value.selected or value.value == collection_id %} class="checked"{% endif %} onclick="toggleRadioFilter({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')" title="{{value.label | escape}}">
                      <span class="gf-RadioButton"></span>
                      <span class="gf-label">{{value.label}}</span>
                      <span class="gf-count">({{value.count}})</span>                    </a>
                  {% elsif filter.style == 'Collection' %}
                    <a {% if node.selected or value.value == collection_id %} class="checked"{% endif %} onclick="changeCollection('{{value.handle}}')" title="{{value.label | escape}}">
                      <span class="gf-label">{{value.label}}</span>
                      <span class="gf-count">({{value.count}})</span>                    </a>
                  {% endif %}
                  </div>
                </li>
                {% endfor %}
              {% endif %}
            {% else %}
              {% for value in filter.values %}
                {% if filter.attribute == 'Ready to ship' %}
                  {% assign value_label = ready_to_ship_label %}
                {% elsif filter.attribute == 'Availability' %}
                  {% if value.value == 1 %}
                    {% assign value_label = in_stock_label %}
                  {% elsif value.value == 0 %}
                    {% assign value_label = out_of_stock_label %}
                  {% endif %}
                {% else %}
                  {% assign value_label = value.label %}
                {% endif %}
                {% if filter.style == 'Checkbox' %}
                  <li>
                    <a{% if value.selected %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')" title="{{value_label | escape}}">
                      <span class="gf-Checkbox"></span>
                    {% if filter.label == 'Color' and translation.enable_color_swatch %} 
                      {% assign colorValue = value.label| downcase %}
                      {%assign colorObj = colorSwatchArray | where:'color_text',colorValue  %}
                      	{%if colorObj.size > 0 %}
                      		{%if colorObj[0] and colorObj[0].color_swatch_img and colorObj[0].color_swatch_img != '' %}
                            	<span style="background:url('{{fileUrl}}{{colorObj[0].color_swatch_img}}');border: 1px solid rgb(200, 196, 196);border-radius: 50%;position: relative;display: block;width: 17px;height: 17px;margin-right: 5px;"></span>
                      		{%elsif colorObj[0] and colorObj[0].color_swatch_hexcode and colorObj[0].color_swatch_hexcode!=""%}
                                <span style="background-color:{{colorObj[0].color_swatch_hexcode}};border: 1px solid rgb(200, 196, 196);border-radius: 50%;position: relative;display: block;width: 17px;height: 17px;margin-right: 5px;"></span>
                      		{%endif%}
                      	{%else%}
                      	  <span style="background-color:{{value.label}};border: 1px solid rgb(200, 196, 196);border-radius: 50%;position: relative;display: block;width: 17px;height: 17px;margin-right: 5px;"></span>
                      	{%endif%}
                     {%endif%}
                     <span class="gf-label">{{value_label}}</span>
                      <span class="gf-count">({{value.count}})</span>                    </a>
                  </li>
                {% elsif filter.style == 'Radio' %}
                  <li>
                    <a{% if value.selected %} class="checked"{% endif %} onclick="toggleRadioFilter({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')" title="{{value_label | escape}}">
                      <span class="gf-RadioButton"></span>
                      <span class="gf-label">{{value_label}}</span>
                      <span class="gf-count">({{value.count}})</span>                    </a>
                  </li>
                {% elsif filter.style contains 'Swatch' %}
                  {% assign attribute = filter.attribute | replace: 'option:', '' | downcase %}
                  {% assign value_handle = value.value | downcase %}
                  <li>
                    <a {% if value.selected %} class="checked"{% endif %} onclick="toggleCheckboxFilter({{filter.id}},'{{value.value | replace:"'", "\'" | escape}}')" title="{{value.label | escape}}">
                      {% if swatches[attribute] and swatches[attribute][value_handle] %}
                        {% if swatches[attribute][value_handle].mode == 1 %}
                          <span class="gf-option-one-color" style="background-color:{{ swatches[attribute][value_handle].color_1 }}"></span>{% if filter.style contains 'Swatch - Text' %} <span class="gf-label">{{value.label}}</span>{% endif %}
                        {% elsif swatches[attribute][value_handle].mode == 2 %}
                          <span class="gf-option-two-color" style="background-color:{{ swatches[attribute][value_handle].color_1 }}"><span class="bottom-color" style="border-bottom-color:{{ swatches[attribute][value_handle].color_2 }}"></span></span>{% if filter.style contains 'Swatch - Text' %} <span class="gf-label">{{value.label}}</span>{% endif %}
                        {% elsif swatches[attribute][value_handle].mode == 3 %}
                          <span class="gf-swatch-image" style="background-image: url('{{ swatches[attribute][value_handle].image }}');background-color: {{ value.value | replace:"'", "\'" | escape }}"></span>{% if filter.style contains 'Swatch - Text' %} <span class="gf-label">{{value.label}}</span>{% endif %}
                        {% endif %}
                      {% else %}
                        {% assign value_handle = value.value | handle %}
                        {% assign value_jpg    = value_handle | append: '.jpg' %}
                        {% assign value_png    = value_handle | append: '.png' %}
                        {% assign value_jpeg   = value_handle | append: '.jpeg' %}
                        <span class="gf-swatch-image" style="
                          {% if images contains value_jpg %}
                          background-image: url('{{ value_jpg | asset_img_url: '50x' | prepend: 'https:' }}')
                          {% elsif images contains value_png %}
                          background-image: url('{{ value_png | asset_img_url: '50x' | prepend: 'https:' }}')
                          {% elsif images contains value_jpeg %}
                          background-image: url('{{ value_jpeg | asset_img_url: '50x' | prepend: 'https:' }}')
                          {% endif %}
                          background-color: {{ value.value | replace:"'", "\'" | escape }};"></span>{% if filter.style contains 'Swatch - Text' %} <span class="gf-label">{{value.label}}</span>{% endif %}
                      {% endif %}
                    </a>
                  </li>
                {% endif %}
              {% endfor %}
              {% if filter.style == 'Swatch' %}
              <li class="hidden-box"><a><span class="gf-swatch-image"></span></a></li>
              <li class="hidden-box"><a><span class="gf-swatch-image"></span></a></li>
              <li class="hidden-box"><a><span class="gf-swatch-image"></span></a></li>
              <li class="hidden-box"><a><span class="gf-swatch-image"></span></a></li>
              <li class="hidden-box"><a><span class="gf-swatch-image"></span></a></li>
              {% endif %}
            {% endif %}
          </ul>
          {% endif %}
        </div>
      </div>
    </div>
    {% endunless %}    {% endfor %}
  {% endif %}
</div>
<div class="gf-filter-footer">
  {% assign plurality = translation.search.products | default: "Products" %}
  {% assign singular = translation.search.product | default: "Product" %}
  <button type="button" onclick="siteseedfilter.toggleCanvas()">{{ translation.filter.view | default: "View"}} <b>{{pagination.total}}</b> {{pagination.total | pluralize: singular, plurality}}</button>
</div>
{% endraw %}
`;
		const socialSharingSnippets = `<ul class="social-sharing">

  {% if settings.share_facebook %}
    <li>
      <a target="_blank" href="//www.facebook.com/sharer.php?u={{ shop.url | append: share_permalink }}" class="btn btn--small btn--share share-facebook">
        {% include 'icon-facebook' %}
        <span class="share-title" aria-hidden="true">{{ 'general.social.share_on_facebook' | t }}</span>
        <span class="visually-hidden">{{ 'general.social.alt_text.share_on_facebook' | t }}</span>
      </a>
    </li>
  {% endif %}

  {% if settings.share_twitter %}
    <li>
      <a target="_blank" href="//twitter.com/share?text={{ share_title | url_param_escape }}&amp;url={{ shop.url | append: share_permalink }}" class="btn btn--small btn--share share-twitter">
        {% include 'icon-twitter' %}
        <span class="share-title" aria-hidden="true">{{ 'general.social.share_on_twitter' | t }}</span>
        <span class="visually-hidden">{{ 'general.social.alt_text.share_on_twitter' | t }}</span>
      </a>
    </li>
  {% endif %}

  {% if settings.share_pinterest %}
    <li>
      <a target="_blank" href="//pinterest.com/pin/create/button/?url={{ shop.url | append: share_permalink }}&amp;media={{ share_image | img_url: '1024x1024' }}&amp;description={{ share_title | url_param_escape }}" class="btn btn--small btn--share share-pinterest">
        {% include 'icon-pinterest' %}
        <span class="share-title" aria-hidden="true">{{ 'general.social.share_on_pinterest' | t }}</span>
        <span class="visually-hidden">{{ 'general.social.alt_text.share_on_pinterest' | t }}</span>
      </a>
    </li>
  {% endif %}

</ul>
`;

		const topHeaderSnippets = `<form class="search-form search-bar__form {{class}}" action="{{ routes.search_url }}" method="get" role="search">
        <div class="search-form__input-wrapper">
          <input
            type="text"
            name="q"
            placeholder="{{ 'general.search.placeholder' | t }}"
            role="combobox"
            aria-autocomplete="list"
            aria-owns="predictive-search-results"
            aria-expanded="false"
            aria-label="{{ 'general.search.placeholder' | t }}"
            aria-haspopup="listbox"
            class="search-form__input search-bar__input"
            data-predictive-search-drawer-input
            data-base-url="{{ routes.search_url }}"
            id="search-form__input-id"
          />
          <input type="hidden" name="options[prefix]" value="last" aria-hidden="true" />
          <div class="predictive-search-wrapper predictive-search-wrapper--drawer" data-predictive-search-mount="drawer"></div>
        </div>

        <a class="search-bar__submit search-form__submit"
           onclick="if(document.getElementById('search-form__input-id').value != ''){$(this).closest('form').submit()}"
          data-search-form-submit>
          {% include 'icon-search' %}
          <span class="icon__fallback-text">{{ 'general.search.submit' | t }}</span>
        </a>
      </form>
      <span style="display: flex;padding: 0px 0px;" class="{{class}}" id="serachbarSpan">
	<span style="padding: 0px 5px 0px 5px;">
		<a href="{{ routes.cart_url }}" class="site-header__icon site-header__cart">
			{% include 'icon-cart' %}
			<span class="icon__fallback-text">{{ 'layout.cart.title' | t }}</span>
			<div id="CartCount" class="site-header__cart-count{% if cart.item_count == 0 %} {% endif %}"
				data-cart-count-bubble>
				<span data-cart-count>{{ cart.item_count }}</span>
				<span class="icon__fallback-text medium-up--hide">{{ 'layout.cart.items_count' | t: count:
					cart.item_count }}</span>
			</div>
		</a>
	</span>
	{% if shop.customer_accounts_enabled %}
	<span style="padding: 0px 5px 0px 5px;">
		{% if customer %}
		<a href="{{ routes.account_url }}" class="site-header__icon site-header__account">
			{% include 'icon-login' %}
			<span class="icon__fallback-text">{{ 'layout.customer.account' | t }}</span>
		</a>
		{% else %}
		<a href="{{ routes.account_login_url }}" class="site-header__icon site-header__account">
			{% include 'icon-login' %}
			<span class="icon__fallback-text">{{ 'layout.customer.log_in' | t }}</span>
		</a>
		{% endif %}
	</span>
	{% endif %}
</span>
`;

		const giftCardCssAssets = `/*================ Variable ================*/
/*============================================================================
  Grid Breakpoints and Class Names
    - Do not change the variable names
    - Breakpoint pixel values are used in the window.theme.breakpoints object
==============================================================================*/
/*============================================================================
  Generate breakpoint-specific column widths and push classes
    - Default column widths: $grid-breakpoint-has-widths: ($small, $medium-up);
    - Default is no push classes
==============================================================================*/
/*================ Color Variables ================*/
/*================ Sizing Variables ================*/
/*================ Footer Variables ================*/
/*================ Z-Index ================*/
/*================ SVG ================*/
/*================ Drawers ================*/
/*================ Hero Slider ================*/
/*================ Typography ================*/
/*================ Gift Cards ================*/
/*================ Z-index ================*/
/*================ Product video ================*/
/*================ Image placeholder ================*/
/*================ #Giftcard Template ================*/
.giftcard__apple-wallet-image {
  display: block;
  margin: 0 auto; }

/*================ Print Giftcard Styles ================*/
@media print {
  @page {
    margin: 0.5cm; }
  p {
    orphans: 3;
    widows: 3; }
  html,
  body {
    background-color: #fff;
    color: #000; }
  .giftcard__print-link,
  .giftcard__apple-wallet {
    display: none; } }

/*================ Custom Giftcard Styles ================*/
.template-giftcard {
  background: var(--color-body);
  padding: 0 11px; }
  .template-giftcard .site-header__logo {
    padding-left: 0; }
  .template-giftcard .site-header__logo-image {
    max-width: 200px; }
  .template-giftcard .wrapper {
    max-width: 588px; }
    .template-giftcard .wrapper img,
    .template-giftcard .wrapper object,
    .template-giftcard .wrapper iframe {
      max-width: 100%; }

.giftcard-wrapper {
  max-width: 31rem;
  margin: 0 auto; }

.giftcard__header {
  margin-top: 110px; }

.giftcard__tag--active {
  opacity: 0.6; }

/*================ Gift Card image ================*/
.giftcard__wrap {
  position: relative;
  margin: 27.5px 27.5px 55px;
  background-color: #e95e61;
  border-radius: 10px; }
  .giftcard__wrap img {
    position: relative;
    display: block;
    border-radius: 10px;
    z-index: 2; }
  .giftcard__wrap::before, .giftcard__wrap::after {
    content: '';
    position: absolute;
    width: 47px;
    height: 47px;
    z-index: 3; }
  .giftcard__wrap::before {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ3IDQ3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBvcGFjaXR5PSIwLjEiPgoJCTxwYXRoIGQ9Ik00NC41ODYsMUwxLDQ0LjU4NlYxMGMwLTQuOTYzLDQuMDM3LTksOS05SDQ0LjU4NiBNNDcsMEgxMEM0LjQ3NywwLDAsNC40NzcsMCwxMHYzN0w0NywwTDQ3LDB6Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDQuNTg2LDFMMSw0NC41ODZWMTBjMC00Ljk2Myw0LjAzNy05LDktOUg0NC41ODYiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K") 0 0 no-repeat;
    top: -1px;
    left: -1px; }
  .giftcard__wrap::after {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ3IDQ3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBvcGFjaXR5PSIwLjEiPgoJCTxwYXRoIGQ9Ik0yLjQxNCw0Nkw0NiwyLjQxNFYzN2MwLDQuOTYzLTQuMDM3LDktOSw5SDIuNDE0IE0wLDQ3aDM3YzUuNTIzLDAsMTAtNC40NzcsMTAtMTBWMEwwLDQ3TDAsNDd6Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMi40MTQsNDZMNDYsMi40MTRWMzdjMCw0Ljk2My00LjAzNyw5LTksOUgyLjQxNCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=") 0 0 no-repeat;
    bottom: -1px;
    right: -1px; }

/*================ Gift card code ================*/
.giftcard__code {
  position: absolute;
  text-align: center;
  width: 90%;
  z-index: 5;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%); }

.giftcard__code--medium {
  font-size: 0.875em; }

.giftcard__code--small {
  font-size: 0.75em; }

.giftcard__code__inner {
  width: 100%;
  display: inline-block;
  vertical-align: baseline;
  background-color: #fff;
  padding: 0.5em;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); }

.giftcard__code__text {
  font-size: 4vw;
  text-transform: uppercase;
  border: 1px dashed var(--color-border-form);
  padding: 0.4em 0.5em;
  display: inline-block;
  vertical-align: baseline;
  line-height: 1;
  text-align: center;
  width: 100%; }
  .giftcard__code__text.disabled {
    color: #999;
    text-decoration: line-through; }
  @media screen and (min-width: 600px) {
    .giftcard__code__text {
      font-size: 24px; } }

/*================ Gift card amount ================*/
.giftcard__amount {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 8vw;
  line-height: 1.2;
  padding: 10px;
  z-index: 5; }
  .giftcard__amount strong {
    display: block;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); }
  @media screen and (min-width: 600px) {
    .giftcard__amount {
      font-size: 48px; } }

.giftcard__amount--medium {
  font-size: 2em; }

/*================ Tooltip ================*/
.giftcard__tooltip {
  display: block;
  position: absolute;
  top: -50%;
  right: 50%;
  margin-top: 16px;
  z-index: 4;
  color: #fff;
  text-align: center;
  white-space: nowrap; }
  .giftcard__tooltip::before {
    content: '';
    display: block;
    position: absolute;
    left: 100%;
    bottom: 0;
    width: 0;
    height: 0;
    margin-left: -5px;
    margin-bottom: -5px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 5px solid #333;
    border-top: 5px solid rgba(0, 0, 0, 0.9); }

.giftcard__tooltip-label {
  display: block;
  position: relative;
  right: -50%;
  border: 0;
  border-radius: 4px;
  background-color: #333;
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 14px;
  font-size: 12px;
  text-decoration: none;
  line-height: 16px;
  text-shadow: none;
  padding: 0.5em 0.75em;
  margin-left: 0.25em; }
  .giftcard__tooltip-label small {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #b3b3b3;
    font-size: 0.875em; }

.giftcard-action-list {
  text-align: center; }

.giftcard-action-list__item {
  margin: 0 0 19.44444px; }

/*================ QR code (print only) ================*/
.giftcard__qr-code img {
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin: 0 auto 55px; }

/*================ Medium-down width ================*/
@media screen and (max-width: 580px) {
  .giftcard {
    padding-top: 27.5px; }
  .print-link {
    display: none; } }

/*================ Small width ================*/
@media screen and (max-width: 400px) {
  .giftcard__wrap::before,
  .giftcard__wrap::after {
    display: none; }
  .giftcard__code {
    font-size: 0.75em; }
  .giftcard__code--medium {
    font-size: 0.65em; }
  .giftcard__code--small {
    font-size: 0.55em; } }

/*============================================================================
  #Print Styles
==============================================================================*/
@media print {
  .giftcard__actions,
  .giftcard__wrap::before,
  .giftcard__wrap::after,
  .giftcard__tooltip {
    display: none; }
  .shop-url {
    display: block;
    text-align: center; }
  .qr-code {
    display: block; }
  .print-link {
    display: none; }
  .giftcard__code {
    margin-top: -90px; } }
`;

		const siteseedFilterCssSnippets = `@import 'https://fonts.googleapis.com/css?family=Poppins:500|Poppins:400&display=swap';
@import  'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

#gf-tree .noUi-tooltip,
#gf-tree .noUi-value {
  text-align: center;
  white-space: nowrap
}
#gf-products img.gflazyloaded, #gf-products img.gflazyload, #gf-products img.lazyload, #gf-products img.lazyloaded{
  width: 100%;
  height: auto;
}
#gf-tree .noUi-target, #gf-tree .noUi-target * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

#gf-tree .noUi-target {
    position: relative
}

#gf-tree .noUi-base,#gf-tree .noUi-connects {
  width: 100%;
  height: 8px;
  position: relative;
  z-index: 1;
}

.noUi-connects {
  background: #d8d8d8;
  overflow: hidden;
  border-radius: 2px;
}

#gf-tree .noUi-connect,#gf-tree .noUi-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -webkit-transform-style: preserve-3d;
    transform-origin: 0 0;
    transform-style: flat
}

#gf-tree .noUi-connect {
    height: 100%;
    width: 100%
}

#gf-tree .noUi-origin {
    height: 10%;
    width: 10%
}

#gf-tree .noUi-horizontal .noUi-origin {
    height: 0
}

#gf-tree .noUi-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    outline: none !important;
    width: 22px;
    height: 22px;
    right: -12px;
    top: -7px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: var(--color-text);
    cursor: pointer;
}
#gf-tree .noUi-handle.noUi-handle-lower {
    right: -10px;
}
#gf-tree .noUi-touch-area {
    height: 100%;
    width: 100%
}

#gf-tree .noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin {
    -webkit-transition: transform .3s;
    transition: transform .3s
}

#gf-tree .noUi-state-drag * {
    cursor: inherit!important
}

#gf-tree .noUi-connect {
    background: var(--color-text)
}

#gf-tree .noUi-draggable {
    cursor: ew-resize
}

#gf-tree .noUi-active {
    box-shadow: inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB
}
/*
#gf-tree .noUi-handle:before,#gf-tree .noUi-handle:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #5d5d5d;
  left: 4px;
  top: 2px;
}

#gf-tree .noUi-handle:after {
    left: 8px
}
*/
#gf-tree .noUi-pips,#gf-tree .noUi-pips * {
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

#gf-tree .noUi-pips {
  color: var(--color-text)
}

#gf-tree .noUi-value {
    position: absolute;
    white-space: nowrap;
    text-align: center
}

#gf-tree .noUi-value-sub {
    color: #ccc;
    font-size: 10px
}

#gf-tree .noUi-marker {
  position: absolute;
  background: #D3D3D3;
  top: 4px;
}

#gf-tree .noUi-pips-horizontal {
  padding: 10px 0;
  height: 50px;
  top: 100%;
  left: 0;
  width: 100%;
  position: relative;
}
#gf-tree .noUi-marker-large ~ .noUi-marker-large {
    margin-left: -1px;
}
#gf-tree .noUi-value-large {
  font-size: 13px;
}

#gf-tree .noUi-value-horizontal {
  -webkit-transform: translate(0, 25%);
  transform: translate(0, 25%);
}
#gf-tree .noUi-value-large ~ .noUi-value-large {
  -webkit-transform: translate(-100%, 25%);
  transform: translate(-100%, 25%);
}
#gf-tree .noUi-marker-horizontal.noUi-marker {
  width: 1px;
  height: 4px;
}
#gf-tree .noUi-marker-horizontal.noUi-marker.noUi-marker-large {
  height: 8px;
}
#gf-tree .noUi-marker-horizontal.noUi-marker-sub {
    height: 10px
}

#gf-tree .noUi-handle.noUi-handle-lower {
    -webkit-transform: translate(50%, 0%);
    -ms-transform: translate(50%, 0%);
    transform: translate(50%, 0%);
}

#gf-tree .noUi-handle.noUi-handle-upper {
    -webkit-transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
}

.gf-block-title-skeleton span {
    width: 100%;
    height: 12px;
    display: block;
    border-radius: 5px;
    background: rgb(246, 246, 247);
}

.gf-top_one .gf-block-title-skeleton span {
  height: 22px;
  border-radius: 2px;
  min-width: 100px;
}
.gf-top_one .gf-block-content.gf-block-skeleton{
  display: none !important
}
.gf-block-title-skeleton h3::after {
    display: none !important;
}


#gf-tree .gf-label.gf-label-skeleton {
    height: 8px;
    display: block;
    border-radius: 3px !important;
    background: rgb(246, 246, 247);
}

.gf-label-width-75 {
    max-width: 75%;
}

.gf-label-width-90 {
    max-width: 90%;
}

.gf-label-width-50 {
    max-width: 50%;
}

.spf-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
}

.spf-no-gutters {
  margin-right: 0;
  margin-left: 0
}

.spf-no-gutters>.spf-col,
.spf-no-gutters>[class*="spf-col-"] {
  padding-right: 0;
  padding-left: 0
}

.spf-col-1,
.spf-col-2,
.spf-col-3,
.spf-col-4,
.spf-col-5,
.spf-col-6,
.spf-col-7,
.spf-col-8,
.spf-col-9,
.spf-col-10,
.spf-col-11,
.spf-col-12,
.spf-col,
.spf-col-auto,
.spf-col-sm-1,
.spf-col-sm-2,
.spf-col-sm-3,
.spf-col-sm-4,
.spf-col-sm-5,
.spf-col-sm-6,
.spf-col-sm-7,
.spf-col-sm-8,
.spf-col-sm-9,
.spf-col-sm-10,
.spf-col-sm-11,
.spf-col-sm-12,
.spf-col-sm,
.spf-col-sm-auto,
.spf-col-md-1,
.spf-col-md-2,
.spf-col-md-3,
.spf-col-md-4,
.spf-col-md-5,
.spf-col-md-6,
.spf-col-md-7,
.spf-col-md-8,
.spf-col-md-9,
.spf-col-md-10,
.spf-col-md-11,
.spf-col-md-12,
.spf-col-md,
.spf-col-md-auto,
.spf-col-lg-1,
.spf-col-lg-2,
.spf-col-lg-3,
.spf-col-lg-4,
.spf-col-lg-5,
.spf-col-lg-6,
.spf-col-lg-7,
.spf-col-lg-8,
.spf-col-lg-9,
.spf-col-lg-10,
.spf-col-lg-11,
.spf-col-lg-12,
.spf-col-lg,
.spf-col-lg-auto,
.spf-col-xl-1,
.spf-col-xl-2,
.spf-col-xl-3,
.spf-col-xl-4,
.spf-col-xl-5,
.spf-col-xl-6,
.spf-col-xl-7,
.spf-col-xl-8,
.spf-col-xl-9,
.spf-col-xl-10,
.spf-col-xl-11,
.spf-col-xl-12,
.spf-col-xl,
.spf-col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px
}

.spf-col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%
}

.spf-col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%
}

.spf-col-1 {
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%
}

.spf-col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%
}

.spf-col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%
}

.spf-col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%
}

.spf-col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%
}

.spf-col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%
}

.spf-col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%
}

.spf-col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%
}

.spf-col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%
}

.spf-col-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%
}

.spf-col-11 {
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%
}

.spf-col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%
}

@media(min-width: 576px) {
  .spf-col-sm {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
  }

  .spf-col-sm-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .spf-col-sm-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .spf-col-sm-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .spf-col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .spf-col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .spf-col-sm-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .spf-col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .spf-col-sm-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .spf-col-sm-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .spf-col-sm-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .spf-col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .spf-col-sm-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .spf-col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media(min-width: 768px) {
  .spf-col-md {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
  }

  .spf-col-md-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .spf-col-md-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .spf-col-md-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .spf-col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .spf-col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .spf-col-md-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .spf-col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .spf-col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .spf-col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .spf-col-md-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .spf-col-md-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .spf-col-md-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .spf-col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media(min-width: 992px) {
  .spf-col-lg {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
  }

  .spf-col-lg-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .spf-col-lg-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .spf-col-lg-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .spf-col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .spf-col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .spf-col-lg-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .spf-col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .spf-col-lg-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .spf-col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .spf-col-lg-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .spf-col-lg-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .spf-col-lg-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .spf-col-lg-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media(min-width: 1200px) {
  .spf-col-xl {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%
  }

  .spf-col-xl-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .spf-col-xl-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%
  }

  .spf-col-xl-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%
  }

  .spf-col-xl-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .spf-col-xl-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%
  }

  .spf-col-xl-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%
  }

  .spf-col-xl-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .spf-col-xl-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%
  }

  .spf-col-xl-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%
  }

  .spf-col-xl-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .spf-col-xl-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%
  }

  .spf-col-xl-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%
  }

  .spf-col-xl-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

/* Pagination */
#gf_pagination_wrap .pagination {
  display: flex;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;
}
#gf_pagination_wrap .pagination span.prev a,
#gf_pagination_wrap .pagination span.next a {
  display: flex;
  align-items: center;
}
#gf_pagination_wrap .pagination>span {
  border: 0;
  transform: rotate(0);
  top: 0;
  display: block;
  height: auto !important;
  float: left;
  margin: 0;
  padding: 0;
  width: auto;
  border-radius: 0;
  background: 0
}

#gf_pagination_wrap .pagination>span>a,
#gf_pagination_wrap .pagination>span.deco,
#gf_pagination_wrap .pagination>span.current {
  width: auto;
  height: auto;
  position: relative;
  float: left;
  padding: 5px 10px;
  line-height: 20px;
  text-decoration: none;
  color: #666666;
  font-size: 14px;
}

#gf_pagination_wrap .pagination>span:first-child>a,
#gf_pagination_wrap .pagination>span:first-child>span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px
}

#gf_pagination_wrap .pagination>span:last-child>a,
.pagination>span:last-child>span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px
}
#gf_pagination_wrap svg {
  width: 18px;
  height: 18px;
}
.spf-loading-products {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
#gf_pagination_wrap svg.lds-spinner, #gf-products svg.lds-spinner {
  width: 60px;
  height: 60px;
}
#gf_pagination_wrap .pagination>span>a:hover,
.pagination>span>span:hover,
.pagination>span>a:focus,
#gf_pagination_wrap .pagination>span>span:focus {
  font-weight: 700;
  color: #030303;
}

#gf_pagination_wrap .pagination>.current,
.pagination>.current>a:hover,
#gf_pagination_wrap .pagination>.current:focus {
  position: relative;
  float: left;
  padding: 5px 10px;
  line-height: 20px;
  text-decoration: none;
  font-weight: 700;
  color: #030303;
}

.pagination>.disabled>span,
.pagination>.disabled>span:hover,
#gf_pagination_wrap .pagination>.disabled>span:focus,
#gf_pagination_wrap .pagination>.disabled>a,
#gf_pagination_wrap .pagination>.disabled>a:hover,
#gf_pagination_wrap .pagination>.disabled>a:focus {
  color: #777;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed
}
#gf_pagination_wrap>svg {
  margin: 0 auto;
  display: none
}

.spf-status-loading #gf_pagination_wrap>svg {
  display: block !important
}

#gf_pagination_wrap {
  padding-top: 20px;
  text-align: center;
  clear: both;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 0
}

#gf_pagination_wrap .pagination>li {
  margin: 0;
  border: 0;
  padding: 0
}
#gf_pagination_wrap+#gf_pagination_wrap {
  display: none
}

.theme-store-id-230.spf-has-filter #gf_pagination_wrap .pagination .page a,
.theme-store-id-230.spf-has-filter #gf_pagination_wrap .pagination .current {
  margin-right: 0;
  padding: 6px 12px;
  border-radius: 0;
  border: 1px solid #ddd
}

.theme-store-id-230.spf-has-filter #gf_pagination_wrap .pagination>.current {
  border: 0
}

#gf_pagination_wrap button.spf-status-loading-btn {
  display: inline-block;
  padding: 8px 10px;
  margin: 0;
  width: auto;
  line-height: 1.42;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  cursor: pointer;
  border: 1px solid transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  background-color: #1c1d1d;
  color: #fff;
  font-style: normal;
  letter-spacing: .1em;
  padding: 12px 20px;
  font-size: .8125em;
  -webkit-transition: background-color .4s ease-out;
  -moz-transition: background-color .4s ease-out;
  -ms-transition: background-color .4s ease-out;
  -o-transition: background-color .4s ease-out;
  transition: background-color .4s ease-out
}

#gf_pagination_wrap button.gf-loadmore-btn:hover {
  -webkit-transition: background-color .15s ease-out;
  -moz-transition: background-color .15s ease-out;
  -ms-transition: background-color .15s ease-out;
  -o-transition: background-color .15s ease-out;
  transition: background-color .15s ease-out;
  background-color: #3a3c3c;
  color: #fff
}

.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important
}

@media(max-width: 767px) {
  .visible-xs {
    display: block !important
  }
}

@media(min-width: 768px) and (max-width:991px) {
  .visible-sm {
    display: block !important
  }
}

@media(min-width: 992px) and (max-width:1199px) {
  .visible-md {
    display: block !important
  }
}

@media(min-width: 1200px) {
  .visible-lg {
    display: block !important
  }
}

@media(max-width: 767px) {
  .hidden-xs {
    display: none !important
  }
}

@media(min-width: 768px) and (max-width:991px) {
  .hidden-sm {
    display: none !important
  }
}

@media(min-width: 992px) and (max-width:1199px) {
  .hidden-md {
    display: none !important
  }
}

@media(min-width: 1200px) {
  .hidden-lg {
    display: none !important
  }
}

.spr-container .spr-icon.spr-icon-star-empty.spr-icon-star-hover:before,
.spr-container .spr-icon-star-half-alt:before,
.spr-container .spr-icon-star:before,
.spr-badge .spr-icon-star,
.spr-badge .spr-icon-star-half-alt {
  color: #f2b309
}

.spr-badge-starrating .spr-icon {
  font-size: 75%
}

.spr-container .spr-icon.spr-icon-star-empty:before,
.spr-badge .spr-icon.spr-icon-star-empty {
  color: #ccc
}

.gf-scroll.gf-block-scroll::-webkit-scrollbar,
body > #gf-tree .gf-filter-contents::-webkit-scrollbar{
  width: 5px;
}

.gf-scroll.gf-block-scroll::-webkit-scrollbar-track,
body > #gf-tree .gf-filter-contents::-webkit-scrollbar-track{
  background: #ebebeb
}

.gf-scroll.gf-block-scroll::-webkit-scrollbar-thumb,
body > #gf-tree .gf-filter-contents::-webkit-scrollbar-thumb{
  background: #757575
}

/* Grid */
#gf-products:after,
#gf-products:before {
  display: none !important
}

.gf-top_one .gf-option-block .gf-block-title h3 span {
  float: left
}

.spf-status-loading #gf-products {
  opacity: 0;
  visibility: hidden
}

.spf-status-loaded #gf-products,
.spf-status-failed #gf-products {
  opacity: 1;
  visibility: visible
}

.gf-option-block .gf-block-title h3:after {
  display: inline-block;
  font: normal normal normal 1em/1.2 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.gf-top_one .gf-option-block .gf-block-title h3:after {
  content: "106";
  margin-left: 5px
}

.gf-top_one .gf-option-block.is-collapsed .gf-block-title h3:after {
  content: "107"
}

.gf-left .gf-option-block .gf-block-title h3:after,
.gf-offcanvas .gf-option-block .gf-block-title h3:after {
  content: "106";
  margin-right: 8px;
  float: left
}

.gf-left .gf-option-block.is-collapsed .gf-block-title h3:after,
.gf-offcanvas .gf-option-block.is-collapsed .gf-block-title h3:after {
  content: "107"
}

#gf-tree,
#gf-tree *,
#gf-grid *,
#gfqv-modal * {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box
}

#gf-products .product-thumbnail {
  width: 100%
}

.gf-top_one #gf-grid {
  clear: both
}


.modal-open,
.offcanvas-open {
  overflow: hidden !important;
  position: relative
}

.gf-refine-toggle {
  float: right;
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
}

.gf-refine-toggle-mobile .gf-refine-toggle {
  padding: 10px
}

.selected-item.gf-option-label a{
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #3d4246;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.globo-selected-items span.selected-item {
  display: block
}

.globo-selected-items span.selected-item>span:after {
  content: ":";
  margin-right: 3px;
  margin-left: 1px;
  vertical-align: top
}

.selected-item span.gf-clear {
  width: 11px;
  height: 11px;
  margin-left: 4px;
  margin-right: 1px;
  font-size: 0;
  line-height: 0;
  flex: 0 0 11px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M11.414 10l6.293-6.293a1 1 0 10-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293A.998.998 0 0018 17a.999.999 0 00-.293-.707L11.414 10z' fill='%235C5F62'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.gf-option-block {
  margin: 0;
  clear: both;
  padding: 15px 0;
  border-bottom: 1px solid #e3e3e3
}

.gf-block-title h3 {
  margin: 0;
  flex: 1 1 100%;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  letter-spacing: 0;
  font-weight: bold;
}

.gf-block-content {
  clear: both;
  margin-top: 15px
}

.gf-block-scroll {
  width: 100% !important;
  max-height: 220px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 10px;
}

.gf-option-block ul.gf-option-box {
  width: 100%;
  overflow: hidden
}
.gf-option-block-swatch ul.gf-option-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.gf-option-box {
  padding: 0;
  margin: 0;
  list-style: none
}

ul.gf-option-box:after {
  content: "";
  clear: both;
  display: block
}

.gf-option-box li {
  display: block;
  clear: both;
  margin: 0;
  position: relative
}

.gf-option-box li>div {
  display: flex;
  justify-content: space-between;
}
.gf-option-box li>div>a {
  flex: 1 1 100%;
}
.gf-option-block ul.gf-option-box li>div>a+span:after {
  display: block;
  width: 0;
  height: 0;
  border-top: 5px solid #000;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  content: ""
}

.gf-option-block ul.gf-option-box li.is-collapsed>div>a+span:after {
  border-top: 0;
  border-bottom: 5px solid #000
}

.gf-option-block ul.gf-option-box li>div>a+span {
  display: flex;
  width: 25px;
  height: 27px;
  z-index: 2;
  align-items: center;
  justify-content: center;
  cursor: pointer
}

.gf-option-box li ul {
  flex: 0 0 100%;
  padding: 0 0 0 20px;
  margin: 0;
  border-left: 1px dotted #efefef;
}
.gf-option-box li.hidden-box{
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.gf-option-box ul li>div{
  align-items: center;
}
.gf-option-box ul li>div:before {
  width: 10px;
  height: 0;
  border-bottom: 1px dotted #efefef;
  content: "";
  margin-right: 5px;
  margin-left: -19px
}
#gf-tree a{
  cursor: pointer;
}
.gf-option-block ul li a {
  text-decoration: none;
  position: relative;
  padding: 6px 0;
  display: flex;
  line-height: 1.2;
  font-size: 14px;
  color: #000;
  align-items: center;
  cursor: pointer;
}

.gf-option-block.uppercase ul li a {
  text-transform: uppercase !important
}

.gf-option-block.capitalize ul li a {
  text-transform: capitalize !important
}

.gf-option-block.lowercase ul li a {
  text-transform: lowercase !important
}

.gf-option-block.gf-option-block-swatch ul li a,
.gf-option-block.gf-option-block-swatch-text ul li a {
  padding-left: 0
}

.gf-option-block.gf-option-block-swatch .gf-option-box li {
  clear: none;
  margin: 0 5px 5px 0;
  padding: 0;
  width: auto;
}

.gf-block-title {
  position: relative;
  line-height: 1;
  display: flex;
}

.gf-block-title > * {
 font-family: var(--font-family-body) !important;
}

.gf-Checkbox, .gf-RadioButton {
  position: relative;
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 6px;
  flex: 0 0 16px;
  min-width: 16px;
  border: 1px solid #c4cdd5;
  border-radius: 1px;
  background-color:var(--color-bg);
}
.gf-option-block ul li:hover > a > .gf-Checkbox,
.gf-option-block ul li:hover > a > .gf-RadioButton,
.gf-option-block ul li:hover > div > a > .gf-Checkbox,
.gf-option-block ul li:hover > div > a > .gf-RadioButton{
  border-color: #5a5a5a;
}
.gf-RadioButton{
  border-radius: 50%;
}
.checked .gf-Checkbox {
  border-color: #5a5a5a;
  background-size: 20px 20px;
  background-position: center;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' class='Polaris-Icon__Svg' focusable='false' aria-hidden='true'%3E%3Cpath fill='%235a5a5a' d='M8.315 13.859l-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0'%3E%3C/path%3E%3C/svg%3E");
}
.checked .gf-RadioButton{
  border-color: #5a5a5a;
}
.checked .gf-RadioButton:before {
  content: "";
  height: 8px;
  width: 8px;
  background: #5a5a5a;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  pointer-events: none;
  z-index: 9999;
}

#gf-tree .gf-label {
  flex: 1 1 auto;
  border-radius: 0 !important;  
  font-family: var(--font-family-body) !important;
}

.gf-range-inputs {
  margin-bottom: 20px
}

.gf-refine-toggle-mobile {
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  float: left;
}

.gf-clear-all {
  display: block;
  background: #000;
  margin: 0;
  padding: 10px;
  color: #fff;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  margin-top: 5px
}

.gf-option-block.gf-option-block-swatch .gf-block-content {
  padding-top: 10px
}

.gf-sort-wrap:after {
  content: "";
  display: table;
  clear: both
}

.sort-by {
  position: relative;
  display: flex;
  border-radius: 2px;
  cursor: pointer;
  background: #f7f7f7;
}

.sort-by-panel {
  position: absolute;
  background: #fff;
  right: 0;
  overflow: hidden;
  max-height: 0;
  transition: all .3s;
  width: 100%;
  min-width: 150px
}

.sort-by-panel ul {
  padding: 10px 20px;
  margin: 0;
  width: 100%
}

.sort-by.active .globo-dropdown-custom__options {
  display: block;
}
.gf-sort-wrap {
  margin-bottom: 20px
}

.sort-by:hover .sort-by-panel {
  max-height: 260px;
  transition: all .3s
}

.sort-by-panel ul li a {
  font-size: 14px;
  white-space: nowrap;
  color: #000;
  text-decoration: none;
  cursor: pointer
}

.sort-by-toggle {
  padding: 0 25px 0 10px;
  cursor: pointer;
  float: left;
  height: 38px;
  line-height: 38px;
  font-style: normal;
  margin: 0;
  white-space: nowrap;
  font-size: 14px;
  outline: none;
  border-radius: 2px;
  width: 100%;
  z-index: 1;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: initial;
}

select.sortby-select {
  height: 38px !important;
  border: none !important;
  outline: 0;
  font-style: normal;
  margin: 0;
  width: auto;
  background: 0;
  padding: 0px 25px 0px 10px !important;
  display: block;
  border-radius: 0;
  box-shadow: none;
  -webkit-appearance: none;
  z-index: 1;
  flex: 1 1 auto;
  font-size: 16px;
  color:var(--color-body-text);
}

.sort-by:before {
  display: block;
  width: 20px;
  position: absolute;
  right: 2px;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M10 14a.997.997 0 01-.707-.293l-5-5a.999.999 0 111.414-1.414L10 11.586l4.293-4.293a.999.999 0 111.414 1.414l-5 5A.997.997 0 0110 14z' fill='%235C5F62'/%3E%3C/svg%3E") !important;
  background-size: 16px !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  content: "";
  height: 100%;
}
.limit-by {
  margin-right: 10px;
  align-items: center;
  display: flex;
  font-size: 14px;
}
.limit-by .label, .limit-by label {
  margin: 0 3px 0 10px;
  padding: 0;
}
.limit-by span:hover{
  background: #f7f7f7;
}
.limit-by span {
  padding: 5px 7px;
  border-radius: 2px;
  cursor: pointer
}

.limit-by span.selected {
  text-decoration: underline;
  font-weight: bold;
}

.gf-option-box:after {
  content: "";
  clear: both;
  display: block
}

.product {
  margin-bottom: 35px
}

.product .product-inner {
  overflow: hidden
}

.product .product-thumbnail {
  position: relative;
  overflow: hidden
}

.product .loop-thumbnail {
  position: relative;
  display: block;
  opacity: 1
}

.shopify-section.mount-products.mount-images #gf-tree {
  margin-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative
}

.shopify-section.mount-products.mount-images .gf-sort-wrap {
  padding-left: 10px;
  padding-right: 10px
}

#gf-products .site-box a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}

.product .product-thumbnail .loop-thumbnail:after {
  content: "";
  display: block;
  padding-top: 100%;
  width: 100% !important
}

.aspect-product__spacer {
  width: 100%
}

.aspect-ratio-1333 .aspect-product__picture,
.aspect-ratio-15 .aspect-product__picture {
  width: auto !important;
  height: auto !important
}

.aspect-ratio-1 .product-thumbnail .loop-thumbnail:after {
  padding-top: 100%
}

.aspect-ratio-075 .product-thumbnail .loop-thumbnail:after {
  padding-top: 133.33333%
}

.aspect-ratio-1333 .product-thumbnail .loop-thumbnail:after {
  padding-top: 75.01875%
}

.aspect-ratio-15 .product-thumbnail .loop-thumbnail:after {
  padding-top: 66.66667%
}

.aspect-product__images {
  position: absolute;
  z-index: 0;
  max-width: 100%;
  max-height: 100%;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto
}

.product .loop-thumbnail .product-item-image {
  transition: opacity .3s;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0)
}

.product .loop-thumbnail .image-hover {
  opacity: 0 !important;
  transition: opacity .3s;
  z-index: 3;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0)
}

.rt-unero .ribbons {
  position: absolute;
  top: 10px;
  right: 0
}

.product .footer-button {
  position: absolute;
  right: -50%;
  bottom: 0;
  background-color: #fff;
  transition: .5s;
  z-index: 10;
  visibility: hidden
}

.product .footer-button>form>a .p-icon,
.product .footer-button>a .p-icon {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 24px;
  line-height: 47px;
  width: 47px;
  text-align: center
}

.product .footer-button>form>button,
.product .footer-button>a {
  margin: 0 !important;
  padding: 0;
  width: 47px !important;
  height: 47px !important;
  max-width: 47px !important;
  max-height: 47px !important;
  min-width: 47px !important;
  min-height: 47px !important;
  line-height: 47px;
  text-align: center;
  display: block;
  border-radius: 0;
  background-color: transparent !important;
  color: #000 !important;
  float: left;
  transform: translateX(150%);
  transition: transform .3s;
  transition-delay: .2s;
  cursor: pointer;
  position: static
}

.product .product-inner:hover .footer-button>form>button,
.product .product-inner:hover .footer-button>a {
  transform: translateX(0)
}

.spf-has-filter #gf-products {
  padding: 0;
  margin-bottom: 0;
  min-width: 100%;
  width: auto;
  z-index: 1;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: left;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: auto !important
}

.spf-has-filter #gf-products .product-collection.products-grid {
  letter-spacing: 0
}

.theme-store-id-567 #gf-products .icn {
  z-index: 9
}

.theme-store-id-747.spf-has-filter #gf-products .collection__item.product-item {
  margin-bottom: 25px
}

.theme-store-id-230.spf-has-filter #gf-products .product {
  width: 100%;
  margin: 0 0 24px
}

.theme-store-id-790.spf-has-filter.gf-left #gf-tree {
  padding-left: 2.5em
}

.theme-store-id-790.spf-has-filter.gf-left #gf-tree+#gf-grid {
  padding-right: 2.5em
}

.theme-store-id-790.spf-has-filter #gf-products {
  margin-left: 0;
  margin-right: 0
}

.theme-store-id-808.spf-has-filter .section-tags {
  display: none
}

.theme-store-id-808.spf-has-filter #gf-products,
.theme-store-id-812.spf-has-filter #gf-products {
  margin-left: -10px;
  margin-right: -10px
}

.theme-store-id-808.spf-has-filter #gf-products>article,
.theme-store-id-812.spf-has-filter #gf-products>article {
  padding-left: 10px;
  padding-right: 10px
}

.theme-store-id-567.spf-has-filter #gf-products .tag {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  visibility: visible;
  left: 15px;
  top: 5px
}

.theme-store-id-816.spf-has-filter #gf-products .grid__cell {
  padding-left: 15px
}

.theme-store-id-816.spf-has-filter #gf-products .grid__cell .labels {
  white-space: nowrap
}

.theme-store-id-838 #gf-products {
  overflow: visible
}

.spf-has-filter #gf-products.blocklayout {
  min-width: 0
}

.breadcrumb-wrapper {
  margin-bottom: 15px
}

.collection-listing {
  padding-left: 20px;
  padding-right: 20px
}

.spf-has-filter #gf-products:after {
  content: "";
  display: table;
  clear: both
}

#gf-products .product .product-thumbnail.hover-effect:hover .image-hover {
  opacity: 1 !important
}

#gf-products .product .product-thumbnail.hover-effect:hover .product-item-image {
  opacity: 0 !important
}

#gf-products .product .footer-button a {
  transition-delay: .1s
}

#gf-products .product .footer-button>form button.button.add_to_cart_button {
  background: 0;
  border: 0;
  line-height: 47px;
  width: 47px !important;
  height: 47px !important;
  max-width: 47px !important;
  max-height: 47px !important;
  min-width: 47px !important;
  min-height: 47px !important;
  margin: 0 !important;
  text-align: center;
  padding: 0;
  color: #000 !important
}

#gf-products .product .footer-button>form {
  display: block;
  float: left;
  margin: 0
}

#gf-products .product .gfqv-product-details {
  position: relative;
  margin-top: 20px;
  padding: 0;
  width: 100%
}

#gf-products .product .product-inner:hover .footer-button {
  right: 0;
  visibility: visible
}

#gf-products .product h3 {
  padding: 0 20px 0 0;
  margin: 0 0 7px;
  font-size: 14px;
  line-height: 1.2
}

#gf-products .product h3 a {
  color: #000;
  transition: none;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none
}

#gf-products .product .price-wrapper {
  margin-top: 15px;
  margin-bottom: 0
}

#gf-products .product .product-thumbnail.hover-overlay .loop-thumbnail:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
  transition: all .3s;
  opacity: 0;
  visibility: hidden
}

#gf-products .product .product-inner:hover .product-thumbnail.hover-overlay .loop-thumbnail:before {
  opacity: 1;
  z-index: 2;
  visibility: visible
}

.gf-sort-wrap {
  font-size: 14px;
  z-index: 2;
  position: relative
}

.gfqv-close-modal i {
  font-size: 45px;
  width: 46px;
  line-height: 1 !important;
  text-align: center;
  overflow: hidden;
  display: block
}


h1.product_title.entry-title {
  color: #000;
  font-weight: 400;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 22px
}

#gfqv-select {
  display: none;
}


#gfqv-btn-wrap {
  padding-top: 10px
}

#gfqv-btn {
  padding: 0 25px !important;
  transition: all .5s;
  border: 0;
  color: #fff !important;
  background-color: #3985bf;
  border-color: #3985bf;
  position: relative !important;
  border-radius: 3px !important;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-shadow: 0 1px 4px 1px rgba(0, 0, 0, .1);
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, .1);
  line-height: 1.4 !important;
  font-size: 18px !important;
  font-family: inherit !important;
  margin-bottom: 10px !important;
  text-transform: none !important;
  min-width: 130px;
  font-weight: bold;
  text-transform: uppercase !important;
  line-height: 45px !important;
  min-height: 45px !important;
  width: 100% !important;
  text-align: center !important;
}

ul.gfqv-swatch-values {
}

.gfqv-swatch {
    margin-bottom: 20px;
}

.gfqv-swatch > label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
}
.gfqv-product-gallery {
    margin-bottom: 15px;
}

.gfqv-thumbnails {
    display: flex;
    margin-left: -5px;
    margin-right: -5px;
    flex-wrap: wrap;
}

.gfqv-thumbnails > div {
    padding: 5px;
}

.gfqv-thumbnails > div > img {
    height: 50px;
    width: auto;
    display: block;
}
ul.gfqv-swatch-values {
    display: flex;
    margin: 0 -5px;
    flex-wrap: wrap;
}

ul.gfqv-swatch-values li {
    margin: 5px;
    list-style: none;
}
ul.gfqv-swatch-values li.is-soldout {
    opacity: 0.5;
    cursor: not-allowed;
}
span.gfqv-product__swatch-inner {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
}
.size-large .gfqv-product__swatch-outer {
    display: block;
    min-width: 50px;
    height: 50px;
    border-radius: 2px;
    padding: 2px;
}
.size-medium .gfqv-product__swatch-outer {
    display: block;
    min-width: 40px;
    height: 40px;
    border-radius: 2px;
    padding: 2px;
}
.gfqv-product__swatch-outer.gfqv-product__swatch-outer-image{
  box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,.15);

}
.is-selected .gfqv-product__swatch-outer-image{
  box-shadow: 0 0 0 1px rgba(63,63,68,0.8), 0 1px 3px 0 rgba(63,63,68,.15);
}
.is-soldout .gfqv-product__swatch-inner:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  background: url(https://community.shopify.com/c/image/serverpage/image-id/21483i048695B33CDDB68A/image-size/large?v=1.0&px=999);
  background-size: 100% 100%;
}
span.gfqv-product__swatch-inner img {
    display: block;
}

span.gfqv-product__swatch-inner > .gfqv-swatch-text {
  padding: 0 10px;
  min-height: 32px;
  min-width: 50px;
  line-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #262626;
  font-weight: bold;
  color: #262626;
  border-radius: 2px;
}
.gfqv-swatch-value.is-selected .gfqv-swatch-text{
  background: #262626;
  color: #ffffff;
}
span.gfqv-product__swatch-inner.size-large {
    min-width: 50px;
    display: block;
    height: 50px;
    background-size: cover;
    background-position: center;
    border-radius: 2px;
    overflow: hidden;
}
span.gfqv-product__swatch-inner.size-medium {
    min-width: 40px;
    display: block;
    height: 40px;
    border-radius: 2px;
    overflow: hidden;
}
span.gfqv-product__swatch-inner.size-medium > .gfqv-swatch-text{
  height: 100%;
}
span.gfqv-swatch-color {
    width: 100%;
    height: 100%;
    display: block;
}
span.gfqv-swatch-color + span.gfqv-swatch-color {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 46px solid transparent;
  border-right: 46px solid;
}
.size-medium span.gfqv-swatch-color + span.gfqv-swatch-color{
  border-top: 36px solid transparent;
  border-right: 36px solid;
}
span.gfqv-swatch-image {
    width: 100%;
    display: block;
    height: 100%;
    background-size: cover;
    background-position: center;
    font-size: 0;
    border-radius: 2px;
}
#shopify-section-footer {
  clear: both
}

#gf-tree {
  position: relative;
  z-index: 2
}

.gf-left #gf-tree {
  width: 20%;
  float: left;
  min-height: 1px;
  text-align: left;
  clear: left
}

.gf-left #gf-tree+#gf-grid {
  width: 80%;
  float: right;
  clear: right;
  padding-left: 25px;
}
/*
span.gf-close-canvas:after {
  content: '';
  display: block;
  width: 35px;
  height: 1px;
  background: #000;
  position: absolute;
  right: -4px;
  top: 16px;
  transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg)
}

span.gf-close-canvas:before {
  content: '';
  display: block;
  width: 35px;
  height: 1px;
  background: #000;
  position: absolute;
  right: -4px;
  top: 16px;
  transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg)
}
*/
.gf-left #gf-tree .globo-selected-items-wrapper .globo-selected-items{
  margin: 0;
  clear: both;
  padding: 15px 0;
  border-bottom: 1px solid #e3e3e3
}
body > #gf-tree .gf-option-block,
body > #gf-tree .globo-selected-items-wrapper > .globo-selected-items{
  padding: 15px !important;
  border-bottom: 1px solid #e3e3e3;
}
.gf-left .gf-option-block:last-child {
  border-bottom: 0
}

.rimage-outer-wrapper svg {
  width: 100%;
  height: auto
}

.product-block .product-link-custom {
  display: block;
  position: relative;
  color: inherit
}

.gf-top_one .gf-option-block {
  position: relative;
}

.gf-top_one .gf-filter-contents:after {
  content: "";
  clear: both;
  display: block
}

#gf-controls-container .globo-selected-items-wrapper {
  padding: 0 5px;
  flex: 0 0 100%;
  display: none;
}
.gf-offcanvas #gf-controls-container .globo-selected-items-wrapper{
  display: block;
}
#gf-controls-container .globo-selected-items,
.gf-top_one #gf-tree .globo-selected-items{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
}
#gf-controls-container .selected-item.gf-option-label,
.gf-top_one #gf-tree .globo-selected-items .selected-item.gf-option-label{
  margin: 3px;
  width: auto;
}

#gf-controls-container .globo-selected-items-wrapper .selected-item>a,
.gf-top_one #gf-tree .globo-selected-items-wrapper .selected-item>a {
  padding: 3px 3px 3px 5px;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: #e8e8e8;
}
#gf-controls-container .globo-selected-items-wrapper .selected-item > a.clear-refinements,
.gf-top_one #gf-tree .globo-selected-items-wrapper .selected-item > a.clear-refinements
{
  background: #666;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  padding: 3px 5px;
  border: 1px solid #666;
  border-radius: 2px;
  cursor: pointer;
  text-transform: initial;
}
#gf-controls-container .globo-selected-items-wrapper .globo-selected-items span.selected-item strong,
.gf-top_one #gf-tree  .globo-selected-items-wrapper .globo-selected-items span.selected-item strong{
  font-weight: 400;
  text-transform: none
}

#gf-controls-container .globo-selected-items-wrapper:after {
  content: "";
  display: table;
  clear: both
}

.globo-dropdown-custom__options {
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: 0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);
  outline: .1rem solid transparent;
  z-index: 3;
  min-width: 220px;
  border-radius: 2px;
  display: none;
  width: 100%;
  margin-top: 5px;
}
.gf-top_one .globo-dropdown-custom__options{
  margin-top: 6px;
}

.globo-dropdown-custom__options span {
  white-space: nowrap;
  font-size: 14px;
  display: block;
  padding: 5px 15px;
  cursor: pointer;
}

.globo-dropdown-custom__options span:hover {
  background: #f7f7f7;
}

#collections-main {
  margin-bottom: 25px
}

.gf-offcanvas .plp-title-filters {
  cursor: pointer
}

.gf-offcanvas .js-panel-wrapper.filters-block {
  border-bottom: 0;
  background: 0
}

span.gf-close-canvas {
  width: 36px;
  height: 36px;
  display: block;
  z-index: 999;
  cursor: pointer;
  padding: 8px;
  flex: 0 0 36px;
}

.gf-offcanvas span.gf-close-canvas {
  display: block
}

.gf-offcanvas #gf-tree {
  top: 0;
  left: -350px;
  bottom: 0;
  padding: 15px 20px;
  background: #fff;
  width: 350px !important;
  position: fixed;
  overflow: auto;
  height: 100%;
  z-index: 9999999999;
  transition: left .25s ease
}

.gf-offcanvas.offcanvas-open #gf-tree {
  left: 0
}

.gf-tree-overlay {
  display: none !important
}

.spf-status-loading #gf-tree .gf-tree-overlay {
  display: block !important
}

.gf-offcanvas #gf-tree .gf-tree-overlay {
  top: 0;
  left: -350px;
  bottom: 0;
  width: 350px !important;
  position: fixed;
  overflow: auto;
  height: 100%;
  z-index: 9996;
  transition: left .25s ease
}

.gf-offcanvas.offcanvas-open #gf-tree .gf-tree-overlay {
  left: 0
}

#gf-overlay {
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: #000;
  position: fixed;
  overflow: hidden;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 999999999;
  transition: all .25s ease;
  cursor: pointer
}

.offcanvas-open #gf-overlay {
  opacity: .5;
  visibility: visible
}

.sort-by-panel ul li {
  list-style: none;
  margin: 0
}

.offcanvas-open .gf-offcanvas-wrapper {
  left: 0;
  padding: 60px 30px 30px
}

.gf-refine-toggle-mobile i {
  margin-right: 5px
}

.gf-offcanvas #gf-tree {
  margin-bottom: 25px
}

h3.gf-refine-toggle-mobile span,
span#gf-mobile-refine-toggle {
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 38px;
  line-height: 38px;
}

ul.globo-selected-items {
  list-style: none;
  margin: 0;
  padding: 0
}

.gf-block-content:after {
  content: "";
  display: block;
  clear: both
}

.globo-selected-items,
.globo-selected-items li {
  list-style: none
}

.gf-clear {
  float: right;
  font-size: 13px;
  line-height: 20px
}

.globo-selected-items span.selected-item>span:after {
  content: ":";
  margin-right: 3px;
  margin-left: 1px;
  vertical-align: top
}

.globo-selected-items span.selected-item {
  display: flex;
  flex-wrap: wrap;
}

.selected-item>a {
  display: block;
  position: relative;
  color: #000
}

.gf-option-block-swatch ul li {
  float: left
}

.gf-option-block-swatch ul li input {
  display: none
}

.gf-option-block-swatch ul li a {
  display: block;
  text-align: center;
  margin: 0
}

.gf-option-block-swatch a .gf-option-value {
  display: block;
  padding: 2px 4px;
  min-width: 32px;
  text-align: center;
  margin: 0;
  line-height: 26px;
  border: 1px solid #ccc
}

#gf-grid {
  position: relative;
  z-index: 1
}

.gf-option-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat
}

.gf-option-block-swatch a>span:not(.gf-option-value, .gf-label),
.gf-option-block-swatch-text a>span:not(.gf-option-value, .gf-label) {
  width: 32px;
  height: 32px;
  display: block;
  border: 1px solid #cbcbcb;
  position: relative;
  margin: 0
}
.gf-option-block-swatch-text a>span.gf-label {
  flex: 1 1 auto;
  height: auto;
  border: none;
}
.gf-option-block-swatch.swatch-size-48 a>span:not(.gf-option-value, .gf-label),
.gf-option-block-swatch-text.swatch-size-48 a>span:not(.gf-option-value, .gf-label) {
  width: 48px;
  height: 48px
}

.gf-option-block-swatch.swatch-size-48 a>span.gf-option-value {
  min-height: 48px;
  line-height: 42px;
  min-width: 48px;
  text-align: center
}

.gf-option-block-swatch.swatch-size-48 .gf-option-two-color .bottom-color,
.gf-option-block-swatch-text.swatch-size-48 .gf-option-two-color .bottom-color {
  border-bottom: 44px solid transparent;
  border-left: 44px solid transparent
}

.gf-option-block-swatch.swatch-size-64 a>span:not(.gf-option-value, .gf-label),
.gf-option-block-swatch-text.swatch-size-64 a>span:not(.gf-option-value, .gf-label) {
  width: 64px;
  height: 64px
}

.gf-option-block-swatch.swatch-size-64 a>span.gf-option-value {
  min-height: 64px;
  line-height: 58px;
  min-width: 64px;
  text-align: center
}

.gf-option-block-swatch.swatch-size-64 .gf-option-two-color .bottom-color,
.gf-option-block-swatch-text.swatch-size-64 .gf-option-two-color .bottom-color {
  border-bottom: 60px solid transparent;
  border-left: 60px solid transparent
}

.gf-option-block-swatch.swatch-size-80 a>span:not(.gf-option-value, .gf-label),
.gf-option-block-swatch-text.swatch-size-80 a>span:not(.gf-option-value, .gf-label) {
  width: 80px;
  height: 80px
}

.gf-option-block-swatch.swatch-size-80 a>span.gf-option-value {
  min-height: 80px;
  line-height: 74px;
  min-width: 80px;
  text-align: center
}

.gf-option-block-swatch.swatch-size-80 .gf-option-two-color .bottom-color,
.gf-option-block-swatch-text.swatch-size-80 .gf-option-two-color .bottom-color {
  border-bottom: 76px solid transparent;
  border-left: 76px solid transparent
}

.gf-option-block-swatch-text a>span:not(.gf-option-value, .gf-label) {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle
}

.gf-option-block-swatch.swatch-round a>span:not(.gf-option-value, .gf-label),
.gf-option-block-swatch-text.swatch-round a>span:not(.gf-option-value, .gf-label) {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  overflow: hidden
}

.gf-option-block-swatch.swatch-round a>span {
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  overflow: hidden
}

.gf-option-block-swatch.swatch-round.swatch-size-48 a>span {
  border-radius: 24px;
  -moz-border-radius: 24px;
  -webkit-border-radius: 24px;
  overflow: hidden
}

.gf-option-block-swatch.swatch-round.swatch-size-64 a>span {
  border-radius: 32px;
  -moz-border-radius: 32px;
  -webkit-border-radius: 32px;
  overflow: hidden
}

.gf-option-block-swatch.swatch-round.swatch-size-80 a>span {
  border-radius: 40px;
  -moz-border-radius: 40px;
  -webkit-border-radius: 40px;
  overflow: hidden
}

.gf-option-block-swatch a>span:not(.gf-option-value):hover,
.gf-option-block-swatch a.checked>span:not(.gf-option-value),
.gf-option-block-swatch-text a>span:not(.gf-option-value):hover,
.gf-option-block-swatch-text a.checked>span:not(.gf-option-value),
.gf-swatch-image:hover,
.gf-swatch-value:hover {
  border-color: #000;
  border-width: 2px
}

.gf-option-block-swatch a>span:not(.gf-option-value):hover>.bottom-color,
.gf-option-block-swatch a.checked>span:not(.gf-option-value)>.bottom-color,
.gf-option-block-swatch-text a>span:not(.gf-option-value):hover>.bottom-color,
.gf-option-block-swatch-text a.checked>span:not(.gf-option-value)>.bottom-color {
  border-width: 26px
}

.gf-swatch-two-color:hover>.bottom-color {
  border-width: 16px
}

.gf-option-block-swatch a>span.gf-option-value:hover,
.gf-option-block-swatch a.checked>span.gf-option-value {
  text-decoration: none;
  border-color: #000;
  background: #000;
  color: #fff
}

.gf-option-block ul li a.checked {
  font-weight: 700
}

.gf-option-block-swatch .checked>.gf-option-value,
.gf-option-block-swatch-text .checked>.gf-option-value {
  font-weight: 700
}

.gf-option-two-color .bottom-color {
  width: 0;
  height: 0;
  border-bottom: 28px solid transparent;
  border-left: 28px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0
}

.gf-swatch-two-color .bottom-color {
  width: 0;
  height: 0;
  border-bottom: 18px solid transparent;
  border-left: 18px solid transparent;
  position: absolute;
  right: 0;
  bottom: 0
}

.gf-swatch-one-color,
.gf-swatch-two-color,
.gf-swatch-image,
.gf-swatch-value {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin: 0 2px;
  border: 1px solid #cbcbcb;
  background: #fff;
  position: relative;
  overflow: hidden;
  background-size: 100%;
  cursor: pointer;
  border-radius: 2px;
}

.star-rating .spr-badge-caption {
  display: none
}

.attr-swatches {
  margin-top: 10px;
  margin-left: -2px;
  margin-right: -2px;
  font-size: 0
}

.gf-range-inputs input[type='text'] {
  width: 43%;
  padding: 6px;
  float: left;
  font-size: 13px;
  border: 1px solid #e3e3e3;
  -webkit-appearance: none;
  border-radius: 2px;
}

span.gf-range-split {
  width: 14%;
  display: block;
  float: left;
  text-align: center;
  line-height: 27px
}

#gf-loading {
  width: 100vw;
  position: fixed;
  top: 0;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(0, 0, 0, .5);
  z-index: 999999
}

#gf-spiner {
  display: block;
  width: 2.8em;
  height: 2.8em;
  margin: 0 auto;
  position: relative;
  border-top: .3em solid hsla(0, 0%, 100%, .25);
  border-right: .3em solid hsla(0, 0%, 100%, .25);
  border-bottom: .3em solid hsla(0, 0%, 100%, .25);
  border-left: .3em solid #fff;
  animation: loading-spin .5s infinite linear;
  border-radius: 50%;
  overflow: hidden
}

.gf-option-block ul.gf-option-collection li a {
  padding-left: 0
}

.gf-option-block ul.gf-option-collection li a.checked {
  font-weight: 700
}

@keyframes  loading-spin {
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
}

@-webkit-keyframes loading-spin {
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
}

@-webkit-keyframes shell-loading-spinner {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@keyframes  shell-loading-spinner {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@-webkit-keyframes shell-display {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@keyframes  shell-display {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

.gf-range-inputs:after {
  content: "";
  display: block;
  clear: both
}

.gf-option-block-range .gf-block-content {
  overflow: visible
}

.globo-selected-items-wrapper .gf-block-title h3:before {
  display: none
}

.gf-offcanvas .js-floating-refinements .plp-title-filters {
  background: rgba(243, 243, 243, .6);
  padding: 0 20px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 36px
}

.gf-top-one .gf-option-box {
  padding: 0 5px
}

.product-thumbnail .loop-thumbnail span.sold-out {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  font-size: 12px;
  background: #5a5a5a;
  color: #fff;
  padding: 5px
}

.product-thumbnail .loop-thumbnail span.sale {
  background: #ff2d00;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  padding: 10px 20px;
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0
}

#gf-products .thumbnail:hover .quick_shop {
  display: inline
}

#gf-mobile-refine-toggle i {
  width: 14px;
  height: 14px;
  text-align: center
}

.gf-wrapper-boundless .gf-left #gf-tree {
  padding-left: 15px
}

.gf-wrapper-boundless .gf-top_one #gf-tree {
  padding: 0 20px 20px
}

.gf-wrapper-boundless #gf-layout {
  margin-top: 20px
}

.spf-has-filter .filters-toolbar,
.spf-has-filter #shopify-section-collection-filters,
.spf-has-filter #CollectionSection .section-header__link--right,
.spf-has-filter .collection-template-section .section-header--right,
.spf-has-filter .collection-template .collection-dropdowns,
.spf-has-filter .category-products .toolbar,
.spf-has-filter #Collection .filter-menu,
.spf-has-filter div.container div.breadcrumb div.section_select,
.spf-has-filter .js-collection-sort,
.spf-has-filter .collection-sorting {
  display: none;
  visibility: hidden
}

.grid-product__image-mask .image-wrap {
  position: relative
}

.grid-product__image-mask .image-wrap svg {
  position: absolute;
  top: 0;
  left: 0
}

#gf-products .product_image:hover .quick_shop {
  display: inline-block
}

.gf-top_one.theme-store-id-766 #gf-tree {
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px
}

.theme-store-id-775.spf-has-filter #gf-products {
  margin-left: 0;
  margin-right: 0
}

.theme-store-id-652.spf-has-filter #shopify-section-template-collection:after {
  content: "";
  display: block;
  clear: both
}

.theme-store-id-652.spf-has-filter #shopify-section-template-collection {
  max-width: 1110px;
  margin: 0 auto
}

.theme-store-id-652.spf-has-filter #shopify-section-template-collection .product-list-item {
  padding: 0 15px
}

.theme-store-id-826.spf-has-filter #gf-products>div {
  margin-bottom: 40px
}

.theme-store-id-856.spf-has-filter #gf-products>div {
  margin: 0 0 25px
}

.theme-store-id-568.spf-has-filter #gf-products>div {
  margin-left: 0;
  margin-right: 0
}

.theme-store-id-687.gf-left.spf-has-filter .col-md-3 #gf-tree,
.theme-store-id-464.gf-left.spf-has-filter .sidebar #gf-tree,
.theme-store-id-686.gf-left.spf-has-filter .sidebar #gf-tree,
.theme-store-id-801.gf-left.spf-has-filter .collection-sidebar-wrapper #gf-tree,
.theme-store-id-304.spf-has-filter #shopify-section-collection-template>.twelve.columns,
.theme-store-id-601.spf-has-filter #shopify-section-collection-template>.twelve.columns {
  width: 100%;
  padding-right: 0
}

.theme-store-id-623.slideout-open .slideout-menu.slideout-menu#menu {
  z-index: 999999999999
}

.theme-store-id-739.spf-has-filter .collection__sort,
.theme-store-id-739.spf-has-filter .toggle-filters,
.theme-store-id-739.spf-has-filter .toggle-filters--desktop,
.theme-store-id-623.spf-has-filter #full-width-filter,
.theme-store-id-464.gf-left.spf-has-filter #tag_filter,
.theme-store-id-464.gf-left.spf-has-filter #sort-by,
.theme-store-id-725.spf-has-filter .infobar.bottom,
.theme-store-id-459.spf-has-filter #collection-sidebar,
.theme-store-id-677.spf-has-filter .pager-button,
.theme-store-id-801.spf-has-filter .collection-sidebar-filter,
.spf-has-filter [data-rating="0.0"],
.spf-has-filter .section_select .tag_filter,
.spf-has-filter .section_select .sort_by,
.theme-store-id-735.spf-has-filter header.collection-header .sort-by,
.theme-store-id-838.spf-has-filter .pagination--container,
.theme-store-id-838.spf-has-filter .utils-sortby,
.theme-store-id-838.spf-has-filter .productgrid--utils,
.theme-store-id-652.spf-has-filter .collection-tag-selector,
.theme-store-id-304.spf-has-filter #shopify-section-collection-template .sidebar,
.theme-store-id-601.spf-has-filter #shopify-section-collection-template .sidebar,
.theme-store-id-141.spf-has-filter #collection-sidebar,
.theme-store-id-857.spf-has-filter .collection-filter,
.theme-store-id-714.spf-has-filter .header__push-tags,
.theme-store-id-857.spf-has-filter.gf-left .collection-sidebar,
.theme-store-id-855.spf-has-filter .CollectionInner__Sidebar,
.theme-store-id-568.spf-has-filter .page-header .filters,
.theme-store-id-687.spf-has-filter #content .page_c,
.theme-store-id-863.spf-has-filter .collection-filters,
.theme-store-id-863.spf-has-filter .collection-sort,
.theme-store-id-566.spf-has-filter .collection-tools-left,
.theme-store-id-732.spf-has-filter .results-count,
.theme-store-id-851.spf-has-filter .sort-border-bottom,
.theme-store-id-457.spf-has-filter .collection-filter-wrapper,
.theme-store-id-457.spf-has-filter button.click-to-load-button,
.theme-store-id-657.spf-has-filter .filters.spaced-row-top,
.theme-store-id-859.spf-has-filter .collection__sticky-tags,
.theme-store-id-859.spf-has-filter section.collection header .mt3.lg--up--mt0.lg--up--one-half.lg--up--flex.lg--up--text-align--right,
.theme-store-id-687.spf-has-filter #content .filter_c {
  display: none
}

.theme-store-id-457.spf-has-filter .collection-content {
  padding-top: 25px
}

.theme-store-id-457.spf-has-filter .collection-content:after {
  content: "";
  display: block;
  clear: both
}

.theme-store-id-457.spf-has-filter .select-wrapper {
  padding: 0;
  border: 0;
  background: 0;
  box-shadow: none;
  font-family: unset
}

.theme-store-id-457.spf-has-filter .select-wrapper:after {
  display: none
}

.theme-store-id-457.spf-has-filter .select-wrapper span.selected-text {
  display: none
}

.theme-store-id-457.spf-has-filter .select-wrapper select {
  position: static;
  opacity: 1
}

.theme-store-id-812.spf-has-filter #gf-products>* {
  font-size: 14px;
  font-size: 1.4rem
}

.theme-store-id-725.spf-has-filter.gf-left #gf-tree {
  padding-left: 35px
}

.theme-store-id-725.spf-has-filter.gf-offcanvas #gf-tree,
.theme-store-id-725.spf-has-filter.gf-offcanvas #gf-grid,
.theme-store-id-725.spf-has-filter.gf-top_one #gf-tree,
.theme-store-id-725.spf-has-filter.gf-top_one #gf-grid {
  padding: 0 35px
}

.theme-store-id-725.spf-has-filter.gf-left #gf-tree+#gf-grid {
  padding-right: 35px
}

.theme-store-id-853.spf-has-filter #gf-products {
  display: block
}

.theme-store-id-853.spf-has-filter section.collection-content:after {
  content: "";
  display: block;
  clear: both
}

.theme-store-id-853.spf-has-filter section.collection-content {
  max-width: 80rem;
  margin-right: auto;
  margin-left: auto
}

.theme-store-id-853.spf-has-filter .collection-header .popover-utils {
  display: none
}

.theme-store-id-853.spf-has-filter .gf-sort-wrap,
.theme-store-id-859.spf-has-filter #gf-products>div {
  margin-bottom: 45px
}

.theme-store-id-725.spf-has-filter #gf-products {
  width: auto !important;
  height: auto !important
}

.theme-store-id-601.spf-has-filter #gf-products>div {
  margin: 0;
  clear: none !important
}

.theme-store-id-566.spf-has-filter #gf-products {
  margin-left: 0;
  margin-right: 0;
  justify-content: space-between
}

.theme-store-id-566.spf-has-filter #gf-products.product-list {
  font-size: inherit !important
}

.theme-store-id-851.spf-has-filter .collection-products-wrapper {
  position: static !important
}

.theme-store-id-725.spf-has-filter #gf-products.isotope-products>a {
  padding: 0
}

.theme-store-id-725.spf-has-filter #gf-products a.grid-item {
  width: 100%
}

.theme-store-id-846.spf-has-filter .collection-grid .section-background:after {
  content: "";
  display: block;
  clear: both
}

.theme-store-id-846.spf-has-filter .collection-grid .section-background {
  padding-left: 15px;
  padding-right: 15px
}

.theme-store-id-846.spf-has-filter #gf-products img.itest {
  height: auto
}

.no-padding {
  padding: 0 !important
}

.spf-image-ratio>img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto
}

.theme-store-id-857.spf-has-filter.gf-left .grid__item--sidebar #gf-tree {
  width: 100%;
  padding-right: 0
}

.theme-store-id-855.spf-has-filter #gf-products {
  margin-left: 0;
  margin-right: 0
}

.theme-store-id-855.spf-has-filter:not(.spf-status-failed) .CollectionInner__Products>.Pagination {
  display: none
}

.theme-store-id-855.spf-has-filter #gf-products .AspectRatio>img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  transform: translate(0, 0);
}

.theme-store-id-606.spf-has-filter #gf-tree,
.theme-store-id-606.spf-has-filter #gf-grid {
  padding-top: 25px
}

.theme-store-id-578.spf-has-filter #gf-products {
  margin-left: -15px;
  margin-right: -15px
}

.gf-top_one.theme-store-id-766 #gf-grid,
.gf-top_one.theme-store-id-766 .gf-sort-wrap {
  padding-left: 15px;
  padding-right: 15px
}

/*#gf-products .productgrid--item:hover .productitem{position:absolute}*/
.image__container:hover .quick_shop {
  display: inline
}

/*#gf-products .productgrid--item:hover .productitem .productitem--actions{opacity:1;visibility:visible;position:static;margin-left:-.25rem;margin-right:-.25rem}*/
.pretty-select select.sortby-select {
  width: 100%
}

.spf-has-filter body.templateCollection #sidebar .mfilter-box.box {
  display: none
}
#gf-grid .site-box-container {
  z-index: 1
}

#gf-grid .box--product-image img {
  opacity: 1
}

.theme-store-id-688.spf-has-filter #gf-products,
.theme-store-id-601.spf-has-filter #gf-products {
  margin-left: -10px;
  margin-right: -10px
}

.spf-has-filter body.templateCollection #gf-products {
  overflow: hidden
}

.spf-has-filter body.templateCollection .center-column .product-grid #gf-products:after {
  left: 15px;
  bottom: 0;
  right: 15px;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  position: absolute;
  content: '';
  display: block
}

.spf-has-filter body.templateCollection .center-column .product-grid #gf-products:before {
  left: 15px;
  top: 0;
  right: 15px;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  position: absolute;
  content: '';
  display: block
}

.spf-has-filter body.templateCollection .center-column .product-grid #gf-products .spf-product-card {
  padding-bottom: 0;
  margin-bottom: 0
}

.spf-has-filter body.templateCollection #gf-grid {
  margin-top: 15px
}

.spf-has-filter body.templateCollection .shop__view[data-view="list"],
.spf-has-filter body.templateCollection .pagination-results,
.spf-has-filter .center-column .product-filter .list-options,
.spf-has-filter .center-column .product-grid:after,
.spf-has-filter .center-column .product-grid:before {
  display: none
}

.spf-has-filter .product-item-inside-hover .spf-product__form-btn-addtocart {
  margin-top: 15px
}

.spf-has-filter .spf-product-card__template-3 .spf-product__swatchs {
  justify-content: center
}

.theme-store-id-766 #gf-tree {
  padding-left: 15px
}

.theme-store-id-766 .image-wrapper:hover img.img-responsive {
  opacity: .1
}

.theme-store-id-766 #gf-grid {
  padding-right: 15px;
  padding-top: 15px;
  padding-left: 15px
}

.theme-store-id-829 .grid>#gf-grid {
  padding-left: 20px
}

.theme-store-id-796 #gf-products .price__sale {
  display: none
}

.theme-store-id-796 #gf-products .grid-view-item__image-wrapper .grid-view-item__image {
  /*
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto;
  height: auto;
  */
  opacity: 1;
}

.theme-store-id-796 #gf-products .price--on-sale .price__sale {
  display: block
}

.theme-store-id-796 .price dd,
.theme-store-id-796 dl.price {
  margin: 0
}

.theme-store-id-855 #gf-products.ProductList--grid .ProductItem {
  visibility: visible !important
}
.theme-store-id-855 .gf-sort-wrap {
  padding-right: 50px
}

.soldout .footer-button form {
  display: none !important
}

.gf-loadding {
  display: block;
  width: 30px;
  margin: 0 auto;
  animation: loading .5s linear infinite
}

@keyframes  loading {
  to {
    transform: rotate(1turn)
  }
}

input.gf-search {
  margin-bottom: 10px;
  height: 32px;
  border: 1px solid #e3e3e3;
  font-size: 13px;
  background: 0;
  box-shadow: none;
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm17.707 10.293l-5.395-5.396A7.946 7.946 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.954 7.954 0 004.897-1.688l5.396 5.395A.998.998 0 0020 19a1 1 0 00-.293-.707z' fill='%23696969'%3E%3C/path%3E%3C/svg%3E");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: 6px center;
  border-radius: 2px;
  padding: 3px 5px 3px 25px;
}

a,
button,
[role="button"],
input,
label,
select,
textarea {
  touch-action: auto
}

/* Start Template */

.spf-product-card {
  padding-bottom: 15px;
  position: relative;
  margin-bottom: 30px
}

.spf-product-card__inner {
  position: relative;
  display: block;
  overflow: hidden;
  background: #fff;
}

img.spf-product-card__image {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  display: block;
  -webkit-transition: opacity .2s ease-out;
  -moz-transition: opacity .2s ease-out;
  -o-transition: opacity .2s ease-out;
  transition: opacity .2s ease-out;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

img.spf-product-card__image.spf-product-card__image-secondary {
  opacity: 0
}

span.spf-product__swatch-text {
  width: 100%;
  height: 100%;
  line-height: 24px;
  min-width: 24px;
  padding: 0 7px;
  display: block;
  min-height: 23px;
  text-align: center;
  font-size: .85em;
  background: #ffffff;
}

a.spf-product-card__image-wrapper {
  position: relative;
  display: block;
}

.spf-product-card__inner:hover .hover-effect .spf-product-card__image-main {
  opacity: 0
}

.spf-product-card__inner:hover .hover-effect .spf-product-card__image-secondary {
  opacity: 1
}

.h4.spf-product-card__title {
  margin: 0
}

.h4.spf-product-card__title a {
  margin: 0
}

.spf-product__form {
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

button.spf-product__form-btn-addtocart:disabled {
  cursor: not-allowed;
  opacity: .6
}

span.spf-product-card__oldprice {
  text-decoration: line-through;
  margin-right: 5px;
}
.spf-product__swatchs + .spf-product__swatchs{
  padding-bottom: 5px;
}
.spf-product__swatchs {
  margin: 0 -2px;
  padding: 5px 0 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.spf-product__swatchs+.spf-product__swatchs {
  margin-top: 0
}

span.spf-product__swatch {
  margin: 3px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 1px #ddd, 0 1px 1px 0 #ddd;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid #fff;
}
span.spf-product__swatch-inner {
    overflow: hidden;
    display: block;
}
.spf-product__swatchs.round span.spf-product__swatch-inner {
  overflow: hidden;
  display: block;
  border: 1px solid #fff;
  position: relative
}

.spf-product__swatchs.round span.spf-product__swatch-inner,
.spf-product__swatchs.round span.spf-product__swatch {
  border-radius: 24px
}

span.spf-product__swatch.is-selected {
  box-shadow: 0 0 0 1px rgba(63,63,68,1), 0 1px 3px 0 rgba(63,63,68,.15);
}

span.spf-product__swatch-image {
  width: 24px;
  height: 24px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center
}

span.spf-product__swatch-color {
  width: 24px;
  height: 24px;
  display: block
}

span.spf-product__swatch-color+span.spf-product__swatch-color {
  width: 0;
  height: 0;
  border-top: 24px solid transparent;
  border-right: 24px solid transparent;
  position: absolute;
  top: 0;
  z-index: 2
}

span.spf-product__label {
  position: absolute;
  left: 5px;
  padding: 3px 10px;
  z-index: 9;
  top: 5px;
  border-radius: 2px;
}

span.spf-product__label.spf-product__label-sale {
  background: #d21625;
  color: #fff
}

span.spf-product__label.spf-product__label-soldout {
  background: #989898;
  color: #fff
}

button.spf-product__form-btn-addtocart {
  position: relative;
  font-weight: 600;
  text-align: center;
  letter-spacing: .3px;
  border-radius: 2px;
  border: 0;
  outline: 0;
  text-shadow: none;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-transition: color .25s ease, background-color .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease;
  -webkit-transition: color .25s ease, background-color .25s ease, border-color .25s ease, opacity .25s ease, -webkit-box-shadow .25s ease;
  transition: color .25s ease, background-color .25s ease, border-color .25s ease, opacity .25s ease, -webkit-box-shadow .25s ease;
  transition: color .25s ease, background-color .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease;
  transition: color .25s ease, background-color .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease, -webkit-box-shadow .25s ease;
  overflow: hidden;
  color: #fff;
  background-color: #b59677;
  font-size: 13px;
  display: block;
  line-height: 38px;
  height: 38px;
  padding: 0 10px;
  margin: 0;
}

button.spf-product__form-btn-addtocart span {
  white-space: nowrap;
}
.spf-product__info-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.spf-product__info-row .spf-product-card__price-wrapper{
  margin-left: 5px;
}
.spf-product-card.spf-product-card__template-1 button.spf-product__form-btn-addtocart{
  width: 100%
}
.spf-product-card.spf-product-card__template-5 .spf-product__form{
  margin-left: -5px;
  margin-top: 5px;
  min-width: 100%;
}
.spf-product-card.spf-product-card__template-5 button.spf-product__form-btn-addtocart {
  flex: 1 1 auto;
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 0 5px;
}
.spf-product-card.spf-product-card__template-5 a.open-quick-view{
  margin-bottom: 5px;
}

.spf-product-card.spf-product-card__template-3 {
  overflow: hidden
}

.spf-product-card.spf-product-card__template-3 .spf-product__form {
  margin-top: 12px;
  position: absolute;
  bottom: 0;
  width: 100%
}

.spf-product-card.spf-product-card__template-3 button.spf-product__form-btn-addtocart {
  border-radius: 3px
}

.spf-product-card.spf-product-card__template-1 button.spf-product__form-btn-addtocart,
.spf-product-card.spf-product-card__template-3 button.spf-product__form-btn-addtocart {
  -webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .15);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .15)
}

.spf-product-card.spf-product-card__template-3 .spf-product__info {
  text-align: center
}
.spf-product-card.spf-product-card__template-3 .spf-product__swatchs,
.spf-product-card.spf-product-card__template-3 .spf-product__form {
  align-items: center;
  justify-content: center
}

.spf-product-card.spf-product-card__left .spf-product__info {
  text-align: left
}
.spf-product-card.spf-product-card__left .spf-product__swatchs,
.spf-product-card.spf-product-card__left .spf-product__form {
  justify-content: flex-start;
}
.spf-product-card.spf-product-card__center .spf-product__info {
  text-align: center
}
.spf-product-card.spf-product-card__center .spf-product__swatchs,
.spf-product-card.spf-product-card__center .spf-product__form {
  align-items: center;
  justify-content: center
}
.spf-product-card.spf-product-card__right .spf-product__info {
  text-align: right
}
.spf-product-card.spf-product-card__right .spf-product__swatchs,
.spf-product-card.spf-product-card__right .spf-product__form {
  justify-content: flex-end;
}

.spf-product-card.spf-product-card__template-3 .spf-product__info.hover {
  overflow: hidden;
  margin-bottom: -56px;
  padding-bottom: 56px;
  position: relative
}
.spf-product-card.spf-product-card__template-2 button.spf-product__form-btn-addtocart {
  padding: 0 16px;
  margin-top: 10px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  line-height: 35px;
  height: 35px;
  border-radius: 2px;
}

.spf-product-card.spf-product-card__template-4 .spf-product__form {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform .4s
}
#gf-products .spf-product-card.spf-product-card__template-4 .spf-product__form a.open-quick-view{
  border-radius: 0;
  margin: 0;
  box-shadow: none;
  position: static;
  width: 42px;
  height: 42px;
  line-height: 42px;
  flex: 1 1 42px;
  transition-delay: .1s;
  transform: translateX(150%);
  transition: transform .3s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center
}

.spf-product-card.spf-product-card__template-4:hover a.open-quick-view,
.spf-product-card.spf-product-card__template-4:hover .spf-product__form,
.spf-product-card.spf-product-card__template-4:hover button.spf-product__form-btn-addtocart {
  transform: translateX(0) !important;
}

.spf-product-card.spf-product-card__template-4 button.spf-product__form-btn-addtocart {
  width: 42px;
  height: 42px;
  position: static;
  padding: 0;
  margin: 0;
  line-height: 40px;
  transform: translateX(150%);
  transition: transform .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.spf-product-card.spf-product-card__template-4 button.spf-product__form-btn-addtocart span i {
  margin: 0;
  line-height: 1
}

button.spf-product__form-btn-addtocart i.fa.fa-shopping-bag {
  margin-right: 10px;
  vertical-align: middle;
  margin-bottom: 3px
}

.spf-product__info {
  padding-top: 10px;
}

#gf-products .spf-product-card:not(.spf-product-card__template-4) .open-quick-view {
  background-color: #fff;
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  line-height: 35px;
  display: flex;
  position: relative;
  padding: 0;
  border: 0;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: #2d2d2d;
  font-size: 0;
  letter-spacing: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9
}
#gf-products .spf-product-card .spf-product__form a.open-quick-view {
    flex: 0 0 38px;
    position: static;
    box-shadow: none;
    margin-left: 5px;
    border-radius: 2px;
    height: 38px;
}

.spf-product-card__inner .spf-product__swatchs_container {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 0;
}

.spf-product-card__inner .spf-product__swatchs_container .spf-product__swatchs {
    justify-content: center;
    padding: 0 5px;
}

.spf-product-card__inner .spf-product__swatchs_container .spf-product__swatchs + .spf-product__swatchs {
    margin-top: 5px;
}
.spf-product-card__inner .spf-product__swatchs_container .spf-product__swatchs:first-child{
  margin-top: 10px;
}
.spf-product-card__inner .spf-product__swatchs_container .spf-product__swatchs:last-child{
  margin-bottom: 10px;
}
.spf-product-card__inner .spf-product__swatchs_container:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    opacity: 0.6;
}

#gf-products .product-rating {
  color: #fdbc00;
  font-size: 12px
}

select.spf-product__variants {
  display: none;
  opacity: 0;
  visibility: hidden
}

.spf-product-card__images-navigation {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex
}

.spf-product-card__images-navigation .image-navigation {
  width: 35px;
  height: 35px;
  display: flex;
  background: #fff;
  color: #212b36;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  justify-content: center;
  align-items: center
}

.spf-product-card__images-navigation .image-navigation:hover {
  background: #141414;
  color: #fff
}

.spf-product-card__images-navigation .image-navigation svg {
  width: 25px;
  fill: currentColor
}

.spf-product-card__images-navigation .image-navigation.prev {
  margin-right: 3px
}

.spf-product-card__image-hidden,
.spf-product-card span.spr-badge-caption {
  display: none !important
}

.spf-product-card .product-rating span {
  float: none
}
/* End Template */

.theme-store-id-775.spf-has-filter #gf-products .product-card {
  height: 100%
}

.theme-store-id-782 div#gf-products.collection-list {
  height: auto
}

.jumpstart-selector .arrow {
  max-height: 100%
}

.theme-store-id-735 .collection #gf-products.products-grid .product {
  font-size: 16px
}

.theme-store-id-450.spf-has-filter .collection-sorter,
.theme-store-id-450.spf-has-filter .filter-group {
  display: none !important
}

select.sort-by-toggle::-ms-expand,
select.sortby-select::-ms-expand {
  display: none
}

.gf-tooltip-trigger {
  background: #000;
  color: #fff;
  font-size: 10px;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  position: relative;
  vertical-align: top;
  display: inline-block;
  margin-top: 2px;
  margin-left: 10px;
  z-index: 10;
  cursor: pointer
}

.gf-tooltip-trigger:after {
  display: none;
  content: "";
  width: 0;
  height: 0;
  border-top: 7px solid #fff;
  position: absolute;
  bottom: 100%;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  left: 50%;
  margin-left: -7px;
  z-index: 12;
  -webkit-transform: translate(0, -1px);
  -ms-transform: translate(0, -1px);
  transform: translate(0, -1px)
}

.gf-tooltip-trigger:before {
  display: none;
  content: "";
  width: 0;
  height: 0;
  border-top: 7px solid #c4cdd5;
  position: absolute;
  bottom: 100%;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  left: 50%;
  margin-left: -7px;
  z-index: 11
}

.gf-tooltip-trigger:hover+.gf-tooltip,
.gf-tooltip:hover {
  display: block
}

.gf-tooltip-trigger:hover:before,
.gf-tooltip-trigger:hover:after {
  display: block
}

.gf-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  color: #000;
  padding: 7px 15px;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 4px;
  z-index: 9999;
  border: 1px solid #c4cdd5;
  display: none;
  width: 100%
}

.gf-tooltip-content {
  display: block;
  width: 100%;
  text-transform: none;
  font-size: 13px;
  font-weight: 400
}

.gf-tooltip-content br {
  margin-top: 7px;
  display: block;
  content: "";
  width: 100%
}

.spf-has-filter .collection__dynamic-part .collection__toolbar {
  display: none
}

.spf-has-filter .warehouse--v1 .collection__dynamic-part:after {
  content: "";
  clear: both;
  display: block
}

.spf-has-filter .warehouse--v1 .collection__dynamic-part div#gf-tree {
  padding-left: 30px
}

.spf-has-filter .warehouse--v1 .collection__dynamic-part #gf-grid {
  padding-left: 0;
  padding-right: 0
}

.spf-has-filter .warehouse--v1 .collection__dynamic-part #gf_pagination_wrap {
  margin: 0
}

.spf-has-filter .warehouse--v1 #gf_pagination_wrap #pagination {
  border-top: 0
}

.spf-has-filter .warehouse--v1 .collection__dynamic-part #gf-grid #gf-products {
  margin-left: 0;
  margin-right: 0;
  border-top: 1px solid #e1e3e4
}

.spf-has-filter .warehouse--v1 .gf-sort-wrap {
  padding: 0 30px
}


.spf-has-filter .warehouse--v1 .layout__section--secondary #gf-tree {
  width: 100%;
  padding: 20px;
  float: none
}

form.gf-controls-search-form {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 15px;
}

input.gf-controls-search-input {
    flex: 1 1 auto;
    width: 100%;
    max-width: 100%;
    margin: 0;
    outline: none;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    padding: 10px 30px 10px 40px;
    box-sizing: border-box;
    height: 40px;
    line-height: 1;
    font-size: 13px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
span.gf-count {
  opacity: 0.6;
  font-size: 0.9em;
}
button.gf-controls-search-button, button.gf-controls-clear-button {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: none;
    border: none;
    width: 40px;
    padding: 12px !important;
    outline: none;
}
button.gf-controls-search-button {
    cursor: default;
}
button.gf-controls-search-button svg{
  max-width: 100%;
  max-height: 100%;
}
button.gf-controls-clear-button {
  right: 0;
  left: auto;
  display: none;
}
input.gf-controls-search-input:not([value=""]) ~ button.gf-controls-clear-button {
  display: block !important;
}

.gf-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
  margin-left: -8px;
  margin-right: -8px;
}

span.gf-summary {
  flex: 1 1 auto;
  font-size: 14px;
}
.gf-filter-selection {
    display: flex;
}
.gf-filter-header, .gf-filter-footer{
  display: none;
}
body > #gf-tree .gf-filter-header,
body > #gf-tree .gf-filter-footer{
  display: block;
}
body > #gf-tree {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
}
body > #gf-tree .gf-filter-header {
  display: flex;
  border-bottom: 1px solid rgb(223, 227, 232);
  padding: 8px 7px 8px 15px;
  align-items: center;
  order: 1;
}
body > #gf-tree .gf-filter-header > div.gf-filter-heading {
  flex: 1 1 100%;
  font-size: 16px;
  font-weight: bold;
}
body > #gf-tree .globo-selected-items-wrapper {
  order: 2;
}
body > #gf-tree .gf-filter-contents {
  flex: 1 1 100%;
  padding: 0;
  overflow: auto;
  order: 3;
}
body > #gf-tree .gf-filter-footer {
  padding: 15px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(223, 227, 232);
  order: 5;
}
body > #gf-tree .gf-filter-footer button {
  width: 100%;
  border: 1px solid;
  height: 40px;
  line-height: 38px;
  background: none;
  font-weight: bold;
  border-radius: 2px;
  font-size: 15px;
}
span.gf-summary{
  height: 38px;
  line-height: 38px;
}
span.gf-summary,
.gf-filter-trigger,
.gf-filter-selection {
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 12px;
}
.gf-filter-trigger{
  display: none;
}
.gf-offcanvas .gf-filter-trigger{
  display: block;
}

@media  only screen and (min-width: 1200px) {
  .gf-left #shopify-section-collection-template .sixteen.columns #gf-tree,
  .gf-left.theme-store-id-601 #shopify-section-search-template #gf-tree {
    width: 300px
  }

  .gf-left #shopify-section-collection-template .sixteen.columns #gf-grid,
  .gf-left.theme-store-id-601 #shopify-section-search-template #gf-grid {
    max-width: 880px
  }
}

@media  screen and (min-width: 980px) {
  .spf-has-filter #gf-products .desktop-4:nth-child(3n+1) {
    clear: left
  }

  .spf-has-filter #gf-products .desktop-3:nth-child(4n+1) {
    clear: left
  }

  .spf-has-filter #gf-products .desktop-6:nth-child(2n+1) {
    clear: left
  }
}

@media  only screen and (min-width: 768px) {
  .gf-offcanvas .gf-refine-toggle-mobile {
    border-radius: 2px;
    outline: none;
  }
  .sixteen.columns .column.alpha,
  .sixteen.columns .columns.alpha {
    clear: both
  }
  .gf-offcanvas .is-collapsed .gf-block-content,
  .gf-left .is-collapsed .gf-block-content {
    display: none
  }
  .gf-top_one #gf-controls-container .sort-by{
    display: none;
  }
  .gf-top_one #gf-tree .sort-by{
    margin: 5px 5px 5px auto;
    border: 1px solid #e3e3e3;
    background: #ffffff;
  }
  .gf-top_one #gf-tree .sort-by.active{
    background: #f7f7f7
  }
  .gf-top_one .gf-block-title .gf-clear {
    display: none
  }

  .gf-top_one .gf-option-block {
    float: left;
    clear: none;
    border: 0;
    padding: 0;
    margin: 5px;
    z-index: 11;
  }

  .gf-top_one .gf-option-block.is-collapsed{
    z-index: 10;
  }

  .gf-top_one .gf-option-block.is-collapsed .gf-block-content {
    display: none
  }

  .gf-top_one .gf-option-block .gf-block-title h3 {
    border-bottom-color: #fff
  }

  .gf-top_one .gf-refine-toggle-mobile {
    float: left
  }

  .gf-top_one .gf-block-content {
    display: block;
    position: absolute;
    left: 0;
    right: auto;
    background: #fff;
    z-index: 9;
    margin-top: 5px;
    padding: 15px;
    border: 1px solid #e3e3e3;
    width: 350px;
    border-radius: 2px;
  }

  .gf-top_one .gf-option-ddr .gf-block-content{
    left: auto;
    right: 0;
  }

  .gf-top_one .gf-filter-contents {
    position: relative;
    margin-top: -5px;
    margin-left: -5px;
    margin-right: -5px;
    padding-bottom: 7px;
    display: flex;
    align-items: flex-start;
  }

  .gf-top_one #gf-tree .sort-by label {
    height: 32px;
    line-height: 32px;
  }

  .gf-top_one .sort-by:before{
    background-size: 13px;
  }

  .gf-top_one .globo-selected-items-wrapper {
    margin-left: -3px;
    margin-right: -3px;
  }
  .gf-top_one #gf-tree {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 15px;
    width: 100%;
  }
  .gf-top_one #gf-tree .globo-selected-items{
    margin-bottom: 12px !important;
  }
  .gf-top_one .gf-option-block-checkbox .gf-option-box li:nth-child(4n+1),
  .gf-top_one .gf-option-block-radio .gf-option-box li:nth-child(4n+1) {
    clear: both
  }

  .gf-top_one .gf-option-block .gf-block-title h3 {
    font-weight: 400;
    display: block;
    position: relative;
    padding: 5px 20px 5px;
    border: 1px solid #e3e3e3;
    opacity: 1;
    text-decoration: none;
    background: #fff;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    z-index: 10;
    border-radius: 2px;
  }
  .gf-refine-toggle-mobile {
    float: left
  }

  .gf-left .gf-refine-toggle-mobile,
  .gf-offcanvas .globo-selected-items-wrapper h3,
  .gf-top_one .gf-refine-toggle-mobile {
    display: none
  }
  .spf-has-filter #gf-products .large-3:nth-child(4n+1) {
    clear: left
  }

  .spf-has-filter #gf-products .large-6:nth-child(2n+1) {
    clear: left
  }

  .spf-has-filter #gf-products .large-4:nth-child(3n+1) {
    clear: left
  }
  #gf-tree .lds-spinner {
    display: none !important
  }
  .gf-left.theme-store-id-688.spf-has-filter #gf-products .three.columns:nth-child(4n+1),
  .theme-store-id-601 #gf-products.spf-has-filter .three.columns:nth-child(4n+1) {
    clear: both
  }

  .gf-left.theme-store-id-688.spf-has-filter #gf-products .four.columns:nth-child(3n+1),
  .theme-store-id-601.spf-has-filter #gf-products .four.columns:nth-child(3n+1) {
    clear: both
  }

  .gf-left.theme-store-id-688.spf-has-filter #gf-products .six.columns:nth-child(6n+1),
  .theme-store-id-601.spf-has-filter #gf-products .six.columns:nth-child(6n+1) {
    clear: both
  }

  .theme-store-id-677 .column.third:nth-child(3n+1) {
    clear: both
  }

  .gf-top_one.theme-store-id-688.spf-has-filter #gf-products .one-third.column:nth-child(3n+1),
  .theme-store-id-601.spf-has-filter #gf-products .one-third.column:nth-child(3n+1) {
    clear: both
  }

  .gf-top_one.theme-store-id-688.spf-has-filter #gf-products .eight.columns:nth-child(2n+1),
  .theme-store-id-601.spf-has-filter #gf-products .eight.columns:nth-child(2n+1) {
    clear: both
  }

  .gf-top_one.theme-store-id-688.spf-has-filter #gf-products .four.columns:nth-child(4n+1),
  .theme-store-id-601.spf-has-filter #gf-products .four.columns:nth-child(4n+1) {
    clear: both
  }
  #gf-products .large--one-third:nth-child(3n+1) {
    clear: both !important
  }
  .gf-top_one .gf-tooltip {
    margin-bottom: 0;
    width: 280px
  }
  #gf-tree .selected-item.gf-option-label {
    display: block;
    width: 100%;
    margin-bottom: 3px
  }
  .gf-offcanvas #gf-tree .globo-selected-items-wrapper .gf-block-title{
    padding: 15px 15px 0;
  }
  .gf-offcanvas #gf-tree .globo-selected-items-wrapper .gf-block-content{
    margin-top: 0;
  }
  .theme-store-id-855 #gf-products, .theme-store-id-855 #gf-controls-container, .theme-store-id-855 #gf-tree {
    padding-left: 50px;
    padding-right: 50px
  }
}

@media  only screen and (max-width : 767px) {
  .spf-has-filter .gf-refine-toggle-mobile .gf-refine-toggle {
    display: none !important
  }
  .gf-top_one #gf-tree .sort-by{
    display: none;
  }
  .spf-has-filter.spf-filtered .gf-refine-toggle-mobile .gf-refine-toggle {
    display: block !important;
    flex: 0 0 auto;
    white-space: nowrap
  }

  #gf-controls-container .globo-selected-items-wrapper{
    display: block;
  }
  span.gf-close-canvas {
    display: block
  }

  #gf-tree,
  #gf-tree .gf-tree-overlay {
    top: 0;
    left: -350px;
    bottom: 0;
    width: 350px !important;
    position: fixed;
    overflow: auto;
    height: 100%;
    z-index: 9;
    transition: left .25s ease
  }

  #gf-tree {
    padding: 60px 30px 30px;
    background: #fff;
    z-index: 99999999999;
    transition: left .25s ease;
    -webkit-overflow-scrolling: touch
  }

  .offcanvas-open #gf-tree,
  .offcanvas-open #gf-tree .gf-tree-overlay {
    left: 0
  }

  .gf-left .js-toggle-panel,
  .gf-top_one .js-toggle-panel {
    margin: 0;
    background: #b1b0b0;
    padding: 10px;
    color: #fff;
    font-weight: 400;
    font-size: 1em;
    display: block;
    cursor: pointer
  }

  .gf-left .js-panel-wrapper,
  .gf-top_one .js-panel-wrapper {
    margin-top: 5px
  }
  .spf-status-loading #gf-tree .gf-tree-overlay:before {
    content: "";
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    background: #fff;
    opacity: .5;
    z-index: 2
  }

  #gf-tree svg.lds-spinner {
    display: none
  }

  .spf-status-loading #gf-tree svg.lds-spinner {
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 50px;
    height: 50px;
    margin-left: -25px;
    margin-top: -25px
  }

  .gf-top_one .gf-option-block .gf-block-title h3:after {
    float: left;
    margin-right: 8px;
    margin-left: 0
  }

  .gf-top_one .gf-option-block .gf-block-title h3 {
    text-align: left
  }

  .gf-top_one .gf-option-block .gf-block-title h3 span {
    float: none
  }

  .gf-refine-toggle-mobile {
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 2px;
  }

  .gf-refine-toggle-mobile span,
  .gf-refine-toggle-mobile a {
    flex: 1 1 auto
  }

  .gf-block-content {
    display: block
  }

  .gf-filter-contents {
    overflow: hidden;
    clear: both
  }

  .is-collapsed .gf-filter-contents,
  .is-collapsed .gf-block-content {
    display: none
  }

  .gf-block-content {
    max-height: none;
    margin-top: 0;
    padding: 15px 0 0;
  }

  #gf-wrapper ul.menu-active-refinements {
    display: none
  }

  .gf-left #gf-tree+#gf-grid {
    width: 100%;
    float: none;
    clear: both
  }

  .gf-left .gf-scroll-wrap {
    padding: 15px
  }
  .theme-store-id-855 #gf-products, .theme-store-id-855 #gf-controls-container, .theme-store-id-855 #gf-tree {
    padding-left: 15px;
    padding-right: 15px
  }
  .theme-store-id-855 #gf-tree {
    padding-right: 24px;
    padding-bottom: 24px
  }
  .theme-store-id-855 .gf-filter-contents {
    clear: both
  }
  .theme-store-id-855 #gf-products,
  .theme-store-id-855 .gf-sort-wrap {
    padding-left: 15px;
    padding-right: 15px
  }
  span.gf-summary {
    flex: 0 0 100%;
    order: 10;
    height: auto;
    line-height: 1.4;
    margin-bottom: 0;
  }
  .gf-filter-trigger{
    display: block;
  }
  .gf-filter-trigger,
  .gf-filter-selection {
      flex: 1 1 50%;
      max-width: 50% !important
  }
  .gf-filter-selection .sort-by {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.25);
  }
  body > #gf-tree .globo-selected-items{
      display: flex;
      flex-wrap: wrap;
      margin: 0 !important;
      padding: 0;
  }
#gf-tree, #gf-grid{
  box-sizing: border-box;
}
`;
		const siteseedSearchCssAssets = `
.ui-helper-hidden {
  display: none
}

.ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px
}

.ui-helper-reset {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  line-height: 1.3;
  text-decoration: none;
  font-size: 100%;
  list-style: none
}

.ui-helper-clearfix:before,
.ui-helper-clearfix:after {
  content: "";
  display: table;
  border-collapse: collapse
}

.ui-helper-clearfix:after {
  clear: both
}

.ui-helper-zfix {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  filter: Alpha(Opacity=0)
}

.ui-front {
  z-index: 100
}

.ui-state-disabled {
  cursor: default !important;
  pointer-events: none
}

.ui-icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -.25em;
  position: relative;
  text-indent: -99999px;
  overflow: hidden;
  background-repeat: no-repeat
}

.ui-widget-icon-block {
  left: 50%;
  margin-left: -8px;
  display: block
}

.ui-widget-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.ui-autocomplete {
  position: absolute;
  top: 0;
  left: 0;
  cursor: default
}

.ui-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  outline: 0
}

.ui-menu .ui-menu {
  position: absolute
}

.ui-menu .ui-menu-item {
  margin: 0;
  cursor: pointer;
  list-style-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
}

.ui-menu .ui-menu-item-wrapper {
  position: relative;
  padding: 3px 1em 3px .4em
}

.ui-menu .ui-menu-divider {
  margin: 5px 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  border-width: 1px 0 0
}

.ui-menu .ui-state-focus,
.ui-menu .ui-state-active {
  margin: -1px
}

.ui-menu-icons {
  position: relative
}

.ui-menu-icons .ui-menu-item-wrapper {
  padding-left: 2em
}

.ui-menu .ui-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: .2em;
  margin: auto 0
}

.ui-menu .ui-menu-icon {
  left: auto;
  right: 0
}

.ui-tooltip {
  padding: 8px;
  position: absolute;
  z-index: 9999;
  max-width: 300px
}

body .ui-tooltip {
  border-width: 2px
}
.ui-menu .gf-search-products .ui-menu-item-wrapper {
    text-decoration: none;
}
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {
    color: #333 !important
}
.ui-menu.ui-widget-content.ui-autocomplete {
  border: 0;
  background: #fff;
  z-index: 9999999999;
  color: #333;
  box-shadow: 0 0 0 1px rgba(39, 44, 48, 0.05), 0 1px 5px 1px rgba(39, 44, 48, 0.16)
}

.ui-menu.ui-widget-content.ui-autocomplete>li>.gf-search-header {
  display: block;
  background: #ccc;
  font-weight: 600;
  color: #3d4246
}

.ui-menu .ui-menu {
  display: block !important;
  clear: both;
  position: static !important;
  font-size: .9em;
  padding: 0
}

.ui-menu .ui-state-focus,
.ui-menu .ui-state-active {
  margin-top: 0
}

.ui-menu .ui-menu-item-wrapper.count {
  float: right;
  padding: 3px 0
}

.ui-menu .ui-menu-item-wrapper {
  margin: 0 !important;
  padding: 2px 10px !important;
  display: flex;
  color: #3d4246
}

.ui-menu .gf-search-products .ui-menu-item-wrapper {
  padding: 5px 10px !important
}

.ui-menu .ui-menu-item-wrapper.ui-state-active {
  background: #f7f7f7;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
  position: relative;
  z-index: 2
}
.ui-menu .ui-menu-item {
  clear: both
}

.ui-menu .gf-search-viewall a.ui-menu-item-wrapper {
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  border-top: 1px solid #ccc;
  padding: 5px 0 !important;
  display: block;
  font-weight: 600
}
.gf-search-left {
  flex: 0 0 40px;
  margin-right: 10px;
  max-width: 40px;
  position: relative;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center
}

.gf-search-item-product>a {
  display: flex;
  padding: 3px 0 !important;
  position: relative !important
}

.gf-search-right {
  flex: 1 1 auto
}

.gf-search-item-product-vendor {
  opacity: .8;
  font-size: .9em
}

.gf-search-left img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0
}
`;

		const passwordJsAssets = `(function() {
  var selectors = {
    loginModal: '#LoginModal',
    loginField: '[data-login-field]'
  };

  var data = {
    formError: 'data-error'
  };

  var loginModal = document.querySelector(selectors.loginModal);
  var loginField = document.querySelector(selectors.loginField);

  if (!loginModal) {
    return;
  }

  var passwordModal = new window.Modals('LoginModal', 'login-modal', {
    focusOnOpen: 'Password'
  });

  // Open modal if errors exist
  if (loginField.hasAttribute(data.formError)) {
    passwordModal.open();
  }
})();
`;
		const siteseedFilterInitJsAssets = `var siteseedFilterInit = true;`;

		const giftCardJsAssets = `window.addEventListener('DOMContentLoaded', function() {
  var qrCode = document.getElementById('QrCode');

  new QRCode(qrCode, {
    text: qrCode.dataset.identifier,
    width: 120,
    height: 120,
    imageAltText: theme.strings.qrImageAlt
  });

  document
    .getElementById('GiftCardDigits')
    .addEventListener('focus', function(event) {
      event.target.select();
    });
});
`;

		const giftCardLiquid = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="{{ settings.color_button }}">
  <link rel="canonical" href="{{ canonical_url }}">

  <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>
  <link rel="preconnect" href="https://fonts.shopify.com" crossorigin>
  <link rel="preconnect" href="https://monorail-edge.shopifysvc.com">

  {%- assign header_font = settings.type_header_font -%}
  {%- assign base_font = settings.type_base_font -%}
  {%- assign base_font_bolder = base_font | font_modify: 'weight', 'bolder' -%}
  {%- assign base_font_bold = base_font | font_modify: 'weight', 'bold' -%}
  {%- assign base_font_italic = base_font | font_modify: 'style', 'italic' -%}
  {%- assign base_font_bold_italic = base_font_bold | font_modify: 'style', 'italic' -%}

  <link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style">
  <link rel="preload" as="font" href="{{ header_font | font_url }}" type="font/woff2" crossorigin>
  <link rel="preload" as="font" href="{{ base_font | font_url }}" type="font/woff2" crossorigin>
  <link rel="preload" as="font" href="{{ base_font_bold | font_url }}" type="font/woff2" crossorigin>

  {% if settings.favicon != blank %}
    <link rel="shortcut icon" href="{{ settings.favicon | img_url: '32x32' }}" type="image/png">
  {% endif %}

  {%- assign formatted_initial_value = gift_card.initial_value | money_without_trailing_zeros: gift_card.currency -%}
  {%- assign formatted_initial_value_stripped = formatted_initial_value | strip_html -%}
  <title>{{ 'gift_cards.issued.title_html' | t: value: formatted_initial_value_stripped, shop: shop.name }}</title>

  <meta name="description" content="{{ 'gift_cards.issued.subtext' | t }}">

  {% include 'css-variables' %}

  <style>*,::after,::before{box-sizing:border-box}body{margin:0}body,html{background-color:var(--color-body)}body,button{font-size:calc(var(--font-size-base) * 1px);font-family:var(--font-stack-body);font-style:var(--font-style-body);font-weight:var(--font-weight-body);color:var(--color-text);line-height:1.5}body,button{-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}.border-bottom{border-bottom:1px solid var(--color-border)}.btn--link{background-color:transparent;border:0;margin:0;color:var(--color-text);text-align:left}.text-right{text-align:right}.icon{display:inline-block;width:20px;height:20px;vertical-align:middle;fill:currentColor}.icon__fallback-text,.visually-hidden{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}svg.icon:not(.icon--full-color) circle,svg.icon:not(.icon--full-color) ellipse,svg.icon:not(.icon--full-color) g,svg.icon:not(.icon--full-color) line,svg.icon:not(.icon--full-color) path,svg.icon:not(.icon--full-color) polygon,svg.icon:not(.icon--full-color) polyline,svg.icon:not(.icon--full-color) rect,symbol.icon:not(.icon--full-color) circle,symbol.icon:not(.icon--full-color) ellipse,symbol.icon:not(.icon--full-color) g,symbol.icon:not(.icon--full-color) line,symbol.icon:not(.icon--full-color) path,symbol.icon:not(.icon--full-color) polygon,symbol.icon:not(.icon--full-color) polyline,symbol.icon:not(.icon--full-color) rect{fill:inherit;stroke:inherit}li{list-style:none}.list--inline{padding:0;margin:0}.list--inline>li{display:inline-block;margin-bottom:0;vertical-align:middle}a{color:var(--color-text);text-decoration:none}.h1,.h2,h1,h2{margin:0 0 17.5px;font-family:var(--font-stack-header);font-style:var(--font-style-header);font-weight:var(--font-weight-header);line-height:1.2;overflow-wrap:break-word;word-wrap:break-word}.h1 a,.h2 a,h1 a,h2 a{color:inherit;text-decoration:none;font-weight:inherit}.h1,h1{font-size:calc(((var(--font-h1-desktop))/ (var(--font-size-base))) * 1em);text-transform:none;letter-spacing:0}@media only screen and (max-width:749px){.h1,h1{font-size:calc(((var(--font-h1-mobile))/ (var(--font-size-base))) * 1em)}}.h2,h2{font-size:calc(((var(--font-h2-desktop))/ (var(--font-size-base))) * 1em);text-transform:uppercase;letter-spacing:.1em}@media only screen and (max-width:749px){.h2,h2{font-size:calc(((var(--font-h2-mobile))/ (var(--font-size-base))) * 1em)}}p{color:var(--color-body-text);margin:0 0 19.44444px}@media only screen and (max-width:749px){p{font-size:calc(((var(--font-size-base) - 1)/ (var(--font-size-base))) * 1em)}}p:last-child{margin-bottom:0}@media only screen and (max-width:749px){.small--hide{display:none!important}}.grid{list-style:none;margin:0;padding:0;margin-left:-30px}.grid::after{content:'';display:table;clear:both}@media only screen and (max-width:749px){.grid{margin-left:-22px}}.grid::after{content:'';display:table;clear:both}.grid--no-gutters{margin-left:0}.grid--no-gutters .grid__item{padding-left:0}.grid--table{display:table;table-layout:fixed;width:100%}.grid--table>.grid__item{float:none;display:table-cell;vertical-align:middle}.grid__item{float:left;padding-left:30px;width:100%}@media only screen and (max-width:749px){.grid__item{padding-left:22px}}.grid__item[class*="--push"]{position:relative}@media only screen and (min-width:750px){.medium-up--one-quarter{width:25%}.medium-up--push-one-third{width:33.33%}.medium-up--one-half{width:50%}.medium-up--push-one-third{left:33.33%;position:relative}}.site-header{position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header{border-bottom:1px solid var(--color-border)}}@media only screen and (min-width:750px){.site-header{padding:0 55px}.site-header.logo--center{padding-top:30px}}.site-header__logo{margin:15px 0}.logo-align--center .site-header__logo{text-align:center;margin:0 auto}@media only screen and (max-width:749px){.logo-align--center .site-header__logo{text-align:left;margin:15px 0}}@media only screen and (max-width:749px){.site-header__logo{padding-left:22px;text-align:left}.site-header__logo img{margin:0}}.site-header__logo-link{display:inline-block;word-break:break-word}@media only screen and (min-width:750px){.logo-align--center .site-header__logo-link{margin:0 auto}}.site-header__logo-image{display:block}@media only screen and (min-width:750px){.site-header__logo-image{margin:0 auto}}.site-header__logo-image img{width:100%}.site-header__logo-image--centered img{margin:0 auto}.site-header__logo img{display:block}.site-header__icons{position:relative;white-space:nowrap}@media only screen and (max-width:749px){.site-header__icons{width:auto;padding-right:13px}.site-header__icons .btn--link,.site-header__icons .site-header__cart{font-size:calc(((var(--font-size-base))/ (var(--font-size-base))) * 1em)}}.site-header__icons-wrapper{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center;-webkit-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end}.site-header__account,.site-header__cart,.site-header__search{position:relative}.site-header__search.site-header__icon{display:none}@media only screen and (min-width:1400px){.site-header__search.site-header__icon{display:block}}.site-header__search-toggle{display:block}@media only screen and (min-width:750px){.site-header__account,.site-header__cart{padding:10px 11px}}.site-header__cart-title,.site-header__search-title{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;display:block;vertical-align:middle}.site-header__cart-title{margin-right:3px}.site-header__cart-count{display:flex;align-items:center;justify-content:center;position:absolute;right:.4rem;top:.2rem;font-weight:700;background-color:var(--color-btn-primary);color:var(--color-btn-primary-text);border-radius:50%;min-width:1em;height:1em}.site-header__cart-count span{font-family:HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:calc(11em / 16);line-height:1}@media only screen and (max-width:749px){.site-header__cart-count{top:calc(7em / 16);right:0;border-radius:50%;min-width:calc(19em / 16);height:calc(19em / 16)}}@media only screen and (max-width:749px){.site-header__cart-count span{padding:.25em calc(6em / 16);font-size:12px}}.site-header__menu{display:none}@media only screen and (max-width:749px){.site-header__icon{display:inline-block;vertical-align:middle;padding:10px 11px;margin:0}}@media only screen and (min-width:750px){.site-header__icon .icon-search{margin-right:3px}}.announcement-bar{z-index:10;position:relative;text-align:center;border-bottom:1px solid transparent;padding:2px}.announcement-bar__link{display:block}.announcement-bar__message{display:block;padding:11px 22px;font-size:calc(((16)/ (var(--font-size-base))) * 1em);font-weight:var(--font-weight-header)}@media only screen and (min-width:750px){.announcement-bar__message{padding-left:55px;padding-right:55px}}.site-nav{position:relative;padding:0;text-align:center;margin:25px 0}.site-nav a{padding:3px 10px}.site-nav__link{display:block;white-space:nowrap}.site-nav--centered .site-nav__link{padding-top:0}.site-nav__link .icon-chevron-down{width:calc(8em / 16);height:calc(8em / 16);margin-left:.5rem}.site-nav__label{border-bottom:1px solid transparent}.site-nav__link--active .site-nav__label{border-bottom-color:var(--color-text)}.site-nav__link--button{border:none;background-color:transparent;padding:3px 10px}.site-header__mobile-nav{z-index:11;position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header__mobile-nav{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}}.mobile-nav--open .icon-close{display:none}.main-content{opacity:0}.main-content .shopify-section{display:none}.main-content .shopify-section:first-child{display:inherit}.critical-hidden{display:none}</style>

  <style>
    {{ header_font | font_face: font_display: 'swap' }}
    {{ base_font | font_face: font_display: 'swap' }}
    {{ base_font_bold | font_face: font_display: 'swap' }}
    {{ base_font_bolder | font_face: font_display: 'swap' }}
    {{ base_font_italic | font_face: font_display: 'swap' }}
    {{ base_font_bold_italic | font_face: font_display: 'swap' }}
  </style>

  {{ 'theme.css' | asset_url | stylesheet_tag }}
  {{ 'gift-card.css' | asset_url | stylesheet_tag }}

  <script src="{{ 'vendor/qrcode.js' | shopify_asset_url }}" defer="defer"></script>
  <script src="{{ 'gift-card.js' | asset_url }}" defer="defer"></script>

  <script>
    var theme = {
      strings: {
        qrImageAlt: {{ 'gift_cards.issued.qr_image_alt' | t | json }}
      }
    };
  </script>

  <script type="text/javascript">
    if (window.MSInputMethodContext && document.documentMode) {
      var scripts = document.getElementsByTagName('script')[0];
      var polyfill = document.createElement("script");
      polyfill.defer = true;
      polyfill.src = "{{ 'ie11CustomProperties.min.js' | asset_url }}";
      scripts.parentNode.insertBefore(polyfill, scripts);
    }

    document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  </script>

  {{ content_for_header }}
</head>

<body class="template-giftcard">
  {{ content_for_layout }}
  <ul class="visually-hidden" aria-hidden="true">
    <li id="a11y-new-window-message">{{ 'general.accessibility.link_messages.new_window' | t }}</li>
    <li id="a11y-external-message">{{ 'general.accessibility.link_messages.external' | t }}</li>
    <li id="a11y-new-window-external-message">{{ 'general.accessibility.link_messages.new_window_and_external' | t }}</li>
  </ul>
</body>
</html>
`;

		const headerStartDiv = `<div {% if settings.predictive_search_enabled %}data-section-id="{{ section.id }}" data-section-type="header-section" data-header-section{%endif%}>
  {% include 'search-drawer' %}
`;

		const featureBlog = `<div class="container">
    <section id="Our-BLOG-sectionn" class="our-blog-section">
  {% if section.settings.title != blank %}
    <header class="section-header text-center">
      <h2>{{ section.settings.title | escape }}</h2>
    </header>
  {% endif %}

  {%- assign blog = blogs[section.settings.blog] -%}

  {% unless blog.articles_count == 0 %}
    <ul class="grid grid--uniform grid--blog">
      {% for article in blog.articles limit: 3 %}
        <li class="grid__item medium-up--one-third">
          <article aria-labelledby="FeaturedBlogTitle-{{ forloop.index0 }}-{{ section.id }}">
            <header>
              <a href="{{ article.url }}" class="article__link">
                {% if article.image %}
                  {% capture img_id %}ArticleImage-{{ article.image.id }}{% endcapture %}
                  {% capture img_wrapper_id %}ArticleImageWrapper-{{ article.image.id }}{% endcapture %}
                  {%- assign img_url = article.image | img_url: '1x1' | replace: '_1x1.', '_{width}x.' -%}

                  {% include 'image-style', image: article.image, height: 345, wrapper_id: img_wrapper_id, img_id: img_id %}
                  <div id="{{ img_wrapper_id }}" class="article__grid-image-wrapper js">
                    <div class="article__grid-image-container" style="padding-top:{{ 1 | divided_by: article.image.aspect_ratio | times: 100}}%;" data-image-loading-animation>
                      <img id="{{ img_id }}"
                          class="article__grid-image lazyload"
                          data-src="{{ img_url }}"
                          data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                          data-aspectratio="{{ article.image.aspect_ratio }}"
                          data-sizes="auto"
                          alt="">
                    </div>
                  </div>
                  <noscript>
                    <div class="article__grid-image-wrapper">
                      {{ article | img_url: '345x345', scale: 2 | img_tag: article.title, 'article__grid-image' }}
                    </div>
                  </noscript>
                {% endif %}

                 <p class="product-n-blog" id="FeaturedBlogTitle-{{ forloop.index0 }}-{{ section.id }}">
              {{ article.title | escape }}
            </p>
              </a>
              {% if section.settings.blog_show_date %}
                <span class="article__date">
                  {{ article.published_at | time_tag: format: 'date' }}
                </span>
              {% endif %}
            </header>

            <div class="article__grid-meta">
              <div class="rte article__grid-excerpt">
                  {{ article.content  }}
              </div>

            <a href="{{ article.url }}" class="lrn-text" aria-label="{{ 'blogs.article.read_more_title' | t: title: article.title }}">
            {{ 'blogs.article.learn_more' | t }}
            </a>
            </div>
          </article>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <div class="grid grid--uniform grid--blog">
      {% for i in (1..section.settings.post_limit) %}
        <div class="grid__item medium-up--one-third">
          <div class="article__grid-meta">
            <h3 class="article__title">
              <a href="#">{{ 'homepage.onboarding.blog_title' | t }}</a>
            </h3>


            <div class="rte article__grid-excerpt">
              {{ 'homepage.onboarding.blog_excerpt' | t }}
            </div>

            <ul class="list--inline article__meta-buttons">
              <li>
                <a href="{{ article.url }}" class="btn btn--tertiary btn--small">
                  {{ 'blogs.article.learn_more' | t }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endunless %}
</section>
</div>


{% schema %}
{
  "name": "Blog Posts",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Blog posts"
    },
    {
      "id": "blog",
      "type": "blog",
      "label": "Blog"
    },
    {
      "type": "checkbox",
      "id": "blog_show_date",
      "label": "Show date",
      "default": true
    }
  ],
  "presets": [
    {
      "name": "Blog Posts",
      "category": "Blog",
      "settings": {
        
      }
    }
  ]
}
{% endschema %}
`;

		return {
			headerSchema,
			header_li_class,
			header_a_class,
			pageNotFound,
			articleTemplate,
			blogTemplate,
			cartTemplate,
			collectionTemplate,
			customerAccountTemplate,
			customerActivateAccountTemplate,
			customerAddressTemplate,
			customerLoginTemplate,
			customerOrderTemplate,
			customerRegisterTemplate,
			customerResetPassword,
			giftCardTemplate,
			listCollectionsTemplate,
			passwordTemplate,
			productTemplate,
			searchTemplate,
			singlePage,
			articleTemplateSection,
			blogTemplateSection,
			cartTemplateSection,
			collectionSection,
			collectionListSection,
			collectionTemplateSection,
			listCollectionsTemplateSection,
			passwordContentSection,
			passwordFooterSection,
			passwordHeaderSection,
			productRecommendationsSection,
			productTemplateSection,
			swatchSection,
			footerSchema,
			footer_li_class,
			footer_a_class,
			social_li_class,
			social_a_class,
			settingData,
			settingSchema,
			bgsetSnippets,
			cartPopUpSnippets,
			collectionGridItemSnippets,
			commentSnippets,
			cssVariablesSnippets,
			formStatusSnippets,
			iconArrowLeftSnippets,
			iconArrowRightSnippets,
			iconCartSnippets,
			iconChevronDownSnippets,
			iconCloseSnippets,
			iconErrorSnippets,
			iconFacebookSnippets,
			iconLoginSnippets,
			iconPintrestSnippets,
			iconSaleTagSnippets,
			iconSearchSnippets,
			iconSpinnerSnippets,
			iconTwitterSnippets,
			imageStyleSnippets,
			mediaSnippets,
			paginationSnippets,
			productCardGridSnippets,
			productCardListSnippets,
			productPriceSnippets,
			productPriceListingSnippets,
			searchDrawerSnippets,
			siteseedFilterActionSnippets,
			siteseedFilterNoResultSnippets,
			siteseedFilterPaginationSnippets,
			siteseedFilterProductSnippets,
			siteseedFilterScriptSnippets,
			siteseedFilterSearchSnippets,
			siteseedFilterSortSnippets,
			siteseedFilterTreeSnippets,
			socialSharingSnippets,
			topHeaderSnippets,
			giftCardCssAssets,
			siteseedFilterCssSnippets,
			siteseedSearchCssAssets,
			giftCardJsAssets,
			passwordJsAssets,
			siteseedFilterInitJsAssets,
			giftCardLiquid,
			headerStartDiv,
			featureBlog,
		};
	}
	render() {
		return <></>;
	}
}
