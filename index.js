const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type TodoItem {
    name: String
    completed: Boolean
  }

  type Query {
    todoList: [TodoItem]
  }
`;

const todoList = [
  {
    name: 'Buy groceries',
    completed: false,
  },
  {
    name: 'Take out trash',
    completed: false,
  },
];

const resolvers = {
  Query: {
    todoList: () => todoList,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`>>>>>>>> Server ready at ${url}`);
});