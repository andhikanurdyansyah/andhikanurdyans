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
  carrent,
  jobit,
  tripguide,
  mongodb,
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
    icon: pgi,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
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
      "Responsible for maintaining IT infrastructure and support operations.",
      "Led a team of IT support engineers ensuring system uptime and user satisfaction.",
      "Implemented network upgrades and ensured cybersecurity standards.",
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
      "Maintained internal IT systems and provided technical support.",
      "Monitored server performance and performed regular backups.",
      "Collaborated with finance teams on system integration and reporting tools.",
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
      "Provided technical support for enterprise clients.",
      "Deployed and configured network and server infrastructure.",
      "Participated in project implementation across multiple retail clients.",
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
      "Handled daily technical issues and end-user support.",
      "Managed LAN/WAN troubleshooting and printer configuration.",
      "Assisted with ERP system setup and updates.",
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
      "Monitored data center performance and climate control systems.",
      "Ensured physical security and redundancy across systems.",
      "Responded to alerts and supported system failover procedures.",
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
      "Developed and maintained POS system.",
      "Provided software and hardware support in a printing production environment.",
      "Managed backup systems and local server maintenance.",
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
      "Installed and configured fiber optic networks.",
      "Troubleshot and resolved last-mile connectivity issues.",
      "Documented site visits and maintained service logs.",
    ],
  },
];

const educations: TEducation[] = [
  {
    name: "Universitas Terbuka",
    description: "S1 Sistem Informasi — fokus pada cloud computing dan analitik data.",
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
    company: "Amazon Web Services",
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
