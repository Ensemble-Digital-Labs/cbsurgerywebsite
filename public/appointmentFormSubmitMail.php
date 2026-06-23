<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
// header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Headers:Content-Type');
// Read the form values

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    $recaptcha_secret = "6Lda8qopAAAAALDyJx7PfrYJSpVnMVl8YtYhUQld";
$recaptcha_token =  $data['grecaptcha'];

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_token");
$response = json_decode($response);

if ($response->success) {
    
    
    
    $email = isset(  $data['email'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "",  $data['email'] ) : "";
    $name = isset(  $data['name'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "",  $data['name'] ) : "";
    $contactNumber = isset(  $data['phoneNumber'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "",  $data['phoneNumber'] ) : "";
    $dob = isset($data['dob']) ? date("Y-m-d", strtotime(preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $data['dob']))) : "";
    $appointmentDate = isset($data['appointmentDate']) ? date("Y-m-d", strtotime(preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $data['appointmentDate']))) : "";
    $gender = isset(  $data['gender'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "",  $data['gender'] ) : "";
    // || isset(  $data['Female'] ) || isset(  $data['Other'] ) ;
    // console.log($dender);
    $receiver = "info@cbsurgery.com";
    $subject = "New Appointment Form Submission";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <noreply@cbsurgery.com>' . "\r\n";
    // $msgBody = "<b><u>New Appointment Details</u></b> <br/><br/>Name: ". $name ."<br/>Email: ". $email ."<br/>Contact Number: ". $contactNumber."<br/> DOB: ".$dob."<br/> Appointment Date: ".$appointmentDate."<br/> Gender: ".$gender;

    $msgBody = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #64c8cd; padding: 50px;">
    
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #fff; color: #fff; padding: 40px;">
                <img src="https://cbsurgery.getupsolutions.net/assets/img/logo.png" alt="Your Logo" style="max-width: 200px; display: block; margin: 0 auto;">
            </div>
            <div style="padding: 20px 50px;font-family: Verdana, Geneva, Tahoma, sans-serif;">
                <h3 style="text-align:center;margin-bottom:20px">New Appointment Form Submission</h3>
                <p><strong>Name:</strong> '.$name.'</p>
                <p><strong>Email:</strong> '.$email.'</p>
                <p><strong>Contact Number:</strong> '.$contactNumber.'</p>
                <p><strong>Date of Birth:</strong> '.$dob.'</p>
                <p><strong>Appointment Date:</strong> '.$appointmentDate.'</p>
                <p><strong>Gender:</strong> '.$appointmentDate.'</p>
                <p><strong>Phone Number:</strong> '.$gender.'</p>
                <p><strong>Message:</strong> '.$message.'</p>
            </div>
            <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                <p style="margin-bottom: 0;">© 2024 Chester Field Bariatric Surgery. All rights reserved.</p>
            </div>
        </div>
    
    </body>
    </html>
    ';

    if(mail($receiver,$subject,$msgBody,$headers)){
        echo $_POST['email'];
    } else {
        echo "Fail";
    }
}else {
        echo "Fail";
    }
    
    //  echo $_POST['email'];
    
    //  echo "Success";
?>
