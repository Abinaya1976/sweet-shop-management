function InvoiceSummary({

    subtotal,

    gst,

    delivery,

    total

}) {

    return (

        <div className="invoice-summary">

            <h3>

                Payment Summary

            </h3>

            <p>

                Subtotal

                <span>

                    ₹ {subtotal}

                </span>

            </p>

            <p>

                GST

                <span>

                    ₹ {gst}

                </span>

            </p>

            <p>

                Delivery

                <span>

                    ₹ {delivery}

                </span>

            </p>

            <hr />

            <h2>

                Grand Total

                <span>

                    ₹ {total}

                </span>

            </h2>

        </div>

    );

}

export default InvoiceSummary;