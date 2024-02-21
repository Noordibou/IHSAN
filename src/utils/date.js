function formatDate(dateString) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return ""; // or any default value you prefer
  }
  
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };
export { formatDate };