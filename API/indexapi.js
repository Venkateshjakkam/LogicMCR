// // API--------------------1
// async function  fetchData1(){

//     let getData = await fetch('https://jsonplaceholder.typicode.com/users');
//     let storData = await getData.json();
//     storData.map((data)=> {console.log(data.name)})

// }

// // API------------------2
// async function  fetchData2(){

//     let getData = await fetch('https://jsonplaceholder.typicode.com/albums');
//     let storData = await getData.json();
//     storData.map((data)=> {console.log(data.title)})

// }



// // API----------------------3
// async function  fetchData3(){

//     let getData = await fetch('https://jsonplaceholder.typicode.com/comments');
//     let storData = await getData.json();
//     storData.map((data)=> {console.log(data.name)})

// }





// Promise.allSettled() waits for all promises to settle (either resolve or reject).

async function fetchAllSettledData() {
    const results = await Promise.allSettled([
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} Success:`, result.value);
        } else {
            console.error(`API ${index + 1} Failed:`, result.reason);
        }
    });
}

// fetchAllSettledData();




// Promise.race() returns the first settled promise (either resolved or rejected).
async function fetchRaceData() {
    
    try {
        const firstResponse = await Promise.race([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);

        const finalResult = firstResponse.map((data) => {
            console.log(data.name);
        });

        console.log("Fastest API response:", firstResponse);
        console.log(finalResult);
        
    } catch (error) {
        console.error("Race failed:", error);
    }

}

// fetchRaceData();




// Promise.any() waits for the first successful promise and ignores failures unless all fail.
async function fetchAnyData() {
    try {
        const firstResolved = await Promise.any([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);

        console.log("First resolved API data:", firstResolved);
    } catch (error) {
        console.error("All requests failed:", error);
    }
}

// fetchAnyData();




// Promise.all() waits for all promises to resolve, or fails if any promise rejects.
async function fetchAllData() {
    try {
        const [users, albums, comments] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);

        console.log("Users:");
        users.map(user => console.log(user.name));

        console.log("\nAlbums:");
        albums.map(album => console.log(album.title));

        console.log("\nComments:");
        comments.map(comment => console.log(comment.name));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// fetchAllData();







