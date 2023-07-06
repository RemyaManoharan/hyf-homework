const express = require("express");
const app = express();
const documents = require("./documents.json");
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

//GET /search
app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    // Return all documents if 'q' parameter is not provided
    res.json(documents);
  } else {
    // Filter documents based on the 'q' parameter
    const results = documents.filter((document) => {
      const documentValues = Object.values(document);
      return documentValues.some((value) => {
        if (typeof value === "string" && value.includes(q)) {
          return true;
        }
        return false;
      });
    });

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(400).json({ msg: `No documents found for the query: ${q}` });
    }
  }
});

// GET /documents/:id

app.get("/documents/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) res.status(400).json({ msg: "Id is not a number" });
  const document = documents.filter((doc) => doc.id === parseInt(id));
  if (document) res.status(200).json(document);
  else res.status(404).json({ msg: "Document does not exist" });
});

// POST/search
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;

  if (q && fields) {
    return res.status(400).json({
      error:
        "Both 'q' query parameter and 'fields' in the request body cannot be provided together.",
    });
  }
  let results = documents;
  if (q) {
    results = results.filter((document) => {
      const documentValues = Object.values(document);
      return documentValues.some(
        (value) => typeof value === "string" && value.includes(q)
      );
    });
  } else if (fields) {
    results = results.filter((document) => {
      return Object.entries(fields).every(([field, value]) => {
        return document[field] === value;
      });
    });
  }
  res.json(results);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
