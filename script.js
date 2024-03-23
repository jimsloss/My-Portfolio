const images = [
    "images/portfolio1.png",
    "images/jspp.png",
    "images/karensChildcare.png",
];

// let quote = quotes[Math.floor((Math.random()*quotes.length))];

// let hero = heroes[Math.floor((Math.random()*heroes.length))]

// console.log(hero + " says " + quote);
// let joiners = ['and', 'for', 'so','to','it'];
// let words = ['went', 'did', 'was', 'there'];
// let longer =  ["john", "shopping", 'driving', "coughing", 'shop', 'car']


// function changeDef(){
//     // console.log(event.target);
//     console.log("it worked");
//   }

// document.getElementById('myParagraph').onmouseover = changeDef();

// element.addEventListener("mouseover",function(){
//     this.style.background = "#0000ff";
// });
// element.addEventListener("mouseout",function(){
//     this.style.background = "#ff0000";
// });
// alert(element);
function showProject(project, description){

    // hide descriptions first, as one will be unhidden from last call
    document.getElementById("p1").style.display='none';
    document.getElementById("p2").style.display='none';
    document.getElementById("p3").style.display='none';
    document.getElementById("p4").style.display='none';

    let element = document.getElementById('projects');
    // element.style.display="grid";
    let image = document.getElementById('project');
    image.src="images/"+project+".png";
    image.alt="Screenshot of " + project;

    document.getElementById(description).style.display='block';
}

function hideProject(){
    let element = document.getElementById('projects');
    element.style.display="none";
}

function sendEmail(){
    const recipient = 'j.sloss@btinternet.com';
    const subject = 'Sent from Portfolio email link';
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    
    window.location.href = mailtoLink;

}
