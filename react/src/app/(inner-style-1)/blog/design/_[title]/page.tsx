export const dynamic = 'force-static';
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import BlogDetailsTop from "@/components/blog/BlogDetailsTop";
import BlogDetailsLeft from "@/components/blog/BlogDetailsLeft";
import BlogTags from "@/components/blog/BlogTags";
import CommentForm from "@/components/blog/CommentForm";
import BlogInnerArea from "@/components/blog/BlogInnerArea";
import SeoData from "@/components/tools/SeoData";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/blogs/design");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const blog = ({ params }: Props) => {
  const blogs = getAllPages("/blogs/design");

  if (!(blogs && blogs.length)) {
    notFound();
  }
  const blog = blogs.find((item) => item.slug === params.title);

  if (!(blog && blog.data)) {
    notFound();
  }

  const { title, views, shares, tags, meta } = blog.data || {};

  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <div className="container2">
        <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px]">
          <BlogDetailsTop {...blog} />
          <div className="mt-[60px] lg:mt-20 xl:mt-[100px] grid lg:grid-cols-[80px,1fr] xl:grid-cols-[80px,850px] gap-y-[30px] gap-x-[60px] xl:gap-x-[140px]">
            <BlogDetailsLeft views={views} shares={shares} title={title} description={meta?.meta_description} />
            <div>
              <MDXContent content={blog.content} />
              <BlogTags tags={tags} />
              <CommentForm />
            </div>
          </div>
          <BlogInnerArea blogs={blogs} />
        </div>
      </div>
    </main>
  );
};

export default blog;




