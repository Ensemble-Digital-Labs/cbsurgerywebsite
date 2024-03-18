<?php
// Replace 'YOUR_API_KEY' with your actual API key
$apiKey = 'AIzaSyDMJe1vkfej4QsHLLcZvs5Qp0NNJ62lHd0';
$placeId = 'ChIJB9liAFDP2IcRFOwbROP4i5Y';

// Construct the API URL
$apiUrl = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=name,reviews&key=$apiKey";

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($ch);

// Check for errors
if(curl_error($ch)) {
    echo 'Error: ' . curl_error($ch);
    exit;
}

// Close cURL session
curl_close($ch);

// Decode JSON response
$data = json_decode($response, true);

// Extract reviews from the response
$reviews = $data['result']['reviews'];

// Loop through reviews and do something with them
// foreach ($reviews as $review) {
//     echo "Author: {$review['author_name']}, Rating: {$review['rating']}, Review: {$review['text']}<br>";
// }
$myfile = fopen("last-review-fetch-date.txt", "w") or die("Unable to open file!");
$data = json_encode(['date'=> date('Y/m/d'),'reviews'=>json_encode($reviews)]);
fwrite($myfile, $data);
fclose($myfile);

echo json_encode($reviews);