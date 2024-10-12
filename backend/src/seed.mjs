import mongoose from 'mongoose';
import Users from './models/Users.mjs';
import dotenv from 'dotenv';

const users = [
  {
    name: 'John Doe',
    status: 'Working',
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg',
  },
  {
    name: 'Jack Chan',
    status: 'Working',
    img: 'https://www.electroind.com/wp-content/uploads/2019/02/person6-1.jpg',
  },
  {
    name: 'Sheli Belly',
    status: 'Business Trip',
    img: 'https://www.electroind.com/wp-content/uploads/2019/02/person2-1.jpg',
  },
  {
    name: 'Eitan Catan',
    status: 'Lunch Time',
    img: 'https://www.electroind.com/wp-content/uploads/2019/02/person4-1.jpg',
  },
  {
    name: 'Sarah Barah',
    status: 'Working',
    img: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
  },
  {
    name: 'Dana Banana',
    status: 'On Vacation',
    img: 'https://cdn.pixabay.com/photo/2019/12/16/20/54/girl-4700238_1280.jpg',
  },
  {
    name: 'Boby Boten',
    status: 'Working',
    img: 'https://www.electroind.com/wp-content/uploads/2019/02/person3-1.jpg',
  },
  {
    name: 'Mudi Hamudi',
    status: 'Lunch Time',
    img: 'https://www.electroind.com/wp-content/uploads/2019/02/person1-1.jpg',
  },
  {
    name: 'Aviv Abou',
    status: 'On Vacation',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-JXo1n9NY4y9ymyqKjIuM8elntWM01isg&s',
  },
];

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Users.deleteMany({});
    const insertedUsers = await Users.insertMany(users);
    console.log('Default users added:', insertedUsers);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
