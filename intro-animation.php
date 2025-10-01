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
            <!-- Background images -->
            <div class="intro-screen screen1"></div>
            <div class="intro-screen screen2"></div>

            <!-- Audio elements -->
            <audio id="audio1" src="<?php echo plugin_dir_url( __FILE__ ); ?>sounds/thunder1.mp3"></audio>
            <audio id="audio2" src="<?php echo plugin_dir_url( __FILE__ ); ?>sounds/evil-laugh2.mp3"></audio>
        </div>
    <?php endif;
});

