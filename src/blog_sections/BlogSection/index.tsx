import { CategoryFilter } from "@/blog_sections/BlogSection/components/CategoryFilter";
import { BlogGrid } from "@/blog_sections/BlogSection/components/BlogGrid";
import { Pagination } from "@/blog_components/Pagination";

export const BlogSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <CategoryFilter />
              <div className="box-border caret-transparent">
                <BlogGrid />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
