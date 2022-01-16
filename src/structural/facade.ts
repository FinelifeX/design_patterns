let id = 1;

enum TicketTypes {
  Theater = 'theater',
  Concert = 'concert',
}

class Ticket {
  id: number;
  details: string;

  constructor(details: string) {
    this.id = id++;
    this.details = details;
  }
}

class TicketsRegistry {
  tickets: Ticket[];

  constructor() {
    this.tickets = [];
  }

  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }
}

class TheaterTicketsRegistry extends TicketsRegistry {
  private static instance: TheaterTicketsRegistry;

  constructor() {
    super();

    if (!TheaterTicketsRegistry.instance) TheaterTicketsRegistry.instance = this;

    return TheaterTicketsRegistry.instance;
  }

  static getInstance() {
    return TheaterTicketsRegistry.instance;
  }
}

class ConcertTicketsRegistry extends TicketsRegistry {
  private static instance: ConcertTicketsRegistry;

  constructor() {
    super();

    if (!ConcertTicketsRegistry.instance) ConcertTicketsRegistry.instance = this;

    return ConcertTicketsRegistry.instance;
  }

  static getInstance() {
    return ConcertTicketsRegistry.instance;
  }
}

class TicketMachine {
  registerTicket(ticket: Ticket, type: TicketTypes) {
    let registry: TicketsRegistry;

    switch (type) {
      case TicketTypes.Concert:
        registry = new ConcertTicketsRegistry();
        break;
      case TicketTypes.Theater:
        registry = new TheaterTicketsRegistry();
        break;
      default:
        throw new Error('Incorrect ticket type!');
    }

    registry.addTicket(ticket);
  }
}

const ticketMachine = new TicketMachine();

ticketMachine.registerTicket(new Ticket('hello'), TicketTypes.Concert);
ticketMachine.registerTicket(new Ticket('world'), TicketTypes.Theater);

console.log(ConcertTicketsRegistry.getInstance());
console.log(TheaterTicketsRegistry.getInstance());

