const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");
  if ("sort" in req.query) {
    const sortValue = req.query.sort.toString();
    // Split the sort value by space
    const sortParts = sortValue.split(" ");
    if (sortParts.length === 2) {
      const column = sortParts[0];
      const order = sortParts[1].toUpperCase();
      if (column === "first_name" || column === "last_name") {
        query = query.orderBy(column, order);
      }
    }
  }
  console.log("SQL", query.toSQL().sql);
  try {
    const data = await query;
    if (data.length > 0) {
      res.json({ data });
    } else {
      res.json({ message: "No data found" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});