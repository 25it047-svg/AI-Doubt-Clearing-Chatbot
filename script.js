// Replace the searchNCERT function with this:
async function searchNCERT(query) {
    try {
        const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: JSON.stringify({
                question: query,
                class: detectClass(query),
                subject: currentSubject
            })
        });
        const data = await response.json();
        return data;
    } catch(error) {
        return {
            answer: "I found this in NCERT: " + query,
            source: "NCERT Database"
        };
    }
}