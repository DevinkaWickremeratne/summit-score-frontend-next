const conferences = [
  {
    id: 1,
    name: "TechTrend Summit",
    description: "Join us for the latest trends in technology innovation and digital transformation.",
    startDate: "2024-05-15",
    endDate: "2024-05-17",
    location: "San Francisco, CA",
    speakers: ["John Doe", "Jane Smith"],
    website: "https://techtrendsummit.com",
    rating: 4.5, // Example rating
    reviews: [
      { id: 1, user: "Alice", rating: 4, comment: "Great event with insightful talks!" },
      { id: 2, user: "Bob", rating: 5, comment: "Best conference I've ever attended!" }
    ]
  },
  {
    id: 2,
    name: "FutureForward Conference",
    description: "Explore groundbreaking ideas and emerging technologies shaping the future.",
    startDate: "2024-06-10",
    endDate: "2024-06-12",
    location: "New York, NY",
    speakers: ["Emily Johnson", "Mark Davis"],
    website: "https://futureforwardconference.com",
    rating: 4.2, // Example rating
    reviews: [
      { id: 3, user: "Charlie", rating: 4, comment: "Interesting topics discussed!" },
      { id: 4, user: "David", rating: 3.5, comment: "Could have had more interactive sessions." }
    ]
  },
  {
    id: 3,
    name: "GlobalLeaders Forum",
    description: "Connect with industry leaders from around the world to discuss pressing global challenges.",
    startDate: "2024-07-20",
    endDate: "2024-07-22",
    location: "London, UK",
    speakers: ["Michael Johnson", "Sarah Lee"],
    website: "https://globalleadersforum.com",
    rating: 4.8, // Example rating
    reviews: [
      { id: 5, user: "Emma", rating: 5, comment: "Incredible experience, highly recommended!" },
      { id: 6, user: "Frank", rating: 4.5, comment: "A must-attend event for industry professionals." }
    ]
  },
  {
    id: 4,
    name: "DataDriven Summit",
    description: "Unlock the power of data analytics and artificial intelligence to drive business success.",
    startDate: "2024-08-15",
    endDate: "2024-08-17",
    location: "Tokyo, Japan",
    speakers: ["Yuki Yamamoto", "Takeshi Tanaka"],
    website: "https://datadrivensummit.com",
    rating: 4.3, // Example rating
    reviews: [
      { id: 7, user: "Grace", rating: 4, comment: "Informative sessions, learned a lot!" },
      { id: 8, user: "Henry", rating: 4.2, comment: "Good networking opportunities." }
    ]
  },
  {
    id: 5,
    name: "InnovateX Expo",
    description: "Discover the latest innovations and disruptive technologies revolutionizing industries.",
    startDate: "2024-09-10",
    endDate: "2024-09-12",
    location: "Berlin, Germany",
    speakers: ["Lena Müller", "Max Fischer"],
    website: "https://innovatexexpo.com",
    rating: 4.6, // Example rating
    reviews: [
      { id: 9, user: "Isabella", rating: 4.5, comment: "Impressive showcase of cutting-edge technologies!" },
      { id: 10, user: "Jack", rating: 5, comment: "Excellent event, exceeded expectations!" }
    ]
  },
  {
    id: 6,
    name: "HealthTech Conference",
    description: "Explore the intersection of healthcare and technology to improve patient outcomes.",
    startDate: "2024-10-20",
    endDate: "2024-10-22",
    location: "Paris, France",
    speakers: ["Sophie Martin", "Lucas Dupont"],
    website: "https://healthtechconference.com",
    rating: 4.4, // Example rating
    reviews: [
      { id: 11, user: "Olivia", rating: 4.2, comment: "Insightful discussions on health technology trends." },
      { id: 12, user: "Peter", rating: 4.5, comment: "Well-organized event with valuable insights." }
    ]
  },
  {
    id: 7,
    name: "GreenTech Summit",
    description: "Learn about sustainable solutions and environmentally-friendly technologies shaping our future.",
    startDate: "2024-11-15",
    endDate: "2024-11-17",
    location: "Sydney, Australia",
    speakers: ["Emma Wilson", "James Roberts"],
    website: "https://greentechsummit.com",
    rating: 4.7, // Example rating
    reviews: [
      { id: 13, user: "Quinn", rating: 4.8, comment: "Inspiring talks on sustainability and innovation!" },
      { id: 14, user: "Rachel", rating: 4.5, comment: "Great event for eco-conscious individuals." }
    ]
  },
  {
    id: 8,
    name: "FinanceForum",
    description: "Gain insights into the latest trends and developments in finance and investment strategies.",
    startDate: "2025-01-10",
    endDate: "2025-01-12",
    location: "Singapore",
    speakers: ["Michael Johnson", "Sarah Lee"],
    website: "https://financeforum.com",
    rating: 4.1, // Example rating
    reviews: [
      { id: 13, user: "Rachel", rating: 4.3, comment: "Informative sessions on finance industry updates." },
      { id: 14, user: "Sam", rating: 4.5, comment: "Excellent networking opportunities with industry experts." }
    ]
  },
  {
    id: 9,
    name: "AI Summit",
    description: "Explore the cutting-edge advancements and applications of artificial intelligence.",
    startDate: "2025-02-20",
    endDate: "2025-02-22",
    location: "Beijing, China",
    speakers: ["Wei Li", "Chen Zhang"],
    website: "https://aisummit.com",
    rating: 4.7, // Example rating
    reviews: [
      { id: 15, user: "Tian", rating: 4.8, comment: "Incredible insights into AI technologies!" },
      { id: 16, user: "Wang", rating: 4.6, comment: "Must-attend event for AI enthusiasts." }
    ]
  },
  {
    id: 10,
    name: "SpaceTech Conference",
    description: "Discover the future of space exploration and satellite technology.",
    startDate: "2025-03-15",
    endDate: "2025-03-17",
    location: "Houston, TX",
    speakers: ["Emily Johnson", "John Smith"],
    website: "https://spacetechconference.com",
    rating: 4.9, // Example rating
    reviews: [
      { id: 17, user: "Alex", rating: 5, comment: "Mind-blowing presentations on space technology!" },
      { id: 18, user: "Eva", rating: 4.8, comment: "Fascinating discussions on future space missions." }
    ]
  }
  ];

  export default conferences;