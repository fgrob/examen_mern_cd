const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.post('/api/crear', PetController.createPet);
    app.get('/api/pets', PetController.getPets);
    app.get('/api/pet/:id', PetController.onePet);
    app.put('/api/pet/edit/:id', PetController.editPet);
    app.delete('/api/pet/delete/:id', PetController.delete);
    app.put('/api/pet/like/:id', PetController.likePet);
}