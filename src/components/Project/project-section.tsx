import { projects } from "@src/config/projects"

export default function ProjectSection() {
  return (
    <section className="w-full max-w-4xl mt-7">
      <h1 className="text-2xl font-bold mb-3 z-50">Featured projects</h1>
      <div className="flex flex-col gap-1">
        {projects.map((project, index) => (
          <a key={index} href={project.links["Website"]} target="_blank" className="">
            <h1><span className="underline font-semibold">{project.name}</span> - {project.slogan}</h1>
          </a>
        ))}
      </div>
    </section>
  )
}