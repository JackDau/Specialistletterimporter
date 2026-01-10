// GP Letter Review Portal - Review Page Application

let currentLetter = null;
let itemStates = {}; // Track accepted/rejected state for each item

document.addEventListener('DOMContentLoaded', function() {
    initializeReviewPage();
});

function initializeReviewPage() {
    // Get letter ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const letterId = urlParams.get('id');

    if (!letterId) {
        window.location.href = 'index.html';
        return;
    }

    currentLetter = getLetterById(letterId);

    if (!currentLetter) {
        window.location.href = 'index.html';
        return;
    }

    // Initialize item states
    initializeItemStates();

    // Render page components
    renderPatientBanner();
    renderPdfViewer();
    renderExtractedData();

    // Initialize event listeners
    initializeEventListeners();
}

function initializeItemStates() {
    // Set all items to pending by default
    itemStates = {
        summary: 'pending',
        diagnoses: {},
        medications: {},
        measurements: {},
        allergies: {},
        reminders: {}
    };

    // Initialize each item
    const data = currentLetter.extractedData;
    data.diagnoses.forEach(d => itemStates.diagnoses[d.id] = 'pending');
    data.medications.forEach(m => itemStates.medications[m.id] = 'pending');
    data.measurements.forEach(m => itemStates.measurements[m.id] = 'pending');
    data.allergies.forEach(a => itemStates.allergies[a.id] = 'pending');
    data.reminders.forEach(r => itemStates.reminders[r.id] = 'pending');
}

function renderPatientBanner() {
    const banner = document.getElementById('patient-banner');
    banner.innerHTML = `
        <div class="patient-name">${currentLetter.patientName}</div>
        <div class="patient-details">
            <span>DOB: ${currentLetter.patientDOB}</span>
            <span>${currentLetter.patientUR}</span>
            <span>${currentLetter.specialist} - ${currentLetter.speciality}</span>
        </div>
        <span class="urgency-badge ${currentLetter.urgency}">${currentLetter.urgency}</span>
    `;
}

function renderPdfViewer() {
    const pdfFrame = document.getElementById('pdf-frame');
    pdfFrame.src = currentLetter.pdfFile;
}

function renderExtractedData() {
    const data = currentLetter.extractedData;

    // Render summary
    document.getElementById('summary-text').value = data.summary;

    // Render diagnoses
    renderDiagnoses(data.diagnoses);

    // Render medications
    renderMedications(data.medications);

    // Render measurements
    renderMeasurements(data.measurements);

    // Render allergies
    renderAllergies(data.allergies);

    // Render reminders
    renderReminders(data.reminders);

    // Update accepted count
    updateAcceptedCount();
}

function renderDiagnoses(diagnoses) {
    const container = document.getElementById('diagnoses-list');

    if (diagnoses.length === 0) {
        container.innerHTML = '<p class="empty-message">No diagnoses extracted</p>';
        return;
    }

    container.innerHTML = diagnoses.map(d => `
        <div class="data-item" data-type="diagnoses" data-id="${d.id}">
            <div class="item-status">
                <button class="action-btn accept" onclick="toggleItemState('diagnoses', ${d.id}, 'accepted')" title="Accept">
                    <span class="icon">✓</span>
                </button>
                <button class="action-btn reject" onclick="toggleItemState('diagnoses', ${d.id}, 'rejected')" title="Reject">
                    <span class="icon">✕</span>
                </button>
            </div>
            <div class="item-content">
                ${d.currentRecord ? `
                    <div class="current-record">
                        <span class="record-label">Current:</span> ${d.currentRecord}
                    </div>
                ` : ''}
                <div class="proposed-change">
                    <span class="record-label">${d.currentRecord ? 'Proposed:' : ''}</span>
                    <span class="item-label">
                        ${d.name}
                        <span class="item-tag ${d.status}">${d.status}</span>
                    </span>
                </div>
                <div class="item-value">ICD-10: ${d.icd10}</div>
                <div class="item-edit">
                    <input type="text" value="${d.name}" placeholder="Edit diagnosis name">
                </div>
            </div>
        </div>
    `).join('');
}

function renderMedications(medications) {
    const container = document.getElementById('medications-list');

    if (medications.length === 0) {
        container.innerHTML = '<p class="empty-message">No medication changes extracted</p>';
        return;
    }

    container.innerHTML = medications.map(m => `
        <div class="data-item" data-type="medications" data-id="${m.id}">
            <div class="item-status">
                <button class="action-btn accept" onclick="toggleItemState('medications', ${m.id}, 'accepted')" title="Accept">
                    <span class="icon">✓</span>
                </button>
                <button class="action-btn reject" onclick="toggleItemState('medications', ${m.id}, 'rejected')" title="Reject">
                    <span class="icon">✕</span>
                </button>
            </div>
            <div class="item-content">
                ${m.currentRecord ? `
                    <div class="current-record">
                        <span class="record-label">Current:</span> ${m.currentRecord}
                    </div>
                ` : ''}
                <div class="proposed-change">
                    <span class="record-label">${m.currentRecord ? 'Proposed:' : ''}</span>
                    <span class="item-label">
                        ${m.name} ${m.dose} ${m.frequency}
                        <span class="item-tag ${m.status}">${m.status}</span>
                    </span>
                </div>
                ${m.note ? `<div class="item-value">${m.note}</div>` : ''}
                <div class="item-edit">
                    <input type="text" value="${m.name} ${m.dose} ${m.frequency}" placeholder="Edit medication">
                </div>
            </div>
        </div>
    `).join('');
}

function renderMeasurements(measurements) {
    const container = document.getElementById('measurements-list');

    if (measurements.length === 0) {
        container.innerHTML = '<p class="empty-message">No clinical measurements extracted</p>';
        return;
    }

    container.innerHTML = measurements.map(m => `
        <div class="data-item" data-type="measurements" data-id="${m.id}">
            <div class="item-status">
                <button class="action-btn accept" onclick="toggleItemState('measurements', ${m.id}, 'accepted')" title="Accept">
                    <span class="icon">✓</span>
                </button>
                <button class="action-btn reject" onclick="toggleItemState('measurements', ${m.id}, 'rejected')" title="Reject">
                    <span class="icon">✕</span>
                </button>
            </div>
            <div class="item-content">
                <div class="item-label">${m.name}</div>
                ${m.currentRecord ? `
                    <div class="current-record">
                        <span class="record-label">Current:</span> ${m.currentRecord}
                    </div>
                ` : ''}
                <div class="proposed-change">
                    <span class="record-label">${m.currentRecord ? 'New:' : ''}</span>
                    <span class="proposed-value">${m.value} ${m.unit}</span>
                    <span class="measurement-date">(${m.date})</span>
                </div>
                <div class="item-edit">
                    <input type="text" value="${m.value}" placeholder="Edit value">
                </div>
            </div>
        </div>
    `).join('');
}

function renderAllergies(allergies) {
    const container = document.getElementById('allergies-list');

    if (allergies.length === 0) {
        container.innerHTML = '<p class="empty-message">No allergies extracted</p>';
        return;
    }

    container.innerHTML = allergies.map(a => `
        <div class="data-item" data-type="allergies" data-id="${a.id}">
            <div class="item-status">
                <button class="action-btn accept" onclick="toggleItemState('allergies', ${a.id}, 'accepted')" title="Accept">
                    <span class="icon">✓</span>
                </button>
                <button class="action-btn reject" onclick="toggleItemState('allergies', ${a.id}, 'rejected')" title="Reject">
                    <span class="icon">✕</span>
                </button>
            </div>
            <div class="item-content">
                ${a.currentRecord ? `
                    <div class="current-record">
                        <span class="record-label">Current:</span> ${a.currentRecord}
                    </div>
                ` : ''}
                <div class="proposed-change">
                    <span class="record-label">${a.currentRecord ? 'Proposed:' : ''}</span>
                    <span class="item-label">
                        ${a.name}
                        <span class="item-tag ${a.status}">${a.status}</span>
                    </span>
                </div>
                <div class="item-value">Reaction: ${a.reaction}</div>
                <div class="item-edit">
                    <input type="text" value="${a.name}" placeholder="Edit allergy">
                </div>
            </div>
        </div>
    `).join('');
}

function renderReminders(reminders) {
    const container = document.getElementById('reminders-list');

    if (reminders.length === 0) {
        container.innerHTML = '<p class="empty-message">No reminders extracted</p>';
        return;
    }

    container.innerHTML = reminders.map(r => `
        <div class="data-item" data-type="reminders" data-id="${r.id}">
            <div class="item-status">
                <button class="action-btn accept" onclick="toggleItemState('reminders', ${r.id}, 'accepted')" title="Accept">
                    <span class="icon">✓</span>
                </button>
                <button class="action-btn reject" onclick="toggleItemState('reminders', ${r.id}, 'rejected')" title="Reject">
                    <span class="icon">✕</span>
                </button>
            </div>
            <div class="item-content">
                <div class="item-label">${r.description}</div>
                <div class="item-value">Due: ${r.dueDate} • ${r.type}</div>
                <div class="item-edit">
                    <input type="text" value="${r.dueDate}" placeholder="Edit due date">
                </div>
            </div>
        </div>
    `).join('');
}

function toggleItemState(type, id, newState) {
    const currentState = itemStates[type][id];

    // Toggle: if already in this state, set to pending; otherwise set to new state
    if (currentState === newState) {
        itemStates[type][id] = 'pending';
    } else {
        itemStates[type][id] = newState;
    }

    // Update UI
    updateItemUI(type, id);
    updateAcceptedCount();
}

function updateItemUI(type, id) {
    const item = document.querySelector(`.data-item[data-type="${type}"][data-id="${id}"]`);
    if (!item) return;

    const state = itemStates[type][id];

    // Remove existing state classes
    item.classList.remove('accepted', 'rejected');

    // Update button states
    const acceptBtn = item.querySelector('.action-btn.accept');
    const rejectBtn = item.querySelector('.action-btn.reject');
    acceptBtn.classList.remove('active');
    rejectBtn.classList.remove('active');

    // Add new state
    if (state === 'accepted') {
        item.classList.add('accepted');
        acceptBtn.classList.add('active');
    } else if (state === 'rejected') {
        item.classList.add('rejected');
        rejectBtn.classList.add('active');
    }
}

function updateAcceptedCount() {
    let count = 0;

    // Count summary if accepted
    if (itemStates.summary === 'accepted') count++;

    // Count all other items
    ['diagnoses', 'medications', 'measurements', 'allergies', 'reminders'].forEach(type => {
        Object.values(itemStates[type]).forEach(state => {
            if (state === 'accepted') count++;
        });
    });

    document.getElementById('accepted-count').textContent = count;
}

function initializeEventListeners() {
    // Summary section accept/reject
    const summarySection = document.querySelector('[data-section="summary"]');
    summarySection.querySelector('.action-btn.accept').addEventListener('click', function() {
        toggleSummaryState('accepted');
    });
    summarySection.querySelector('.action-btn.reject').addEventListener('click', function() {
        toggleSummaryState('rejected');
    });

    // Accept All button
    document.getElementById('accept-all').addEventListener('click', acceptAll);

    // Reject All button
    document.getElementById('reject-all').addEventListener('click', rejectAll);

    // Submit All button
    document.getElementById('submit-all').addEventListener('click', submitAll);

    // PDF zoom controls
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
}

function toggleSummaryState(newState) {
    if (itemStates.summary === newState) {
        itemStates.summary = 'pending';
    } else {
        itemStates.summary = newState;
    }

    // Update UI
    const section = document.querySelector('[data-section="summary"]');
    const acceptBtn = section.querySelector('.action-btn.accept');
    const rejectBtn = section.querySelector('.action-btn.reject');

    section.classList.remove('accepted', 'rejected');
    acceptBtn.classList.remove('active');
    rejectBtn.classList.remove('active');

    if (itemStates.summary === 'accepted') {
        section.classList.add('accepted');
        acceptBtn.classList.add('active');
    } else if (itemStates.summary === 'rejected') {
        section.classList.add('rejected');
        rejectBtn.classList.add('active');
    }

    updateAcceptedCount();
}

function acceptAll() {
    // Accept summary
    itemStates.summary = 'accepted';

    // Accept all items
    ['diagnoses', 'medications', 'measurements', 'allergies', 'reminders'].forEach(type => {
        Object.keys(itemStates[type]).forEach(id => {
            itemStates[type][id] = 'accepted';
            updateItemUI(type, parseInt(id));
        });
    });

    // Update summary section UI
    const section = document.querySelector('[data-section="summary"]');
    section.classList.remove('rejected');
    section.classList.add('accepted');
    section.querySelector('.action-btn.accept').classList.add('active');
    section.querySelector('.action-btn.reject').classList.remove('active');

    updateAcceptedCount();
}

function rejectAll() {
    // Reject summary
    itemStates.summary = 'rejected';

    // Reject all items
    ['diagnoses', 'medications', 'measurements', 'allergies', 'reminders'].forEach(type => {
        Object.keys(itemStates[type]).forEach(id => {
            itemStates[type][id] = 'rejected';
            updateItemUI(type, parseInt(id));
        });
    });

    // Update summary section UI
    const section = document.querySelector('[data-section="summary"]');
    section.classList.remove('accepted');
    section.classList.add('rejected');
    section.querySelector('.action-btn.accept').classList.remove('active');
    section.querySelector('.action-btn.reject').classList.add('active');

    updateAcceptedCount();
}

function submitAll() {
    const acceptedCount = parseInt(document.getElementById('accepted-count').textContent);

    if (acceptedCount === 0) {
        alert('Please accept at least one item before submitting.');
        return;
    }

    // Show success modal
    document.getElementById('success-modal').classList.add('active');
}

// PDF Zoom functionality
let currentZoom = 100;

function zoomIn() {
    if (currentZoom < 200) {
        currentZoom += 25;
        updateZoom();
    }
}

function zoomOut() {
    if (currentZoom > 50) {
        currentZoom -= 25;
        updateZoom();
    }
}

function updateZoom() {
    document.getElementById('zoom-level').textContent = `${currentZoom}%`;
    const pdfFrame = document.getElementById('pdf-frame');
    pdfFrame.style.transform = `scale(${currentZoom / 100})`;
    pdfFrame.style.transformOrigin = 'top left';
}
