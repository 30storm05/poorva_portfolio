// Utility functions for the portfolio
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Image optimization utility
export function getOptimizedImageUrl(src: string, width?: number, quality?: number): string {
  if (src.startsWith('/images/')) {
    // For local images, you can implement Next.js Image optimization here
    return src;
  }
  
  // For external images (Unsplash, etc.), add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (quality) url.searchParams.set('q', quality.toString());
    return url.toString();
  }
  
  return src;
}

// Contact form validation
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export function validateContactForm(data: ContactFormData): string[] {
  const errors: string[] = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  }
  
  return errors;
}

// Animation utilities
export const fadeInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Local storage utilities for theme, preferences, etc.
export function getLocalStorage(key: string, defaultValue?: any) {
  if (typeof window !== 'undefined') {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
}

export function setLocalStorage(key: string, value: any) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }
}