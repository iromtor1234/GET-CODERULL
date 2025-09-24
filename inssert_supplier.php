<?php
$db = new SQLite3('contoh.sqlite');
$stmt = $db->prepare("INSERT INTO suppliers (name, link) VALUES (:n, :l)");
$stmt->bindValue(':n', $_POST['name'], SQLITE3_TEXT);
$stmt->bindValue(':l', $_POST['link'], SQLITE3_TEXT);
$stmt->execute();
echo "success";
?>
