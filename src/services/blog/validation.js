import { body } from "express-validator"

export const blogPostValidationMiddleware = [
  body("category").exists().withMessage("Category is a mandatory field!"),
  body("title").exists().withMessage("Title is a mandatory field!"),
  body("content").exists().withMessage("Content is a mandatory field!"),
]

export const blogPostCommentValidationMiddleware = [
  body("comment").exists().withMessage("Please, add a comment."),
]

// "_id": "SERVER GENERATED ID",
//     "category": "ARTICLE CATEGORY",
//     "title": "ARTICLE TITLE",
//     "cover": "ARTICLE COVER (IMAGE LINK)",
//     "readTime": { "value": 2, "unit": "minute" },
//     "author": { "name": "AUTHOR AVATAR NAME", "avatar": "AUTHOR AVATAR LINK" },
//     "content": "HTML",
//     "createdAt": "NEW DATE"

// const schema = {
//   title: {
//     in: ["body"],
//     isString: {
//       errorMessage: "title validation failed , type must be string  ",
//     },
//   },
//   category: {
//     in: ["body"],
//     isString: {
//       errorMessage: "category validation failed , type must be  string ",
//     },
//   },
//   content: {
//     in: ["body"],
//     isString: {
//       errorMessage: "content validation failed , type must be string ",
//     },
//   },
//   "author.name": {
//     in: ["body"],
//     isString: {
//       errorMessage: "author.name validation failed , type must be string",
//     },
//   },
//   "author.avatar": {
//     in: ["body"],
//     isString: {
//       errorMessage: "author.avatar validation failed , type must be string",
//     },
//   },
//   "readTime.value": {
//     in: ["body"],
//     isNumeric: {
//       errorMessage: "readTime.value  validation failed , type must be numeric ",
//     },
//   },
//   "readTime.unit": {
//     in: ["body"],
//     isString: {
//       errorMessage: "readTime.unit  validation failed , type must be string ",
//     },
//   },
//   cover: {
//     in: ["body"],
//     isString: {
//       errorMessage: "cover validation failed , type must be string",
//     },
//   },
// }

// const searchSchema = {
//   title: {
//     in: ["query"],
//     isString: {
//       errorMessage:
//         "title must be in query and type must be  string to search!",
//     },
//   },
// }

// export const checkSearchSchema = checkSchema(searchSchema)
// export const checkBlogPostSchema = checkSchema(schema)

// export const checkValidationResult = (req, res, next) => {
//   const errors = validationResult(req)
//   if (!errors.isEmpty()) {
//     const error = new Error("Blog post validation is failed")
//     error.status = 400
//     error.errors = errors.array()
//     next(error)
//   }
//   next()
// }
