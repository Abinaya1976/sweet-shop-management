import "../styles/orderTracking.css";

function OrderTracking({ status }) {

    const steps = [
        "Pending",
        "Allocated",
        "Preparing",
        "Out For Delivery",
        "Delivered"
    ];

    // Completed orders should highlight all steps
    const currentStep =
        status === "Completed"
            ? steps.length - 1
            : steps.indexOf(status);

    return (

        <div className="tracking-container">

            {

                steps.map((step, index) => (

                    <div
                        key={step}
                        className="tracking-step"
                    >

                        <div
                            className={
                                index <= currentStep
                                    ? "circle active"
                                    : "circle"
                            }
                        >

                            {

                                index < currentStep
                                    ? "✓"
                                    : index === currentStep
                                        ? "●"
                                        : ""

                            }

                        </div>

                        <p>{step}</p>

                        {

                            index !== steps.length - 1 && (

                                <div
                                    className={
                                        index < currentStep
                                            ? "line active-line"
                                            : "line"
                                    }
                                />

                            )

                        }

                    </div>

                ))

            }

        </div>

    );

}

export default OrderTracking;