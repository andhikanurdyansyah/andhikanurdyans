import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TEducation,
  TCertification,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  gcp,
  cloudflare,
  aws,
  azure,
  heroku,
  nodejs,
  python,
  openstack,
  reactjs,
  git,
  kubernetes,
  docker,
  rps,
  pgi,
  rml,
  infracom,
  superprint,
  telkom,
  diagnos,
  mizuho,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "education", title: "Education" },
  { id: "certifications", title: "Certifications" },
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
  { name: "git", icon: git },
  { name: "Kubernetes", icon: kubernetes },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Project Manager",
    companyName: "PT. Platinumetrix Global Inovasi",
    companyUrl: "https://pgi-data.co.id",
    icon: pgi,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "Supervisor IT Infrastructure & Support",
    companyName: "PT. Diagnos Laboratorium Utama .Tbk",
    companyUrl: "https://diagnos.co.id/",
    icon: diagnos,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "IT Infrastructure Specialist",
    companyName: "PT. Mizuho Balimor Finance",
    companyUrl: "https://www.obf.id/",
    icon: mizuho,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Jan 2021",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "IT Professional Service Engineer",
    companyName: "PT. Retail Performance Solution",
    companyUrl: "https://rps-indonesia.co.id/",
    icon: rps,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "IT Support Engineer",
    companyName: "PT. Raditya Mulia Lestari",
    companyUrl: "https://rml.co.id/",
    icon: rml,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "Data Center Operation",
    companyName: "PT. Infracom Telesarana",
    companyUrl: "https://www.linkedin.com/company/pt-infracom-telesarana/about/",
    icon: infracom,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "IT Engineer",
    companyName: "CV. Super Print",
    companyUrl: "http://www.superprintbekasi.com/",
    icon: superprint,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
  {
    title: "Network Engineer (Freelancer)",
    companyName: "PT. Telkom Akses",
    companyUrl: "https://telkomakses.co.id/",
    icon: telkom,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jan 2020",
    points: [
      "Developing and maintaining web applications...",
      "Collaborating with cross-functional teams...",
      "Implementing responsive design...",
      "Participating in code reviews...",
    ],
  },
];

const educations: TEducation[] = [
  {
    name: "Universitas Terbuka",
    description: "S1 Sistem Informasi — fokus pada cloud dan data",
    tags: [
      { name: "Cloud", color: "green-text-gradient" },
      { name: "Data Analytics", color: "blue-text-gradient" },
    ],
    icon: web,
    iconBg: "#E6DEDD",
    date: "2020 - Sekarang",
  },
];

const certifications: TCertification[] = [
  {
    name: "Google Cloud Digital Leader",
    company: "Google",
    image: "https://drive.google.com/thumbnail?id=dummyid1",
    link: "https://drive.google.com/file/d/dummyid1/view",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    company: "Amazon",
    image: "https://drive.google.com/thumbnail?id=dummyid2",
    link: "https://drive.google.com/file/d/dummyid2/view",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  certifications,
};
