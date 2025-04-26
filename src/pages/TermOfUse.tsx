import React, { useEffect } from 'react';
import { Brain, Target, TrendingUp, ArrowRight, Rocket, Users, Award, BarChart as ChartBar } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const TermOfUse = () => {
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              
              <span className="text-white">Terms & Conditions
              </span>
            </h1>
                <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        
                <p className="mb-4">
        These Terms and Conditions apply to all SMS messages sent and received as part of the A2P 10DLC messaging services provided by Click Titan LLC. Your use of this service constitutes acceptance of these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">SMS Disclosure</h2>
      <p className="mb-4">
        By opting in to our SMS services, you agree to receive text messages related to notifications, marketing offers, account authentication (2FA), and other service-related communications. Message frequency may vary.
      </p>
      <p className="mb-4">
        Standard message & data rates apply according to your mobile carrier's terms.
      </p>
      <p className="mb-4">
        To opt out of SMS communications at any time, reply STOP to any message you receive. If you need assistance, you can text HELP for support.
      </p>
      <p className="mb-4">
        For more details on how we collect and protect your data, please refer to our{" "}
        <a href="/privacy-policy" className="text-green-400 hover:underline">Privacy Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Messaging Consent</h2>
      <p className="mb-4">
        As a user, you must explicitly consent to receive messages from Click Titan LLC. Consent can be given through various channels including, but not limited to, our website sign-up forms, paper forms, or verbally through customer service interactions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Message Types and Frequency</h2>
      <p className="mb-4">
        Messages sent by Click Titan LLC may include alerts, reminders, promotional offers, updates, and other relevant communications. Message frequency may vary depending on your interaction with our services and your preferences.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Rates and Charges</h2>
      <p className="mb-4">
        Standard message & data rates apply to any messages you send or receive as part of our service. This could affect your bill and depends on the terms set by your mobile carrier.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Opt-Out Instructions</h2>
      <p className="mb-4">
        To discontinue receiving messages from Click Titan LLC, you can reply STOP to any of our messages at any time. This will unsubscribe you from our SMS communications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Privacy Policy</h2>
      <p className="mb-4">
        Our Privacy Policy outlines how we collect, use, and protect your data. It can be found{" "}
        <a href="/privacy-policy" className="text-green-400 hover:underline">here</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Message Delivery</h2>
      <p className="mb-4">
        Click Titan LLC does not guarantee that messages will be delivered without delays or failures. Such issues can occur due to factors outside our control, such as network problems or device compatibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">User Obligations</h2>
      <p className="mb-4">
        When using our messaging service, you agree to abide by all applicable laws and regulations. You must not use this service to send messages that are offensive, illegal, or intended to harass or harm others.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Compliance with Laws</h2>
      <p className="mb-4">
        You acknowledge that the messaging service must be used in compliance with all relevant laws, including those relating to privacy, telecommunications, and commercial communications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms and Conditions</h2>
      <p className="mb-4">
        Click Titan LLC reserves the right to change these Terms and Conditions at any time. Changes will be communicated through our website or direct communications where feasible.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Information</h2>
      <p className="mb-4">
        For any queries or concerns regarding these Terms and Conditions, please contact Click Titan LLC at{" "}
        <a href="mailto:brandon@clicktitan.com" className="text-green-400 hover:underline">brandon@clicktitan.com</a>.
      </p>
                </div>

          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Join Our Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Ready to </span>
              <span className="gradient-text glow-text">Transform</span>
              <span className="text-white glow-text"> Your Marketing?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of successful roofing companies using our AI-powered marketing solutions. Book your free consultation now.
            </p>

            <a
              href="#book-call"
              className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,241,99,0.3)] group"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermOfUse;