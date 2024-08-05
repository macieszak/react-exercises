const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
]

function getBooks() {
	return data
}

function getBook(id) {
	return data.find(d => d.id === id)
}

const book = getBook(3)
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// ... rest operator - pobiera reszte wartości z danej zmiennej i wrzuca do oddzielnej tablicy
const [primaryGenre, secondaryGenre, ...otherGenres] = genres

// ... spread operator - wyjmuje wszystkie wartości jeden po drugim oddzielnie i dodaje jako elementy w tablicy
const newGenres = [...genres, 'epic fantasy']
newGenres

const updatedBook = { ...book, moviePublicationDate: '2001-12-19', pages: 1210 }
updatedBook

//template literals
const summary = `${title}, was written by ${author}.`
summary

//ternaries instead of if/esle statements
const pagesRange = pages > 100 ? 'over a thousnad' : 'less than 1000'
pagesRange

//arrow functions
function getYear(str) {
	return str.split('-')[0]
}
console.log(getYear(publicationDate))

const getYearAarrowFunction = str => str.split('-')[0]
console.log(getYearAarrowFunction(publicationDate))

// const count = book.reviews.librarything.reviewsCount ?? "no data"
// count;

function getTotalReviewCount(book) {
	const goodreads = book.reviews.goodreads.reviewsCount
	// ?. optional chaining - js sprawdza czy to co jest przed znakiem zapytania w ogóle istnieje (ma wartość, nie jest nullem) i dopiero wtedy odczytuje to co jest dalej
	//w innym przypadku w ogóle nie sprawdza tego co jest dalej
	const librarything = book.reviews.librarything?.reviewsCount ?? 0
	return goodreads + librarything
}

console.log(getTotalReviewCount(book))

//the array map method
const books = getBooks()

const x = [1, 2, 3, 4].map(el => el * 2)

const titles = books.map(book => book.title)
titles

const essentialData = books.map(book => ({
	title: book.title,
	author: book.author,
}))
essentialData

//filter method
const longBooks = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation)
longBooks

//reduce method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0)
pagesAllBooks

//sort method --> zmienia wartości oryginalnej tablicy, dlatego jeśli chcemy zeby nie mutowala wartosci, musimy zrobic kopie tablicy--> slice()
const arr = [3, 7, 1, 9, 6]
const sorted = arr.slice().sort((a, b) => a - b)

//1) add book object to array
const newBook = {
	id: 6,
	title: 'Harry Potter and the Chamber of Secrets',
	author: 'J. K. Rowling',
}
const booksAfterAdd = [...books, newBook]
booksAfterAdd

// 2) delete book object from array
const bookAterDelete = booksAfterAdd.filter(book => book.id !== 3)
bookAterDelete

//3) update book object in the array
const booksAfterUpdate = bookAterDelete.map(book => (book.id === 1 ? { ...book, pages: 9999 } : book))
booksAfterUpdate

//promises
//fetch -> przekazujemy adres URL, API które chcemy pobrać
fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
//.then(data => console.log(data))

//async, await
async function getTodos() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	const data = await res.json()
	console.log(data)
}
getTodos()
