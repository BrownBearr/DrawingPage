fetch('https://api.apify.com/v2/datasets/UlgoOKT00qv1NT5Dw/items?token=apify_api_Qp45jyhhsGpkfFWly7hUIumcbkuvR62bC9du')
.then(response=>response.json())
.then(data=>{
console.log(data[0].displayUrl);
//document.getElementById("title").innerHTML = ;
const x = `https://cors-anywhere.herokuapp.com/${data[0].displayUrl}`;
console.log(x);
document.getElementById("head").src = x;


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