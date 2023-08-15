document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = parseFloat(withdrawField.value);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = parseFloat(withdrawTotal.innerText);

    const currentWithdraw = newWithdraw+previousWithdraw;
    withdrawTotal.innerText = currentWithdraw;

    withdrawField.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);

    const newBalance = previousBalance-newWithdraw;
    balanceTotal.innerText = newBalance;
})