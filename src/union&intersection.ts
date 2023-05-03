type BeginnerDeveloper = {
  name: string;
};

// Intersection
type JuniorDeveloper = BeginnerDeveloper & {
  expertise: string;
  experience: number;
};

type SeniorDeveloper = JuniorDeveloper & {
  isTeamLead: boolean;
  level: "pro" | "semipro" | "leader";
};

// Union
// const developer: JuniorDeveloper | SeniorDeveloper = {
//   name: "Anik",
//   expertise: "JS",
//   experience: 1,
// };

const developer: SeniorDeveloper = {
  name: "Anik",
  expertise: "JS",
  experience: 1,
  isTeamLead: true,
  level: "leader",
};
