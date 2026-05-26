import Layout from "../Components/Layout";
import PageTopBarImage from "../Components/common/PageTopBarImage";
import SectionHeading from "../Components/common/SectionHeading";
import top_bar from "../assets/img/terms/terms-and-conditions.webp";

const Terms = () => {
    return (
        <Layout title="Terms And Conditions | Johnnette Technologies">
            <section className="section-custom">
                <PageTopBarImage
                    title="Terms And Conditions"
                    bgImage={top_bar}
                />
            </section>
            <section className="section-custom mb-11">
                <SectionHeading title="Terms And Conditions" />
                <div className="body-container space-y-4 text-center md:text-left p-4">
                    <p className="text-gray-400 text-lg leading-relaxed ">
                        If the product is considered to be eligible for services
                        within warranty, Johnnette Technologies Pvt Ltd (JTPL)
                        will provide services free of charge. If a defect arises
                        in the product or a part of the product during the
                        warranty period, JTPL will, at its option, either
                        perform services on the product, or repair or replace
                        the part or the product using parts or products that are
                        new or equivalent to new in performance and reliability.
                        If the product is eligible for warranty, then the
                        customer has to ship the module to JTPL’s office at the
                        provided address. The customer will have to bear the
                        shipping expense.
                    </p>

                    <h2 className=" secondary-heading leading-tight">
                        Service outside Warranty
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed ">
                        If the product is considered to be serviceable however
                        outside the scope of Warranty, at the customer’s
                        request, JTPL may provide the customer with a quotation
                        for its services stating the content and the costs of
                        services which are needed to be carried out in order to
                        remedy the defects in the product.
                    </p>

                    <h2 className=" secondary-heading leading-tight">
                        General clauses for Warranty:
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed ">
                        If the product’s hardware and/or software is
                        tampered/unscrewed or any sub-electronic components
                        detached/dismantled from the board or an attempt to
                        tamper is detected, then it will void the warranty.
                        Removal of the case of the module will void the
                        warranty. Any damage/malfunction caused due to improper
                        handling/usage of the product will result in warranty
                        being void. Damages or malfunction caused by operating
                        or using the product in unsuitable environments such as
                        rain, storm will not be serviceable in the scope of
                        warranty. Any malfunction or defect caused by physical
                        damage will not be covered under the warranty. Images to
                        be taken immediately after any incidents/accident and
                        submitted along with repair request. JTPL shall not be
                        liable for any damage caused by the customer or
                        customer’s assistant staff.
                    </p>

                    <h2 className=" secondary-heading leading-tight">
                        Other Terms and Conditions:
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        After receiving the product, the customer must
                        acknowledge the receipt of the product within 24 hours.
                        Delivery of the product(s) shall be made by the company
                        delivering the product(s) to the customer’s premises or
                        by the buyer collecting the product(s) at the company’s
                        premises at any time after the company has notified the
                        customer that the product(s) are ready for collection.
                        Any damage caused by the customer d-uring the
                        integration/testing is not a liability of Johnnette
                        Technologies Pvt. Ltd. In case of damage product
                        received, the customer has to send proof of damage
                        within 24 hours of acceptance of delivery. In such a
                        case, the customer will be entitled for a replacement.
                        No refund will be given for a damaged product. In case
                        of any damage/warranty claim, the customer has to ship
                        the product back to Johnnette technologies Pvt. Ltd.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;