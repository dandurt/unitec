<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php 
            require_once('config.php');
            require_once('header.php');
            require_once('formulario.php');
        ?>
    </head>
    <body> 
        <div class="container">
            <p>ejemplo</p>
        </div>
        <div>
           <?php
            $form = new Formulario();
            $form->insertBtn('Enviar', "reset");
            $form->insertBtn('Reset', "submit");
           ?>
        </div>
    </body>
</html>