<?php
require_once("twitteroauth/twitteroauth.php");
$consumerKey = "vEr9LhrCRl1LxpS2h5LVUj4dC";
$consumerSecret = "cYgVWwqrZUASwdijrurcWx6tDreosP5xHddhPtphymGgaA7QkQ";
$accessToken = "3065965512-yczxWQAmFTfDvPdU75492Pv1n3Uxy2Wvd2jeF5D";
$accessTokenSecret = "qqL5fWcvhEudGQKjiF3th45RKxl5D89wkjlKhhEXwDN4w";
$twObj = new TwitterOAuth($consumerKey,$consumerSecret,$accessToken,$accessTokenSecret);

$andkey = "webnaut AND beeworks";
$options = array('q'=>$andkey,'count'=>'30');
$json = $twObj->OAuthRequest(
'https://api.twitter.com/1.1/search/tweets.json',
'GET',
$options
);
$jset = json_decode($json, true);
foreach ($jset['statuses'] as $result){
$name = $result['user']['name'];
$link = $result['user']['profile_image_url'];
$content = $result['text'];
$updated = $result['created_at'];
$time = $time = date("Y-m-d H:i:s",strtotime($updated));
echo "<img src='".$link."''>"." | ".$name." | ".$content." | ".$time;
echo '<br>';
}
?>