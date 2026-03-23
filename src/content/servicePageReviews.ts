/**
 * Google reviews shown on service pages (six reviews — keep in sync with your GBP).
 */

export type GoogleReviewCard = {
  title: string;
  text: string;
  author: string;
  /** Shown after the author (e.g. relative time from Google) */
  date: string;
};

export const googleReviewsBand = {
  heading: "What Our Clients Say",
  subheading:
    "Hear from satisfied clients who trust RB Joinery for reliable joinery and building work across Ayrshire and Glasgow.",
  summary: {
    excellentLabel: "Excellent",
    reviewCount: 6,
    /** Google Business Profile (share) link — used for review count + each card */
    reviewCountLink: "https://share.google/dEIB7jDb2a4OAmAlF",
  },
  footerNote: "Showing our latest reviews.",
  reviews: [
    {
      title: "Living room brought to life",
      text: "Highly recommend RB Joinery Ryan was fab & very patient with my ideas when changing my living room. Work was carried out to high standard & he was always available if i needed to chat with him. He was able to advise me on all aspects of the work needed & the timescale involved. He also sourced out materials to give me a cost affective plan with the idea i had in my head & kept within my budget & brought it to life for me. Great job",
      author: "Heather Wyllie",
      date: "4 months ago",
    },
    {
      title: "Ryan will be my first call",
      text: "I wouldn't hesitate to personally recommend Ryan and his team. They turned up early each morning when they said they would. I was kept updated with all aspects of the work and any issue they found. The work carried out was to a high professional standard. Any future work I'll be needing done, Ryan will be my first call.",
      author: "Elisha Kentfield",
      date: "4 months ago",
    },
    {
      title: "Garden room doors",
      text: "I have used Ryan on a few projects now. Most recently I had a set of doors installed in my garden room. Ryan was really helpful advising what I needed. I'm delighted with the finished job — all done to a high standard and delivered on time. Would highly recommend.",
      author: "Susan Morris",
      date: "3 months ago",
    },
    {
      title: "What a great team",
      text: "What a great team. After being let down by other local companies who said they would come out and quote then didn't turn up we became disheartened with the trade.",
      author: "Carol Wallace",
      date: "4 months ago",
    },
    {
      title: "Professional and quick",
      text: "Really great service! Ryan was very professional and the team completed the job very quickly. Would highly recommend!",
      author: "Sadia Shafique",
      date: "2 months ago",
    },
    {
      title: "Kitchen job done fantastically",
      text: "I contacted Ryan to do a job in my kitchen. He had it organised very quickly and on the day it was being done his joiner was waiting half an hour before his time to be there. I was surprised. The job was done by one of his joiner who was polite and helpful and he did the job fantastically so i was delighted. He also cleaned up after himself and kitchen was left as clean as it was before he arrived. Great service and would highly recommend Ryan and his team to anyone. Very reasonably priced.",
      author: "Billy Henderson",
      date: "3 days ago",
    },
  ] satisfies GoogleReviewCard[],
};
