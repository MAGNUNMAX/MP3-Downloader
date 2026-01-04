 const button = document.querySelector('#button');
 const reset = document.querySelector('#reset');
const text = document.querySelector('#text');
const inputUrl = document.querySelector('#input');
const loader = document.querySelector('#fountainTextG');

text.innerText = "";

button.addEventListener('click',()=>{

loader.style.display = 'block';  // showing the loader

let url = inputUrl.value;
text.innerText = "";
if(!url){
    text.innerText =" Please enter a valid URL";
    return;
};


const apiUrl = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${encodeURIComponent(url)} `;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '---your API Key---',
		'x-rapidapi-host': 'youtube-mp3-downloader2.p.rapidapi.com'
	}
};

async function downloader(apiUrl) {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error('Error in fetching download URL');
        }
        const result = await response.json(); // Obteniendo la respuesta en formato JSON
        console.log(result);

        // Verificar si el campo dlink existe en la respuesta
        if (result.dlink && result.status === "finished") {
            const downloadLinkUrl = result.dlink.replace(/\\/g, '');

            // Crea un enlace para descargar el archivo MP3
            const downloadLink = document.createElement('a');
            downloadLink.href = downloadLinkUrl;
            downloadLink.innerText = "Click here to download the MP3";
            downloadLink.setAttribute('download', 'video.mp3'); 
            downloadLink.style.display = 'block';

            loader.style.display = 'none'; 
            text.innerText = ""; 
            text.appendChild(downloadLink);
        } else {
            text.innerText = "No download link found. Please try again.";
        }

    } catch (error) {
        console.error(error);
        loader.style.display = 'none';  
        text.innerText = "Error during download.";
    } finally {
        // clear input after finished
        inputUrl.value = ""; 
    }
}

downloader(apiUrl);

});

reset.addEventListener("click",()=>{

    location.reload();    
});
