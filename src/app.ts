import express, { Request, Response } from 'express';

// Express অ্যাপ্লিকেশন ইনস্ট্যান্স তৈরি
const app = express();

// '/' রুটে GET রিকোয়েস্ট হ্যান্ডেল করা
app.get('/', (req: Request, res: Response) => {
  // ক্লায়েন্টকে 'Hello World!' মেসেজ পাঠানো
  res.send('Hello World!');
});

// অন্য ফাইল থেকে অ্যাক্সেসের জন্য app এক্সপোর্ট
export default app;