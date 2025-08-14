const stateTaxRates = {
  "AL": 0.04, "AK": 0.00, "AZ": 0.056, "AR": 0.065, "CA": 0.0725,
  "CO": 0.029, "CT": 0.0635, "DE": 0.00, "FL": 0.06, "GA": 0.04,
  "HI": 0.04, "ID": 0.06, "IL": 0.0625, "IN": 0.07, "IA": 0.06,
  "KS": 0.065, "KY": 0.06, "LA": 0.0445, "ME": 0.055, "MD": 0.06,
  "MA": 0.0625, "MI": 0.06, "MN": 0.06875, "MS": 0.07, "MO": 0.04225,
  "MT": 0.00, "NE": 0.055, "NV": 0.0685, "NH": 0.00, "NJ": 0.06625,
  "NM": 0.05125, "NY": 0.04, "NC": 0.0475, "ND": 0.05, "OH": 0.0575,
  "OK": 0.045, "OR": 0.00, "PA": 0.06, "RI": 0.07, "SC": 0.06,
  "SD": 0.045, "TN": 0.07, "TX": 0.0625, "UT": 0.0485, "VT": 0.06,
  "VA": 0.043, "WA": 0.065, "WV": 0.06, "WI": 0.05, "WY": 0.04,
  "DC": 0.06
};

window.onload = () => {
  const stateSelect = document.getElementById("state");
  for (const state in stateTaxRates) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  }
};

function calculateTax() {
  const state = document.getElementById("state").value;
  const price = parseFloat(document.getElementById("price").value);
  const resultDiv = document.getElementById("result");

  if (!state || isNaN(price)) {
    resultDiv.textContent = "Please select a state and enter a valid price.";
    return;
  }

  const taxRate = stateTaxRates[state];
  const finalPrice = price * (1 + taxRate);
  resultDiv.textContent = `Final price in ${state}: $${finalPrice.toFixed(2)}`;
}
