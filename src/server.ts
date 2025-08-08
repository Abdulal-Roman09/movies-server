import mongoose from 'mongoose'; // MongoDB সংযোগের জন্য Mongoose
import dotenv from 'dotenv'; // .env ফাইল থেকে পরিবেশ ভেরিয়েবল লোড
import app from './app'; // Express অ্যাপ ইম্পোর্ট
import config from './config'; // কনফিগারেশন সেটিংস

dotenv.config(); // .env ফাইল থেকে ভেরিয়েবল লোড

const port = config.port || 3000; // পোর্ট সেট, না থাকলে 3000

// ডাটাবেস সংযোগ এবং সার্ভার শুরু
async function main() {
  try {
    // MongoDB-এর সাথে সংযোগ
    await mongoose.connect(config.db_url);
    console.log('Database connected successfully!'); // সফল সংযোগ বার্তা
    // সার্ভার শুরু
    app.listen(port, () => {
      console.log(`Server running on port ${port}`); // সার্ভার চলছে
     
    });
  } catch (error) {
    // ডাটাবেস সংযোগে ত্রুটি
    console.error('Database connection error:', error);
    // process.exit(1); // ত্রুটির কারণে অ্যাপ বন্ধ
  }
}

main(); // ফাংশন কল