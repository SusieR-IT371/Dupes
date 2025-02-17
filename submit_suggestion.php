<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name'] ?? 'Anonymous');
  $suggestion = htmlspecialchars($_POST['suggestion'] ?? '');

  if (empty($suggestion)) {
    echo "Please enter a suggestion.";
    exit;
  }

  $to = "susan.reimer96@gmail.com";
  $subject = "New Suggestion from $name";
  $message = "Suggestion:\n$suggestion";
  
  if (mail($to, $subject, $message)) {
    echo "Thank you for your suggestion!";
  } else {
    echo "There was an issue sending your suggestion.";
  }
}
?>
