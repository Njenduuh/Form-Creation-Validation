// Define the asynchronous function to fetch user data
async function fetchUserData() {
    // API URL for fetching the user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API using await
        const response = await fetch(apiUrl);
        const users = await response.json(); // Parse the response as JSON

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the list of users
        const userList = document.createElement('ul');

        // Loop through the users array and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as text
            userList.appendChild(listItem);   // Append <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // In case of an error, display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error); // Log the error
    }
}

// Add an event listener to run fetchUserData when the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
