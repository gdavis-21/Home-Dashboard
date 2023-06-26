let indoorTemp = 81;
let targetTemp = 89;
let bedroomLeft = [0,0,0,0,0];
let bedroomRight = [0,0,0,0,0];
let bedroomMaster = [0,0,0,0,0,0,0];
let bathroom = [0,0,0,0,0];
let entrance = [0,0,0];
let livingRoom = [0,0,0,0,0];
let kitchen = [0,0,0,0,0,0,0];
let laundryRoom = [0,0,0];
let garage = [0,0,0,0,0];

$(document).ready(()=> {

    let homeIcon = document.querySelector(".nav-icon-home");
    let analyticsIcon = document.querySelector(".nav-icon-analytics");
    let settingsIcon = document.querySelector(".nav-icon-settings");
    let dateIcon = document.querySelector(".nav-icon-date");

    // Update clock every 1s.
    setInterval(() => {
        let date = new Date();
        dateIcon.textContent = date.toLocaleTimeString();
    }, 1000);

    homeIcon.addEventListener("click", () => {
        document.querySelector(".icon-analytics").classList.remove("material-icons");
        document.querySelector(".icon-analytics").classList.add("material-icons-outlined")
        document.querySelector(".icon-settings").classList.remove("material-icons");
        document.querySelector(".icon-settings").classList.add("material-icons-outlined")
        document.querySelector(".icon-home").classList.remove("material-icons-outlined");
        document.querySelector(".icon-home").classList.add("material-icons");

        // Load the home screen.
        loadHomeScreen();
    });

    analyticsIcon.addEventListener("click", () => {
        document.querySelector(".icon-settings").classList.remove("material-icons");
        document.querySelector(".icon-settings").classList.add("material-icons-outlined")
        document.querySelector(".icon-home").classList.remove("material-icons");
        document.querySelector(".icon-home").classList.add("material-icons-outlined")
        document.querySelector(".icon-analytics").classList.remove("material-icons-outlined");
        document.querySelector(".icon-analytics").classList.add("material-icons");
        
        // Load the analytics screen.
        loadAnalyticsScreen();
    });

    settingsIcon.addEventListener("click", () => {
        document.querySelector(".icon-analytics").classList.remove("material-icons");
        document.querySelector(".icon-analytics").classList.add("material-icons-outlined")
        document.querySelector(".icon-home").classList.remove("material-icons");
        document.querySelector(".icon-home").classList.add("material-icons-outlined")
        document.querySelector(".icon-settings").classList.remove("material-icons-outlined");
        document.querySelector(".icon-settings").classList.add("material-icons");

        // Load the settings screen.
        loadSettingsScreen();
        
    });

    loadHomeScreen();
})

function loadHomeScreen() {

    $("main").load("/homedashboard/home/", () => {

        let indoorTempObject = document.getElementById("indoor-temp");
        let targetTempObject = document.getElementById("target-temp");
        let outdoorTempObject = document.getElementById("outdoor-temp");

        let plusButton = document.getElementById("plus-button");
        let minusButton = document.getElementById("minus-button");

        indoorTempObject.textContent = indoorTemp.toFixed(3);
        targetTempObject.textContent = targetTemp;

        plusButton.addEventListener("click", () => {
            targetTempObject.textContent = Number(targetTempObject.textContent) + 1;
            targetTemp = Number(targetTempObject.textContent);
        });
        minusButton.addEventListener("click", () => {
           targetTempObject.textContent = Number(targetTempObject.textContent) - 1;
           targetTemp = Number(targetTempObject.textContent);
        });

        fetch("https://api.open-meteo.com/v1/forecast?latitude=33.86&longitude=-86.84&current_weather=true&temperature_unit=fahrenheit")
        .then((response) => response.json())
        .then((data) => outdoorTempObject.textContent = Math.round(data.current_weather.temperature));

        // Left-Bedroom
        let blCeilingLight = document.getElementById("BL-CeilingLight");
        let blLamp = document.getElementById("BL-Lamp");
        let blWindowLeft = document.getElementById("BL-WindowLeft");
        let blWindowTop = document.getElementById("BL-WindowTop");
        let blDoor = document.getElementById("BL-Door");

        blCeilingLight.addEventListener("click", () => {
            bedroomLeft[0] = Math.abs(bedroomLeft[0] - 1);
            blCeilingLight.style.opacity = bedroomLeft[0];
        })
        blLamp.addEventListener("click", () => {
            bedroomLeft[1] = Math.abs(bedroomLeft[1] - 1);
            blLamp.style.opacity = bedroomLeft[1];
        })
        blWindowLeft.addEventListener("click", () => {
            bedroomLeft[2] = Math.abs(bedroomLeft[2] - 1);
            blWindowLeft.style.opacity = bedroomLeft[2];
        })
        blWindowTop.addEventListener("click", () => {
            bedroomLeft[3] = Math.abs(bedroomLeft[3] - 1);
            blWindowTop.style.opacity = bedroomLeft[3];
        })
        blDoor.addEventListener("click", () => {
            bedroomLeft[4] = Math.abs(bedroomLeft[4] - 1);
            blDoor.style.opacity = bedroomLeft[4];
        })

        // Right-Bedroom
        let brCeilingLight = document.getElementById("BR-CeilingLight");
        let brLamp = document.getElementById("BR-Lamp");
        let brWindowRight = document.getElementById("BR-WindowRight");
        let brWindowTop = document.getElementById("BR-WindowTop");
        let brDoor = document.getElementById("BR-Door");

        brCeilingLight.addEventListener("click", () => {
            bedroomRight[0] = Math.abs(bedroomRight[0] - 1);
            brCeilingLight.style.opacity = bedroomRight[0];
        })
        brLamp.addEventListener("click", () => {
            bedroomRight[1] = Math.abs(bedroomRight[1] - 1);
            brLamp.style.opacity = bedroomRight[1];
        })
        brWindowRight.addEventListener("click", () => {
            bedroomRight[2] = Math.abs(bedroomRight[2] - 1);
            brWindowRight.style.opacity = bedroomRight[2];
        })
        brWindowTop.addEventListener("click", () => {
            bedroomRight[3] = Math.abs(bedroomRight[3] - 1);
            brWindowTop.style.opacity = bedroomRight[3];
        })
        brDoor.addEventListener("click", () => {
            bedroomRight[4] = Math.abs(bedroomRight[4] - 1);
            brDoor.style.opacity = bedroomRight[4];
        })

        // Bathroom
        let bathroomLight = document.getElementById("Bathroom-Light");
        let bathroomSink = document.getElementById("Bathroom-Sink");
        let bathroomWindowRight = document.getElementById("Bathroom-WindowRight");
        let bathroomDoor = document.getElementById("Bathroom-Door");

        bathroomWindowRight.addEventListener("click", () => {
            bathroom[0] = Math.abs(bathroom[0] - 1);
            bathroomWindowRight.style.opacity = bathroom[0];
        })
        bathroomLight.addEventListener("click", () => {
            bathroom[1] = Math.abs(bathroom[1] - 1);
            bathroomLight.style.opacity = bathroom[1];
        })
        bathroomDoor.addEventListener("click", () => {
            bathroom[2] = Math.abs(bathroom[2] - 1);
            bathroomDoor.style.opacity = bathroom[2];
        })
        bathroomSink.addEventListener("click", () => {
            bathroom[3] = Math.abs(bathroom[3] - 1);
            bathroomSink.style.opacity = bathroom[3];
        })

        // Entrance
        let entranceLight = document.getElementById("Entrance-Light");
        let entranceWindowLeft = document.getElementById("Entrance-WindowLeft");
        let entranceDoor = document.getElementById("Entrance-Door");

        entranceLight.addEventListener("click", () => {
            entrance[0] = Math.abs(entrance[0] - 1);
            entranceLight.style.opacity = entrance[0];
        })
        entranceWindowLeft.addEventListener("click", () => {
            entrance[1] = Math.abs(entrance[1] - 1);
            entranceWindowLeft.style.opacity = entrance[1];
        })
        entranceDoor.addEventListener("click", () => {
            entrance[2] = Math.abs(entrance[2] - 1);
            entranceDoor.style.opacity = entrance[2];
        })

        // Living-Room
        let lVRoomLight = document.getElementById("LVRoom-Light");
        let lVRoomLampLeft = document.getElementById("LVRoom-LampLeft");
        let lVRoomLampRight = document.getElementById("LVRoom-LampRight");
        let lVRoomTV = document.getElementById("LVRoom-TV");
        let lVRoomWindowBottom = document.getElementById("LVRoom-WindowBottom");

        lVRoomLight.addEventListener("click", () => {
            livingRoom[0] = Math.abs(livingRoom[0] - 1);
            lVRoomLight.style.opacity = livingRoom[0];
        });
        lVRoomLampLeft.addEventListener("click", () => {
            livingRoom[1] = Math.abs(livingRoom[1] - 1);
            lVRoomLampLeft.style.opacity = livingRoom[1];
        });
        lVRoomLampRight.addEventListener("click", () => {
            livingRoom[2] = Math.abs(livingRoom[2] - 1);
            lVRoomLampRight.style.opacity = livingRoom[2];
        });
        lVRoomTV.addEventListener("click", () => {
            livingRoom[3] = Math.abs(livingRoom[3] - 1);
            lVRoomTV.style.opacity = livingRoom[3];
        });
        lVRoomWindowBottom.addEventListener("click", () => {
            livingRoom[4] = Math.abs(livingRoom[4] - 1);
            lVRoomWindowBottom.style.opacity = livingRoom[4];
        });

        // Kitchen
        let kitchenLight = document.getElementById("Kitchen-Light");
        let kitchenSink = document.getElementById("Kitchen-Sink");
        let kitchenStove = document.getElementById("Kitchen-Stove");
        let kitchenMicrowave = document.getElementById("Kitchen-Microwave");
        let kitchenToaster = document.getElementById("Kitchen-Toaster");
        let kitchenWindowBottom = document.getElementById("Kitchen-WindowBottom");
        let kitchenDoor = document.getElementById("Kitchen-Door");

        kitchenLight.addEventListener("click", () => {
            kitchen[0] = Math.abs(kitchen[0] - 1);
            kitchenLight.style.opacity = kitchen[0];
        });
        kitchenSink.addEventListener("click", () => {
            kitchen[1] = Math.abs(kitchen[1] - 1);
            kitchenSink.style.opacity = kitchen[1];
        });
        kitchenStove.addEventListener("click", () => {
            kitchen[2] = Math.abs(kitchen[2] - 1);
            kitchenStove.style.opacity = kitchen[2];
        });
        kitchenMicrowave.addEventListener("click", () => {
            kitchen[3] = Math.abs(kitchen[3] - 1);
            kitchenMicrowave.style.opacity = kitchen[3];
        });
        kitchenToaster.addEventListener("click", () => {
            kitchen[4] = Math.abs(kitchen[4] - 1);
            kitchenToaster.style.opacity = kitchen[4];
        });
        kitchenWindowBottom.addEventListener("click", () => {
            kitchen[5] = Math.abs(kitchen[5] - 1);
            kitchenWindowBottom.style.opacity = kitchen[5];
        });
        kitchenDoor.addEventListener("click", () => {
            kitchen[6] = Math.abs(kitchen[6] - 1);
            kitchenDoor.style.opacity = kitchen[6];
        });

        // Hallway
        let hallwayLight = document.getElementById("Hallway-Light");
        let hallwayWasher = document.getElementById("Hallway-Washer");
        let hallwayDryer = document.getElementById("Hallway-Dryer");

        hallwayLight.addEventListener("click", () => {
            laundryRoom[0] = Math.abs(laundryRoom[0] - 1);
            hallwayLight.style.opacity = laundryRoom[0];
        });
        hallwayWasher.addEventListener("click", () => {
            laundryRoom[1] = Math.abs(laundryRoom[1] - 1);
            hallwayWasher.style.opacity = laundryRoom[1];
        });
        hallwayDryer.addEventListener("click", () => {
            laundryRoom[2] = Math.abs(laundryRoom[2] - 1);
            hallwayDryer.style.opacity = laundryRoom[2];
        });

        // Master-Bedroom 
        let mBedroomLight = document.getElementById("MBedroom-Light");
        let mBedroomLamp = document.getElementById("MBedroom-Lamp");
        let mBedroomTV = document.getElementById("MBedroom-TV");
        let mBedroomWindowLeft = document.getElementById("MBedroom-WindowLeft");
        let mBedroomWindowRight = document.getElementById("MBedroom-WindowRight");
        let mBedroomDoor = document.getElementById("MBedroom-Door");

        mBedroomLight.addEventListener("click", () => {
            bedroomMaster[0] = Math.abs(bedroomMaster[0] - 1);
            mBedroomLight.style.opacity = bedroomMaster[0];
        });
        mBedroomLamp.addEventListener("click", () => {
            bedroomMaster[1] = Math.abs(bedroomMaster[1] - 1);
            mBedroomLamp.style.opacity = bedroomMaster[1];
        });
        mBedroomTV.addEventListener("click", () => {
            bedroomMaster[2] = Math.abs(bedroomMaster[2] - 1);
            mBedroomTV.style.opacity = bedroomMaster[2];
        });
        mBedroomWindowLeft.addEventListener("click", () => {
            bedroomMaster[3] = Math.abs(bedroomMaster[3] - 1);
            mBedroomWindowLeft.style.opacity = bedroomMaster[3];
        });
        mBedroomWindowRight.addEventListener("click", () => {
            bedroomMaster[4] = Math.abs(bedroomMaster[4] - 1);
            mBedroomWindowRight.style.opacity = bedroomMaster[4];
        });
        mBedroomDoor.addEventListener("click", () => {
            bedroomMaster[5] = Math.abs(bedroomMaster[5] - 1);
            mBedroomDoor.style.opacity = bedroomMaster[5];
        });

        // Garage
        let garageHouseDoor = document.getElementById("Garage-HouseDoor");
        let garageLightLeft = document.getElementById("Garage-LightLeft");
        let garageLightRight = document.getElementById("Garage-LightRight");
        let garageDoorLeft = document.getElementById("Garage-DoorLeft");
        let garageDoorRight = document.getElementById("Garage-DoorRight");

        garageHouseDoor.addEventListener("click", () => {
            garage[0] = Math.abs(garage[0] - 1);
            garageHouseDoor.style.opacity = garage[0];
        })
        garageLightLeft.addEventListener("click", () => {
            garage[1] = Math.abs(garage[1] - 1);
            garageLightLeft.style.opacity = garage[1];
        })
        garageLightRight.addEventListener("click", () => {
            garage[2] = Math.abs(garage[2] - 1);
            garageLightRight.style.opacity = garage[2];
        })
        garageDoorLeft.addEventListener("click", () => {
            garage[3] = Math.abs(garage[3] - 1);
            garageDoorLeft.style.opacity = garage[3];
        })
        garageDoorRight.addEventListener("click", () => {
            garage[4] = Math.abs(garage[4] - 1);
            garageDoorRight.style.opacity = garage[4];
        })

        // Read the house stored states
        blCeilingLight.style.opacity = bedroomLeft[0];
        blLamp.style.opacity = bedroomLeft[1];
        blWindowLeft.style.opacity = bedroomLeft[2];
        blWindowTop.style.opacity = bedroomLeft[3];
        blDoor.style.opacity = bedroomLeft[4];

        brCeilingLight.style.opacity = bedroomRight[0];
        brLamp.style.opacity = bedroomRight[1];
        brWindowRight.style.opacity = bedroomRight[2];
        brWindowTop.style.opacity = bedroomRight[3];
        brDoor.style.opacity = bedroomRight[4];

        mBedroomLight.style.opacity = bedroomMaster[0];
        mBedroomLamp.style.opacity = bedroomMaster[1];
        mBedroomTV.style.opacity = bedroomMaster[2];
        mBedroomWindowLeft.style.opacity = bedroomMaster[3];
        mBedroomWindowRight.style.opacity = bedroomMaster[4];
        mBedroomDoor.style.opacity = bedroomMaster[5];

        bathroomLight.style.opacity = bathroom[0];
        bathroomSink.style.opacity = bathroom[1];
        bathroomWindowRight.style.opacity = bathroom[2];
        bathroomDoor.style.opacity = bathroom[3];

        entranceLight.style.opacity = entrance[0];
        entranceWindowLeft.style.opacity = entrance[1];
        entranceDoor.style.opacity = entrance[2];

        lVRoomLight.style.opacity = livingRoom[0];
        lVRoomLampLeft.style.opacity = livingRoom[1];
        lVRoomLampRight.style.opacity = livingRoom[2];
        lVRoomTV.style.opacity = livingRoom[3];
        lVRoomWindowBottom.style.opacity = livingRoom[4];

        kitchenLight.style.opacity = kitchen[0]
        kitchenSink.style.opacity = kitchen[1];
        kitchenStove.style.opacity = kitchen[2];
        kitchenMicrowave.style.opacity = kitchen[3];
        kitchenToaster.style.opacity = kitchen[4];
        kitchenWindowBottom.style.opacity = kitchen[5];
        kitchenDoor.style.opacity = kitchen[6];

        hallwayLight.style.opacity = laundryRoom[0];
        hallwayWasher.style.opacity = laundryRoom[1];
        hallwayDryer.style.opacity = laundryRoom[2];

        garageHouseDoor.style.opacity = garage[0];
        garageLightLeft.style.opacity = garage[1];
        garageLightRight.style.opacity = garage[2];
        garageDoorLeft.style.opacity = garage[3];
        garageDoorRight.style.opacity = garage[4];

        // Update 
        setInterval(() => {

            // Count the number of open windows.
            let openWindows = 0;
            openWindows += Number(blWindowLeft.style.opacity)
                        + Number(blWindowTop.style.opacity)
                        + Number(brWindowRight.style.opacity)
                        + Number(brWindowTop.style.opacity)
                        + Number(bathroomWindowRight.style.opacity)
                        + Number(entranceWindowLeft.style.opacity)
                        + Number(lVRoomWindowBottom.style.opacity)
                        + Number(kitchenWindowBottom.style.opacity)
                        + Number(mBedroomWindowLeft.style.opacity)
                        + Number(mBedroomWindowRight.style.opacity);

            // Count the number of open doors (leading to the outside).
            let openDoors = 0;
            openDoors += Number(entranceDoor.style.opacity) 
                        + Number(kitchenDoor.style.opacity)
                        + Number(garageHouseDoor.style.opacity);
            
            indoorTemp = calculateTempBeforeHVAC(Number(indoorTempObject.textContent), Number(outdoorTempObject.textContent), openDoors, openWindows);
            indoorTemp = calculateTempAfterHVAC(indoorTemp, Number(targetTempObject.textContent));
            indoorTempObject.textContent = indoorTemp.toFixed(3);
            
        }, 3000);
    });
}

function loadAnalyticsScreen() {
    
    $("main").load("/homedashboard/analytics/", async () => {

        let backButton = document.querySelector(".back-button");
        let forwardButton = document.querySelector(".forward-button");
        let monthText = document.querySelector(".month-text");
        let currentCostText = document.getElementById("current-cost");
        let predictedCostText = document.getElementById("predicted-cost");
        let currentPowerText = document.getElementById("current-power");
        let predictedPowerText = document.getElementById("predicted-power");
        let currentWaterText = document.getElementById("current-water");
        let predictedWaterText = document.getElementById("predicted-water");
        let ctx = document.getElementById("myChart");

        let chart;
        let today = new Date();
        let currentData = [[], [], []]
        let predictedData = [[], [], []];
        monthText.textContent = MONTHS[count];

        // Only get current data if we're on the current month or a previous month.
        if (count <= today.getMonth() + 1) {
            currentData = await getData(count);
            updateCurrentAnalytics();
        }

        // Only predict data if we're on the current month or a future month and if it's not the end of the month
        if (count >= today.getMonth() + 1 && today.getDate() != DAYSINMONTH[MONTHS[count]]) {
            predictedData = await getPredictData(count, currentMonth= count == today.getMonth() + 1 ? true : false)
            updatePredictedAnalytics(currentData);
        }

        chart = createChart(chart, ctx, currentData, predictedData);

        backButton.addEventListener("mousedown", () => {
            backButton.style.opacity = 0.8;
        })

        backButton.addEventListener("mouseup", async () => {
            backButton.style.opacity = 1;
            count-=1;

            resetAnalyticText()

            chart.destroy();

            if (count < 1) {
                count = 12;
            }
            monthText.textContent = MONTHS[count];

            // If it's the current month or a previous month, fetch previous data and set the current analytics at the bottom of the screen.
            if (count <= today.getMonth() + 1) {
                currentData = await getData(count);
                updateCurrentAnalytics();
            }

            if (count >= today.getMonth() + 1 && today.getDate() != DAYSINMONTH[MONTHS[count]]) {
                // Check if it's the present month or a future month and that it's not the end of the month
                predictedData = await getPredictData(count, currentMonth=count == today.getMonth() + 1 ? true : false);
                updatePredictedAnalytics(currentData);
            }
            
            chart = createChart(chart, ctx, currentData, predictedData);
        })
        forwardButton.addEventListener("mousedown", () => {
            forwardButton.style.opacity = 0.8;
        })
        forwardButton.addEventListener("mouseup", async () => {
            forwardButton.style.opacity = 1;
            count+=1;
            
            resetAnalyticText();

            chart.destroy();
            if (count > 12) {
                count = 1;
            }

            monthText.textContent = MONTHS[count];

            // If it's the current month or a previous month, fetch previous data and set the current analytics at the bottom of the screen.
            if (count <= today.getMonth() + 1) {
                currentData = await getData(count);
                updateCurrentAnalytics();
            }

            if (count >= today.getMonth() + 1 && today.getDate() != DAYSINMONTH[MONTHS[count]]) {
                // Check if it's the present month or a future month and that it's not the end of the month
                predictedData = await getPredictData(count, currentMonth=count == today.getMonth() + 1 ? true : false);
                updatePredictedAnalytics(currentData);
            }
            chart = createChart(chart, ctx, currentData, predictedData);
        })

        function updateCurrentAnalytics() {
            // Update the current analytics at the bottom of the screen.
            let sumCost = 0;
            let sumPower = 0;
            let sumWater = 0;

            currentData[0].forEach(element => {sumCost += element});
            currentCostText.textContent = sumCost.toFixed(2);
            currentData[1].forEach(element => {sumPower += element});
            currentPowerText.textContent = sumPower.toFixed(2);
            currentData[2].forEach(element => {sumWater += element});
            currentWaterText.textContent = sumWater.toFixed(2);
        }
    
        function updatePredictedAnalytics(currentData) {
            // Update the predicted analytics at the bottom of the screen.
            let predictedCost = 0;
            let predictedPower = 0;
            let predictedWater = 0;
                            
            predictedData[0].forEach(element => {Number.isNaN(element) ? predictedCost += 0 : predictedCost += element});
            predictedData[1].forEach(element => {Number.isNaN(element) ? predictedPower += 0 : predictedPower += element});
            predictedData[2].forEach(element => {Number.isNaN(element) ? predictedWater += 0 : predictedWater += element});

            if (count == today.getMonth() + 1) {
                predictedCost -= currentData[0][currentData[0].length - 1];
                predictedPower -= currentData[1][currentData[1].length - 1];
                predictedWater -= currentData[2][currentData[2].length - 1];

                predictedCost += Number(currentCostText.textContent);
                predictedPower += Number(currentPowerText.textContent);
                predictedWater += Number(currentWaterText.textContent);
            }

            predictedCostText.textContent = predictedCost.toFixed(2);
            predictedPowerText.textContent = predictedPower.toFixed(2);
            predictedWaterText.textContent = predictedWater.toFixed(2);
        }
    
        function resetAnalyticText() {
            // Reset current and predicted usage text values
            predictedData = [];
            currentData = []
            currentCostText.textContent = "";
            currentPowerText.textContent = "";
            currentWaterText.textContent = "";
            predictedCostText.textContent = "";
            predictedPowerText.textContent = "";
            predictedWaterText.textContent = "";
        }
    });
}

const MONTHS = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}
const DAYSINMONTH = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
}

let count = 1;

function createLabels() {

    let labels = []
    for (let i = 1; i <= DAYSINMONTH[MONTHS[count]]; i++) {
        if (i < 10) {
            if (count < 10) {
                labels.push(`0${count}/0${i}`);
            }
            else {
                labels.push(`${count}/0${i}`);
            }
        }
        else if (count < 10) {
            labels.push(`0${count}/${i}`);
        }
        else {
            labels.push(`${count}/${i}`);
        }
        
    }
    return labels
}

function createChart(chart, ctx, data, predictData) {
    chart = new Chart(ctx, {
        type : 'line',
        data : {
            labels : createLabels(),
            datasets : [
                    {  
                        data : data[0],
                        label : "Cost",
                        borderColor : "#118C4F",
                        backgroundColor : "#57eaa1",
                        fill : false
                    },
                    {
                        data : data[1],
                        label : "Power Usage",
                        borderColor : "#f7f026",
                        backgroundColor : "#ffffa3",
                        fill : false
                    },
                    {
                        data : data[2],
                        label : "Water Usage",
                        borderColor : "#1b95e0",
                        backgroundColor : "#8ecbf1",
                        fill : false
                    },
                    {
                        data : predictData[0],
                        label : "Predicted Cost",
                        borderDash : [5,5],
                        borderColor : "#118C4F",
                        backgroundColor : "#57eaa1",
                        fill : false
                    },
                    {
                        data : predictData[1],
                        label : "Predicted Power Usage",
                        borderColor : "#f7f026",
                        borderDash : [5,5],
                        backgroundColor : "#ffffa3",
                        fill : false
                    },
                    {
                        data : predictData[2],
                        label : "Predicted Water Usage",
                        borderDash : [5,5],
                        borderColor : "#1b95e0",
                        backgroundColor : "#8ecbf1",
                        fill : false
                    }
                    
                 
                ]
        },
        options : {
            animation : false,
            maintainAspectRatio : false,
            plugins: {
                title: {
                    display: false,
                    text: "January: Cost vs. Power Consumption vs. Water Consumption"
                }
            }
        }
        }
    );
    return chart;
}

async function getData(count) {
    let result = [];
    let costArray = [];
    let powerArray = [];
    let waterArray = [];
    await $.get(`${MONTHS[count].toLowerCase()}/`, (data) => {
        
        for (let i = 0; i < DAYSINMONTH[MONTHS[count]]; i++) {
            try {
                let cost = 0;
                cost += Number(data[i]["fields"]["electricityCost"]);
                cost += Number(data[i]["fields"]["waterCost"]);
                costArray.push(cost);
                powerArray.push(Number(data[i]["fields"]["electricityUsed"]));
                waterArray.push(Number(data[i]["fields"]["waterUsed"]));
            }
            catch (e) {
                break;
            }
        }
        result.push(costArray);
        result.push(powerArray);
        result.push(waterArray);
    });
    return result;
}

async function getPredictData(count, currentMonth=false) {
    let result = [];
    if (currentMonth) {
        await $.get(`predict/`, (data) => {
            result = data;
        });
    }
    else {
        await $.get(`predictMonth/${count}/`, (data) => {
            result = data;
        });
    }
    if (count == new Date().getMonth() + 1) {
        for (let i = 0; i < new Date().getDate() - 1; i++) {
            result[0].unshift(NaN);
            result[1].unshift(NaN);
            result[2].unshift(NaN);
        }
    }
    return result;
}

function loadSettingsScreen() {

    $("main").load("/homedashboard/settings/", () => {

        let buttonSimulation1 = document.querySelector(".simulation-1");
        let buttonSimulation2 = document.querySelector(".simulation-2");
        let buttonSimulation3 = document.querySelector(".simulation-3");
        let buttonMode1 = document.querySelector(".mode-1");
        let buttonMode2 = document.querySelector(".mode-2");
        let buttonMode3 = document.querySelector(".mode-3");

        let token = $(".button-simulations").find("input[name=csrfmiddlewaretoken]").val()
         // Simulation 1 - Simulate the front-door being open for 60-minutes (assume only the front door is open, no windows).
        buttonSimulation1.addEventListener("click", () => {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=33.86&longitude=-86.84&current_weather=true&temperature_unit=fahrenheit")
            .then((response) => response.json())
            .then((data) => {
                let outsideTemp = data.current_weather.temperature;
                let hvacCycles = 0;
                for (let i = 0; i < 120; i++) {
                    // Temperature before the HVAC kicks on.
                    indoorTemp = calculateTempBeforeHVAC(indoorTemp, outsideTemp, 1, 0);
                    if (Math.abs(indoorTemp - targetTemp) >= 2) {
                        hvacCycles += 1;
                        // Temperature after the HVAC kicks on.
                        indoorTemp = calculateTempAfterHVAC(indoorTemp, targetTemp);
                    }
                }
                $.post("postNewValues/", {
                    csrfmiddlewaretoken: token,
                    cost: (3500 * (hvacCycles/2)/60)/1000 * 0.12,
                    power: (3500 * (hvacCycles/2)/60)/1000,
                    water: 0
                });
            });
        });

        // Simulation 2 - Simulate the TVs (both) being on for 2 HR.
        buttonSimulation2.addEventListener("click", () => {
            $.post("postNewValues/", {
                csrfmiddlewaretoken: token,
                cost: (100 * 0.12 * 2)/1000 + (636 * 0.12 * 2)/1000, 
                power: (100 * 2)/1000 + (636 * 2)/1000,
                water: 0
            });
        });

        // Simulation 3 - Simulate the shower running for 1 HR (assume 2.1 G per minute, 126 G total, 81.9 G hot, 44.1 G cold).
        // 4 Minutes to heat 1 G of water, 81.9/x = 1/4, thus takes 327.6 minutes to heat water (5.46 HRs)
        buttonSimulation3.addEventListener("click", () => {
            $.post("postNewValues/", {
                csrfmiddlewaretoken: token,
                cost: 0.0034 * 126 + (4500 * 0.12 * 5.46)/1000,
                power: (4500 * 5.46)/1000,
                water: 126 
            });
        });

        // Random Dancing
        buttonMode1.addEventListener("click", () => {

        });

        // Lockdown
        buttonMode2.addEventListener("click", () => {
            bedroomLeft[0] = 1;
            bedroomLeft[4] = 0;
            bedroomLeft[2] = 0;
            bedroomLeft[3] = 0;

            bedroomRight[0] = 1;
            bedroomRight[4] = 0;
            bedroomRight[2] = 0;
            bedroomRight[3] = 0;

            bedroomMaster[0] = 1;
            bedroomMaster[5] = 0;
            bedroomMaster[3] = 0;
            bedroomMaster[4] = 0;

            bathroom[0] = 1;
            bathroom[3] = 0;
            bathroom[2] = 0;

            entrance[0] = 1;
            entrance[2] = 0;
            entrance[1] = 0;

            livingRoom[0] = 1;
            livingRoom[4] = 0;

            kitchen[0] = 1;
            kitchen[6] = 0;
            kitchen[5] = 0;

            laundryRoom[0] = 1;

            garage[1] = 1;
            garage[2] = 1;
            garage[0] = 0;
            garage[3] = 0;
            garage[4] = 0;
         });

        // Open house
        buttonMode3.addEventListener("click", () => {
            bedroomLeft[0] = 1;
            bedroomLeft[4] = 1;
            bedroomLeft[2] = 1;
            bedroomLeft[3] = 1;

            bedroomRight[0] = 1;
            bedroomRight[4] = 1;
            bedroomRight[2] = 1;
            bedroomRight[3] = 1;

            bedroomMaster[0] = 1;
            bedroomMaster[5] = 1;
            bedroomMaster[3] = 1;
            bedroomMaster[4] = 1;

            bathroom[0] = 1;
            bathroom[3] = 1;
            bathroom[2] = 1;

            entrance[0] = 1;
            entrance[2] = 1;
            entrance[1] = 1;

            livingRoom[0] = 1;
            livingRoom[4] = 1;

            kitchen[0] = 1;
            kitchen[6] = 1;
            kitchen[5] = 1;

            laundryRoom[0] = 1;

            garage[1] = 1;
            garage[2] = 1;
            garage[0] = 1;
            garage[3] = 1;
            garage[4] = 1;
        });
    });
}

function calculateTempBeforeHVAC(indoorTemp, outdoorTemp, numberOpenDoors, numberOpenWindows) {

    // Change in temperature due to doors.
    let diffBetweenOutdoorIndoor = outdoorTemp - indoorTemp;
    let rateOfChangeDoors = (2 * diffBetweenOutdoorIndoor)/10 * 0.2 * numberOpenDoors;
    let rateOfChangeWindows = (1 * diffBetweenOutdoorIndoor)/10 * 0.1 * numberOpenWindows;

    if (diffBetweenOutdoorIndoor <= 0) {
        // It's colder outside than it is inside, thus the internal temperature will decrease.
        return indoorTemp - rateOfChangeDoors - rateOfChangeWindows;
    } 
    else {
        // It's warmer outside than it is inside, thus the internal temperature will increase.
        return indoorTemp + rateOfChangeDoors + rateOfChangeWindows
    }
}

function calculateTempAfterHVAC(indoorTemp, targetTemp) {

    let differenceIndoorTarget = indoorTemp - targetTemp;

    if (differenceIndoorTarget <= -2) {
        // The indoor temperature is less than the target temperature, thus the HVAC will warm the house
        return indoorTemp += (2 * Math.abs(differenceIndoorTarget) / 10)/120;
    }
    else if (differenceIndoorTarget >= 2) {
        // The indoor temperature is greater than the target temperature, thus the HVAC will cool the house
        return indoorTemp -= (2 * Math.abs(differenceIndoorTarget) / 10)/120;
    }
    else {
        return indoorTemp;
    }
}