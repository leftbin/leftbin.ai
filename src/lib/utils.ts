import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function generateExcerpt(
  content: string,
  maxLength: number = 500
): string {
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---/, "");

  const cleanText = contentWithoutFrontmatter
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/^[-*_]{3,}$/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/_{1,2}([^_]+)_{1,2}/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\|.*\|/g, "")
    .replace(/\n\s*\n/g, "\n")
    .replace(/\s+/g, " ")
    .trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  const truncated = cleanText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}
