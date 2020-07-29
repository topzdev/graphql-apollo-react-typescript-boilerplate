module.exports = {
  Post: {
    author: ({ userId }, _, { db, loaders: { userLoader } }) => {
      return userLoader.load(userId);
    },
  },

  Query: {
    postsFeed: (_, __, { db }) => {
      return db.Post.findAll({
        order: [["createdAt", "DESC"]],
      });
    },
    postsByUserId: (_, { id }, { db }) => {
      return db.Post.findAll({
        where: { userId: id },
      });
    },
    postById: (_, { id }, { db }) => {
      return db.Post.findByPk(id);
    },
  },

  Mutation: {
    addPost: async (_, { title, content, draft }, { db, req }) => {
      console.log("Add post", req.user);
      return {
        success: true,
        message: "Post Added",
        data: await db.Post.create({
          title,
          content,
          draft,
          userId: req.user.id,
        }),
      };
    },
    updatePost: async (_, args, { db }) => {
      const id = args.id;
      delete args.id;

      if (!id)
        return {
          success: false,
          message: "Id is missing",
        };

      await db.Post.update(args, { where: { id } });

      return {
        success: true,
        message: "Post Updated",
        data,
      };
    },
    deletePost: async (_, { id }, { db }) => {
      if (!id)
        return {
          success: false,
          message: "Id is missing",
        };

      await db.Post.destroy({ where: { id } });
      return {
        success: true,
        message: "Post Deleted",
      };
    },
  },
};
