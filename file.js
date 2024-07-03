

// login button event handler
const loginBtn = document.getElementById("verify");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const tArea = document.getElementById("t-area");
  tArea.style.display = "block";
  
});

const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){

    const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);
    
    // const currentDeposit= document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber= parseFloat(currentDeposit);
    // const totalDeposit= depositNumber+currentDepositNumber;
    // document.getElementById("currentDeposit").innerText =totalDeposit;
    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("currentBalance", depositNumber);


   

    document.getElementById("depositAmount").value= "";

    function updateSpanText(id){
      const current= document.getElementById(id).innerText;
      const currentNumber= parseFloat(current);
      const totalBalance = depositNumber+currentNumber;
      document.getElementById(id).innerText=totalBalance;


    }


});

