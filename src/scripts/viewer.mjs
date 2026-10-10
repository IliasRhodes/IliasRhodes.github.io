// src/scripts/viewer.mjs — full-size photo view. Without JavaScript each thumbnail is a plain link to the big file.
export function initViewer(list, dialog) {
  const links = [...list.querySelectorAll('a[data-index]')];
  const img = dialog.querySelector('[data-viewer-img]');
  const count = dialog.querySelector('[data-count]');
  let at = 0;

  const show = (i) => {
    at = (i + links.length) % links.length;
    const thumb = links[at].querySelector('img');
    img.src = links[at].href;
    img.alt = thumb.alt;
    count.textContent = `${at + 1} / ${links.length}`;
  };

  links.forEach((a, i) => a.addEventListener('click', (e) => {
    e.preventDefault();
    show(i);
    dialog.showModal();
  }));
  dialog.querySelector('[data-prev]').addEventListener('click', () => show(at - 1));
  dialog.querySelector('[data-next]').addEventListener('click', () => show(at + 1));
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(at - 1);
    if (e.key === 'ArrowRight') show(at + 1);
  });
  dialog.addEventListener('close', () => links[at].focus()); // land on the photo you were last looking at
}
