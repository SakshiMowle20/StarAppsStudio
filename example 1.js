Example: 1.

Array = [2,1,2,3,1]

In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only.
 The minimum number of planes required in this case is two 2 → 2→ 1.


    function findMinimumPlanes(fuelUnits) {
    let current = 0; 
    let planesNeeded = 0; 

    while (current < fuelUnits.length - 1) { 
        let furthestAdvance = 0;
        let nextAirport = -1;
 
  // find the next airport from current position

        for (let i = 1; i <= fuelUnits[current] && (current + i) < fuelUnits.length; i++) {
            if (current + i + fuelUnits[current + i] > furthestAdvance) {
                furthestAdvance = current + i + fuelUnits[current + i];
                nextAirport = current + i;
            }
        }

        if (nextAirport == -1) { 
            return -1;
        }

        current = nextAirport; // Move to the best next airport
        planesNeeded++; //
    }

    return planesNeeded; //
}

console.log(findMinimumPlanes([2,1,2,3,1])); 