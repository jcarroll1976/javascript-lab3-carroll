let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
];

let newSubmission = [];
let newName = "";
let newScore = 0;
let newDate = "";
function addSubmission(newSubmission,newName,newScore,newDate) {
    let newObject = ({name: newName,score: newScore,date: newDate});
    if(newScore >= 60) {
        newObject.passed = "true";
    } else if(newScore < 60) {
        newObject.passed = "false";
    }
    newSubmission.push(newObject);
    };

 let newSubmit = submissions.concat(newSubmission);

function deleteSubmissionByIndex(newSubmit,index) {
    newSubmit.splice(index,1)
}

function findSubmissionByName(array,name) {
    const findName = (person) => {
        return person.name === name;
    };
    const index = array.findIndex(findName);
    array.splice(index,1);
}

function editSubmission(array,index,score){
    array[index].score = score;
    if(score >= 60) {
    array[index].passed = true;
    } else {
        array[index].passed = false;
    }
}

function findSubmissionByName(name) {
   const findStudent= (element) => {
       return element.name === name;
   };
   let foundPerson = array.find(findStudent);
   return foundPerson;
}

function findLowestScore(array) {
    let lowestScore = array[0];
    array.forEach(student)  {
        if(student.score < lowestScore.score) {
            lowestScore = student;
        } return lowestScore;
    })


function findAverageScore(array) {
    let totalScores = 0;
    for (let student of array) {
        totalScores += student.score;
    }
    const average = totalScores/ array.length;
    return average;
};
