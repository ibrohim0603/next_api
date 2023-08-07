import Image from "next/image";
import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import Link from "next/link";
import cart from "../../../public/cart-plus-solid.svg";
import Head from "next/head";
import { instance } from "@/utils";
import PostModal from "@/components/postModal";
import EditModal from "@/components/editModal";

interface Products {
  products: Detail[];
  map: any;
}
interface Detail {
  _id: string;
  name: string;
  title: string | any;
  brand: string;
  price: number;
  color: string;
  country: string;
  size: number;
  img: string;
}

export default function AllProducts() {
  const [mal, setMal] = useState<Products | null>(null);

  useEffect(() => {
    const data = instance.get("/products").then((res) => setMal(res?.data));
    // const s = instance.delete("/products/64cf4d911565ae03e8473c02");
  }, []);
  return (
    <>
      <Head>
        <title>Products page</title>
        <meta name="description" content={`${mal?.products}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.product}>
        <div>
          AllProducts
          <PostModal />
          <br />
        </div>
        <div className={s.product_flex}>
          {mal?.map((e: Detail) => (
            <div key={e._id}>
              <Link href={`products/${e._id}`}>
                <div className={s.product_card}>
                  <div className={s.product_img}>
                    <Image
                      // loader={() => src}
                      src={e.img}
                      quality={100}
                      width={250}
                      height={150}
                      alt={e.name}
                    />
                  </div>
                  <div className={s.product_text}>
                    <h3>{e.name}</h3>
                    <p>{e.title.slice(0, 40)}</p>
                    <div className={s.product_price}>
                      <div>
                        <h5>{e.price + e.price * 0.1} $</h5>
                        <h3>{e.price} $</h3>
                      </div>
                      <div>
                        <Link href={`/products/${e._id}`}>
                          <a>Buy</a>
                        </Link>
                      </div>
                    </div>
                    <div className={s.product_view}>
                      <Link href={`/products/${e._id}`}>
                        <a>Увидеть продукт подробнее</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
