interface IBook {
  name: string;
  author: string;
  isHardBind: boolean;
  isWrapped: boolean;
}

class Book implements IBook {
  name: IBook['name'];
  author: IBook['author'];
  private _hardbind = false;
  private _wrapped = false;

  constructor(name: IBook['name'], author: IBook['author']) {
    this.name = name;
    this.author = author;
  }

  wrap() {
    this._wrapped = true;
  }

  unwrap() {
    this._wrapped = false;
  }

  addBind() {
    this._hardbind = true;
  }

  removeBind() {
    this._hardbind = false;
  }

  get isHardBind() {
    return this._hardbind;
  }

  get isWrapped() {
    return this._wrapped;
  }

  toString() {
    return `
    ${this.author}: ${this.name}
    Gift: ${this.isWrapped}
    Hardbound: ${this.isHardBind}`;
  }
}

function giftWrapped(book: Book) {
  book.wrap();

  return book;
}

function hardBound(book: Book) {
  book.addBind();

  return book;
}

const giftBook = giftWrapped(new Book('It', 'S. King'));
console.log(giftBook.toString());

const hardboundGiftBook = hardBound(giftBook);
console.log(hardboundGiftBook.toString());