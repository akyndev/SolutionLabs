const chart = document.getElementById('chart').getContext('2d')


new Chart('chart',{
    type: 'line',
    data:   { 
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "clicks",
                data: [31213, 13423, 13431, 47564, 74233, 64242, 53415, 15125, 15124, 67453],
                borderColor: "red",
                borderWidth: 2
            },
            {
                label: "Impressions",
                data: [24231, 12123, 94950, 23012, 93342, 13121, 43143, 12411, 94943, 12324],
                borderColor: "blue",
                borderWidth: 2
            },
            {
                label: "CTR",
                data: [2423, 12023, 54950, 43012, 53342, 63121, 43143, 32411, 34943, 62324],
                borderColor: "green",
                borderWidth: 2
            },
        ]
    },
    Options: {
        responsive: true
    }
})


const close_btn = document.getElementById('close-btn')
const menu_btn = document.getElementById('menu-btn')
const aside = document.getElementById('aside')
const logo = document.querySelector('.logo')


close_btn.addEventListener('click', function(){
    aside.style.display = "none";
    console.log('clicked');
    logo.style.opacity = 1
})

menu_btn.addEventListener('click', function(){
    aside.style.display = "flex";
    console.log('clicked');
    logo.style.opacity = 0
})



