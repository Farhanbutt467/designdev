import { TBlogType } from "@/types";
import BlogInnerCard from "@/components/blog/BlogInnerCard";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  blogs: TBlogType[];
};

const BlogInnerArea = ({ blogs }: Props) => {
  return (
    <div className="container2">
      <div className="main-section-spacing">
        <InnerSectionTitle title="Related articles" />
        <div className="mt-[27px] xl:mt-[47px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-y-10 gap-x-[35px] xl:gap-[45px]">
            {blogs.map((blog, i) => (
              <BlogInnerCard key={blog.data.id} {...blog} serialNo={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInnerArea;
