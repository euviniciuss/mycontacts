class ContactController {
  index(req, res) {
    res.send('Hello World Contact Controller');
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
