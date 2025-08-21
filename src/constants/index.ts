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

// ...import certs
import acsf_logo from "../assets/certs/api-connect-sales-foundation.png";
import iact_logo from "../assets/certs/ibm-api-connect-technical-sales-intermediate.png";
import cpfi_logo from "../assets/certs/cloud-pak-for-integration-sales-foundation-v2.png";
import cpf_logo from "../assets/certs/cloud-pak-for-integration-technical-sales-intermediate.png";
import gde_logo from "../assets/certs/guardium-data-encryption-sales-foundation.png";
import gdei_logo from "../assets/certs/guardium-data-encryption-technical-sales-intermediate.png";
import savone_logo from "../assets/certs/sevone-sales-foundation.png";
import savones_logo from "../assets/certs/sevone-intermediate.png";
import acronis_logo from "../assets/certs/acronis.png";
import dae_logo from "../assets/certs/dae.png";
import ctm_logo from "../assets/certs/ctm.png";
import itc_logo from "../assets/certs/itc.png";
import ccna_logo from "../assets/certs/ccna.png";
import fortanix_logo from "../assets/certs/fortanix.png";
import revou_logo from "../assets/certs/revou.png";
import alison_logo from "../assets/certs/alison.png";
import digitalent_logo from "../assets/certs/digitalent.png";
import udemy_logo from "../assets/certs/udemy.png";
import certiprof_logo from "../assets/certs/certiprof.png";
import icsi_logo from "../assets/certs/icsi.png";
import forti_logo from "../assets/certs/forti.png";
import aws_logo from "../assets/certs/aws.png";
import oracle_logo from "../assets/certs/oracle.png";
import alibaba_logo from "../assets/certs/alibaba.png";
import sophos_logo from "../assets/certs/sophos.png";
import zyxel_logo from "../assets/certs/zcnp.png";
import nutanix_logo from "../assets/certs/nutanix.png";
import microsoft_logo from "../assets/certs/microsoft.png";
import aviatrix_logo from "../assets/certs/aviatrix.png";
import cybrary_logo from "../assets/certs/cybrary.png";
import sololearn_logo from "../assets/certs/sololearn.png";
import netkrom_logo from "../assets/certs/netkrom.png";

import {
  mobile, backend, creator, web,
  gcp, cloudflare, aws, azure, heroku,
  nodejs, python, openstack, reactjs, git, kubernetes, docker,
  rps, pgi, rml, infracom, superprint, telkom, diagnos, mizuho,
  mongodb,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "certification", title: "Certification" },
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
    name: "API Connect Sales Foundation",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1jomvySqIu7cMMg0fW5TcqDmmYPo8Q0Zn/view?usp=sharing",
    image: acsf_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "IBM API Connect Technical Sales Intermediate",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/19T-FZ7KwAyqTjPNj_AAw2kCoWKcAoBbL/view?usp=sharing",
    image: iact_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Cloud Pak for Integration Sales Foundation V2",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1H2p4vzP4vIPuRkrYabHnQT2dnMyaX4DE/view?usp=sharing",
    image: cpfi_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Cloud Pak for Integration Technical Sales Intermediate",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1-bIsurUB44A11aaNgF_XpMLTRUF0_z4V/view?usp=sharing",
    image: cpf_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Guardium Data Encryption Sales Foundation",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/16tOjIbLeVa8aSpJ_wjF1q8T1tXIJUFZb/view?usp=sharing",
    image: gde_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Guardium Data Encryption Technical Sales Intermediate",
    issuer: "IBM",
    date: "2025-06",
    credentialUrl: "https://drive.google.com/file/d/1r3u5FQ7OxtUpIm7flKmEoo2M3xVmI3Wj/view?usp=sharing",
    image: gdei_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "SevOne Sales Foundation",
    issuer: "IBM",
    date: "2025-05",
    credentialUrl: "https://drive.google.com/file/d/1sAUsIrFu0ICGCwWWUPx1DXUYz4KpbhPr/view?usp=sharing",
    image: savone_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "SevOne Intermediate",
    issuer: "IBM",
    date: "2025-05",
    credentialUrl: "https://drive.google.com/file/d/1cacZe81I45BIBXVDXJ53H0CKOVP6D9vT/view?usp=sharing",
    image: savones_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Cloud Tech Fundamentals",
    issuer: "ACRONIS",
    date: "2024-12",
    credentialUrl: "https://www.credly.com/badges/c4e07de0-1256-4b1f-bc6f-a627feb5e7d8/public_url",
    image: acronis_logo, 
    linkLabel: "View Credential", 
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024-03",
    credentialUrl: "https://drive.google.com/file/d/1onB4D919MXw-6RFlrs1PaOgBf0sHxfL_/view?usp=sharing",
    image: dae_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "2023-07",
    credentialUrl: "https://drive.google.com/file/d/1LYQZKaHB3pHbTUAQoqR-AlnUrwLL5Sva/view?usp=sharing",
    image: ctm_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023-07",
    credentialUrl: "https://drive.google.com/file/d/1KhQwzHBC2CCCW32XfKJevSlpsMkmTEM8/view?usp=sharing",
    image: itc_logo,
    linkLabel: "View Credential",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2020-07",
    credentialUrl: "https://www.credly.com/badges/61a31160-6ce8-4276-9ef3-218670691da5/public_url",
    image: ccna_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Fortanix Certified Administrator",
    issuer: "Fortanix University",
    date: "2023-08",
    credentialUrl: "https://drive.google.com/file/d/1LAywOwIc0MCu2PapD5xHBxC92AO6ALp5/view?usp=sharing",
    image: fortanix_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Intro to Data Analytics",
    issuer: "RevoU",
    date: "2022-08",
    credentialUrl: "https://drive.google.com/file/d/1LitlG8ly2BWsgH6mMjUoHbzsEyWBsFp_/view?usp=sharing",
    image: revou_logo,
    linkLabel: "View Credential",
  },
  {
    name: "PMP Project Management - Fundamental Concepts for Beginners",
    issuer: "Alison.com",
    date: "2023-07",
    credentialUrl: "https://alison.com/certification/check/%242y%2410%24FTtCnOYDxzQyNKgEUkRrkepzzxJWPz1DftmpOZUKX1MzfJzYsnQe2",
    image: alison_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Diploma in Project Management",
    issuer: "Alison.com",
    date: "2023-07",
    credentialUrl: "https://alison.com/certification/check/%242y%2410%24C3e2Qc3J39SLNnu813HOOesHPajvUGlvjwzLt7R8mX4f4QLnTP6.W",
    image: alison_logo,
    linkLabel: "View Credential",
  },
  {
    name: "CCNA CyberSecurity Operations",
    issuer: "Digitalent Kominfo",
    date: "2020-07",
    credentialUrl: "https://drive.google.com/file/d/1u6w3aQ5-xTocnkOgdlo7SzN9vkyP-Y71/view?usp=sharing",
    image: digitalent_logo,
    linkLabel: "View Credential",
  },
  {
    name: "DevOps Series : Server Automation",
    issuer: "Udemy",
    date: "2020-07",
    credentialUrl: "https://drive.google.com/file/d/1tzyAGIbACiBCZIY-qmlu6DEgGnAks-MG/view?usp=sharing",
    image: udemy_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Ethical Hacking Course",
    issuer: "Udemy",
    date: "2020-07",
    credentialUrl: "https://drive.google.com/file/d/1tXrB8sUE68WhaMV3jDjY2SBcuNOM1iNe/view?usp=sharing",
    image: udemy_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Advanced Cybersecurity Malware",
    issuer: "Udemy",
    date: "2020-07",
    credentialUrl: "https://drive.google.com/file/d/1LweYv8pc4b4KDnT170tLjS1kdWlT9gGi/view?usp=sharing",
    image: udemy_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Cyber Security Foundation",
    issuer: "Certi Prof",
    date: "2020-11",
    credentialUrl: "https://drive.google.com/file/d/1tBKDqKG6YRXOSBIX6Dz-dhX10VZ3k-cR/view?usp=sharing",
    image: certiprof_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Certified Network Security Specialist",
    issuer: "International Cybersecurity Institute",
    date: "2020-06",
    credentialUrl: "https://drive.google.com/file/d/1tw0xq-oSTNY777_C8acNW4jEUHpSunyi/view?usp=sharing",
    image: icsi_logo,
    linkLabel: "View Credential",
  },
  {
    name: "NSE 2 Network Security Associate",
    issuer: "Fortinet Institute",
    date: "2020-10",
    credentialUrl: "https://drive.google.com/file/d/1tj2smrHbqEWucR7XN4q55dtShLeR6xN9/view?usp=sharing",
    image: forti_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Solutions Architect - Associate",
    issuer: "AWS Cloud",
    date: "2019-02",
    credentialUrl: "https://drive.google.com/file/d/1tJ-_SIG7I2hbphlQ-m2oJ_nN2p65EEkq/view?usp=sharing",
    image: aws_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Oracle Certified Foundation Associate",
    issuer: "Oracle Cloud",
    date: "2022-06",
    credentialUrl: "https://drive.google.com/file/d/16rNu9kLZxpMQvmLLkGpxRoCL-Ns1xlrp/view?usp=sharing",
    image: oracle_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Cloud Computing Specialist",
    issuer: "Alibaba Cloud",
    date: "2019-11",
    credentialUrl: "https://drive.google.com/file/d/1tNyiPM1Fjc0zV60o3S9tfAoImEIMPBS9/view?usp=sharing",
    image: alibaba_logo,
    linkLabel: "View Credential",
  },
  {
    name: "ET80-XG Firewall V17.0",
    issuer: "Sophos Certified Engineer",
    date: "2019-04",
    credentialUrl: "https://drive.google.com/file/d/1t_Z_Qm7ODhe9lB7oUyaQW-hTwlBxqgQP/view?usp=sharing",
    image: sophos_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Zyxel Certified Network Professional",
    issuer: "Zyxel Certified",
    date: "2019-10",
    credentialUrl: "https://drive.google.com/file/d/1tQslzkPVk8e05U_uZmT31cskQEw9O_y9/view?usp=sharing",
    image: zyxel_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Nutanix End User Computing Administration Online",
    issuer: "Nutanix University",
    date: "2022-06",
    credentialUrl: "https://drive.google.com/file/d/16QjxvVrJH-iO9-HvrVP0vHNVd1dvUtC8/view?usp=sharing",
    image: nutanix_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Networking Fundamental",
    issuer: "Microsoft Academy",
    date: "2018-12",
    credentialUrl: "https://drive.google.com/file/d/1t2NmdksMm_nhHsOiaYfuC_X9yaYWWJXS/view?usp=sharing",
    image: microsoft_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Multi Cloud Network Associate",
    issuer: "Aviatrix Certified Engineer",
    date: "2020-07",
    credentialUrl: "https://drive.google.com/file/d/1uLecpihuPO0LSlN1DUIVDLCC_8hlTyjh/view?usp=sharing",
    image: aviatrix_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Network Device Certified",
    issuer: "Cybrary",
    date: "2018-12",
    credentialUrl: "https://drive.google.com/file/d/1u4fdPpO_CS-rqxyeLMnAuN0kKUraqKSw/view?usp=sharing",
    image: cybrary_logo,
    linkLabel: "View Credential",
  },
  {
    name: "HTML Fundamental",
    issuer: "sololearn",
    date: "2018-12",
    credentialUrl: "https://drive.google.com/file/d/1tdSWallRatCu9vi9K7GXLoXNAd4HM7gK/view?usp=sharing",
    image: sololearn_logo,
    linkLabel: "View Credential",
  },
  {
    name: "Secure Computer User",
    issuer: "Netkrom",
    date: "2018-12",
    credentialUrl: "https://drive.google.com/file/d/1uKnTqbvJvbVRe6pIrHnvmYcq_ASnguE-/view?usp=sharing",
    image: netkrom_logo,
    linkLabel: "View Credential",
  },
];

export { services, technologies, experiences, educations, certifications };
