class FakeDatabase {

    constructor() {
        this.authors = [
            {id: '1', name: 'Rafael Acioly', 'email': 'rafael@email.com'},
            {id: '2', name: 'Nadine Pereira', 'email': 'nadine@email.com'},
            {id: '3', name: 'Ryan', 'email': 'ryan@email.com'}
        ];

        this.blogPosts = [
            {
                id: 1,
                title: 'first title',
                content: 'first content',
                author: '1',
            },
            {
                id: 2,
                title: 'second title',
                content: 'second content',
                author: '2',
            },
            {
                id: 3,
                title: 'third title',
                content: 'third content',
                author: '3',
            },
            {
                id: 4,
                title: 'fourth title',
                content: 'fourth content',
                author: '2',
            },
            {
                id: 5,
                title: 'five title',
                content: 'five content',
                author: '3',
            },
        ];

        this.comments = [
            {id: 1, postId: 1, name: 'Anonymous', content: 'Good luck with your blog!'},
            {id: 2, postId: 2, name: 'Bla', content: 'Good luck with!'},
            {id: 3, postId: 3, name: 'Fle', content: 'Good luck!'},
        ]
    }

    getBlogPosts() {
        return this.blogPosts;
    }

    getBlogPost(id) {
        return this.blogPosts.filter(post => {
            return post.id === id;
        })[0];
    }

    getCommentsForPost(postId) {
        return this.comments.filter(comment => {
            return this.comments.postId === postId;
        })[0];
    }

    getAuthor(authorId) {
        return this.authors.filter(author => {
            return author.id === authorId;
        })[0];
    }

    getPostsOfAuthor(authorId) {
        return this.getBlogPosts().filter(item => {
            return item.author === authorId;
        });
    }

    addNewBlogPost(post) {
        post.id = this.blogPosts.length + 1;
        this.blogPosts.push(post);
        return post;
    }
}

export const fakeDatabase = new FakeDatabase();