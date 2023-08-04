import Image from "next/image";
import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import Link from "next/link";
import cart from "../../../public/cart-plus-solid.svg";
import Head from "next/head";

interface Products {
  products: Det[];
}
interface Det {
  id: string;
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
    const data = fetch("http://localhost:3000/api")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMal(data);
      });
  }, []);
  console.log(mal?.products);

  return (
    <>
      <Head>
        <title>Products page</title>
        <meta name="description" content={`${mal?.products}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.product}>
        AllProducts
        <div className={s.product_flex}>
          {mal?.products.map((e) => (
            <Link href={`products/${e.id}`} key={e.id}>
              <a>
                <div className={s.product_card}>
                  <div className={s.product_img}>
                    <Image
                      src={e.img}
                      quality={100}
                      width={450}
                      height={250}
                      alt={e.name}
                    />
                  </div>
                  <div className={s.product_text}>
                    <h3>{e.name}</h3>
                    <p>
                      {e.title.length > 60
                        ? `${e.title.slice(0, 50)} ... `
                        : e.title}{" "}
                    </p>
                    <div className={s.product_price}>
                      <div>
                        <h5>{e.price + e.price * 0.1} $</h5>
                        <h3>{e.price} $</h3>
                      </div>
                      <div>
                        <Link href={`/products/${e.id}`}>
                          <a>Buy</a>
                        </Link>
                      </div>
                    </div>
                    <div className={s.product_view}>
                      <Link href={`/products/${e.id}`}>
                        <a>Увидеть продукт подробнее</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
