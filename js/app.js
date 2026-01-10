// GP Letter Review Portal - Inbox Application

document.addEventListener('DOMContentLoaded', function() {
    initializeInbox();
});

function initializeInbox() {
    renderLetterList(mockLetters);
    updateStats();
    initializeFilters();
}

function renderLetterList(letters) {
    const letterList = document.getElementById('letter-list');

    if (letters.length === 0) {
        letterList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <p>No letters to review</p>
            </div>
        `;
        return;
    }

    // Sort by urgency (urgent first), then by patient name
    const sortedLetters = [...letters].sort((a, b) => {
        // Urgency comparison (urgent comes first)
        if (a.urgency === 'urgent' && b.urgency !== 'urgent') return -1;
        if (a.urgency !== 'urgent' && b.urgency === 'urgent') return 1;
        // Then by patient name
        return a.patientName.localeCompare(b.patientName);
    });

    letterList.innerHTML = sortedLetters.map(letter => `
        <div class="letter-item" data-letter-id="${letter.id}" onclick="openLetter(${letter.id})">
            <span class="urgency-badge ${letter.urgency}">${letter.urgency}</span>
            <div class="letter-info">
                <span class="patient-name">${letter.patientName}</span>
                <div class="letter-meta">
                    <span>${letter.specialist}</span>
                    <span>•</span>
                    <span>${letter.speciality}</span>
                </div>
            </div>
            <span class="letter-date">${getRelativeDate(letter.dateReceived)}</span>
            <span class="letter-arrow">›</span>
        </div>
    `).join('');
}

function updateStats() {
    const urgentCount = mockLetters.filter(l => l.urgency === 'urgent').length;
    const routineCount = mockLetters.filter(l => l.urgency === 'routine').length;

    document.getElementById('urgent-count').textContent = urgentCount;
    document.getElementById('routine-count').textContent = routineCount;
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter letters
            const filter = this.dataset.filter;
            let filteredLetters;

            if (filter === 'all') {
                filteredLetters = mockLetters;
            } else {
                filteredLetters = mockLetters.filter(l => l.urgency === filter);
            }

            renderLetterList(filteredLetters);
        });
    });
}

function openLetter(letterId) {
    window.location.href = `review.html?id=${letterId}`;
}
