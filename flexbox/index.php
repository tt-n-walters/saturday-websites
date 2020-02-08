<?php

$file = "sounds.zip";

header("Content-Type: application/zip");
header("Content-Disposition: attachment; filename=$file");
readfile("$file");

?>
