<?php
/* Commands */
$commands = array(
    'git pull',
    'git status',
);
/* Run the commands for output */
$output = '';
foreach ($commands as $command) {
    /* Run it */
    $tmp = shell_exec($command);
    /* Output */
    $output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
    $output .= htmlentities(trim($tmp)) . "\n";
}
?>
<!DOCTYPE HTML>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>GIT DEPLOYMENT SCRIPT</title>
</head>
<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
<pre>
 ___________________________
|							|
| Git Deployment Script		|
|___________________________|

<?php echo $output; ?>
</pre>
</body>
</html>
