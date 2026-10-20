import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';
import { parcelData } from '../data/parcelData';

export default function InquiryForm({ preselectedPlot, isCompact = false }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlotId, setSelectedPlotId] = useState('1');
  const [contactMode, setContactMode] = useState('Direct WhatsApp Briefing');
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 12 PM)');
  const [notes, setNotes] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Handle preselected plot prop
  useEffect(() => {
    if (preselectedPlot) {
      // Find matching plot ID from title (e.g., "Plot 01" -> "1")
      const foundId = Object.keys(parcelData).find(
        (key) =>
          parcelData[key].title.toLowerCase() === preselectedPlot.toLowerCase() ||
          parcelData[key].plotNumber.toLowerCase() === preselectedPlot.toLowerCase()
      );
      if (foundId) {
        setSelectedPlotId(foundId);
      }
    }
  }, [preselectedPlot]);

  const currentPlot = parcelData[selectedPlotId] || parcelData['1'];

  // Phone input sanitizer
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (phoneError) setPhoneError('');
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    if (nameError) setNameError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!fullName.trim() || fullName.trim().length < 3) {
      setNameError('தயவுசெய்து உங்கள் முழுப் பெயரை உள்ளிடவும் (Please enter your full legal name)');
      return;
    }

    const cleanPhone = phone.trim();
    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      setPhoneError('சரியான 10 இலக்க செல்போன் எண்ணை உள்ளிடவும் (Please enter a valid 10-digit mobile number starting with 6-9)');
      return;
    }

    // Format current date & time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Construct professional, clean WhatsApp lead message
    const lines = [
      `🌟 *NEW INQUIRY — NOORA AVENUE 2*`,
      `📍 *Project:* Noora Avenue 2 (Kokkadikulam Scheme No: 2, Melapalayam, Tirunelveli)`,
      `📋 *Approval:* Regularisation Orders SWP/104/2024 & SWP/146/2024`,
      ``,
      `👤 *Customer Name:* ${fullName.trim()}`,
      `📞 *Mobile Number:* +91 ${cleanPhone}`,
      email.trim() ? `📧 *Email Address:* ${email.trim()}` : null,
      ``,
      `🏡 *Parcel of Interest:* ${currentPlot.title} (${currentPlot.meta})`,
      `📐 *Plot Extent:* ${currentPlot.area}`,
      `📏 *West Road Frontage:* ${currentPlot.west}`,
      `🧭 *Facing & Status:* ${currentPlot.facing} • ${currentPlot.status}`,
      ``,
      `🤝 *Preferred Contact Mode:* ${contactMode}`,
      `⏰ *Preferred Time to Connect:* ${preferredTime}`,
      notes.trim() ? `📝 *Customer Notes:* "${notes.trim()}"` : null,
      ``,
      `📅 *Inquiry Timestamp:* ${dateStr} at ${timeStr}`,
      `------------------------------------------`,
      `*Action Required:* Please share layout blueprint, price per cent, and schedule on-site walkthrough.`
    ].filter(Boolean);

    const messageText = lines.join('\n');
    const targetUrl = `https://api.whatsapp.com/send?phone=919443283369&text=${encodeURIComponent(messageText)}`;

    setWhatsappUrl(targetUrl);
    setIsSuccess(true);

    // Direct launch into WhatsApp
    try {
      window.open(targetUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked, showing direct WhatsApp link button');
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setIsSuccess(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-surface-container-lowest joinery-border shadow-sm p-6 sm:p-10 md:p-12">
      
      {/* Form Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 joinery-border-b">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Direct Promoter Lead Gateway
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
            Official Expression of Interest
          </h3>
        </div>
        <div className="flex items-center space-x-2 bg-secondary-container px-3 py-1.5 border border-secondary-fixed-dim">
          <span className="material-symbols-outlined text-sm text-on-secondary-fixed">chat</span>
          <span className="font-tabular-spec text-xs font-semibold text-on-secondary-fixed">
            Instant WhatsApp to Promoters
          </span>
        </div>
      </div>

      {isSuccess ? (
        /* Success State with Guaranteed Direct Action */
        <div className="p-8 bg-surface-container-low joinery-border text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-secondary-container border border-secondary-fixed-dim flex items-center justify-center mx-auto text-secondary">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>

          <div>
            <h4 className="font-headline-sm text-primary mb-2">
              நன்றி! உங்கள் பதிவு வெற்றிகரமாகப் பெறப்பட்டது.
            </h4>
            <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">
              உங்கள் விவரங்கள் உடனடியாக எங்களது WhatsApp எண்ணிற்கு (<strong className="text-primary">+91 94432 83369</strong>) அனுப்பப்பட்டுவிட்டன.
            </p>
          </div>

          {/* Lead Summary Plate */}
          <div className="max-w-md mx-auto bg-surface-container-lowest p-5 joinery-border text-left space-y-2 text-xs font-tabular-spec">
            <div className="flex justify-between py-1 border-b border-outline-variant">
              <span className="text-outline uppercase font-label-sm">Name:</span>
              <span className="font-medium text-primary">{fullName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-outline-variant">
              <span className="text-outline uppercase font-label-sm">Phone:</span>
              <span className="font-bold text-primary">+91 {phone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-outline-variant">
              <span className="text-outline uppercase font-label-sm">Parcel:</span>
              <span className="font-medium text-primary">{currentPlot.title} ({currentPlot.area})</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-outline uppercase font-label-sm">Status:</span>
              <span className="text-secondary font-bold">Forwarded to WhatsApp</span>
            </div>
          </div>

          {/* Guaranteed Direct WhatsApp Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3.5 font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-md transition-colors"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>WhatsApp-ல் உடனடியாகப் பேசவும்</span>
            </a>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto border border-outline-variant px-6 py-3.5 font-label-sm text-label-sm uppercase tracking-wider text-primary hover:bg-surface-variant transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* The Active Form */
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name Input */}
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-primary mb-2 flex items-center justify-between" htmlFor="leadFullName">
              <span>Full Legal Name (முழுப் பெயர்) *</span>
              <span className="text-outline text-[10px] font-normal lowercase">required</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-outline material-symbols-outlined text-lg">person</span>
              <input
                id="leadFullName"
                type="text"
                required
                value={fullName}
                onChange={handleNameChange}
                placeholder="e.g. Mohamed Riaz / Mohamed Ismail"
                className={`w-full bg-surface-container-low joinery-border pl-12 pr-4 py-3 text-primary font-body-md placeholder:text-outline focus:outline-none focus:border-primary ${
                  nameError ? 'border-error' : ''
                }`}
              />
            </div>
            {nameError && (
              <span className="text-error font-body-sm text-xs mt-1 block">
                {nameError}
              </span>
            )}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-sm text-label-sm uppercase text-primary mb-2 flex items-center justify-between" htmlFor="leadPhone">
                <span>Mobile Number (செல்போன் எண்) *</span>
                <span className="text-outline text-[10px] font-normal lowercase">10 digits</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 font-tabular-spec text-tabular-spec text-primary font-semibold">
                  +91
                </span>
                <input
                  id="leadPhone"
                  type="tel"
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="94432 83369"
                  className={`w-full bg-surface-container-low joinery-border pl-14 pr-4 py-3 text-primary font-body-md font-tabular-spec placeholder:text-outline focus:outline-none focus:border-primary ${
                    phoneError ? 'border-error' : ''
                  }`}
                />
              </div>
              {phoneError ? (
                <span className="text-error font-body-sm text-xs mt-1 block">
                  {phoneError}
                </span>
              ) : (
                <span className="text-outline font-body-sm text-[11px] mt-1 block">
                  இந்த எண்ணிற்கு உடனடி மனை விவரங்கள் பகிரப்படும்.
                </span>
              )}
            </div>

            <div>
              <label className="block font-label-sm text-label-sm uppercase text-primary mb-2 flex items-center justify-between" htmlFor="leadEmail">
                <span>Email Address (மின்னஞ்சல்)</span>
                <span className="text-outline text-[10px] font-normal lowercase">optional</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-outline material-symbols-outlined text-lg">mail</span>
                <input
                  id="leadEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-surface-container-low joinery-border pl-12 pr-4 py-3 text-primary font-body-md placeholder:text-outline focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Plot Selection with Interactive Spec Preview */}
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-primary mb-2" htmlFor="leadParcelSelect">
              Select Desired Plot (விரும்பும் மனை எண்) *
            </label>
            <div className="relative">
              <select
                id="leadParcelSelect"
                value={selectedPlotId}
                onChange={(e) => setSelectedPlotId(e.target.value)}
                className="w-full bg-surface-container-low joinery-border px-4 py-3 text-primary font-body-md focus:outline-none focus:border-primary"
              >
                <option value="1">Plot 01 — Southern Corner • 125.86 Sq.M (3.11 Cents) • West Road 6.20M</option>
                <option value="2">Plot 02 — Standard Residential • 123.00 Sq.M (3.04 Cents) • West Road 6.00M</option>
                <option value="3">Plot 03 — Standard Residential • 124.20 Sq.M (3.07 Cents) • West Road 6.00M</option>
                <option value="4">Plot 04 — Central Prime • 125.40 Sq.M (3.10 Cents) • West Road 6.00M</option>
                <option value="5">Plot 05 — Core Residential • 127.20 Sq.M (3.14 Cents) • West Road 6.00M</option>
                <option value="6">Plot 06 — North Central • 128.70 Sq.M (3.18 Cents) • West Road 6.00M</option>
                <option value="7">Plot 07 — Northern Prime Villa • 129.30 Sq.M (3.20 Cents) • West Road 6.00M</option>
                <option value="road">General Site &amp; 7.00M Road Access Inquiry</option>
              </select>
            </div>

            {/* Dynamic Plot Specification Card */}
            {currentPlot && selectedPlotId !== 'road' && (
              <div className="mt-3 p-4 bg-surface-container-low joinery-border flex flex-wrap items-center justify-between gap-3 text-xs font-tabular-spec">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-bold text-primary">{currentPlot.title}</span>
                  <span className="text-outline">•</span>
                  <span className="text-on-surface-variant">{currentPlot.area}</span>
                </div>
                <div className="flex items-center space-x-4 text-outline">
                  <span>Frontage: <strong className="text-primary">{currentPlot.west}</strong></span>
                  <span>Depth: <strong className="text-primary">{currentPlot.north}</strong></span>
                  <span className="text-secondary font-semibold">{currentPlot.badge}</span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Mode & Preferred Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-sm text-label-sm uppercase text-primary mb-2" htmlFor="leadContactMode">
                Preferred Mode of Contact (தொடர்பு முறை)
              </label>
              <select
                id="leadContactMode"
                value={contactMode}
                onChange={(e) => setContactMode(e.target.value)}
                className="w-full bg-surface-container-low joinery-border px-4 py-3 text-primary font-body-md focus:outline-none focus:border-primary"
              >
                <option value="Direct WhatsApp Briefing">Direct WhatsApp Briefing (வாட்ஸ்அப்)</option>
                <option value="Phone Call Discussion">Phone Call Discussion (தொலைபேசி அழைப்பு)</option>
                <option value="Accompanied Site Inspection">Accompanied Site Inspection (நேரடி மனைப் பார்வை)</option>
                <option value="Send Complete Technical Blueprint">Send Complete Technical Blueprint Dossier</option>
              </select>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm uppercase text-primary mb-2" htmlFor="leadPreferredTime">
                Preferred Time to Connect (நேரம்)
              </label>
              <select
                id="leadPreferredTime"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-surface-container-low joinery-border px-4 py-3 text-primary font-body-md focus:outline-none focus:border-primary"
              >
                <option value="Immediate / Any Time">Immediate / Any Time (எப்போது வேண்டுமானாலும்)</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>
          </div>

          {/* Specific Questions / Notes */}
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-primary mb-2 flex items-center justify-between" htmlFor="leadNotes">
              <span>Specific Questions or Timeline (குறிப்புகள்)</span>
              <span className="text-outline text-[10px] font-normal lowercase">optional</span>
            </label>
            <textarea
              id="leadNotes"
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="எ.கா. உடனடி பத்திரப் பதிவு, கிரய விலை விபரம், மனை அளவீடு பார்க்க விருப்பம்..."
              className="w-full bg-surface-container-low joinery-border px-4 py-3 text-primary font-body-md placeholder:text-outline focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          {/* Submission Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primary-container text-surface-container-lowest py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors flex items-center justify-center space-x-3 shadow-md"
            >
              <span>Submit &amp; Send Directly to WhatsApp</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <p className="font-body-sm text-[11px] text-outline text-center mt-3">
              சமர்ப்பித்தவுடன் அனைத்து தகவல்களும் நேரடியாக எங்களது அதிகாரப்பூர்வ வாட்ஸ்அப்பிற்கு (+91 94432 83369) வந்து சேரும்.
            </p>
          </div>

        </form>
      )}

      {/* Immediate WhatsApp Corridor Bar */}
      <div className="mt-8 pt-6 joinery-border-t text-center">
        <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">
          Sole Authorized Promoter Channel
        </span>
        <a
          className="inline-flex items-center space-x-2 text-secondary hover:text-primary font-tabular-spec text-tabular-spec font-medium text-sm"
          href={projectData.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-lg text-secondary">chat</span>
          <span>Click here to chat directly on WhatsApp ({projectData.contact.phone})</span>
        </a>
      </div>

    </div>
  );
}
