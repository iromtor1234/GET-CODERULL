<?php
$db = new SQLite3('contoh.sqlite');
$db->exec("CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    link TEXT NOT NULL
)");
echo "Tabel supplier siap!";
?>
