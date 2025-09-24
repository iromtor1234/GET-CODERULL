<?php
$db = new SQLite3('contoh.sqlite');
$res = $db->query("SELECT * FROM suppliers");
$data = [];
while ($row = $res->fetchArray(SQLITE3_ASSOC)) {
    $data[] = $row;
}
echo json_encode($data);
?>
