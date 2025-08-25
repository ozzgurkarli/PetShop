import React, { useState } from 'react';
import './ContactPage.css'; // Stil dosyasını import ediyoruz

// Örnek ikonlar (SVG olarak)
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;


function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normalde burada backend'e veri gönderilir.
    alert('Mesajınız alınmıştır. Henüz backend bağlantısı yapılmamıştır.');
    console.log(formData);
    // Formu temizle
    setFormData({ email: '', subject: '', message: '' });
  };


  return (
    <div className="contact-page">
        <h1>Bize Ulaşın</h1>
        <p className="contact-subtitle">Sorularınız, önerileriniz veya herhangi bir konuda bizimle iletişime geçmekten çekinmeyin.</p>
        
        <div className="contact-container">
            {/* Sol Taraf: İletişim Bilgileri ve Form */}
            <div className="contact-info-form">
                <h2>İletişim Bilgileri</h2>
                <ul className="contact-details">
                    <li>
                        <MapPinIcon />
                        <span>Çubuklu Mahallesi, Hicran Sokak No:14/A, Beykoz/İstanbul</span>
                    </li>
                    <li>
                        <PhoneIcon />
                        <span>0538 985 66 96</span>
                    </li>
                     <li>
                        <MailIcon />
                        <span>tufan.petshop@hotmail.com</span>
                    </li>
                </ul>

                <h2 className="form-title">Mesaj Gönderin</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta Adresiniz</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                     <div className="form-group">
                        <label htmlFor="subject">Konu</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                     <div className="form-group">
                        <label htmlFor="message">Mesajınız</label>
                        <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Gönder</button>
                </form>
            </div>

            {/* Sağ Taraf: Harita */}
            <div className="map-container">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.609089048187!2d29.0850629!3d41.099387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacbd1c1a72b5f%3A0x4a4f32090acc58dd!2sTufan%20Pet%20Shop%20-%20Kavac%C4%B1k!5e0!3m2!1str!2str!4v1756057151321!5m2!1str!2str" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Konumumuz">
                </iframe>
            </div>
        </div>
    </div>
  );
}

export default ContactPage;