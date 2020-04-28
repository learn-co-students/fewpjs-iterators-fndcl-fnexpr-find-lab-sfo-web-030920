const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(array) {
  const winRecord = array.find((record) => {
    return record.result === "W";
  });
  if (winRecord) {
    return winRecord.year;
  }
}
