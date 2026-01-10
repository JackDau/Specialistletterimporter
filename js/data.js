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
        pdfFile: "assets/sample-letter-1.pdf",
        extractedData: {
            summary: "Mrs. Anderson was reviewed following her recent admission for acute coronary syndrome. Coronary angiography revealed significant three-vessel disease. She has been commenced on dual antiplatelet therapy and referred for cardiac surgery consultation. Blood pressure remains suboptimally controlled despite current medications.",
            diagnoses: [
                { id: 1, name: "Three-vessel coronary artery disease", status: "new", icd10: "I25.10" },
                { id: 2, name: "Acute coronary syndrome", status: "new", icd10: "I24.9" },
                { id: 3, name: "Hypertension - poorly controlled", status: "changed", icd10: "I10" }
            ],
            medications: [
                { id: 1, name: "Aspirin", dose: "100mg", frequency: "daily", status: "new" },
                { id: 2, name: "Ticagrelor", dose: "90mg", frequency: "twice daily", status: "new" },
                { id: 3, name: "Atorvastatin", dose: "80mg", frequency: "nocte", status: "changed", note: "Increased from 40mg" },
                { id: 4, name: "Perindopril", dose: "10mg", frequency: "daily", status: "changed", note: "Increased from 5mg" },
                { id: 5, name: "Metoprolol CR", dose: "95mg", frequency: "daily", status: "new" }
            ],
            measurements: [
                { id: 1, name: "Blood Pressure", value: "158/94", unit: "mmHg", date: "08/01/2026" },
                { id: 2, name: "Heart Rate", value: "72", unit: "bpm", date: "08/01/2026" },
                { id: 3, name: "Weight", value: "78.5", unit: "kg", date: "08/01/2026" },
                { id: 4, name: "LDL Cholesterol", value: "3.2", unit: "mmol/L", date: "06/01/2026" }
            ],
            allergies: [
                { id: 1, name: "ACE inhibitor-induced cough", reaction: "Dry cough with Ramipril - tolerating Perindopril", status: "new" }
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
        pdfFile: "assets/sample-letter-2.pdf",
        extractedData: {
            summary: "Mr. Brown underwent surveillance colonoscopy which revealed two tubular adenomas in the sigmoid colon, both successfully removed. No evidence of malignancy on histopathology. Continue current PPI therapy for Barrett's oesophagus. Recommend repeat colonoscopy in 3 years.",
            diagnoses: [
                { id: 1, name: "Colonic tubular adenomas - removed", status: "new", icd10: "D12.5" },
                { id: 2, name: "Barrett's oesophagus - stable", status: "changed", icd10: "K22.7" }
            ],
            medications: [
                { id: 1, name: "Esomeprazole", dose: "40mg", frequency: "daily", status: "unchanged", note: "Continue current therapy" }
            ],
            measurements: [
                { id: 1, name: "Weight", value: "92.3", unit: "kg", date: "07/01/2026" }
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
        pdfFile: "assets/sample-letter-3.pdf",
        extractedData: {
            summary: "Ms. Chen presents with newly diagnosed Type 2 Diabetes Mellitus with HbA1c of 9.2%. She also has concurrent hyperthyroidism secondary to Graves' disease. Started on Metformin and Carbimazole. Requires close monitoring of thyroid function and glycaemic control. Diabetes education arranged.",
            diagnoses: [
                { id: 1, name: "Type 2 Diabetes Mellitus", status: "new", icd10: "E11.9" },
                { id: 2, name: "Graves' disease with hyperthyroidism", status: "new", icd10: "E05.0" }
            ],
            medications: [
                { id: 1, name: "Metformin", dose: "500mg", frequency: "twice daily", status: "new", note: "Titrate to 1000mg BD over 4 weeks" },
                { id: 2, name: "Carbimazole", dose: "20mg", frequency: "daily", status: "new" }
            ],
            measurements: [
                { id: 1, name: "HbA1c", value: "9.2", unit: "%", date: "05/01/2026" },
                { id: 2, name: "TSH", value: "<0.01", unit: "mIU/L", date: "05/01/2026" },
                { id: 3, name: "Free T4", value: "42", unit: "pmol/L", date: "05/01/2026" },
                { id: 4, name: "Weight", value: "58.2", unit: "kg", date: "06/01/2026" },
                { id: 5, name: "Blood Pressure", value: "128/82", unit: "mmHg", date: "06/01/2026" }
            ],
            allergies: [
                { id: 1, name: "Sulfonamides", reaction: "Rash", status: "new" }
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
        pdfFile: "assets/sample-letter-4.pdf",
        extractedData: {
            summary: "Mr. Martinez reviewed for management of rheumatoid arthritis. Disease activity remains well controlled on current DMARD therapy. DAS28 score 2.4 indicating remission. Continue current medications. Annual monitoring bloods satisfactory.",
            diagnoses: [
                { id: 1, name: "Rheumatoid arthritis - in remission", status: "changed", icd10: "M06.9" }
            ],
            medications: [
                { id: 1, name: "Methotrexate", dose: "20mg", frequency: "weekly", status: "unchanged" },
                { id: 2, name: "Folic acid", dose: "5mg", frequency: "weekly (day after MTX)", status: "unchanged" },
                { id: 3, name: "Hydroxychloroquine", dose: "200mg", frequency: "daily", status: "unchanged" }
            ],
            measurements: [
                { id: 1, name: "DAS28 Score", value: "2.4", unit: "", date: "07/01/2026" },
                { id: 2, name: "CRP", value: "3", unit: "mg/L", date: "07/01/2026" },
                { id: 3, name: "ESR", value: "12", unit: "mm/hr", date: "07/01/2026" }
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
        pdfFile: "assets/sample-letter-5.pdf",
        extractedData: {
            summary: "Mrs. Nguyen reviewed in Memory Clinic. Cognitive testing reveals mild cognitive impairment, likely early Alzheimer's disease. MRI shows mild hippocampal atrophy. Commenced on cholinesterase inhibitor therapy. Family meeting held to discuss diagnosis and advance care planning.",
            diagnoses: [
                { id: 1, name: "Mild cognitive impairment due to Alzheimer's disease", status: "new", icd10: "G31.84" }
            ],
            medications: [
                { id: 1, name: "Donepezil", dose: "5mg", frequency: "nocte", status: "new", note: "Increase to 10mg after 4 weeks if tolerated" },
                { id: 2, name: "Amlodipine", dose: "5mg", frequency: "daily", status: "ceased", note: "Ceased due to peripheral oedema" },
                { id: 3, name: "Lercanidipine", dose: "10mg", frequency: "daily", status: "new", note: "Replacement for Amlodipine" }
            ],
            measurements: [
                { id: 1, name: "MMSE Score", value: "22/30", unit: "", date: "06/01/2026" },
                { id: 2, name: "Blood Pressure", value: "142/78", unit: "mmHg", date: "06/01/2026" },
                { id: 3, name: "Weight", value: "52.1", unit: "kg", date: "06/01/2026" }
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
        pdfFile: "assets/sample-letter-6.pdf",
        extractedData: {
            summary: "Ms. Patel attended for routine antenatal care at 28 weeks gestation. Pregnancy progressing normally. Oral glucose tolerance test shows gestational diabetes. Commenced on dietary management with home glucose monitoring. Referral to diabetes educator completed.",
            diagnoses: [
                { id: 1, name: "Gestational diabetes mellitus", status: "new", icd10: "O24.4" },
                { id: 2, name: "Pregnancy - 28 weeks", status: "changed", icd10: "Z34.0" }
            ],
            medications: [],
            measurements: [
                { id: 1, name: "Fasting glucose (OGTT)", value: "5.8", unit: "mmol/L", date: "05/01/2026" },
                { id: 2, name: "2hr glucose (OGTT)", value: "9.2", unit: "mmol/L", date: "05/01/2026" },
                { id: 3, name: "Blood Pressure", value: "118/72", unit: "mmHg", date: "06/01/2026" },
                { id: 4, name: "Weight", value: "68.5", unit: "kg", date: "06/01/2026" },
                { id: 5, name: "Fundal height", value: "28", unit: "cm", date: "06/01/2026" }
            ],
            allergies: [],
            reminders: [
                { id: 1, description: "Diabetes educator appointment", dueDate: "1 week", type: "referral" },
                { id: 2, description: "Growth ultrasound", dueDate: "32 weeks", type: "investigation" },
                { id: 3, description: "Obstetric review", dueDate: "2 weeks", type: "appointment" },
                { id: 4, description: "Postnatal OGTT", dueDate: "6-12 weeks postpartum", type: "investigation" }
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
