const User = require('../models/userModel');
const { createCustomer, updateCustomer, deleteCustomer } = require('../apis/facturapi');

const userService = {
    getUsers: async () => await User.find(),
    createUser: async (args) => {
        const user = new User(args);
        const facturapiCustomer = await createCustomer(user);
        user.facturapiid = facturapiCustomer.id;
        return await user.save();
    },
    updateUser: async ({id, ...rest}) => {
        const userToUpdate = await User.findById(id);
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        await updateCustomer(userToUpdate.facturapiid, rest);
        Object.assign(userToUpdate, rest);
        return await userToUpdate.save();
    },

    deleteUser: async (id) => {
        const userToDelete = await User.findById(id);
        if (!userToDelete) {
            throw new Error('User not found');
        }
        await deleteCustomer(userToDelete.facturapiid);
        return await User.findByIdAndDelete(id);
    },

}

module.exports = userService;