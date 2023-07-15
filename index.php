<?php
/**
 * Plugin Name: Order Notes Filter
 * Version: 1.0
 * Description: Adds filtering capabilities to the Order Notes meta box in WooCommerce.
 * Author: Jitesh Dhamaniya
 * Author URI: https://dhamaniya.com/
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class OrderNotesFilter {
               
    function __construct() {
        add_action('admin_enqueue_scripts', array($this, 'enqueue_order_notes_filter_scripts'));       
    }

    function enqueue_order_notes_filter_scripts() {
        wp_enqueue_script('order-notes-filter', plugin_dir_url(__FILE__) . 'order_notes_filter.js', array('jquery'), '1.2', true);
        wp_enqueue_style('order-notes-filter', plugin_dir_url(__FILE__) . 'order_notes_filter.css', array(), '1.0');        
    }
    
}

new OrderNotesFilter();
