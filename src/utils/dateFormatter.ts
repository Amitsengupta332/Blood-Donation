export const dateFormatter = (value: string) => {
  // Create a Date object from the input date string
  const date = new Date(value);

  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11
  const day = String(date.getDate()).padStart(2, "0"); // getDate() returns 1-31

  // Format the date to "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate; // Output: 2024-05-19
};
