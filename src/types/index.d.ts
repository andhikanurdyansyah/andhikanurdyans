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

// === Tambahan Baru ===

export type TEducation = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  icon: string;
  iconBg: string;
  date: string;
};

export type TCertification = {
  name: string;
  company: string;
  image: string;
  link: string;
};
