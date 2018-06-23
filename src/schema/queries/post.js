import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { Post } from '../types/Post'
import { fakeDatabase } from '../../FakeDatabase';

export default {
    author: {
        type: Post,
        description: 'Get a specific blog post.',
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: function(parent, {id}) {
            return fakeDatabase.getBlogPost(id);
        }
    }
}