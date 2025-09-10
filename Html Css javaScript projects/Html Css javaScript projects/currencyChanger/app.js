const BASE_URL = "https://v6.exchangerate-api.com/v6/b9303b92e224b7a4a788c47c/latest/"; // Your API endpoint
let dropDowns = document.querySelectorAll(".dropDown select");
let btn = document.querySelector('form button');
const msg = document.querySelector(".msg");



// Populate dropdowns with currency options
for (const select of dropDowns) {
    for (const currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // Select the default options
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        }
        if (select.name === "to" && currCode === "PKR") {
            newOption.selected = true;
        }

        select.appendChild(newOption);
    }

    select.addEventListener("change", (evt) => {
        flagChange(evt.target);
    });
}

function flagChange(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // Use backticks for template literals

    let img = element.parentElement.querySelector('img');
    if (img) {
        img.src = newSrc;
    }
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    
    let amount = document.querySelector(".amount input").value;
    
    // Validate amount
    if (amount === "" || amount <= 0) {
        amount = 1;
        document.querySelector(".amount input").value='1';
    }

    // Get selected currencies
    let fromCurr = document.querySelector('select[name="from"]');
    let toCurr = document.querySelector('select[name="to"]');
    
    // Construct the API URL
    const url = `${BASE_URL}${fromCurr.value}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        let data = await response.json();
        let rate = data.conversion_rates[toCurr.value];
        let finalAmount = amount * rate;

        msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount.toFixed(5)} ${toCurr.value}`;
    } catch (error) {
        console.error(error);
        msg.innerText = "Error fetching exchange rate.";
    }
});
window.addEventListener("DOMContentLoaded", () => {
    btn.click();
});
