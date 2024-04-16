import { Separator } from "@src/components/ui/separator";
import PinnedProjects from "./pinned-projects";
import RecentProjects from "./recent-projects";

export default function GithubSection() {
  return (
    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
      <PinnedProjects />
      <RecentProjects />
    </section>
  )
}