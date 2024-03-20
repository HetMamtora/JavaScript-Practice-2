console.log("27) Rewrite the previous exercise(Script26) using Promises.");

function makeAPICall1(url){
    return fetch(url)
    .then(response => response.json())
}
 
 function handleData1(data){
    console.log('Processed Data',data);
}
 
function main(){
 
    const apiURL1 = 'https://jsonplaceholder.typicode.com/posts/3';
    const apiURL2 = 'https://jsonplaceholder.typicode.com/posts/4';
 
    makeAPICall1(apiURL1).then(handleData1).catch(err=>console.log('error')); 
    makeAPICall1(apiURL2).then(handleData1).catch(err=>console.log('error'));
}
 
main();