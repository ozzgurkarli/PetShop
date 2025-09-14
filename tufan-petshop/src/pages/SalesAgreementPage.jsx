import React from 'react';
import './PolicyPage.css';

function SalesAgreementPage() {
  return (
    <div className="policy-page">
      <h3>MADDE 1- TARAFLAR</h3>
      <p><strong>SATICI:</strong><br />
      Unvanı: [Firma Unvanı]<br />
      Adresi: [Adres]<br />
      Telefon: [Telefon]<br />
      E-posta: [E-posta]</p>
      <p><strong>ALICI:</strong><br />
      Adı Soyadı/Unvanı: {`{Müşteri Adı}`}<br />
      Adresi: {`{Teslimat Adresi}`}<br />
      Telefon: {`{Müşteri Telefonu}`}<br />
      E-posta: {`{Müşteri E-postası}`}</p>

      <h3>MADDE 2- KONU</h3>
      <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait [Web Sitesi Adresi] internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
    </div>
  );
}

export default SalesAgreementPage;