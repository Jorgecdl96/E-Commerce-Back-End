const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{
        model: Product
      }]
    });

    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);

    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.use('/:id', async (req, res, next) => {
  try {
    const idData = await Tag.findByPk(req.params.id);

    if (!idData) {
      res.status(404).json({ message: `Tag ID: ${req.params.id} Not Found`});
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // include its associated Product data
  try {
    const getTag = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product
      }]
    })
    
    res.status(200).json(getTag);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
      const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(updateTag);
  } catch(err){
  res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
