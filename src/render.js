

// global variables
plateIndex = 0;
attempts = 0;
score = 0;
plate_indexes = [];
cheatS = false;

// Get all images of cars
cars_array = [
    'assets/cars/car1.jpg',
    'assets/cars/car2.jpg',
    'assets/cars/car3.jpg',
    'assets/cars/car4.jpg',
]

// Get all images of plates
plate_array = [
    'assets/plates/CA.png',
    'assets/plates/CAA.png',
    'assets/plates/CAG.png',
    'assets/plates/CAM.png',
    'assets/plates/CAR.png',
    'assets/plates/CAW.png',
    'assets/plates/CBL.png',
    'assets/plates/CBM.png',
    'assets/plates/CBR.png',
    'assets/plates/CBS.png',
    'assets/plates/CBT.png',
    'assets/plates/CBY.png',
    'assets/plates/CCA.png',
    'assets/plates/CCC.png',
    'assets/plates/CCD.png',
    'assets/plates/CCK.png',
    'assets/plates/CCM.png',
    'assets/plates/CCO.png',
    'assets/plates/CCP.png',
    'assets/plates/CCT.png',
    'assets/plates/CEA.png',
    'assets/plates/CEG.png',
    'assets/plates/CEM.png',
    'assets/plates/CEO.png',
    'assets/plates/CER.png',
    'assets/plates/CES.png',
    'assets/plates/CEX.png',
    'assets/plates/CEY.png',
    'assets/plates/CF.png',
    'assets/plates/CFA.png',
    'assets/plates/CFG.png',
    'assets/plates/CFM.png',
    'assets/plates/CFP.png',
    'assets/plates/CFR.png',
    'assets/plates/CG.png',
    'assets/plates/CJ.png',
    'assets/plates/CK.png',
    'assets/plates/CL.png',
    'assets/plates/CN.png',
    'assets/plates/CO.png',
    'assets/plates/CR.png',
    'assets/plates/CS.png',
    'assets/plates/CT.png',
    'assets/plates/CV.png',
    'assets/plates/CW.png',
    'assets/plates/CX.png',
    'assets/plates/CY.png',
    'assets/plates/CZ.png',    
]

function randomPlateRecursion(plateIndex){
    for(let i = 0; i < plate_indexes.length; i++){
        if(plate_indexes[i] == plateIndex){
            plateIndex = newPlate();
            plateIndex = randomPlateRecursion(plateIndex);
        }
    } 

    return plateIndex;
}

function newPlate(){
    return Math.floor(Math.random() * plate_array.length);
}

function generateRandomImage(){

    if(plate_indexes.length == plate_array.length){
        finishGame();
        return;
    }

    if(!cheatS){
        wrongs = 0;
    }else{
        wrongs = 100;
    }
    

    // Random indexes for car and plates
    carIndex = Math.floor(Math.random() * cars_array.length);
    plateIndex = Math.floor(Math.random() * plate_array.length);

    plateIndex = randomPlateRecursion(plateIndex);

    if(carIndex == 0){
        document.getElementById("secondary-image").style.top = '165px';
        document.getElementById("secondary-image").style.left = '175px';

        document.getElementById("secondary-image").style.maxWidth = '50%';
        document.getElementById("secondary-image").style.maxHeight = '50%';
    }else if(carIndex == 1){
        document.getElementById("secondary-image").style.top = '120px';
        document.getElementById("secondary-image").style.left = '-5px';

        document.getElementById("secondary-image").style.maxWidth = '65%';
        document.getElementById("secondary-image").style.maxHeight = '65%';
    }else if(carIndex == 2){
        document.getElementById("secondary-image").style.top = '60px';
        document.getElementById("secondary-image").style.left = '110px';

        document.getElementById("secondary-image").style.maxWidth = '60%';
        document.getElementById("secondary-image").style.maxHeight = '70%';
        
    }else if(carIndex == 3){
        document.getElementById("secondary-image").style.top = '115px';
        document.getElementById("secondary-image").style.left = '100px';

        document.getElementById("secondary-image").style.maxWidth = '50%';
        document.getElementById("secondary-image").style.maxHeight = '70%';

    }


    car = cars_array[carIndex];
    plate = plate_array[plateIndex];

    // Display image
    document.getElementById("main-image").src = `${car}`
    document.getElementById("secondary-image").src = `${plate}`

}

function handleAnswer(index){

    attempts++;

    if(index == plateIndex){
        console.log("CORRECT!!");
        document.getElementById(index).style.background = "Green";
        document.getElementById(index).disabled = true;
        score++;
        plate_indexes.push(index);

        document.getElementById("count").innerHTML = score + " / " + attempts;
        document.getElementById("percentage").innerHTML = score/attempts*100 + "%";

        generateRandomImage();
    }

    document.getElementById("count").innerHTML = score + " / " + attempts;
    document.getElementById("percentage").innerHTML = (score/attempts*100).toFixed(2) + "%";
    wrongs++;

    if(wrongs > 3){
        document.getElementById(plateIndex).style.background = "Yellow";
    }

}

function finishGame(){

    console.log("Game finished!");
    console.log(score/attempts*100 + "%");
    document.getElementById("klaar").style.display = "block";
    document.getElementById("finalPercentage").innerHTML = (score/attempts*100).toFixed(2) + "%";
    document.getElementById("finalScore").innerHTML = score + " / " + attempts;

}

function cheat(){
    cheatS = true;
}
