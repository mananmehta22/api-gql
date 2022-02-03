import { gql } from "apollo-server-express";

const typeDefs = gql`
  # Queries
  type Query {
    getUpcoming: [Int]
    getPast: Past
    getAll: All
  }

  type Upcoming {
    upcoming: Int
  }

  type Past{
    past: String
  }

  type All {
    fairings: String
    static_fire_date_utc: String
    static_fire_date_unix: String
    net: Boolean
    window: String
    rocket: String
    success: String
    details: String
    launchpad: String
    flight_number: Int
    name: String
    date_utc: String
    date_unix: Int
    date_local: String
    date_precision: String
    upcoming: Boolean
    auto_update: Boolean
    tbd: Boolean
    launch_library_id: String
    id: String
    payloads: [String]
    capsules: [String]
    ships: [String]
    failures: [String]
  }
`;
export default typeDefs;
