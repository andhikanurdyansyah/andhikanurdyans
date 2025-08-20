import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TEducation,
  TCertification,
} from "../types";

import {
  mobile, backend, creator, web,
  gcp, cloudflare, aws, azure, heroku,
  nodejs, python, openstack, reactjs, git, kubernetes, docker,
  rps, pgi, rml, infracom, superprint, telkom, diagnos, mizuho,
  mongodb,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },        // was Work
  { id: "certification", title: "Certification" },// new
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Project Management", icon: web },
  { title: "DevOps", icon: mobile },
  { title: "Network & Security", icon: backend },
  { title: "Cloud Infra-Architecture", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "GCP", icon: gcp },
  { name: "Cloudflare", icon: cloudflare },
  { name: "Heroku", icon: heroku },
  { name: "nodejs", icon: nodejs },
  { name: "python", icon: python },
  { name: "OpenStack", icon: openstack },
  { name: "reactjs", icon: reactjs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "Kubernetes", icon: kubernetes },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Project Manager",
    companyName: "PT. Platinumetrix Global Inovasi",
    companyUrl: "https://pgi-data.co.id",
    icon: pgi, iconBg: "#383E56", date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Supervisor IT Infrastructure & Support",
    companyName: "PT. Diagnos Laboratorium Utama .Tbk",
    companyUrl: "https://diagnos.co.id/",
    icon: diagnos, iconBg: "#E6DEDD", date: "Jan 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Infrastructure Specialist",
    companyName: "PT. Mizuho Balimor Finance",
    companyUrl: "https://www.obf.id/",
    icon: mizuho, iconBg: "#E6DEDD", date: "Feb 2020 - Jan 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Professional Service Engineer",
    companyName: "PT. Retail Performance Solution",
    companyUrl: "https://rps-indonesia.co.id/",
    icon: rps, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support Engineer",
    companyName: "PT. Raditya Mulia Lestari",
    companyUrl: "https://rml.co.id/",
    icon: rml, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Center Operation",
    companyName: "PT. Infracom Telesarana",
    companyUrl: "https://www.linkedin.com/company/pt-infracom-telesarana/about/",
    icon: infracom, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Engineer",
    companyName: "CV. Super Print",
    companyUrl: "http://www.superprintbekasi.com/",
    icon: superprint, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Network Engineer (Freelancer)",
    companyName: "PT. Telkom Akses",
    companyUrl: "https://telkomakses.co.id/",
    icon: telkom, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

/** ===== NEW DATA ===== */
const educations: TEducation[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universitas Terbuka",
    location: "Indonesia",
    period: "2021 – Present",
    details: [
      "Focus on Data Analysis and Information Systems.",
      "Coursework includes Data Visualization, Systems Analysis, and Cloud Computing.",
    ],
  },
];

const certifications: TCertification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-06",
    credentialUrl: "https://link-sertifikat-aws.com",
    credentialId: "ABC-1234",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
  },
];

export { services, technologies, experiences, educations, certifications };
