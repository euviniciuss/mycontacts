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
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Fill in all requested data!' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      res.status(400).json({ error: 'This email is already in use!' });
    }

    const contact = await ContactsRepository.create(name, email, phone, category_id);

    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json');
      return res.json(contact);
    }

    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;

    const {
      name, email, phone, category_id,
    } = req.body;

    const contactId = await ContactsRepository.findById(id);

    if (!contactId) {
      return res.status(404).json({ error: 'User not found!' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Fill in all requested data!' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists && contactExists.id !== id) {
      return res.status(400).json({ error: 'This email is already in use!' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    res.status(200).json(contact);
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
