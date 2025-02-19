/* ASYNCHRONOUS PROGRAMMING - ASYNC/AWAIT 
These are JavaScript keywords which when used together, provide a declarative way to define asynchronous 
functions and use their results. 

When used together, Async/Await simplify the syntax necessary to deliver a promise-based API.

The 'await' keyword is used inside an async function to pause its execution and wait for a promise to 
resolve before continuing.

Async makes a function to return a promise. 
Await makes an async function to wait for a promise.

Both are usually used together. 
When used together, these two keywords enable a programmer to write an asynchronous code in a synchronous manner. */

// EXAMPLE 1A - ASYNC/AWAIT
/*
Steps - On-campus Accomodation
(1) Apply online
(2) Submit personal documents
(3) Make payment through teller
(4) Wait for list
(5) Check for hall and room number
(6) Move in on resumption date
(7) Operation completed

*/  

/* function appliedOnline (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let appliedOnline = true;
            if (appliedOnline){
                resolve ("I successfully applied online");
            }
            else {
                reject ("I did not apply online");
            }
        }, 4000);
    });
}

function submittedPersonalDocument (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let submittedPersonalDocument = true;
            if (submittedPersonalDocument){
                resolve ("I submitted my personal documents");
            }
            else {
                reject ("I did not submit my personal documents");
            }
        }, 4500);
    });
}


function madePayment (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let madePayment = true;
            if (madePayment){
                resolve ("I made payment through teller");
            }
            else {
                reject ("I did not make payment through teller");
            }
        }, 5000);
    });
}

function waitedForList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let waitedForList = true;
            if (waitedForList){
                resolve ("I waited for the list of successful candidates");
            }
            else {
                reject ("I did not wait for the list of successful candidates");
            }
        }, 5500);
    });
}

function hallCheck (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let hallCheck = true;
            if (hallCheck){
                resolve ("I checked for my hall and room number");
            }
            else {
                reject ("I did not check for my hall and room number");
            }
        }, 6000);
    });
}

function movedIn (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let movedIn = true;
            if (movedIn){
                resolve ("I moved into my room on campus");
            }
            else {
                reject ("I did not move into my room on campus");
            }
        }, 6500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let operationCompleted = true;
            if (operationCompleted){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is still pending");
            }
        }, 7000);
    });
}

async function accomodation (){
    const appliedOnlineResult = await appliedOnline ();
    console.log (appliedOnlineResult);

    const submittedPersonalDocumentResult = await submittedPersonalDocument ();
    console.log (submittedPersonalDocumentResult);

    const madePaymentResult = await madePayment ();
    console.log (madePaymentResult);

    const waitedForListResult = await waitedForList ();
    console.log (waitedForListResult);

    const hallCheckResult = await hallCheck ();
    console.log (hallCheckResult);

    const movedInResult = await movedIn ();
    console.log (movedInResult);

    console.log ("Operations Concluded")
}
accomodation ();

// Example 1B
function appliedOnline (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let appliedOnline = true;
            if (appliedOnline){
                resolve ("I successfully applied online");
            }
            else {
                reject ("I did not apply online");
            }
        }, 4000);
    });
}

function submittedPersonalDocument (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let submittedPersonalDocument = true;
            if (submittedPersonalDocument){
                resolve ("I submitted my personal documents");
            }
            else {
                reject ("I did not submit my personal documents");
            }
        }, 4500);
    });
}


function madePayment (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let madePayment = true;
            if (madePayment){
                resolve ("I made payment through teller");
            }
            else {
                reject ("I did not make payment through teller");
            }
        }, 5000);
    });
}

function waitedForList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let waitedForList = true;
            if (waitedForList){
                resolve ("I waited for the list of successful candidates");
            }
            else {
                reject ("I did not wait for the list of successful candidates");
            }
        }, 5500);
    });
}

function hallCheck (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let hallCheck = true;
            if (hallCheck){
                resolve ("I checked for my hall and room number");
            }
            else {
                reject ("I did not check for my hall and room number");
            }
        }, 6000);
    });
}

function movedIn (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let movedIn = false;
            if (movedIn){
                resolve ("I moved into my room on campus");
            }
            else {
                reject ("I did not move into my room on campus");
            }
        }, 6500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let operationCompleted = true;
            if (operationCompleted){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is still pending");
            }
        }, 7000);
    });
}

async function accomodation (){
    try{
        const appliedOnlineResult = await appliedOnline ();
        console.log (appliedOnlineResult);

        const submittedPersonalDocumentResult = await submittedPersonalDocument ();
        console.log (submittedPersonalDocumentResult);

        const madePaymentResult = await madePayment ();
        console.log (madePaymentResult);

        const waitedForListResult = await waitedForList ();
        console.log (waitedForListResult);

        const hallCheckResult = await hallCheck ();
        console.log (hallCheckResult);

        const movedInResult = await movedIn ();
        console.log (movedInResult);

        console.log ("Operations Concluded")
    }
    catch (error){
        console.error (error);
    }
}
accomodation (); 

// Example 1C - Class Work 1
/* 

TITLE: HOW TO MAKE PEPPER-SOUP
(1) Decide on the type of pepper soup
(2) Make a list
(3) Decide the market
(4) Buy Ingredients
(5) Prepare and wash the ingredients
(6) Put all the ingredients in a pot
(7) Start cooking / set cooking time
(8) Allow to cook for 40 to 50 minutes
(9) Lower the heat and allow to simmer
(10) Dish out
(11) Serve
(12) Operation completed.

*/

/*function pepperSoupType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let pepperSoupTypeDecision = true;
            if (pepperSoupTypeDecision){
                resolve ("I decided on the type of pepper soup");
            }
            else {
                reject ("I did not decide on the type of pepper soup");
            }
        }, 500);
    });
}

function ingredientsList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let makeList = true;
            if (makeList){
                resolve ("I wrote a list of ingredients");
            }
            else {
                reject ("I did not write a list of Ingredients");
            }
        }, 1000);
    });
}

function decideMarket (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let marketDecide = true;
            if (marketDecide){
                resolve ("I decided on which market to shop in");
            }
            else {
                reject ("I do not know which market to shop in");
            }
        }, 1500);
    });
}

function buyIngredients (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let purchaseIngredients = true;
            if (purchaseIngredients){
                resolve ("I purchased all the ingredients");
            }
            else {
                reject ("I did not purchase all ingredients");
            }
        }, 2000);
    });
}

function prepareAndWash (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let prepareIngredients = true;
            if (prepareIngredients){
                resolve ("I prepared and washed all the ingredients");
            }
            else {
                reject ("I did not prepare and wash all the ingredients");
            }
        }, 2500);
    });
}

function inAPot (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let allIngredientsInAPot = true;
            if (allIngredientsInAPot){
                resolve ("I added all the ingredients in a pot");
            }
            else {
                reject ("I did not add all the ingredients in a pot");
            }
        }, 3000);
    });
}

function startCooking (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cookingBegins = true;
            if (cookingBegins){
                resolve ("I started cooking");
            }
            else {
                reject ("I did not start cooking");
            }
        }, 3500);
    });
}

function cookingTime (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cookingTimeSet = true;
            if (cookingTimeSet){
                resolve ("I set the time for cooking");
            }
            else {
                reject ("I did not set the time for cooking");
            }
        }, 4000);
    });
}

function lowerHeat (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let lowHeat = true;
            if (lowHeat){
                resolve ("I lowered the heat");
            }
            else {
                reject ("I did not lower the heat");
            }
        }, 4500);
    });
}

function dishOut (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let dishItOut = true;
            if (dishItOut){
                resolve ("I dished out the pepper soup");
            }
            else {
                reject ("I did not dish out the pepper soup");
            }
        }, 5000);
    });
}

function serveMeal (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let servePepperSoup = true;
            if (servePepperSoup){
                resolve ("I served the pepper soup");
            }
            else {
                reject ("I did not serve the pepper soup");
            }
        }, 5500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completedOperation = true;
            if (completedOperation){
                resolve ("Cooking completed");
            }
            else {
                reject ("Cooking not completed");
            }
        }, 6000);
    });
}


async function pepperSoupPreparation (){
    try{
        const pepperSoup = await pepperSoupType ();
        console.log (pepperSoup);

        const ingredients = await ingredientsList ();
        console.log (ingredients);

        const decide = await decideMarket ();
        console.log (decide);

        const buy = await buyIngredients ();
        console.log (buy);

        const prepare = await prepareAndWash ();
        console.log (prepare);

        const putInPot = await inAPot ();
        console.log (putInPot);

        const cook = await startCooking ();
        console.log (cook);

        const cookTime = await cookingTime ();
        console.log (cookTime);

        const lowHeat = await lowerHeat ();
        console.log (lowHeat);

        const dishIt = await dishOut ();
        console.log (dishIt);

        const serve = await serveMeal ();
        console.log (serve);

        const complete = await operationCompleted ();
        console.log(complete);
    } catch (err){
        console.log(err);
    }
}
pepperSoupPreparation (); */


// EXAMPLE 1C - CLASSWORK 2
/* 
TITLE: COMPANY - WORKERS BIO

*/
 
/* function workersBio () {
    return new Promise((resolve, reject) => {
        const isWorkers = true;
        
        setTimeout(() => {
            const workersData = {
                name: "Mr Ndubuisi",
                role: "Software Developer",
                department: "IT"
            }

            if (isWorkers){
                resolve (workersData);
            }
            else {
                reject ("Could not find worker");
            }

        }, 5000)
    })
}

function workersBio1 () {
    return new Promise((resolve, reject) => {
        const isWorkers = true;
        
        setTimeout(() => {
            const workersData = {
                name: "Mr Chiemezie",
                role: "Accountant",
                department: "IT"
            }

            if (isWorkers){
                resolve (workersData);
            }
            else {
                reject ("Could not find worker");
            }

        }, 5000)
    })
}

async function checkWorkers (){
    try{
        const worker1 = await workersBio ();
        console.log (worker1);

        const worker2 = await workersBio1();
        console.log(worker2);

    } catch (err){
        console.log(err);
    }
}
checkWorkers (); */
 
// Example 1C - Class Work 3
/* 

TITLE: How to farm 
(1) Decide on the crop to farm
(2) Land preparation
(3) Get the seeds
(4) Go plant the seeds
(5) Weed the farm
(6) Apply fertilizer
(7) Weed the second time
(8) Allow to mature and ripen
(9) Harvest
(10) Post harvest processing
(11) packaging and storing
(12) Sales
(13) Operations completed

*/

/* function cropType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cropTypeDecision = true;
            if (cropTypeDecision){
                resolve ("I decided on the type of crop to farm");
            }
            else {
                reject ("I did not decide on the type of crop to farm");
            }
        }, 500);
    });
}

function prepareLand (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let landPreparation = true;
            if (landPreparation){
                resolve ("I got the land prepared");
            }
            else {
                reject ("I did not get the land prepared");
            }
        }, 1000);
    });
}

function getSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let getMaizeSeed = true;
            if (getMaizeSeed){
                resolve ("I got the maize seeds");
            }
            else {
                reject ("I do not get the maize seeds");
            }
        }, 1500);
    });
}

function plantSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTheSeed = true;
            if (plantTheSeed){
                resolve ("I planted the maize seeds");
            }
            else {
                reject ("I did not plant the maize seeds");
            }
        }, 2000);
    });
}

function firstFarmWeeding (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let firstWeeding = true;
            if (firstWeeding){
                resolve ("I did the first weeding");
            }
            else {
                reject ("I did not do the first weeding");
            }
        }, 2500);
    });
}

function fertilizerApplication (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let applyFertilizer = true;
            if (applyFertilizer){
                resolve ("I applied fertilizer on the farm");
            }
            else {
                reject ("I did not apply fertilizer on the farm");
            }
        }, 3000);
    });
}

function secondFarmWeeding (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let secondWeeding = true;
            if (secondWeeding){
                resolve ("I did the second weeding");
            }
            else {
                reject ("I did not do the second weeding");
            }
        }, 3500);
    });
}

function allowToMature (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let matureAndRipen = true;
            if (matureAndRipen){
                resolve ("I allowed the maize to mature and ripen");
            }
            else {
                reject ("I did not allow the maize to mature and ripen");
            }
        }, 4000);
    });
}

function harvest (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let harvestTime = true;
            if (harvestTime){
                resolve ("I harvested the maize");
            }
            else {
                reject ("I did not harvest the maize");
            }
        }, 4500);
    });
}

function postHarvest (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let postHarvestProcessing = true;
            if (postHarvestProcessing){
                resolve ("I processed the harvest");
            }
            else {
                reject ("I did not process the harvest");
            }
        }, 5000);
    });
}

function packaging (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let maizePackaging = true;
            if (maizePackaging){
                resolve ("I packaged the maize for sales");
            }
            else {
                reject ("I did not package the maize for sales");
            }
        }, 5500);
    });
}

function sales (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soldMaize = true;
            if (soldMaize){
                resolve ("I sold the maize");
            }
            else {
                reject ("I did not sell the maize");
            }
        }, 6000);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completed = true;
            if (completed){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is not complete");
            }
        }, 6500);
    });
}


async function maizeFarming (){
    try{
        const crop = await cropType ();
        console.log (crop);

        const prepareL = await prepareLand ();
        console.log (prepareL);

        const seeds = await getSeeds ();
        console.log (seeds);

        const plantSeed = await plantSeeds ();
        console.log (plantSeed);

        const firstWeed = await firstFarmWeeding ();
        console.log (firstWeed);

        const fertilizer = await fertilizerApplication ();
        console.log (fertilizer);

        const secondWeed = await secondFarmWeeding ();
        console.log(secondWeed);

        const mature = await allowToMature ();
        console.log (mature);

        const harvestTime = await harvest ();
        console.log (harvestTime);

        const postHarvestTime = await postHarvest ();
        console.log (postHarvestTime);

        const package = await packaging ();
        console.log (package);

        const sale = await sales ();
        console.log(sale);

        const complete = await operationCompleted ();
        console.log(complete);

    } catch (err){
        console.log(err);
    }
}
 maizeFarming(); 

 function plantType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTypeDecision = true;
            if (plantTypeDecision){
                resolve ("I decided on the type of plant to farm");
            }
            else {
                reject ("I did not decide on the type of plant to farm");
            }
        }, 500);
    });
}

function prepareSoil (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soilPreparation = true;
            if (soilPreparation){
                resolve ("I got the soil prepared");
            }
            else {
                reject ("I did not get the soil prepared");
            }
        }, 550);
    });
}

function getSoilSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let gotPlantSeed = true;
            if (gotPlantSeed){
                resolve ("I got the plant seeds");
            }
            else {
                reject ("I do not get the plant seeds");
            }
        }, 600);
    });
}

function plantSeeds2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTheSeed2 = true;
            if (plantTheSeed2){
                resolve ("I planted the sugarcane seeds");
            }
            else {
                reject ("I did not plant the sugarcane seeds");
            }
        }, 650);
    });
}

function firstFarmWeeding2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let firstWeeding2 = true;
            if (firstWeeding2){
                resolve ("I did the first weeding2");
            }
            else {
                reject ("I did not do the first weeding2");
            }
        }, 700);
    });
}

function fertilizerApplication2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let applyFertilizer2 = false;
            if (applyFertilizer2){
                resolve ("I applied fertilizer2 on the farm");
            }
            else {
                reject ("I did not apply fertilizer2 on the farm");
            }
        }, 750);
    });
}

function secondFarmWeeding2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let secondWeeding2 = true;
            if (secondWeeding2){
                resolve ("I did the second weeding2");
            }
            else {
                reject ("I did not do the second weeding2");
            }
        }, 800);
    });
}

function allowToMature2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let matureAndRipen2 = true;
            if (matureAndRipen2){
                resolve ("I allowed the maize to mature and ripen2");
            }
            else {
                reject ("I did not allow the maize to mature and ripen2");
            }
        }, 850);
    });
}

function harvest2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let harvestTime2 = true;
            if (harvestTime2){
                resolve ("I harvested the maize2");
            }
            else {
                reject ("I did not harvest the maize2");
            }
        }, 900);
    });
}

function postHarvest2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let postHarvestProcessing2 = true;
            if (postHarvestProcessing2){
                resolve ("I processed the harvest2");
            }
            else {
                reject ("I did not process the harvest2");
            }
        }, 950);
    });
}

function packaging2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let maizePackaging2 = true;
            if (maizePackaging2){
                resolve ("I packaged the maize for sales2");
            }
            else {
                reject ("I did not package the maize for sales2");
            }
        }, 1000);
    });
}

function sales2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soldMaize2 = false;
            if (soldMaize2){
                resolve ("I sold the maize2");
            }
            else {
                reject ("I did not sell the maize2");
            }
        }, 1050);
    });
}

function operationCompleted2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completed2 = true;
            if (completed2){
                resolve ("Operation is complete2");
            }
            else {
                reject ("Operation is not complete2");
            }
        }, 1100);
    });
}


async function maizeFarming2 (){
    try{
        const crop2 = await plantType ();
        console.log (crop2);

        const prepareL2 = await prepareSoil ();
        console.log (prepareL2);

        const seeds2 = await getSoilSeeds ();
        console.log (seeds2);

        const plantSeed2 = await plantSeeds2 ();
        console.log (plantSeed2);

        const firstWeed2 = await firstFarmWeeding2 ();
        console.log (firstWeed2);

        const fertilizer2 = await fertilizerApplication2 ();
        console.log (fertilizer2);

        const secondWeed2 = await secondFarmWeeding2 ();
        console.log(secondWeed2);

        const mature2 = await allowToMature2 ();
        console.log (mature2);

        const harvestTime2 = await harvest2 ();
        console.log (harvestTime2);

        const postHarvestTime2 = await postHarvest2 ();
        console.log (postHarvestTime2);

        const package2 = await packaging2 ();
        console.log (package2);

        const sale2 = await sales2 ();
        console.log(sale2);

        const complete2 = await operationCompleted2 ();
        console.log(complete2);

    } catch (err){
        console.log(err);
    }
}
 maizeFarming2(); */



// Example 1D
/* function searchDatabase (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let databaseSearched = true;
            if (databaseSearched){
                resolve ("I successfully searched the database");
            }
            else {
                reject ("I could not search the database");
            }
        }, 4000);
    });
}

function obtainedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosProcured = true;
            if (videosProcured){
                resolve ("I successfully obtained the videos");
            }
            else {
                reject ("I did not obtain the videos");
            }
        }, 100);
    });
}

function uploadedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosInstalled = true;
            if (videosInstalled){
                resolve ("I successfully uploaded the videos");
            }
            else {
                reject ("I did not upload the videos");
            }
        }, 200);
    });
}

async function databaseOps (){
    const searchDatabaseOutput = await searchDatabase ();
    console.log (searchDatabaseOutput);

    const obtainedVideosOutput = await obtainedVideos ();
    console.log (obtainedVideosOutput);

    const uploadedVideosOutput = await uploadedVideos ();
    console.log (uploadedVideosOutput);

    console.log ("Operations Concluded")
}
databaseOps (); */

 

// EXAMPLE 1E - ASYNC/AWAIT
/* function searchDatabase (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let databaseSearched = true;
            if (databaseSearched){
                resolve ("I successfully searched the database");
            }
            else {
                reject ("I could not search the database");
            }
        }, 4000);
    });
}

function obtainedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosProcured = true;
            if (videosProcured){
                resolve ("I successfully obtained the videos");
            }
            else {
                reject ("I did not obtain the videos");
            }
        }, 100);
    });
}

function uploadedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosInstalled = true;
            if (videosInstalled){
                resolve ("I successfully uploaded the videos");
            }
            else {
                reject ("I did not upload the videos");
            }
        }, 200);
    });
}

async function databaseOps (){
    const searchDatabaseOutput = await searchDatabase ();
    console.log (searchDatabaseOutput);

    const obtainedVideosOutput = await obtainedVideos ();
    console.log (obtainedVideosOutput);

    const uploadedVideosOutput = await uploadedVideos ();
    console.log (uploadedVideosOutput);

    console.log ("Operations Concluded")
}
databaseOps (); */



// EXAMPLE 2 - ASYNC/AWAIT
/* function selectCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardSelected = true;
            if (creditCardSelected){
                resolve ("I successfully selected a credit card");
            }
            else {
                reject ("I did not select a credit card");
            }
        }, 4500);
    });
}

function validatedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardValidated = true;
            if (creditCardValidated){
                resolve ("I successfully validated the credit card number");
            }
            else {
                reject ("I could not validate the credit card number");
            }
        }, 100);
    });
}

function returnedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardReturned = true;
            if (creditCardReturned){
                resolve ("I returned the credit card");
            }
            else {
                reject ("I did not return the credit card");
            }
        }, 200);
    });
}

async function creditCardOps (){
    let selectCreditCardOutput = await selectCreditCard ();
    console.log (selectCreditCardOutput);

    let validatedCreditCardOutput = await validatedCreditCard ();
    console.log (validatedCreditCardOutput);

    let returnedCreditCardOutput = await returnedCreditCard ();
    console.log (returnedCreditCardOutput);

    console.log ("Operations Completed")
}
creditCardOps (); */


// EXAMPLE 3 - ASYNC/AWAIT
/* function fixTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carFixed = true;
            if (carFixed){
                resolve ("I fixed the car");
            }
            else {
                reject ("I did not fix the car");
            }
        }, 5000);
    });
}

function testTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carTested = true;
            if (carTested){
                resolve ("I tested the car");
            }
            else {
                reject ("I did not test the car");
            }
        }, 100);
    });
}

function returnedTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carReturned = false;
            if (carReturned){
                resolve ("I returned the car");
            }
            else {
                reject ("I did not return the car");
            }
        }, 200);
    });
}

async function carRepair (){
try{
    let fixTheCarResult = await fixTheCar ();
    console.log (fixTheCarResult);

    let testTheCarResult = await testTheCar ();
    console.log (testTheCarResult);

    let returnedTheCarResult = await returnedTheCar ();
    console.log (returnedTheCarResult);

    console.log ("Car Repair Concluded")
}
catch (error){
    console.error (error);
}
    }
carRepair (); */ 



function Person(name, gender, height, nationality, carOwned, model){
    this.name = name,
    this.gender = gender,
    this.height = height,
    this.nationality = nationality,
    this.carOwned = carOwned,
    this.model = model
}

let Person1 = new Person("Eric", "Male", "6ft", "American", "Toyota", "2025");
let Person2 = new Person("Chioma", "Female", "6ft", "Nigerian", "Mercedes", "2024");
let Person3 = new Person("John", "Male", "5ft", "England", "Honda", "2023");
let Person4 = new Person("Alice", "Female", "6ft", "Brazilian", "SUV", "2022");
let Person5 = new Person("Yamashita", "Male", "6ft", "Japanese", "Honda", "2020");

console.log(Person1.name);
console.log(Person1.gender);
console.log(Person1.height);
console.log(Person1.nationality);
console.log(Person1.carOwned);
console.log(Person1.model);

console.log(Person2.name);
console.log(Person2.gender);
console.log(Person2.height);
console.log(Person2.nationality);
console.log(Person2.carOwned);
console.log(Person2.model);

console.log(Person3.name);
console.log(Person3.gender);
console.log(Person3.height);
console.log(Person3.nationality);
console.log(Person3.carOwned);
console.log(Person3.model);

console.log(Person4.name);
console.log(Person4.gender);
console.log(Person4.height);
console.log(Person4.nationality);
console.log(Person4.carOwned);
console.log(Person4.model);

console.log(Person5.name);
console.log(Person5.gender);
console.log(Person5.height);
console.log(Person5.nationality);
console.log(Person5.carOwned);
console.log(Person5.model);