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

  async store(req, res) {
    const { name, email, phone } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Fill in all requested data!' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      res.status(400).json({ error: 'This email is already been taken' });
    }

    const contact = await ContactsRepository.create(name, email, phone);

    res.json(contact);
  }

  update() {
    // Atualizar um registro
  }

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      res.status(404).json({ error: 'User not found!' });
    }

    await ContactsRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new ContactController();
