import React from "react";

const StoreAbout = ({ store }) => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="mx-auto px-2 md:px-8">
        <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
        <p className="text-lg mb-6">
          Welcome to MyStore, your one-stop destination for all your shopping
          needs.
        </p>
        <p className="text-lg mb-6">
          At MyStore, we believe in providing top-quality products and
          exceptional customer service. With a wide range of products available,
          we aim to cater to the diverse needs and preferences of our customers.
        </p>
        <p className="text-lg mb-6">
          Our team consists of dedicated professionals who are passionate about
          delivering an unparalleled shopping experience. We strive to ensure
          that each customer receives personalized attention and assistance
          throughout their journey with us.
        </p>
        <p className="text-lg font-semibold mb-2">Why Choose MyStore?</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg">
            High-Quality Products: We source our products from reputable
            manufacturers to guarantee their quality and durability.
          </li>
          <li className="text-lg">
            Wide Selection: Our extensive collection includes items from various
            categories, ensuring that you can find exactly what you're looking
            for.
          </li>
          <li className="text-lg">
            Competitive Prices: We offer competitive prices to provide excellent
            value for your money.
          </li>
          <li className="text-lg">
            Secure Transactions: Your security is our priority. We use
            industry-standard encryption and secure payment gateways to
            safeguard your information.
          </li>
          <li className="text-lg">
            Fast Shipping: We understand the importance of prompt delivery. Your
            orders will be processed and shipped as quickly as possible.
          </li>
          <li className="text-lg">
            Exceptional Customer Support: Our knowledgeable support team is
            available to assist you with any queries or concerns you may have.
          </li>
        </ul>
        <p className="text-lg">
          Thank you for choosing MyStore. We look forward to serving you and
          ensuring a delightful shopping experience.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg">Phone: 123-456-7890</p>
          <p className="text-lg">Email: {store?.email}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Store Locations</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg">
              New York Store: 1234 Example Street, New York, NY 10001
            </li>
            <li className="text-lg">
              Los Angeles Store: 5678 Sample Avenue, Los Angeles, CA 90001
            </li>
            <li className="text-lg">
              Chicago Store: 9012 Test Road, Chicago, IL 60001
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StoreAbout;
