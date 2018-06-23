import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { Comment, CommentInputType } from '../types/Comments';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    addComment: {
        type: Comment,
        description: 'Creates a new comment for a blog blog',
        args: {
            comment: { type: CommentInputType }
        },
        resolve: function(parent, {comment}) {
            return fakeDatabase.addNewComment(comment);
        }
    }
}