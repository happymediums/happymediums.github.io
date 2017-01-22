<?php
$field_fname = $_POST['cf_fname'];
$field_lname = $_POST['cf_lname'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'jim@jimmorrison.io';
$subject = 'Message from your website from'.$field_name;

$body_message = 'From: '.$field_fname."\n";
$body_message = 'From: '.$field_lname."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html#contact-section';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to gordon@template-help.com');
		window.location = 'index.html#contact-section';
	</script>
<?php
}
?>
