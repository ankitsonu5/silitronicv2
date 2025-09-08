<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sales@silitronics.com";
    $subject = "New Contact Form Submission from Silitronics Website";

    $name = htmlspecialchars($_POST['name']);
    $organization = htmlspecialchars($_POST['organization']);
    $contact = htmlspecialchars($_POST['contact']);
    $email = htmlspecialchars($_POST['email']);
    $comments = htmlspecialchars($_POST['comments']);

    $message = "You have received a new message from your website contact form:\n\n";
    $message .= "Name: $name\n";
    $message .= "Organization: $organization\n";
    $message .= "Contact Number: $contact\n";
    $message .= "Email: $email\n";
    $message .= "Comments:\n$comments\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>window.location.href='../thank-you.html';</script>";
    } else {
        echo "<script>alert('Oops! Something went wrong. Please try again.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request.";
}
?>
