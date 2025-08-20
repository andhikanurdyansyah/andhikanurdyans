import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TEducation,
  TCertification,
} from "../types";

import tamhar from "../assets/edu/tamhar.png";
import udemy from "../assets/edu/udemy.png";
import sololearn from "../assets/edu/sololearn.png";
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
  {
    title: "Online Courses",
    institution: "SoloLearn",
    period: "Ongoing",
    image: sololearn,
    linkUrl: "https://www.sololearn.com/profile/12164800",
    linkLabel: "View Profile",
    tags: [{ name: "self-learning", color: "blue-text-gradient" }],
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
