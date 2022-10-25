let seriesPending = ["Breaking Bug", "Game of Drone", "Boolean 99", "Arrested Developer"]

// //------- 3 -------//

seriesPending.push("Hunt for Food")
console.log("Los elementos de seriesPending son:", seriesPending)

//------- 4, 5 -------//

for (let i = 0; i < seriesPending.length; i++) {
    console.log(i, seriesPending[i]);

    let name = seriesPending[i]
    if (name == "Boolean 99") {
        console.log("Found it");
    }
}

//------- 6, 7, 8, 9, 10, 11, 12, 13 -------//

let seriesWatching = []

seriesWatching.push(seriesPending.shift())

console.log(seriesWatching);
console.log(seriesWatching.length);
console.log(seriesPending.length);


for (let i = seriesPending.length - 1; i >= 0; i--) {
    seriesWatching.push(seriesPending.shift())
    console.log(seriesWatching);
    console.log(seriesWatching.length);
    console.log(seriesPending.length);
}

for (let i = seriesWatching.length; i > 0; i--) {
    seriesWatching.splice(0, 1)
    console.log(seriesWatching);
}

console.log(seriesWatching.length);
console.log(seriesPending.length);

