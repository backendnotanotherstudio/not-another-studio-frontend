import { getProject } from "@/lib/api";
import Client from "./Client";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;
  const data = await getProject(slug);
  return <Client data={data} />;
};

export default Page;
