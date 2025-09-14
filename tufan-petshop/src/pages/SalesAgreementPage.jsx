import React from 'react';
import './PolicyPage.css';

// Component artık 'buyerData' adında bir prop alıyor
function SalesAgreementPage({ buyerData }) {
  // buyerData yoksa veya boşsa varsayılan metinleri göster
  const fullName = buyerData && buyerData.firstName ? `${buyerData.firstName} ${buyerData.lastName}` : '{Müşteri Adı}';
  const fullAddress = buyerData && buyerData.address ? `${buyerData.address}, ${buyerData.zip} ${buyerData.city}` : '{Teslimat Adresi}';
  const phone = buyerData && buyerData.phone ? buyerData.phone : '{Müşteri Telefonu}';
  const email = buyerData && buyerData.email ? buyerData.email : '{Müşteri E-postası}';

  return (
    <div className="policy-page">
      <h3>MADDE 1- TARAFLAR</h3>
      <p><strong>SATICI:</strong><br />
      Unvanı: Tufan PetShop<br />
      Adresi: Çubuklu Mahallesi, Hicran Sokak No:14/A, Beykoz/İstanbul<br />
      Telefon: 0538 985 66 96<br />
      E-posta: tufan.petshop@hotmail.com</p>
      
      {/* ALICI BİLGİLERİ DİNAMİK OLARAK DOLDURULUYOR */}
      <p><strong>ALICI:</strong><br />
      Adı Soyadı/Unvanı: {fullName}<br />
      Adresi: {fullAddress}<br />
      Telefon: {phone}<br />
      E-posta: {email}</p>

      <h3>MADDE 2- KONU</h3>
      <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait https://www.tufanpetshop.com internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
    </div>
  );
}

export default SalesAgreementPage;