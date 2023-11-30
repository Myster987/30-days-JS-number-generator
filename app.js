const generateNumbers = () => {
    const isPrime = (num) => {
        if (num < 2) return false;

        for (let i = 2; i < Math.floor(Math.sqrt(num) + 1); i++){
            if (num % i == 0) return false; 
        }
        return true;
    };

    const numberContainer = document.getElementsByClassName("number-container")[0];

    for (let i = 0; i < 101; i++){
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

generateNumbers();