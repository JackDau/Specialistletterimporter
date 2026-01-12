# GP Specialist Letter Importer - Project Documentation

## Overview
A web-based portal for GPs to review specialist letters and update patient clinical records. Currently a prototype with mock data, designed for future integration with Best Practice EHR software.

## Project Structure
```
/Specialistletterimporter
├── index.html              # Inbox view - lists pending letters
├── review.html             # Side-by-side review screen
├── css/
│   └── styles.css          # All styling (clinical, clean design)
├── js/
│   ├── app.js              # Inbox page logic
│   ├── data.js             # Mock patient data (9 patients)
│   └── review.js           # Review page logic and state management
└── assets/
    └── sample-letter-*.html  # 9 sample specialist letters (HTML format)
```

## Key Features

### Inbox (index.html)
- Lists pending specialist letters
- Sorted by urgency (Urgent first), then by patient name
- Shows patient name, specialist, specialty, date received

### Review Screen (review.html)
- **Left panel**: Specialist letter viewer (iframe)
- **Right panel**: Extracted data sections for review

### Data Sections (with merged list view)
Each section shows current patient record + proposed changes from specialist letter:

1. **Active or Non-Active Past History** (diagnoses/procedures)
   - Current items: grey border, delete button
   - Proposed items: blue border, accept/reject buttons
   - Active/Inactive toggle appears after accepting
   - Procedures: pre-accepted, default to Inactive
   - Conditions: pending, default to Active when accepted

2. **Medications**
   - Same merged list approach
   - Shows "No existing record" for new items

3. **Clinical Measurements**
   - Default to accepted
   - Shows current vs new values

4. **Allergies**
   - Same merged list approach

5. **Reminders**
   - Same merged list approach
   - Shows due date, type, creation date

6. **Letter Summary**
   - Editable text area with accept/reject

## State Management (review.js)

### Key State Objects
```javascript
itemStates = {
    summary: 'pending',
    diagnoses: { [id]: 'pending'|'accepted'|'rejected' },
    medications: { ... },
    measurements: { ... },
    allergies: { ... },
    reminders: { ... }
};

historyStates = {
    diagnoses: { [id]: 'active'|'inactive' }
};

deleteStates = {
    pastHistory: { [id]: true|false },
    medications: { [id]: true|false },
    allergies: { [id]: true|false },
    reminders: { [id]: true|false }
};
```

## Data Structure (data.js)

Each letter object contains:
```javascript
{
    id: number,
    patientName: string,
    patientDOB: string,
    patientUR: string,
    specialist: string,
    speciality: string,
    dateReceived: string,
    urgency: 'urgent'|'routine',
    pdfFile: string,

    // Current patient record (from EHR - currently mocked)
    currentRecord: {
        pastHistory: [{ id, name, type, status, icd10, dateRecorded }],
        medications: [{ id, name, dose, frequency, dateStarted }],
        allergies: [{ id, name, reaction, dateRecorded }],
        reminders: [{ id, description, dueDate, type, dateCreated }]
    },

    // Extracted from specialist letter
    extractedData: {
        summary: string,
        diagnoses: [{ id, name, type, status, icd10, currentRecord }],
        medications: [{ id, name, dose, frequency, status, note, currentRecord }],
        measurements: [{ id, name, value, unit, date, currentRecord }],
        allergies: [{ id, name, reaction, status, currentRecord }],
        reminders: [{ id, description, dueDate, type }]
    }
}
```

## Styling (styles.css)

### Key CSS Classes
- `.current-item` - Grey border for existing record items
- `.proposed-item` - Blue border for new/changed items
- `.marked-for-delete` - Red background, strikethrough
- `.accepted` / `.rejected` - State styling
- `.item-tag` variants: `.new`, `.changed`, `.procedure`, `.condition`, `.current`, `.active`, `.inactive`

## Deployment
- Static site (HTML/CSS/JS only)
- Currently on GitHub Pages via branch: `claude/gp-patient-portal-LtfGZ`
- Auto-deploys on push

## Future Integration: Best Practice API

### Required API Capabilities
1. **Read** current patient record (pastHistory, medications, allergies, reminders)
2. **Write** accepted changes back to patient record
3. **Delete** items marked for deletion
4. **Authentication** - method TBD based on API docs

### Integration Points in Code
- `data.js` → Replace mock data with API calls
- `review.js` → Add API submission on "Submit All"
- May need server-side component for auth token handling

## Sample Patients (9 total)
1. Anderson, Margaret - Cardiology (urgent)
2. Brown, David - Gastroenterology
3. Chen, Lisa - Endocrinology (urgent)
4. Martinez, Roberto - Rheumatology
5. Nguyen, Thi - Geriatric Medicine
6. Patel, Anika - Obstetrics
7. Thompson, William - Orthopaedic Surgery
8. Papadopoulos, George - Urology
9. O'Brien, Patricia - Ophthalmology
