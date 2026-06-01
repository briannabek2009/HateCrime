let data, output, result;
 async function init(){
 let link = "let link = https://data.cityofnewyork.us/resource/h9gi-nx95.json"
 info = await fetch(link);
 data = await info.json();

  output = get("output");
 let build = "";
 
  let crime = data[i];
  build += card(crime);
}

for(let i = 0; i < data.length; i++){
    let hatecrime = data[i];
    if(hatecrime.borough == "QUEENS"){
      q++;
    }else if(hatecrime.borough == "MANHATTAN"){
      m++;
    }else if(hatecrime.borough == "BROOKLYN"){
      bk++;
    }else if(hatecrime.borough == "BRONX"){
      bx++;
    }else if(hatecrime.borough == "STATEN ISLAND"){
      s++;
    }
  }

   
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ]
   
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)

