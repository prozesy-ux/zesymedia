import { CategoryScroller } from "@/blog_sections/BlogSection/components/CategoryScroller";

export const CategoryFilter = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-4 flex justify-start gap-y-4 w-full overflow-hidden">
      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start gap-y-4 w-full overflow-hidden">
        <CategoryScroller />
      </div>
    </div>
  );
};
