const { expect } = require('chai');
const Post = require("../models/post");

describe("Post Model", () => {
  it("should be correct 'body' field", () => {
    const post = new Post();
    const validationError = post.validateSync();
    expect(post).to.have.property('body');
  });


  it("Description should be say: 'For your eyes only'", () => {
    const post = new Post();
    expect(post).to.have.property('description');
  });

  it("Author should be called 'Daniel'", () => {
    const post = new Post();
    expect(post.author).to.equal('Daniel');
  });

  it("Giving a start name to the post'", () => {
    const post = new Post();
    expect(post).to.have.property('title');
  });

  it("Virtual properties that created a new variable", () => {
    const post = new Post();
    post.createdAt = new Date();

    expect(post).to.have.property('publishedAt').to.exist;
    expect(post).to.have.property('publishedSince').to.exist;



  });
});