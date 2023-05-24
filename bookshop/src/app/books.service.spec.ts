import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';
import { of } from 'rxjs';
import { BookItem } from './models/book-item.interface';
import { environment } from 'src/environments/environment.development';

describe('BooksService', () => {
  let service: BooksService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all books', () => {
    const expectedBooks: BookItem[] = [
      {id: 1,
      title: "Amit sohase mondtam el",
      author: "Celeste Ng",
      bound: "puhatáblás",
      text: "„Lydia halott. De ők még nem tudják.” Így kezdődik az 1970-es években játszódó regény, amelynek középpontjában egy ohióbeli kisvárosban élő kínai–amerikai család áll. Marylin és James Leenek három gyereke van, és Lydia a kedvencük: a szülők az ő életére vetítik rá minden félbemaradt álmukat, reményüket és nagyravágyó tervüket. De amikor Lydia holttestét kifogják a házukhoz közeli tóból, a család addig is törékeny egyensúlya végképp felborul. Az Amit sohase mondtam el megindító történet. Finom megfigyelésekkel teli, érzékeny jellemrajz egy különös, de hallatlanul emberi és életteli családról, amelynek tagjai szüntelenül azért küzdenek, hogy jobban értsék egymást.",
      price: 1999,
      imgUrl: "amitsohase",
      isbn: "9789635044719",
      publisher: "Európa",
      ageCategory: "AA",
      pageNumber: 310,
      yearPublished: 2021,
      quantity: 1},
      { id: 2,
      title: "Autoboyography - Egy fiús könyv",
      author: "Christina Lauren",
      bound: "puhatáblás",
      text: "Tanner Scott és családja három éve ezelőtt költözött el Kaliforniából Utah államba. A biszexuális kamasz nehezen illeszkedett be új környezetébe. Most, hogy már csak egy féléve van hátra a középiskolából, alig várja, hogy szabad lehessen az egyetemen, így hát elhatározza, hogy az utolsó, Utahban töltött hónapjain nem fogja megerőltetni magát. Amikor azonban a legjobb barátja, Autumn felveti, hogy jelentkezzen a Provo High nagy presztízsű kreatív írás szemináriumára (ahol csábítóan nagy jutalom jár annak, aki egy félév alatt képes összerakni egy saját könyvet), Tanner nem tud ellenállni a kísértésnek, és belevág. Már csak azért is, hogy bebizonyítsa Autumn-nak, hogy már az ötlet is komolytalan. Miért ne lehetne négy hónap alatt megírni egy regényt? Semmiség: négy hónap egy egész örökkévalóság! Kiderül, hogy Tannernek csak részben van igaza: négy hónap csakugyan hosszú idő. Bár az csak egy pillanatba kerül, hogy felfigyeljen Sebastian testvérre, a mormon csodagyerekre, aki tavaly már kiadót is talált a szemináriumon írt regényéhez, most pedig az osztályt tanítja. Ahhoz pedig egy hónap sem kell, hogy Tanner fülig belé is szeressen. Bárminek is vallod magad és bármit is tanít a vallásod, a szerelem az szerelem.",
      price: 3699,
      imgUrl: "autoboyography",
      isbn: "9789635610778",
      publisher: "Könyvmolyképző",
      ageCategory: "YA",
      pageNumber: 382,
      yearPublished: 2020,
      quantity: 1 },
    ];
    httpClientSpy.get.and.returnValue(of(expectedBooks));

    service.getAllBooks().subscribe(books => {
      expect(books).toEqual(expectedBooks);
      expect(httpClientSpy.get).toHaveBeenCalledWith(`${environment.backendUrl}/books`);
      expect(service.booksList).toEqual(expectedBooks);
    });
  });

  it('should fetch book by Id', () => {
    const expectedBook: BookItem = { id: 1,
      title: "Amit sohase mondtam el",
      author: "Celeste Ng",
      bound: "puhatáblás",
      text: "„Lydia halott. De ők még nem tudják.” Így kezdődik az 1970-es években játszódó regény, amelynek középpontjában egy ohióbeli kisvárosban élő kínai–amerikai család áll. Marylin és James Leenek három gyereke van, és Lydia a kedvencük: a szülők az ő életére vetítik rá minden félbemaradt álmukat, reményüket és nagyravágyó tervüket. De amikor Lydia holttestét kifogják a házukhoz közeli tóból, a család addig is törékeny egyensúlya végképp felborul. Az Amit sohase mondtam el megindító történet. Finom megfigyelésekkel teli, érzékeny jellemrajz egy különös, de hallatlanul emberi és életteli családról, amelynek tagjai szüntelenül azért küzdenek, hogy jobban értsék egymást.",
      price: 1999,
      imgUrl: "amitsohase",
      isbn: "9789635044719",
      publisher: "Európa",
      ageCategory: "AA",
      pageNumber: 310,
      yearPublished: 2021,
      quantity: 1 };
    const bookId = 1;
    httpClientSpy.get.and.returnValue(of(expectedBook));

    service.getBookById(bookId).subscribe(book => {
      expect(book).toEqual(expectedBook);
      expect(httpClientSpy.get).toHaveBeenCalledWith(`${environment.backendUrl}/books/${bookId}`);
    });
  });

});
