/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Anchor from "../Anchor";

const formateDate = (value) => {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return `${month} ${day}, ${year}`;
};
const truncateString = (str, num) => {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr + "...";
  } else {
    return str;
  }
};
const ArticleCard = ({ title, date, imageUrl, content, tags, href = "#" }) => {
  const fDate = formateDate(date);
  /*
  let names = [];
  tag?.map((el) => {
    return articleTag.forEach((tel) => {
      if (tel.id === el) {
        names.push(tel.name);
      }
    });
  });
  */
  return (
      <Anchor
        href={href}
        className="relative flex flex-col bg-white w-full rounded-lg shadow-md bg-cover bg-center overflow-hidden border border-slate-300"
      >
        <Image 
          src={imageUrl} 
          alt="article" 
          height={224} 
          width={300}
          quality={100}
          className="object-cover hover:scale-105 transition-all duration-300"
        />
      <div className="flex flex-col p-5 flex-1">
        <div className="header-content inline-flex ">
          <div className="font-general flex-1 text-sm">{fDate}</div>
        </div>
        <div className="font-title font-medium h-12">
          {title}
        </div>

        <div className="flex flex-col font-general text-sm text-typo text-justify ">
          <p className="excerpt">{content}</p>

          <div>
            {tags?.map((t) => (
              <div
                key={t}
                className="inline-block bg-blue-400 font-title font-bold text-white mt-2 mr-3 rounded py-1 px-2 text-sm"
              >
                <span className="">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Anchor>
  );
};

export default ArticleCard;
