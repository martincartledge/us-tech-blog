import FrontendImg from "statics/frontend.png";
import BackendImg from "statics/backend.png";
import CultureImg from "statics/culture.png";
import EngineeringImg from "statics/engineering.png";
import EventsImg from "statics/events.png";
import InfrastructureImg from "statics/infrastructure.png";
import DefaultImg from "statics/defaultCategory.png";

export const readingTime = (postContent) => {
  const wpm = 225;
  const words = postContent.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export const getCategoryImage = (category) => {
  switch (category) {
    case "backend":
      return BackendImg;
    case "culture":
      return CultureImg;
    case "engineering":
      return EngineeringImg;
    case "events":
      return EventsImg;
    case "frontend":
      return FrontendImg;
    case "infrastructure":
      return InfrastructureImg;
    default:
      return DefaultImg;
  }
};
