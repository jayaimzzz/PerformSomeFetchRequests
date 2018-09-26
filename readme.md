# Activity - Perform Some Fetch Requests
# Assessment - Perform Some Fetch Requests

1. Visit [JService.io](http://jservice.io/) in your browser and familiarize yourself with the API Usage section.
2. Go to Popular Categories, and select two categories you want to view.
3. Note the categories' IDs in the URL. For example, if you pick the category Animals, you will see that the URL is `http://jservice.io/popular/21`, and in this case the category ID is `21`.
4. Now return to the first page. Note the "/Category" endpoint. It allows you to get all the clues for a particular category. But you need to pass the ID, in this case, as a query parameter (they call it an "option"). For example, for the Animals category, the request URL would be `http://jservice.io/api/category?id=21`.
5. For one of your two categories, write a GET request using `fetch()` and `.then()` to display the category title and *one* random clue from this category on the DOM. *(5 points)*
6. For the other of your two categories, write a GET request using `fetch()` and `async`/`await` to display the category title and *one* random clue from this category on the DOM. *(5 points)*
