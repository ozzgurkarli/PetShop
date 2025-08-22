import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Bize Ulaşın</h1>
      <p>Sorularınız veya siparişlerinizle ilgili bizimle iletişime geçebilirsiniz.</p>
      <form>
          {/* Form elemanları buraya eklenecek */}
          <p>Adres: PetShop Mahallesi, Sevimli Sokak No:12, İstanbul</p>
          <p>Telefon: 0212 123 45 67</p>
      </form>
    </div>
  );
}

export default ContactPage;