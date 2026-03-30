"use Client";
import Link from "next/link";

type submenuProps = {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: {
    id: number;
    name: string;
    path: string;
  }[];
};
type LeftSubmenuProps = {
  submenuData: submenuProps;
};

const LeftSubmenu = ({ submenuData }: LeftSubmenuProps) => {
  const { children } = submenuData;
  return (
    <>
      <div className="w-full bg-[#232529] absolute left-full rtl:right-full top-0 grid grid-cols-1 gap-4 p-3 ext-[#999]">
        {children?.map((child) => (
          <Link
            href={child.path}
            className="text-text-fixed-3 hover:text-text-fixed-2 ease-out transition-all duration-300 transform hover:scale-105"
            key={child.id}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default LeftSubmenu;
