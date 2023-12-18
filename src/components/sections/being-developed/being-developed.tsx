import style from "./being-developed.module.scss";
import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
1;
import ElementHourglass from "@/components/elements/hourglass/hourglass";

const social = [
  {
    title: "GitHub",
    link: "https://github.com/TakedaGalaxy",
    Icon: PiGithubLogoFill,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/luiz-gustavo-takeda-a179291b8/",
    Icon: PiLinkedinLogoFill,
  },
];

export default function SectionBeingDeveloped() {
  return (
    <section id={style.SectionBeingDeveloped}>
      <div className={style.container}>
        <h1>
          Em Desenvolvimento <br />
          🤝
        </h1>
        <div className={style.containerLinks}>
          {social.map(({ title, link, Icon }, index) => (
            <a
              key={index}
              className={style.link}
              href={link}
              target="_blank"
              title={title}
            >
              <button className={style.button}>
                <Icon />
                {title}
              </button>
            </a>
          ))}
        </div>
        <ElementHourglass />
      </div>
    </section>
  );
}
