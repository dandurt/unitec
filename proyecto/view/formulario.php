<?php 

class Formulario {
    public function insertBtn($title, $submitType) {
        echo "<button class='btn btn-light' type='".$submitType."'>".$title."</button>";
    }
}

?>