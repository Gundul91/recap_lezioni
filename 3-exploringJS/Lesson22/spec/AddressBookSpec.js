describe('Address Book', function () {
  //dichiara var globali nella funzione
  var addressBook,
      thisContact;

  // viene eseguito prima di ogni "it"
  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function () {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function () {

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    // se non è definito vuole dire che è stato eliminato correttamente
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe('Async Address Book', function () {
  var addressBook = new AddressBook();

  //per testare funzioni asincrone si deve utilizzare la funzione "done"
  beforeEach(function(done) {
    // la funzione che richiama il done è quella di cb che viene passata al "setTimeout"
    addressBook.getInizialContacts(function() {
      done();
    })
  });

  it('should grab initial contacts', function () {
    expect(addressBook.initialComplete).toBe(true);
  });
});
