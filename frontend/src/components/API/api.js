// Importing the 'axios' library for making HTTP requests
import axios from 'axios';

// Creating and exporting an instance of 'axios' with a specified base URL
export default axios.create({
    baseURL: 'http//localhost:8080'  // Base URL for API requests
});
