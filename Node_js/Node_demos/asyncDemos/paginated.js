function fetchPage(page) {
  return fetch('https://jsonplaceholder.typicode.com/todos/' + page)
    .then(response => response.json());
}

async function* runManyPage(totalPages) {
  try {
    for (let i = 1; i <= totalPages; i++) {
      const pageData = await fetchPage(i);
      console.log(`Fetched page ${i}`, pageData);
      yield pageData; // yield the result (important!)
    }
  } catch (error) {
    console.error('Error fetching pages:', error);
  }
}

// (async () => {
//   for await (const data of runManyPage(3)) {
//     console.log("📦 Received in main:", data);
//   }
// })();

