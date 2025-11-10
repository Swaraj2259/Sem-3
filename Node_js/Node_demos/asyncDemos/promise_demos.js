// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


  //async and await
// async function fetchPosts() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data);
// }

// fetchPosts();

//now have to make the async iterator demo
async function* asyncGenerator() {
  const data = [1, 2, 3, 4, 5];
    for (const item of data) {
        // Simulate an asynchronous operation using a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));
        yield item;
    }
}

(async() => {
    const asyncIter = asyncGenerator();
    for await (const value of asyncIter) {
        console.log(value);
    }
})();

//output will be 1,2,3,4,5 with 1 second delay between each