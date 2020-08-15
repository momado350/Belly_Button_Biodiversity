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

    // get only top 10 otu ids for the plot OTU and reversing it. 
    var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();

    // get the otu id's to the desired form for the plot
        var OTU_id = OTU_top.map(d => "OTU " + d)
        //   console.log(`OTU IDS: ${OTU_id}`)

        // get the top 10 labels for the plot
        var labels = samples.otu_labels.slice(0, 10);

    //   console.log(`Sample Values: ${samplevalues}`)
      //   console.log(`Id Values: ${OTU_top}`)
        // create trace variable for the plot
        var trace = {
            x: samplevalues,
            y: OTU_id,
            text: labels,
            marker: {
              color: 'rgb(142,124,195)'},
            type:"bar",
            orientation: "h",
        };

    // create data variable
    var data = [trace];
  
    // create layout variable to set plots layout
    var layout = {
        title: "Top 10 OTU",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    };

    // create the bar plot
    Plotly.newPlot("bar", data, layout);
  
    //console.log(`ID: ${samples.otu_ids}`)
  
    // create The bubble chart
    var trace1 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids
        },
        text: samples.otu_labels

    };

    // set the layout for the bubble plot
    var layout_b = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
    };

    // creating data variable 
    var data1 = [trace1];
  
    // create the bubble plot
    Plotly.newPlot("bubble", data1, layout_b); 

    
























    }