import { asset } from '../utils/assetUrl';

/**
 * CENTRAL PROJECT DATA REPOSITORY — NOORA AVENUE
 * 
 * Verified from official DTCP layout map & sanction order:
 * Layout Drawing: மனை உட்பிரிவு வரைபடம்
 * Sanction Order: ம.வ./தி.உ.தி.கு. எண்: SWP/104/2024
 * Technical Sanction: தி.அ/ம.வ./தி.உ.தி.கு. எண்: SWP/146/2024
 * Online Application No: 7GDMQ9WA/2024
 * Scheme: கொக்கடிகுளம் அபிவிருத்தி திட்டம் எண்: 2
 * Location: Kokkadikulam Village, S.No: 14/1J, Town Survey No: 13/7, Ward AS, Block 1, Melapalayam, Tirunelveli
 * Total Area: 900.00 Sq.M (0.22 Acre / 22.24 Cents)
 * Total Sanctioned Plots: 7 Plots (Plot 01 to Plot 07)
 * Road: 7.00M Existing Road (நிலையான சாலை 7.00மீ, TS No: 13/107)
 */

export const projectData = {
  // Brand & Identity
  brandName: "NOORA",
  projectTitle: "AVENUE",
  fullProjectName: "NOORA AVENUE",
  phaseTitle: "AVENUE - I (7 PLOTS)",
  arabicInvocation: "In the Name of Allah",
  approvalBadge: "DTCP APPROVED LAYOUT",
  heroTitle: "Prime Residential Plots for Sale",
  heroSubtitle: "DTCP Approved Residential Plotted Development",
  heroDescription: "An exclusive 7-plot DTCP approved residential plotted layout situated at Kokkadikulam (Scheme No: 2), Melapalayam Ward, Tirunelveli Corporation. Featuring direct 7.00-meter (23 Ft) wide road frontage, clear unencumbered title, spot registration, and immediate boundary possession.",
  tamilQuote: "இன்று வாங்கும் நிலம், நாளை உங்கள் பெரிய சொத்து!",
  promotionalTagline: "Book your residential plot today!",

  // Contact Information (Sole Authorized Contact Number)
  contact: {
    primaryPhone: "94432 83369",
    primaryPhoneFormatted: "+91 94432 83369",
    primaryPhoneTel: "+919443283369",
    whatsappMessage: "Hello, I am interested in NOORA AVENUE residential plots at Kokkadikulam / Melapalayam (Order SWP/104/2024). Please share plot availability, layout plan, and pricing details.",
    whatsappLink: "https://wa.me/919443283369?text=Hello%2C%20I%20am%20interested%20in%20NOORA%20AVENUE%20residential%20plots%20at%20Kokkadikulam%20%2F%20Melapalayam%20(Order%20SWP%2F104%2F2024).%20Please%20share%20plot%20availability%2C%20layout%20plan%2C%20and%20pricing%20details."
  },

  // Verified Location Data (Directly from official subdivision sanction map)
  locationDetails: {
    title: "Kokkadikulam Scheme No: 2, Melapalayam",
    badge: "DTCP APPROVED SITE LOCATION",
    landmarkProximity: "Near Annai Hajira Women's College & Melapalayam Hub",
    address: "Kokkadikulam Village (Scheme No: 2), Survey No: 14/1J, Melapalayam Ward (Ward AS, Block 1), Palayamkottai Taluk, Tirunelveli Corporation, Tamil Nadu — 627005",
    village: "கொக்கடிகுளம் கிராமம் (Kokkadikulam Village)",
    ward: "மேலப்பாளையம் வார்டு (Melapalayam Ward, Ward AS, Block 1)",
    taluk: "பாளையங்கோட்டை வட்டம் (Palayamkottai Taluk)",
    corporation: "திருநெல்வேலி மாநகராட்சி (Tirunelveli Corporation)",
    schemeName: "கொக்கடிகுளம் அபிவிருத்தி திட்டம் எண்: 2",
    surveyNumbers: "Survey No: 14/1J | Town Survey No: 13/7 (Road T.S. No: 13/107)",
    surroundingBoundaries: {
      north: "Approved Layout No: 25/2019 • ச.எண்: 14/1C • நகரளவை எண்: 13/3 (21.60M)",
      south: "Approved Layout No: 25/2019 • ச.எண்: 14/1N • நகரளவை எண்: 13/9 (20.20M)",
      east: "Approved Layout No: 25/2019 • ச.எண்: 14/1I • நகரளவை எண்: 13/8 (43.00M)",
      west: "நிலையிலுள்ள சாலை 7.00மீ • நகரளவை எண்: 13/107 (42.20M Frontage)"
    },
    coordinates: {
      lat: 8.684444,
      lng: 77.713056,
      formatted: "8°41'04\"N 77°42'47\"E"
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=8.684444,77.713056&t=k&z=17&ie=UTF8&iwloc=&output=embed",
    googleMapsRoadmapEmbedUrl: "https://maps.google.com/maps?q=Melapalayam,+Tirunelveli&t=m&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8.684444,77.713056",
    satelliteImage: asset("/assets/images/melapalayam_satellite_close.jpg"),
    satelliteOverviewImage: asset("/assets/images/melapalayam_satellite_location.jpg"),
    landmarks: [
      { name: "Annai Hajira Women's College", distance: "Just 500 Meters Proximity", highlight: true },
      { name: "V.S.T. Pallivasal, Melapalayam", distance: "1.5 Km Distance", highlight: true },
      { name: "7.00m Wide Road Frontage", distance: "Direct Road Frontage (TS: 13/107)", highlight: true },
      { name: "Palayamkottai & Tirunelveli Junction", distance: "Short 10-15 Min Drive", highlight: false }
    ],
    note: "Official layout location situated in Kokkadikulam Village, Melapalayam Ward, Survey No: 14/1J, Town Survey No: 13/7."
  },

  // Verified Project Statistics (Transcribed directly from Tamil DTCP order)
  stats: [
    { label: "DTCP Approval No", value: "SWP/104/2024", subtext: "தி.அ/ம.வ: SWP/146/2024" },
    { label: "மொத்த பரப்பளவு (Total Area)", value: "900.00 Sq.M", subtext: "0.22 ஏக்கர் (22.24 Cents)" },
    { label: "அங்கீகரிக்கப்பட்ட மனைகள்", value: "7 மனைகள் (Plots)", subtext: "Plot 01 முதல் Plot 07 வரை" },
    { label: "அணுகு சாலை அகலம் (Road)", value: "7.00 M (23 Ft)", subtext: "நிலையான சாலை (TS No: 13/107)" }
  ],

  // Core Highlights (Official verified)
  highlights: [
    {
      id: "dtcp",
      title: "DTCP APPROVED LAYOUT",
      description: "மாவட்ட நகர் ஊரமைப்பு அலுவலகம் தொழில்நுட்ப ஒப்புதல் SWP/104/2024 & SWP/146/2024 வழங்கப்பட்டு முழுமையாக அங்கீகரிக்கப்பட்ட குடியிருப்பு மனைப்பிரிவு.",
      icon: "ShieldCheck"
    },
    {
      id: "ready",
      title: "READY FOR IMMEDIATE SALE",
      description: "7 மனைகளும் உடனடி விற்பனை மற்றும் கிரயப் பத்திரப் பதிவுக்குத் தயாராக உள்ள தெளிவான வில்லங்கமில்லா ஆவணங்கள்.",
      icon: "FileCheck"
    },
    {
      id: "prime",
      title: "PRIME RESIDENTIAL LOCATION",
      description: "கொக்கடிகுளம் அபிவிருத்தி திட்டம் எண் 2, அன்னை ஹாஜிரா மகளிர் கல்லூரிக்கு மிக அருகில் எதிர்கால வளர்ச்சிக்கு உகந்த உயர் பகுதி.",
      icon: "MapPin"
    },
    {
      id: "developed",
      title: "7.00M EXISTING ROAD ACCESS",
      description: "7.00 மீட்டர் (23 அடி) அகலமுள்ள நிலையிலுள்ள சாலை மற்றும் 42.20 மீட்டர் மேற்கு முகப்பு சாலை இணைப்புடன் கூடிய பகுதி.",
      icon: "Building2"
    }
  ],

  // Acquisition Workflow Steps
  workflowSteps: [
    {
      id: "step-1",
      stepNumber: "01",
      title: "Request & Requirements",
      description: "Connect with our authorized promoters to register your residential plot requirement, desired frontage, and budget in Kokkadikulam / Melapalayam.",
      actionText: "Request Plot Callback",
      image: asset("/assets/images/melapalayam_satellite_location.jpg"),
      blueprintBadge: "Consultation Phase"
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "Plot Selection & On-Site Walkthrough",
      description: "Explore 7 residential Plots (01 to 07) with exact boundary measurements, 7.00-meter road frontage, and cadastral demarcation.",
      actionText: "Inspect 7 Available Plots",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      blueprintBadge: "7.00M Road Frontage"
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "Legal Support & DTCP Order",
      description: "Review complete statutory records including DTCP Sanction SWP/104/2024, SWP/146/2024, online filing 7GDMQ9WA/2024, and government park fee treasury receipt Rs. 54,090.",
      actionText: "Verify DTCP Sanctions",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      blueprintBadge: "Order SWP/104/2024"
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

  // Land & Verification Records
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
      specialty: "Kokkadikulam Village (Scheme No: 2) • Survey No: 14/1J"
    },
    {
      id: "ver-2",
      name: "DTCP Sanctioned Layout Map",
      role: "Sanction SWP/104/2024 & SWP/146/2024",
      rating: "5.0",
      reviewsCount: "Town & Country Planning Approved",
      phone: "+91 94432 83369",
      phoneTel: "+919443283369",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      specialty: "Scale 1:400 Blueprint • 7 Residential Plots Demarcated"
    },
    {
      id: "ver-3",
      name: "Drone Aerial Land Survey",
      role: "Survey No: 14/1J, Town Survey No: 13/7",
      rating: "5.0",
      reviewsCount: "Cadastral Boundary Stone Verified",
      phone: "+91 94432 83369",
      phoneTel: "+919443283369",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      specialty: "900.00 Sq.M (0.22 Acre / 22.24 Cents) • Spot Possession"
    },
    {
      id: "ver-4",
      name: "7.00-Meter Wide Existing Avenue Road",
      role: "Town Survey No: 13/107 Road Frontage",
      rating: "5.0",
      reviewsCount: "Approved Vehicle Ingress",
      phone: "+91 94432 83369",
      phoneTel: "+919443283369",
      image: asset("/assets/images/land_ground_view.jpg"),
      specialty: "Direct 42.20M Road Frontage for All 7 Plots • Instant House Construction"
    }
  ],

  // Investment Metrics
  investmentMetrics: [
    {
      id: "metric-1",
      title: "Capital Growth Corridor",
      value: "25%+",
      subtitle: "Melapalayam / Annai Hajira College expansion belt",
      bars: [35, 45, 55, 65, 80, 95, 110, 130],
      trend: "+19.2% YoY",
      badge: "High Growth"
    },
    {
      id: "metric-2",
      title: "Total Sanctioned Area",
      value: "900.00 Sq.M",
      subtitle: "0.22 Acre (22.24 Cents) boutique 7-plot development",
      bars: [50, 60, 70, 75, 85, 90, 100, 100],
      trend: "7 Exclusive Plots",
      badge: "Residential Layout"
    },
    {
      id: "metric-3",
      title: "Avenue Road Access",
      value: "7.00 M (23 Ft)",
      subtitle: "Sanctioned road frontage (TS No: 13/107) with 42.20M width",
      bars: [40, 50, 60, 70, 85, 90, 95, 100],
      trend: "Direct Access",
      badge: "Existing Road"
    }
  ],

  // Featured Signature Plots
  investmentOffers: [
    {
      id: "offer-1",
      plotNumber: "PLOT 01",
      title: "Corner Southern Prime Plot Parcel",
      dimensions: "North: 20.40M • South: 20.20M • Road: 6.20M",
      roadWidth: "7.00 M (23 Feet)",
      surveyNo: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      description: "Exceptional southern corner residential plot featuring prominent 6.20M road frontage directly onto the 7.00M existing road. Area of approx 125.86 Sq.M (1,355 Sq.Ft / 3.11 Cents).",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      dtcpBadge: "SWP/104/2024",
      clearance: "Immediate Registration",
      category: "Southern Prime Corner"
    },
    {
      id: "offer-2",
      plotNumber: "PLOT 04",
      title: "Central Prime Residential Plot Parcel",
      dimensions: "North: 21.00M • South: 20.80M • Road: 6.00M",
      roadWidth: "7.00 M (23 Feet)",
      surveyNo: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      description: "Well-balanced central rectangular residential plot with generous 21.00M depth and direct road frontage onto the 7.00-meter road. Area of approx 125.40 Sq.M (1,350 Sq.Ft / 3.10 Cents).",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      dtcpBadge: "SWP/146/2024",
      clearance: "100% Clear Title",
      category: "Central Prime"
    },
    {
      id: "offer-3",
      plotNumber: "PLOT 07",
      title: "Northern Prime Villa Estate",
      dimensions: "North: 21.60M • South: 21.50M • Road: 6.00M",
      roadWidth: "7.00 M (23 Feet)",
      surveyNo: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      description: "Northernmost signature residential plot adjoining approved layout 25/2019 on the north with maximum 21.60M boundary width. Area of approx 129.30 Sq.M (1,392 Sq.Ft / 3.20 Cents).",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      dtcpBadge: "Sanctioned Villa Plot",
      clearance: "Instant Possession",
      category: "Northern Prime Villa"
    }
  ],

  // Layout Blueprint Specs & Scanned Maps
  layoutInfo: {
    title: "EXPLORE THE 7-PLOT LAYOUT",
    tamilTitle: "மனை உட்பிரிவு வரைபடம் (PLAN OF SUBDIVISION)",
    subtitle: "Clearly understand the 7 available plots, exact dimensions and 7.00M road access.",
    scale: "1:400",
    totalPlotsCount: 7,
    roadWidth: "7.00 M (23 Feet)",
    totalArea: "900.00 Sq.M (0.22 Acre / 22.24 Cents)",
    roadFrontageTotal: "42.20 M",
    rearBoundaryTotal: "43.00 M",
    approvalNo: "SWP/104/2024",
    techApprovalNo: "SWP/146/2024",
    onlineAppNo: "7GDMQ9WA/2024",
    image: asset("/assets/images/plot_layout_approved_7plots.png"),
    fullSheetImage: asset("/assets/images/plot_layout_approved_7plots.png")
  },

  // 7 Individual Plots Transcribed Accurately from Layout Map
  plots: [
    {
      id: 1,
      plotNumber: "PLOT 01",
      dimensions: {
        north: "20.40 M",
        south: "20.20 M",
        east: "6.20 M",
        west: "6.20 M (Road Frontage)"
      },
      roadFrontage: "6.20 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Southern Prime Corner",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "125.86 Sq.M (1,355 Sq.Ft / 3.11 Cents)"
    },
    {
      id: 2,
      plotNumber: "PLOT 02",
      dimensions: {
        north: "20.60 M",
        south: "20.40 M",
        east: "6.10 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "123.00 Sq.M (1,324 Sq.Ft / 3.04 Cents)"
    },
    {
      id: 3,
      plotNumber: "PLOT 03",
      dimensions: {
        north: "20.80 M",
        south: "20.60 M",
        east: "6.10 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "124.20 Sq.M (1,337 Sq.Ft / 3.07 Cents)"
    },
    {
      id: 4,
      plotNumber: "PLOT 04",
      dimensions: {
        north: "21.00 M",
        south: "20.80 M",
        east: "6.15 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Central Prime",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "125.40 Sq.M (1,350 Sq.Ft / 3.10 Cents)"
    },
    {
      id: 5,
      plotNumber: "PLOT 05",
      dimensions: {
        north: "21.40 M",
        south: "21.00 M",
        east: "6.15 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Core Residential",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "127.20 Sq.M (1,369 Sq.Ft / 3.14 Cents)"
    },
    {
      id: 6,
      plotNumber: "PLOT 06",
      dimensions: {
        north: "21.50 M",
        south: "21.40 M",
        east: "6.15 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Standard Residential",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "128.70 Sq.M (1,385 Sq.Ft / 3.18 Cents)"
    },
    {
      id: 7,
      plotNumber: "PLOT 07",
      dimensions: {
        north: "21.60 M",
        south: "21.50 M",
        east: "6.15 M",
        west: "6.00 M (Road Frontage)"
      },
      roadFrontage: "6.00 M onto 7.00M Road",
      facing: "West Facing (7.00M Road)",
      statusText: "Ready for Sale",
      category: "Northern Prime Villa",
      surveyDetails: "ச.எண்: 14/1J, நகரளவை எண்: 13/7",
      image: asset("/assets/images/plot_layout_approved_7plots.png"),
      areaApprox: "129.30 Sq.M (1,392 Sq.Ft / 3.20 Cents)"
    }
  ],

  // Official DTCP Document Data (Directly from Scanned Government Order)
  approvalDetails: {
    heading: "DTCP APPROVED LAYOUT",
    subheading: "Complete Government Sanctions & Technical Approvals",
    onlineAppNo: "7GDMQ9WA/2024",
    layoutOrderNo: "SWP/104/2024",
    techApprovalOrderNo: "SWP/146/2024",
    priorRefNo: "ம.வ/ந.ஊ.இ.எண்: 25/2019",
    totalArea: "900.00 ச.மீ (0.22 ஏக்கர்)",
    allottedPlots: "7 மனைகள் (Plots 1 to 7)",
    parkAreaFee: "ரூ. 54,090.00 (Paid on 18.12.2024)",
    ruleReference: "TNCDBR விதி 47(6)",
    scale: "1:400",
    documentImage: asset("/assets/images/plot_layout_approved_7plots.png"),
    fullSheetImage: asset("/assets/images/plot_layout_approved_7plots.png"),
    officialClauses: [
      {
        title: "தொழில்நுட்ப ஒப்புதல் உத்தரவு (SWP/104/2024 & SWP/146/2024)",
        desc: "மாவட்ட நகர் ஊரமைப்பு அலுவலகம் / திருநெல்வேலி உள்ளூர் திட்டக்குழுமம் மூலம் 7 மனைகளுக்கான மனை உட்பிரிவு தொழில்நுட்ப ஒப்புதல் வரைபடம் (அளவு 1:400) முறையாக அங்கீகரிக்கப்பட்டுள்ளது."
      },
      {
        title: "பூங்கா கட்டணம் செலுத்துதல் (TNCDBR Rule 47(6))",
        desc: "பூங்கா ஒதுக்கீட்டிற்கு பதிலாக TNCDBR விதி-47(6)-ன்படி பூங்கா பரப்புக்கு ஈடான அரசு வழிகாட்டு மதிப்பீட்டின்படி ரூ. 54,090.00 கட்டணம் 18.12.2024 அன்று அரசு கணக்கில் செலுத்தப்பட்டுள்ளது."
      },
      {
        title: "அரசாணை நிலை எண்கள் 134 & 181 விதிகள் உறுதி",
        desc: "அரசாணை நிலை எண்: 134 நகராட்சி நிர்வாகம் (ம) குடிநீர் வழங்கல் துறை (20.09.2002) மற்றும் அரசாணை நிலை எண்: 181 வீட்டுவசதி துறை (19.12.2020)-ன் படி நில உரிமை மற்றும் நில ஆர்ஜிதமின்மை சரிபார்க்கப்பட்டுள்ளது."
      },
      {
        title: "7.00 மீட்டர் நிலையிலுள்ள சாலை இணைப்பு",
        desc: "அனைத்து 7 மனைகளுக்கும் வசதியான 7.00 மீட்டர் (23 அடி) அகலமுள்ள நிலையிலுள்ள சாலை (நகரளவை எண்: 13/107) மேற்கு முகப்பில் நேரடி அணுகுவழி உறுதி செய்யப்பட்டுள்ளது."
      }
    ]
  },

  // Why Choose NOORA AVENUE
  advantages: [
    {
      title: "Legally Clear & DTCP Sanctioned",
      desc: "Complete statutory documentation with registered sanctions (SWP/104/2024 & SWP/146/2024), government treasury park fee remitted, and transparent title deeds."
    },
    {
      title: "Carefully Planned 7-Plot Layout",
      desc: "Low-density private plotted community offering exclusivity, generous 7.00M road frontage, and peaceful living in Melapalayam."
    },
    {
      title: "7.00-Meter Existing Road Infrastructure",
      desc: "Direct access off the 7.00-meter (23 ft) road with 42.20 meters of total layout frontage ensuring seamless vehicular movement."
    },
    {
      title: "Prime Location near Annai Hajira College",
      desc: "Situated at Kokkadikulam Scheme No: 2, just 500 meters from Annai Hajira Women's College in Melapalayam with rapid capital growth."
    }
  ],

  // Visual Media Gallery — Strictly Land, Satellite Maps, and Official Blueprint Records
  gallery: [
    {
      id: "gal-1",
      title: "Official Sanctioned Blueprint (மனை உட்பிரிவு வரைபடம்)",
      caption: "High-Resolution Subdivision Layout Plan showing Plots 01 - 07 & 7.00M Road • SWP/104/2024",
      category: "Plot Blueprint",
      url: asset("/assets/images/plot_layout_approved_7plots.png")
    },
    {
      id: "gal-2",
      title: "DTCP Sanction Order Document (ஒப்புதல் வரைபடம்)",
      caption: "Govt Sanction Order SWP/104/2024 • Tech Approval SWP/146/2024 • App 7GDMQ9WA/2024",
      category: "Legal Approval",
      url: asset("/assets/images/plot_layout_approved_7plots.png")
    },
    {
      id: "gal-3",
      title: "Actual Satellite Map of Site Area",
      caption: "Kokkadikulam Village & 500m to Annai Hajira Women's College, Melapalayam",
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
      caption: "High-Resolution Drone Overview of Demarcated Residential Plots with Roadway",
      category: "Aerial Land Survey",
      url: asset("/assets/images/land_aerial_survey.jpg")
    },
    {
      id: "gal-6",
      title: "7.00-Meter Wide Avenue Road & Boundary Stones",
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
      url: asset("/assets/images/plot_layout_approved_7plots.png")
    }
  ],

  // Local SEO FAQs
  faqs: [
    {
      question: "Where exactly is NOORA AVENUE located in Melapalayam, Tirunelveli?",
      answer: "NOORA AVENUE is located at Kokkadikulam Village (Scheme No: 2), Survey No: 14/1J, Town Survey No: 13/7, within the Melapalayam Ward (Ward AS, Block 1, Palayamkottai Taluk, Tirunelveli Corporation), Tamil Nadu — 627005. The site is situated just 500 meters from Annai Hajira Women's College and 1.5 km from V.S.T. Pallivasal."
    },
    {
      question: "Is NOORA AVENUE approved by DTCP and local authorities?",
      answer: "Yes, 100%. The layout has received full statutory technical sanction from the Directorate of Town and Country Planning (DTCP) under Sanction Orders SWP/104/2024 and SWP/146/2024 (Online Application: 7GDMQ9WA/2024) and Tirunelveli Corporation planning approval. The government park fee of Rs. 54,090.00 was remitted under TNCDBR Rule 47(6) on 18.12.2024."
    },
    {
      question: "What are the plot dimensions and internal road width?",
      answer: "The layout encompasses 7 sanctioned residential plots (Plot 01 to Plot 07) ranging from 123.00 Sq.M (1,324 Sq.Ft / 3.04 Cents) to 129.30 Sq.M (1,392 Sq.Ft / 3.20 Cents) with east-west depths from 20.20 meters up to 21.60 meters. The layout features an official 7.00-meter (23-feet) wide existing road (Town Survey No: 13/107) with 42.20 meters total layout road frontage."
    },
    {
      question: "Are the residential plots ready for immediate registration and construction?",
      answer: "Yes. All 7 plots have clear, unencumbered parent titles with individual survey demarcations (Survey No: 14/1J, Town Survey No: 13/7). Direct sale deed execution and immediate spot registration can be carried out at the Melapalayam Sub-Registrar Office with instant physical boundary possession."
    },
    {
      question: "How can I schedule a site walkthrough or get pricing details?",
      answer: "You can connect directly with our authorized project promoter by calling +91 94432 83369, or click the WhatsApp button on this website for immediate layout blueprints, plot availability, and current pricing."
    }
  ]
};

export default projectData;