module.exports = {
    DataResult: {
        __resolveType: (obj) => {

            if (obj.username) return 'User'
            if (obj.title) return 'Post'

            return null
        }
    },

    Query: {
        helloWorld: () => "Hello World"
    }
}