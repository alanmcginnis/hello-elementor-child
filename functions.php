<?php

/* Function to enqueue stylesheet from parent theme */
/* We will change this later */

function child_enqueue__parent_scripts() {

wp_enqueue_style( 'parent', get_stylesheet_directory_uri().'/dist/css/master.min.css' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue__parent_scripts');