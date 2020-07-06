<?php
    $part    = parse_url($_SERVER['REQUEST_URI']);
    parse_str($part['query'], $urlParams);
    $settings = $urlParams['settings'];
?>