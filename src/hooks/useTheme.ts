"use client";

import { useState, useEffect, useCallback } from 'react';
import { Theme, ThemeContextType } from '@/types';

const THEME_STORAGE_KEY = 'portfolio-theme';

export function useTheme(): ThemeContextType {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    if (storedTheme && ['light', 'dark'].includes(storedTheme)) {
      setThemeState(storedTheme);
    } else {
      // If no stored theme or invalid theme, default to light
      setThemeState('light');
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Apply the selected theme directly
    root.classList.add(theme);
    
    // Store theme preference
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
  };
}
