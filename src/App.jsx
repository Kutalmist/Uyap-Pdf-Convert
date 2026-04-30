import React, { useState, useRef, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import * as mammoth from 'mammoth/mammoth.browser';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const TEMPLATE_TITLE = "SİVAS NÖBETÇİ ASLİYE HUKUK MAHKEMESİNE";
const TEMPLATE_TEXT = `DAVACI :    UZMAN TAŞINMAZ YATIRIMLARI OTOMOTİV İNŞAAT TİCARET
VE SANAYİ LİMİTED ŞİRKETİ 9010165048 Vergi Nolu

ADRES :    Gültepe Mah. Farabi Cad. No:51 Merkez/SİVAS

VEKİLİ :    Av. Ramazan UZUN-Av. Oğulcan UZUN

DAVALILAR :    
{{DAVALI}}

DAVA :    Ecrimisil talebimiz hakkındadır.

DAVA DEĞERİ:    Fazlaya ilişkin haklarımız saklı kalmak kaydıyla ıslaha esas olmak üzere
şimdilik 1000,00TL





AÇIKLAMALAR :    Müvekkilim UZMAN TAŞINMAZ YATIRIMLARI LTD.ŞTİ , {{TESCIL_BELGESI}}
(EK 1:Tescil belgesi)



Müvekkil şirket {{MUVEKKIL_TARIHI}} tarihinden beri bahsi geçen taşınmaz hissesinin malikidir.

Sivas 2. Noterliğinin 06/01/2026 tarihli 00293 yevmiye nolu ihtarnamesi ile davalılara işgalleri nedeniyle
intifadan men ve ecrimisil istemli ihtarname keşide edilmiştir.

Susurluk Sulh Hukuk Mahkemesi 2026/105 E dosyası üzerinden tarafımızca ortaklığın giderilmesi
davası açılmıştır.

Taşınmazın müvekkilim şirket tarafından adına tescil yapıldığı tarihle halen davanın açıldığı tarihte
davalı tarafından kullanıldığı, semerelerinden faydalanıldığı, bu tarihler arasında taşınmaz hissedarı
malik müvekkilim ile davalı arasında yapılmış bir kira akdi bulunmadığı sabittir.

Sayın Mahkemece de taktir edileceği üzere TMK’nın 683’üncü maddesi gereğince “Bir şeye malik olan
kimse, hukuk düzeninin sınırları içinde, o şey üzerinde dilediği gibi kullanma, yararlanma ve tasarrufta
bulunma yetkisine sahiptir. Malik, malını haksız olarak elinde bulunduran kimseye karşı istihkak davası
açabileceği gibi, her türlü haksız el atmanın önlenmesini de dava edebilir.” düzenlemesini içermektedir.

Anılan yasal düzenlemenin bir sonucu olarak malik tarafından rızası dışındaki kullanımdan dolayı
malikin ''el atmasının önlemesini'' istemesinin yanı sıra ''ecrimisil'' talep hakkı da bulunmaktadır.
Ecrimisil, haksız işgal sebebiyle tazminat olarak nitelendirilen özel bir zarar giderim biçimi olması
nedeniyle, en az kira geliri karşılığı zarar demektir. Bu nedenle, haksız işgalden doğan normal kullanma
sonucu eskime şeklinde oluşan olumlu zararla, malik ya da zilyedin yoksun kaldığı fayda (olumsuz zarar)
ecrimisilin kapsamını belirler.

Hukumuza göre haksız işgal haksız eylem niteliğindedir. (YHGK’nun 25.2.2004 tarihli ve
2004/1-120-96 Sayılı kararı) Yargıtay’ın ilke kararlarında da, kira geliri üzerinden ecrimisil
belirlenmesinde, taşınmazın davaya konu ilk dönemde mevcut haliyle serbest şartlarda getirebileceği kira
parası, emsal kira sözleşmeleriyle karşılaştırılarak, taşınmazın büyüklüğü, niteliği ve çevre özellikleri de
nazara alınarak yöredeki rayice göre belirleneceği ifade edilmektedir.

Taşınmazın her santimetre karesi üzerinde müvekkilim şirket {{ORAN}} oranında hak sahibidir.

Davanın haksız fiile dayalı ecrimisil davası olması ve müvekkil şirketinin ticaret siciline kayıtlı adresi
Sivas olması hasebiyle HMK'nın 16. Maddesine davamızı Mahkemeniz nezdinde açılmıştır.

Açıklanan nedenlerle, {{ACIKLAMA}} {{ACIKLAMA_DATE}} tarihleri arasında davalı tarafından haksız kullanımı nedeniyle, müvekkil hissesine isabet eden şimdilik 1.000,00 TL
ecrimisilin (belirsiz alacak), sonraki dönemlerdeki fazlaya dair haklarımız saklı kalmak ve ıslaha
tabi olmak üzere {{RESULT_DATE}} tarihinden itibaren işleyen yasal faizi ile birlikte davalılardan
tahsiline karar verilmesini istemekteyiz.

HUKUKİ NEDENLER :    Tük Borçlar Kanunu 49 ve devamı, HMK 16,176 ile HMK sair mevzuat

DELİLLER :    Davalıların sunacağı her türlü delile mukabil delil sunma hakkımız saklı kalmak üzere;

1- Yargıtay 8. Hukuk Dairesi 28.1.2021 tarih, 2018/8278 E. 2021/596 K. Sayılı kararı
2-Tapu Kaydı
3-Sivas 2. Noterliğinin 06/01/2026 tarihli 00293 yevmiye nolu ihtarnamesi
4-Susurluk Sulh Hukuk Mahkemesi 2026/105 E dosyası
5-Tanık, keşif, bilirkişi, yemin, isticvap ve her türlü yasal delil

SONUÇ VE İSTEM :    Yukarıda arz ve izah edilen ve resen gözetilecek nedenler çerçevesinde:
Gelecek dönemlerde işleyecek fazlaya ilişkin haklarımız saklı {{ACIKLAMA_DATE}} tarihleri arasında
ecrimisil bedelinin müvekkilimin hissedar olduğu {{RESULT_ORAN}} hisseye tekabül ettiği kadarının haksız fiil tarihinden {{HARAM_DATE}} itibaren yasal faizi ile birlikte davalıdan tahsili ile müvekkil davacıya
verilmesini, vekalet ücreti ve yargılama giderlerinin davalılar üzerinde bırakılmasını talep ederim.
Saygılarımla.{{HARAM_DAY_DATE}}
Davacı Vekili
Av. Ramazan UZUN`;

const IHTARNAME_TEMPLATE = `İHTARNAME
İhtar Eden Keşideci :    UZMAN TAŞINMAZ YATIRIMLARI OTOMOTİV İNŞAAT TİCARET VE SANAYİ LTD. ŞTİ.,
SİTE V.D. / 9010165048
Vekili :    Av. Ramazan UZUN Gültepe Mah. Farabi Cad. No: 51 SİVAS Tlf: 03462239967
Muhataplar :    {{MUHATAP}}
Konu :    İNTİFADAN MEN VE ECRİMİSİL ÖDEMESİ İHTARIDIR.
AÇIKLAMALAR :    Müvekkilim UZMAN TAŞINMAZ YATIRIMLARI LTD.ŞTİ, {{DESCRIPT_ADDRESS}}. Taşınmazın ihale öncesi ve ihale tarihinden itibaren
tarafınızca kullanıldığı, müvekkil ile aranızda herhangi bir sözleşme bulunmadığından kanuni tabiri ile taşınmazı işgal
ettiğiniz öğrenilmiştir.
Müvekkilimin taşınmazın tarafınızca kullanılmasına, işgale devam edilmesine hiçbir şekilde muvafakati yoktur.
{{DATE}} tarihli ihale gününden taşınmazı fiilen tahliye ettiğiniz güne kadarki ecrimisil haklarımız saklı kalmak üzere;
1-Taşınmazı ihtarnamenin tebliğinden itibaren 15 gün içinde tahliye etmenizi,
2-Aksi takdirde aleyhinize meni müdahale talepli ecrimisil davası açılacağını ihtaren bildiririm.
Sayın Noter, oniki nüshadan ibaret iş bu ihtarnamenin bir nüshasının dairenizde saklanmasını, bir nüshasının karşı
tarafa tebliğini, bir nüshasının da tebliğ şerhi havi olarak tarafıma iadesini arz ederim. 01/04/2026
İHTAR EDEN UZMAN TAŞIMAZ YATIRIMLARI LTD.ŞTİ
Vekili
Av. Ramazan UZUN`;

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const [view, setView] = useState('pdf_raw'); // Default to Ham Metin
  const [hubData, setHubData] = useState({
    MUHATAP: '',
    ADRES: '',
    MUVEKKIL_TARIHI: '',
    TESCIL_BELGESI: '',
    ACIKLAMA: '',
    ORAN: '',
    RESULT_ORAN: ''
  });

  // Dava Template States
  const [davaParams, setDavaParams] = useState({
    DAVALI: '',
    TESCIL_BELGESI: '',
    MUVEKKIL_TARIHI: '',
    ORAN: '',
    ACIKLAMA: '',
    ACIKLAMA_DATE: '',
    RESULT_DATE: '',
    RESULT_ORAN: '',
    HARAM_DATE: '',
    HARAM_DAY_DATE: '30/04/2026'
  });

  // Ihtar Template States
  const [ihtarParams, setIhtarParams] = useState({
    MUHATAP: '',
    DESCRIPT_ADDRESS: '',
    DATE: ''
  });

  const getFinalText = (template, params) => {
    let text = template;
    Object.keys(params).forEach(key => {
      text = text.replaceAll(`{{${key}}}`, params[key] || `[${key}]`);
    });
    return text;
  };

  const [davaText, setDavaText] = useState('');
  const [ihtarText, setIhtarText] = useState('');

  useEffect(() => {
    const body = getFinalText(TEMPLATE_TEXT, davaParams);
    setDavaText(TEMPLATE_TITLE + "\n\n" + body);
  }, [davaParams]);

  useEffect(() => {
    setIhtarText(getFinalText(IHTARNAME_TEMPLATE, ihtarParams));
  }, [ihtarParams]);

  const applyToTemplates = () => {
    if (!hubData.ORAN || !hubData.RESULT_ORAN) {
      alert('Lütfen Hisse Oranı ve Netice Oranı alanlarını doldurun! Bu alanlar zorunludur.');
      return;
    }
    const today = new Date().toLocaleDateString('tr-TR');
    const dateRange = hubData.TARIH ? `${hubData.TARIH} - ${today}` : today;

    // Map hub data to specific templates
    setDavaParams(prev => ({
      ...prev,
      DAVALI: hubData.MUHATAP,
      TESCIL_BELGESI: hubData.ADRES,
      MUVEKKIL_TARIHI: hubData.TARIH,
      ACIKLAMA: hubData.ACIKLAMA,
      ACIKLAMA_DATE: dateRange,
      RESULT_DATE: hubData.TARIH,
      HARAM_DATE: hubData.TARIH,
      HARAM_DAY_DATE: today,
      ORAN: hubData.ORAN,
      RESULT_ORAN: hubData.RESULT_ORAN
    }));

    setIhtarParams(prev => ({
      ...prev,
      MUHATAP: hubData.MUHATAP,
      DESCRIPT_ADDRESS: hubData.ADRES,
      DATE: hubData.TARIH
    }));

    alert('Veriler tüm şablonlara başarıyla aktarıldı!');
  };

  const autoFillHub = (text) => {
    console.log("--- PDF'den Ayıklanan Ham Metin ---");
    console.log(text);
    console.log("----------------------------------");

    const lines = text.split('\n');
    const lowerText = text.toLowerCase();
    let detectedMuhatap = '';
    let detectedAddress = '';
    let detectedDate = '';

    const dateMatch = text.match(/(\d{2}[\/\.]\d{2}[\/\.]\d{4})/);
    if (dateMatch) detectedDate = dateMatch[0];

    // Refined Muhatap Extraction: Between "MUHATAP" and "AÇIKLAMALAR"
    const muhatapRegex = /(?:MUHATAPLAR|MUHATAP)\s*[:\s-]*([\s\S]*?)(?=AÇIKLAMALAR\s*[:\s])/i;
    const muhatapMatch = text.match(muhatapRegex);

    if (muhatapMatch && muhatapMatch[1]) {
      detectedMuhatap = muhatapMatch[1].trim();
    } else {
      // Fallback if the strict markers aren't found
      const muhatapStart = text.toLowerCase().indexOf('muhatap');
      const aciklamalarStart = text.toLowerCase().indexOf('açıklamalar');

      if (muhatapStart !== -1 && aciklamalarStart !== -1 && aciklamalarStart > muhatapStart) {
        detectedMuhatap = text.substring(muhatapStart, aciklamalarStart)
          .replace(/^(MUHATAP|MUHATAPLAR)\s*[:\/]*/i, '')
          .trim();
      }
    }

    // Refined Address/Property Extraction
    const propertyRegex = /Müvekkilim UZMAN TAŞINMAZ YATIRIMLARI LTD\.ŞTİ\s*[,:]\s*([\s\S]*?)(?=Taşınmazın ihale öncesi)/i;
    const propertyMatch = text.match(propertyRegex);

    // New Extraction for ACIKLAMA (Targeted under AÇIKLAMALAR section)
    const aciklamalarIdx = lowerText.indexOf('açıklamalar');
    let detectedAciklama = '';

    if (aciklamalarIdx !== -1) {
      const textAfterAciklamalar = text.substring(aciklamalarIdx);
      const companyPattern = /UZMAN\s+TAŞINMAZ\s+YATIRIMLARI\s+(?:LTD\.?\s*ŞTİ\.?|LİMİTED\s+ŞİRKETİ)/i;
      const companyMatch = textAfterAciklamalar.match(companyPattern);

      if (companyMatch) {
        const startOfSentence = companyMatch.index + companyMatch[0].length;
        const subAfterCompany = textAfterAciklamalar.substring(startOfSentence);
        const hissesiniIdx = subAfterCompany.toLowerCase().indexOf('hissesini');

        if (hissesiniIdx !== -1) {
          // Clean up potential starting punctuation like comma or colon
          detectedAciklama = subAfterCompany.substring(0, hissesiniIdx)
            .replace(/^[\s,:]+/, '')
            .trim();
        }
      }
    }

    if (!detectedAciklama) {
      // Fallback to previous robust regex if the above specific logic fails
      const aciklamaRegex = /(?:UZMAN\s+TAŞINMAZ\s+YATIRIMLARI\s+(?:LTD\.?\s*ŞTİ\.?|LİMİTED\s+ŞİRKETİ))\s*[,:]?\s*([\s\S]*?)(?=hissesini)/i;
      const match = text.match(aciklamaRegex);
      if (match && match[1]) detectedAciklama = match[1].trim();
    }

    if (propertyMatch && propertyMatch[1]) {
      detectedAddress = propertyMatch[1].trim();
    } else {
      // Fallback Address Detection
      const addressKeywords = /Mah\.|Cad\.|Sok\.|No:|SİVAS|ADA|PARSEL/i;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (addressKeywords.test(line) && line.length > 10 && !/VEKİLİ|DAVACI|İHTAR|MAHKEMESİ/i.test(line)) {
          detectedAddress = line;
          break;
        }
      }
    }

    console.log("--- Ayıklanan Veriler ---");
    console.log("Muhatap:", detectedMuhatap);
    console.log("Adres:", detectedAddress);
    console.log("Açıklama:", detectedAciklama);
    console.log("Tarih:", detectedDate);
    console.log("-----------------------");

    const newHubData = {
      MUHATAP: detectedMuhatap,
      ADRES: detectedAddress,
      TARIH: detectedDate,
      ACIKLAMA: detectedAciklama, // Add this to hub
      ORAN: ''
    };

    setHubData(newHubData);

    const today = new Date().toLocaleDateString('tr-TR');
    const dateRange = detectedDate ? `${detectedDate} - ${today}` : today;

    // Auto-apply to templates as requested
    setDavaParams(prev => ({
      ...prev,
      DAVALI: detectedMuhatap,
      TESCIL_BELGESI: detectedAddress,
      MUVEKKIL_TARIHI: detectedDate,
      ACIKLAMA: detectedAciklama,
      ACIKLAMA_DATE: dateRange,
      RESULT_DATE: detectedDate,
      HARAM_DATE: detectedDate,
      HARAM_DAY_DATE: today
    }));

    setIhtarParams(prev => ({
      ...prev,
      MUHATAP: detectedMuhatap,
      DESCRIPT_ADDRESS: detectedAddress,
      DATE: detectedDate
    }));
  };

  const extractTextFromPDF = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        let lastY, lastX, pageText = '';
        const items = textContent.items.sort((a, b) => {
          if (Math.abs(a.transform[5] - b.transform[5]) < 5) return a.transform[4] - b.transform[4];
          return b.transform[5] - a.transform[5];
        });
        for (const item of items) {
          if (lastY !== undefined && Math.abs(item.transform[5] - lastY) > 5) {
            pageText += '\n'; lastX = undefined;
          } else if (lastX !== undefined && (item.transform[4] - lastX) > 5) {
            pageText += ' ';
          }
          pageText += item.str;
          lastY = item.transform[5];
          lastX = item.transform[4] + (item.width || 0);
        }
        fullText += pageText + '\n\n';
      }
      setExtractedText(fullText.trim());
      autoFillHub(fullText);
    } catch (err) {
      setError('PDF okuma hatası.');
    } finally {
      setLoading(false);
    }
  };

  const extractTextFromDocx = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      const text = result.value;
      setExtractedText(text);
      autoFillHub(text);
    } catch (err) {
      setError('DOCX okuma hatası.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      extractTextFromPDF(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx')) {
      extractTextFromDocx(file);
    } else {
      alert('Lütfen sadece PDF veya DOCX dosyası yükleyin.');
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Kopyalandı!');
  };

  return (
    <div className="app-container">
      <nav className="top-nav">
        <button className={view === 'data_hub' ? 'nav-btn active' : 'nav-btn'} onClick={() => setView('data_hub')} disabled>Veri Ayıklama</button>
        <button className={view === 'pdf_raw' ? 'nav-btn active' : 'nav-btn'} onClick={() => setView('pdf_raw')}>Ham Metin</button>
        <button className={view === 'template_dava' ? 'nav-btn active' : 'nav-btn'} onClick={() => setView('template_dava')}>Dava Dilekçesi</button>
        <button className={view === 'template_ihtar' ? 'nav-btn active' : 'nav-btn'} onClick={() => setView('template_ihtar')} disabled>İhtarname</button>
      </nav>

      {view === 'data_hub' && (
        <div className="hub-view">
          <header>
            <h1>UDF Convert Metin Merkezi</h1>
            <p className="subtitle">PDF yükleyin, verileri onaylayın ve şablonlara aktarın.</p>
          </header>

          <div className="upload-section" onClick={() => fileInputRef.current?.click()}>
            <div className="upload-icon">📤</div>
            <h3>{loading ? 'İşleniyor...' : 'Yeni Dosya Yükle (PDF/DOCX)'}</h3>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx" style={{ display: 'none' }} />
          </div>

          {extractedText && (
            <div className="hub-dashboard">
              <div className="detected-params">
                <h3>Ayıklanan Bilgiler</h3>
                <div className="hub-grid">
                  <div className="hub-item">
                    <label>MUHATAP / DAVALI</label>
                    <textarea value={hubData.MUHATAP} onChange={(e) => setHubData({ ...hubData, MUHATAP: e.target.value })} />
                  </div>
                  <div className="hub-item">
                    <label>TAŞINMAZ ADRESİ / BİLGİSİ</label>
                    <textarea value={hubData.ADRES} onChange={(e) => setHubData({ ...hubData, ADRES: e.target.value })} />
                  </div>
                  <div className="hub-item">
                    <label>TARİH</label>
                    <input type="text" value={hubData.TARIH} onChange={(e) => setHubData({ ...hubData, TARIH: e.target.value })} />
                  </div>
                  <div className="hub-item">
                    <label>AÇIKLAMA METNİ</label>
                    <textarea
                      value={hubData.ACIKLAMA}
                      onChange={(e) => setHubData({ ...hubData, ACIKLAMA: e.target.value })}
                    />
                  </div>
                  <div className="hub-item">
                    <label>HİSSE ORANI <span style={{ color: '#ef4444' }}>* (Zorunlu)</span></label>
                    <input
                      type="text"
                      placeholder="Örn: 1/4"
                      style={{ borderColor: !hubData.ORAN ? '#ef4444' : '' }}
                      value={hubData.ORAN}
                      onChange={(e) => setHubData({ ...hubData, ORAN: e.target.value })}
                    />
                  </div>
                  <div className="hub-item">
                    <label>NETİCE HİSSE ORANI <span style={{ color: '#ef4444' }}>* (Zorunlu)</span></label>
                    <input
                      type="text"
                      placeholder="Örn: 1/4"
                      style={{ borderColor: !hubData.RESULT_ORAN ? '#ef4444' : '' }}
                      value={hubData.RESULT_ORAN}
                      onChange={(e) => setHubData({ ...hubData, RESULT_ORAN: e.target.value })}
                    />
                  </div>
                </div>
                <div className="action-bar" style={{ marginTop: '2rem' }}>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }} onClick={applyToTemplates}>
                    Verileri Şablonlara Uygula ✨
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {view === 'pdf_raw' && (
        <div className="result-section">
          <header>
            <h3>PDF Ham Metin</h3>
            <p className="subtitle">Dosya yükleyin ve ayıklanan tüm metni buradan inceleyin.</p>
          </header>

          <div className="action-bar" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <button className="btn-secondary" onClick={() => fileInputRef.current?.click()}>
              {loading ? 'Yükleniyor...' : 'Yeni Dosya Yükle (PDF/DOCX)'}
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx" style={{ display: 'none' }} />
          </div>

          {extractedText ? (
            <>
              <div className="editor-container">
                <textarea className="text-editor" value={extractedText} onChange={(e) => setExtractedText(e.target.value)} />
              </div>
              <div className="action-bar">
                <button className="btn-primary" onClick={() => handleCopy(extractedText)}>Metni Kopyala</button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
              <p>Henüz metin bulunamadı. Lütfen bir PDF veya DOCX dosyası yükleyin.</p>
            </div>
          )}
        </div>
      )}

      {(view === 'template_dava' || view === 'template_ihtar') && (
        <div className="template-view">
          {extractedText ? (
            <div className="sidebar">
              <h3>Parametreler</h3>
              <div className="params-grid">
                {Object.keys(view === 'template_dava' ? davaParams : ihtarParams).map(key => (
                  <div key={key} className="param-item">
                    <label>{key}</label>
                    {(key === 'DAVALI' || key === 'MUHATAP' || key === 'ACIKLAMA' || key === 'DESCRIPT_ADDRESS' || key === 'TESCIL_BELGESI') ? (
                      <textarea
                        rows={3}
                        value={view === 'template_dava' ? davaParams[key] : ihtarParams[key]}
                        onChange={(e) => {
                          const setter = view === 'template_dava' ? setDavaParams : setIhtarParams;
                          const params = view === 'template_dava' ? davaParams : ihtarParams;
                          setter({ ...params, [key]: e.target.value });
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        value={view === 'template_dava' ? davaParams[key] : ihtarParams[key]}
                        onChange={(e) => {
                          const setter = view === 'template_dava' ? setDavaParams : setIhtarParams;
                          const params = view === 'template_dava' ? davaParams : ihtarParams;
                          setter({ ...params, [key]: e.target.value });
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="editor-main">
            {extractedText ? (
              <>
                <header>
                  <h3>{view === 'template_dava' ? 'Dava Dilekçesi Düzenle' : 'İhtarname Düzenle'}</h3>
                  <p className="subtitle">Hazırlanan metni aşağıdan doğrudan düzenleyebilirsiniz.</p>
                </header>
                <div className="editor-container" style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Centered Title Editor */}
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <input
                      style={{
                        textAlign: 'center',
                        fontSize: '14pt',
                        fontWeight: 'bold',
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        width: '100%',
                        fontFamily: '"Times New Roman", Times, serif'
                      }}
                      value={view === 'template_dava' ? TEMPLATE_TITLE : "İHTARNAME"}
                      readOnly
                    />
                  </div>

                  <textarea
                    className="text-editor"
                    value={view === 'template_dava' ? davaText.replace(TEMPLATE_TITLE + "\n\n", "") : ihtarText.replace("İHTARNAME\n\n", "")}
                    onChange={(e) => {
                      if (view === 'template_dava') setDavaText(TEMPLATE_TITLE + "\n\n" + e.target.value);
                      else setIhtarText("İHTARNAME\n\n" + e.target.value);
                    }}
                  />
                </div>
                <div className="action-bar">
                  <button className="btn-secondary" onClick={() => {
                    const text = view === 'template_dava' ? davaText : ihtarText;
                    if (!text) {
                      alert("İndirilecek metin bulunamadı!");
                      return;
                    }
                    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = `${view === 'template_dava' ? 'dava_dilekcesi' : 'ihtarname'}.udf`;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => {
                      document.body.removeChild(a);
                      window.URL.revokeObjectURL(url);
                    }, 100);
                  }}>
                    UDF Olarak İndir 💾
                  </button>
                  <button className="btn-secondary" onClick={() => {
                    const fullText = view === 'template_dava' ? davaText : ihtarText;
                    const lines = fullText.split('\n');
                    const title = lines[0];

                    // Logic to identify signature block
                    const signatureStartIdx = lines.findIndex(line => line.includes('Davacı Vekili') || line.includes('İhtar Eden Vekili'));
                    let bodyLines = [];
                    let signatureLines = [];

                    if (signatureStartIdx !== -1) {
                      bodyLines = lines.slice(1, signatureStartIdx);
                      signatureLines = lines.slice(signatureStartIdx);
                    } else {
                      bodyLines = lines.slice(1);
                    }

                    // Temporary title change to hide URL/Title in print
                    const originalTitle = document.title;
                    document.title = "";

                    // Create a temporary style for printing
                    const style = document.createElement('style');
                    style.innerHTML = `
                      @page { 
                        margin: 0; 
                        size: A4;
                      }
                      @media print {
                        body { margin: 0; }
                        body * { visibility: hidden; }
                        .print-container, .print-container * { visibility: visible; }
                        .print-container {
                          position: absolute;
                          left: 0;
                          top: 0;
                          width: 210mm;
                          min-height: 297mm;
                          padding: 1.5cm;
                          box-sizing: border-box;
                          font-family: "Times New Roman", Times, serif;
                          font-size: 12pt;
                          line-height: 1.5;
                          color: black !important;
                          background: white !important;
                        }
                        .print-title {
                          text-align: center;
                          font-weight: bold;
                          margin-bottom: 2rem;
                          display: block;
                        }
                        .print-body {
                          text-align: justify;
                          white-space: pre-wrap;
                          display: block;
                          margin-bottom: 3rem;
                        }
                        .print-signature {
                          text-align: center;
                          margin-left: auto;
                          margin-right: 2cm;
                          width: 8cm;
                          margin-top: 3rem;
                          font-weight: bold;
                          white-space: pre-line;
                        }
                      }
                    `;
                    document.head.appendChild(style);

                    // Create print container
                    const printContainer = document.createElement('div');
                    printContainer.className = 'print-container';

                    const titleDiv = document.createElement('div');
                    titleDiv.className = 'print-title';
                    titleDiv.innerText = title;

                    const bodyDiv = document.createElement('div');
                    bodyDiv.className = 'print-body';

                    // Format body text to bold ONLY specific headers
                    const headersToBold = [
                      "DAVACI", "ADRES", "VEKİLİ", "DAVALILAR", "DAVA",
                      "DAVA DEĞERİ", "AÇIKLAMALAR", "HUKUKİ NEDENLER",
                      "DELİLLER", "SONUÇ VE İSTEM", "İhtar Eden Keşideci", "Konu"
                    ];

                    let formattedBody = bodyLines.join('\n');
                    headersToBold.forEach(header => {
                      const regex = new RegExp(`^(${header}\\s*:)`, 'gm');
                      formattedBody = formattedBody.replace(regex, '<strong>$1</strong>');
                    });

                    // Specific fix for DAVA DEĞERİ: Bold the whole line and the following amount line
                    formattedBody = formattedBody.replace(
                      /<strong>DAVA DEĞERİ:<\/strong>(.*)\n(şimdilik 1000,00TL)/i,
                      '<strong>DAVA DEĞERİ:$1\n$2</strong>'
                    );

                    // Bold specific EK references
                    formattedBody = formattedBody.replace(/(\(EK 1:Tescil belgesi\))/g, '<strong>$1</strong>');

                    // Bold specific ownership sentence
                    formattedBody = formattedBody.replace(/(Müvekkil şirket .*? malikidir\.)/g, '<strong>$1</strong>');

                    // Bold main demand paragraph
                    formattedBody = formattedBody.replace(/(tarihleri arasında davalı[\s\S]*?tahsiline karar verilmesini istemekteyiz\.)/g, '<strong>$1</strong>');

                    bodyDiv.innerHTML = formattedBody;

                    printContainer.appendChild(titleDiv);
                    printContainer.appendChild(bodyDiv);

                    if (signatureLines.length > 0) {
                      const sigDiv = document.createElement('div');
                      sigDiv.className = 'print-signature';
                      sigDiv.innerText = signatureLines.join('\n');
                      printContainer.appendChild(sigDiv);
                    }

                    document.body.appendChild(printContainer);

                    window.print();

                    // Cleanup
                    document.head.removeChild(style);
                    document.body.removeChild(printContainer);
                    document.title = originalTitle;
                  }}>
                    Yazdır / PDF Olarak Kaydet 🖨️
                  </button>
                  <button className="btn-primary" onClick={() => handleCopy(view === 'template_dava' ? davaText : ihtarText)}>
                    Tamamlanan Metni Kopyala
                  </button>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '1rem', textAlign: 'center' }}>
                  * Not: İndirilen .udf dosyası metin tabanlı bir taslaktır. UYAP Editör'de açıp imzalayarak kullanabilirsiniz.
                </p>
              </>
            ) : (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '60vh', 
                color: '#94a3b8',
                textAlign: 'center',
                width: '100%'
              }}>
                <p style={{ fontSize: '1.2rem', maxWidth: '400px', lineHeight: '1.6' }}>
                  Şablonu oluşturmak için önce <strong>Ham Metin</strong> sekmesinden bir dosya (PDF/DOCX) yüklemelisiniz.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
