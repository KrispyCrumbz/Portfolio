/**
 * theme.js
 * Day/night switch.
 *
 * The colours themselves live in css/tokens.css. This file only decides
 * which theme is active:
 *   - no choice made  -> follow the operating system (prefers-color-scheme)
 *   - button pressed  -> set data-theme="light" or "dark" on <html>
 *
 * After every change it fires a "themechange" event so the landscape in
 * js/scene.js can re-read its colours.
 */
(function () {
  'use strict';

  const root = document.documentElement;
  const button = document.getElementById('mode');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const STORAGE_KEY = 'yk-theme';

  /** The theme on screen right now: an explicit choice beats the OS setting. */
  function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
  }

  /** The button offers the theme you are not in. */
  function updateButtonLabel() {
    button.textContent = currentTheme() === 'dark' ? 'Day mode' : 'Night mode';
  }

  /** Refresh the label and tell the rest of the page the colours changed. */
  function announce() {
    updateButtonLabel();
    document.dispatchEvent(new Event('themechange'));
  }

  // Restore the visitor's last choice. Storage can be blocked (private windows,
  // strict browser settings), so every access is wrapped in try/catch.
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      root.dataset.theme = saved;
    }
  } catch (error) {
    /* no saved choice available; follow the system theme */
  }

  button.addEventListener('click', function () {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      /* the choice still applies for this visit */
    }
    announce();
  });

  // If the OS theme flips while no explicit choice is set, follow it.
  if (systemDark.addEventListener) {
    systemDark.addEventListener('change', announce);
  }

  announce();   // set the initial label and redraw the scene with any restored theme
})();
