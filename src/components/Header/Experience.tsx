import { experiencesConfig } from "@src/config/experience";
import { Experience } from "@src/types";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative mt-10 overflow-hidden
      after:content['']
      after:to-transparent
      after:from-background
      after:bg-gradient-to-t
      after:right-0
      after:bottom-[-30px]
      after:w-full
      after:h-20
      after:z-10
      after:absolute"
    >
      <h1 className="text-4xl primary-gradient font-bold tracking-tighter mb-3 z-50">
        Experiences
      </h1>
      <div className="relative flex flex-col gap-5 justify-between h-[350px] overflow-y-scroll">
        {experiencesConfig.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

const Experience = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex gap-2 items-start text-md full">
      <span className="mt-2 w-3 h-3 animate-pulse rounded-full icon-glow-muted"></span>
      <div>
        <h1 className="text-lg primary-gradient mb-1">{experience.title}</h1>
        <div className="">
          <a
            href={experience.company.url}
            target="_blank"
            className="hover:underline font-semibold primary-gradient"
          >
            {experience.company.name}
          </a>
          {" | "}
          <span>{experience.employmentType}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {experience.start} - {experience.end}
        </p>
        <a href={experience.location.url} className="my-1 text-sm">
          {experience.location.name}
        </a>
        <ul className="mt-3 text-muted-foreground">
          {experience.description.map((desc, index) => (
            <li key={index} className="max-w-lg text-sm">
              - {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
