export interface Counter {
  id: string
  number: number
  label: string
}

export const counters: Counter[] = [
  { id: "projects", number: 120, label: "Projects Completed" },
  { id: "experts", number: 45, label: "Expert Freelancers" },
  { id: "clients", number: 98, label: "Satisfied Clients" },
  { id: "years", number: 5, label: "Years Experience" },
]
