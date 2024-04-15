import { Metadata } from "next"

const metadata: Metadata = {
  title: "Blog"
};
//o/p of Blog title - Blog | DynamicTitle

// const metadata: Metadata = {
//   title: {
//     absolute: "Blog" //The dynamic template from root layout will be ignored.
//   }
// };
const Blog = () => {
  return (
    <div>My Blog</div>
  )
}

export default Blog