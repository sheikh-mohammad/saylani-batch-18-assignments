var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];

function calculateResult() {
  for (var i = 0; i < marks.length; i++) {
    var mark = marks[i];
    if (mark >= 40) {
      document.writeln("Marks: " + mark + " - Grade: Pass" + "<br>");
    } else {
      document.writeln("Marks: " + mark + " - Grade: Fail" + "<br>");
    }
  }
}
