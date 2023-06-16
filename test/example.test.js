const Post = require("../models/post");

describe("Post Model", () => {
  it("should require 'title' field", () => {
    const post = new Post();
    const validationError = post.validateSync();
    expect(validationError.errors.title).toBeDefined();
  });

  it("should require 'body' field", () => {
    const post = new Post();
    const validationError = post.validateSync();
    expect(validationError.errors.body).toBeDefined();
  });

  it("should set 'author' field to default value 'Anonymus'", () => {
    const post = new Post();
    expect(post.author).toBe("Anonymus");
  });

  it("should have virtual properties 'publishedAt' and 'publishedSince'", () => {
    const post = new Post();
    post.createdAt = new Date();

    expect(post.publishedAt).toBeDefined();
    expect(post.publishedSince).toBeDefined();
  });
});