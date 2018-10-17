const boardState = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

// 그리기
function drawBoard() {
  // stateBoard를 순회하여 Dom element에 class를 추가 삭제 하는 함수
  document.querySelectorAll('.row').forEach((row, rowIndex) => {
    row.querySelectorAll('.col').forEach((col, colIndex) => {
      // 상태 확인하기
      if (boardState[rowIndex][colIndex] === 1) {
        col.classList.add('checked');
      }
    });
  })
}
function bingo(arr) {
  // 가로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  // 세로줄 확인 (루프)
  for (let i = 0; i < 5; i++) {
    // '이제까지 본 것이 전부 x표시가 되어있다'
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][i] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  {
    // 반대쪽 대각선 확인 (루프)
    let checked = true
    for (let j = 0; j < 5; j++) {
      if (arr[j][4 - j] === 0) {
        checked = false
      }
    }
    if (checked) {
      return true
    }
  }

  return false
}

// 상태변경하기

drawBoard();
