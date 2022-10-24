function getDateString() {
	const date = new Date();
	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const day = `${date.getDate()}`.padStart(2, '0');
	return `${day}.${month}.${year}`
};
function getDateString2() {
	const date = new Date();
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const day = `${date.getDate()}`.padStart(2, '0');
	const hours = `${date.getHours()}`.padStart(2, '0');
	const minutes = `${date.getMinutes()}`.padStart(2, '0');
	return `${hours}:${minutes} - ${day}.${month}`
};
function getDateString3() {
	const date = new Date();
	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const day = `${date.getDate()}`.padStart(2, '0');
	const hours = `${date.getHours()}`.padStart(2, '0');
	const minutes = `${date.getMinutes()}`.padStart(2, '0');
	const seconds = `${date.getSeconds()}`.padStart(2, '0');
	return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`
};