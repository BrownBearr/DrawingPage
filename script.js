fetch('https://api.apify.com/v2/datasets/eumGtWDiXoUGobsOe/items?token=apify_api_Qp45jyhhsGpkfFWly7hUIumcbkuvR62bC9du')
.then(response=>response.json())
.then(data=>{
console.log(data[0]);
document.getElementById('changeURL').addEventListener('click', () => {
    console.log('hi');
    //Hello, this is a glimpse into my life and the art that has accompnied it. thank you for stopping by on a trip down memory lane.
    let x = Math.floor(Math.random()*445);
    console.log(data[x].url);
    const p = data[x].url;
    const c = data[x].caption;
    const t = data[x].timestamp;
    console.log(t.replace('t',''));

    let matchedText = t.match(/^[^T]*/g);
    console.log(matchedText);
    
    let newCaption = c.match(/^[^#]*/g);
    const e = '/embed';
    const blank = ' ';
    document.getElementById('Hello').innerHTML = blank;
    document.getElementById('embed').src =
      p + "embed";
    document.getElementById('day').innerHTML = newCaption;
    document.getElementById('time').innerHTML = matchedText;
    
  });



})

//check to see if its an image type and if it is then post the image, if its a video then bypass it



// fetch(fullURL)
//     .then(response => response.json())
//     .then(data=>{
//         console.log(i);
//         //data.results[0].abstract;
        
//         document.getElementById("title").innerHTML = data.results[i].title;
//         document.getElementById("abstract").innerHTML = data.results[i].abstract;
//         //console.log(data.results[0].media[0].media-metadata[0]);


//     })