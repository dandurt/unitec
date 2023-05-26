<?php 

class Formulario {
    public function insertBtn($title, $submitType, $color) {
        echo "<div class='mt-3 mb-3'><button class='btn ".$color."' type='".$submitType."'>".$title."</button></div>";
    }

    public function insertTitle($titleForm) {
        echo "<h2 class='fw-bold text-center pt-5 mb-5'>".$titleForm."</h2>";
    }

    public function insertControl($id, $label, $inpuType) {
        echo "<div class='mb-3 mt-3 form-group'>
            <label class='form-label for=".$id."'>".$label."</label>
            <input class='form-control' type='".$inpuType."' id='".$id."' name='".$id."'/>
        </div>";
    }
}

?>