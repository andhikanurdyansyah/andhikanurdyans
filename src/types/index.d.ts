export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  companyUrl?: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

/**
 * ===== NEW TYPES =====
 */

export type TEducation = {
  degree: string;        // ex: "Bachelor of Computer Science"
  institution: string;   // ex: "Universitas Terbuka"
  location?: string;     // ex: "Indonesia"
  period: string;        // ex: "2021 – Present"
  details?: string[];    // bullet points
};

export type TCertification = {
  name: string;             // ex: "AWS Certified Cloud Practitioner"
  issuer: string;           // ex: "Amazon Web Services"
  date?: string;            // ex: "2024-06" atau "June 2024"
  credentialUrl?: string;   // link ke sertifikat (Credly/Drive/dll)
  credentialId?: string;    // optional ID sertifikat
};

/**
 * ===== LEGACY (DEPRECATED) — boleh dihapus setelah migrasi komponen =====
 */

/** @deprecated Ganti ke TCertification */
export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

/** @deprecated Ganti ke TEducation (section/komponen berbeda) */
export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

/**
 * ===== Other unchanged types =====
 */

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
