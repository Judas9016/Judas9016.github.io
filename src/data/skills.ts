export interface Skill {
  id: number;
  name: string;
  iconPath: string;
  category: "languages" | "frameworks" | "backend" | "tools";
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    iconPath: "/icons/js.svg", // Coloca el SVG en /public/icons
    category: "languages",
  },
  {
    id: 2,
    name: "React",
    iconPath: "/icons/react.svg",
    category: "frameworks",
  },
  {
    id: 3,
    name: "Node.js",
    iconPath: "/icons/node.svg",
    category: "backend",
  },
];
