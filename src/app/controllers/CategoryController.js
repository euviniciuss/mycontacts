const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const { orderBy } = req.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return res.status(404).json({ error: 'User not found!' });
    }

    res.status(200).json(category);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required!' });
    }

    const category = await CategoriesRepository.create({ name });

    res.json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryId = await CategoriesRepository.findById(id);

    if (!categoryId) {
      return res.status(404).json({ error: 'User not found!' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Fill in all requested data!' });
    }

    const category = await CategoriesRepository.update(id, { name });

    res.status(200).json(category);
  }
}

module.exports = new CategoryController();
