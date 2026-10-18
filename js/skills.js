/**
 * skills.js
 * Builds the Skills inventory from the data in js/skills-data.js.
 *
 * Each skill becomes a square slot. Choosing a slot fills the box above the
 * grid with the skill's name and a short note. To add or change a skill, edit
 * skills-data.js; this file does not need to change.
 */
(function () {
  'use strict';

  const detail = document.getElementById('detail');
  const inventory = document.getElementById('inventory');
  const slots = [];   // every slot button, kept so the previous selection can be cleared

  /** Mark one slot as chosen and show its details. */
  function select(button, group, skill) {
    slots.forEach(function (slot) {
      slot.setAttribute('aria-pressed', 'false');
    });
    button.setAttribute('aria-pressed', 'true');

    const title = document.createElement('h3');
    title.textContent = skill.name;

    const text = document.createElement('p');
    text.className = 'meta';
    text.textContent = skill.note
      ? group.title + ' · ' + skill.note
      : 'Listed under ' + group.title.toLowerCase() + '.';

    detail.textContent = '';            // clear the previous skill
    detail.append(title, text);
  }

  /** Create one slot button. */
  function createSlot(group, skill) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'slot';
    button.textContent = skill.badge;                 // the short label drawn in the slot
    button.title = skill.name;                        // tooltip on hover
    button.setAttribute('aria-label', skill.name);    // screen readers read the full name
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', function () {
      select(button, group, skill);
    });
    return button;
  }

  /** Build every group: a caption followed by a grid of slots. */
  function render() {
    window.SKILL_GROUPS.forEach(function (group, groupIndex) {
      const caption = document.createElement('div');
      caption.className = 'label';
      caption.textContent = group.title;

      const grid = document.createElement('div');
      grid.className = 'grid';
      inventory.append(caption, grid);

      group.skills.forEach(function (skill, skillIndex) {
        const button = createSlot(group, skill);
        grid.append(button);
        slots.push(button);

        // Start with the first skill selected so the detail box is never empty.
        if (groupIndex === 0 && skillIndex === 0) {
          select(button, group, skill);
        }
      });
    });
  }

  render();
})();
