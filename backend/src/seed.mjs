import mongoose from 'mongoose';
import Events from './models/Events.mjs';
import dotenv from 'dotenv';

const events = [
  {
    name: 'Tech Conference 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    description:
      'Tech Conference 2025 is the premier annual event bringing together technology enthusiasts, developers, and industry leaders from around the world. Attendees will gain insights into the latest technological advancements, including artificial intelligence, blockchain, cybersecurity, and cloud computing. With keynote speeches from tech visionaries, interactive workshops, and panel discussions, this conference is a must-attend for anyone looking to stay ahead in the tech industry. Network with like-minded professionals, explore cutting-edge innovations, and take your career to the next level at this extraordinary gathering of technology experts.',
    shortDescription:
      'A premier tech event for networking and knowledge sharing.',
    date: new Date('2025-05-15'),
    availableTickets: {
      Normal: 500,
      VIP: 50,
      Accessible: 30,
    },
  },
  {
    name: 'Music Festival',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940',
    description:
      'Join us for a spectacular two-day Music Festival featuring live performances from top international and local artists. Experience the magic of music across multiple stages, covering genres such as rock, pop, electronic, and hip-hop. Enjoy delicious food from gourmet vendors, participate in fun interactive activities, and create unforgettable memories with friends and fellow music lovers. Whether you are a die-hard music fan or just looking for an electrifying weekend, this festival promises to be the highlight of the year!',
    shortDescription: 'Experience music like never before.',
    date: new Date('2025-07-20'),
    availableTickets: {
      Normal: 1000,
      'Golden Ring': 300,
      VIP: 150,
      Accessible: 50,
    },
  },
  {
    name: 'Startup Pitch Night',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
    description:
      'Startup Pitch Night is the ultimate platform for budding entrepreneurs to showcase their innovative business ideas to a panel of investors and industry experts. This exciting event offers startups the opportunity to secure funding, gain mentorship, and receive valuable feedback. Network with investors, business leaders, and fellow entrepreneurs while witnessing groundbreaking ideas take shape. Whether you are launching a new venture or looking to support the next big thing, Startup Pitch Night is the place to be!',
    shortDescription: 'Meet investors, pitch ideas, and grow your startup.',
    date: new Date('2025-04-10'),
    availableTickets: {
      Normal: 200,
      Accessible: 15,
    },
  },
  {
    name: 'Art Exhibition',
    image: 'https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg',
    description:
      'Immerse yourself in creativity at this extraordinary Art Exhibition, featuring a diverse collection of contemporary artworks from emerging and established artists. Explore thought-provoking paintings, sculptures, and digital art pieces, all carefully curated to inspire and challenge perspectives. Meet the artists behind the works, engage in insightful discussions, and even take home a piece of art that speaks to you. This event is perfect for art lovers, collectors, and anyone looking to experience the power of artistic expression.',
    shortDescription: 'Immerse yourself in modern art and creativity.',
    date: new Date('2025-06-05'),
    availableTickets: {
      Normal: 300,
      VIP: 40,
    },
  },
  {
    name: 'Marathon 2025',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
    description:
      'Lace up your running shoes and take on the challenge of Marathon 2025! This annual event promotes health, fitness, and community spirit, bringing together runners of all levels. Whether you are a seasoned marathoner or a first-time participant, this race offers breathtaking city views, enthusiastic supporters, and a rewarding experience. Train hard, push your limits, and cross the finish line with pride. Join thousands of runners in making this marathon an unforgettable experience!',
    shortDescription: 'Run for a cause, challenge yourself!',
    date: new Date('2025-09-18'),
    availableTickets: {
      Normal: 2000,
    },
  },
  {
    name: 'Food & Wine Tasting',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    description:
      'Indulge in an exquisite culinary experience at our Food & Wine Tasting event. Sample a carefully curated selection of fine wines paired with gourmet dishes prepared by top chefs. Expand your palate with expert-led tastings, learn about wine pairing techniques, and enjoy a sophisticated evening of dining and conversation. Whether you are a connoisseur or simply love great food and wine, this event promises an unforgettable gastronomic journey.',
    shortDescription: 'A culinary journey for food and wine lovers.',
    date: new Date('2025-08-12'),
    availableTickets: {
      Normal: 150,
      VIP: 20,
    },
  },
  {
    name: 'AI & Machine Learning Summit',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    description:
      'Stay at the forefront of technological innovation at the AI & Machine Learning Summit. This conference gathers leading researchers, engineers, and business leaders to explore the latest advancements in artificial intelligence and machine learning. Attend keynote presentations, panel discussions, and hands-on workshops covering deep learning, data science, and AI ethics. Whether you are an AI professional or just curious about the field, this summit offers invaluable insights into the future of intelligent technology.',
    shortDescription: 'Stay ahead in AI with top industry experts.',
    date: new Date('2025-11-07'),
    availableTickets: {
      Normal: 350,
      VIP: 45,
      Accessible: 25,
    },
  },
  {
    name: 'Coding Bootcamp',
    image:
      'https://plus.unsplash.com/premium_photo-1661414423895-5854eb6b573a?q=80&w=2832',
    description:
      'Take your coding skills to the next level with our immersive Coding Bootcamp. This intensive program is designed for beginners and experienced developers alike, covering web and app development, software engineering principles, and modern frameworks. Learn from industry experts, build real-world projects, and gain the skills necessary for a successful tech career. If you want to break into tech or enhance your programming abilities, this bootcamp is the perfect launchpad!',
    shortDescription: 'Learn to code in an intensive bootcamp.',
    date: new Date('2025-03-22'),
    availableTickets: {
      Normal: 400,
      Accessible: 30,
    },
  },
  {
    name: 'Business Leadership Workshop',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    description:
      'Develop essential leadership and management skills at our Business Leadership Workshop. This event is tailored for professionals seeking to enhance their ability to lead teams, drive organizational success, and inspire innovation. Participate in interactive sessions, case studies, and networking opportunities with business leaders. Gain valuable insights into effective communication, decision-making, and strategic thinking. Whether you are a manager, entrepreneur, or aspiring leader, this workshop provides the tools to excel in the business world.',
    shortDescription: 'Level up your leadership skills.',
    date: new Date('2025-10-30'),
    availableTickets: {
      Normal: 250,
      Accessible: 15,
    },
  },
  {
    name: 'Digital Marketing Summit 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    description:
      "The Digital Marketing Summit 2025 is an exclusive event for marketers and entrepreneurs looking to stay ahead of the curve. Experts will discuss the latest trends in SEO, social media, content marketing, and paid advertising. Whether you're just starting your business or refining your marketing strategy, this summit provides invaluable insights into how digital tools and strategies can elevate your brand. Network with industry leaders, learn from case studies, and explore best practices shaping the future of digital marketing.",
    shortDescription:
      'A must-attend event for digital marketing professionals.',
    date: '2025-06-15',
    availableTickets: { Normal: 500, VIP: 75 },
  },
  {
    name: 'VR Gaming Tournament',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
    description:
      "Step into the world of virtual reality at the VR Gaming Tournament, where gamers from around the globe compete in cutting-edge VR games. This event features both single-player and multiplayer tournaments, with exciting prizes for the winners. Whether you're a professional VR gamer or new to immersive gaming, the tournament offers an exhilarating experience. Challenge yourself and other skilled players in a high-tech, action-packed environment.",
    shortDescription: 'Experience immersive gaming at its finest.',
    date: '2025-09-10',
    availableTickets: { Normal: 200, VIP: 50 },
  },
  {
    name: 'Innovative Design Conference',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    description:
      "Join top designers, creative thinkers, and innovators at the Innovative Design Conference, where design meets technology. This conference will explore the latest trends in product design, user experience, and creative strategies for branding. Attendees will hear from leading designers and engage in hands-on workshops, learning new techniques to elevate their work. If you're passionate about the intersection of design and technology, this event offers the perfect opportunity to expand your skillset and network with industry leaders.",
    shortDescription: 'Explore the future of design and creativity.',
    date: '2025-07-05',
    availableTickets: { Normal: 250, VIP: 50 },
  },
  {
    name: 'Photography Masterclass',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    description:
      "Elevate your photography skills with this Photography Masterclass. Whether you're a beginner or an experienced photographer, this event offers in-depth workshops, live demonstrations, and one-on-one mentoring with professionals. Learn advanced techniques, editing tips, and how to capture stunning photos in various lighting conditions. By the end of the event, you'll have a portfolio of images and the knowledge to continue growing your skills in the world of photography.",
    shortDescription: 'A hands-on workshop to elevate your photography.',
    date: '2025-10-12',
    availableTickets: { Normal: 150, VIP: 25 },
  },
  {
    name: 'Global Travel Expo',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
    description:
      "Discover the latest trends in travel and tourism at the Global Travel Expo. This event features representatives from top airlines, hotels, and travel agencies, offering exclusive deals and insider tips for your next adventure. Attend presentations on sustainable travel, luxury getaways, and budget-friendly destinations. Whether you're a travel enthusiast or a professional, this expo is your gateway to planning unforgettable trips, discovering new destinations, and learning about the future of travel.",
    shortDescription: 'Your ultimate guide to global travel experiences.',
    date: '2025-09-25',
    availableTickets: { Normal: 600, VIP: 80 },
  },
  {
    name: 'Blockchain & Cryptocurrency Conference',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGZu4VLYhIi33go9hNr023qlgJmjjzXTt2Q&s',
    description:
      "The Blockchain & Cryptocurrency Conference 2025 brings together thought leaders, developers, and entrepreneurs in the blockchain and crypto industries. Topics include the latest advancements in blockchain technology, the future of decentralized finance (DeFi), and how blockchain is transforming industries from healthcare to real estate. Whether you're a crypto enthusiast, investor, or developer, this conference offers valuable insights into the future of digital currencies and blockchain applications.",
    shortDescription: 'A deep dive into blockchain and cryptocurrency trends.',
    date: '2025-11-05',
    availableTickets: { Normal: 400, VIP: 50 },
  },
  {
    name: 'Entrepreneurship Bootcamp',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_J_vVtxlGbSPwLfGY1LSP1WoQc14FljNhw&s',
    description:
      "The Entrepreneurship Bootcamp is an intensive program designed for aspiring entrepreneurs aiming to turn their business ideas into reality. Over the course of the event, participants will learn about business planning, fundraising, marketing, and scaling their companies. Experts will provide guidance on navigating the challenges of entrepreneurship and offer actionable strategies for success. Whether you're in the early stages of your startup or looking to refine your business approach, this bootcamp is the perfect opportunity to accelerate your entrepreneurial journey.",
    shortDescription: 'Gain the skills and knowledge to launch your startup.',
    date: '2025-08-28',
    availableTickets: { Normal: 150, VIP: 30 },
  },
  {
    name: 'Health & Wellness Expo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6P17Ni6q0c-N7UHtnOXam5BJgK3SKpfRaDw&s',
    description:
      "The Health & Wellness Expo is your gateway to a healthier lifestyle. This event features workshops, live demonstrations, and expert talks on fitness, nutrition, mental health, and holistic wellness. Discover the latest health products, participate in yoga and meditation sessions, and learn practical tips to improve your overall well-being. Whether you're looking to make small changes or completely transform your lifestyle, this expo has something for everyone.",
    shortDescription: 'Discover the best practices for a healthier life.',
    date: '2025-12-01',
    availableTickets: { Normal: 500, VIP: 75 },
  },
  {
    name: 'Sustainable Living Expo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vWVXX3AhjDFlf8RPREXNbnJ9YQOz4wNdyw&s',
    description:
      'The Sustainable Living Expo brings together thought leaders, innovators, and environmental activists shaping the future of sustainability. This event features interactive workshops, panel discussions, and product showcases related to eco-friendly living, renewable energy, waste reduction, and ethical consumerism. Learn how to positively impact the planet while discovering sustainable products and services that can transform your lifestyle. Join us to be part of the movement toward a greener, more sustainable world.',
    shortDescription: 'Explore sustainable solutions for a better future.',
    date: '2025-08-03',
    availableTickets: { Normal: 400, VIP: 50 },
  },
  {
    name: 'AI & Machine Learning Summit',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    description:
      'An industry-leading conference where AI experts, data scientists, and tech enthusiasts discuss the latest trends in artificial intelligence and machine learning. Learn about advancements in deep learning, neural networks, and ethical AI.',
    shortDescription: 'Explore the future of AI and machine learning.',
    date: '2025-06-15',
    availableTickets: { Normal: 350, VIP: 75 },
  },
  {
    name: 'Tech Innovators Conference',
    image:
      'https://cdn.asp.events/CLIENT_Media_Bu_282F8449_9953_6F53_6E524AED3459B222/sites/BSE2021/media/52528243427_20b27acc45_k.jpg',
    description:
      'This event brings together the brightest minds in technology and innovation. Keynote speakers from leading tech firms will share insights on the latest breakthroughs in AI, blockchain, and cloud computing.',
    shortDescription: 'A gathering of cutting-edge innovators in technology.',
    date: '2025-07-10',
    availableTickets: { Normal: 300, VIP: 50 },
  },
  {
    name: 'Sustainability in Tech Symposium',
    image:
      'https://www.morningagclips.com/wp-content/uploads/2022/04/52020579547_568fd5b88b_k-e1651170121977-720x400.jpg',
    description:
      'A deep dive into how technology can drive sustainability. Join environmentalists and tech experts as they discuss innovations that promote green technology, eco-friendly practices, and the role of tech in combating climate change.',
    shortDescription: 'Discover how technology is powering sustainability.',
    date: '2025-08-01',
    availableTickets: { Normal: 200, VIP: 40 },
  },
  {
    name: 'Global Digital Marketing Forum',
    image:
      'https://cloudinary.hbs.edu/hbsit/image/upload/s--jcW2HPqC--/f_auto,c_fill,h_375,w_750,/v20200101/EA99CC738B99D0AA67987EC2976D550F.jpg',
    description:
      'Learn the latest digital marketing strategies from industry leaders. Topics include SEO, social media marketing, influencer collaborations, and the future of digital advertising in a post-pandemic world.',
    shortDescription: 'Stay ahead with the latest in digital marketing.',
    date: '2025-05-22',
    availableTickets: { Normal: 500, VIP: 100 },
  },
  {
    name: 'Cybersecurity Leadership Summit',
    image:
      'https://builtin.com/sites/www.builtin.com/files/2024-10/cybersecurity.png',
    description:
      'This summit gathers cybersecurity experts and IT leaders to discuss emerging threats and defense strategies. Learn about cutting-edge technologies and best practices for securing digital infrastructures.',
    shortDescription: 'Cybersecurity strategies for a safer digital world.',
    date: '2025-09-15',
    availableTickets: { Normal: 450, VIP: 70 },
  },
  {
    name: 'Blockchain for Beginners Workshop',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelMWuDSmqvB42LYuchS53udyoL-gr0Ow_KQ&s',
    description:
      "An interactive workshop for anyone curious about blockchain technology. Learn how blockchain works, its use cases, and how it's disrupting industries like finance, supply chain, and healthcare.",
    shortDescription: 'Learn the basics of blockchain technology.',
    date: '2025-10-10',
    availableTickets: { Normal: 100, VIP: 20 },
  },
  {
    name: 'Leadership and Innovation Forum',
    image: 'https://hightechcampus.com/storage/1670/20210510_163037.jpg',
    description:
      'A conference for professionals looking to enhance their leadership skills. Focused on innovative leadership in business, this event offers strategies to foster creativity, team dynamics, and forward-thinking leadership.',
    shortDescription: 'Empowering leaders to innovate and inspire.',
    date: '2025-06-30',
    availableTickets: { Normal: 200, VIP: 50 },
  },
  {
    name: 'Women in Tech Summit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kG1yD-WZfyZ26zFTFnz4uwKAygEeJDQm8g&s',
    description:
      'A celebration of women in the tech industry. This summit provides networking opportunities, mentorship, and panels from influential women making an impact in tech and leadership roles.',
    shortDescription: 'Empowering women in the tech industry.',
    date: '2025-11-10',
    availableTickets: { Normal: 250, VIP: 40 },
  },
  {
    name: 'Future of Work Conference',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gEnFKUH3XmC4oics-jIQnAYV2hHFyz-NXA&s',
    description:
      'Explore how work will evolve in the coming years. This event covers automation, remote working, digital nomadism, and other emerging trends that will shape the future of work.',
    shortDescription: 'A look at how the world of work is evolving.',
    date: '2025-07-05',
    availableTickets: { Normal: 300, VIP: 60 },
  },
  {
    name: 'Digital Health Conference',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9Skw0XyBRS8gNtgns8P-EWjx0Huj0xN5kg&s',
    description:
      'A deep dive into digital health technologies, including telemedicine, health apps, and wearable tech. Learn about the role of digital health in improving healthcare delivery and patient outcomes.',
    shortDescription: 'Innovations in digital healthcare technologies.',
    date: '2025-08-21',
    availableTickets: { Normal: 400, VIP: 80 },
  },
  {
    name: 'Design Thinking Workshop',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87yXjgV0oPK5QUhVSK7X3rexuoAxLvwtWFA&s',
    description:
      'An interactive session focused on the design thinking methodology. Participants will learn how to apply creative problem-solving techniques to business challenges and product development.',
    shortDescription: 'Master the design thinking process for innovation.',
    date: '2025-09-01',
    availableTickets: { Normal: 120, VIP: 25 },
  },
  {
    name: 'Smart Cities Expo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGXA67WJbv5aVqjljdCP1EulC5dRfZVm5Rw&s',
    description:
      'Explore how technology is shaping the cities of the future. This event will cover smart infrastructure, IoT, and data-driven solutions to make cities more sustainable and livable.',
    shortDescription: 'Transforming cities with smart technology.',
    date: '2025-11-20',
    availableTickets: { Normal: 350, VIP: 60 },
  },
  {
    name: 'Quantum Computing Symposium',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCjtEcD0B7e9RySupsyQnK_UKp5VYPnESw&s',
    description:
      'A deep dive into the world of quantum computing. Learn about quantum algorithms, quantum hardware, and the future potential of quantum computing in fields like cryptography and machine learning.',
    shortDescription: 'The next frontier in computing: Quantum tech.',
    date: '2025-12-03',
    availableTickets: { Normal: 220, VIP: 50 },
  },
  {
    name: 'Tech for Good Summit',
    image:
      'https://images.squarespace-cdn.com/content/v1/655dd261946906388515e2fb/2fa62421-c8a2-452b-9e0e-306e31f9dae5/GABRIEL+REYNOLDS-162.jpg',
    description:
      'A conference focused on using technology to address social challenges. Learn how tech can be leveraged for social good, including in education, healthcare, and environmental conservation.',
    shortDescription: 'Using technology to create a better world.',
    date: '2025-10-15',
    availableTickets: { Normal: 300, VIP: 70 },
  },
  {
    name: 'City Marathon 2025',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aICNk3SQUTTQSHkfjbHTlvLugSJLN4rTNQ&s',
    description:
      'Join thousands of runners in the annual City Marathon 2025. Experience a scenic route through downtown streets and parks while challenging yourself physically. Whether you are a seasoned runner or a beginner, this event offers multiple categories and prizes for top finishers. Enjoy pre-race festivities, hydration stations, and post-race celebrations with live music and food vendors.',
    shortDescription: 'Run through the city and achieve your best time.',
    date: new Date('2025-04-20'),
    availableTickets: { Normal: 2000, VIP: 100 },
  },
  {
    name: 'Outdoor Music Festival',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    description:
      'Experience an unforgettable weekend at the Outdoor Music Festival featuring a diverse lineup of bands and solo artists from various genres. Set in a beautiful natural setting, the festival offers multiple stages, food trucks, art installations, and camping opportunities. Enjoy live performances, interactive workshops, and community activities throughout the weekend.',
    shortDescription: 'Enjoy live music in a beautiful outdoor setting.',
    date: new Date('2025-07-15'),
    availableTickets: { Normal: 1500, VIP: 200, Accessible: 50 },
  },
  {
    name: 'International Food & Wine Fair',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    description:
      'Savor flavors from around the globe at the International Food & Wine Fair. Sample gourmet dishes, artisanal wines, and unique culinary creations from top chefs and producers. In addition to tastings, attend cooking demonstrations, workshops, and pairing sessions. This event is perfect for foodies, culinary professionals, and anyone looking to explore international cuisine in a festive atmosphere.',
    shortDescription: 'Taste the world at a gourmet food and wine fair.',
    date: new Date('2025-08-10'),
    availableTickets: { Normal: 800, VIP: 120 },
  },
  {
    name: 'Art & Sculpture Exhibition',
    image:
      'https://images.stockcake.com/public/4/6/b/46be7667-8043-476f-87d7-c1293197bbe0_large/modern-sculpture-exhibition-stockcake.jpg',
    description:
      'Discover contemporary art at the Art & Sculpture Exhibition showcasing works from local and international artists. Explore a variety of mediums, including paintings, sculptures, and mixed media installations. Engage in interactive sessions, meet the artists, and participate in guided tours to gain insights into the creative process behind each piece.',
    shortDescription: 'Explore stunning sculptures and contemporary art.',
    date: new Date('2025-05-05'),
    availableTickets: { Normal: 300, VIP: 50 },
  },
  {
    name: 'Cultural Heritage Festival',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_zTfn9bEjiGuqBcyt-img9LN2XcGFuIKlg&s',
    description:
      'Celebrate diversity and tradition at the Cultural Heritage Festival. This event features music, dance, crafts, and culinary delights from different cultures. Enjoy live performances, interactive workshops, and heritage exhibits that highlight the unique traditions and stories of various communities. A perfect event for families and cultural enthusiasts.',
    shortDescription: 'Celebrate diverse cultures and heritage.',
    date: new Date('2025-10-12'),
    availableTickets: { Normal: 1000, VIP: 150, Accessible: 50 },
  },
  {
    name: 'Local Farmers Market & Fair',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNWfEJBDmJt4L6HwF5ihOls09ATTAaE66Kg&s',
    description:
      'Visit the Local Farmers Market & Fair to enjoy fresh produce, handmade crafts, and artisanal goods. Engage with local farmers, participate in workshops, and enjoy live music and family-friendly activities. This event supports the local community and offers a delightful day out in a relaxed, open-air setting.',
    shortDescription: 'Fresh produce, crafts, and local community fun.',
    date: new Date('2025-06-20'),
    availableTickets: { Normal: 500 },
  },
  {
    name: 'Vintage Car Show',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753',
    description:
      'Rev up your engines and experience automotive history at the Vintage Car Show. Featuring a collection of classic cars from various eras, this event offers live demonstrations, car-related memorabilia, and interactive exhibits. Meet fellow car enthusiasts, listen to expert commentary, and take part in fun activities throughout the day.',
    shortDescription: 'See classic cars and celebrate automotive history.',
    date: new Date('2025-09-05'),
    availableTickets: { Normal: 600, VIP: 80 },
  },
  {
    name: 'Outdoor Adventure & Sports Expo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7FUT8NVe8a8dH9ulkwqn3JR_w_r38ym-GA&s',
    description:
      'Discover the latest gear, techniques, and destinations at the Outdoor Adventure & Sports Expo. From hiking and mountain biking to rock climbing and kayaking, this expo covers a wide range of outdoor activities. Attend workshops, try demo sessions, and connect with experts who will help you plan your next adventure.',
    shortDescription: 'Gear up for your next outdoor adventure.',
    date: new Date('2025-07-22'),
    availableTickets: { Normal: 700, VIP: 90, Accessible: 30 },
  },
  {
    name: 'Jazz & Blues Night',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9T-KzReQKuO7EHjiYoPyHRxNipzJdw--N8A&s',
    description:
      'Experience a soulful night of live jazz and blues music performed by renowned local and international artists. Set in an intimate venue, the event offers a cozy atmosphere where music lovers can relax, enjoy delicious refreshments, and immerse themselves in smooth rhythms and heartfelt melodies.',
    shortDescription: 'Enjoy a soulful night of jazz and blues.',
    date: new Date('2025-11-20'),
    availableTickets: { Normal: 400, VIP: 60 },
  },
  {
    name: 'Stand-Up Comedy Festival',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUZ-uH7jcloWmF6eYixZRKVEqSTOE_phKyg&s',
    description:
      'Laugh out loud at the Stand-Up Comedy Festival featuring top comedians and rising stars. Enjoy a lineup of hilarious performances, improv sessions, and interactive segments designed to keep you entertained all night long. This event is perfect for a fun night out with friends or a casual evening of laughter.',
    shortDescription: 'A night full of laughter and comedy.',
    date: new Date('2025-10-05'),
    availableTickets: { Normal: 350, VIP: 50 },
  },
  {
    name: 'Local Theater Showcase',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkZthPRDzhc4s7VFXrqSGg9VvoNjtWAaECA&s',
    description:
      'Enjoy a night at the theater with performances from local talent in a variety of dramatic and comedic plays. The Local Theater Showcase features multiple productions in one evening, offering audiences a taste of high-quality acting and storytelling. Meet the cast, participate in Q&A sessions, and support the local arts community.',
    shortDescription: 'A showcase of local theatrical talent.',
    date: new Date('2025-09-15'),
    availableTickets: { Normal: 300, VIP: 40 },
  },
  {
    name: 'Classical Music Concert',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    description:
      'Immerse yourself in the beauty of classical music at this elegant concert featuring an orchestra performing timeless compositions. Enjoy an evening of symphonies, chamber music, and solo performances in a stunning concert hall setting. This event is perfect for music aficionados and anyone looking to experience the power of live classical performance.',
    shortDescription: 'An elegant evening of live classical music.',
    date: new Date('2025-08-30'),
    availableTickets: { Normal: 500, VIP: 100 },
  },
  {
    name: 'Culinary Workshop: Global Cuisines',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFE8g8b1Cm8HOjxOYB28E3OlRxdF2exuHew&s',
    description:
      'Join our Culinary Workshop to explore global cuisines and cooking techniques from professional chefs. This interactive session covers everything from spice blending to modern plating techniques. Participants will learn to create authentic dishes from various regions, tasting unique flavors and expanding their culinary repertoire.',
    shortDescription:
      'Discover global flavors in a hands-on culinary workshop.',
    date: new Date('2025-07-18'),
    availableTickets: { Normal: 120, VIP: 20 },
  },
  {
    name: 'Book Fair & Literary Festival',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
    description:
      'Celebrate the written word at the Book Fair & Literary Festival. Featuring author talks, book signings, panel discussions, and a wide range of publishers and indie bookstores, this event is a paradise for book lovers. Discover new titles, engage with your favorite authors, and participate in interactive literary workshops.',
    shortDescription: 'A paradise for book lovers and literary enthusiasts.',
    date: new Date('2025-10-25'),
    availableTickets: { Normal: 700, VIP: 90 },
  },
  {
    name: 'Outdoor Film Festival',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlux5Ok-jjY74mD2bq4-Gc7JwK6UuxoCebaw&s',
    description:
      'Enjoy a series of outdoor film screenings under the stars at our Outdoor Film Festival. Watch classic movies, independent films, and documentaries in a relaxed setting. With food trucks, live music, and a community vibe, this festival is a perfect way to enjoy cinema in the open air.',
    shortDescription:
      'Experience cinema under the stars in an outdoor setting.',
    date: new Date('2025-09-30'),
    availableTickets: { Normal: 600, VIP: 80 },
  },
  {
    name: 'Street Art & Graffiti Festival',
    image:
      'https://imgproxy.urbaneez.art/insecure/rs:fit:1500:0/plain/https://urbaneez-dev.s3.eu-central-1.amazonaws.com/Wynwood%20Walls%20Miami%20Entrance.jpg',
    description:
      'Immerse yourself in urban culture at the Street Art & Graffiti Festival. Watch live mural painting, graffiti battles, and interactive art installations in a vibrant, outdoor setting. Learn about the history and techniques of street art from local artists, and even try your hand at spray painting in dedicated workshops.',
    shortDescription: 'A vibrant celebration of street art and urban culture.',
    date: new Date('2025-08-12'),
    availableTickets: { Normal: 500, VIP: 70, Accessible: 20 },
  },
  {
    name: 'Wellness & Yoga Retreat',
    image:
      'https://www.theluxurysignature.com/wp-content/uploads/2014/12/Yoga-Retreat-Bali-1.jpg',
    description:
      'Recharge and rejuvenate at our Wellness & Yoga Retreat. Set in a tranquil natural environment, this retreat offers daily yoga sessions, meditation workshops, and healthy, organic meals. Learn relaxation techniques, explore mindfulness practices, and enjoy guided nature walks to restore your balance and well-being.',
    shortDescription: 'A peaceful retreat to nurture your mind and body.',
    date: new Date('2025-11-08'),
    availableTickets: { Normal: 300, VIP: 50 },
  },
  {
    name: 'Moonlight Jazz Festival',
    image:
      'https://media.istockphoto.com/id/452232411/vector/jazz-at-night.jpg?s=612x612&w=0&k=20&c=rzoggHSCCSFD-bKKCMiYTGGweZnLiMzMB6MbRajjVSc=',
    description:
      'Enjoy an enchanting evening of live jazz performances under the moonlight. Featuring world-renowned jazz musicians, this festival offers an intimate setting with candlelit tables, gourmet food, and a magical ambiance.',
    shortDescription: 'A mesmerizing night of live jazz under the stars.',
    date: new Date('2025-06-14'),
    availableTickets: { Normal: 800, VIP: 120, 'Golden Ring': 50 },
  },
  {
    name: 'Sunrise Yoga & Meditation Retreat',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh03YTRswB2B9X20E5ltj-cYL4cvTCcuCLag&s',
    description:
      'Rejuvenate your body and mind with a three-day wellness retreat featuring guided yoga sessions, meditation workshops, and organic detox meals in a serene coastal setting.',
    shortDescription: 'A peaceful yoga and meditation escape by the beach.',
    date: new Date('2025-07-10'),
    availableTickets: { Normal: 300, Accessible: 50 },
  },
  {
    name: 'Rock Legends Revival',
    image: 'https://i.ytimg.com/vi/KhSCqF_VXWE/hqdefault.jpg',
    description:
      'Experience the revival of classic rock as legendary bands reunite for an unforgettable night of nostalgia, guitar solos, and raw energy.',
    shortDescription: 'A legendary rock concert bringing back the classics.',
    date: new Date('2025-09-05'),
    availableTickets: { Normal: 1000, VIP: 150 },
  },
  {
    name: 'Deep House Sunset Party',
    image:
      'https://m.media-amazon.com/images/I/41eT-NXdUFL._UXNaN_FMjpg_QL85_.jpg',
    description:
      'Dance to deep house beats as the sun sets over a stunning beachside location. Live DJs, fire dancers, and a vibrant crowd will make this an unforgettable night.',
    shortDescription: 'A sunset party with deep house music and beach vibes.',
    date: new Date('2025-08-22'),
    availableTickets: { Normal: 600, 'Golden Ring': 100 },
  },
  {
    name: 'Rejuvenate & Detox Weekend',
    image:
      'https://d1qzuhxpc9cpmj.cloudfront.net/images/blog/2011-2017/The-Farm-Juice-Fasting.jpg',
    description:
      'Escape the stress of daily life with a weekend of yoga, holistic healing, and nutritious meals designed to detoxify your body and mind.',
    shortDescription: 'A weekend retreat for detox and wellness.',
    date: new Date('2025-10-02'),
    availableTickets: { Normal: 250, VIP: 30, Accessible: 20 },
  },
  {
    name: 'Indie Folk Music Night',
    image:
      'https://i.ytimg.com/vi/vCFO63WzPG0/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgXCgyMA8=&rs=AOn4CLA0cURhTqGCnWt9WrHLpT531LRxEg',
    description:
      'A cozy evening featuring the best indie folk artists performing acoustic sets in an intimate outdoor setting.',
    shortDescription: 'A soulful evening of indie folk music.',
    date: new Date('2025-07-30'),
    availableTickets: { Normal: 500, VIP: 80 },
  },
  {
    name: 'Soul & RnB Night',
    image:
      'https://i.scdn.co/image/ab67616d0000b2734c7f4c0777afe1519604577f',
    description:
      'Experience an unforgettable night filled with smooth RnB tunes and soulful performances from top artists in the genre.',
    shortDescription: 'A night of soulful RnB music and vibes.',
    date: new Date('2025-09-18'),
    availableTickets: { Normal: 700, 'Golden Ring': 90 },
  },
  {
    name: 'Tropical Chillout Beats Festival',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dyt-Urv2y0uhJRm3pqaLOdOkKjIYOO5UBA&s',
    description:
      'Relax and unwind at a tropical paradise while enjoying chillout beats, lounge music, and exotic cocktails.',
    shortDescription: 'A tropical escape with laid-back music and vibes.',
    date: new Date('2025-08-05'),
    availableTickets: { Normal: 900, VIP: 130, 'Golden Ring': 60 },
  },
  {
    name: 'Eco-Healing & Sound Therapy Retreat',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4B05Q_5DSrPhe3wledN0eJUA16S6y3KtWA&s',
    description:
      'Join a transformational journey of eco-healing, sound therapy, and mindfulness practices in the heart of nature.',
    shortDescription: 'A holistic retreat for healing and relaxation.',
    date: new Date('2025-07-20'),
    availableTickets: { Normal: 200, Accessible: 30 },
  },
  {
    name: 'Hip-Hop & Trap Night',
    image:
      'https://i.ytimg.com/vi/UVWxoUhtul8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHOBYAC0AWKAgwIABABGEQgEyh_MA8=&rs=AOn4CLALejkgB97o46VtfmZ5LczRxB8rkQ',
    description:
      'Turn up to the hottest beats in hip-hop and trap with a lineup of the biggest names in the industry.',
    shortDescription: 'A high-energy night of hip-hop and trap music.',
    date: new Date('2025-09-12'),
    availableTickets: { Normal: 1000, VIP: 150 },
  },
  {
    name: 'Yoga & Surf Escape',
    image:
      'https://i.ytimg.com/vi/dardq-i0XpU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmQX8lCx7n2YuPay4037B9cs-JFw',
    description:
      'Find balance between yoga and surfing in this unique retreat that combines meditation, fitness, and ocean adventures.',
    shortDescription: 'A yoga and surf retreat in paradise.',
    date: new Date('2025-06-25'),
    availableTickets: { Normal: 400, Accessible: 50, VIP: 30 },
  },
  {
    name: 'Symphony Under The Stars',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZBAgJmgPOnTMxjPak4nMdq8dlgSmGZ6V2A&s',
    description:
      'Experience a breathtaking symphony performance under the open night sky with a world-class orchestra.',
    shortDescription: 'A magical symphony performance under the stars.',
    date: new Date('2025-08-10'),
    availableTickets: { Normal: 700, VIP: 100, 'Golden Ring': 40 },
  },
  {
    name: 'Afrobeat & Dancehall Experience',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrXlFLQXHjexXX6IMOBlEhbDEuTFonJIqDw&s',
    description:
      'Get ready to dance the night away with the best Afrobeat and Dancehall artists in an electrifying atmosphere.',
    shortDescription: 'An energetic night of Afrobeat and Dancehall music.',
    date: new Date('2025-07-15'),
    availableTickets: { Normal: 900, VIP: 140, 'Golden Ring': 80 },
  },
  {
    name: '90s Throwback Pop Concert',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6gq_VvEprdBfyymYwE_74jvfE1cdsmM5aA&s',
    description:
      'Relive the 90s with an epic throwback concert featuring iconic pop artists and nostalgic hits.',
    shortDescription: 'A 90s pop music celebration with classic hits.',
    date: new Date('2025-09-28'),
    availableTickets: { Normal: 1000, VIP: 180, 'Golden Ring': 100 },
  },
];

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Events.deleteMany({});
    const insertedEvents = await Events.insertMany(events);
    console.log('Default events added:', insertedEvents);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
