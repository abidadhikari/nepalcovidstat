const nepal="https://corona.askbhunte.com/api/v1/data/nepal";
const news="https://corona.askbhunte.com/api/v1/news";
const updatelog=document.querySelector('.updatelog');
const totalCases=document.querySelector(".box1 h3");
const positive=document.querySelector(".box2 h3");
const recovered=document.querySelector(".box3 h3");
const quarantined=document.querySelector(".box4 h3");
const inIsolation=document.querySelector(".box5 h3");
const deaths=document.querySelector(".box6 h3");
// totalCases.style.backgroundColor="pink";

const apiCovidNepal=async()=>{
    try {
        const req=await fetch(news);
        const mainreq=await fetch(nepal);
        const data=await req.json();
        const maindata=await mainreq.json();
        updatelog.innerHTML=`DATA UPDATED AT ${maindata.updated_at}`
        totalCases.innerHTML=maindata.tested_total;
        positive.innerHTML=maindata.tested_positive;
        recovered.innerHTML=maindata.recovered;
        quarantined.innerHTML=maindata.quarantined;
        deaths.innerHTML=maindata.deaths;
        inIsolation.innerHTML=maindata.in_isolation;
        console.log(data);
        console.log(maindata);
        // document.write(data.data[1].url)
    } catch (error) {
        console.log(error);   
    }
}
apiCovidNepal();