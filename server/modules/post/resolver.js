module.exports = {
    Query: {
        postsByUserId: () => {
            return [{ title: 'Hello World!' }]
        },
        postById: () => {
            return { title: 'Hello, World!' }
        }
    },

    Mutation: {
        addPost: () => {
            return { message: "Hello World" }
        },
        updatePost: () => {
            return { message: "Hello World" }
        },
        deletePost: () => {
            return { message: "Hello World" }
        },
    }
}