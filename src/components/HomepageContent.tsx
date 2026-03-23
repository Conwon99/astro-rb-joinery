import { homepageSections, type ContentSection } from "@/content/site";
import { cn } from "@/lib/utils";

type HomepageContentProps = {
  className?: string;
  /** Location hubs pass localized sections; homepage uses default from `site.ts`. */
  sections?: ContentSection[];
};

const HomepageContent = ({ className, sections = homepageSections }: HomepageContentProps) => {
  return (
    <section
      className={cn("bg-background px-4 py-16 md:py-20", className)}
      aria-label="Services in detail"
    >
      <div className="container mx-auto max-w-7xl">
        {sections.map((section, i) => (
          <div key={section.h2 + i} className="mb-14 last:mb-0">
            <h2 className="font-display mb-4 text-3xl font-bold text-[hsl(var(--asphalt-grey))] lg:text-4xl">
              {section.h2}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="mb-4 max-w-3xl text-lg leading-relaxed text-[hsl(var(--asphalt-grey))]/90"
              >
                {p}
              </p>
            ))}
            {section.subsections?.map((sub) => (
              <div key={sub.h3} className="mt-8 border-l-4 border-green-600/40 pl-4">
                <h3 className="font-display mb-3 text-xl font-bold text-[hsl(var(--asphalt-grey))]">
                  {sub.h3}
                </h3>
                {sub.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="mb-3 max-w-3xl text-base leading-relaxed text-[hsl(var(--asphalt-grey))]/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageContent;
