const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Marcus Vinicius',
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
}

module.exports = new ContactsRepository();
