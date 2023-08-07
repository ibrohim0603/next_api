import React, { useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import s from "./single.module.scss";
import Image from "next/image";
import Head from "next/head";
import { instance } from "@/utils";
import EditModal from "@/components/editModal";

interface ProductType {
  _id: string;
  name: string;
  title: string | any;
  brand: string;
  price: number | any;
  color: string;
  country: string;
  size: number;
  description: string;
  img: string;
  category: string;
}

export default function Single() {
  const { query } = useRouter();

  const [mal, setMal] = useState<ProductType | null>(null);

  useEffect(() => {
    if (query?.id) {
      const data = instance
        .get(`/products/${query?.id}`)
        .then((data) => setMal(data?.data));
    }
  }, [query?.id]);

  console.log(mal);

  return (
    <>
      <Head>
        <title>{mal?.name}</title>
        <meta name="description" content={`${mal?.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.single}>
        <div className={s.single_card}>
          <div className={s.single_title}>
            <div>
              <h1>{mal?.name}</h1>
              <p> Уникальное значение : {mal?._id}</p>
            </div>
            <div>
              <EditModal id={mal?._id} />
            </div>
          </div>
          <div className={s.single_flex}>
            <div className={s.single_img}>
              <Image src={mal?.img || ""} width={600} height={400} />
            </div>
            <div className={s.single_info}>
              <div>
                <p>
                  {mal?.title?.length > 100
                    ? `${mal?.title.slice(0, 100)} ... `
                    : mal?.title}{" "}
                </p>
              </div>

              <div>
                <p>
                  Модель :<span>{mal?.brand}</span>
                </p>
                <p>
                  Произведено в :<span>{mal?.country}</span>
                </p>
                <p>
                  Цвет :
                  <span
                    style={{
                      backgroundColor: `${mal?.color}`,
                      padding: "10px 30px",
                    }}
                  ></span>
                </p>
                <p>
                  Размер :<span>{mal?.size}</span>
                </p>
                <p>
                  Категория: <span>{mal?.category}</span>
                </p>
              </div>
            </div>
            <div className={s.single_buy}>
              <div>
                <h3>{mal?.price} $</h3>
                <h5>{mal?.price + mal?.price * 0.1} $</h5>
              </div>
              <div>
                <span>Информация о доставке:</span>
                <p>
                  Стандартная доставка Доставка от 4 часов до 3 дней исходя от
                  адреса доставки
                </p>
              </div>
              <div>
                <button> Купить в один клик </button>
                <button> Добавить в корзину </button>
              </div>
            </div>
          </div>
          <div>
            <h2>Описание</h2>
            <br />
            <p>{mal?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
