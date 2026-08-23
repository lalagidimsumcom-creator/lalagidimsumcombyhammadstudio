import { BRAND_CONFIG } from "@/data/config";

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Halo LalaGi Dimsum, saya lihat dari website dan mau tanya tentang menu dimsumnya 😊";
  const message = customMessage || defaultMessage;
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCakeWhatsAppUrl(): string {
  return getWhatsAppUrl("Halo LalaGi Dimsum, saya mau tanya tentang Dimsum Cake untuk acara saya 😊");
}

export function getEventWhatsAppUrl(): string {
  return getWhatsAppUrl("Halo LalaGi Dimsum, saya mau konsultasi pesanan dimsum untuk acara 😊");
}

export function getHampersWhatsAppUrl(): string {
  return getWhatsAppUrl("Halo LalaGi Dimsum, saya mau tanya paket Dimsum Hampers untuk hadiah/momen spesial 😊");
}

export function getProductWhatsAppUrl(productName: string): string {
  return getWhatsAppUrl(`Halo LalaGi Dimsum, saya mau pesan ${productName} 😊`);
}
