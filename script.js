let btn = document.getElementById("Shortenbtn")
let shortUrl = document.getElementById("shortUrl")

btn.addEventListener('click', short);

// THIS FUNCTION IS FOR THE SHORT URL
async function short(){

    let longUrl = document.getElementById("longUrl").value;
    
    const result =  await fetch(`https:api.shrtco.de/v2/shorten?url=${longUrl}`);

    const data = await result.json();

    shortUrl.value = data.result.short_link2;
    console.log(data.result.short_link2);

} 


// COPY URL LOGIC 


let newUrl = document.getElementById("shortUrl")
let copyButton = document.getElementById("copybtn");



copyButton.onclick =()=>{
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value)
}