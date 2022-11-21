function solution(board, moves) {
  let pick = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (board[j][moves[i] - 1] === pick[pick.length - 1]) {
          board[j][moves[i] - 1] = 0;
          pick.pop();
          count += 2;
          break;
        }
        pick.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}
