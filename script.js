function calculateTip(){

    const billAmt=parseFloat(document.getElementById("bill-amount").value)
    const tipPercent=parseFloat(document.getElementById("tip-percentage").value)

    const tipAmt=billAmt*(tipPercent/100);
    const FinalBill=tipAmt+billAmt;

    document.getElementById("tip-amount").textContent='$' + tipAmt.toFixed(2);
    document.getElementById("total-amount").textContent='$' + FinalBill;
}