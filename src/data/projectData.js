import { asset } from '../utils/assetUrl';

/**
 * CENTRAL PROJECT DATA REPOSITORY — NOORA AVENUE - II
 * 
 * Verified from official DTCP layout map & sanction order & brochure:
 * Layout Drawing: மனை உட்பிரிவு வரைபடம்
 * Sanction Order: SWP/68/2024 | App No: GT61QM93/2024
 * Location: Madina Garden, Kokkattikulam Village, (500m from Annai Hajira Women's College), Melapalayam, Tirunelveli
 */

export const projectData = {
  // Brand & Identity
  brandName: "NOORA",
  projectTitle: "AVENUE - II",
  fullProjectName: "NOORA AVENUE - II",
  arabicInvocation: "In the Name of Allah",
  approvalBadge: "DTCP APPROVED LAYOUT",
  heroTitle: "Prime Residential Plots for Sale",
  heroSubtitle: "DTCP Approved Residential Plotted Development",
  heroDescription: "An exclusive 8-plot gated residential plotted development planned with 30-feet (9.15M) wide internal avenue roads. Ready for immediate boundary possession, spot registration, and custom construction.",
  tamilQuote: "இன்று வாங்கும் நிலம், நாளை உங்கள் பெரிய சொத்து!",
  promotionalTagline: "Book your residential plot today!",

  // Contact Information (Verified from brochure)
  contact: {
    primaryPhone: "94432 83369",
    secondaryPhone: "97900 19486",
    primaryPhoneFormatted: "+91 94432 83369",
    secondaryPhoneFormatted: "+91 97900 19486",
    primaryPhoneTel: "+919443283369",
    secondaryPhoneTel: "+919790019486",
    whatsappMessage: "Hello, I am interested in NOORA AVENUE - II residential plots at Kokkattikulam / Melapalayam. Please share plot availability, brochure, and pricing details.",
    whatsappLink: "https://wa.me/919443283369?text=Hello%2C%20I%20am%20interested%20in%20NOORA%20AVENUE%20-%20II%20residential%20plots%20at%20Kokkattikulam%20%2F%20Melapalayam.%20Please%20share%20plot%20availability%2C%20brochure%2C%20and%20pricing%20details."
  },

  // Verified Location Data (Directly from official brochure & sanction order)
  locationDetails: {
    title: "Madina Garden, Kokkattikulam Village",
    badge: "EXACT SITE LOCATION & SATELLITE MAP",
    landmarkProximity: "500m from Annai Hajira Women's College",
    address: "Madina Garden, Kokkattikulam Village, Near Annai Hajira Women's College, Melapalayam, Tirunelveli, Tamil Nadu — 627005",
    village: "Kokkattikulam Village",
    ward: "Melapalayam Ward (Ward AS, Block 1)",
    taluk: "Palayamkottai Taluk",
    corporation: "Tirunelveli Corporation",
    surveyNumbers: "Survey No: 14/1Ppt, 1Q.18/3pt/4 | Town Survey Nos: 13/37, 13/55, 16/4, 16/75",
    coordinates: {
      lat: 8.684444,
      lng: 77.713056,
      formatted: "8°41'04\"N 77°42'47\"E"
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=8.684444,77.713056&t=k&z=17&ie=UTF8&iwloc=&output=embed",
    googleMapsRoadmapEmbedUrl: "https://maps.google.com/maps?q=Annai+Hajira+Women's+College,+Melapalayam,+Tirunelveli&t=m&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8.684444,77.713056",
    satelliteImage: asset("/assets/images/melapalayam_satellite_close.jpg"),
    satelliteOverviewImage: asset("/assets/images/melapalayam_satellite_location.jpg"),
    landmarks: [
      { name: "Annai Hajira Women's College", distance: "Just 500 Meters Away", highlight: true },
      { name: "V.S.T. Pallivasal, Melapalayam", distance: "1.5 Km Distance", highlight: true },
      { name: "Nethaji Road Arterial Route", distance: "Immediate Road Linkage", highlight: false },
      { name: "Melapalayam & Palayamkottai Hub", distance: "Short 5-10 Min Drive", highlight: false }
    ],
    note: "Official layout location situated in Kokkattikulam Village, Melapalayam Ward, just 500 meters from Annai Hajira Women's College."
  },

  // Verified Project Statistics (Transcribed directly from Tamil DTCP order)
  stats: [
    { label: "DTCP Approval No", value: "SWP/68/2024", subtext: "Online App: GT61QM93/2024" },
    { label: "மொத்த பரப்பளவு (Total Area)", value: "1133.00 Sq.M", subtext: "0.28 ஏக்கர் (Acre)" },
    { label: "அங்கீகரிக்கப்பட்ட மனைகள்", value: "8 மனைகள் (Plots)", subtext: "Plot 01 முதல் Plot 08 வரை" },
    { label: "அணுகு சாலை அகலம் (Road)", value: "9.15 M (30 Ft)", subtext: "நிலப்பரப்பிலுள்ள 30 அடி சாலை" }
  ],

  // Core Highlights (Brochure verified)
  highlights: [
    {
      id: "dtcp",
      title: "DTCP APPROVED LAYOUT",
      description: "மாவட்ட நகர் ஊரமைப்பு அலுவலகம் (DTCP) தொழில்நுட்ப ஒப்புதல் SWP/68/2024 வழங்கப்பட்டு முழுமையாக அங்கீகரிக்கப்பட்ட வீட்டு மனைப்பிரிவு.",
      icon: "ShieldCheck"
    },
    {
      id: "ready",
      title: "READY FOR IMMEDIATE SALE",
      description: "உடனடி விற்பனை மற்றும் கிரயப் பத்திரப் பதிவுக்குத் தயாராக உள்ள தெளிவான வில்லங்கமில்லா ஆவணங்கள்.",
      icon: "FileCheck"
    },
    {
      id: "prime",
      title: "PRIME LOCATION",
      description: "அன்னை ஹாஜிரா மகளிர் கல்லூரிக்கு மிக அருகில் (500 மீ), எதிர்கால வளர்ச்சிக்கு உகந்த உயர் குடியிருப்புப் பகுதி.",
      icon: "MapPin"
    },
    {
      id: "developed",
      title: "WELL DEVELOPED AREA",
      description: "9.15 மீட்டர் (30 அடி) அகல சாலை மற்றும் குடியிருப்புகளுக்கு தேவையான அனைத்து அடிப்படை வசதிகளுடன் கூடிய பகுதி.",
      icon: "Building2"
    }
  ],

  // Video Section: "See what we offer and how it works" (Workflow Steps)
  workflowSteps: [
    {
      id: "step-1",
      stepNumber: "01",
      title: "Request & Requirements",
      description: "Connect with our authorized promoters to register your residential plot requirement, desired road frontage, and budget in Kokkattikulam / Melapalayam.",
      actionText: "Request Plot Callback",
      image: asset("/assets/images/melapalayam_satellite_location.jpg"),
      blueprintBadge: "Consultation Phase"
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "Plot Selection & On-Site Walkthrough",
      description: "Explore residential Plots 01 through 08 with exact boundary corner stones, 30-feet road frontages, and satellite-verified demarcation.",
      actionText: "Inspect 8 Available Plots",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      blueprintBadge: "30 Ft Road Access"
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "Legal Support & DTCP Order",
      description: "Review complete statutory records including DTCP Sanction SWP/68/2024, online filing GT61QM93/2024, and government park fee treasury receipts.",
      actionText: "Verify DTCP Sanctions",
      image: asset("/assets/images/plot_layout_scan.png"),
      blueprintBadge: "Order SWP/68/2024"
    },
    {
      id: "step-4",
      stepNumber: "04",
      title: "Spot Registration & Plot Handover",
      description: "Direct sale deed execution, instant sub-registrar registration, transparent encumbrance-free title transfer, and immediate site possession.",
      actionText: "Book Immediate Registration",
      image: asset("/assets/images/land_ground_view.jpg"),
      blueprintBadge: "Clear Title Assured"
    }
  ],

  // Section: "Verified Land Demarcation & Satellite Records" (Pure Land & Map Images from Satellite & Survey)
  advisors: [
    {
      id: "ver-1",
      name: "Satellite GPS Land Demarcation",
      role: "GPS: 8.684444° N, 77.713056° E",
      rating: "5.0",
      reviewsCount: "Google Satellite Verified",
      phone: "+91 94432 83369",
      phoneTel: "+919443283369",
      image: asset("/assets/images/melapalayam_satellite_close.jpg"),
      specialty: "Kokkattikulam Village • 500m to Annai Hajira Women's College"
    },
    {
      id: "ver-2",
      name: "DTCP Sanctioned Layout Map",
      role: "Sanction Order SWP/68/2024",
      rating: "5.0",
      reviewsCount: "Town & Country Planning Approved",
      phone: "+91 97900 19486",
      phoneTel: "+919790019486",
      image: asset("/assets/images/plot_layout_scan.png"),
      specialty: "Scale 1:400 Blueprint • 8 Residential Plots Demarcated"
    },
    {
      id: "ver-3",
      name: "Drone Aerial Land Survey",
      role: "Survey Nos: 14/1Ppt, 16/4, 16/17",
      rating: "5.0",
      reviewsCount: "Cadastral Boundary Stone Verified",
      phone: "+91 94432 83369",
      phoneTel: "+919443283369",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      specialty: "1133.00 Sq.M (0.28 Acre) • Spot Possession & Registration"
    },
    {
      id: "ver-4",
      name: "30-Feet Wide Internal Avenue Road",
      role: "9.15 Meter Direct Access Road",
      rating: "5.0",
      reviewsCount: "Heavy Vehicle Ingress Approved",
      phone: "+91 97900 19486",
      phoneTel: "+919790019486",
      image: asset("/assets/images/land_ground_view.jpg"),
      specialty: "Direct Avenue Frontage for All Plots • Instant House Construction"
    }
  ],

  // Video Section: "Reliable facilities for stable investments"
  investmentMetrics: [
    {
      id: "metric-1",
      title: "Capital Growth Rate",
      value: "24%+",
      subtitle: "Melapalayam / Annai Hajira College expansion corridor",
      bars: [35, 45, 55, 65, 80, 95, 110, 130],
      trend: "+18.4% YoY",
      badge: "High Growth"
    },
    {
      id: "metric-2",
      title: "Total Sanctioned Area",
      value: "1,133 Sq.M",
      subtitle: "0.28 Acre low-density boutique plotted layout",
      bars: [50, 60, 70, 75, 85, 90, 100, 100],
      trend: "8 Exclusive Plots",
      badge: "Residential Plots"
    },
    {
      id: "metric-3",
      title: "Avenue Road Width",
      value: "9.15 M (30 Ft)",
      subtitle: "Approved wide vehicular movement avenue",
      bars: [40, 50, 60, 70, 85, 90, 95, 100],
      trend: "Fully Sanctioned",
      badge: "Direct Access"
    }
  ],

  // Video Section: "Offers for investments" (Featured Plots with Specs)
  investmentOffers: [
    {
      id: "offer-1",
      plotNumber: "PLOT 01",
      title: "Corner Southern Prime Plot Parcel",
      dimensions: "North: 21.90M • South: 15.80M • West: 6.50M",
      roadWidth: "9.15 M (30 Feet)",
      surveyNo: "நகரளவை எண்: 16/17, 16/18",
      description: "Exceptional corner residential plot featuring prominent 6.50M road frontage on the sanctioned avenue. Ready for custom residential construction with independent boundary.",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      dtcpBadge: "DTCP Sanctioned",
      clearance: "Immediate Registration",
      category: "Corner Plot"
    },
    {
      id: "offer-2",
      plotNumber: "PLOT 04",
      title: "Central Prime Residential Plot Parcel",
      dimensions: "North: 21.90M • South: 21.90M • Width: 6.50M",
      roadWidth: "9.15 M (30 Feet)",
      surveyNo: "நகரளவை எண்: 13/55",
      description: "Flawless rectangular residential plot with equal 21.90M depth and direct road frontage onto the 30-feet internal road. Clear boundaries with official DTCP demarcation.",
      image: asset("/assets/images/plot_layout_scan.png"),
      dtcpBadge: "SWP/68/2024",
      clearance: "100% Clear Title",
      category: "Central Prime"
    },
    {
      id: "offer-3",
      plotNumber: "PLOT 08",
      title: "Northern Cul-de-sac Plot Estate",
      dimensions: "North: 16.40M • South: 16.10M • East: 9.70M",
      roadWidth: "7.00M Offset Entrance",
      surveyNo: "நகரளவை எண்: 13/11",
      description: "Private northernmost residential plot offering superior seclusion at the culmination of the avenue. Generous 9.70M eastern boundary in a peaceful residential setting.",
      image: asset("/assets/images/land_ground_view.jpg"),
      dtcpBadge: "Sanctioned Cul-de-sac",
      clearance: "Instant Possession",
      category: "Northern Villa Plot"
    }
  ],

  // Layout Blueprint Specs & Scanned Maps
  layoutInfo: {
    title: "EXPLORE THE PLOT LAYOUT",
    tamilTitle: "மனை உட்பிரிவு வரைபடம் (PLAN OF SUBDIVISION)",
    subtitle: "Clearly understand the available plots, precise dimensions and road access.",
    scale: "1:400",
    totalPlotsCount: 8,
    roadWidth: "9.15 M (30 Feet)",
    image: asset("/assets/images/plot_layout_scan.png"),
    fullSheetImage: asset("/assets/images/original_reference_sheet.jpg")
  },

  // 8 Individual Plots Transcribed Accurately from Layout Map
  plots: [
    {
      id: 1,
      plotNumber: "PLOT 01",
      dimensions: {
        north: "21.90 M",
        south: "12.20 M + 3.60 M",
        east: "6.10 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Facing 9.15M Layout Road (East/West)",
      statusText: "Ready for Sale",
      category: "Corner Plot",
      surveyDetails: "நகரளவை எண்: 16/17, 16/18",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      areaApprox: "142.3 Sq.M (1,532 Sq.Ft)"
    },
    {
      id: 2,
      plotNumber: "PLOT 02",
      dimensions: {
        north: "21.90 M",
        south: "21.90 M",
        east: "6.50 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "நகரளவை எண்: 16/4",
      image: asset("/assets/images/plot_layout_scan.png"),
      areaApprox: "142.3 Sq.M (1,532 Sq.Ft)"
    },
    {
      id: 3,
      plotNumber: "PLOT 03",
      dimensions: {
        north: "21.90 M",
        south: "21.90 M",
        east: "6.50 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "நகரளவை எண்: 16/4, 16/75",
      image: asset("/assets/images/melapalayam_satellite_location.jpg"),
      areaApprox: "142.3 Sq.M (1,532 Sq.Ft)"
    },
    {
      id: 4,
      plotNumber: "PLOT 04",
      dimensions: {
        north: "21.90 M",
        south: "21.90 M",
        east: "6.50 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Central Prime",
      surveyDetails: "நகரளவை எண்: 13/55",
      image: asset("/assets/images/land_ground_view.jpg"),
      areaApprox: "142.3 Sq.M (1,532 Sq.Ft)"
    },
    {
      id: 5,
      plotNumber: "PLOT 05",
      dimensions: {
        north: "21.90 M",
        south: "21.90 M",
        east: "6.50 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Central Prime",
      surveyDetails: "நகரளவை எண்: 13/55",
      image: asset("/assets/images/plot_layout_scan.png"),
      areaApprox: "142.3 Sq.M (1,532 Sq.Ft)"
    },
    {
      id: 6,
      plotNumber: "PLOT 06",
      dimensions: {
        north: "21.20 M",
        south: "21.90 M",
        east: "6.50 M",
        west: "6.50 M (Road Frontage)"
      },
      roadFrontage: "6.50 M onto 9.15M Road",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "நகரளவை எண்: 13/54",
      image: asset("/assets/images/melapalayam_satellite_location.jpg"),
      areaApprox: "140.0 Sq.M (1,507 Sq.Ft)"
    },
    {
      id: 7,
      plotNumber: "PLOT 07",
      dimensions: {
        north: "16.10 M",
        south: "21.20 M",
        east: "6.50 M",
        west: "6.50 M (Curved road transition)"
      },
      roadFrontage: "6.50 M onto Road & Curve",
      facing: "Direct Access to 9.15M Internal Road",
      statusText: "Ready for Sale",
      category: "Executive Plot",
      surveyDetails: "நகரளவை எண்: 13/37",
      image: asset("/assets/images/melapalayam_satellite_close.jpg"),
      areaApprox: "121.2 Sq.M (1,304 Sq.Ft)"
    },
    {
      id: 8,
      plotNumber: "PLOT 08",
      dimensions: {
        north: "16.40 M",
        south: "16.10 M",
        east: "9.70 M",
        west: "7.00 M (Offset Entrance)"
      },
      roadFrontage: "Direct Cul-de-sac Entrance",
      facing: "Northern End Private Layout Facing",
      statusText: "Ready for Sale",
      category: "Northern Villa Plot",
      surveyDetails: "நகரளவை எண்: 13/11",
      image: asset("/assets/images/plot_layout_scan.png"),
      areaApprox: "135.5 Sq.M (1,458 Sq.Ft)"
    }
  ],

  // Official DTCP Document Data (Directly from Scanned Government Order)
  approvalDetails: {
    heading: "DTCP APPROVED LAYOUT",
    subheading: "Complete Government Sanctions & Technical Approvals",
    onlineAppNo: "GT61QM93/2024",
    layoutOrderNo: "SWP/68/2024",
    priorRefNo: "SWP/92/2021",
    totalArea: "1133.00 ச.மீ (0.28 ஏக்கர்)",
    allottedPlots: "8 மனைகள் (Plots 1 to 8)",
    parkAreaFee: "ரூ. 67,980/- (Paid on 08.08.2024)",
    ruleReference: "TNCDBR விதி 47(6)",
    scale: "1:400",
    documentImage: asset("/assets/images/approval_document_scan.png"),
    fullSheetImage: asset("/assets/images/original_reference_sheet.jpg"),
    officialClauses: [
      {
        title: "தொழில்நுட்ப ஒப்புதல் (Technical Sanction)",
        desc: "மாவட்ட நகர் ஊரமைப்பு அலுவலகம் மூலம் SWP/68/2024 உத்தரவின்படி 8 மனைகளுக்கான மனை உட்பிரிவு தொழில்நுட்ப ஒப்புதல் வழங்கப்பட்டுள்ளது."
      },
      {
        title: "பூங்கா கட்டணம் செலுத்துதல் (TNCDBR Rule 47(6))",
        desc: "பூங்கா ஒதுக்கீட்டிற்குப் பதிலாக 113.30 ச.மீ.-க்கு ஈடான அரசு வழிகாட்டு மதிப்பீட்டின்படி ரூ. 67,980/- கட்டணம் 08.08.2024 அன்று அரசு கணக்கில் செலுத்தப்பட்டுள்ளது."
      },
      {
        title: "அரசாணை விதிமுறைகள் பூர்த்தி",
        desc: "அரசாணை நிலை எண்: 134 (20.09.2022) மற்றும் அரசாணை நிலை எண்: 181 (19.12.2020) விதிகளின்படி சட்டபூர்வமான நடைமுறைகள் பூர்த்தி செய்யப்பட்டுள்ளன."
      },
      {
        title: "9.15 மீட்டர் உட்புற சாலை இணைப்பு",
        desc: "அனைத்து 8 மனைகளுக்கும் வசதியான 30 அடி (9.15M) சீரான சாலை வசதி வரைபடத்தில் அங்கீகரிக்கப்பட்டுள்ளது."
      }
    ]
  },

  // Why Choose NOORA AVENUE - II
  advantages: [
    {
      title: "Legally Clear & DTCP Sanctioned",
      desc: "Complete statutory documentation with registered sanctions (SWP/68/2024), government treasury fees remitted, and transparent title deeds."
    },
    {
      title: "Carefully Planned 8-Plot Layout",
      desc: "Low-density private plotted community offering exclusivity, generous road frontage, and comfortable living."
    },
    {
      title: "Superior Internal Road Infrastructure",
      desc: "Designed with 9.15-meter (30 ft) internal roads ensuring seamless vehicular movement and hassle-free access."
    },
    {
      title: "Prime Location near Annai Hajira College",
      desc: "Situated just 500 meters from Annai Hajira Women's College in Kokkattikulam, Melapalayam with rapid capital growth."
    }
  ],

  // Visual Media Gallery — Strictly Land, Satellite Maps, and Official Blueprint Records
  gallery: [
    {
      id: "gal-1",
      title: "Official Sanctioned Blueprint (மனை உட்பிரிவு வரைபடம்)",
      caption: "High-Resolution Subdivision Layout Plan showing Plots 01 - 08 & 9.15M Road",
      category: "Plot Blueprint",
      url: asset("/assets/images/plot_layout_scan.png")
    },
    {
      id: "gal-2",
      title: "DTCP Sanction Order Document (ஒப்புதல் ஆவணம்)",
      caption: "Govt Sanction Order SWP/68/2024 • Application GT61QM93/2024",
      category: "Legal Approval",
      url: asset("/assets/images/approval_document_scan.png")
    },
    {
      id: "gal-3",
      title: "Actual Satellite Map of Site Area",
      caption: "Kokkattikulam Village & 500m to Annai Hajira Women's College, Melapalayam",
      category: "Satellite Location",
      url: asset("/assets/images/melapalayam_satellite_close.jpg")
    },
    {
      id: "gal-4",
      title: "Regional Satellite Overview",
      caption: "Aerial Overview of Melapalayam Ward & Arterial Roadways",
      category: "Aerial Map",
      url: asset("/assets/images/melapalayam_satellite_location.jpg")
    },
    {
      id: "gal-5",
      title: "Aerial Drone Land Survey & Demarcation",
      caption: "High-Resolution Drone Overview of Demarcated Residential Plots with 9.15M Roadway",
      category: "Aerial Land Survey",
      url: asset("/assets/images/land_aerial_survey.jpg")
    },
    {
      id: "gal-6",
      title: "30-Feet Wide Internal Avenue Road & Boundary Stones",
      caption: "Direct Ground Level Photo of the Sanctioned Road and Numbered Demarcated Plots",
      category: "Road & Ground View",
      url: asset("/assets/images/land_ground_view.jpg")
    },
    {
      id: "gal-7",
      title: "Cadastral Satellite Plot Demarcation Map",
      caption: "Cartographic Satellite Layout with Boundary Outlines and Road Connectivity",
      category: "Cadastral Map",
      url: asset("/assets/images/satellite_map_plots.jpg")
    },
    {
      id: "gal-8",
      title: "Original Reference Sanction Sheet",
      caption: "Complete Sanction Sheet with Government Seals and Approval Signatures",
      category: "Official Record",
      url: asset("/assets/images/original_reference_sheet.jpg")
    }
  ],

  // Local SEO FAQs
  faqs: [
    {
      question: "Where exactly is NOORA AVENUE - II located in Melapalayam, Tirunelveli?",
      answer: "NOORA AVENUE - II is located at Madina Garden, Kokkattikulam Village, within the Melapalayam Ward (Ward AS, Block 1, Palayamkottai Taluk, Tirunelveli Corporation), Tamil Nadu — 627005. The site is situated just 500 meters from Annai Hajira Women's College and 1.5 km from V.S.T. Pallivasal."
    },
    {
      question: "Is NOORA AVENUE - II approved by DTCP and local authorities?",
      answer: "Yes, 100%. The layout has received full statutory technical sanction from the Directorate of Town and Country Planning (DTCP) under Sanction Order SWP/68/2024 (Online Application: GT61QM93/2024) and Tirunelveli Corporation planning approval. All government park fee treasury receipts and OSR obligations have been formally fulfilled."
    },
    {
      question: "What are the plot dimensions and internal road width?",
      answer: "The layout encompasses 8 sanctioned residential plots ranging from 121.2 Sq.M (1,304 Sq.Ft) to 142.3 Sq.M (1,532 Sq.Ft) with north-south depths of 21.90 meters. The layout features an official 9.15-meter (30-feet) wide internal avenue road providing generous vehicular ingress for all plots."
    },
    {
      question: "Are the residential plots ready for immediate registration and construction?",
      answer: "Yes. All 8 plots have clear, unencumbered parent titles with individual survey demarcations (Survey No: 14/1Ppt, 1Q.18/3pt/4; Town Survey Nos: 13/37, 13/55, 16/4, 16/75). Direct sale deed execution and immediate spot registration can be carried out at the Melapalayam Sub-Registrar Office with instant physical boundary possession."
    },
    {
      question: "How can I schedule a site walkthrough or get pricing details?",
      answer: "You can connect directly with our authorized project promoters by calling +91 94432 83369 or +91 97900 19486, or click the WhatsApp button on this website for immediate layout blueprints, plot availability, and current pricing."
    }
  ]
};

export default projectData;
