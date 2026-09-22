export interface ChannelLink {
  id: string;
  name: string;
  url: string;
  category: 'social' | 'marketplace' | 'location' | 'direct';
  description: string;
  badge?: string;
  colorClass: string;
  buttonClass: string;
  icon: string;
  highlight?: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'masculino' | 'feminino' | 'unissex';
  genderLabel: string;
  price: number;
  originalPrice?: number;
  installments: string;
  image: string;
  description: string;
  features: string[];
  fabric: string;
  grammage: string;
  collar: string;
  colors: ProductColor[];
  sizes: string[];
  preferredMarketplace?: {
    name: string;
    url: string;
  };
}

export interface SizeMeasurement {
  size: string;
  chest: number;
  length: number;
  sleeve: number;
  recommendedWeight: string;
}
