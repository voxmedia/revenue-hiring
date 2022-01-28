const { ApolloServer, gql } = require("apollo-server");
const ConcertTote = require("./lib/concert_tote");

const db = new ConcertTote();

db.update({key: 'foodItems', by: item => {
  return item.map(food => {
    // This is a simple ID builder
    food.id = "abcdefghijklmnopqrstuvwxyz".split('').filter(l => Math.random() > 0.8 ).join('') + '-' + Math.ceil(Math.random()*100)
    // you made need to do other things to update the food items
    // prior to querying them.
    return food;
  })
}})

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    foods: [FoodItem]
  }

  #type Mutation {
  #}

  type FoodItem {
    id: ID!
    # TODO - Add the rest of the food item types here
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!",
    foods: (root, args, context) => db.get({key: 'foodItems'})
    // TODO – Write the resolver here.
  },

  // Mutation: {}
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
