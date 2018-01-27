<?php
$token   = ''; // from @BotFather /newbot
$chat_id = ''; // from https://api.telegram.org/bot$token/getUpdates
$text = htmlspecialchars( $_POST['text'] );

$sendToTelegram = fopen( 'https://api.telegram.org/bot' . $token . '/sendMessage?chat_id=' . $chat_id . '&parse_mode=html&text=' . $text, 'r' );

if ( $sendToTelegram ) {
	echo 'sent';
} else {
	echo 'error';
}