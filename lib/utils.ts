import { clsx, type ClassValue } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPlainTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }

  if (Array.isArray(node)) {
    return node.map(getPlainTextFromReactNode).join('');
  }

  if (React.isValidElement(node)) {
    return getPlainTextFromReactNode(node.props.children);
  }

  return '';
};