const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Marcus Vinicius',
    email: 'marcus@gmail.com',
    phone: '(98) 98888-8888',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Silva Costa',
    email: 'marcus@gmail.com',
    phone: '(98) 98888-8888',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
