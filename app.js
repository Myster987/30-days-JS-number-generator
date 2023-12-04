document.getElementById("submitBtn").onclick = (e) => {
    e.preventDefault();

    const isPrime = (num) => {
        if (num < 2) return false;

        for (let i = 2; i < Math.floor(Math.sqrt(num) + 1); i++){
            if (num % i == 0) return false; 
        }
        return true;
    };

    const numberContainer = document.querySelector(".number-container");
    numberContainer.innerHTML = "";
    
    let numToGenerate = Number(document.getElementById("numberInput").value);

    if (isNaN(numToGenerate)){
        alert("Enter only numbers");
        return
    }

    for (let i = 1; i <= numToGenerate; i++){
        const num = document.createElement("p");
        num.setAttribute("class", "number");
        num.textContent = i;
        if (isPrime(i)){
            num.style.backgroundColor = "#e81902";
        } else if (i % 2){
            num.style.backgroundColor = "#fcba03";
        } else {
            num.style.backgroundColor = "#08a60b";
        }
        numberContainer.appendChild(num);
    }
};
