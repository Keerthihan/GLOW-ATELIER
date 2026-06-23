// components/sections/Contact.tsx
"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { branch, services } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ErrorsState {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear individual error as user types
    if (errors[name as keyof ErrorsState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: ErrorsState = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.service) {
      tempErrors.service = "Please select a service of interest";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please include a message for appointment details";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      // Clear errors
      setErrors({});
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-grey-goose">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
        </div>

        {/* Two columns layout: Form left (60%) | Info right (40%) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left column: Form (60% on desktop) */}
          <div className="lg:col-span-6 bg-white-rock/45 border border-pink-daisy/20 rounded-sm p-8 lg:p-10 shadow-sm">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-lotus mb-6">
              Book Your Appointment
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-sm bg-grey-goose border-l-4 border-lotus text-thunder font-body font-semibold">
                Thank you! Your request was received. We will contact you shortly to confirm.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-white-rock border text-thunder p-3.5 rounded-sm font-body text-base outline-none focus:ring-1 focus:ring-lotus transition-colors ${
                    errors.name ? "border-lotus border-2" : "border-pink-daisy"
                  }`}
                  placeholder="e.g. Shalini Gunawardena"
                />
                {errors.name && (
                  <span className="font-body text-xs font-bold text-lotus mt-1.5 leading-none">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email & Phone Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white-rock border text-thunder p-3.5 rounded-sm font-body text-base outline-none focus:ring-1 focus:ring-lotus transition-colors ${
                      errors.email ? "border-lotus border-2" : "border-pink-daisy"
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="font-body text-xs font-bold text-lotus mt-1.5 leading-none">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="flex flex-col">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-white-rock border text-thunder p-3.5 rounded-sm font-body text-base outline-none focus:ring-1 focus:ring-lotus transition-colors ${
                      errors.phone ? "border-lotus border-2" : "border-pink-daisy"
                    }`}
                    placeholder="e.g. +94 77 123 4567"
                  />
                  {errors.phone && (
                    <span className="font-body text-xs font-bold text-lotus mt-1.5 leading-none">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Interest Field */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/70 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`bg-white-rock border text-thunder p-3.5 rounded-sm font-body text-base outline-none focus:ring-1 focus:ring-lotus transition-colors cursor-pointer ${
                    errors.service ? "border-lotus border-2" : "border-pink-daisy"
                  }`}
                >
                  <option value="" disabled>
                    Select a core treatment...
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name} ({service.category})
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="font-body text-xs font-bold text-lotus mt-1.5 leading-none">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Message Field (4 rows) */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/70 mb-2">
                  Message / Notes
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-white-rock border text-thunder p-3.5 rounded-sm font-body text-base outline-none focus:ring-1 focus:ring-lotus transition-colors resize-none ${
                    errors.message ? "border-lotus border-2" : "border-pink-daisy"
                  }`}
                  placeholder="Outline your preferred dates, specific styling preferences, or wellness goals..."
                />
                {errors.message && (
                  <span className="font-body text-xs font-bold text-lotus mt-1.5 leading-none">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" className="w-full py-4 uppercase tracking-widest text-sm">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right column: Contact Info (40% on desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-start items-start gap-8 self-stretch">
            <div className="bg-white-rock/30 border border-pink-daisy/10 rounded-sm p-8 lg:p-10 w-full h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-lotus mb-6">
                  Salon Coordinates
                </h3>

                {/* Contact Items list with lotus colored Lucide icons */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-daisy/10 rounded-sm shrink-0">
                      <MapPin className="w-5 h-5 text-lotus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-thunder/50 mb-1">
                        Physical Address
                      </h4>
                      <p className="font-body text-sm text-thunder font-medium leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-daisy/10 rounded-sm shrink-0">
                      <Phone className="w-5 h-5 text-lotus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-thunder/50 mb-1">
                        Hotline Reservations
                      </h4>
                      <p className="font-body text-sm text-thunder font-medium leading-relaxed">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-daisy/10 rounded-sm shrink-0">
                      <Mail className="w-5 h-5 text-lotus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-thunder/50 mb-1">
                        Electronic Mail
                      </h4>
                      <p className="font-body text-sm text-thunder font-medium leading-relaxed underline hover:text-lotus transition-colors">
                        {branch.email}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-daisy/10 rounded-sm shrink-0">
                      <Clock className="w-5 h-5 text-lotus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-thunder/50 mb-1">
                        Opening Ritual Hours
                      </h4>
                      <div className="space-y-1">
                        {branch.openingHours.map((hour, idx) => (
                          <p key={idx} className="font-body text-sm text-thunder font-medium">
                            {hour}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Row with lotus colored icons */}
              <div className="pt-8 border-t border-pink-daisy/10 mt-8">
                <h4 className="font-body text-xs font-bold uppercase tracking-wider text-thunder/50 mb-4 text-left">
                  Follow Our Social Journeys
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white-rock/80 border border-pink-daisy/20 rounded-full hover:border-lotus text-lotus hover:text-pink-daisy transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white-rock/80 border border-pink-daisy/20 rounded-full hover:border-lotus text-lotus hover:text-pink-daisy transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Location Map */}
        <div className="w-full mt-16 bg-white-rock/30 border border-pink-daisy/10 rounded-sm p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-display text-xl font-semibold text-lotus leading-none">Our Ocean-Facing Atelier</h4>
              <p className="font-body text-sm text-thunder/60 mt-2">45 Galle Road, Colombo 03 (Directly overlooking the scenic coastal vista of the Indian Ocean)</p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto bg-pink-daisy/5 border border-pink-daisy/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-body text-xs font-bold uppercase tracking-wider text-lotus">Atelier Open Today</span>
            </div>
          </div>
          <div className="relative w-full h-[400px] border border-pink-daisy/20 rounded-sm overflow-hidden bg-grey-goose shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.844781428286!2d79.8454238758832!3d6.90916051838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594191eb58bb%3A0xe543b5afda8cf940!2s45%20Galle%20Rd%2C%20Colombo%2000300%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700600000000!5m2!1sen!2sus0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[15%] brightness-[95%] hover:grayscale-0 transition-all duration-300 pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
