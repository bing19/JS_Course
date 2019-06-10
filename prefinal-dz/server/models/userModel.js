const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    phone_number: {
        type: String,
    },
    last_name: {
        type: String,
    },
    first_name: {
        type: String,
    },
    nick_name: {
        type: String,
    },
    description: {
        type: String,
    },
}, { versionKey: false,
    timestamps: { createdAt: 'created_at', updateddAt: 'updated_at' }

});

Schema.pre('save', async function(next) {
    try {
        // Generate Salt
       const salt =  await bcrypt.genSalt(10);
       // Genereate password hash (salt + hash)
       const passwordHash = await bcrypt.hash(this.password, salt);
       // Переопределение введенного пароля
       this.password = passwordHash;
       next();
    } catch (err) {
        throw new Error('Hashing password faild', err);
    }
});

Schema.methods.isValidPasswords = async function(password) {
    try {
       return await bcrypt.compare(password, this.password);
    }catch(err) {
        throw new Error('Hashing password faild', err);
    }
};

Schema.statics.isValidPasswords = function(){
    console.log(this);
};



module.exports = mongoose.model('User', Schema);

