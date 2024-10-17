Here is a simple flow chart:

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
 ```
Esimerkki yllä

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of server: Server processes the POST request<br/>and returns a redirect response

    server-->>browser: Location: /exampleapp/notes
    deactivate server
    
    Note left of browser: Browser receives the redirect response<br/>and sends the GET request to retrieve<br/>the exampleapp page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note left of browser: Browser sends the GET request to retrieve<br/>style of the exampleapp page defined in a css file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The css file
    deactivate server

    Note left of browser: Browser sends the GET request to start<br/>executing the js file, which fetches the notes data
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The JavaScript file
    deactivate server
    Note right of browser: Browser starts to execute the code<br/>defined in the js file to fetch the JSON data of saved notes

```
