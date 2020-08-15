// Creating function for Data plotting (Bar, gauge, bubble)
function buildPlot(id) {
    // get data from the json using d3
    d3.json("Data/samples.json").then((data)=> {
        console.log(data)

    // get washing frequency data
    var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)

    // filtering sample values by id 
    var samples = data.samples.filter(s => s.id.toString() === id)[0];
        
    console.log(samples);

    // Getting the top 10 
    var samplevalues = samples.sample_values.slice(0, 10).reverse();


























    }