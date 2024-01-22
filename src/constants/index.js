import * as Yup from "yup";
import rolexLogo from "/public/logoBrands/Rolex.png";
import patekLogo from "/public/logoBrands/patek-philippe.svg";
import audemarsLogo from "/public/logoBrands/audemars-piguet.svg";
import citizenLogo from "/public/logoBrands/citizen-watch-logo.svg";

export const slidesInformation = [
  {
    id: 0,
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2001.mp4?alt=media&token=f47e3743-e490-4a41-94c6-bed6857d6cd9",
    subTitle: "A Dramatic Change In",
    title: "Your Style",
  },
  {
    id: 1,
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2002.mp4?alt=media&token=6a801302-7d1d-4f21-bc0f-979404c73ff6",
    subTitle: "All Our Products Are ",
    title: "Unique...",
  },
];

const categoriesInformation = {
  backgorungUrl:
    "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategories%20bg.jpg?alt=media&token=c1a1e59a-4c7c-4a8e-8c9e-161e6f0db620",
  listOfcategories: [
    {
      categoryTitle: "New",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2001.jpg?alt=media&token=7a797997-4123-40ad-9865-fbe77003c2f6",
    },
    {
      categoryTitle: "Limited",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2002.jpg?alt=media&token=8820bbbe-ad68-438c-b3b8-c5808efbc012",
    },
    {
      categoryTitle: "Divers",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2003.jpg?alt=media&token=011c8c45-3529-4cf7-9638-47f09dd319de",
    },
    {
      categoryTitle: "Case Material",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2004.jpg?alt=media&token=bdd1991c-6abb-4855-b15c-b6aa5a9a4a9c",
    },
    {
      categoryTitle: "Band Material",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2005.jpg?alt=media&token=824853e3-b3c7-4887-bc58-5f19e21da464",
    },
    {
      categoryTitle: "Movement",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2006.jpg?alt=media&token=b799fca2-739e-4e1a-9f42-c6c59ac20ac0",
    },
  ],
};

const stampToTime = (stamp) => {
  const date = new Date(stamp * 1000);

  return date.toLocaleDateString("en-US");
};

const shopHeroSectionInfo = [
  {
    title: "Timelessly Chic Watches 🕒",
    desc: "Explore our exquisite collection of timepieces that marry timeless elegance with modern sophistication. From classic leather straps to sleek metal bands, our watches are designed to elevate your style and keep you punctual in the most fashionable way possible.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2001.jpg?alt=media&token=6846f178-7573-467e-aaa0-36ed7512dd5f",
  },
  {
    title: "Precision in Every Second ⌚️",
    desc: "Discover a world of precision and style with our curated selection of watches. Whether you're after a statement piece for formal occasions or a reliable everyday companion, our watches combine impeccable craftsmanship with cutting-edge design to ensure you always make a stylish statement, on time, every time.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2002.jpg?alt=media&token=7b70d7fb-947d-492a-9c00-2d9d623de04c",
  },
  {
    title: "Adventure Awaits: Explore Our Watch World 🌍",
    desc: "Embark on a journey of exploration and style with our diverse range of watches suited for every adventurer. With features like water resistance, sturdy construction, and rugged yet fashionable designs, our watches are built to accompany you on all your escapades without compromising on style.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2003.jpg?alt=media&token=8a0a964c-e429-44df-a979-364bf7d59707",
  },
  {
    title: "Timeless Treasures: Uncover Your Perfect Watch ⏱️",
    desc: "Delve into our treasure trove of timeless watches and find the perfect piece to complement your individual style. Our carefully curated collection offers a variety of designs, from vintage-inspired classics to sleek, modern marvels, ensuring there's a perfect timepiece waiting to adorn your wrist.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2004.jpg?alt=media&token=6d24e40e-a2b0-4ab4-b2c1-2484ba9c25b0",
  },
];

const supportedProductFilters = {
  categories: categoriesInformation.listOfcategories.map(
    (c) => c.categoryTitle
  ),
};

const routesInfo = [
  { title: "Home", path: "/Wrist-Mall/" },
  { title: "Shop", path: "/Wrist-Mall/Shop" },
  { title: "Cart", path: "/Wrist-Mall/Cart" },
  { title: "About me", path: "/Wrist-Mall/AboutMe" },
];

export const signInPageBgUrl =
  "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fsign%20in%20page%20bg.jpg?alt=media&token=78a77d6d-7959-4b0c-a838-54328b716c63";

export const signUpPageBgUrl =
  "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fsign%20up%20page%20bg.jpg?alt=media&token=4dcb63f6-e7f5-4d81-9ee6-f513541c778d";

export const cartPageBgUrl =
  "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcart%20page%20bg.jpg?alt=media&token=a71bc5ea-938e-4dfc-a3f5-b4ccffe62639";

export const exploreSectionBg =
  "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2FExpore%20section%20bg%2001.jpg?alt=media&token=dd94d1a2-4065-43d1-8ef4-646c22f51a46";

export const summarySectionPic =
  "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fsummary%20section%20bg.webp?alt=media&token=8cdc769c-2157-4322-b268-b73b74dbd1f9";
const SignInValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is reduired")
    .min(3, "Name length is not valid"),
  email: Yup.string()
    .email("Invaild email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string()
    .required("confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  gender: Yup.string().required("gender is required"),
});

const SignInInitialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  remember: true,
};

const developerInfo = {
  picUrl:
    "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/photo_2024-01-07_17-28-44.jpg?alt=media&token=5a86e1db-1c36-4c7c-a137-f0d8cdb727b3",
  biography:
    "I am a junior front-end developer with strong skills in developing responsive web pages using HTML/CSS, Tailwind CSS, and Bootstrap. I also have experience in building dynamic applications and working with React and React hooks. JavaScript is the foundation of my programming skills, and I have a good understanding of its core concepts and deeper aspects. Additionally, I am skilled in interacting and communicating with the backend using various libraries such as Axios.",
  firstName: "Mohammad",
  lastName: "Arab",
};

const scrollUp = () => {
  window.scrollTo(0, 0);
};

const brandsinfo = [
  { logoSrc: rolexLogo, BrandName: "Rolex" },
  { logoSrc: patekLogo, BrandName: "Patek Philippe" },
  { logoSrc: audemarsLogo, BrandName: "Audemars Piguet" },
  { logoSrc: citizenLogo, BrandName: "Citizen" },
];

const reviewsInfo = [
  {
    userName: "Raffialdo",
    point: 4.8,
    comment:
      "Trusted marketplace 🛍️ buy branded watches ⌚️ of the highest quality",
  },
  {
    userName: "Raffialdo",
    point: 4,
    comment:
      "Wrist Mall revolutionized my watch shopping! ⌚️ User-friendly app, amazing collection, swift delivery, and stellar customer service! 🎉",
  },
  {
    userName: "Diana Anggita",
    point: 5.0,
    comment:
      "Absolutely fantastic selection and service! 😍👌 Can't get enough of the amazing watches they offer. ⌚️⌚️",
  },
];

const faqInfo = [
  {
    question: "What payment methods does Wrist Mall accept?",
    answer:
      "Wrist Mall accepts major credit cards, PayPal, and other electronic payment methods for a secure and convenient checkout process. 💳💸",
  },
  {
    question: "How is shipping handled for Wrist Mall orders?",
    answer:
      " Wrist Mall offers fast and reliable shipping options to deliver your watch purchase straight to your doorstep. 🚚✈️",
  },
  {
    question: "Are the watches sold on Wrist Mall authentic and genuine?",
    answer:
      "Absolutely! Wrist Mall is committed to providing customers with authentic and genuine watches from renowned brands, ensuring high quality and customer satisfaction. ⌚️💯",
  },
  {
    question: "Can I return a watch if it doesn't meet my expectations?",
    answer:
      "Yes, Wrist Mall has a hassle-free return policy for unworn and undamaged watches. If you're not satisfied with your purchase, simply initiate a return within the specified timeframe for a refund or exchange. 👍🔄",
  },
  {
    question: "Does Wrist Mall offer any warranty on purchased watches?",
    answer:
      "Certainly! Wrist Mall stands behind the quality of its watches and offers warranty coverage on eligible purchases for added peace of mind. ⌚️🛡️",
  },
];

export {
  categoriesInformation,
  stampToTime,
  shopHeroSectionInfo,
  supportedProductFilters,
  routesInfo,
  SignInValidationSchema,
  SignInInitialValues,
  developerInfo,
  scrollUp,
  brandsinfo,
  reviewsInfo,
  faqInfo,
};
