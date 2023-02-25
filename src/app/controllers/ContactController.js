const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      res.status(404).json({ error: 'User not found!' });
    }

    res.status(200).json(contact);
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
