/* Book Interface */
interface Book {
 	title: string;
	resume: string;
	page: number;
}

/* function to show book */
let showBook = (book: Book) =>
	console.log(`
		Titre: ${book.title} 
		Resumer: ${book.resume} '\n' 
		Nombre de pages: ${book.page}
	`);

/*	Create a new Book */
let JungleBook = {
	title: "Le livre de la Jungle" , 
	resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ipsum quis ex cursus interdum a a augue. Sed dolor magna, tristique sed turpis quis, feugiat commodo ipsum. Nulla elementum leo nec libero varius aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur suscipit tincidunt neque nec bibendum. Phasellus ante purus, accumsan ac vestibulum eu, eleifend vel arcu. Nam sed vehicula neque. Maecenas rhoncus nisi vitae enim aliquet varius. " , 
	page: 21
}

showBook(JungleBook)