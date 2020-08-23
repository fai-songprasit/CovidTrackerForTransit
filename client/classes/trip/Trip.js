class Trip {
    constructor(route, startTime, endTime = Trip.getDefaultEndTime(startTime), vehicleRef, startStop = null, endStop = null) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.route = route;
        this.vehicleRef = vehicleRef;
        this.startStop = startStop;
        this.endStop = endStop;
    }

    static getDefaultEndTime = (startTime) => {
        return null;
    }

    getEndTime() {
        return this.endTime;
    }

    setEndTime(endTime) {
        console.log("Set end time :", endTime );
        this.endTime = endTime;
    }

    setStartStop(startStop){
        this.startStop = startStop;
    }

    setEndStop(endStop){
        this.endStop = endStop;
    }

    setVehicle(vehicleRef){
        this.vehicleRef = vehicleRef;
    }

    overlaps(otherTrip) {
        // doesn't matter if it's a different route if it's the same vehicle
        // if (this.route != otherTrip.route) {
        //     return false;
        // }

        if (this.vehicleRef != otherTrip.vehicleRef) {
            return false;
        }

        if (otherTrip.endTime < this.startTime) {
            return false;
        }
        if (otherTrip.startTime > this.endTime) {
            return false;
        }
        return true;
    }

    sameAs(otherTrip) {
        if (this.route !== otherTrip.route) {
            return false;
        }
        if (this.vehicleRef !== otherTrip.vehicleRef){
            return false;
        }
        if (this.startTime !== otherTrip.startTime) {
            return false;
        }

        return true;
    }
}

export default Trip;