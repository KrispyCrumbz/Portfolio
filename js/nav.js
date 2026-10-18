/**
 * nav.js
 * Navigation between the title screen and the window's panels.
 *
 * Any element with data-go="name" is a navigation control:
 *   - a name that matches a panel (id="p-name") opens that panel;
 *   - "menu" (or anything unknown) returns to the title screen.
 *
 * The current panel is mirrored in the URL hash (#projects), so a section
 * can be linked to directly and the Back button state survives a reload.
 */
(function () {
  'use strict';

  const $ = function (selector) { return document.querySelector(selector); };
  const $$ = function (selector) { return Array.from(document.querySelectorAll(selector)); };

  const titleScreen = $('#title');
  const win = $('#win');
  const body = $('#body');

  // Section names come from the panels in the page, so adding a panel to
  // index.html needs no change here.
  const sections = $$('.panel').map(function (panel) {
    return panel.id.replace('p-', '');
  });

  let lastSection = sections[0];   // remembered so "Menu" can hand focus back (see below)

  /** Reflect the open panel in the address bar without adding history entries. */
  function setHash(name) {
    try {
      history.replaceState(null, '', name ? '#' + name : location.pathname + location.search);
    } catch (error) {
      /* some embedded views block the History API; navigation still works */
    }
  }

  /** Show one panel, or the title screen when `name` is not a known section. */
  function show(name) {
    if (!sections.includes(name)) {
      win.hidden = true;
      titleScreen.hidden = false;
      setHash('');
      return;
    }

    lastSection = name;
    titleScreen.hidden = true;
    win.hidden = false;

    // Exactly one panel is visible at a time.
    $$('.panel').forEach(function (panel) {
      panel.hidden = panel.id !== 'p-' + name;
    });

    // Mark the matching tab so CSS can highlight it.
    $$('.bar .px--tab').forEach(function (tab) {
      if (tab.dataset.go === name) {
        tab.setAttribute('aria-current', 'page');
      } else {
        tab.removeAttribute('aria-current');
      }
    });

    body.scrollTop = 0;   // every panel opens at its top
    setHash(name);
  }

  /* ---------- Clicks ---------- */

  document.addEventListener('click', function (event) {
    const target = event.target.closest('[data-go]');
    if (!target) {
      return;
    }
    const destination = target.dataset.go;
    show(destination);
  });

  /* ---------- Start-up ---------- */

  // Open the section named in the URL hash, otherwise start on the title screen.
  const requested = location.hash.slice(1);
  show(sections.includes(requested) ? requested : 'menu');
})();
