let data = [
    {
        from:"系統公告",
        n_name:"網站會在2025-01-26進行更新",
        time:"2025-01-25"
    },
    {
        from:"店鋪公告",
        n_name:"店鋪即將開張！趕快來看看新上架的商品吧！",
        time:"2025-01-24"
    }
];

function init() {
    const news = document.querySelector(".news tbody");
    let str = "";
    data.forEach(function(news){
    let content = `<tr><td>${news.from}</td><td class="name"><a>${news.n_name}</a></td><td class="time">${news.time}</td></tr>`;
    str += `${content}`;
    })
    news.innerHTML = str;
}
init();



const filter = document.querySelector(".sort");

console.log("Filter element:", filter);
if (filter) {
    filter.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") return;

        const selectedCategory = e.target.textContent.trim();
        console.log("Filtering by:", selectedCategory);

        let str = "";
        data.forEach(function (item) {
            if (selectedCategory === "全部公告" || item.from == selectedCategory) {
                str += `<tr>
                    <td>${item.from}</td>
                    <td class="name">${item.n_name}</td>
                    <td class="time">${item.time}</td>
                </tr>`;
            }
        });

        const news = document.querySelector(".news tbody");
        if (news) {
            news.innerHTML = str;
        }
    });
}

// const filter = document.querySelector(".sort");
// filter.addEventListener("click",function(e){
//     if (e.target.value == "undefined"){
//         return;
//     }
//     if (e.target.value == "全部公告"){
//         console.log(e);
//         init();
//         return;
//     }
//     let str = "";
//     data.forEach(function(item,index){
//         let content = `<td>${news.from}</td><td>${news.n_name}</td><td>${news.time}</td>`;
//         if(news.from == e.target.value) {
//             str += content;
//         }
//     })
// const news = document.querySelector(".tr");
// news.innerHTML = str;
// })



// const stationName = document.querySelector(".stationName");
// const stationCharge = document.querySelector(".stationCharge");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function(e){
//     let obj = {};
//     obj.Charge = stationCharge.value;
//     obj.name = stationName.value;
//     data.unshift(obj);
//     init();
//     stationCharge.value = "";
//     stationName.value = "";
// })