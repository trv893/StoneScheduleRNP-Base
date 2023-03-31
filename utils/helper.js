/**
 * Filters an array of shift data based on the provided filtering criteria.
 *
 * @param {Array} shiftData - The array of shift data to filter.
 * @param {Object} params - An object containing the filtering parameters.
 * @param {string|Date} params.date - The date to filter by, in either a string or Date format.
 * @param {number} params.userId - The user ID to filter by.
 * @param {boolean|null} params.released - The release status to filter by, or null to include all release statuses.
 * @param {string} params.shiftTime - The shift time to filter by, either "AM" or "PM".
 *
 * @returns {Array} An array of shift objects that match the provided filtering criteria.
 *
 * @example
 *
 * const shiftData = [
 *   {
 *     "shiftAssignmentId": 4988,
 *     "userId": 2,
 *     "shiftId": 1,
 *     "dateAssigned": "2023-03-13T00:00:00",
 *     "sectionId": 5,
 *     "releasedByUser": false,
 *     "dayId": 2,
 *     "section": "5",
 *     "assignee": "Aleesha Johnson",
 *     "releaseByUserId": 0,
 *     "shiftName": "AM"
 *   },
 *   // ... other shift objects
 * ];
 *
 * // Filter shiftData by date and shift time
 * const filteredShiftData = filterShiftDataNew(shiftData, { date: "2023-03-10", shiftTime: "PM" });
 * // filteredShiftData is an array containing the shift object with shiftId 2
 *
 * // Filter shiftData by userId and release status
 * const filteredShiftData2 = filterShiftDataNew(shiftData, { userId: 2, released: true });
 * // filteredShiftData2 is an array containing the shift object with shiftId 1 on March 14th, 2023
 */
export const filterShiftData = (shiftData, params = {}) => {
    if (!shiftData) {
      return [];
    }
    const noDataReturn = false;
  
    const { date = null, userId = null, released = null, shiftTime = null } = params;
  
    /**
     * Parses a date string or a Date object and returns the date in ISO format.
     * Returns null if the input is an invalid date string.
     * @param {String|Date} date - The date string or Date object to parse.
     * @returns {String|null} The date in ISO format or null if the input is an invalid date string.
     */
    function parseDate(date) {
      const dateObject = new Date(date);
      const isoDate = isNaN(dateObject) ? null : dateObject.toISOString();
      return isoDate ? isoDate.substring(0, 10) : null;
    }
  
    const filteredUserId = typeof userId === 'string' ? parseInt(userId) : userId;
  
    const filteredShiftData = shiftData.filter(shift => 
      (!date || parseDate(shift.dateAssigned) === parseDate(date)) &&
      (!filteredUserId || shift.userId === filteredUserId) &&
      (released === null || shift.releasedByUser === (released === true)) &&
      (!shiftTime || shift.shiftName === shiftTime.toUpperCase())
    );
  
    if (filteredShiftData.length === 0) {
      return noDataReturn;
    } else if (filteredShiftData.length === 1) {
      return filteredShiftData[0];
    } else {
      return filteredShiftData;
    }
  };


  export const format = (date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
  
    let dayOfMonthSuffix;
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
      dayOfMonthSuffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
      dayOfMonthSuffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
      dayOfMonthSuffix = 'rd';
    } else {
      dayOfMonthSuffix = 'th';
    }
  
    const formattedDayOfMonth = `${dayOfMonth}${dayOfMonthSuffix}`;
  
    return { dayOfWeek, dayOfMonth: formattedDayOfMonth };
  };
  
  
  export const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };
  
  export const subDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
  };

  /**
 * Logs a variable to the console, along with its name and location context.
 * @param {string} variableName - The name of the variable being logged.
 * @param {*} variable - The variable being logged.
 * @example
 * const myVariable = 'Hello, World!';
 * consoleLogTest('myVariable', myVariable);
 * // Output: myVariable: Hello, World!
 */
export const consoleLogTest = (variableName, variable) => {
  console.trace(`${variableName}:`, typeof variable === 'object' ? JSON.stringify(variable) : variable);
}
