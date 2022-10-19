export function convertDate (date) {
    const dateArray = date.split("-");
    const getMonth = new Date(`${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`).toLocaleString('en-US', { month: 'long' })
    return `${getMonth} ${dateArray[2]}, ${dateArray[0]}`
}