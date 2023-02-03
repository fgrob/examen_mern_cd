const { Pet } = require('../models/pets.models');

module.exports.createPet = (req, res) => {
    const {name, type, description, skill1, skill2, skill3 } = req.body;
    const likes = 0;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        likes
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
}

module.exports.getPets = (req, res) => {
    Pet.find({})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.onePet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.editPet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.likePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, {$inc: {likes: 1}}, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err))
}
