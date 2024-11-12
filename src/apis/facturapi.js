// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('sk_test_2NbGV0oEzXwqaA9Jdv4va2o4qPW148mLD5YenKxP6j');

async function createProduct(product) {
    const facturapiProduct = {
        description: product.description,
        product_key : "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function createCustomer(user) {
    const facturapiUser = {
        legal_name: user.fullName,
        email: user.email,  
        tax_id: user.rfc || "XAXX010101000",
        tax_system: "601",
        address: {
            street: user.address || "",
            zip: "12345"
        },
        phone: user.phone
    };
    return await facturapi.customers.create(facturapiUser);
}

async function updateCustomer(facturapiId, user){
    const facturapiUser = {
        legal_name: user.fullName,
        email: user.email,  
        address: {
            street: user.address || "",
            zip: "12345"
        },
        phone: user.phone
    };
    return await facturapi.customers.update(facturapiId, facturapiUser);
}

async function deleteCustomer(facturapiId) {
    return await facturapi.customers.delete(facturapiId);
}

module.exports = { createProduct, createCustomer, updateCustomer, deleteCustomer };