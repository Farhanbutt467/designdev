export type ActionBtnType = {
  enable?: boolean;
  label: string;
  link: string;
};

export type TWorkType = {
  data: {
    draft: boolean;
    id: number;
    title: string;
    image: string;
    date: string;
    tags: string[];
    icon?: string;
    ctaText?: string;
    ctaMail?: string;
    action_btn?: ActionBtnType;
    meta?: {
      meta_title: string;
      meta_description: string;
    };
  };
  slug: string;
  content: any;
};

export type TServiceType = {
  data: {
    draft: boolean;
    id: number;
    title: string;
    icon:
      | string
      | {
          light: string;
          dark: string;
        };
    bg_video: string;
    image: string;
    description: string;
    contactTitle: string;
    btn_text: string;
    features: string[];
    frameworks?: string[];
    faq_title: string;
    faq_description?: string;
    faqs: {
      question: string;
      answer: string;
    }[];
    meta?: {
      meta_title: string;
      meta_description: string;
    };
  };
  slug: string;
  content: any;
};

type TTestimonialList = {
  icon: string;
  text: string;
  author: {
    name: string;
    post: string;
    publisher: {
      logo: {
        light: string;
        dark: string;
      };
    };
  };
};

type TTeamMemberType = {
  data: {
    id: number;
    name: string;
    post: string;
    social: string;
    social_link: string;
    avatar: string;
    image: string;
    description: string;
  };
  slug: string;
};

type TBlogType = {
  data: {
    draft: boolean;
    id: number;
    title: string;
    title2?: string;
    short_description?: string;
    author_name?: string;
    author_image?: string;
    location?: string;
    image: string;
    thumb_img: string;
    tags: {
      name: string;
      link: string;
    }[];
    published_date: string;
    likes: number;
    comments: number;
    shares: number;
    views: number;
  };

  slug: string;
  content: any;
};

type TjobDataType = {
  title: string;
  vacancy: number;
  experience: string;
  working_days: string;
  working_hours: string;
  salary: string;
  deadline: string;
  location: string;
  post_date: string;
  job_type: string;
  bg_image: string;
};

type TJobType = {
  data: TjobDataType;
  slug: string;
  content: any;
};

type TAboutFaqs = {
  data: {
    title: string;
    image: string;
    video: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
};

type TSeoClientsFeedback = {
  clients_avatar: {
    light: string;
    dark: string;
  };
  title: string;
  subtitle: string;
  description: string;
  review_title: string;
  clients: number;
  rating: number;
};

export type TAiAgencyHero = {
  title: string;
  shape: {
    light: string;
    dark: string;
  };
  client_img: {
    light: string;
    dark: string;
  };
  customers: string;
  info: {
    thumb: {
      light: string;
      dark: string;
    };
    description: string;
    action_btn: ActionBtnType;
  };
  image: string;
  feature_text: string;
};
