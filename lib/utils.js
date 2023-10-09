import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const validateString = (value) => {
  if (!value || typeof value !== "string") {
    return false;
  }
  return true;
};
