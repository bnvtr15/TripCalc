const flightPrices = {
    "Jakarta": { 
        "Bali": 50, 
        "Singapore": 40, 
        "Phuket": 60, 
        "Cebu": 45, 
        "Hanoi": 35, 
        "Manila": 55, 
        "Ho Chi Minh": 60, 
        "Yangon": 70, 
        "Vientiane": 75, 
        "Phnom Penh": 80,
        "Kuala Lumpur": 30 
    },
    "Kuala Lumpur": { 
        "Bali": 55, 
        "Singapore": 40, 
        "Phuket": 65, 
        "Cebu": 50, 
        "Hanoi": 40, 
        "Manila": 60, 
        "Ho Chi Minh": 65, 
        "Yangon": 75, 
        "Vientiane": 80, 
        "Phnom Penh": 85,
        "Jakarta": 30 
    },
    "Bangkok": { 
        "Bali": 60, 
        "Singapore": 45, 
        "Phuket": 55, 
        "Cebu": 55, 
        "Hanoi": 35, 
        "Manila": 65, 
        "Ho Chi Minh": 55, 
        "Yangon": 75, 
        "Vientiane": 80, 
        "Phnom Penh": 90,
        "Kuala Lumpur": 40 
    },
    "Manila": { 
        "Bali": 65, 
        "Singapore": 50, 
        "Phuket": 70, 
        "Cebu": 55, 
        "Hanoi": 40, 
        "Jakarta": 55, 
        "Ho Chi Minh": 60, 
        "Yangon": 80, 
        "Vientiane": 85, 
        "Phnom Penh": 95,
        "Kuala Lumpur": 60 
    },
    "Ho Chi Minh": { 
        "Bali": 55, 
        "Singapore": 50, 
        "Phuket": 60, 
        "Cebu": 50, 
        "Hanoi": 40, 
        "Jakarta": 60, 
        "Manila": 60, 
        "Yangon": 70, 
        "Vientiane": 75, 
        "Phnom Penh": 80,
        "Kuala Lumpur": 65 
    },
    "Singapore": { 
        "Jakarta": 50, 
        "Kuala Lumpur": 40, 
        "Bangkok": 45, 
        "Manila": 50, 
        "Ho Chi Minh": 50, 
        "Phnom Penh": 80, 
        "Hanoi": 55, 
        "Yangon": 75, 
        "Vientiane": 80, 
        "Cebu": 65,
        "Bali": 60 
    },
    "Hanoi": { 
        "Jakarta": 40, 
        "Kuala Lumpur": 40, 
        "Bangkok": 35, 
        "Manila": 40, 
        "Ho Chi Minh": 40, 
        "Singapore": 55, 
        "Phnom Penh": 70, 
        "Yangon": 75, 
        "Vientiane": 80, 
        "Cebu": 55,
        "Bali": 50 
    },
    "Phnom Penh": { 
        "Jakarta": 80, 
        "Kuala Lumpur": 75, 
        "Bangkok": 75, 
        "Manila": 70, 
        "Ho Chi Minh": 60, 
        "Singapore": 80, 
        "Hanoi": 70, 
        "Yangon": 90, 
        "Vientiane": 95, 
        "Cebu": 85,
        "Kuala Lumpur": 85 
    },
    "Yangon": { 
        "Jakarta": 70, 
        "Kuala Lumpur": 75, 
        "Bangkok": 75, 
        "Manila": 80, 
        "Ho Chi Minh": 70, 
        "Singapore": 75, 
        "Hanoi": 75, 
        "Vientiane": 90, 
        "Phnom Penh": 90, 
        "Cebu": 95,
        "Kuala Lumpur": 75 
    },
    "Vientiane": { 
        "Jakarta": 75, 
        "Kuala Lumpur": 80, 
        "Bangkok": 80, 
        "Manila": 85, 
        "Ho Chi Minh": 75, 
        "Singapore": 80, 
        "Hanoi": 80, 
        "Yangon": 90, 
        "Phnom Penh": 95, 
        "Cebu": 100,
        "Kuala Lumpur": 80 
    }
};

// Dummy data for flights
const flightData = {
    // Jakarta routes
    'Jakarta-Bangkok': {
        times: ['08:00', '12:30', '17:45'],
        airlines: ['Thai Airways', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Thai Airways': { economy: 180, business: 500, first: 900 },
            'Garuda Indonesia': { economy: 170, business: 480, first: 850 },
            'AirAsia': { economy: 140, business: 420, first: 750 }
        }
    },
    'Jakarta-Kuala Lumpur': {
        times: ['07:30', '11:45', '16:30', '20:15'],
        airlines: ['Malaysia Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Malaysia Airlines': { economy: 160, business: 480, first: 850 },
            'Garuda Indonesia': { economy: 150, business: 450, first: 800 },
            'AirAsia': { economy: 120, business: 400, first: 700 }
        }
    },
    'Jakarta-Singapore': {
        times: ['07:00', '10:30', '14:45', '18:15', '21:30'],
        airlines: ['Singapore Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Singapore Airlines': { economy: 160, business: 460, first: 820 },
            'Garuda Indonesia': { economy: 150, business: 440, first: 800 },
            'AirAsia': { economy: 120, business: 380, first: 680 }
        }
    },
    'Jakarta-Ho Chi Minh': {
        times: ['08:45', '13:30', '18:15'],
        airlines: ['Vietnam Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Vietnam Airlines': { economy: 170, business: 480, first: 850 },
            'Garuda Indonesia': { economy: 160, business: 460, first: 820 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },

    // Bangkok routes
    'Bangkok-Jakarta': {
        times: ['09:15', '14:30', '19:45'],
        airlines: ['Thai Airways', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Thai Airways': { economy: 180, business: 500, first: 900 },
            'Garuda Indonesia': { economy: 170, business: 480, first: 850 },
            'AirAsia': { economy: 140, business: 420, first: 750 }
        }
    },
    'Bangkok-Kuala Lumpur': {
        times: ['08:30', '12:45', '17:30'],
        airlines: ['Thai Airways', 'Malaysia Airlines', 'AirAsia'],
        prices: {
            'Thai Airways': { economy: 150, business: 450, first: 800 },
            'Malaysia Airlines': { economy: 160, business: 480, first: 850 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },
    'Bangkok-Singapore': {
        times: ['07:45', '11:30', '15:45', '19:30'],
        airlines: ['Thai Airways', 'Singapore Airlines', 'AirAsia'],
        prices: {
            'Thai Airways': { economy: 160, business: 460, first: 820 },
            'Singapore Airlines': { economy: 170, business: 480, first: 850 },
            'AirAsia': { economy: 140, business: 420, first: 750 }
        }
    },
    'Bangkok-Ho Chi Minh': {
        times: ['08:15', '13:00', '17:45'],
        airlines: ['Thai Airways', 'Vietnam Airlines', 'AirAsia'],
        prices: {
            'Thai Airways': { economy: 140, business: 420, first: 750 },
            'Vietnam Airlines': { economy: 150, business: 440, first: 780 },
            'AirAsia': { economy: 120, business: 380, first: 680 }
        }
    },

    // Kuala Lumpur routes
    'Kuala Lumpur-Jakarta': {
        times: ['08:30', '13:00', '18:15'],
        airlines: ['Malaysia Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Malaysia Airlines': { economy: 160, business: 480, first: 850 },
            'Garuda Indonesia': { economy: 150, business: 450, first: 800 },
            'AirAsia': { economy: 120, business: 400, first: 700 }
        }
    },
    'Kuala Lumpur-Bangkok': {
        times: ['07:45', '12:30', '17:15'],
        airlines: ['Malaysia Airlines', 'Thai Airways', 'AirAsia'],
        prices: {
            'Malaysia Airlines': { economy: 140, business: 420, first: 750 },
            'Thai Airways': { economy: 150, business: 450, first: 800 },
            'AirAsia': { economy: 110, business: 380, first: 680 }
        }
    },
    'Kuala Lumpur-Singapore': {
        times: ['07:00', '09:30', '12:00', '14:30', '17:00', '19:30'],
        airlines: ['Malaysia Airlines', 'Singapore Airlines', 'AirAsia'],
        prices: {
            'Malaysia Airlines': { economy: 120, business: 360, first: 650 },
            'Singapore Airlines': { economy: 130, business: 380, first: 680 },
            'AirAsia': { economy: 100, business: 320, first: 580 }
        }
    },
    'Kuala Lumpur-Ho Chi Minh': {
        times: ['08:15', '13:00', '17:45'],
        airlines: ['Malaysia Airlines', 'Vietnam Airlines', 'AirAsia'],
        prices: {
            'Malaysia Airlines': { economy: 150, business: 440, first: 780 },
            'Vietnam Airlines': { economy: 160, business: 460, first: 820 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },

    // Singapore routes
    'Singapore-Jakarta': {
        times: ['07:30', '11:00', '14:30', '18:00', '21:30'],
        airlines: ['Singapore Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Singapore Airlines': { economy: 160, business: 460, first: 820 },
            'Garuda Indonesia': { economy: 150, business: 440, first: 800 },
            'AirAsia': { economy: 120, business: 380, first: 680 }
        }
    },
    'Singapore-Bangkok': {
        times: ['08:00', '11:30', '15:00', '18:30'],
        airlines: ['Singapore Airlines', 'Thai Airways', 'AirAsia'],
        prices: {
            'Singapore Airlines': { economy: 160, business: 460, first: 820 },
            'Thai Airways': { economy: 170, business: 480, first: 850 },
            'AirAsia': { economy: 140, business: 420, first: 750 }
        }
    },
    'Singapore-Kuala Lumpur': {
        times: ['07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        airlines: ['Singapore Airlines', 'Malaysia Airlines', 'AirAsia'],
        prices: {
            'Singapore Airlines': { economy: 130, business: 380, first: 680 },
            'Malaysia Airlines': { economy: 120, business: 360, first: 650 },
            'AirAsia': { economy: 100, business: 320, first: 580 }
        }
    },
    'Singapore-Ho Chi Minh': {
        times: ['08:30', '12:00', '15:30', '19:00'],
        airlines: ['Singapore Airlines', 'Vietnam Airlines', 'AirAsia'],
        prices: {
            'Singapore Airlines': { economy: 150, business: 440, first: 780 },
            'Vietnam Airlines': { economy: 160, business: 460, first: 820 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },

    // Ho Chi Minh routes
    'Ho Chi Minh-Jakarta': {
        times: ['08:45', '13:30', '18:15'],
        airlines: ['Vietnam Airlines', 'Garuda Indonesia', 'AirAsia'],
        prices: {
            'Vietnam Airlines': { economy: 170, business: 480, first: 850 },
            'Garuda Indonesia': { economy: 160, business: 460, first: 820 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },
    'Ho Chi Minh-Bangkok': {
        times: ['08:15', '13:00', '17:45'],
        airlines: ['Vietnam Airlines', 'Thai Airways', 'AirAsia'],
        prices: {
            'Vietnam Airlines': { economy: 150, business: 440, first: 780 },
            'Thai Airways': { economy: 140, business: 420, first: 750 },
            'AirAsia': { economy: 120, business: 380, first: 680 }
        }
    },
    'Ho Chi Minh-Kuala Lumpur': {
        times: ['08:15', '13:00', '17:45'],
        airlines: ['Vietnam Airlines', 'Malaysia Airlines', 'AirAsia'],
        prices: {
            'Vietnam Airlines': { economy: 160, business: 460, first: 820 },
            'Malaysia Airlines': { economy: 150, business: 440, first: 780 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    },
    'Ho Chi Minh-Singapore': {
        times: ['08:30', '12:00', '15:30', '19:00'],
        airlines: ['Vietnam Airlines', 'Singapore Airlines', 'AirAsia'],
        prices: {
            'Vietnam Airlines': { economy: 160, business: 460, first: 820 },
            'Singapore Airlines': { economy: 150, business: 440, first: 780 },
            'AirAsia': { economy: 130, business: 400, first: 720 }
        }
    }
};

// Currency exchange rates (as of a sample date)
const currencyRates = {
    'Jakarta': { code: 'IDR', rate: 15500 }, // 1 USD = 15,500 IDR
    'Bangkok': { code: 'THB', rate: 35.5 },  // 1 USD = 35.5 THB
    'Kuala Lumpur': { code: 'MYR', rate: 4.75 }, // 1 USD = 4.75 MYR
    'Singapore': { code: 'SGD', rate: 1.35 }, // 1 USD = 1.35 SGD
    'Ho Chi Minh': { code: 'VND', rate: 24500 } // 1 USD = 24,500 VND
};

// Function to format currency based on the currency code
function formatCurrency(amount, currencyCode) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return formatter.format(amount);
}

// Function to convert USD to destination currency
function convertToDestinationCurrency(usdAmount, destination) {
    const currencyInfo = currencyRates[destination];
    if (!currencyInfo) return usdAmount;

    const convertedAmount = usdAmount * currencyInfo.rate;
    return formatCurrency(convertedAmount, currencyInfo.code);
}

function calculateFlightPrice() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const flightTime = document.getElementById('flight-time').value;
    const airline = document.getElementById('airline').value;
    const seatClass = document.getElementById('seat-class').value;
    const quantity = parseInt(document.getElementById('ticket-quantity').value) || 1;

    if (departure && destination && flightTime && airline && seatClass) {
        const route = `${departure}-${destination}`;
        const routeData = flightData[route];

        if (routeData && routeData.prices[airline]) {
            // Use lowercase for seatClass to match dummy data keys
            const basePrice = routeData.prices[airline][seatClass.toLowerCase()];
            const totalPriceUSD = basePrice * quantity;
            // Convert to destination currency
            const convertedPrice = convertToDestinationCurrency(totalPriceUSD, destination);
            document.getElementById('flight-price-value').textContent = convertedPrice;
        } else {
            document.getElementById('flight-price-value').textContent = '0';
        }
    } else {
        document.getElementById('flight-price-value').textContent = '0';
    }
}

// Update the flight price display format
function updateFlightPriceDisplay() {
    const destination = document.getElementById('destination').value;
    const currencyInfo = currencyRates[destination];
    if (currencyInfo) {
        document.getElementById('flight-price').querySelector('p').textContent = 
            `Flight Price: ${currencyInfo.code} `;
    } else {
        document.getElementById('flight-price').querySelector('p').textContent = 
            'Flight Price: $';
    }
}

// Update the updateFlightTimes function to also update currency display
function updateFlightTimes() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const flightTimeSelect = document.getElementById('flight-time');
    const airlineSelect = document.getElementById('airline');

    // Clear previous options
    flightTimeSelect.innerHTML = '<option value="">Select Flight Time</option>';
    airlineSelect.innerHTML = '<option value="">Select Airline</option>';

    if (departure && destination && departure !== destination) {
        const route = `${departure}-${destination}`;
        const routeData = flightData[route];

        if (routeData) {
            // Add flight times
            routeData.times.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                flightTimeSelect.appendChild(option);
            });
            // Add airlines
            routeData.airlines.forEach(airline => {
                const option = document.createElement('option');
                option.value = airline;
                option.textContent = airline;
                airlineSelect.appendChild(option);
            });
            // Update currency display
            updateFlightPriceDisplay();
        } else {
            flightOptions.style.display = 'none';
        }
    } else {
        flightOptions.style.display = 'none';
    }
}

function updateAirlines() {
    const departure = document.getElementById('departure-city').value;
    const destination = document.getElementById('destination').value;
    const airlineSelect = document.getElementById('airline');
    const seatClassSelect = document.getElementById('seat-class');

    // Clear previous options
    airlineSelect.innerHTML = '<option value="">Select Airline</option>';
    seatClassSelect.innerHTML = '<option value="">Select Seat Class</option>';

    if (departure && destination) {
        const route = `${departure}-${destination}`;
        const routeData = flightData[route];

        if (routeData) {
            // Add airlines
            routeData.airlines.forEach(airline => {
                const option = document.createElement('option');
                option.value = airline;
                option.textContent = airline;
                airlineSelect.appendChild(option);
            });
        }
    }
}

function updateSeatClasses() {
    const seatClassSelect = document.getElementById('seat-class');
    seatClassSelect.innerHTML = '<option value="">Select Seat Class</option>';

    const classes = ['Economy', 'Business', 'First'];
    classes.forEach(seatClass => {
        const option = document.createElement('option');
        option.value = seatClass.toLowerCase();
        option.textContent = seatClass;
        seatClassSelect.appendChild(option);
    });
}

function swapCities() {
    const departureSelect = document.getElementById('departure-city');
    const destinationSelect = document.getElementById('destination');
    
    const tempValue = departureSelect.value;
    departureSelect.value = destinationSelect.value;
    destinationSelect.value = tempValue;
    
    updateFlightTimes();
}

// Function to check if all flight details are filled
function validateFlightDetails() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const flightTime = document.getElementById('flight-time').value;
    const airline = document.getElementById('airline').value;
    const seatClass = document.getElementById('seat-class').value;
    const ticketQuantity = document.getElementById('ticket-quantity').value;

    if (!departure) {
        alert("Please select a departure city.");
        return false;
    }

    if (!destination) {
        alert("Please select a destination city.");
        return false;
    }

    if (departure === destination) {
        alert("Departure and destination cities cannot be the same.");
        return false;
    }

    if (!flightTime) {
        alert("Please select a flight time.");
        return false;
    }

    if (!airline) {
        alert("Please select an airline.");
        return false;
    }

    if (!seatClass) {
        alert("Please select a seat class.");
        return false;
    }

    if (!ticketQuantity || ticketQuantity < 1 || ticketQuantity > 10) {
        alert("Please select a valid number of tickets (1-10).");
        return false;
    }

    return true;
}

// Update the nextStep function to include validation
function nextStep(stepNumber) {
    if (stepNumber === 2) {
        if (!validateFlightDetails()) {
            return;
        }
    } else if (stepNumber === 3) {
        if (!validateAccommodationDetails()) {
            return;
        }
    }
    // Removed validation for step 4
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });
    
    // Show the next step
    if (stepNumber === 5) {
        document.getElementById('total-estimate').style.display = 'block';
    } else {
        document.getElementById(`step-${stepNumber}`).style.display = 'block';
    }
    
    // Update progress bar
    const progress = ((stepNumber - 1) / 4) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
    
    // Update step indicators
    document.querySelectorAll('.step-indicator div').forEach((indicator, index) => {
        if (index + 1 <= stepNumber) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    if (stepNumber === 5) {
        calculateTotalTripPrice();
    }
}

// Initial price calculation for the first step
window.onload = () => {
    updateProgressBar(1);  // Start with 0% progress
};

function previousStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });
    
    // Show the previous step
    document.getElementById(`step-${stepNumber}`).style.display = 'block';
    
    // Update progress bar
    const progress = ((stepNumber - 1) / 4) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
    
    // Update step indicators
    document.querySelectorAll('.step-indicator div').forEach((indicator, index) => {
        if (index + 1 <= stepNumber) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Accommodation data with prices in USD
const accommodationData = {
    'Jakarta': {
        hotel: {
            'Standard Room': 80,
            'Deluxe Room': 120,
            'Executive Suite': 200,
            'Presidential Suite': 400
        },
        hostel: {
            'Dormitory Bed': 15,
            'Private Room': 35,
            'Family Room': 60
        },
        apartment: {
            'Studio': 70,
            '1 Bedroom': 100,
            '2 Bedroom': 150,
            '3 Bedroom': 200
        }
    },
    'Bangkok': {
        hotel: {
            'Standard Room': 90,
            'Deluxe Room': 140,
            'Executive Suite': 250,
            'Presidential Suite': 500
        },
        hostel: {
            'Dormitory Bed': 12,
            'Private Room': 30,
            'Family Room': 55
        },
        apartment: {
            'Studio': 80,
            '1 Bedroom': 120,
            '2 Bedroom': 180,
            '3 Bedroom': 240
        }
    },
    'Kuala Lumpur': {
        hotel: {
            'Standard Room': 85,
            'Deluxe Room': 130,
            'Executive Suite': 220,
            'Presidential Suite': 450
        },
        hostel: {
            'Dormitory Bed': 14,
            'Private Room': 32,
            'Family Room': 58
        },
        apartment: {
            'Studio': 75,
            '1 Bedroom': 110,
            '2 Bedroom': 160,
            '3 Bedroom': 220
        }
    },
    'Singapore': {
        hotel: {
            'Standard Room': 150,
            'Deluxe Room': 250,
            'Executive Suite': 400,
            'Presidential Suite': 800
        },
        hostel: {
            'Dormitory Bed': 25,
            'Private Room': 60,
            'Family Room': 100
        },
        apartment: {
            'Studio': 120,
            '1 Bedroom': 180,
            '2 Bedroom': 280,
            '3 Bedroom': 380
        }
    },
    'Ho Chi Minh': {
        hotel: {
            'Standard Room': 70,
            'Deluxe Room': 110,
            'Executive Suite': 180,
            'Presidential Suite': 350
        },
        hostel: {
            'Dormitory Bed': 10,
            'Private Room': 25,
            'Family Room': 45
        },
        apartment: {
            'Studio': 60,
            '1 Bedroom': 90,
            '2 Bedroom': 130,
            '3 Bedroom': 180
        }
    }
};

function updateRoomOptions() {
    const accommodationType = document.getElementById('accommodation-type').value;
    const roomOptions = document.getElementById('room-options');
    const roomClassSelect = document.getElementById('room-class');
    const destination = document.getElementById('destination').value;

    // Clear previous options
    roomClassSelect.innerHTML = '<option value="">Select Room Type</option>';

    if (accommodationType && destination) {
        roomOptions.style.display = 'block';
        const roomTypes = accommodationData[destination][accommodationType];
        
        // Add room types
        for (const [roomType, price] of Object.entries(roomTypes)) {
            const option = document.createElement('option');
            option.value = roomType;
            option.textContent = roomType;
            roomClassSelect.appendChild(option);
        }
    } else {
        roomOptions.style.display = 'none';
    }
}

function calculateAccommodationPrice() {
    const accommodationType = document.getElementById('accommodation-type').value;
    const roomClass = document.getElementById('room-class').value;
    const roomQuantity = parseInt(document.getElementById('room-quantity').value) || 1;
    const nights = parseInt(document.getElementById('nights').value) || 1;
    const destination = document.getElementById('destination').value;

    if (accommodationType && roomClass && destination) {
        const basePrice = accommodationData[destination][accommodationType][roomClass];
        const totalPriceUSD = basePrice * roomQuantity * nights;
        
        // Convert to destination currency
        const convertedPrice = convertToDestinationCurrency(totalPriceUSD, destination);
        document.getElementById('accommodation-price-value').textContent = convertedPrice;
    } else {
        document.getElementById('accommodation-price-value').textContent = '0';
    }
}

// Update the validateFlightDetails function to also validate accommodation details
function validateAccommodationDetails() {
    const accommodationType = document.getElementById('accommodation-type').value;
    const roomClass = document.getElementById('room-class').value;
    const roomQuantity = document.getElementById('room-quantity').value;
    const nights = document.getElementById('nights').value;

    if (!accommodationType) {
        alert("Please select an accommodation type.");
        return false;
    }

    if (!roomClass) {
        alert("Please select a room type.");
        return false;
    }

    if (!roomQuantity || roomQuantity < 1 || roomQuantity > 5) {
        alert("Please select a valid number of rooms (1-5).");
        return false;
    }

    if (!nights || nights < 1 || nights > 30) {
        alert("Please select a valid number of nights (1-30).");
        return false;
    }

    return true;
}

function goBack() {
    const currentStep = document.querySelector('.step.active');
    const currentStepNumber = parseInt(currentStep.id.split('-')[1]);
    
    if (currentStepNumber > 1) {
        // Hide current step
        currentStep.classList.remove('active');
        // Show previous step
        document.getElementById(`step-${currentStepNumber - 1}`).classList.add('active');
    }
}

// Car rental data with prices in USD per day
const carRentalData = {
    'Jakarta': {
        'Economy Car': 30,
        'Compact Car': 40,
        'Mid-size Car': 50,
        'SUV': 70,
        'Luxury Car': 100
    },
    'Bangkok': {
        'Economy Car': 25,
        'Compact Car': 35,
        'Mid-size Car': 45,
        'SUV': 65,
        'Luxury Car': 90
    },
    'Kuala Lumpur': {
        'Economy Car': 28,
        'Compact Car': 38,
        'Mid-size Car': 48,
        'SUV': 68,
        'Luxury Car': 95
    },
    'Singapore': {
        'Economy Car': 35,
        'Compact Car': 45,
        'Mid-size Car': 55,
        'SUV': 75,
        'Luxury Car': 120
    },
    'Ho Chi Minh': {
        'Economy Car': 20,
        'Compact Car': 30,
        'Mid-size Car': 40,
        'SUV': 60,
        'Luxury Car': 85
    }
};

function updateTransportationOptions() {
    const transportationType = document.getElementById('transportation-type').value;
    const carOptions = document.getElementById('car-options');
    const publicTransportInfo = document.getElementById('public-transport-info');
    const carTypeSelect = document.getElementById('car-type');
    const destination = document.getElementById('destination').value;

    // Clear previous options
    carTypeSelect.innerHTML = '<option value="">Select Car Type</option>';

    if (transportationType === 'car') {
        carOptions.style.display = 'block';
        publicTransportInfo.style.display = 'none';
        
        // Add car types
        const carTypes = carRentalData[destination];
        for (const [carType, price] of Object.entries(carTypes)) {
            const option = document.createElement('option');
            option.value = carType;
            option.textContent = carType;
            carTypeSelect.appendChild(option);
        }
    } else if (transportationType === 'public') {
        carOptions.style.display = 'none';
        publicTransportInfo.style.display = 'block';
    } else {
        carOptions.style.display = 'none';
        publicTransportInfo.style.display = 'none';
    }
}

function calculateTransportationPrice() {
    const transportationType = document.getElementById('transportation-type').value;
    const carType = document.getElementById('car-type').value;
    const rentalDays = parseInt(document.getElementById('rental-days').value) || 1;
    const destination = document.getElementById('destination').value;

    if (transportationType === 'car' && carType && destination) {
        const basePrice = carRentalData[destination][carType];
        const totalPriceUSD = basePrice * rentalDays;
        
        // Convert to destination currency
        const convertedPrice = convertToDestinationCurrency(totalPriceUSD, destination);
        document.getElementById('transportation-price-value').textContent = convertedPrice;
    } else {
        document.getElementById('transportation-price-value').textContent = '0';
    }
}

function validateTransportationDetails() {
    const transportationType = document.getElementById('transportation-type').value;
    
    if (!transportationType) {
        alert("Please select a transportation type.");
        return false;
    }

    if (transportationType === 'car') {
        const carType = document.getElementById('car-type').value;
        const rentalDays = document.getElementById('rental-days').value;

        if (!carType) {
            alert("Please select a car type.");
            return false;
        }

        if (!rentalDays || rentalDays < 1 || rentalDays > 30) {
            alert("Please select a valid number of rental days (1-30).");
            return false;
        }
    }

    return true;
}

// Dummy activity data for each destination
const activityData = {
    'Jakarta': [
        { name: 'National Monument Tour', price: 15 },
        { name: 'Ancol Dreamland', price: 20 },
        { name: 'Old Town Walking Tour', price: 10 }
    ],
    'Bangkok': [
        { name: 'Grand Palace Visit', price: 18 },
        { name: 'Floating Market Tour', price: 22 },
        { name: 'Temple Hopping', price: 12 }
    ],
    'Kuala Lumpur': [
        { name: 'Petronas Towers Tour', price: 16 },
        { name: 'Batu Caves Excursion', price: 14 },
        { name: 'KL Bird Park', price: 12 }
    ],
    'Singapore': [
        { name: 'Universal Studios', price: 35 },
        { name: 'Gardens by the Bay', price: 20 },
        { name: 'Sentosa Island', price: 25 }
    ],
    'Ho Chi Minh': [
        { name: 'Cu Chi Tunnels', price: 17 },
        { name: 'War Remnants Museum', price: 10 },
        { name: 'Mekong Delta Tour', price: 22 }
    ]
};

let activitySelections = [];

function renderActivityList() {
    const destination = document.getElementById('destination').value;
    const activityListDiv = document.getElementById('activity-list');
    activityListDiv.innerHTML = '';
    if (!destination || !activityData[destination]) {
        activityListDiv.innerHTML = '<p>Please select a destination city in Step 1.</p>';
        return;
    }
    activitySelections.forEach((selection, idx) => {
        const activityOptions = activityData[destination].map((act, i) =>
            `<option value="${i}">${act.name} ($${act.price})</option>`
        ).join('');
        activityListDiv.innerHTML += `
            <div class="activity-row">
                <label>Activity:</label>
                <select id="activity-select-${idx}" onchange="updateActivitySelection(${idx}, this.value)">
                    <option value="">Select Activity</option>
                    ${activityOptions}
                </select>
                <label>People:</label>
                <input type="number" min="1" max="20" value="${selection.people}" onchange="updateActivityPeople(${idx}, this.value)">
                <button type="button" onclick="removeActivity(${idx})">Remove</button>
            </div>
        `;
    });
    // Set the value of each select to the correct activityIdx ('' for new)
    activitySelections.forEach((selection, idx) => {
        const select = document.getElementById(`activity-select-${idx}`);
        if (select) select.value = selection.activityIdx;
    });
}

function addActivity() {
    const destination = document.getElementById('destination').value;
    if (!destination || !activityData[destination]) {
        alert('Please select a destination city in Step 1.');
        return;
    }
    activitySelections.push({ activityIdx: '', people: 1 });
    renderActivityList();
    calculateActivityPrice();
}

function removeActivity(idx) {
    activitySelections.splice(idx, 1);
    renderActivityList();
    calculateActivityPrice();
}

function updateActivitySelection(idx, value) {
    activitySelections[idx].activityIdx = value;
    calculateActivityPrice();
}

function updateActivityPeople(idx, value) {
    activitySelections[idx].people = parseInt(value) || 1;
    calculateActivityPrice();
}

function calculateActivityPrice() {
    const destination = document.getElementById('destination').value;
    let total = 0;
    if (destination && activityData[destination]) {
        activitySelections.forEach(sel => {
            if (sel.activityIdx !== '' && activityData[destination][sel.activityIdx]) {
                total += activityData[destination][sel.activityIdx].price * sel.people;
            }
        });
    }
    // Convert to destination currency
    const convertedPrice = convertToDestinationCurrency(total, destination);
    document.getElementById('activity-price-value').textContent = convertedPrice;
}

// Reset activities when destination changes
function resetActivitiesOnDestinationChange() {
    activitySelections = [];
    renderActivityList();
    calculateActivityPrice();
}

// Dummy transportation price data per day for each destination
const transportationPriceData = {
    'Jakarta': { bus: 5, car: 25, taxi: 15 },
    'Bangkok': { bus: 4, car: 22, taxi: 13 },
    'Kuala Lumpur': { bus: 4, car: 20, taxi: 12 },
    'Singapore': { bus: 6, car: 30, taxi: 18 },
    'Ho Chi Minh': { bus: 3, car: 18, taxi: 10 }
};

function calculateTransportationEstimation() {
    const destination = document.getElementById('destination').value;
    const type = document.getElementById('transport-type').value;
    const days = parseInt(document.getElementById('transport-days').value) || 1;
    let total = 0;
    if (destination && type && transportationPriceData[destination] && transportationPriceData[destination][type]) {
        total = transportationPriceData[destination][type] * days;
    }
    const convertedPrice = convertToDestinationCurrency(total, destination);
    document.getElementById('transportation-price-value').textContent = convertedPrice;
}

// Dummy car rental prices per day
const carRentalTypes = {
    sedan: { price: 30, seats: 4 },
    suv: { price: 50, seats: 6 },
    van: { price: 80, seats: 10 }
};

function updateTransportMainType() {
    const mainType = document.getElementById('transport-main-type').value;
    const carOptions = document.getElementById('car-options-extended');
    const publicMsg = document.getElementById('public-transport-message');
    if (mainType === 'rent') {
        carOptions.style.display = 'block';
        publicMsg.style.display = 'none';
        calculateCarRentalPrice();
    } else if (mainType === 'public') {
        carOptions.style.display = 'none';
        publicMsg.style.display = 'block';
    } else {
        carOptions.style.display = 'none';
        publicMsg.style.display = 'none';
    }
}

function calculateCarRentalPrice() {
    const carType = document.getElementById('car-type-detail').value;
    const days = parseInt(document.getElementById('car-days').value) || 1;
    const quantity = parseInt(document.getElementById('car-quantity').value) || 1;
    const destination = document.getElementById('destination').value;
    let total = 0;
    if (carType && carRentalTypes[carType]) {
        total = carRentalTypes[carType].price * days * quantity;
    }
    const convertedPrice = convertToDestinationCurrency(total, destination);
    document.getElementById('car-rental-price-value').textContent = convertedPrice;
}

function handleTransportNext() {
    const mainType = document.getElementById('transport-main-type').value;
    if (mainType === 'public' || mainType === 'others') {
        nextStep(5);
    } else if (mainType === 'rent') {
        // Optionally validate car rental fields
        const carType = document.getElementById('car-type-detail').value;
        const days = document.getElementById('car-days').value;
        const quantity = document.getElementById('car-quantity').value;
        if (!carType) {
            alert('Please select a car type.');
            return;
        }
        if (!days || days < 1 || days > 30) {
            alert('Please enter a valid number of days (1-30).');
            return;
        }
        if (!quantity || quantity < 1 || quantity > 10) {
            alert('Please enter a valid number of cars (1-10).');
            return;
        }
        nextStep(5);
    } else {
        alert('Please select a transportation option.');
    }
}

function calculateTotalTripPrice() {
    // Get destination for currency
    const destination = document.getElementById('destination').value;
    function parsePrice(id) {
        const el = document.getElementById(id);
        if (!el) return 0;
        const text = el.textContent || el.innerText || '0';
        return parseFloat(text.replace(/[^\d.]/g, '')) || 0;
    }
    const flight = parsePrice('flight-price-value');
    const accommodation = parsePrice('accommodation-price-value');
    const activities = parsePrice('activity-price-value');
    let transport = 0;
    const mainType = document.getElementById('transport-main-type').value;
    if (mainType === 'rent') {
        transport = parsePrice('car-rental-price-value');
    }
    const totalUSD = flight + accommodation + activities + transport;
    const converted = convertToDestinationCurrency(totalUSD, destination);
    document.getElementById('total-price-value').textContent = converted;

    // Table breakdown
    let summaryHtml = '<h5>Expense Breakdown</h5>';
    summaryHtml += '<table class="expense-table"><thead><tr><th>Type</th><th>Details</th><th>Price</th></tr></thead><tbody>';
    // Flight
    const departure = document.getElementById('departure').value;
    const dest = document.getElementById('destination').value;
    const airline = document.getElementById('airline').value;
    const seatClass = document.getElementById('seat-class').value;
    const ticketQty = document.getElementById('ticket-quantity').value;
    if (flight > 0) {
        summaryHtml += `<tr><td>Flight</td><td>${departure} to ${dest}, Airline: ${airline}, Class: ${seatClass}, Tickets: ${ticketQty}</td><td>${document.getElementById('flight-price-value').textContent}</td></tr>`;
    }
    // Accommodation
    const accType = document.getElementById('accommodation-type').value;
    const roomClass = document.getElementById('room-class').value;
    const roomQty = document.getElementById('room-quantity').value;
    const nights = document.getElementById('nights').value;
    if (accommodation > 0) {
        summaryHtml += `<tr><td>Accommodation</td><td>${accType}, Room: ${roomClass}, Rooms: ${roomQty}, Nights: ${nights}</td><td>${document.getElementById('accommodation-price-value').textContent}</td></tr>`;
    }
    // Activities
    if (activities > 0 && window.activitySelections && activitySelections.length > 0) {
        let activityDetails = '';
        let actTotal = 0;
        const actData = window.activityData && window.activityData[dest];
        activitySelections.forEach(sel => {
            if (sel.activityIdx !== '' && actData && actData[sel.activityIdx]) {
                const act = actData[sel.activityIdx];
                const price = convertToDestinationCurrency(act.price * sel.people, destination);
                activityDetails += `${act.name} x ${sel.people} (${price})<br>`;
                actTotal += act.price * sel.people;
            }
        });
        summaryHtml += `<tr><td>Activities</td><td>${activityDetails}</td><td>${document.getElementById('activity-price-value').textContent}</td></tr>`;
    }
    // Car rental
    if (mainType === 'rent' && transport > 0) {
        const carType = document.getElementById('car-type-detail').value;
        const carDays = document.getElementById('car-days').value;
        const carQty = document.getElementById('car-quantity').value;
        summaryHtml += `<tr><td>Car Rental</td><td>Type: ${carType}, Days: ${carDays}, Cars: ${carQty}</td><td>${document.getElementById('car-rental-price-value').textContent}</td></tr>`;
    }
    summaryHtml += '</tbody></table>';
    document.getElementById('summary-details').innerHTML = summaryHtml;
}
