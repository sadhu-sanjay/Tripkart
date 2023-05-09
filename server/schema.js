const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require('graphql');

const { executeQuery } = require('./db/db');

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        nm: { type: GraphQLString },
    })
})

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        nm: { type: GraphQLString },
    })
})

// should be able to query for a category with a given id and get back the category name and a list of products in that category
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        category: {
            type: CategoryType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                const query = 'SELECT * FROM categories WHERE id = ?';
                const params = [args.id];
                const res = executeQuery(query, params)
                
                return executeQuery(query, params)
                    .then(results => results[0])
                    .catch(err => err);
            }
        },
        categories: {
            type: new GraphQLList(CategoryType),
            resolve(parent, args) {
                const query = 'SELECT * FROM categories';
                return executeQuery(query)
                    .then(results => results)
                    .catch(err => console.log(err));
            }   
        },
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                const query = 'SELECT * FROM products WHERE id = ?';
                const params = [args.id];
                return executeQuery(query, params)
                    .then(results => results[0])
                    .catch(err => console.log(err));
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                const query = 'SELECT * FROM products';
                return executeQuery(query)
                    .then(results => results)
                    .catch(err => console.log(err));
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})

