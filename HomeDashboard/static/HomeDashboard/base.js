$(document).ready(()=> {

    let homeIcon = document.querySelector(".nav-icon-home");
    let analyticsIcon = document.querySelector(".nav-icon-analytics");
    let settingsIcon = document.querySelector(".nav-icon-settings");
    let dateIcon = document.querySelector(".nav-icon-date");

    setInterval(() => {
        let date = new Date();
        dateIcon.textContent = date.toLocaleTimeString();
    }, 1000)

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

        document.querySelector(".icon-home").setAttribute("type", "solid");

        plusButton.addEventListener("click", () => {
            targetTempObject.textContent = Number(targetTempObject.textContent) + 1;
        });
        minusButton.addEventListener("click", () => {
           targetTempObject.textContent = Number(targetTempObject.textContent) - 1;v
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
            blCeilingLight.style.opacity = Math.abs(blCeilingLight.style.opacity - 1);
        })
        blLamp.addEventListener("click", () => {
            blLamp.style.opacity = Math.abs(blLamp.style.opacity - 1);
        })
        blWindowLeft.addEventListener("click", () => {
            blWindowLeft.style.opacity = Math.abs(blWindowLeft.style.opacity - 1);
        })
        blWindowTop.addEventListener("click", () => {
            blWindowTop.style.opacity = Math.abs(blWindowTop.style.opacity - 1);
        })
        blDoor.addEventListener("click", () => {
            blDoor.style.opacity = Math.abs(blDoor.style.opacity - 1);
        })

        // Right-Bedroom
        let brCeilingLight = document.getElementById("BR-CeilingLight");
        let brLamp = document.getElementById("BR-Lamp");
        let brWindowTop = document.getElementById("BR-WindowTop");
        let brWindowRight = document.getElementById("BR-WindowRight");
        let brDoor = document.getElementById("BR-Door");

        brCeilingLight.addEventListener("click", () => {
            brCeilingLight.style.opacity = Math.abs(brCeilingLight.style.opacity - 1);
        })
        brLamp.addEventListener("click", () => {
            brLamp.style.opacity = Math.abs(brLamp.style.opacity - 1);
        })
        brWindowTop.addEventListener("click", () => {
            brWindowTop.style.opacity = Math.abs(brWindowTop.style.opacity - 1);
        })
        brWindowRight.addEventListener("click", () => {
            brWindowRight.style.opacity = Math.abs(brWindowRight.style.opacity - 1);
        })
        brDoor.addEventListener("click", () => {
            brDoor.style.opacity = Math.abs(brDoor.style.opacity - 1);
        })

        // Bathroom
        let bathroomWindowRight = document.getElementById("Bathroom-WindowRight");
        let bathroomLight = document.getElementById("Bathroom-Light");
        let bathroomDoor = document.getElementById("Bathroom-Door");
        let bathroomSink = document.getElementById("Bathroom-Sink");

        bathroomWindowRight.addEventListener("click", () => {
            bathroomWindowRight.style.opacity = Math.abs(bathroomWindowRight.style.opacity - 1);
        })
        bathroomLight.addEventListener("click", () => {
            bathroomLight.style.opacity = Math.abs(bathroomLight.style.opacity - 1);
        })
        bathroomDoor.addEventListener("click", () => {
            bathroomDoor.style.opacity = Math.abs(bathroomDoor.style.opacity - 1);
        })
        bathroomSink.addEventListener("click", () => {
            bathroomSink.style.opacity = Math.abs(bathroomSink.style.opacity - 1);
        })

        // Entrance
        let entranceDoor = document.getElementById("Entrance-Door");
        let entranceLight = document.getElementById("Entrance-Light");
        let entranceWindowLeft = document.getElementById("Entrance-WindowLeft");

        entranceDoor.addEventListener("click", () => {
            entranceDoor.style.opacity = Math.abs(entranceDoor.style.opacity - 1);
        })
        entranceLight.addEventListener("click", () => {
            entranceLight.style.opacity = Math.abs(entranceLight.style.opacity - 1);
        })
        entranceWindowLeft.addEventListener("click", () => {
            entranceWindowLeft.style.opacity = Math.abs(entranceWindowLeft.style.opacity - 1);
        })

        // Living-Room
        let lVRoomLight = document.getElementById("LVRoom-Light");
        let lVRoomLampRight = document.getElementById("LVRoom-LampRight");
        let lVRoomLampLeft = document.getElementById("LVRoom-LampLeft");
        let lVRoomTV = document.getElementById("LVRoom-TV");
        let lVRoomWindowBottom = document.getElementById("LVRoom-WindowBottom");

        lVRoomLight.addEventListener("click", () => {
            lVRoomLight.style.opacity = Math.abs(lVRoomLight.style.opacity - 1);
        })
        lVRoomLampRight.addEventListener("click", () => {
            lVRoomLampRight.style.opacity = Math.abs(lVRoomLampRight.style.opacity - 1);
        })
        lVRoomLampLeft.addEventListener("click", () => {
            lVRoomLampLeft.style.opacity = Math.abs(lVRoomLampLeft.style.opacity - 1);
        })
        lVRoomTV.addEventListener("click", () => {
            lVRoomTV.style.opacity = Math.abs(lVRoomTV.style.opacity - 1);
        })
        lVRoomWindowBottom.addEventListener("click", () => {
            lVRoomWindowBottom.style.opacity = Math.abs(lVRoomWindowBottom.style.opacity - 1);
        })

        // Kitchen
        let kitchenWindowBottom = document.getElementById("Kitchen-WindowBottom");
        let kitchenDoor = document.getElementById("Kitchen-Door");
        let kitchenLight = document.getElementById("Kitchen-Light");
        let kitchenStove = document.getElementById("Kitchen-Stove");
        let kitchenMicrowave = document.getElementById("Kitchen-Microwave");
        let kitchenToaster = document.getElementById("Kitchen-Toaster");
        let kitchenSink = document.getElementById("Kitchen-Sink");

        kitchenWindowBottom.addEventListener("click", () => {
            kitchenWindowBottom.style.opacity = Math.abs(kitchenWindowBottom.style.opacity - 1);
        })
        kitchenDoor.addEventListener("click", () => {
            kitchenDoor.style.opacity = Math.abs(kitchenDoor.style.opacity - 1);
        })
        kitchenLight.addEventListener("click", () => {
            kitchenLight.style.opacity = Math.abs(kitchenLight.style.opacity - 1);
        })
        kitchenMicrowave.addEventListener("click", () => {
            kitchenMicrowave.style.opacity = Math.abs(kitchenMicrowave.style.opacity - 1);
        })
        kitchenToaster.addEventListener("click", () => {
            kitchenToaster.style.opacity = Math.abs(kitchenToaster.style.opacity - 1);
        })
        kitchenStove.addEventListener("click", () => {
            kitchenStove.style.opacity = Math.abs(kitchenStove.style.opacity - 1);
        })
        kitchenSink.addEventListener("click", () => {
            kitchenSink.style.opacity = Math.abs(kitchenSink.style.opacity - 1);
        })

        // Hallway
        let hallwayLight = document.getElementById("Hallway-Light");
        let hallwayWasher = document.getElementById("Hallway-Washer");
        let hallwayDryer = document.getElementById("Hallway-Dryer");

        hallwayLight.addEventListener("click", () => {
            hallwayLight.style.opacity = Math.abs(hallwayLight.style.opacity - 1);
        })
        hallwayWasher.addEventListener("click", () => {
            hallwayWasher.style.opacity = Math.abs(hallwayWasher.style.opacity - 1);
        })
        hallwayDryer.addEventListener("click", () => {
            hallwayDryer.style.opacity = Math.abs(hallwayDryer.style.opacity - 1);
        })

        // Master-Bedroom 
        let mBedroomDoor = document.getElementById("MBedroom-Door");
        let mBedroomLight = document.getElementById("MBedroom-Light");
        let mBedroomTV = document.getElementById("MBedroom-TV");
        let mBedroomWindowLeft = document.getElementById("MBedroom-WindowLeft");
        let mBedroomWindowRight = document.getElementById("MBedroom-WindowRight");
        let mBedroomLamp = document.getElementById("MBedroom-Lamp");

        mBedroomDoor.addEventListener("click", () => {
            mBedroomDoor.style.opacity = Math.abs(mBedroomDoor.style.opacity - 1);
        })
        mBedroomLight.addEventListener("click", () => {
            mBedroomLight.style.opacity = Math.abs(mBedroomLight.style.opacity - 1);
        })
        mBedroomTV.addEventListener("click", () => {
            mBedroomTV.style.opacity = Math.abs(mBedroomTV.style.opacity - 1);
        })
        mBedroomWindowLeft.addEventListener("click", () => {
            mBedroomWindowLeft.style.opacity = Math.abs(mBedroomWindowLeft.style.opacity - 1);
        })
        mBedroomWindowRight.addEventListener("click", () => {
            mBedroomWindowRight.style.opacity = Math.abs(mBedroomWindowRight.style.opacity - 1);
        })
        mBedroomLamp.addEventListener("click", () => {
            mBedroomLamp.style.opacity = Math.abs(mBedroomLamp.style.opacity - 1);
        })

        // Garage
        let garageHouseDoor = document.getElementById("Garage-HouseDoor");
        let garageLightLeft = document.getElementById("Garage-LightLeft");
        let GarageLightRight = document.getElementById("Garage-LightRight");
        let garageDoorLeft = document.getElementById("Garage-DoorLeft");
        let garageDoorRight = document.getElementById("Garage-DoorRight");

        garageHouseDoor.addEventListener("click", () => {
            garageHouseDoor.style.opacity = Math.abs(garageHouseDoor.style.opacity - 1);
        })
        garageLightLeft.addEventListener("click", () => {
            garageLightLeft.style.opacity = Math.abs(garageLightLeft.style.opacity - 1);
        })
        GarageLightRight.addEventListener("click", () => {
            GarageLightRight.style.opacity = Math.abs(GarageLightRight.style.opacity - 1);
        })
        garageDoorLeft.addEventListener("click", () => {
            garageDoorLeft.style.opacity = Math.abs(garageDoorLeft.style.opacity - 1);
        })
        garageDoorRight.addEventListener("click", () => {
            garageDoorRight.style.opacity = Math.abs(garageDoorRight.style.opacity - 1);
        })
    });
}

function loadAnalyticsScreen() {

    $("main").load("/homedashboard/analytics/", () => {

    });
}

function loadSettingsScreen() {

    $("main").load("/homedashboard/settings/", () => {

    });
}