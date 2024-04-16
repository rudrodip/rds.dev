import type { Repository } from "@src/types/github";
import { getPinnedRepos } from "@src/lib/github";
import ProjectSm from "./project-sm";
import { env } from "@env.mjs";

export default async function PinnedProjects() {
  const pinnedRepos = await getPinnedRepos('rudrodip', env.GITHUB_AUTH_TOKEN);

  return (
    <section className="w-full max-w-lg mx-auto h-full grid grid-cols-1 gap-3">
      <h1 className="text-2xl font-xl mb-4">Pinned repositories</h1>
      {
        pinnedRepos.map((repo: Repository) => (
          <ProjectSm key={repo.name} {...repo} />
        ))
      }
    </section>
  )
}