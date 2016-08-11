<?php
  /**
   * The Template for displaying all single posts.
   * @package Cryout Creations
   * @subpackage nirvana
   * @since nirvana 0.5
   */
  get_header(); ?>
<section id = "container" class = "<?php echo nirvana_get_layout_class(); ?>" >
  <div id = "content" role = "main" >
	<?php cryout_before_content_hook(); ?>
	

	<div id = "post-<?php the_ID(); ?>" <?php post_class(); ?>>
	  <h1 class = "entry-title" ><?php the_title(); ?></h1 >
	  <?php cryout_post_title_hook(); ?>
	  	  <!--etiquettes du film-->
	  <p style = "color:#00889E; font-style:italic;" >Etiquette(s)
													  : <?php echo strip_tags( get_the_tag_list( '', ', ', '' ) ); ?>

													  
		<?php if ( have_posts() ) {
		  while ( have_posts() ) :
		  the_post();
		  if ( in_category( 'boutique' ) ) :
		?>

 <!--box d'ajout au panier-->
	  <div id = "retailBox" >
		<?php
		  $productPrice = get_post_meta( $post->ID, 'prix_euro', true );
		  $productName  = get_the_title();
		  echo '<span id="priceDVD"> Prix de vente : ';
		  echo $productPrice;
		  echo ' € </span><br/>';
		  echo print_wp_cart_button_for_product( $productName, $productPrice );
		?>
	  </div >
	<?php endif; ?>
	<br/>
<br/>

	  	  	<!--back autres films si on vient pas de la page d'accueil-->
			<?php $referer= wp_get_referer(); 
			
			if($referer!=="http://www.advita.com/new/"){
				echo '<span id="backToMovieList" style="font-size:18px;"> <a href="/new/boutique-en-ligne"><< Retour à la liste des films <<</a></span>';
			}
			
			?>
			<script type="javascript">

console.log(" <?php echo $referer;?>  ")
</script>	
		
			
 
<br/>
<br/>
<br/>
	  <?php the_post_thumbnail( 'thumbnail-article' ); ?>
	  <div id = "metaIntroArticle" >
		<?php if ( $realisation = get_field( 'nom_du_realisateur' ) ): ?>
		  <?php echo '<span class="metaIntroArticleBold"> Réalisé par </span>' . $realisation . '</span><br/>'; ?>
		<?php endif; ?>
		<?php if ( $musique = get_field( 'musique' ) ): ?>
		  <?php echo '<span class="metaIntroArticleBold"> Musique : </span>' . $musique . '</span><br/>'; ?>
		<?php endif; ?>
		<?php if ( $partenariat = get_field( 'realisation_en_partenariat_avec' ) ): ?>
		  <?php echo '<span class="metaIntroArticleBold"> En partenariat avec </span>' . $partenariat . '</span><br/>'; ?>
		<?php endif; ?>
		<?php if ( $droits = get_field( 'droits_dutilisation' ) ): ?>
		  <?php echo '<span class="metaIntroArticleBold"> Utilisation </span>' . $droits . '</span><br/>'; ?>
		<?php endif; ?>
		<?php if ( $duree = get_field( 'duree_mn' ) ): ?>
		  <?php echo '<span class="metaIntroArticleBold"> Durée : </span>' . $duree . ' min</span><br/>'; ?>
		<?php endif; ?>
		<?php if ( $copyright = get_field( 'parution' ) ): ?>
		  <?php echo '© ADVITA Productions ' . $copyright . ''; ?>
		<?php endif; ?>
	  </div >
	  <div class = "entry-content" >
		<?php the_content(); ?>
		<?php wp_link_pages( array(
		  'before' => '<div class="page-link"><span>' . __( 'Pages:', 'nirvana' ),
		  'after'  => '</span></div>'
		) ); ?>
	  </div ><!-- .entry-content -->
	  <?php if ( get_the_author_meta( 'description' ) ) : // If a user has filled out their description, show a bio on their entries  ?>
		<div id = "entry-author-info" >
		  <div id = "author-avatar" >
			<?php echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'nirvana_author_bio_avatar_size', 80 ) ); ?>
		  </div ><!-- #author-avatar -->
		  <div id = "author-description" >
			<h2 ><?php echo __( 'About', 'nirvana' ) . ' ' . esc_attr( get_the_author() ); ?></h2 >
			<?php the_author_meta( 'description' ); ?>
			<div id = "author-link" >
			  <a href = "<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" >
				<?php printf( __( 'View all posts by ', 'nirvana' ) . '%s <span class="meta-nav">&rarr;</span>', get_the_author() ); ?>
			  </a >
			</div ><!-- #author-link	-->
		  </div ><!-- #author-description -->
		</div ><!-- #entry-author-info -->
	  <?php endif; ?>
	  <footer class = "entry-meta" >
		<?php nirvana_posted_in(); ?>
		<?php edit_post_link( __( 'Edit', 'nirvana' ), '<span class="edit-link"><i class="icon-edit icon-metas"></i> ', '</span>' );
		  cryout_post_footer_hook(); ?>
	  </footer ><!-- .entry-meta -->
	</div ><!-- #post-## -->
  <?php endwhile;
	} // end of the loop. ?>

  	<!--back autres films-->
 <span style="font-size:18px;"> <a href="/new/boutique-en-ligne"><< Retour à la liste des films <<</a></span>
	<?php cryout_after_content_hook(); ?>
  </div ><!-- #content -->
  <?php nirvana_get_sidebar(); ?>
</section ><!-- #container -->
<?php get_footer(); ?>
