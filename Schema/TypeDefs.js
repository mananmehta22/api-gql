import { gql } from "apollo-server-express";

const typeDefs = gql`
  # Queries
  type Query {
    getUpcoming: String!
    getPast: String!
    getAll: String!
  }


`;
export default typeDefs;
