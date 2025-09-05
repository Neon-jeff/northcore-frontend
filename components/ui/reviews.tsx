/* eslint-disable @next/next/no-img-element */
"use client";
import { Marquee } from "@/components/magicui/marquee";
import { Star as StarIcon } from "lucide-react";

function classNames(...classes:unknown[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {


  const reviews =[
  {
    id: 1,
    rating: 5,
    content:
      "Northcore Markets has completely changed the way I trade. The platform feels smooth, intuitive, and transparent. I finally feel confident managing my investments without worrying about hidden fees.",
    date: "June 5, 2023",
    datetime: "2023-06-05",
    author: "Sophia Reynolds",
    avatarSrc: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    rating: 5,
    content:
      "What impressed me most is the speed of execution. My trades go through instantly, and I’ve never experienced unnecessary delays. Northcore Markets really feels built for serious traders.",
    date: "March 22, 2023",
    datetime: "2023-03-22",
    author: "Liam Carter",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    rating: 4,
    content:
      "I like how straightforward Northcore Markets is. It’s easy to navigate, even for someone who isn’t a professional trader. The only thing I’d love to see is more educational tutorials for beginners.",
    date: "April 10, 2023",
    datetime: "2023-04-10",
    author: "Daniel Kim",
    avatarSrc: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    rating: 5,
    content:
      "Customer support is phenomenal. I had a question about account verification, and they responded within minutes. It feels good knowing there’s a team that actually cares about traders.",
    date: "July 18, 2023",
    datetime: "2023-07-18",
    author: "Emily Ross",
    avatarSrc: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: 5,
    rating: 4,
    content:
      "The mobile app is solid, and I can place trades on the go without stress. Sometimes charts could load a bit faster, but overall, Northcore Markets gives me the flexibility I need.",
    date: "August 2, 2023",
    datetime: "2023-08-02",
    author: "Jacob Martinez",
    avatarSrc: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 6,
    rating: 5,
    content:
      "I appreciate the transparency. No hidden costs, no shady terms—just clean trading. That level of trust is rare, and Northcore Markets has earned me as a loyal user.",
    date: "September 14, 2023",
    datetime: "2023-09-14",
    author: "Olivia Parker",
    avatarSrc: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 7,
    rating: 5,
    content:
      "As someone who trades daily, stability matters. Northcore Markets hasn’t let me down once. Prices update in real-time, and my strategies work exactly how I expect them to.",
    date: "October 21, 2023",
    datetime: "2023-10-21",
    author: "Ethan Walker",
    avatarSrc: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    id: 8,
    rating: 4,
    content:
      "I’ve tried other platforms, but this one feels much less intimidating. The design is clean, and I can focus on trading instead of figuring out complicated dashboards. Would love to see more advanced charting tools though.",
    date: "November 3, 2023",
    datetime: "2023-11-03",
    author: "Isabella Collins",
    avatarSrc: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 9,
    rating: 5,
    content:
      "Northcore Markets is the real deal. Reliable, fast, and safe. I’ve recommended it to two of my friends already, and they’re just as impressed as I am.",
    date: "December 15, 2023",
    datetime: "2023-12-15",
    author: "Michael Thompson",
    avatarSrc: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];


  return (
    <div className="bg-white px-20 max-md:px-5 rounded-3xl  min-h-96 mt-28">
      <div className="rounded-3xl">
        <h2 className="text-center text-black text-5xl max-md:text-2xl font-semibold pb-16">
         Our Winning Users do the Talking
        </h2>

        {/* <div className=" grid gap-10  lg:grid-cols-3 px-20">
          {reviews.map((review, reviewIdx) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div> */}

        <Marquee pauseOnHover>
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse>
          {reviews.slice(3, 7).map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const ReviewCard = (review: {
  id: number
  rating: number
  content: string
  date: string
  datetime: string
  author: string
  avatarSrc: string
}) => {
  return (
    <div
      key={review.id}
      className="flex  space-x-4 w-[500px] bg-zinc-50 rounded-2xl p-4  text-sm text-gray-500"
    >
      <div className="flex-none py-10">
        <img
          alt=""
          src={review.avatarSrc}
          className="size-10 rounded-full bg-gray-100"
        />
      </div>
      <div className={classNames("flex-1 py-10")}>
        <h3 className="font-medium text-gray-900">{review.author}</h3>
        <p>
          <time dateTime={review.datetime}>{review.date}</time>
        </p>

        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              aria-hidden="true"
              className={classNames(
                review.rating > rating ? "text-green-400" : "text-gray-300",
                "size-5 shrink-0"
              )}
            />
          ))}
        </div>
        <p className="sr-only">{review.rating} out of 5 stars</p>

        <p className="mt-4 text-sm/6 text-gray-500">{review.content}</p>
      </div>
    </div>
  );
};