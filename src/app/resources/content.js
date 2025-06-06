const person = {
  firstName: "Jittiphat",
  lastName: "Somsai",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student / Drummer / Website Developer / Frontend Developer ",
  avatar: "/images/avatar.png",
  email: "Jittiphat@jittiphat.site",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Thailand", "Nakhon Ratchasima"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/Jittiphatz4966/",
  },
  {
    name: "Instagram",
    icon: "ig",
    link: "https://www.instagram.com/mannez_xyz/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Jittiphatz",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.com/users/776836808259534878",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work and projects`, 
  headline: <>Jittiphat Somsai</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Thai Massage Website</strong></>,
    href: "https://thai-massage-have-a-nice-day.shop",
  },
  subline: (
    <>
      Frontend Web Developer and Drummer
      <br /> Working with Next.JS, Nuxt.JS, and Vue.JS
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Information about me`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:Jittiphat@jittiphat.site",
  },
  intro: {
    display: true,
    title: "แนะนำตัว",
    description: (
      <>
        สวัสดีครับ ผมชื่อ จิตติพัฒน์ ส้มสาย ชื่อเล่นของผมคือ แบทแมน อายุ 16 ขณะนี้กําลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาปีที่ 5 โรงเรียนบุญวัฒนา 
        เป็นคนที่ชื่นชอบในการสร้าง Web / Front End โดยใช้ Next.JS / Nuxt / Vue และเป็นมือกลอง Freelance ด้วยครับ
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work",
    experiences: [
      {
        company: "Ferrum Cloud",
        timeframe: "2023 - Present",
        role: "Deputy Chief Executive Officer",
      },
      {
        company: "Mori Dev",
        timeframe: "2023 - Present",
        role: "Founder / Chief Executive Officer",
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "การศึกษา",
    institutions: [
      {
        name: "ระดับอนุบาล",
        description: <>โรงเรียนรวมมิตรวิทยา</>,
      },
      {
        name: "ระดับประถมศึกษา",
        description: <>โรงเรียนเมืองนครราชสีมา</>,
      },
      {
        name: "ระดับมัธยมศึกษา",
        description: <>โรงเรียนบุญวัฒนา</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <img src="https://skillicons.dev/icons?i=html,css,javascript,typescript,python,cpp&theme=dark&perline=6" alt="dev-icon" /> ,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Frameworks",
        description: <img src="https://skillicons.dev/icons?i=nextjs,nuxtjs,vuejs,vite,react,tailwindcss,materialui&theme=dark&perline=5" alt="dev-icon" /> ,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Softwares",
        description: <img src="https://go-skill-icons.vercel.app/api/icons?i=vscode,canva,ableton,ps,pr,animate,vegaspro,git&perline=4" alt="dev-icon" />,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Databases",
        description: <img src="https://skillicons.dev/icons?i=mysql,mongodb&theme=dark&perline=4" alt="dev-icon" /> ,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Cloud Services",
        description: <img src="https://skillicons.dev/icons?i=aws,vercel&theme=dark&perline=4" alt="dev-icon" /> ,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about my life",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
