
ex.2}
Example 2:

Array = [1,6,3,4,5,0,0,0,6]

In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport
 If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6


     function minimumPlanesRequired(airportFuel) {
    const n = airportFuel.length;
    const minPlanes = [1]; // Initialize starting at the first airport

    for (let i = 1; i < n; i++) {
        minPlanes[i] = Infinity; // Initialize with a large number

        for (let j = i - 1; j >= 0 && j >= i - airportFuel[i]; j--) {

            // Update minPlanes[i] if the current path requires fewer planes

            minPlanes[i] = Math.min(minPlanes[i], minPlanes[j] + 1);
        }
    }

    return minPlanes[n - 1]; // Minimum number of planes needed to reach the last airport
}


const airportFuel = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanesRequired(airportFuel)); 