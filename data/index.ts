import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Clients", link: "#testimonials" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We're very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Group of Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Coding world class solutions for the real world problems",
    description: "Our Mission",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "We're thrilled with the website and marketing solutions provided by CodeOptics. Their expertise and creativity have significantly boosted our online presence. The new website is user-friendly and visually appealing, perfectly showcasing our renovation services. Their marketing strategies have driven more traffic and inquiries, helping us grow our business. Highly recommend their services for anyone looking to elevate their brand!",
    name: "Ameer Khan",
    title: "Australis Property Care",
  },
  {
    quote:
      "We're absolutely thrilled with the exceptional website and marketing solutions delivered by CodeOptics. Their unparalleled expertise and creativity have profoundly elevated our online presence. The new website is not only user-friendly but also visually captivating, effectively showcasing our educational offerings. Their robust marketing strategies have generated a substantial increase in traffic and inquiries, fueling our business growth. We enthusiastically recommend their services to anyone",
    name: "Gagan Jaggi",
    title: "Bala Classes",
  },
  {
    quote:
      "We are delighted with the exceptional marketing solutions and content creation services provided by CodeOptics. Their strategic approach and creativity have significantly amplified our platform's visibility and engagement. The tailored content they've created is informative, engaging, and perfectly resonates with our audience. Thanks to their efforts, we've seen a notable increase in user interaction and enrollment numbers. Highly recommend their services for anyone in the educational sector",
    name: "Diwakar Gupta",
    title: "Decode Exam",
  },
  {
    quote:
      "We are extremely pleased with the billing software, web development, and marketing services provided by CodeOptics. Their expertise and dedication have revolutionized our operations, making them more efficient and accessible. The new website is user-friendly and beautifully showcases our initiatives. Their marketing strategies have significantly boosted our outreach and engagement, helping us connect with a broader audience. We highly recommend their services to organizations seeking innovation",
    name: "Ramakant Pathak(Minister)",
    title: "Haribandh Dham Trust",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "UI/UX Development",
    desc: "We offer UI/UX development services using modern technologies like HTML, CSS, JavaScript, React, and more. Our expertise ensures intuitive, responsive, and visually appealing interfaces that enhance user experiences and drive engagement for your digital products.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "E-Commerce Development",
    desc: "We provide eCommerce development using modern technologies like the MERN stack. Our solutions ensure robust, scalable, and high-performance online stores, offering seamless user experiences and comprehensive functionality to drive your business growth in the digital marketplace.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Customized Business Solution",
    desc: "We create customized business solutions to help companies achieve their goals. Our products include billing software, sales dashboards, and marketing tools, designed to streamline operations, boost productivity, and drive growth. Transform your business with our innovative solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Digital Marketing Services",
    desc: "We offer comprehensive digital marketing services designed to enhance your online presence. Our expertise includes SEO, social media marketing, PPC, and content strategy, driving traffic, engagement, and conversions to help your business grow in the digital landscape.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/codeoptics?igsh=eHZqYXF0Z2RpenZo",
  },
  {
    id: 2,
    name: "Linkedin",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/codeoptics?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "GitHub",
    img: "/Git.svg",
    link: "",
  },
];
