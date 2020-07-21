module.exports = {
    DataResult: {
        __resolverType: (obj) => {
            if (obj.username) return 'User'
            if (obj.title) return 'Post'
            if (obj instanceof String) return "Token"

            return null
        }
    },

    Query: {
        helloWorld: () => "Hello World"
    }
}