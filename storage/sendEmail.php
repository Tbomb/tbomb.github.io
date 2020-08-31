<?php

$wcsReturn = array(
  "bErr" => 0,
  "sErrDesc" => "",
  "sMsg" => "",
);

$wcsEmailParam = array(
  "sEmailTo" => "",
  "sEmailFrom" => "",
  "sSubject" => "",
  "sMessage" => "",
);

//if "email" is filled out, send email
if (isset($_POST['psSendEmail'])){

  //send email
  $wcsEmailParam["sEmailTo"] = 'tommy@tommyharding.com' ;
  $wcsEmailParam["sEmailFrom"] = 'From: '.$_POST['psSendEmail'] ;
  $wcsEmailParam["sSubject"] = $_POST['psSubject'] ;
  $wcsEmailParam["sMessage"] = $_POST['psSendMsg'] ;

  // Try to send the email
  try {
    mail($wcsEmailParam["sEmailTo"], $wcsEmailParam["sSubject"], $wcsEmailParam["sMessage"], $wcsEmailParam["sEmailFrom"]);
  } 
  catch (Exception $e) {
    $wcsReturn["bErr"] = 1;
    $wcsReturn["sErrDesc"] = $e;
    $wcsReturn["sMsg"] = "Error sending Email";
    error_log(print_r($wcsReturn,true));
  }
  // Set the return message if there is an error or not
  if(!$wcsReturn["bErr"]){
    $wcsReturn["sMsg"] = "Your email has been sent, thank you!";
  }
  else{
    $wcsReturn["sMsg"] = "An error occured, Please try again!"; 
  }
  
  error_log(print_r($wcsEmailParam,true));
}
//if "email" is not filled out, display the message
else{
  $wcsReturn["sMsg"] = "Please make sure your contact email is not blank!";
}
  
  echo json_encode($wcsReturn);
?>