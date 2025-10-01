<?php
/**
 * Plugin Name: Intro Animation
 * Description: Shows a 2-second fullscreen intro animation on the homepage.
 * Version: 1.0
 * Author: Paul Robertson
 */

if ( ! defined( 'ABSPATH' ) ) exit; // No direct access

// Enqueue scripts & styles
add_action( 'wp_enqueue_scripts', function() {
    // Load CSS
    wp_enqueue_style( 'intro-animation-style', plugin_dir_url( __FILE__ ) . 'intro-animation.css' );

    // Load JS
    wp_enqueue_script( 'intro-animation-script', plugin_dir_url( __FILE__ ) . 'intro-animation.js', [], false, true );
});

// Add overlay markup at top of <body>
add_action( 'wp_body_open', function() {
    if ( is_front_page() ) : ?>
        <div id="intro-overlay">
            <div class="intro-animation">
                <h1 class="fade-in">From SCI IT</h1>
            </div>
        </div>
    <?php endif;
});
