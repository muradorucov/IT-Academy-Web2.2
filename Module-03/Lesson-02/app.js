const url = 'https://content.guardianapis.com/search';
const apiKey = '6d27f3a6-192b-4b12-88a2-b63615c39075';
const query = encodeURIComponent('Microsoft Google Amazon');

fetch(`${url}?q=${query}&api-key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
