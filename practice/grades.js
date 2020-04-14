function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++) {
      if (grades[i] >= 38) {
        var marks = Math.ceil(grades[i] / 5) * 5
        
        if (marks - grades[i] < 3) {
          grades[i] = marks
        }
      }
    }
  
    return grades
  }
  
  console.log(gradingStudents([73,67,38,33]))