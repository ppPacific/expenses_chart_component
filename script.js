
const getArr = (data,type) => {
  if (type==='day'){
      return data.map((val)=>val.day)
  } else if (type==='amount'){
      return data.map((val)=>val.amount);
  }
}

$.getJSON("data.json",function (data) {
    const ctx = document.getElementById('week_chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
         labels: getArr(data,'day'),
         datasets: [{
             label: '',
             data: getArr(data,'amount'),
             borderWidth: 1
         }]
     },
        options: {
            responsive: true,
            maintainAspectRatio:false,
            elements:{
                bar: {
                    backgroundColor: getArr(data,'day').map(day=> day==='wed' ? 'hsl(186, 34%, 60%)':'hsl(10, 79%, 65%)'),
                    borderRadius: 6
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x:{
                    grid:{
                        display:false
                    }
                },
                y: {
                    display:false,
                }
            }
        }
    });

}).fail(function(){
    console.log("An error has occurred.");
})
