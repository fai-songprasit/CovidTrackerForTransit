
class Trip {
    constructor(route, startTime, endTime = Trip.getDefaultEndTime(startTime), vehicleRef) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.route = route;
        this.vehicleRef = vehicleRef;
    }

    static getDefaultEndTime = (startTime) => {
        return null;
    }

    getEndTime() {
        return this.endTime;
    }

    setEndTime(endTime) {
        this.endTime = endTime;
    }

    setVehicle(vehicleRef){
        this.vehicleRef = vehicleRef;
    }

    overlaps(otherTrip) {
        if (this.route !== otherTrip.route) {
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