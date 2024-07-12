function grade(scores){
    let grade;

    if(scores >=90 && scores <= 100) {
        grade = 'A';
    } else if (scores >= 80 && scores <= 89) {
        grade = 'B'
    } else if (scores >= 70 && scores <= 79) {
        grade = 'C'
    } else if (scores >= 60 && scores <= 69) {
        grade = 'D'
    } else {
        grade = 'F';
    }

    console.log(grade);
}

grade(45);