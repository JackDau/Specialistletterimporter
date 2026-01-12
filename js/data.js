// Mock data for the GP Letter Review Portal

const mockLetters = [
    {
        id: 1,
        patientName: "Anderson, Margaret",
        patientDOB: "15/03/1958",
        patientUR: "MRN-2847561",
        specialist: "Dr. James Chen",
        speciality: "Cardiology",
        dateReceived: "2026-01-09",
        urgency: "urgent",
        pdfFile: "assets/sample-letter-1.html",
        extractedData: {
            summary: "Mrs. Anderson was reviewed following her recent admission for acute coronary syndrome. Coronary angiography revealed significant three-vessel disease. She has been commenced on dual antiplatelet therapy and referred for cardiac surgery consultation. Blood pressure remains suboptimally controlled despite current medications.",
            diagnoses: [
                { id: 1, name: "Three-vessel coronary artery disease", status: "new", icd10: "I25.10", currentRecord: null },
                { id: 2, name: "Acute coronary syndrome", status: "new", icd10: "I24.9", currentRecord: null },
                { id: 3, name: "Hypertension - poorly controlled", status: "changed", icd10: "I10", currentRecord: "Hypertension" }
            ],
            medications: [
                { id: 1, name: "Aspirin", dose: "100mg", frequency: "daily", status: "new", currentRecord: null },
                { id: 2, name: "Ticagrelor", dose: "90mg", frequency: "twice daily", status: "new", currentRecord: null },
                { id: 3, name: "Atorvastatin", dose: "80mg", frequency: "nocte", status: "changed", note: "Increased from 40mg", currentRecord: "Atorvastatin 40mg nocte" },
                { id: 4, name: "Perindopril", dose: "10mg", frequency: "daily", status: "changed", note: "Increased from 5mg", currentRecord: "Perindopril 5mg daily" },
                { id: 5, name: "Metoprolol CR", dose: "95mg", frequency: "daily", status: "new", currentRecord: null }
            ],
            measurements: [
                { id: 1, name: "Blood Pressure", value: "158/94", unit: "mmHg", date: "08/01/2026", currentRecord: "145/88 mmHg (12/11/2025)" },
                { id: 2, name: "Heart Rate", value: "72", unit: "bpm", date: "08/01/2026", currentRecord: "76 bpm (12/11/2025)" },
                { id: 3, name: "Weight", value: "78.5", unit: "kg", date: "08/01/2026", currentRecord: "77.2 kg (12/11/2025)" },
                { id: 4, name: "LDL Cholesterol", value: "3.2", unit: "mmol/L", date: "06/01/2026", currentRecord: "2.8 mmol/L (15/09/2025)" }
            ],
            allergies: [
                { id: 1, name: "ACE inhibitor-induced cough", reaction: "Dry cough with Ramipril - tolerating Perindopril", status: "new", currentRecord: null }
            ],
            reminders: [
                { id: 1, description: "Cardiac surgery consultation", dueDate: "Within 2 weeks", type: "referral" },
                { id: 2, description: "Repeat echocardiogram", dueDate: "3 months", type: "investigation" },
                { id: 3, description: "Cardiology follow-up", dueDate: "6 weeks post-surgery", type: "appointment" }
            ]
        }
    },
    {
        id: 2,
        patientName: "Brown, David",
        patientDOB: "22/07/1965",
        patientUR: "MRN-1938472",
        specialist: "Dr. Sarah Williams",
        speciality: "Gastroenterology",
        dateReceived: "2026-01-09",
        urgency: "routine",
        pdfFile: "assets/sample-letter-2.html",
        extractedData: {
            summary: "Mr. Brown underwent surveillance colonoscopy which revealed two tubular adenomas in the sigmoid colon, both successfully removed. No evidence of malignancy on histopathology. Continue current PPI therapy for Barrett's oesophagus. Recommend repeat colonoscopy in 3 years.",
            diagnoses: [
                { id: 1, name: "Colonic tubular adenomas - removed", status: "new", icd10: "D12.5", currentRecord: null },
                { id: 2, name: "Barrett's oesophagus - stable", status: "changed", icd10: "K22.7", currentRecord: "Barrett's oesophagus" }
            ],
            medications: [
                { id: 1, name: "Esomeprazole", dose: "40mg", frequency: "daily", status: "unchanged", note: "Continue current therapy", currentRecord: "Esomeprazole 40mg daily" }
            ],
            measurements: [
                { id: 1, name: "Weight", value: "92.3", unit: "kg", date: "07/01/2026", currentRecord: "91.8 kg (20/10/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Surveillance colonoscopy", dueDate: "January 2029 (3 years)", type: "investigation" },
                { id: 2, description: "Gastroscopy for Barrett's surveillance", dueDate: "January 2028 (2 years)", type: "investigation" }
            ]
        }
    },
    {
        id: 3,
        patientName: "Chen, Lisa",
        patientDOB: "08/11/1982",
        patientUR: "MRN-3847291",
        specialist: "Dr. Michael Torres",
        speciality: "Endocrinology",
        dateReceived: "2026-01-08",
        urgency: "urgent",
        pdfFile: "assets/sample-letter-3.html",
        extractedData: {
            summary: "Ms. Chen presents with newly diagnosed Type 2 Diabetes Mellitus with HbA1c of 9.2%. She also has concurrent hyperthyroidism secondary to Graves' disease. Started on Metformin and Carbimazole. Requires close monitoring of thyroid function and glycaemic control. Diabetes education arranged.",
            diagnoses: [
                { id: 1, name: "Type 2 Diabetes Mellitus", status: "new", icd10: "E11.9", currentRecord: null },
                { id: 2, name: "Graves' disease with hyperthyroidism", status: "new", icd10: "E05.0", currentRecord: null }
            ],
            medications: [
                { id: 1, name: "Metformin", dose: "500mg", frequency: "twice daily", status: "new", note: "Titrate to 1000mg BD over 4 weeks", currentRecord: null },
                { id: 2, name: "Carbimazole", dose: "20mg", frequency: "daily", status: "new", currentRecord: null }
            ],
            measurements: [
                { id: 1, name: "HbA1c", value: "9.2", unit: "%", date: "05/01/2026", currentRecord: "Not previously recorded" },
                { id: 2, name: "TSH", value: "<0.01", unit: "mIU/L", date: "05/01/2026", currentRecord: "2.1 mIU/L (03/06/2025)" },
                { id: 3, name: "Free T4", value: "42", unit: "pmol/L", date: "05/01/2026", currentRecord: "14 pmol/L (03/06/2025)" },
                { id: 4, name: "Weight", value: "58.2", unit: "kg", date: "06/01/2026", currentRecord: "63.1 kg (03/06/2025)" },
                { id: 5, name: "Blood Pressure", value: "128/82", unit: "mmHg", date: "06/01/2026", currentRecord: "122/78 mmHg (03/06/2025)" }
            ],
            allergies: [
                { id: 1, name: "Sulfonamides", reaction: "Rash", status: "new", currentRecord: null }
            ],
            reminders: [
                { id: 1, description: "Thyroid function tests", dueDate: "4 weeks", type: "investigation" },
                { id: 2, description: "Fasting glucose & HbA1c", dueDate: "3 months", type: "investigation" },
                { id: 3, description: "Endocrinology review", dueDate: "6 weeks", type: "appointment" },
                { id: 4, description: "Diabetes educator appointment", dueDate: "2 weeks", type: "referral" }
            ]
        }
    },
    {
        id: 4,
        patientName: "Martinez, Roberto",
        patientDOB: "30/04/1971",
        patientUR: "MRN-2019384",
        specialist: "Dr. Emma Thompson",
        speciality: "Rheumatology",
        dateReceived: "2026-01-08",
        urgency: "routine",
        pdfFile: "assets/sample-letter-4.html",
        extractedData: {
            summary: "Mr. Martinez reviewed for management of rheumatoid arthritis. Disease activity remains well controlled on current DMARD therapy. DAS28 score 2.4 indicating remission. Continue current medications. Annual monitoring bloods satisfactory.",
            diagnoses: [
                { id: 1, name: "Rheumatoid arthritis - in remission", status: "changed", icd10: "M06.9", currentRecord: "Rheumatoid arthritis" }
            ],
            medications: [
                { id: 1, name: "Methotrexate", dose: "20mg", frequency: "weekly", status: "unchanged", currentRecord: "Methotrexate 20mg weekly" },
                { id: 2, name: "Folic acid", dose: "5mg", frequency: "weekly (day after MTX)", status: "unchanged", currentRecord: "Folic acid 5mg weekly" },
                { id: 3, name: "Hydroxychloroquine", dose: "200mg", frequency: "daily", status: "unchanged", currentRecord: "Hydroxychloroquine 200mg daily" }
            ],
            measurements: [
                { id: 1, name: "DAS28 Score", value: "2.4", unit: "", date: "07/01/2026", currentRecord: "2.8 (15/07/2025)" },
                { id: 2, name: "CRP", value: "3", unit: "mg/L", date: "07/01/2026", currentRecord: "5 mg/L (15/07/2025)" },
                { id: 3, name: "ESR", value: "12", unit: "mm/hr", date: "07/01/2026", currentRecord: "18 mm/hr (15/07/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Rheumatology review", dueDate: "6 months", type: "appointment" },
                { id: 2, description: "FBC, LFT, U&E monitoring", dueDate: "3 months", type: "investigation" }
            ]
        }
    },
    {
        id: 5,
        patientName: "Nguyen, Thi",
        patientDOB: "14/09/1945",
        patientUR: "MRN-1847263",
        specialist: "Dr. Robert Clarke",
        speciality: "Geriatric Medicine",
        dateReceived: "2026-01-07",
        urgency: "routine",
        pdfFile: "assets/sample-letter-5.html",
        extractedData: {
            summary: "Mrs. Nguyen reviewed in Memory Clinic. Cognitive testing reveals mild cognitive impairment, likely early Alzheimer's disease. MRI shows mild hippocampal atrophy. Commenced on cholinesterase inhibitor therapy. Family meeting held to discuss diagnosis and advance care planning.",
            diagnoses: [
                { id: 1, name: "Mild cognitive impairment due to Alzheimer's disease", status: "new", icd10: "G31.84", currentRecord: null }
            ],
            medications: [
                { id: 1, name: "Donepezil", dose: "5mg", frequency: "nocte", status: "new", note: "Increase to 10mg after 4 weeks if tolerated", currentRecord: null },
                { id: 2, name: "Amlodipine", dose: "5mg", frequency: "daily", status: "ceased", note: "Ceased due to peripheral oedema", currentRecord: "Amlodipine 5mg daily (ACTIVE)" },
                { id: 3, name: "Lercanidipine", dose: "10mg", frequency: "daily", status: "new", note: "Replacement for Amlodipine", currentRecord: null }
            ],
            measurements: [
                { id: 1, name: "MMSE Score", value: "22/30", unit: "", date: "06/01/2026", currentRecord: "26/30 (10/01/2025)" },
                { id: 2, name: "Blood Pressure", value: "142/78", unit: "mmHg", date: "06/01/2026", currentRecord: "138/82 mmHg (10/01/2025)" },
                { id: 3, name: "Weight", value: "52.1", unit: "kg", date: "06/01/2026", currentRecord: "54.3 kg (10/01/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Memory Clinic follow-up", dueDate: "3 months", type: "appointment" },
                { id: 2, description: "Repeat cognitive assessment", dueDate: "6 months", type: "investigation" },
                { id: 3, description: "Advance Care Directive discussion", dueDate: "Next GP visit", type: "referral" }
            ]
        }
    },
    {
        id: 6,
        patientName: "Patel, Anika",
        patientDOB: "03/12/1990",
        patientUR: "MRN-4928371",
        specialist: "Dr. Jennifer Wu",
        speciality: "Obstetrics",
        dateReceived: "2026-01-07",
        urgency: "routine",
        pdfFile: "assets/sample-letter-6.html",
        extractedData: {
            summary: "Ms. Patel attended for routine antenatal care at 28 weeks gestation. Pregnancy progressing normally. Oral glucose tolerance test shows gestational diabetes. Commenced on dietary management with home glucose monitoring. Referral to diabetes educator completed.",
            diagnoses: [
                { id: 1, name: "Gestational diabetes mellitus", status: "new", icd10: "O24.4", currentRecord: null },
                { id: 2, name: "Pregnancy - 28 weeks", status: "changed", icd10: "Z34.0", currentRecord: "Pregnancy - 20 weeks (confirmed 11/11/2025)" }
            ],
            medications: [],
            measurements: [
                { id: 1, name: "Fasting glucose (OGTT)", value: "5.8", unit: "mmol/L", date: "05/01/2026", currentRecord: "4.6 mmol/L (11/11/2025)" },
                { id: 2, name: "2hr glucose (OGTT)", value: "9.2", unit: "mmol/L", date: "05/01/2026", currentRecord: "Not previously recorded" },
                { id: 3, name: "Blood Pressure", value: "118/72", unit: "mmHg", date: "06/01/2026", currentRecord: "115/70 mmHg (11/11/2025)" },
                { id: 4, name: "Weight", value: "68.5", unit: "kg", date: "06/01/2026", currentRecord: "64.2 kg (11/11/2025)" },
                { id: 5, name: "Fundal height", value: "28", unit: "cm", date: "06/01/2026", currentRecord: "20 cm (11/11/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Diabetes educator appointment", dueDate: "1 week", type: "referral" },
                { id: 2, description: "Growth ultrasound", dueDate: "32 weeks", type: "investigation" },
                { id: 3, description: "Obstetric review", dueDate: "2 weeks", type: "appointment" },
                { id: 4, description: "Postnatal OGTT", dueDate: "6-12 weeks postpartum", type: "investigation" }
            ]
        }
    },
    {
        id: 7,
        patientName: "Thompson, William",
        patientDOB: "18/06/1952",
        patientUR: "MRN-5738291",
        specialist: "Mr. Andrew Richardson",
        speciality: "Orthopaedic Surgery",
        dateReceived: "2026-01-09",
        urgency: "routine",
        pdfFile: "assets/sample-letter-7.html",
        extractedData: {
            summary: "Mr. Thompson underwent elective right total hip replacement on 6 January 2026 for severe osteoarthritis. Surgery was uncomplicated with Stryker implants. Mobilising well with frame, discharged day 3. Requires VTE prophylaxis for 35 days and posterior hip precautions for 6 weeks.",
            diagnoses: [
                { id: 1, name: "Right total hip replacement - post-operative", status: "new", icd10: "Z96.64", currentRecord: null },
                { id: 2, name: "Right hip osteoarthritis - severe", status: "changed", icd10: "M16.11", currentRecord: "Right hip osteoarthritis" }
            ],
            medications: [
                { id: 1, name: "Aspirin", dose: "150mg", frequency: "daily", status: "new", note: "VTE prophylaxis - 35 days total", currentRecord: null },
                { id: 2, name: "Paracetamol", dose: "1g", frequency: "QID", status: "new", note: "Regular for 2 weeks then PRN", currentRecord: null },
                { id: 3, name: "Oxycodone", dose: "5-10mg", frequency: "PRN", status: "new", note: "Breakthrough pain - 20 tablets supplied", currentRecord: null },
                { id: 4, name: "Pantoprazole", dose: "40mg", frequency: "daily", status: "new", note: "Gastric protection while on aspirin", currentRecord: null },
                { id: 5, name: "Docusate/Senna", dose: "1-2 tablets", frequency: "nocte", status: "new", note: "While on opioids", currentRecord: null }
            ],
            measurements: [
                { id: 1, name: "Haemoglobin", value: "98", unit: "g/L", date: "08/01/2026", currentRecord: "142 g/L (02/01/2026 pre-op)" },
                { id: 2, name: "Blood Loss (intra-op)", value: "350", unit: "mL", date: "06/01/2026", currentRecord: null }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Wound review with practice nurse", dueDate: "10-14 days post-op", type: "appointment" },
                { id: 2, description: "Orthopaedic review with X-ray", dueDate: "6 weeks", type: "appointment" },
                { id: 3, description: "Cease aspirin (VTE prophylaxis)", dueDate: "35 days post-op (10 Feb)", type: "investigation" }
            ]
        }
    },
    {
        id: 8,
        patientName: "Papadopoulos, George",
        patientDOB: "25/02/1948",
        patientUR: "MRN-6284917",
        specialist: "Mr. David Keogh",
        speciality: "Urology",
        dateReceived: "2026-01-08",
        urgency: "routine",
        pdfFile: "assets/sample-letter-8.html",
        extractedData: {
            summary: "Mr. Papadopoulos underwent TURP on 5 January for BPH with severe LUTS (IPSS 24). 45g tissue resected, histopathology confirmed BPH with no malignancy. Successful trial of void on day 2. Alpha-blocker and 5-ARI therapy ceased as no longer required post-TURP.",
            diagnoses: [
                { id: 1, name: "Benign prostatic hyperplasia - post TURP", status: "changed", icd10: "N40.1", currentRecord: "Benign prostatic hyperplasia" },
                { id: 2, name: "TURP - transurethral resection of prostate", status: "new", icd10: "Z87.438", currentRecord: null }
            ],
            medications: [
                { id: 1, name: "Trimethoprim", dose: "300mg", frequency: "nocte", status: "new", note: "Prophylactic - 7 days only", currentRecord: null },
                { id: 2, name: "Tamsulosin", dose: "400mcg", frequency: "daily", status: "ceased", note: "No longer required post-TURP", currentRecord: "Tamsulosin 400mcg daily (ACTIVE)" },
                { id: 3, name: "Finasteride", dose: "5mg", frequency: "daily", status: "ceased", note: "No longer required post-TURP", currentRecord: "Finasteride 5mg daily (ACTIVE)" }
            ],
            measurements: [
                { id: 1, name: "PSA", value: "4.8", unit: "ng/mL", date: "15/11/2025", currentRecord: "5.2 ng/mL (10/05/2025)" },
                { id: 2, name: "Prostate Volume", value: "85", unit: "mL", date: "15/11/2025", currentRecord: null },
                { id: 3, name: "Post-void Residual", value: "45", unit: "mL", date: "07/01/2026", currentRecord: "180 mL (15/11/2025)" },
                { id: 4, name: "IPSS Score", value: "Pending", unit: "", date: "07/01/2026", currentRecord: "24 (severe) (15/11/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Urology review with flow study", dueDate: "6 weeks", type: "appointment" },
                { id: 2, description: "Repeat PSA", dueDate: "3 months", type: "investigation" }
            ]
        }
    },
    {
        id: 9,
        patientName: "O'Brien, Patricia",
        patientDOB: "07/04/1940",
        patientUR: "MRN-7391825",
        specialist: "Dr. Helen Nguyen",
        speciality: "Ophthalmology",
        dateReceived: "2026-01-10",
        urgency: "routine",
        pdfFile: "assets/sample-letter-9.html",
        extractedData: {
            summary: "Mrs. O'Brien underwent uncomplicated left cataract surgery (phacoemulsification + IOL) today. Pre-op vision L 6/36, Alcon SN60WF +21.5D lens inserted targeting plano. Post-operative drop regimen dispensed. Day 1 review tomorrow, driving restriction until reviewed.",
            diagnoses: [
                { id: 1, name: "Left cataract - post phacoemulsification", status: "changed", icd10: "H25.9", currentRecord: "Left cataract (nuclear sclerotic)" },
                { id: 2, name: "Pseudophakia left eye", status: "new", icd10: "Z96.1", currentRecord: null }
            ],
            medications: [
                { id: 1, name: "Chloramphenicol 0.5% eye drops", dose: "1 drop LEFT eye", frequency: "QID", status: "new", note: "For 2 weeks", currentRecord: null },
                { id: 2, name: "Prednisolone acetate 1% eye drops", dose: "1 drop LEFT eye", frequency: "QID week 1, BD week 2, daily week 3", status: "new", note: "Tapering course - 3 weeks total", currentRecord: null },
                { id: 3, name: "Nepafenac 0.1% eye drops", dose: "1 drop LEFT eye", frequency: "daily", status: "new", note: "For 4 weeks", currentRecord: null }
            ],
            measurements: [
                { id: 1, name: "Visual Acuity (Left)", value: "6/36", unit: "", date: "10/01/2026", currentRecord: "6/36 (15/12/2025)" },
                { id: 2, name: "Visual Acuity (Right)", value: "6/9", unit: "", date: "10/01/2026", currentRecord: "6/9 - previous cataract surgery 2024" },
                { id: 3, name: "Intraocular Pressure (Left)", value: "16", unit: "mmHg", date: "10/01/2026", currentRecord: "16 mmHg (15/12/2025)" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Day 1 post-op review", dueDate: "Tomorrow (11 Jan)", type: "appointment" },
                { id: 2, description: "2 week post-op review with refraction", dueDate: "24 January 2026", type: "appointment" },
                { id: 3, description: "New glasses prescription", dueDate: "4 weeks post-op", type: "investigation" }
            ]
        }
    }
];

// Helper function to get letter by ID
function getLetterById(id) {
    return mockLetters.find(letter => letter.id === parseInt(id));
}

// Helper function to format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Helper function to get relative date
function getRelativeDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = today - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return formatDate(dateString);
}
