import Head from "next/head";

import { useForm } from "react-hook-form";
import s from "./postProduct.module.scss";
import c from "./stylee.module.scss";
import { instance } from "@/utils";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

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

export default function EditProductPage({ id }: string | any) {
  const { query } = useRouter();

  console.log(query?.id);

  useEffect(() => {
    {
      query?.id &&
        instance
          .get(`/products/${query?.id}`)
          .then((res) => setDefaults(res?.data));
    }
  }, [query?.id, id]);

  const [defaults, setDefaults] = useState<ProductType | null>(null);

  const [info, setInfo] = useState("#516391");
  const {
    register,
    handleSubmit,
    control,

    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   name: defaults?.name,
    //   brand: defaults?.brand,
    //   title: defaults?.title,
    //   description: defaults?.description,
    //   price: defaults?.price,
    //   country: defaults?.country,
    //   color: defaults?.color,
    //   size: defaults?.size,
    //   img: defaults?.img,
    //   category: defaults?.category,
    // },
  });

  const onSubmit = (data: any) =>
    instance
      .put(`/products/${query?.id}`, {
        ...data,
        price: Number(data.price),
        size: Number(data.size),
      })
      .then((res) => {
        res.status == 200
          ? toast.success("Продукт добавлен")
          : toast.error("Ошибка при добавлении продукта"),
          setInfo(data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });

  const [val, setVal] = React.useState(50);

  return (
    <div className={c.div}>
      <Head>
        <title>Create products page</title>
        <meta name="description" content={`Create products page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      {defaults && (
        <div className={c.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Form</h1>

            <div>
              <label>
                <span>Название продукта</span>
                {errors["name"] && (
                  <p role="alert">{errors["name"]?.message}</p>
                )}
                <input
                  {...register("name", {
                    required: "Please fill in this field.",
                  })}
                  aria-invalid={errors["name"] ? "true" : "false"}
                  placeholder="Введите название продукта"
                  type="text"
                  defaultValue={defaults.name}
                />
              </label>
            </div>
            <div>
              <label>
                <span> Выберите категорию</span>
                <select
                  {...register("category", {
                    required: "Please select an item in the list.",
                  })}
                  aria-invalid={errors["category"] ? "true" : "false"}
                >
                  <option value={`${defaults.category}`}>
                    {defaults.category}
                  </option>
                  <option value="Все">Все</option>
                  <option value="Телефоны">Телефоны</option>
                  <option value="Компютеры">Компютеры</option>
                  <option value="Телевизоры">Телевизоры</option>
                  <option value="Часы">Часы</option>
                  <option value="Электроника">Электроника</option>
                </select>
                {errors["category"] && (
                  <p role="alert">{errors["category"]?.message}</p>
                )}
              </label>
            </div>
            <div>
              {errors["brand"] && (
                <p role="alert">{errors["brand"]?.message}</p>
              )}
              <label>
                <span>Брэнд</span>
                <input
                  {...register("brand", {
                    required: true,
                  })}
                  aria-invalid={errors["brand"] ? "true" : "false"}
                  placeholder="Видите бренд продукта"
                  type="text"
                  defaultValue={defaults.brand}
                />
              </label>
            </div>

            <div>
              <label>
                <span>Кратко опишите продукт</span>
                {errors["title"] && (
                  <p role="alert">{errors["title"]?.message}</p>
                )}
                <input
                  {...register("title", {
                    required: "Заполните это поле",
                    maxLength: {
                      value: 120,
                      message: "Пожалуйста введите меньше 120 символов",
                    },
                  })}
                  aria-invalid={errors["title"] ? "true" : "false"}
                  placeholder="Напишите кратко о продукте"
                  type="text"
                  defaultValue={defaults.title}
                />
              </label>
            </div>

            <div>
              <label>
                <span>Полностью опишите ваш продукт </span>
                {errors["description"] && (
                  <p role="alert">{errors["description"]?.message}</p>
                )}
                <textarea
                  {...register("description", {
                    required: "Опишите ваш товар подробно",
                  })}
                  placeholder="Опишите ваш продукт полностью"
                  type="textarea"
                  defaultValue={defaults.description}
                />
              </label>
            </div>

            <div>
              <label>
                <span>Цена</span>
                {errors["price"] && (
                  <p role="alert">{errors["price"]?.message}</p>
                )}
                <input
                  {...register("price", {
                    required: "Видите стоимость продукта в цифрах",
                  })}
                  aria-invalid={errors["price"] ? "true" : "false"}
                  placeholder="Видите стоимость продукта"
                  type="number"
                  defaultValue={defaults.price}
                />
              </label>
            </div>

            <div>
              <label>
                <span> Выберите страну</span>
                <select
                  {...register("country", {
                    required: "Please select an item in the list.",
                  })}
                  aria-invalid={errors["country"] ? "true" : "false"}
                >
                  <option value={`${defaults.country}`}>
                    {defaults.country}
                  </option>
                  <option value="CH">CH</option>
                  <option value="RU">RU</option>
                  <option value="UZ">UZ</option>
                  <option value="UK">UK</option>
                  <option value="US">US</option>
                </select>
                {errors["country"] && (
                  <p role="alert">{errors["country"]?.message}</p>
                )}
              </label>
            </div>

            <div>
              <label>
                <span>Цвет вашего продукта</span>
                <input
                  style={{ backgroundColor: `${info}` }}
                  {...register("color")}
                  type="color"
                  onChange={(e) => setInfo(e.target.value)}
                  defaultValue={defaults.color}
                />
              </label>
            </div>

            <div>
              <label>
                <span>Введите примерный размер вашего продукта</span>
                <input
                  {...register("size")}
                  min="1"
                  max="100"
                  step="1"
                  type="range"
                  onChange={(e: any) => setVal(e.target.value)}
                  defaultValue={defaults.size}
                />
                <output>{val}</output>
              </label>
            </div>

            <div>
              <label>
                <span>Введите URL фотографии</span>
                {errors["img"] && <p role="alert">{errors["img"]?.message}</p>}
                <input
                  {...register("img", {
                    required:
                      "Пример заполнения https://cdn.macbro.uz/macbro/3fc64c8e-b904-4dc2-b7cc-b187399539ab",
                  })}
                  placeholder="Введите URL фотографии"
                  type="url"
                  defaultValue={defaults.img}
                />
              </label>
            </div>

            <button disabled={isSubmitting}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
