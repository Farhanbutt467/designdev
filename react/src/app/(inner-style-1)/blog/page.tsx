import BlogArea from "@/components/blog/BlogArea";
import BlogFeatureArea from "@/components/blog/BlogFeatureArea";
import FeaturedPost from "@/components/blog/FeaturedPost";
import SeoData from "@/components/tools/SeoData";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

const BlogPage = () => {
  const blogs = getAllPages("/blogs/branding");
  const { data: blogPage } = getMainPage("/blogs/branding/_index.mdx");
  const lastThreeBlogs = blogs.slice(-3);

  const { title, feature, blog_area, meta } = blogPage || {};
  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <BlogFeatureArea {...feature} />
      <FeaturedPost blogs={lastThreeBlogs} />
      <BlogArea blogs={blogs} {...blog_area} />
    </main>
  );
};

export default BlogPage;
