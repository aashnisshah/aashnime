const blogDate = function(stringDate) {
  const date = new Date(stringDate)
  console.log(date, date.getFullYear, date.getMonth + 1)
  return date.getFullYear() + "/" + (date.getMonth() + 1)
}

export default blogDate
