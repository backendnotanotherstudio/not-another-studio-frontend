import axios from "axios";

const REVALIDATE_SECONDS = 60
// export const baseURL = "http://localhost:1337/api";
export const baseURL = "https://not-another-studio-backend.onrender.com/api";


const axiosInstance = axios.create({
  baseURL: baseURL,
});

async function deliverPromise(url, singleData = false) {
  try {
    const response = await axiosInstance.get(url);
    if (response.status === 200) {
      return singleData && response.data.data[0]
        ? response.data.data[0]
        : response.data.data;
    }
    console.warn(
      "deliverPromise error, likely due to no backend connection\n",
      response
    );
    return null;
  } catch (err) {
    console.warn(
      "deliverPromise error, likely due to no backend connection\n",
      err
    );
    return null;
  }
}

export async function getProduct(slug) {
  const encodedSlug = encodeURIComponent(slug);
  return deliverPromise(
    `/products?filters[slug][$eq]=${encodedSlug}&pLevel=3`,
    true
  );
}

export async function getProducts(query) {
  return deliverPromise(`/products?populate=*${query}`);
}

export async function getCategories() {
  return deliverPromise(`/categories?populate=*`);
}

export const getAboutPage = async () => {
  const res = await fetch(baseURL + "/about-page?populate=*", {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  return await res.json();
};

export const getHomePage = async () => {
  const res = await fetch(baseURL + "/home-page?populate=*", {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  return await res.json();
};

export const getShopPage = async () => {
  const res = await fetch(baseURL + "/shop-page?populate=*", {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  return await res.json();
};

export const getContactPage = async () => {
  const res = await fetch(baseURL + "/contact-page?populate=*", {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  return await res.json();
};
