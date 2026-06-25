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

  const inputClass = (hasError?: boolean) =>
    `bg-pearl/80 border text-deep-sea p-4 rounded-2xl font-body text-base outline-none focus:ring-2 focus:ring-eucalyptus/30 focus:border-eucalyptus transition-colors ${
      hasError ? "border-blush-clay border-2" : "border-deep-sea/10"
    }`;

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-pearl">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
            Visit or reserve
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
        </div>

        {/* Two columns layout: Form left (60%) | Info right (40%) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          {/* Left column: Form (60% on desktop) */}
          <div className="lg:col-span-6 bg-white-rock/75 rounded-[2rem] p-8 lg:p-10 shadow-[0_18px_55px_rgba(13,27,42,0.07)] backdrop-blur">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-deep-sea mb-6">
              Book Your Appointment
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-eucalyptus/10 text-deep-sea font-body font-semibold">
                Thank you! Your request was received. We will contact you shortly to confirm.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/65 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass(Boolean(errors.name))}
                  placeholder="e.g. Shalini Gunawardena"
                />
                {errors.name && (
                  <span className="font-body text-xs font-bold text-blush-clay mt-1.5 leading-none">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email & Phone Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/65 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass(Boolean(errors.email))}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span className="font-body text-xs font-bold text-blush-clay mt-1.5 leading-none">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="flex flex-col">
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/65 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass(Boolean(errors.phone))}
                    placeholder="e.g. +94 77 123 4567"
                  />
                  {errors.phone && (
                    <span className="font-body text-xs font-bold text-blush-clay mt-1.5 leading-none">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Interest Field */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/65 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClass(Boolean(errors.service))} cursor-pointer`}
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
                  <span className="font-body text-xs font-bold text-blush-clay mt-1.5 leading-none">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Message Field (4 rows) */}
              <div className="flex flex-col">
                <label className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/65 mb-2">
                  Message / Notes
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass(Boolean(errors.message))} resize-none`}
                  placeholder="Outline your preferred dates, specific styling preferences, or wellness goals..."
                />
                {errors.message && (
                  <span className="font-body text-xs font-bold text-blush-clay mt-1.5 leading-none">
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
            <div className="bg-white-rock/55 rounded-[2rem] p-8 lg:p-10 w-full h-full flex flex-col justify-between shadow-[0_18px_55px_rgba(13,27,42,0.06)] backdrop-blur">
              <div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-deep-sea mb-6">
                  Salon Coordinates
                </h3>

                {/* Contact Items list with lotus colored Lucide icons */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eucalyptus/10 rounded-full shrink-0">
                      <MapPin className="w-5 h-5 text-eucalyptus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-deep-sea/50 mb-1">
                        Physical Address
                      </h4>
                      <p className="font-body text-sm text-deep-sea font-medium leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eucalyptus/10 rounded-full shrink-0">
                      <Phone className="w-5 h-5 text-eucalyptus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-deep-sea/50 mb-1">
                        Hotline Reservations
                      </h4>
                      <p className="font-body text-sm text-deep-sea font-medium leading-relaxed">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eucalyptus/10 rounded-full shrink-0">
                      <Mail className="w-5 h-5 text-eucalyptus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-deep-sea/50 mb-1">
                        Electronic Mail
                      </h4>
                      <p className="font-body text-sm text-deep-sea font-medium leading-relaxed underline hover:text-eucalyptus transition-colors">
                        {branch.email}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eucalyptus/10 rounded-full shrink-0">
                      <Clock className="w-5 h-5 text-eucalyptus" />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-wider text-deep-sea/50 mb-1">
                        Opening Ritual Hours
                      </h4>
                      <div className="space-y-1">
                        {branch.openingHours.map((hour, idx) => (
                          <p key={idx} className="font-body text-sm text-deep-sea font-medium">
                            {hour}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Row with lotus colored icons */}
              <div className="pt-8 border-t border-blush-clay/10 mt-8">
                <h4 className="font-body text-xs font-bold uppercase tracking-wider text-deep-sea/50 mb-4 text-left">
                  Follow Our Social Journeys
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pearl/80 rounded-full text-eucalyptus hover:text-blush-clay transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pearl/80 rounded-full text-eucalyptus hover:text-blush-clay transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie-free location panel */}
        <div className="w-full mt-16 bg-white-rock/65 rounded-[2rem] p-6 lg:p-8 shadow-[0_18px_55px_rgba(13,27,42,0.07)] backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-display text-xl lg:text-2xl font-semibold text-deep-sea leading-none">Our Ocean-Facing Atelier</h4>
              <p className="font-body text-sm text-deep-sea/60 mt-2">45 Galle Road, Colombo 03 (Directly overlooking the scenic coastal vista of the Indian Ocean)</p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto bg-eucalyptus/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-body text-xs font-bold uppercase tracking-wider text-eucalyptus">Atelier Open Today</span>
            </div>
          </div>
          <div className="relative min-h-[320px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-pearl via-grey-goose to-eucalyptus/20 shadow-inner p-8 flex flex-col justify-center">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blush-clay/12" />
            <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-golden-hour/14" />
            <div className="relative max-w-xl">
              <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-4">
                Directions
              </p>
              <h5 className="font-display text-3xl lg:text-4xl font-semibold text-deep-sea mb-4">
                Find Glow Atelier on Galle Road
              </h5>
              <p className="font-body text-base text-deep-sea/70 leading-relaxed mb-6">
                We removed the embedded third-party map so the page stays lighter and avoids map cookies. Open the location only when you need directions.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=45%20Galle%20Road%2C%20Colombo%2003%2C%20Sri%20Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-deep-sea px-6 py-3 font-body text-sm font-bold uppercase tracking-wider text-white-rock shadow-[0_14px_35px_rgba(13,27,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-eucalyptus"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
