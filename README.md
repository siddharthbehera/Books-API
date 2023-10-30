# Books-API

Book-API: 1.0.0
info:
  title: Book-API Node.js API Documentation
  version: 1.0.0
  description: This API provides a set of functions and endpoints that enable developers to retrieve, add, update, or delete book-related data programmatically
servers:
  - url: https://localhost:5000/api/book
paths:
  /getBooks:
    get:
      summary: Get a list of books
      responses:
        '200':
          description: A list of books
          content:
            application/json:
              example:
                {
      			"_id": "653faa4121f2b99097f54132",
      			"bookTitle": "BOOK 1",
      			"summary": "this is the summary of book1",
     		   	"auther": "Siddharth Behera",
        		"__v": 0
   		},
   		{
        		"_id": "653faa5421f2b99097f54136",
        		"bookTitle": "BOOK 2",
        		"summary": "this is the summary of book2",
        		"auther": "Dhawal Gadjwe",
        		"__v": 0
    		},

paths:
  /addBook:
    post:
      summary: Add a new Book
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                bookTitle:
               		type: string,
		  	required: true,
			unique: true
                summary:
			type: string,
			minLength: 10
              	auther:
			type: string,
			required: true

		example:
			{
    			"bookTitle":"BOOK3",
    			"summary":"this is the summary of book3",
    			"auther":"Mukesh Thakre"
			}
      responses:
        '201':
          description: Book Added Successfully
        '400':
          description: Bad request. Invalid input data. Book already exists

paths:
  /{bookId}
    parameters:
      - name: bookId
        in: path
        required: true
       
    get:
      summary: Get Book detail by ID
      responses:
        '200':
          summary: "this is the summary of book3"
          content:
            application/json:
              
        '404':
          description: Book not found

paths:
 /updateBook:
	summary: Update Book details by ID
      	requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                bookId:
                  	type: string
                  	required: true
              	newSummary:
                	type: string
			required: true
      responses:
        '200':
          description: Book detail updated successfully
        '400':
          description: Bad request. Invalid input data.
        '404':
          description: Book not found
  
paths:
/deleteBook  
    delete:
      summary: Delete Book by ID
      responses:
        '204':
          description: Book deleted successfully
        '404':
          description: Book not found

___________________________________________________________________________________________________________

Setting Up and Running the Application Locally

Prerequisites-
Before you can set up and run the application, you need to ensure that you have the following prerequisites installed on your local machine:

Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed. You can download and install them from the official website: Node.js Downloads.

Git: You need Git version control to clone the repository. You can download and install Git from the official website: Git Downloads.

Clone the Git Repository:

1) Open your terminal or command prompt.
2) Change to the directory where you want to clone the repository.
3) Use the following command to clone the Git repository:

git clone https://github.com/siddharthbehera/Books-API.git

Install Dependencies
1) Navigate to the cloned repository directory:
    cd your-repo
2) Install project dependencies using npm:
    npm install

Configuration
Locate the configuration files (e.g., .env or config.js) in the project directory.

Modify the configuration as needed, setting environment-specific variables and API keys if required.

Running the Application
After the installation of dependencies and configuration, you can run the application using the following command:

    npm start

The application should now be accessible locally at a URL such as http://localhost:5000. Open your web browser and navigate to this address.


____________________________________________________________________________________________________________