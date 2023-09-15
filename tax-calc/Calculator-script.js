function calculate() {
    
    const amount = parseFloat(document.getElementById("amount").value);
    const gstRate = parseFloat(document.getElementById("gstRate").value);

    if (!isNaN(amount) && !isNaN(gstRate)) 
    {
        const gstAmount = (amount * gstRate) / 100;
        const total = amount + gstAmount;

        document.getElementById("result").innerHTML = `
            GST Amount: Rs ${gstAmount.toFixed(2)}<br>
            Total Amount: Rs ${total.toFixed(2)}
        `;
    } 
    else
     {
        alert("Please enter valid values for Amount and GST Rate.");
    }
}
