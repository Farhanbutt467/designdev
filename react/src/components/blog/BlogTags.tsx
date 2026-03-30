import Link from "next/link";

type Props = {
  tags: {
    name: string;
    link: string;
  }[];
};

const BlogTags = ({ tags }: Props) => {
  return (
    <div className="mt-[30px]">
      <ul className="flex">
        <li>
          <span className="me-[5px] text-text">Tags:</span>
        </li>
        {tags.map((tag, index) => (
          <li key={index}>
            <Link className="underline text-text-3" href={tag?.link}>
              {index < tags.length - 1 ? `${tag?.name},` : tag?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTags;
