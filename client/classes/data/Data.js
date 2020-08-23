import {Trip} from "../";

class Data {
    constructor(trips = [], covidPositive = false) {
        this.trips = trips;
        this.covidPositive = covidPositive;
    }

    static loadDataFromJson = (dataJson) => {
        const tripsJson = dataJson.trips;
        const trips = Data.loadTripsFromJson(tripsJson);
        const covidPositive = dataJson.covidPositive;
        const data = new Data(trips, covidPositive);
        return data;
    }

    static loadTripsFromJson = (tripsJson) => {
        let trips = [];
        // console.log("loadTripsFromJson: ");
        tripsJson.forEach(tripJson => {
            // console.log("tripJson: ", tripJson);
            const trip = new Trip(tripJson.route, tripJson.startTime, tripJson.endTime, tripJson.vehicleRef );
            trips.push(trip);
        });
        return trips;
    }

    static loadDataFromLocalStorage = () => {
        let loadedDataString = window.localStorage.getItem("data");
        if (loadedDataString === null ){
                loadedData = {
                    trips: [],
                    covidPositive: false    
                };
            const data = new Data(loadedData.trips, loadedData.covidPositive);
            return data;
        }
        let loadedDataJson = JSON.parse(loadedDataString);
        let loadedData = Data.loadDataFromJson(loadedDataJson);
        const data = new Data(loadedData.trips, loadedData.covidPositive);
        return data;
    }

    static load = () => {
        const data = this.loadDataFromLocalStorage();
        // console.log("Loaded Data: ", data);
        return data;
    }

    save = ()=>{
        const dataCopy = new Data(this.trips, this.covidPositive);
        const dataString = JSON.stringify(dataCopy);
        window.localStorage.setItem("data", dataString);
    }

    setCovidPositive = (covidPositive) => {
        this.covidPositive = covidPositive;
    }

    getCovidPositive = () => {
        return this.covidPositive;
    }

    addTrip = (trip) => {
        // console.log("this: ", this);
        // console.log("trip: ", trip);
        this.trips.push(trip);
        // console.log("this.trips: ", this.trips);
        this.save();
    }

    getCurrentTrip = () => {
        console.log("Get current trip hit!" );
        if(this.trips.length === 0){
            return null;
        }
        const currentTrip = this.trips[this.trips.length - 1];

        if (currentTrip instanceof Trip !== true) {
            currentTrip = new Trip(currentTrip.route, currentTrip.startTime, currentTrip.endTime);
        }
        // console.log("Trips: ", this.trips);
        console.log("Get current trip - currentTrip: ", currentTrip);
        
        if (currentTrip.getEndTime() === Trip.getDefaultEndTime(currentTrip.startTime)) {
            console.log("currentTrip.getEndTime() === Trip.getDefaultEndTime(currentTrip.startTime) Hit!");
            return currentTrip;
            // return null;
        }
        return null;
    }

    endCurrentTrip = () => {
        console.log("End current trip hit!");
        // let currentTrip = this.getCurrentTrip();
        // console.log("currentTrip: ", currentTrip);
        // if(currentTrip === null){
        //     console.error("There is no current trip, unable to end current trip");
        //     return;
        // }

        // currentTrip.setEndTime(Date.now());
        this.save();
    }
}

export default Data;