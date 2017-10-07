// 13. create gql schema

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'

// 16. wrap the schema in a function and export the function rather than the schema
let Schema = (db) => {

  let linkType = new GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: {  type: GraphQLString },
      title: {  type: GraphQLString },
      url: {  type: GraphQLString }
    })
  })

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray()
        }
      })
    })
  })
  return schema
}

export default Schema
