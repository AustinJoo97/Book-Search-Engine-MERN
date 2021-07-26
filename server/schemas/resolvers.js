const { User } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
        const foundUser = await User.findOne({
          $or: [{ _id: args.user ? args.user._id : args.params.id }, { username: args.params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
      }
  },

  Mutation: {
      createUser: async(parent, { username, email, password }, context) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async(parent, args, context) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      },
      saveBook: async(parent, args, context) => {

      },
      deleteBook: async(parent, args, context) => {

      }
  },
};

module.exports = resolvers;
