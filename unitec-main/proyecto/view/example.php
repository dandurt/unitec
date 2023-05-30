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
        
        <div>
           <?php
            $form = new Formulario();
            $form->insertTitle('Login');
            $form->insertControl('name', 'Nombre', 'text');
            $form->insertControl('password', 'Password', 'password');
            $form->insertBtn('Enviar', "reset", "btn-danger");
            $form->insertBtn('Reset', "submit", "btn-info" );
           ?>
        </div>
        <?php require_once('footer.php');?>
        </div>
    </body>
</html>