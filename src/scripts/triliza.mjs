// src/scripts/triliza.mjs — τρίλιζα rules and the pharmacy's play. 'Y' = you (capsule), 'C' = pharmacy (tablet).
export const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const MISS_RATE = 0.4; // Easy: how often the pharmacy plays a random bubble instead of its best one

export const emptyCells = (board) => board.flatMap((c, i) => (c ? [] : [i]));

export function winner(board) {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return { mark: board[a], line };
  }
  return board.every(Boolean) ? { mark: 'draw', line: [] } : null;
}

function score(board, toMove, depth) {
  const res = winner(board);
  if (res) return res.mark === 'C' ? 10 - depth : res.mark === 'Y' ? depth - 10 : 0;
  const next = toMove === 'C' ? 'Y' : 'C';
  const scores = emptyCells(board).map((i) => { const b = [...board]; b[i] = toMove; return score(b, next, depth + 1); });
  return toMove === 'C' ? Math.max(...scores) : Math.min(...scores);
}

export function bestMove(board) {
  let best = -Infinity;
  let move = -1;
  for (const i of emptyCells(board)) {
    const b = [...board];
    b[i] = 'C';
    const s = score(b, 'Y', 1);
    if (s > best) { best = s; move = i; }
  }
  return move;
}

export function chooseMove(board, level, rng = Math.random) {
  if (level === 'easy' && rng() < MISS_RATE) {
    const free = emptyCells(board);
    return free[Math.floor(rng() * free.length)];
  }
  return bestMove(board);
}
