import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Indulge in our creamy pasta delight with savory bacon and rich cheese.",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Savor the robust flavors of our spiced curry with tender chicken.",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, creamy mozzarella, and basil drizzled with balsamic glaze.",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Experience the perfect blend of seafood and vegetables wrapped in rice and seaweed.",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Dive into our decadent dessert with a molten chocolate center.",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and a tangy dressing.",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Enjoy our stir-fried rice noodles with shrimp, tofu, and crunchy peanuts.",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Crispy duck served with pancakes, cucumber, and hoisin sauce.",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs.",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description: "Layers of coffee-soaked biscuits and mascarpone in our Italian dessert.",
  },
];

export const ABOUT = {
  header: "We Love Cooking!",
  content:
    "At Restaura, every meal tells a story of passion and creativity. From our chef's signature dishes to our attentive service, every detail is crafted to make your visit extraordinary. Whether you're indulging in our famous Carbonara or exploring our globally inspired menu, each dish is a celebration of flavor and innovation. Join us at Restaura, where every bite leaves a lasting impression.",
};

export const MISSION =
  "Our mission is to create delicious and memorable dining experiences for all our guests.";

export const CUISINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Discover the essence of Italy with our exquisite Italian cuisine, blending traditional recipes and modern dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Savor the art of Japanese culinary excellence, featuring a fusion of classic and contemporary flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Experience the rich and diverse tastes of India with our menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaura.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://twitter.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
