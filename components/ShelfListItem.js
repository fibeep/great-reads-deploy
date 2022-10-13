import Link from "next/link";
import classNames from "classnames";

export default function ShelfListItem(props) {
  const shelfTitle = "To Read";
  const shelfCount = 44;

  return (
    <div
      className={classNames(
        "text-md py-2 border-b-2 divider px-3 text-white/80 hover:bg-teal-400/20 smooth",
        ""
      )}>
      <Link href="">
        <div className={classNames("flex flex-row justify-between items-center px-2", "")}>
          <h4>{shelfTitle}</h4>
          <p className="text-xs text-white/50">{shelfCount} books</p>
        </div>
      </Link>
    </div>
  );
}
