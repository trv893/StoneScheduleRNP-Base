// ../utils/api.js
const API_BASE_URL = 'https://api.example.com';

const formatDateToString = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
};

export const getShiftAssignments = async (startDate, endDate) => {
  const startDateString = formatDateToString(startDate);
  const endDateString = endDate ? formatDateToString(endDate) : "";
  const url = `http://192.168.50.230:8888/Employee/GetShiftAssignments?startDate=${startDateString}&endDate=${endDateString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorMessage = `Failed to fetch shift assignments: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      const errorMessage = `Invalid data format: expected an array, got ${typeof data}`;
      throw new Error(errorMessage);
    }

    return data; // Return the data instead of using callbacks
  } catch (error) {
    console.error(error);
    const errorMessage = `Error fetching shift assignments: ${error.message}`;
    throw new Error(errorMessage);
  }
};
