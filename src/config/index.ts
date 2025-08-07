import dotenv from 'dotenv';

// এনভায়রনমেন্ট ভেরিয়েবল লোড
dotenv.config();

const config = {
  port: process.env.PORT || 3000, // পোর্ট না থাকলে 3000
  db_url: process.env.DB_URL || '' // DB URL না থাকলে খালি
};

export default config;