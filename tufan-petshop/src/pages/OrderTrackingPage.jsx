import React, { useState } from 'react';
import './OrderTrackingPage.css';

// İkonlar
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const PackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 9.4l-9-5.19" /><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><path d="M3.27 6.96L12 12.01l8.73-5.05" /><path d="M12 22.08V12" />
    </svg>
);


function OrderTrackingPage() {
    const [orderNumber, setOrderNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTrackOrder = (e) => {
        e.preventDefault();
        if (!orderNumber) return;

        setIsLoading(true);
        setOrderStatus(null);

        // API'den veri çekme simülasyonu
        setTimeout(() => {
            // Örnek bir sipariş durumu senaryosu
            if (orderNumber === 'TP123456') {
                setOrderStatus({
                    number: 'TP123456',
                    status: 'Kargoya Verildi',
                    details: 'Siparişiniz kargoya verilmiştir. Tahmini teslimat tarihi 2-4 iş günüdür.',
                    trackingNumber: 'ABC123456789'
                });
            } else {
                setOrderStatus({
                    error: true,
                    details: 'Girdiğiniz sipariş numarasına ait bir kayıt bulunamadı. Lütfen kontrol edip tekrar deneyin.'
                });
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="order-tracking-page">
            <div className="tracking-container">
                <div className="tracking-icon">
                    <PackageIcon />
                </div>
                <h1>Sipariş Takibi</h1>
                <p className="tracking-subtitle">Sipariş durumunu anlık olarak takip etmek için sipariş numaranızı girin.</p>
                <form className="tracking-form" onSubmit={handleTrackOrder}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Sipariş numaranız (örn: TP123456)"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Aranıyor...' : <><SearchIcon /><span>Sorgula</span></>}
                        </button>
                    </div>
                </form>

                {orderStatus && (
                    <div className={`status-result ${orderStatus.error ? 'error' : 'success'}`}>
                        {orderStatus.error ? (
                            <p>{orderStatus.details}</p>
                        ) : (
                            <>
                                <h3>Sipariş Durumu: <strong>{orderStatus.status}</strong></h3>
                                <p>{orderStatus.details}</p>
                                {orderStatus.trackingNumber && (
                                    <p className="tracking-number">Kargo Takip No: <strong>{orderStatus.trackingNumber}</strong></p>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderTrackingPage;