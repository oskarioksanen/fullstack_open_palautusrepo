Here is a flow chart of creating a new note in https://studies.cs.helsinki.fi/exampleapp/spa:

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Server sends a POST request<br/>including the new note data as JSON
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

        Note right of server: Server processes the POST request and adds the new note<br/>to the notes data and responses a message: "note created"

    server-->>browser: JSON data: {message: "note created"}
    deactivate server

```
