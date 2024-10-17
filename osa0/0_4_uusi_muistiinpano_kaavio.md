Here is a flow chart of creating a new note in https://studies.cs.helsinki.fi/exampleapp/notes:

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of server: Server processes the POST request<br/>and returns a redirect response

    server-->>browser: Location: /exampleapp/notes
    deactivate server
    
    Note left of browser: Browser receives the redirect response and sends<br/>the GET request to retrieve the exampleapp page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note left of browser: Browser sends the GET request to retrieve style<br/>of the exampleapp page defined in a css file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The css file
    deactivate server

    Note left of browser: Browser sends the GET request to start executing the js file,<br/>which fetches the notes data from server and adds the new note to the data
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The JavaScript file
    deactivate server
    Note right of browser: Browser starts to execute the code defined in<br/>the js file to fetch the JSON data of saved notes

    Note left of browser: Browser sends the GET request to receive<br/>the notes data from server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: The Json data including the notes info
    deactivate server
    Note right of browser: Browser executes the callback function to render the notes<br/>received from the server

```
