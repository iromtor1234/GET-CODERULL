<?php
$db = new SQLite3('contoh.sqlite');
$id = intval($_POST['id']);
$db->exec("DELETE FROM suppliers WHERE id=$id");
echo "deleted";
?>
