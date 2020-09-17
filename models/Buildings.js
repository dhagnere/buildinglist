const mongoose = require('mongoose');

//Building Schema
const buildingSchema = mongoose.Schema({
  title: {
    type: String
  },
  category: {
    type: String
  },
  adress: {
    type: String
  },
  zip: {
    type: String
  },
  town: {
    type: String
  },
  energy: {
    type: String
  },
  pdl: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  travaux: [{
    travaux_subject: {
      type: String
    },
    travaux_date: {
      type: Date
    },
    travaux_body: {
      type: String
    },
    travaux_fournisseurs: {
      type: String
    },
    travaux_regie: {
      type: String
    },
    travaux_cost_fournisseurs: {
      type: Number
    },
    travaux_cost_regie: {
      type: Number
    },
    travaux_cee: {
      type: String
    },
    gain_cee: {
      type: String
    },
  }]  
});

const Building = module.exports = mongoose.model('Building', buildingSchema);

//Get Building
module.exports.getBuildings = function (callback, limit) {
  Building.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//Add Building
module.exports.addBuilding = function ( building ,callback) {
  Building.create(building , callback);
}

//Get single building by id
module.exports.getBuildingById = function ( id ,callback) {
  Building.findById(id , callback);
}

// Update Building
module.exports.updateBuilding = function ( query, update, options, callback) {
  Building.findOneAndUpdate(query, update, options, callback);
}

//Remove building
module.exports.deleteBuilding = function ( query, callback) {
  Building.deleteOne(query, callback);
}