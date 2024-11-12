const { gql } = require('apollo-server');

const userTypeDefs = gql`
    scalar Date

    type User {
        id: ID!
        fullName: String!
        email: String!
        password: String!
        address: String!
        phone: String!
        registrationDate: Date
        userType: String!
        preferredPayMethod: String!
        facturapiid: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        createUser(
        fullName: String!, 
        email: String!, 
        password: String!, 
        address: String!, 
        phone: String!, 
        userType: String!, 
        preferredPayMethod: String!,
        facturapiid: String
        ): User
        
        updateUser(
        id: ID!, 
        fullName: String, 
        email: String, 
        password: String, 
        address: String, 
        phone: String, 
        userType: String, 
        preferredPayMethod: String
        ): 
        User
        
        deleteUser(id: ID!): User
    }
`;

module.exports = userTypeDefs