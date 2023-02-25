const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {
    // Mostrar um registro específico
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
