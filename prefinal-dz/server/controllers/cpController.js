const Company = require('../models/companyModel');
const User = require('../models/userModel');

module.exports = {

    getAllCompanies: async (req, res) => {
        await Company.find({ create_by_user: req.body['create_by_user'] }, (err, company) => {
            if(err) return console.log(err);
            res.json(company);
        });

    },

    getOneCompany: async (req, res) => {
        const id = req.params['companyId'];
        await Company.findById(id, (err, company) => {
           if(err) return console.log(err);
           res.json(company);
        });
    },

    addCompany: async (req, res) => {
        const company = new Company(req.value['body']);
        await company.save(err => {
            if(err) {
                return res.json({err: 'Такая компания уже существует'});
            }
            console.log('Company is Save');
            res.status(200).json(company);
        })
    },

    updateCompany: async (req, res) => {
        const id = req.params['companyId'];
        const newData = req.value['body'];
        await Company.findByIdAndUpdate(id, newData, {new: true}, (err, result) => {
            if (err) return console.log(err);
            res.json(result);
        })
    },

    deleteCompany: async (req, res) => {
        const id = req.params['companyId'];
        await Company.findByIdAndDelete(id, (err, result) => {
            if(err) return console.log(err);
            res.json(result);
        })
    },

    getProfile: async (req, res) => {
        const data = req.body.email || req.body.id;

        await User.findOne({email: data}, (err, user) => {
            if(err) return console.log(err);
            newUser = JSON.parse(JSON.stringify(user));
            delete newUser.password;
            res.json(newUser);
        });



    },

    updateProfile: async (req, res) => {
        res.json({profile: 'update'})
    }
};