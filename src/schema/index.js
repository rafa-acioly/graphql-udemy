import { GraQLSchema, GraphQLObjectType } from 'graphql';

import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';

import addPost from './mutations/addPost';
import addComment from './mutations/addComments'

const schema = new GraQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...posts,
            ...post,
            ...author
        })
    }),

    mutation: new GraphQLObjectType({
        name: 'Rootmutation',
        fields: () => ({
            ...addPost,
            ...addComment,
        })
    })
})