export const searchFunction = (keyWord, data) => {
	let text = keyWord.toLowerCase();
	let filteredName = data.filter(item => {
		return item.name.toLowerCase().match(text);
	});
	if (!text || text === '') {
		return data;
	} else if (!Array.isArray(filteredName) && !filteredName.length) {
		// set no data flag to true so as to render flatlist conditionally
		return [];
	} else if (Array.isArray(filteredName)) {
		return filteredName;
	}
};
