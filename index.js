function superbowlWin(array) {
  const winRecord = array.find((record) => {
    return record.result === "W";
  });
  if (winRecord) {
    return winRecord.year;
  }
}

// More concise
function superbowlWin(array) {
  const winRecord = array.find((record) => record.result === "W");
  return winRecord ? winRecord.year : undefined;
}
