import Image from "next/image";
import Link from "next/link";
import img from "/public/icon.png";
import s from "./header.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <Image src={img} width={100} height={100} />
      <Link href={"/products"}>
        <a>Все продукты</a>
      </Link>
    </div>
  );
}
