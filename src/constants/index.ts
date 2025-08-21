import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TEducation,
  TCertification,
} from "../types";

// ...import lain
import tamhar from "../assets/edu/tamhar.png";
import udemy from "../assets/edu/udemy.png";
import ut from "../assets/edu/ut.png";

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
      "Privilege Access Management (PAM): Successfully led the deployment of ARCON PAM for enterprise clients, improving access governance and regulatory compliance.",
      "Zero Trust Security: Implemented Block Armour ZTNA (Zero Trust Network Access) in PT. Smartfren Tbk, strengthening network security and minimizing insider threats.",
      "Custom Applications (GoMamam): Spearheaded the design and development of custom business applications tailored for GoMamam, from requirements gathering to delivery.",
      "API Management (MNC Bank): Managed enterprise-level API lifecycle management implementation using IBM API Connect, enabling secure integration and scaling of financial services.",
      "Coordinated cross-functional teams (developers, infrastructure engineers, and business stakeholders) to deliver projects on time and within budget.",
      "Oversaw end-to-end project lifecycle: requirement analysis, architecture design, vendor management, UAT, deployment, and post-go-live support.",
      "Delivered multiple successful projects across sectors (telecommunication, fintech, banking, and retail), ensuring client satisfaction and long-term partnerships.",
    ],
  },
  {
    title: "Supervisor IT Infrastructure & Support",
    companyName: "PT. Diagnos Laboratorium Utama .Tbk",
    companyUrl: "https://diagnos.co.id/",
    icon: diagnos, iconBg: "#E6DEDD", date: "Jan 2021 - Jan 2022",
    points: [
      "Supervised IT infrastructure and support teams to ensure seamless operations across all branches.",
      "Designed and deployed MikroTik Core Routers with L2TP + IPSec VPN for secure branch connectivity.",
      "Managed Dell Hyperconverged Infrastructure for enterprise-grade server performance and scalability.",
      "Handled IT budgeting, asset management, IT planning, and customer support escalation.",
      "Improved monitoring processes, reducing downtime and increasing service reliability for lab operations.",
      "Led IT projects, including system upgrades and network enhancements, ensuring minimal disruption to business operations.",
      "Collaborated with cross-functional teams to align IT strategies with business goals.",
    ],
  },
  {
    title: "IT Infrastructure Specialist",
    companyName: "PT. Mizuho Balimor Finance",
    companyUrl: "https://www.obf.id/",
    icon: mizuho, iconBg: "#E6DEDD", date: "Feb 2020 - Jan 2021",
    points: [
      "Responsible for infrastructure operations, network monitoring, and IT planning in a fintech environment.",
      "Implemented and maintained Fortigate Firewalls, MikroTik Core Routers, and Cisco Core Switches for high-security financial operations.",
      "Administered on-premise servers, ensuring compliance with international financial data security standards.",
      "Enhanced infrastructure asset management processes, improving efficiency and transparency.",
    ],
  },
  {
    title: "IT Professional Service Engineer",
    companyName: "PT. Retail Performance Solution",
    companyUrl: "https://rps-indonesia.co.id/",
    icon: rps, iconBg: "#E6DEDD", date: "Jun 2019 - Jan 2020",
    points: [
      "Worked as part of a System Integrator team delivering IT solutions such as RetailNext analytics platforms, Jira, and enterprise IT services.",
      "Conducted User Acceptance Testing (UAT) and Proof of Concept (PoC) for various client implementations.",
      "Provided end-user support and system monitoring, ensuring smooth handover of delivered solutions.",
    ],
  },
  {
    title: "IT Support Engineer",
    companyName: "PT. Raditya Mulia Lestari",
    companyUrl: "https://rml.co.id/",
    icon: rml, iconBg: "#E6DEDD", date: "Feb 2019 - Jun 2019",
    points: [
      "Provided network security support to clients using Sophos XG Firewalls, Cyberoam, and Zyxel solutions.",
      "Conducted UAT & PoC for network security deployments.",
      "Delivered user support and system monitoring, ensuring compliance with client requirements.",
    ],
  },
  {
    title: "Data Center Operation",
    companyName: "PT. Infracom Telesarana",
    companyUrl: "https://www.linkedin.com/company/pt-infracom-telesarana/about/",
    icon: infracom, iconBg: "#E6DEDD", date: "Jan 2017 - Feb 2019",
    points: [
      "Operated data center facilities supporting VSAT satellite communications.",
      "Monitored and maintained servers from providers such as Thaicom, MetraSat, and Gilat, ensuring service continuity.",
      "Managed Cisco Catalyst (Core Routers) and Cisco ASA Firewalls, securing mission-critical operations.",
      "Reduced downtime by optimizing fault detection and proactive issue resolution.",
    ],
  },
  {
    title: "IT Engineer",
    companyName: "CV. Super Print",
    companyUrl: "http://www.superprintbekasi.com/",
    icon: superprint, iconBg: "#E6DEDD", date: "Jan 2016 - Sep 2016",
    points: [
      "Provided IT support for hardware and software, with a focus on printer and computer repair services.",
      "Supported industrial clients in ensuring business continuity through reliable IT troubleshooting.",
    ],
  },
  {
    title: "Network Engineer (Freelancer)",
    companyName: "PT. Telkom Akses",
    companyUrl: "https://telkomakses.co.id/",
    icon: telkom, iconBg: "#E6DEDD", date: "Aug 2015 - Dec 2015",
    points: [
      "Supported the migration from copper cable to fiber optic, contributing to Indonesia’s national broadband expansion program.",
      "Installed and configured ODP (Optical Distribution Points) and ONT (Optical Network Terminals) for customer deployments.",
      "Performed fiber optic splicing (FO splicing) to ensure stable and reliable network connectivity.",
    ],
  },
];

/** ===== NEW DATA ===== */
const educations: TEducation[] = [
  {
    title: "Bachelor of Computer Science",
    institution: "Universitas Terbuka",
    location: "Indonesia",
    period: "2021 – Present",
    details: [
      "Focus on Data Analysis and Information Systems.",
      "Coursework includes Data Visualization, Systems Analysis, and Cloud Computing.",
    ],
    image: ut,
    linkUrl: "https://www.ut.ac.id/",
    linkLabel: "Visit UT",
    tags: [
      { name: "data", color: "blue-text-gradient" },
      { name: "cloud", color: "green-text-gradient" },
    ],
  },
  {
    title: "Computer & Network Engineering",
    institution: "Islamic School Vocational High School of Taman Harapan",
    period: "Graduated",
    image: tamhar,
    linkUrl: "https://online.tamhar.sch.id/",
    linkLabel: "Visit Tamhar",
    tags: [{ name: "networking", color: "green-text-gradient" }],
  },
  {
    title: "Online Courses",
    institution: "Udemy",
    period: "Ongoing",
    image: udemy,
    linkUrl: "https://www.udemy.com/user/andhika-nurdyansyah/",
    linkLabel: "View Profile",
    tags: [{ name: "self-learning", color: "pink-text-gradient" }],
  },
];

const certifications: TCertification[] = [
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024-03",
    credentialUrl: "https://drive.google.com/file/d/1onB4D919MXw-6RFlrs1PaOgBf0sHxfL_/view?usp=sharing",
    image: "/assets/certs/aws.png",     // NEW
    linkLabel: "View Credential",                           // NEW
  },
  {
    name: "Fortanix Certified Administrator",
    issuer: "Fortanix University",
    date: "2023-08",
    credentialUrl: "https://drive.google.com/file/d/1LAywOwIc0MCu2PapD5xHBxC92AO6ALp5/view?usp=sharing",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "2023-07",
    credentialUrl: "https://drive.google.com/file/d/1LYQZKaHB3pHbTUAQoqR-AlnUrwLL5Sva/view?usp=sharing",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023-12",
    credentialUrl: "https://drive.google.com/file/d/1KhQwzHBC2CCCW32XfKJevSlpsMkmTEM8/view?usp=sharing",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "CNCF",
    date: "2023-12",
    credentialUrl: "https://link-sertifikat-kcna.com",
    image: "https://placehold.co/600x400?text=KCNA",        // NEW
    linkLabel: "View Credential",
  },
];

export { services, technologies, experiences, educations, certifications };
