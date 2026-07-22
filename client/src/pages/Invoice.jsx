import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InvoiceTable from "../components/InvoiceTable";
import InvoiceSummary from "../components/InvoiceSummary";

import "../styles/invoice.css";

function Invoice() {

    const items = [

        {

            id:1,

            name:"Laddu",

            quantity:2,

            price:80

        },

        {

            id:2,

            name:"Mysore Pak",

            quantity:1,

            price:100

        }

    ];

    const subtotal = 180;

    const gst = 18;

    const delivery = 40;

    const total = subtotal + gst + delivery;

    return (

        <>

            <Navbar />

            <div className="invoice-page">

                <div className="invoice-card">

                    <h1>

                        Sweetie Pies

                    </h1>

                    <h2>

                        Invoice

                    </h2>

                    <div className="invoice-details">

                        <p>

                            Customer : Rahul

                        </p>

                        <p>

                            Invoice No : INV2026001

                        </p>

                        <p>

                            Date : 22 July 2026

                        </p>

                    </div>

                    <InvoiceTable items={items} />

                    <InvoiceSummary

                        subtotal={subtotal}

                        gst={gst}

                        delivery={delivery}

                        total={total}

                    />

                    <button

                        className="download-btn"

                        onClick={() => window.print()}

                    >

                        Download / Print Invoice

                    </button>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Invoice;