export type Product = {
  title: string;
  price: string;
  description?: string;
  product_link: string;
  image_url: string;
  characteristics?: Record<string, string>;
};

export function normalizeProduct(raw: any): Product {
  return {
    title: raw.title || raw['Full Name'] || 'Без назви',
    price: raw.price || raw['Price'] || '—',
    description: raw.description || raw['Description'] || '',
    product_link: raw.product_link || raw['Product URL'] || '#',
    image_url: raw.image_url || raw['Image URL'] || '',
    characteristics: raw.characteristics || undefined,
  };
}