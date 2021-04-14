<?php

        header('Content-Type: text/html; charset=utf-8'); 

        $name = $_POST['name'];
        $last_name =  $_POST['lastname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        $to = "kontakt@spaceless.pl";
        $subject = "$name $last_name";
        $headers = 'Content-Type: text/html; charset=utf-8' . "\r\n";
        $headers .= 'From: ' . $email;
        $content = "Dane: <b>$subject</b> <br> Numer: <b>$phone</b> <br> E-mail: <b>$email</b> <br><br> Treść: <h4>$message</h4>";

        mail($to, $subject, $content, $headers);

        header('Location: ./');

?>