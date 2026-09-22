import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OfficialChannelsBar } from './components/OfficialChannelsBar';
import { ProductCatalog } from './components/ProductCatalog';
import { FreeShippingBanner } from './components/FreeShippingBanner';
import { OversizeFitGuide } from './components/OversizeFitGuide';
import { FabricSpecs } from './components/FabricSpecs';
import { StoreLocation } from './components/StoreLocation';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenSizeGuide = () => {
    const el = document.getElementById('guia-medidas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#181A1F]">
      {/* Top Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 7 Official Buttons & Channels Bar */}
        <OfficialChannelsBar />

        {/* Product Catalog: Masculino & Feminino Oversize */}
        <ProductCatalog 
          onSelectProduct={setSelectedProduct}
          onOpenSizeGuide={handleOpenSizeGuide}
        />

        {/* Free Shipping Highlight & Shipping Simulator */}
        <FreeShippingBanner />

        {/* Technical Fabric & Collar Specs */}
        <FabricSpecs />

        {/* Measurement & Oversize Fit Guide */}
        <OversizeFitGuide />

        {/* Physical Store (Camiseteria di Mooca & Google Maps) */}
        <StoreLocation />
      </main>

      {/* Footer with all official links */}
      <Footer />

      {/* Interactive Modal when a product is clicked */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenSizeGuide={handleOpenSizeGuide}
      />

      {/* Persistent floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
