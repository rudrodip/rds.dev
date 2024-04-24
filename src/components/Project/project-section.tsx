import { projects } from "@src/config/projects"
import type { Project } from "@src/types"
import Image from "next/image"

export default function ProjectSection() {
  return (
    <section className="w-full max-w-4xl">
      <h1 className="head-text-md">Featured projects</h1>
      <div className="">
        {projects.map((project, index) => (
          <ProjectPreview key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

const ProjectPreview = ({ name, slogan, description, relatedRepos, media, tech, links, achievements }: Project) => {
  return (
    <section className="w-full flex justify-between">
      <div className="w-full space-y-2">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-sm">{slogan}</p>
        <p className="text-sm">{description.slice(0, 300)}...</p>
      </div>
      <Image 
        src={media.images[0]}
        alt={name}
        width={400}
        height={250}
        className="w-full h-auto"
      />
    </section>
  )
}