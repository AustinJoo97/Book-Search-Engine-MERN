const { User } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async (parent, { user = null, params }, context) => {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return 'Cannot find a user with this id!';
        }
      }
  },

  Mutation: {
      createUser: async(parent, { username, email, password }, context) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async(parent, { email, password }, context) => {
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
      saveBook: async(parent, { user, body }, context) => {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
        );
        return updatedUser;
      },
      deleteBook: async(parent, { user, params }, context) => {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: params.bookId } } },
            { new: true }
        );
        if (!updatedUser) {
            return "Couldn't find user with this id!";
        }
        return updatedUser;
      }
  },
};

module.exports = resolvers;
