console.log("20) Implement a try-catch block to handle an error that occurs during API data fetching.");

async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error("Error Fetching:", error);
    }
}

fetchData();