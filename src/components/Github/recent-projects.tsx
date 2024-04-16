import type { Repository } from "@src/types/github";
import { getRecentRepos } from "@src/lib/github";
import ProjectSm from "./project-sm";
import { env } from "@env.mjs";

export default async function RecentProjects() {
  const recentRepos = await getRecentRepos('rudrodip', env.GITHUB_AUTH_TOKEN);

  return (
    <section className="w-full max-w-lg mx-auto h-full grid grid-cols-1 gap-3">
      <h1 className="text-2xl font-xl mb-4">Recent repositories</h1>
      {
        recentRepos.map((repo: Repository) => (
          <ProjectSm key={repo.name} {...repo} />
        ))
      }
    </section>
  )
}