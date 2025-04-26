
import { ReactNode } from "react";
import {
  TrendingUp,
  BarChart,
  DollarSign,
  PhoneCall,
  ClipboardCheck,
  Hammer,
  Megaphone,
  PhoneIncoming,
  CircleDollarSign
} from "lucide-react"; 

import caseStudy1 from "../../assest/caseStudy/caseStudy1.png"
import caseStudy2 from "../../assest/caseStudy/caseStudy2.png"
import caseStudy3 from "../../assest/caseStudy/caseStudy3.png"
import caseStudy4 from "../../assest/caseStudy/caseStudy4.png"
import caseStudy5 from "../../assest/caseStudy/caseStudy5.png"

export interface ResultItem {
    value: string;
    metric: string;
    icon: ReactNode
  }
  
  export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    clientName: string;
    location: string;
    industry: string;
    companySize: string;
    challenge: string;
    solution: string;
    results: ResultItem[];
    keyMetrics: {
      before: {
        leads: number;
        conversionRate: number;
        costPerLead: number;
        revenue: number;
      };
      after: {
        leads: number;
        conversionRate: number;
        costPerLead: number;
        revenue: number;
      };
    };
    testimonial: {
      quote: string;
      author: string;
      position: string;
      image: string;
    };
    timeline: {
      date: string;
      title: string;
      description: string;
    }[];
    implementation: string[];
    teamMembers: {
      name: string;
      role: string;
      image: string;
    }[];
    relatedCaseStudies: string[];
  }
  
  export const caseStudies: CaseStudy[] = [
    {
      id: "highlow-roofing",
      title: "HighLow Roofing's $400K Revenue Breakthrough",
      description: "How Click Titan's AI + Google Ads campaign helped HighLow Roofing secure 42 new jobs and $408,024 in revenue at a 22.66x ROAS.",
      thumbnail: caseStudy2, // Replace with actual image URL
      clientName: "HighLow Roofing",
      location: "Calgary, Alberta",
      industry: "Residential Roofing",
      companySize: "10-20 employees",
      challenge: "Generating consistent leads at a sustainable cost with measurable ROI.",
      solution: "Click Titan built a custom Google Ads campaign powered by AI to increase inbound calls and drive conversions at scale.",
      results: [
        { value: "$408,024", metric: "Revenue", icon: <TrendingUp className="h-6 w-6 text-[#00f163]" /> },
        { value: "22.66x", metric: "ROAS", icon: <BarChart className="h-6 w-6 text-[#00f163]" /> },
        { value: "$428.57", metric: "Cost per Job", icon: <DollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "$18,000", metric: "Adspend", icon: <Megaphone className="h-6 w-6 text-[#00f163]" /> },
        { value: "364", metric: "Inbound Calls", icon: <PhoneCall className="h-6 w-6 text-[#00f163]" /> },
        { value: "$49.45", metric: "Cost Per Call", icon: <PhoneIncoming className="h-6 w-6 text-[#00f163]" /> },
        { value: "114", metric: "Number of Sits", icon: <ClipboardCheck className="h-6 w-6 text-[#00f163]" /> },
        { value: "$157.89", metric: "Cost Per Sit", icon: <CircleDollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "42", metric: "Number of Jobs", icon: <Hammer className="h-6 w-6 text-[#00f163]" /> }
      ],
      keyMetrics: {
        before: {
          leads: 0,
          conversionRate: 0,
          costPerLead: 0,
          revenue: 0
        },
        after: {
          leads: 364,
          conversionRate: 11.5,
          costPerLead: 49.45,
          revenue: 408024
        }
      },
      testimonial: {
        quote: "Click Titan helped us get real jobs, not just leads. The results speak for themselves!",
        author: "John Klassen",
        position: "Owner",
        image: "https://highlowroofing.ca/assets/john.jpg" // Replace if image exists
      },
      timeline: [
        {
          date: "July 12, 2024",
          title: "Campaign Launch",
          description: "Deployed AI-driven Google Ads targeting roofing keywords in Calgary."
        },
        {
          date: "Feb 12, 2025",
          title: "Results Review",
          description: "Evaluated 7-month campaign performance and ROI."
        }
      ],
      implementation: [
        "Custom Google Ads campaigns",
        "Inbound call tracking",
        "AI-enhanced keyword optimization"
      ],
      teamMembers: [],
      relatedCaseStudies: ["caprica-homes", "remarkable-roofing","genroof", "safeguard-impact"]
    },
    {
      id: "caprica-homes",
      title: "Caprica Homes Achieves Over $561K in Revenue",
      description: "AI + Google Ads generated 50 roofing jobs and over $561K revenue with 21.72x ROAS for Caprica Homes in Cleveland.",
      thumbnail: caseStudy5,
      clientName: "Caprica Homes",
      location: "Cleveland, Ohio",
      industry: "Roofing & Home Services",
      companySize: "10-50 employees",
      challenge: "High ad costs and unpredictable lead quality.",
      solution: "Click Titan created and optimized an AI-assisted Google Ads funnel targeting Cleveland homeowners.",
      results: [
        { value: "$561,623", metric: "Revenue", icon: <TrendingUp className="h-6 w-6 text-[#00f163]" /> },
        { value: "21.72x", metric: "ROAS", icon: <BarChart className="h-6 w-6 text-[#00f163]" /> },
        { value: "$517.14", metric: "Cost per Job", icon: <DollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "$25,857", metric: "Adspend", icon: <Megaphone className="h-6 w-6 text-[#00f163]" /> },
        { value: "413", metric: "Inbound Calls", icon: <PhoneCall className="h-6 w-6 text-[#00f163]" /> },
        { value: "$62.60", metric: "Cost Per Call", icon: <PhoneIncoming className="h-6 w-6 text-[#00f163]" /> },
        { value: "133", metric: "Number of Sits", icon: <ClipboardCheck className="h-6 w-6 text-[#00f163]" /> },
        { value: "$194.41", metric: "Cost Per Sit", icon: <CircleDollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "50", metric: "Number of Jobs", icon: <Hammer className="h-6 w-6 text-[#00f163]" /> }
      ],
      keyMetrics: {
        before: {
          leads: 0,
          conversionRate: 0,
          costPerLead: 0,
          revenue: 0
        },
        after: {
          leads: 413,
          conversionRate: 12.1,
          costPerLead: 62.6,
          revenue: 561623
        }
      },
      testimonial: {
        quote: "Our revenue took a huge leap. The targeting and follow-through were spot-on.",
        author: "Keith Koch",
        position: "Owner",
        image: "https://capricahomes.com/keith.jpg"
      },
      timeline: [
        {
          date: "June 3, 2024",
          title: "Initial Launch",
          description: "Ad campaigns kicked off targeting home service seekers."
        },
        {
          date: "Feb 3, 2025",
          title: "Campaign Completion",
          description: "50 completed jobs analyzed and reported."
        }
      ],
      implementation: [
        "Smart bidding via AI",
        "A/B ad testing",
        "ROI-focused conversion tracking"
      ],
      teamMembers: [],
      relatedCaseStudies: ["remarkable-roofing","highlow-roofing","genroof", "safeguard-impact"]
    },
    {
      id: "remarkable-roofing",
      title: "15x ROAS Achieved by Remarkable Roofing",
      description: "Learn how Remarkable Roofing turned $20K ad spend into $320K+ in revenue through targeted AI campaigns.",
      thumbnail: caseStudy3,
      clientName: "Remarkable Roofing",
      location: "Knoxville, Tennessee",
      industry: "Roofing",
      companySize: "10-30 employees",
      challenge: "Underperforming Google Ads with low conversion rates.",
      solution: "Optimized ad strategy using AI-based targeting and keyword tracking.",
      results: [
        { value: "$320,892", metric: "Revenue", icon: <TrendingUp className="h-6 w-6 text-[#00f163]" /> },
        { value: "15.84x", metric: "ROAS", icon: <BarChart className="h-6 w-6 text-[#00f163]" /> },
        { value: "$562.52", metric: "Cost per Job", icon: <DollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "$20,251", metric: "Adspend", icon: <Megaphone className="h-6 w-6 text-[#00f163]" /> },
        { value: "315", metric: "Inbound Calls", icon: <PhoneCall className="h-6 w-6 text-[#00f163]" /> },
        { value: "$64.28", metric: "Cost Per Call", icon: <PhoneIncoming className="h-6 w-6 text-[#00f163]" /> },
        { value: "109", metric: "Number of Sits", icon: <ClipboardCheck className="h-6 w-6 text-[#00f163]" /> },
        { value: "$185.78 ", metric: "Cost Per Sit", icon: <CircleDollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "36", metric: "Number of Jobs", icon: <Hammer className="h-6 w-6 text-[#00f163]" /> }
      ],
      keyMetrics: {
        before: {
          leads: 0,
          conversionRate: 0,
          costPerLead: 0,
          revenue: 0
        },
        after: {
          leads: 315,
          conversionRate: 11.4,
          costPerLead: 64.28,
          revenue: 320892
        }
      },
      testimonial: {
        quote: "We went from hit-or-miss to a smooth system of consistent leads and jobs.",
        author: "Dusty Roberts",
        position: "Owner",
        image: "https://remarkableroofingconstruction.com/dusty.jpg"
      },
      timeline: [
        {
          date: "July 9, 2024",
          title: "Campaign Launch",
          description: "Smart targeting and creative rolled out in Knoxville market."
        },
        {
          date: "Feb 9, 2025",
          title: "ROI Achieved",
          description: "Campaign closed with 36 confirmed jobs."
        }
      ],
      implementation: [
        "Advanced geo-targeting",
        "Smart phone call conversion tracking",
        "AI-generated copy and visuals"
      ],
      teamMembers: [],
      relatedCaseStudies: ["caprica-homes","highlow-roofing","genroof", "safeguard-impact"]
    },
    {
      id: "genroof",
      title: "GenRoof Generates $161K in 2 Months",
      description: "How GenRoof used AI + Google Ads to secure 7 roofing jobs and 17.94x ROAS from just $9,000 ad spend.",
      thumbnail: caseStudy4,
      clientName: "GenRoof",
      location: "Toronto, Ontario",
      industry: "Residential Roofing",
      companySize: "5-15 employees",
      challenge: "Needed qualified leads in a competitive metro market.",
      solution: "Launched short-burst AI campaign with heavy emphasis on call conversions and follow-ups.",
      results: [
        { value: "$161,501", metric: "Revenue", icon: <TrendingUp className="h-6 w-6 text-[#00f163]" /> },
        { value: "17.94x", metric: "ROAS", icon: <BarChart className="h-6 w-6 text-[#00f163]" /> },
        { value: "$1,285 ", metric: "Cost per Job", icon: <DollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "$9,000 ", metric: "Adspend", icon: <Megaphone className="h-6 w-6 text-[#00f163]" /> },
        { value: "122", metric: "Inbound Leads", icon: <PhoneCall className="h-6 w-6 text-[#00f163]" /> },
        { value: "$73.77", metric: "Cost Per Call", icon: <PhoneIncoming className="h-6 w-6 text-[#00f163]" /> },
        { value: "38", metric: "Number of Sits", icon: <ClipboardCheck className="h-6 w-6 text-[#00f163]" /> },
        { value: "$236", metric: "Cost Per Sit", icon: <CircleDollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "7", metric: "Number of Jobs", icon: <Hammer className="h-6 w-6 text-[#00f163]" /> }
      ],
      keyMetrics: {
        before: {
          leads: 0,
          conversionRate: 0,
          costPerLead: 0,
          revenue: 0
        },
        after: {
          leads: 122,
          conversionRate: 6.5,
          costPerLead: 73.77,
          revenue: 161501
        }
      },
      testimonial: {
        quote: "For a relatively small spend, the return we got was incredible. Highly recommended!",
        author: "Evan Braun",
        position: "Owner",
        image: "http://genroof.ca/evan.jpg"
      },
      timeline: [
        {
          date: "Jan 1, 2025",
          title: "Campaign Kickoff",
          description: "Launched short-term push with high intent keywords."
        },
        {
          date: "Mar 1, 2025",
          title: "Final Performance Review",
          description: "Reviewed 7 closed jobs and strong campaign metrics."
        }
      ],
      implementation: [
        "AI campaign pacing",
        "Click-to-call optimization",
        "Post-close review requests"
      ],
      teamMembers: [],
      relatedCaseStudies: ["caprica-homes", "remarkable-roofing","highlow-roofing","safeguard-impact"]
    },
    {
      id: "safeguard-impact",
      title: "SafeGuard Impact Achieves 32x ROAS",
      description: "SafeGuard Impact generated $147,501 in revenue with a 32.07x ROAS using a compact AI + Ads campaign.",
      thumbnail: caseStudy1,
      clientName: "SafeGuard Impact",
      location: "Miami, Florida",
      industry: "Roofing & Impact Windows",
      companySize: "10-25 employees",
      challenge: "Needed high-impact leads within a narrow window of ad spend.",
      solution: "Implemented focused Google Ads with AI targeting and retargeting for maximum conversion.",
      results: [
        { value: "$147,501", metric: "Revenue", icon: <TrendingUp className="h-6 w-6 text-[#00f163]" /> },
        { value: "32.07x", metric: "ROAS", icon: <BarChart className="h-6 w-6 text-[#00f163]" /> },
        { value: "$1,149 ", metric: "Cost per Job", icon: <DollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "$4,599 ", metric: "Adspend", icon: <Megaphone className="h-6 w-6 text-[#00f163]" /> },
        { value: "82", metric: "Inbound Leads", icon: <PhoneCall className="h-6 w-6 text-[#00f163]" /> },
        { value: "$56.08 ", metric: "Cost Per Call", icon: <PhoneIncoming className="h-6 w-6 text-[#00f163]" /> },
        { value: "22", metric: "Number of Sits", icon: <ClipboardCheck className="h-6 w-6 text-[#00f163]" /> },
        { value: "$299 ", metric: "Cost Per Sit", icon: <CircleDollarSign className="h-6 w-6 text-[#00f163]" /> },
        { value: "4", metric: "Number of Jobs", icon: <Hammer className="h-6 w-6 text-[#00f163]" /> }
      ],
      keyMetrics: {
        before: {
          leads: 0,
          conversionRate: 0,
          costPerLead: 0,
          revenue: 0
        },
        after: {
          leads: 82,
          conversionRate: 4.9,
          costPerLead: 56.08,
          revenue: 147501
        }
      },
      testimonial: {
        quote: "In just one month, the leads started flowing and conversions followed fast.",
        author: "Eric Snyder",
        position: "Owner",
        image: "http://safeguardimpact.com/eric.jpg"
      },
      timeline: [
        {
          date: "Jan 6, 2025",
          title: "Initial Launch",
          description: "Launched compact, focused campaign targeting Miami homeowners."
        },
        {
          date: "Feb 6, 2025",
          title: "Campaign Wrap-Up",
          description: "Review showed high ROI with 4 closed jobs and 82 leads."
        }
      ],
      implementation: [
        "Budget-optimized targeting",
        "High-converting ad creatives",
        "AI-fueled retargeting"
      ],
      teamMembers: [],
      relatedCaseStudies: ["caprica-homes", "remarkable-roofing","highlow-roofing","genroof"]
    }
    
    
    
    
    
  ];
  
  export const highlights = [
    {
      icon: () => null,
      title: "Average Increase in Leads",
      value: "178%",
      description: "Our clients see dramatic increases in qualified leads through AI-powered targeting."
    },
    {
      icon: () => null,
      title: "Average ROI",
      value: "310%",
      description: "Our marketing solutions deliver exceptional returns on marketing investment."
    },
    {
      icon: () => null,
      title: "Client Retention",
      value: "96%",
      description: "Our clients stay with us because our AI solutions continue to deliver results."
    }
  ];
  
  export function getCaseStudyById(id: string): CaseStudy | undefined {
    return caseStudies.find(study => study.id === id);
  }
  
  export function getRelatedCaseStudies(ids: string[]): CaseStudy[] {
    return caseStudies.filter(study => ids.includes(study.id));
  }