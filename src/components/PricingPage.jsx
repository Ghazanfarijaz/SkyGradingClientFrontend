import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaGbp, FaUsd } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [currency, setCurrency] = useState("GBP");
  const [activeTab, setActiveTab] = useState("grading");

  // const currencySymbol = currency === "GBP" ? "£" : "AU$";
  const currencySymbol = "AU$";

  const yearlyDiscount = 0.8; // 20% discount

  const tabs = [
    { id: "grading", label: "Grading" },
    { id: "reholder", label: "Reholder" },
    { id: "crossover", label: "Crossover" },
    { id: "authentication", label: "Authentication" },
  ];

  const pricingCards = [
    {
      title: "Standard Label",
      price: "Free",
      features: ["Basic Protection", "Standard Label", "Digital Record"],
      background: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      title: "Type Match Label",
      price: `${currencySymbol}2.49`,
      features: ["Color Matching", "Premium Protection", "Digital Record", "Priority Support"],
      background: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      title: "Sky Label",
      price: `${currencySymbol}5.49`,
      features: ["Premium Design", "Ultimate Protection", "Digital Record", "24/7 Support", "Custom Options"],
      background: "bg-gradient-to-br from-[#D4AF37] to-yellow-600"
    }
  ];

  const serviceTiers = [
    {
      name: "Basic",
      price: 19.99,
      turnaround: "20 Buisness days",
      insurance: "AU$ 200",
      features: [true, true, false, false, false]
    },
    {
      name: "Standard",
      price: 24.49,
      turnaround: "10 Buisness days",
      insurance: "AU$ 400",
      features: [true, true, true, false, false]
    },
    {
      name: "Premier",
      price: 50,
      turnaround: "5 Buisness days",
      insurance: "AU$ 1000",
      features: [true, true, true, true, false]
    },
    {
      name: "VIP",
      price: 250,
      turnaround: "5 Buisness days",
      insurance: "AU$ 5000",
      features: [true, true, true, true, true]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Label Pricing</h1>
          
          {/* Billing Toggle */}
          {/* <div className="flex items-center justify-center gap-4">
            <span className="text-lg">Per Card</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#D4AF37] transition-colors focus:outline-none"
            >
              <span
                className={`${
                  isYearly ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className="text-lg">Yearly</span>
            {isYearly && (
              <span className="text-[#D4AF37] ml-2">Save up to 20%!</span>
            )}
          </div> */}
        </div>

        {/* Currency Selector */}
        <div className="flex justify-end mb-8">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <option value="AU$">AU$ (AU$)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`${card.background} rounded-xl p-8 shadow-xl transition-all`}
            >
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-4xl font-bold mb-6">{`${card.price}/Card`}</p>
              <ul className="space-y-3">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-[#D4AF37]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center mb-10 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Service Pricing</h1>
        </div>
        {/* Feature Tabs */}
        <div className="mb-16">
          {/* <div className="flex space-x-4 border-b border-gray-700 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-4 ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#D4AF37] text-[#D4AF37]"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}

{/* Service Pricing Table */}
<div className="overflow-x-auto">
  <table className="w-full">
    <thead className="bg-gray-800 sticky top-0">
      <tr>
        <th className="px-6 py-4 text-left">Service Details</th>
        {serviceTiers.map((tier, index) => (
          <th key={index} className="px-6 py-4 text-left">
            {tier.name}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-6 py-4">Price per Card</td>
        {serviceTiers.map((tier, index) => (
          <td key={index} className="px-6 py-4">
            {currencySymbol}
            {isYearly
              ? (tier.price * yearlyDiscount).toFixed(2)
              : tier.price.toFixed(2)}
          </td>
        ))}
      </tr>
      <tr>
        <td className="px-6 py-4">Turnaround Time</td>
        {serviceTiers.map((tier, index) => (
          <td key={index} className="px-6 py-4">{tier.turnaround}</td>
        ))}
      </tr>
      <tr>
        <td className="px-6 py-4">Insurance</td>
        {serviceTiers.map((tier, index) => (
          <td key={index} className="px-6 py-4">{tier.insurance}</td>
        ))}
      </tr>
      <tr>
        <td className="px-6 py-4">Features</td>
        {serviceTiers.map((tier, index) => (
          <td key={index} className="px-6 py-4">
            {tier.features.map((feature, i) => (
              <span key={i} className="block">
                {feature ? <FaCheck className="text-[#D4AF37]" /> : <FaTimes className="text-red-500" />}
              </span>
            ))}
          </td>
        ))}
      </tr>
      <tr>
        {/* <td className="px-6 py-4">Action</td>
        {serviceTiers.map((tier, index) => (
          <td key={index} className="px-6 py-4">
            <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
              Select
            </button>
          </td>
        ))} */}
      </tr>
    </tbody>
  </table>
</div>

        </div>
        

        {/* Payment Note */}
        <div className="text-center text-gray-400 mt-8">
          <p className="text-sm">
            All prices are in {currency}. Payments are processed securely through Stripe.
            <br />
            By proceeding with the purchase, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;