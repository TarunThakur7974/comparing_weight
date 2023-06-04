let sun = 27.940;
let moon = 0.163;
let jupiter = 2.529;
let uranus = 0.887;
let venus = 0.905;           //***************      weight  of the planet's           *************/
let mars = 0.378;
let mercury = 0.378;
let pluto = 0.643;
let neptune = 1.138;
let saturn = 1.065;
let ans = 00;
let html;

let inputdata = document.querySelector('input');//Grab the input data 
let answer = document.querySelector('#answer'); // Grab the div in which we show the data
let planets = document.querySelector('#planets');// Grab the selector from which user will select the planet 
let container_two = document.querySelector('.container_two');
let compare_data = document.querySelector('#compare_data');
let planetsimg = document.querySelector('.planetsimg');
let about = document.getElementById('about');
inputdata.focus();// Focus on the input tag where user input
let data;



// let imgchange = (src) => {
//     let image = document.createElement('img')
//     image.setAttribute('src', `${src}`)
//     image.setAttribute('alt', 'Planet Image')
//     container_two.insertAdjacentElement("afterbegin", image)
// }
// let switchimage = () => {
//     switch (planets.value) {
//         case 'Sun': {
//             imgchange('sun.png');
//         }
//         break;
//         case 'Moon': {
//             imgchange('moon.png');
//         }
//     }
// }
// switchimage();



let switchdata = () => { // switch the planets and calculate the weight
    switch (planets.value) {
        case 'Sun': {//compare the weight with the sun  and set the image
            ans = data * sun;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'sun.png');
            about.innerText = 'The Sun is a blazing star, the radiant heart of our solar system.'
        }
            break;
        case 'Moon': {//compare the weight with the moon and set the image
            ans = data * moon;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'moon.png');
            about.innerHTML = `<h3>The Moon, Earth's faithful companion, lights up the night sky with its gentle glow.</h3>`
        }
            break;
        case 'Mercury': {//compare the weight with the mercury and set the image
            ans = data * mercury;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'mercury.png');
            about.innerHTML = `<h3>Mercury, the closest planet to the Sun, boasts extreme temperature variations and a rugged, cratered surface.</h3>`
        }
            break;
        case 'Saturn': {//compare the weight with the saturn and set the image
            ans = data * saturn;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'saturn.png');
            planetsimg.style.borderRadius = '0px';
            about.innerHTML = `<h3>Saturn, adorned with its magnificent rings, is a captivating and majestic gas giant in our solar system.</h3>`
        }
            break;
        case 'Uranus': {//compare the weight with the uranus and set the image
            ans = data * uranus;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'uranus.png');
            about.innerHTML = `<h3>Uranus, the icy giant, spins on its side and presents an enigmatic beauty in the outer reaches of our solar system.</h3>`
        }
            break; 7
        case 'Venus': {//compare the weight with the venus and set the image
            ans = data * venus;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'venus.jpg');
            about.innerHTML = `<h3>Venus, the scorching inferno, shrouded in a thick atmosphere, dazzles as the brightest planet in our night sky.</h3>`
        }
            break;
        case 'Mars': {//compare the weight with the mars and set the image
            ans = data * mars;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'mars.png');
            planetsimg.style.borderRadius = '50px';
            about.innerHTML = `<h3>Mars, the red planet, holds the allure of possible extraterrestrial exploration and harbors the potential for scientific discoveries.</h3>`
        }
            break;
        case 'Pluto': {//compare the weight with the pluto and set the image
            ans = data * pluto;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'pluto.png');
            about.innerHTML = `<h3>Pluto, a dwarf planet on the edge of our solar system, sparks intrigue with its icy and enigmatic nature.</h3>`
        }
            break;
        case 'Neptune': {//compare the weight with the neptune and set the image
            ans = data * neptune;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'neptune.png');
            about.innerHTML = `<h3>Neptune, the mysterious and distant ice giant, captivates with its deep blue hues and windswept atmosphere.</h3>`
        }
            break;
        case 'Jupiter': {//compare the weight with the jupiter and set the image
            ans = data * jupiter;
            answer.innerHTML = ans.toFixed(3);
            ans = ans - data;
            planetsimg.setAttribute('src', 'jupiter.png');
            about.innerHTML = `<h3>Jupiter, the colossal gas giant, reigns as the largest and most awe-inspiring planet in our solar system.</h3>`
        }
            break;
    }
}

switchdata();

let change = () => { // When the user input then this function run
    if (inputdata.value.length > inputdata.maxLength) {// this condition does not allow more than three number 
        inputdata.value = inputdata.value.slice(0, inputdata.maxLength);
    }
    data = inputdata.value;
    if (data.length > 3) {
        data = data.slice(0, 3)
    }
    switchdata();// then run again switchdata with the input value 
    html = `On the ${planets.value}, the weight  is ${ans < 0 ? 'less' : 'more'} compared to Earth is ${ans.toFixed(3)} KG.`
    compare_data.innerHTML = html; //show the diffrence of weight
}
change();//firts time run change function

planets.addEventListener('change', () => {// This event listner run when user select the planet ;
    change();
    switchdata();
    // switchimage();
})













