<?php
require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name'] ?? 'Anonymous');
  $suggestion = htmlspecialchars($_POST['suggestion'] ?? '');

  if (empty($suggestion)) {
    echo "Please enter a suggestion.";
    exit;
  }

  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();
      $mail->Host = 'smtp.yahoo.com';
      $mail->SMTPAuth = true;
      $mail->Username = 'makeupdupes@yahoo.com';
      $mail->Password = 'IT371dupes!';
      $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = 587;

      $mail->setFrom('makeupdupes@yahoo.com', 'Susie');
      $mail->addAddress('makeupdupes@yahoo.com');
    
      $mail->isHTML(false);
    
      $mail->Subject = "New Suggestion from $name";
      $mail->Body = "Suggestion:\n$suggestion";
  
  if ($mail->send()) {
    echo "Thank you for your suggestion!";
  } else {
    echo "There was an issue sending your suggestion.";
  }
} catch (Exception $e) {
  echo "Mailer Error: {$mail->ErrorInfo}";
  }
}
?>
