const maths = parseInt(prompt("Enter your Maths mark"));
const english = parseInt(prompt("Enter your English mark"));
const physics = parseInt(prompt("Enter your Physics mark"));
const chemistry = parseInt(prompt("Enter your Chemistry mark"));
const biology = parseInt(prompt("Enter your Biology mark"));

// Total Mark 
const totalMark = maths + english + physics + chemistry + biology;

// Average Mark
const average = totalMark / 5;


if (average >= 90) {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is A+`,
    );
} else if (average >= 80 && average <= 89) {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is A`,
    );
} else if (average >= 70 && average <= 79) {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is B`,
    );
} else if (average >= 60 && average <= 69) {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is C`,
    );
} else if (average >= 50 && average <= 59) {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is D`,
    );
} else {
    alert(
        `Total Mark = ${totalMark} \nAverage Mark = ${average} \nYour Grade is F`,
    );
}
