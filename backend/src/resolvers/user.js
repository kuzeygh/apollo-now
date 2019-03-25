export default {
  Query: {
    user: (parent, args, ctx, info) => {
      return ctx.prisma.user({ id: args.id });
    },

    users: (parent, args, ctx, info) => {
      return ctx.prisma.users();
    }
  }
};
