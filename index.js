const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(a) {
  let win = a.find((record) => {
    if (record.result == "W") {
      return record
    }
  });
  if(win)
  return win.year;
}