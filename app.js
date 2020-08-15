// Creating function for Data plotting (Bar, gauge, bubble)
function buildPlot(id) {
    // get data from the json using d3
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)

    // get washing frequency data
    var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

























    }