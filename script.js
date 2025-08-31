// ===============================
// Part 1: JavaScript Basics
// Variables and conditionals
// ===============================

// Function to perform arithmetic operations
function performOperations() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('operationOutput').innerHTML = 
            '<p class="highlight">Please enter valid numbers!</p>';
        return;
    }
    
    // Perform calculations
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : 'Undefined (division by zero)';
    const modulus = num2 !== 0 ? num1 % num2 : 'Undefined (division by zero)';
    
    // Display results
    document.getElementById('operationOutput').innerHTML = `
        <p>${num1} + ${num2} = <span class="highlight">${addition}</span></p>
        <p>${num1} - ${num2} = <span class="highlight">${subtraction}</span></p>
        <p>${num1} * ${num2} = <span class="highlight">${multiplication}</span></p>
        <p>${num1} / ${num2} = <span class="highlight">${division}</span></p>
        <p>${num1} % ${num2} = <span class="highlight">${modulus}</span></p>
    `;
}

// Function to check eligibility based on age
function checkEligibility() {
    // Get input value
    const age = parseInt(document.getElementById('ageInput').value);
    
    // Validate input
    if (isNaN(age) || age < 0 || age > 120) {
        document.getElementById('eligibilityOutput').innerHTML = 
            '<p class="highlight">Please enter a valid age between 0 and 120!</p>';
        return;
    }
    
    // Determine eligibility using conditionals
    let message = '';
    if (age < 13) {
        message = 'You are a child. You are not eligible for social media accounts.';
    } else if (age >= 13 && age < 18) {
        message = 'You are a teenager. You need parental consent for many services.';
    } else if (age >= 18 && age < 65) {
        message = 'You are an adult. You are eligible for all services.';
    } else {
        message = 'You are a senior. You may be eligible for special discounts.';
    }
    
    // Display result
    document.getElementById('eligibilityOutput').innerHTML = `
        <p>${message}</p>
        <p class="highlight">You are ${age} years old.</p>
    `;
}


// ===============================
// Part 2: JavaScript Functions
// At least 2 custom functions
// ===============================

// Function to calculate circle properties
function calculateCircle() {
    const radius = parseFloat(document.getElementById('radiusInput').value);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circleOutput').innerHTML = 
            '<p class="highlight">Please enter a valid positive number!</p>';
        return;
    }
    
    const area = (Math.PI * radius * radius).toFixed(2);
    const circumference = (2 * Math.PI * radius).toFixed(2);
    
    document.getElementById('circleOutput').innerHTML = `
        <p>For a circle with radius <span class="highlight">${radius}</span>:</p>
        <p>Area = πr² = <span class="highlight">${area}</span></p>
        <p>Circumference = 2πr = <span class="highlight">${circumference}</span></p>
    `;
}

// Function to format text
function formatText() {
    const text = document.getElementById('textInput').value.trim();
    
    if (text === '') {
        document.getElementById('textOutput').innerHTML = 
            '<p class="highlight">Please enter some text!</p>';
        return;
    }
    
    const upperCase = text.toUpperCase();
    const lowerCase = text.toLowerCase();
    const capitalized = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    const reversed = text.split('').reverse().join('');
    
    document.getElementById('textOutput').innerHTML = `
        <p>Original: <span class="highlight">${text}</span></p>
        <p>Uppercase: <span class="highlight">${upperCase}</span></p>
        <p>Lowercase: <span class="highlight">${lowerCase}</span></p>
        <p>Capitalized: <span class="highlight">${capitalized}</span></p>
        <p>Reversed: <span class="highlight">${reversed}</span></p>
    `;
}


// ===============================
// Part 3: JavaScript Loops
// At least 2 loop examples
// ===============================

// Multiplication table (for loop)
function generateMultiplicationTable() {
    const number = parseInt(document.getElementById('multiplicationInput').value);
    
    if (isNaN(number)) {
        document.getElementById('multiplicationOutput').innerHTML = 
            '<p class="highlight">Please enter a valid number!</p>';
        return;
    }
    
    let tableHTML = `<h4>Multiplication Table for ${number}</h4>`;
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${number} × ${i} = <span class="highlight">${number * i}</span></p>`;
    }
    
    document.getElementById('multiplicationOutput').innerHTML = tableHTML;
}

// Countdown timer (while loop via setInterval)
function startCountdown() {
    let seconds = parseInt(document.getElementById('countdownInput').value);
    
    if (isNaN(seconds) || seconds <= 0) {
        document.getElementById('countdownOutput').innerHTML = 
            '<p class="highlight">Please enter a positive number of seconds!</p>';
        return;
    }
    
    document.getElementById('countdownOutput').innerHTML = 
        `<p>Countdown starting from <span class="highlight">${seconds}</span> seconds...</p>`;
    
    const countdownInterval = setInterval(() => {
        if (seconds > 0) {
            document.getElementById('countdownOutput').innerHTML = 
                `<p>Time remaining: <span class="highlight">${seconds}</span> seconds</p>`;
            seconds--;
        } else {
            clearInterval(countdownInterval);
            document.getElementById('countdownOutput').innerHTML = 
                '<p class="highlight">Countdown complete! 🎉</p>';
        }
    }, 1000);
}


// ===============================
// Part 4: DOM Manipulation
// At least 3 DOM interactions
// ===============================

// Change box color
function changeColor() {
    const box = document.getElementById('styleBox');
    const colors = ['#4fc3f7', '#ff6b6b', '#4ecdc4', '#ffcc00', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    box.style.color = '#000';
    box.textContent = 'Color Changed!';
}

// Toggle box visibility
function toggleVisibility() {
    const box = document.getElementById('styleBox');
    if (box.style.display === 'none') {
        box.style.display = 'flex';
        box.textContent = 'I\'m Visible!';
    } else {
        box.style.display = 'none';
    }
}

// Reset box style
function resetStyle() {
    const box = document.getElementById('styleBox');
    box.style.backgroundColor = '#4fc3f7';
    box.style.color = '#000';
    box.style.display = 'flex';
    box.textContent = 'Box';
}

// Add item to list
function addListItem() {
    const itemInput = document.getElementById('listItemInput');
    const itemText = itemInput.value.trim();
    
    if (itemText !== '') {
        const list = document.getElementById('dynamicList');
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        list.appendChild(newItem);
        itemInput.value = '';
    }
}

// Toggle secret content
function toggleContent() {
    const secretMessage = document.getElementById('secretMessage');
    if (secretMessage.style.display === 'none') {
        secretMessage.style.display = 'block';
    } else {
        secretMessage.style.display = 'none';
    }
}
