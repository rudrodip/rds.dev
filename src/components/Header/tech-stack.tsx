export default function TechStack() {
  return (
    <section className="mt-7">
      <h1 className="text-2xl font-bold mb-3 z-50">Tech I use day to day</h1>
      <ul className="">
        {Object.entries(techStack).map(([key, value]) => (
          <KVRenderer key={key} category={key} value={value} />
        ))}
      </ul>
    </section>
  )
}

const KVRenderer = ({ category, value }: Record<string, string>) => {
  return (
    <li className="list-disc flex gap-2 font-thin">
      <span className="font-semibold">{category}: </span>
      <span className="text-muted-foreground">{value}</span>
    </li>
  )
}

const techStack = {
  Languages: "Typescript, Python, Go, C++, Rust",
  Frontend: "Next.js, React, TailwindCSS, Framer motion, Shadcn UI",
  Backend: "Hono, FastAPI, Express, Flask, Fiber, Gorilla Mux",
  Web3: "Solana web3.js, Ether.js",
  Database: "PostgreSQL, MySQL, MongoDB, Redis, SQLite",
  Mobile: "React Native, Expo",
}