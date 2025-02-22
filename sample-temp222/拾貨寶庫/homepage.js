
// function init() {
//     const uni = document.querySelector(".uni");
//     let str = "";
//     data.forEach(function(item){
//         let content = `<a href="#"><img src=${item.imageURL}><h2>${item.name}</h2><p>${item.category}</p><p>${item.age}</p><p class="price">NT$ ${item.price}</p></a>`;
//         str += content;
//     })
//     uni.innerHTML = str;
// }
// init();
axios.post('http://localhost:3000')
    .then(function (response) {
        let ary = response.data;
        let str = "";
        const uni = document.querySelector(".uni");
        ary.forEach(function(ary){
            let content = `<a class="hvr-glow">
            <img src=${ary.imageURL}>
            <h2>${ary.name}</h2>
            <p>${ary.category}/${ary.age}</p>
            <p class="price">NT$ ${ary.price}</p></a>`;
            str += content;
        })
        uni.innerHTML = str;
    });


