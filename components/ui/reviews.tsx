"use client";
/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { Star as StarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

function classNames(...classes:unknown[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
    const { t } = useTranslation();


  const reviews =[
  {
    id: 1,
    rating: 5,
    content:
      "components.northcoreMarketsHasCompletelyChanged",
    date: "components.june52023",
    datetime: "2023-06-05",
    author: "components.sophiaReynolds",
    avatarSrc: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    rating: 5,
    content:
      "components.whatImpressedMeMostIs",
    date: "components.march222023",
    datetime: "2023-03-22",
    author: "components.liamCarter",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    rating: 4,
    content:
      "components.iLikeHowStraightforwardNorthcore",
    date: "components.april102023",
    datetime: "2023-04-10",
    author: "components.danielKim",
    avatarSrc: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    rating: 5,
    content:
      "components.customerSupportIsPhenomenalI",
    date: "components.july182023",
    datetime: "2023-07-18",
    author: "components.emilyRoss",
    avatarSrc: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: 5,
    rating: 4,
    content:
      "components.theMobileAppIsSolid",
    date: "components.august22023",
    datetime: "2023-08-02",
    author: "components.jacobMartinez",
    avatarSrc: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 6,
    rating: 5,
    content:
      "components.iAppreciateTheTransparencyNo",
    date: "components.september142023",
    datetime: "2023-09-14",
    author: "components.oliviaParker",
    avatarSrc: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 7,
    rating: 5,
    content:
      "components.asSomeoneWhoTradesDaily",
    date: "components.october212023",
    datetime: "2023-10-21",
    author: "components.ethanWalker",
    avatarSrc: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    id: 8,
    rating: 4,
    content:
      "components.iveTriedOtherPlatformsBut",
    date: "components.november32023",
    datetime: "2023-11-03",
    author: "components.isabellaCollins",
    avatarSrc: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 9,
    rating: 5,
    content:
      "components.northcoreMarketsIsTheReal",
    date: "components.december152023",
    datetime: "2023-12-15",
    author: "components.michaelThompson",
    avatarSrc: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];


  return (
    <div className="bg-white px-20 max-md:px-5 rounded-3xl  min-h-96 mt-28">
      <div className="rounded-3xl">
        <h2 className="text-center text-black text-5xl max-md:text-2xl font-semibold pb-16">
         {t('components.ourWinningUsersDoThe')}</h2>

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
    const { t } = useTranslation();
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
        <h3 className="font-medium text-gray-900">{t(review.author)}</h3>
        <p>
          <time dateTime={review.datetime}>{t(review.date)}</time>
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
        <p className="sr-only">{review.rating} {t('components.outOf5Stars')}</p>

        <p className="mt-4 text-sm/6 text-gray-500">{t(review.content)}</p>
      </div>
    </div>
  );
};