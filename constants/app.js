import GitHubLogo from "statics/github.png";
import LinkedInLogo from "statics/linkedin.png";
import TwitterLogo from "statics/twitter.png";

export const COMPANY_NAME = "OpenTable";

export const DEPARTMENT_NAME = "Tech US";

export const SITE_NAME = `${COMPANY_NAME} ${DEPARTMENT_NAME} Blog`;

export const NAVBAR_LINKS = [
  {
    href: "/posts/about-this-blog",
    text: "About",
  },
  {
    href: "/posts",
    text: "Posts",
  },
  {
    href: "/#careers",
    text: "Careers",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/opentable",
    image: GitHubLogo,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/opentable",
    image: LinkedInLogo,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/opentabletechuk",
    image: TwitterLogo,
  },
];

export const LEARN_MORE_LINKS = [
  {
    href: "https://www.opentable.com/about/",
    text: "About OpenTable",
  },
  {
    href: "https://www.opentable.com/careers/technology/",
    text: "Technology careers",
  },
  {
    href: "https://www.opentable.com",
    text: "Diner website",
  },
];

export const HOME_TITLE = `Welcome to the ${SITE_NAME}`;

export const HOME_SUBTITLE =
  "At the intersection of food, culture and technology within the US";

export const HOME_META_DESCRIPTION =
  "At the intersection of food, culture and technology. A place where we like to share our passions and introduce you to a whole new world of fabulous dining and amazing technology.";
