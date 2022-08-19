import GitHubLogo from "statics/github.png";
import LinkedInLogo from "statics/linkedin.png";
import TwitterLogo from "statics/twitter.png";

export const COMPANY_NAME = "OpenTable";

export const TEAM_NAME = "Tech UK";

export const SITE_TITLE = `${COMPANY_NAME} ${TEAM_NAME}`;

export const NAVBAR_LINKS = [
  {
    href: "/posts",
    text: "All posts",
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
    href: "https://www.opentable.co.uk/about/",
    text: "About OpenTable",
  },
  {
    href: "https://www.opentable.com/careers/technology/",
    text: "Technology careers",
  },
  {
    href: "https://www.opentable.co.uk",
    text: "Diner website",
  },
];
