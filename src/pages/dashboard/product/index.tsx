import Head from "next/head";

import { useForm } from "react-hook-form";
import s from "./postProduct.module.scss";
import c from "./stylee.module.scss";
import { instance } from "@/utils";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function PostProductPage() {
  const query = useRouter();
  console.log(query);

  const [info, setInfo] = useState("#516391");
  const {
    register,
    handleSubmit,
    control,

    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   name: '',
    //   brand: "apple",
    //   title: "jkdfiw",
    //   description: "sdks",
    //   price: "1000",
    //   country: "US",
    //   color: "#516391",
    //   size: 15,
    //   img: "data:image/png;base64,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",
    // },
  });
  const onSubmit = (data: any) =>
    instance
      .post("/products", {
        ...data,
        price: Number(data.price),
        size: Number(data.size),
      })
      .then((res) => {
        res.status == 201
          ? toast.success("Продукт добавлен")
          : toast.error("Ошибка при добавлении продукта"),
          setInfo(data);
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
      <div className={c.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Form</h1>

          <div>
            <label>
              <span>Название продукта</span>
              {errors["name"] && <p role="alert">{errors["name"]?.message}</p>}
              <input
                {...register("name", {
                  required: "Please fill in this field.",
                })}
                aria-invalid={errors["name"] ? "true" : "false"}
                placeholder="Введите название продукта"
                type="text"
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
            {errors["brand"] && <p role="alert">{errors["brand"]?.message}</p>}
            <label>
              <span>Брэнд</span>
              <input
                {...register("brand", {
                  required: true,
                })}
                aria-invalid={errors["brand"] ? "true" : "false"}
                placeholder="Видите бренд продукта"
                type="text"
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
              />
            </label>
          </div>

          <button disabled={isSubmitting}>Submit</button>
        </form>
        {/* <div
          id="beekai"
          data-type="form"
          data-id="8104a746-0dcc-48b8-bf2c-ec3609b634dc"
          data-text="Form"
        ></div> */}
      </div>
    </div>
  );
}
