// src/scripts/triliza-ui.mjs — wires the board to the rules; all text the player hears lives here.
import { winner, chooseMove } from './triliza.mjs';

const NAMES = { Y: 'your capsule', C: "the pharmacy's tablet" };
const RESULT = { Y: 'You win.', C: 'The pharmacy wins.', draw: 'Draw.' };
const where = (i) => `row ${Math.floor(i / 3) + 1}, column ${(i % 3) + 1}`;
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const STEP = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 3, ArrowUp: -3 };

export function initTriliza(root, { rng = Math.random, delay = 450 } = {}) {
  const cells = [...root.querySelectorAll('[data-cell]')];
  const status = root.querySelector('[data-status]');
  const soundBtn = root.querySelector('[data-sound]');
  const tally = { Y: root.querySelector('[data-you]'), C: root.querySelector('[data-pharmacy]'), draw: root.querySelector('[data-draws]') };
  const level = () => root.querySelector('input[name="level"]:checked').value;
  let board, over, busy, games = 0, sound = false, audio;

  for (const sel of ['[data-board]', '[data-controls]', '[data-score]']) root.querySelector(sel).hidden = false;

  function click() {
    if (!sound) return;
    audio ??= new AudioContext();
    const osc = audio.createOscillator(), gain = audio.createGain();
    osc.frequency.value = 520;
    gain.gain.setValueAtTime(0.08, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.12);
    osc.connect(gain).connect(audio.destination);
    osc.start();
    osc.stop(audio.currentTime + 0.12);
  }

  function paint() {
    cells.forEach((c, i) => {
      c.dataset.mark = board[i] ?? '';
      c.setAttribute('aria-label', `${cap(where(i))}, ${board[i] ? NAMES[board[i]] : 'empty'}`);
      c.setAttribute('aria-disabled', String(Boolean(board[i]) || over || busy));
    });
  }

  function place(i, mark) {
    board[i] = mark;
    cells[i].classList.add('placed');
    click();
    const res = winner(board);
    if (res) {
      over = true;
      tally[res.mark].textContent = String(Number(tally[res.mark].textContent) + 1);
      res.line.forEach((k) => cells[k].classList.add('win'));
    }
    return res;
  }

  function pharmacyTurn(prefix = '') {
    busy = true;
    paint();
    const game = games;
    setTimeout(() => {
      if (game !== games) return; // a New pack was opened while the pharmacy was thinking
      const i = chooseMove(board, level(), rng);
      busy = false;
      const res = place(i, 'C');
      paint();
      status.textContent = `${prefix}The pharmacy took ${where(i)}. ${res ? RESULT[res.mark] : 'Your move.'}`;
    }, delay);
  }

  function play(i) {
    if (over || busy || board[i]) return;
    const res = place(i, 'Y');
    if (res) { paint(); status.textContent = `You took ${where(i)}. ${RESULT[res.mark]}`; return; }
    pharmacyTurn(`You took ${where(i)}. `);
  }

  function focusCell(j) {
    cells.forEach((c, k) => { c.tabIndex = k === j ? 0 : -1; });
    cells[j].focus();
  }

  function newPack() {
    board = Array(9).fill(null);
    over = false;
    busy = false;
    cells.forEach((c) => c.classList.remove('win', 'placed'));
    const pharmacyFirst = games % 2 === 1;
    games++;
    paint();
    if (pharmacyFirst) { status.textContent = 'New pack. The pharmacy goes first.'; pharmacyTurn('New pack. The pharmacy goes first. '); }
    else status.textContent = 'New pack. You go first — pick a bubble.';
  }

  cells.forEach((c, i) => {
    c.addEventListener('click', () => play(i));
    c.addEventListener('keydown', (e) => {
      if (!(e.key in STEP)) return;
      e.preventDefault();
      const edge = (e.key === 'ArrowRight' && i % 3 === 2) || (e.key === 'ArrowLeft' && i % 3 === 0);
      const j = i + STEP[e.key];
      focusCell(edge || j < 0 || j > 8 ? i : j);
    });
  });
  root.querySelector('[data-new]').addEventListener('click', newPack);
  soundBtn.addEventListener('click', () => { sound = !sound; soundBtn.setAttribute('aria-pressed', String(sound)); });

  newPack();
}
