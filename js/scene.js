/**
 * scene.js
 * Draws the pixel-art landscape behind the title screen.
 *
 * The canvas is only 192 x 108 logical pixels. CSS scales it to fill the
 * window with image-rendering: pixelated, which gives the chunky retro look
 * and keeps drawing cheap.
 *
 * Colours are not hard-coded here. They are read from the CSS tokens in
 * css/tokens.css, so the scene follows the active theme.
 */
(function () {
  'use strict';

  /* ---------- Configuration ---------- */

  const WIDTH = 192;       // logical pixels across
  const HEIGHT = 108;      // logical pixels down
  const FRAME_MS = 100;    // redraw interval: ~10 fps keeps the motion calm and cheap

  // CSS tokens the scene uses (see css/tokens.css).
  const TOKEN_NAMES = [
    'sky-a', 'sky-b', 'sky-c',
    'hill-far', 'hill-near', 'ground',
    'leaf', 'trunk', 'sun', 'cloud'
  ];

  // x position of each pine tree on the near hill.
  const TREE_XS = [10, 27, 44, 61, 124, 141, 158, 176, 187];

  // [x, y, speed] for each drifting cloud.
  const CLOUDS = [[20, 18, 0.5], [88, 30, 0.3], [140, 12, 0.4]];

  /* ---------- Setup ---------- */

  const canvas = document.getElementById('scene');
  const ctx = canvas.getContext('2d');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  let palette = {};        // token name -> colour string, refreshed by readPalette()

  /** Copy the current token values from CSS into the palette. */
  function readPalette() {
    const styles = getComputedStyle(document.documentElement);
    TOKEN_NAMES.forEach(function (name) {
      palette[name] = styles.getPropertyValue('--' + name).trim();
    });
  }

  /* ---------- Drawing helpers ---------- */

  function hexToRgb(hex) {
    return [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16)
    ];
  }

  /** Blend two hex colours; t = 0 gives a, t = 1 gives b. */
  function mix(a, b, t) {
    const from = hexToRgb(a);
    const to = hexToRgb(b);
    const channels = [0, 1, 2].map(function (i) {
      return Math.round(from[i] + (to[i] - from[i]) * t);
    });
    return 'rgb(' + channels.join(',') + ')';
  }

  function rect(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), w, h);
  }

  /* ---------- Terrain ---------- */

  // Height of each hill at column x: a sum of sine waves gives soft rolling ground.
  function farHillY(x) {
    return Math.floor(70 + Math.sin(x * 0.045 + 1) * 6 + Math.sin(x * 0.11) * 3);
  }

  function nearHillY(x) {
    return Math.floor(84 + Math.sin(x * 0.03 + 4) * 7 + Math.sin(x * 0.09 + 2) * 2);
  }

  /* ---------- Layers, drawn back to front ---------- */

  /** Sky as horizontal bands that blend from top colour to horizon. */
  function drawSky() {
    for (let y = 0; y < 84; y += 6) {
      const t = y / 84;
      const color = t < 0.5
        ? mix(palette['sky-a'], palette['sky-b'], t * 2)
        : mix(palette['sky-b'], palette['sky-c'], (t - 0.5) * 2);
      rect(color, 0, y, WIDTH, 6);
    }
  }

  function drawClouds(time) {
    CLOUDS.forEach(function (cloud) {
      const x = ((cloud[0] + time * 0.04 * cloud[2]) % (WIDTH + 40)) - 20;   // wraps around
      const y = cloud[1];
      rect(palette.cloud, x, y, 16, 3);
      rect(palette.cloud, x + 3, y - 2, 9, 2);
      rect(palette.cloud, x + 2, y + 3, 12, 1);
    });
  }

  /** Sun by day, moon by night: the same disc in a different token colour. */
  function drawSun() {
    const radius = 7;
    for (let dy = -radius; dy <= radius; dy++) {
      const half = Math.floor(Math.sqrt(radius * radius - dy * dy));
      rect(palette.sun, 150 - half, 22 + dy, half * 2 + 1, 1);
    }
  }

  function drawHills() {
    for (let x = 0; x < WIDTH; x++) {
      const far = farHillY(x);
      rect(palette['hill-far'], x, far, 1, HEIGHT - far);
    }
    for (let x = 0; x < WIDTH; x++) {
      const near = nearHillY(x);
      rect(palette['hill-near'], x, near, 1, HEIGHT - near);
    }
  }

  /** Pine trees: a trunk and four stacked rows of leaves. */
  function drawTrees() {
    TREE_XS.forEach(function (x) {
      const top = nearHillY(x) + 1 - 10;
      rect(palette.trunk, x, top + 8, 1, 3);
      rect(palette.leaf, x, top, 1, 2);
      rect(palette.leaf, x - 1, top + 2, 3, 2);
      rect(palette.leaf, x - 2, top + 4, 5, 2);
      rect(palette.leaf, x - 3, top + 6, 7, 2);
    });
  }

  function drawGround() {
    rect(palette.ground, 0, HEIGHT - 8, WIDTH, 8);
  }

  /** Draw one complete frame. `time` is in milliseconds. */
  function draw(time) {
    drawSky();
    drawClouds(time);
    drawSun();
    drawHills();
    drawTrees();
    drawGround();
  }

  /* ---------- Animation loop ---------- */

  let lastFrame = 0;

  function loop(now) {
    if (now - lastFrame > FRAME_MS) {
      draw(now);
      lastFrame = now;
    }
    requestAnimationFrame(loop);
  }

  readPalette();
  draw(0);                 // first frame immediately, so there is never a blank canvas
  requestAnimationFrame(loop);
})();
