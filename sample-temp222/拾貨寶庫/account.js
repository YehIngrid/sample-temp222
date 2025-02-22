// // 取得元素
// const modal = document.getElementById("loginModal");
// const openModalBtn = document.getElementById("openModal");
// const closeModalBtn = document.querySelector(".close");
// const loginForm = document.getElementById("loginForm");

// // 點擊「登入」按鈕時顯示 Modal
// openModal.addEventListener("click", function(e) {
//     modal.style.display = "flex";
// });

// // 點擊「×」按鈕時關閉 Modal
// closeModalBtn.addEventListener("click", function(e) {
//     modal.style.display = "none";
// });

// // 點擊 Modal 以外的地方關閉視窗
// window.addEventListener("click", function(event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });
// // 監聽登入表單提交事件
// loginForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // 防止表單提交刷新頁面

//     // 獲取輸入值
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // 模擬登入（實際應該連接後端）
//     if (username === "user" && password === "1234") {
//         alert("登入成功！");
//         modal.style.display = "none"; // 登入成功後關閉 Modal
//     } else if(username===""||password===""){
//         alert('帳號或密碼尚未輸入！');
//     } else {
//         alert("帳號或密碼錯誤！");
//     }
        
    
// });

// loginForm.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
    
        
    
//     fetch("https://你的後端/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert("登入成功！");
//             modal.style.display = "none"; // 關閉 Modal
//         } else {
//             alert("登入失敗：" + data.message);
//         }
//     })
//     .catch(error => console.error("錯誤:", error));
// });
const accountimg = document.getElementById('accountimg');
const signup = document.querySelector('#signup');
const content = document.querySelector(".content");
const sighuppage = document.querySelector("#signuppage");
const test = document.querySelector('#test');
const sign = document.querySelector('#sign');
accountimg.addEventListener('click', function(e){
    content.style.display = "block";
    sighuppage.style.display = "none";
})
signup.addEventListener('click', function(e){
    content.style.display = "none";
    sighuppage.style.display = "block";
})
test.addEventListener('click', function(e){
    alert('我們將發送驗證碼至您的學校信箱，請確認學校信箱是否有驗證碼信件');
})
sign.addEventListener('click', function(e){
    alert('註冊成功!請登入重新登入網頁');
}) 
axios.get('http://localhost:3000')
  .then(function (response) {
    let ary = response.data;
    const title = document.querySelector(".title");
    title.textContent = ary[0].name;
  });


const account = document.querySelector('#account');
const password = document.querySelector('#password');
const send = document.querySelector("#send");

send.addEventListener("click", function(e){
    callSignUp();
})


function callSignUp(){
    // email: 'ingrid171171@gmail.com',
    // password: '12345678'
    if (account.value == ""||password.value == ""){
        alert("請填寫正確資訊");
        return;
    }
    let obj = {};
    obj.email = account.value;
    obj.password = password.value;
    console.log(obj);
    
    // axios post 範例
    
    axios.post('http://localhost:3000', obj)
      .then(function (response) {
        if(response.data.message =="帳號註冊成功"){
            alert("恭喜帳號註冊成功");
        } else {
            alert("此帳號已被註冊");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}