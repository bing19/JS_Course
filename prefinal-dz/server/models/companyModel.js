const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String
    },
    service_of_activity: {
        type: String
    },
    number_of_employees: {
        type: Number
    },
    description: {
        type: String
    },
    create_by_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { versionKey: false,
    timestamps: { createdAt: 'created_at', updateddAt: 'updated_at' }
});

module.exports = mongoose.model('Companie', Schema);