/**
 * contact.js
 * "Copy" button next to the email address.
 *
 * The page does not use a mailto: link. Many people have no mail app set up,
 * so the address is shown as text that can be copied in one tap.
 */
(function () {
  'use strict';

  const button = document.getElementById('copy');
  const email = document.getElementById('email');

  /** Fallback when the Clipboard API is blocked: select the text so the visitor can copy it. */
  function selectEmail() {
    try {
      const range = document.createRange();
      range.selectNodeContents(email);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    } catch (error) {
      /* nothing more to try */
    }
  }

  /** Flash "Copied" on the button for a moment. */
  function confirmCopy() {
    button.textContent = 'Copied';
    setTimeout(function () {
      button.textContent = 'Copy';
    }, 1500);
  }

  button.addEventListener('click', function () {
    try {
      navigator.clipboard.writeText(email.textContent.trim()).then(confirmCopy, selectEmail);
    } catch (error) {
      selectEmail();   // navigator.clipboard is missing in some embedded views
    }
  });
})();
