// tests/unit/triliza.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { winner, emptyCells, bestMove, chooseMove } from '../../src/scripts/triliza.mjs';

const B = (s) => [...s].map((c) => (c === '.' ? null : c));
const seq = (...xs) => () => xs.shift();

test('row win', () => assert.deepEqual(winner(B('YYY.CC...')), { mark: 'Y', line: [0, 1, 2] }));
test('diagonal win', () => assert.equal(winner(B('C.Y.CY..C')).mark, 'C'));
test('draw', () => assert.deepEqual(winner(B('YCYYCCCYY')), { mark: 'draw', line: [] }));
test('game not over', () => assert.equal(winner(B('Y........')), null));
test('emptyCells', () => assert.deepEqual(emptyCells(B('YY..C....')), [2, 3, 5, 6, 7, 8]));
test('takes a win', () => assert.equal(bestMove(B('CC.YY....')), 2));
test('blocks a win', () => assert.equal(bestMove(B('YY..C....')), 2));

test('hard never loses, whoever starts', () => {
  const explore = (board, toMove) => {
    const res = winner(board);
    if (res) { assert.notEqual(res.mark, 'Y', board.map((c) => c ?? '.').join('')); return; }
    if (toMove === 'C') { const b = [...board]; b[chooseMove(board, 'hard')] = 'C'; explore(b, 'Y'); return; }
    for (const i of emptyCells(board)) { const b = [...board]; b[i] = 'Y'; explore(b, 'C'); }
  };
  explore(Array(9).fill(null), 'Y');
  explore(Array(9).fill(null), 'C');
});

test('easy sometimes misses: a low roll picks a random free bubble', () => {
  assert.equal(chooseMove(B('YY..C....'), 'easy', seq(0.1, 0.99)), 8);
});
test('easy usually plays well: a high roll plays the best move', () => {
  assert.equal(chooseMove(B('YY..C....'), 'easy', seq(0.9)), 2);
});
test('hard ignores the roll', () => {
  assert.equal(chooseMove(B('YY..C....'), 'hard', seq(0.1, 0.99)), 2);
});
