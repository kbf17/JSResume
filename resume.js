//variables
var name = 'kristine fitzgerald';
var career = 'Web Programmer';
var about = 'blah blah blah about me';
var interests = ['Video Games', 'Delicious Tea', 'Mandolin', 'Psychological Horror Anime'];
var jobs = [
    job1 = {
        position: 'Baker',
        company: 'Octane Coffee',
        description: 'I bake tasty things'
    },
    job2 = {
        position: 'Manager',
        company: 'Babalu',
        description: 'I told people to clean things and for some reason they asked me for life advice.'
    },
    job3 = {
        position: 'Camp Counselor & Resident Advisor',
        company: 'Space Camp',
        description: 'Someone put me in charge of children for a week at a time. They were all nerds and thought I was cool because I was QueenNerd.'
    }
];
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
//"Extra-Credit Version"
console.log('Jobs I\'ve had before:');
for(var i = 0; i < jobs.length; i++) {
    console.log(jobs[i].position + ' at ' + jobs[i].company + ' - ' + jobs[i].description);
};
console.log('Skills and Things I Has:');
function displaySkill(skills, isCool) {
    if(isCool==true)
        console.log('* Check It: ' + skills);
    else {
        console.log('* ' + skills);
    };
};
displaySkill('Riding Bikes', false);
displaySkill('Speed Reading', false);
displaySkill('Sick Dance Moves', true);
displaySkill('Magical Girl Transformations', true);
displaySkill('Guessing the Killer in Movies', false);

// The long way, original
// displayPosition ('Baker', 'Ocatane Coffee', ' - I bake tasty things');
// displayPosition ('Manager', 'Babalu', ' - I told people to clean things and gave them life advice.');
// displayPosition ('Camp Counselor & Resident Advisor', 'Space Camp', ' - Someone put me in charge of children for a week at a time. They were all nerds so they thought I was cool because I was QueenNerd.');