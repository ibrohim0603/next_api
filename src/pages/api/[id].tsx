// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/products.json";
import { useState } from "react";

type Data = {
  products?: {
    id: string;
    name: string;
    title: string;
    brand: string;
    price: number;
    color: string;
    country: string;
    size: number;
    img: string;
  }[];
  method?: string;
  made?: { country: string; size: number; color: string }[];
  total?: number;
  product?: any;
};

export const getFn = () => {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { id } = req.query;
  let prod = data.products;
  let fil = data.made;
  if (req.method == "GET") {
    res.status(200).json({ products: prod, total: prod.length, made: fil });
  } else if (req.method == "PATCH") {
    res.status(203).json({ method: "patch" });
  } else if (req.method == "DELETE") {
    res.status(204).json({ method: "delete" });
  }
}
