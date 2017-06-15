//variables
var name = 'kristine fitzgerald';
var career = 'web programmer';
var about = 'blah blah blah about me';
var interests = ['Video Games', 'Delicious Tea', 'Mandolin', 'Psychological Horror Anime'];
// var company = [' Ocatane Coffee ', ' Babalu ', ' Space Camp '];
// var position = ['Baker ', 'Manager ', 'Camp Counselor & Resident Advisor '];
// var description = [
//         '- I bake tasty things',
//         '- I told people to clean things and gave them life advice',
//         '- Someone put me in charge of children for a week at a time. They were all nerds so they thought I was cool because I was QueenNerd.'
// ];


var upName = name.toUpperCase();
console.log('Name:', upName);
console.log('Career:', career);
console.log('Description:', about);
console.log('My Uniteresting Interests:')
for(var i = 0; i < interests.length; i++) {
    console.log(interests[i]);
};
//functions
function displayPosition(position, company, description) {
   console.log(position + ' at ' + company + description);
} ;
console.log('Jobs I\'ve had before:');
displayPosition ('Baker', 'Ocatane Coffee', ' - I bake tasty things');
displayPosition ('Manager', 'Babalu', ' - I told people to clean things and gave them life advice.');
displayPosition ('Camp Counselor & Resident Advisor', 'Space Camp', ' - Someone put me in charge of children for a week at a time. They were all nerds so they thought I was cool because I was QueenNerd.');
console.log('Skills and Things I Has:');


function displaySkill(skills, isCool) {
    if(isCool==true)
        console.log('* Check It: ' + skills);
    else {
        console.log('* ' + skills);
    };
};
displaySkill('Riding Bikes', true);
displaySkill('Speed Reading', false);
displaySkill('Sick Dance Moves', true);
displaySkill('Make Pie', false);