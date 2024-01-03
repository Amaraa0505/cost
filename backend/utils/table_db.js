const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("CREATING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TABLE IF EXISTS users`;
  await sql`
    CREATE TABLE IF NOT EXISTS users(
            id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
            email VARCHAR(50) UNIQUE NOT NULL,
            name VARCHAR(50) NOT NULL,
            password TEXT NOT NULL,
            avatarImg TEXT,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
  `;
  console.log("created table");
};

const createTransaction = async () => {
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;

  console.log("CREATING transaction TABLE...");
  await sql`
  CREATE TABLE IF NOT EXISTS transaction (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID,
    name VARCHAR(50) NOT NULL,
    amount REAL NOT NULL,
    transaction_type transaction_type,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id UUID,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);
    `;
  console.log("CREATED TABLE.");
};

const customerTable = async () => {
  console.log("creating table");
  await sql`
    CREATE TABLE IF NOT EXISTS customer (
        avatarImg TEXT,
        username VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password TEXT NOT NULL
    );`;
  console.log("table created");
};

customerTable();
const insertData = () => {};
createTransaction();
createTables();
insertData();

// userId
// name
// amount
// transaction_type
// description
// currency_type
// category_id
