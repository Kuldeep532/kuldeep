// Function to toggle the menu visibility
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
    } else {
        navLinks.classList.add('hidden');
    }
}

// Function to fetch and display features from GitHub
async function fetchFeatures() {
    const featuresList = document.getElementById('features-list');
    try {
        const response = await fetch('https://api.github.com/repos/Kuldeep532/kuldeep/contents/Features');
        const features = await response.json();

        if (Array.isArray(features)) {
            features.forEach(feature => {
                const listItem = document.createElement('li');
                listItem.textContent = feature.name;
                featuresList.appendChild(listItem);
            });
        } else {
            featuresList.innerHTML = '<li>No features found.</li>';
        }
    } catch (error) {
        console.error('Error fetching features:', error);
        featuresList.innerHTML = '<li>Failed to load features.</li>';
    }
}

// Call the fetchFeatures function when the page loads
document.addEventListener('DOMContentLoaded', fetchFeatures);
