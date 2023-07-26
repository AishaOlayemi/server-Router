const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Home page route
app.get('/', (req, res) => {
    try {
      res.writeHead(200, {
          "Content-Type" : "text/html"
      })
      
    fs.createReadStream(__dirname +'/index.html').pipe(res);
    
  } catch (error) {
    console.log(error)
  }
});

// About page route
app.get('/about.html', (req, res) => {
    try {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        })
        
      fs.createReadStream(__dirname +'/about.html').pipe(res);
      
    } catch (error) {
      console.log(error)
    }
});

// Contact page route
app.get('/contact.html', (req, res) => {
    try {
        res.writeHead(200, {
            "Content-Type" : "text/html"
        })
        
      fs.createReadStream(__dirname +'/contact.html').pipe(res);
      
    } catch (error) {
      console.log(error)
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
