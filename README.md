# YouTube MP3 Downloader

A simple web app to convert YouTube videos into MP3 audio using the **RapidAPI YouTube MP3 Downloader API**.

---

## Features

- Enter a YouTube video URL and get an MP3 download link.
- Loader animation while the request is being processed.
- Handles errors gracefully.
- Reset button to start over.

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/youtube-mp3-downloader.git

2. Install dependencies (if using a bundler like Parcel, Vite, or Webpack):

npm install

3. Get your RapidAPI Key from RapidAPI YouTube MP3 Downloader

4. Create a .env file in the root folder:

RAPIDAPI_KEY=your_api_key_here

5. Update your JS to use the environment variable (if using a bundler that soports import.meta.env):

``` javascript 
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'youtube-mp3-downloader2.p.rapidapi.com'
  }
};


# Usage

Open index.html in your browser.

Paste a YouTube URL in the input field.

Click the Download button.

Wait for the loader and click the generated link to download the MP3.

Use the Reset button to start over.



# Notes

Make sure you have a valid RapidAPI subscription.

This project is for educational purposes only. Downloading copyrighted content may violate YouTube terms.

Do not commit your API key to public repositories.

💻 Tech Stack

Vanilla JavaScript

HTML & CSS

RapidAPI YouTube MP3 Downloader