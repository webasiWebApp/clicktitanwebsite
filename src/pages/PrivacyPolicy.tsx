import React, { useEffect } from 'react';
import { Brain, Target, TrendingUp, ArrowRight, Rocket, Users, Award, BarChart as ChartBar } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const PrivacyPolicy = () => {
  
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
              
              <span className="text-white">Privacy Policy</span>
            </h1>
                <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        
                <p className="mb-4">
                    This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You. We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Mobile Communication Policy</h2>
                <p className="mb-4">
                    We value your privacy and are committed to protecting your personal information. When you provide your mobile number, you consent to receive SMS messages related to our services. Your mobile opt-in will not be shared with third parties for marketing purposes.
                </p>
                <p className="mb-4">
                    <strong>Opt-Out Instructions:</strong> You can opt out of receiving SMS messages at any time by replying STOP to any message you receive from us.
                </p>
                <p className="mb-4">
                    <strong>Support:</strong> If you need assistance with our SMS communications, you can text HELP for more information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
                <p className="mb-4">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
                <p className="mb-4">
                    For the purposes of this Privacy Policy:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ClickTitan LLC.</li>
                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li><strong>Service</strong> refers to the advertisement, website, or application.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Collecting and Using Your Personal Data</h2>
                <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>
                <p className="mb-4">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Location details such as your address, city, or country</li>
                    <li>Any other data such as personal preferences, requirements, or comments</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">Use of Your Personal Data</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>To provide and maintain our Service, including monitoring usage.</li>
                    <li>To contact You via email, phone, or SMS about updates, features, or support.</li>
                    <li>To manage Your requests and respond to inquiries.</li>
                    <li>For legal compliance and security purposes.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Security of Your Personal Data</h2>
                <p className="mb-4">
                    The security of Your Personal Data is important to Us, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <p className="mb-4">
                    This Privacy Policy was last updated on <strong>2025/04/21 09:55:11</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, You can contact us via email at <a href="mailto:brandon@clicktitan.com" className="text-green-400 hover:underline">brandon@clicktitan.com</a>.
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

export default PrivacyPolicy;