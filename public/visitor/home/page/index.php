<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>

    <?php
    $modules = [
        'newsletter' => ['create', 'delete'],
        'registration' => ['create', 'delete'],
        'auth' => ['create', 'delete'],
        'home' => [],
    ];
    ?>

    <?php foreach ($modules as $module => $plugins) {
        include("../../$module/plugin/head.html");
    } ?>
    <?php //include("../../newsletter/plugin/head.html"); ?>

</head>
<body>

<?php include("../plugin/messages.html"); ?>

<div class="home-plugins">
    <?php //include("../../newsletter/plugin/create.html"); ?>

    <?php foreach ($modules as $module => $plugins) {
        foreach ($plugins as $plugin) { ?>
            <div class="plugin <?php echo $module ?> <?php echo $plugin; ?>">
                <?php include("../../$module/plugin/$plugin.html"); ?>
            </div>
            <?php
        }
    } ?>
</div>


<div class="home-foots">
    <?php foreach ($modules as $module => $plugins) {
        include("../../$module/plugin/foot.html");
    } ?>
    <?php //include("../../newsletter/plugin/foot.html"); ?>

    <?php //include("../../home/plugin/foot.html"); ?>
</div>


</body>
</html>


