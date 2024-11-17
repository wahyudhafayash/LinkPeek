// utils.ts (or inside Button.tsx)
export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
