<?php
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    echo 'vendor found';
} else {
    echo 'vendor MISSING';
}
if (file_exists(__DIR__ . '/vendor/stripe/stripe-php/init.php')) {
    echo ' — Stripe found';
} else {
    echo ' — Stripe MISSING';
}

