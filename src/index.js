// src/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://alcuevasal:12345@products.thkd3.mongodb.net/?retryWrites=true&w=majority&appName=products');
  
  const typeDefs = [productTypeDefs, userTypeDefs];
  const resolvers = [productResolvers, userResolvers];
 
 
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
