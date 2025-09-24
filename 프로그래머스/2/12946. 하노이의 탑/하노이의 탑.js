function solution(n) {
  const result = [];

  function hanoi(n, start, end, aux) {
    if (n === 1) {
      result.push([start, end]);
      return;
    }
    // 1. n-1개를 start → aux
    hanoi(n - 1, start, aux, end);
    // 2. 가장 큰 원판 start → end
    result.push([start, end]);
    // 3. n-1개를 aux → end
    hanoi(n - 1, aux, end, start);
  }

  hanoi(n, 1, 3, 2);
  return result;
}
