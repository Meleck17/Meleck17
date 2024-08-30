function sendInvoice() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Récupérer les détails de la facture
    const invoiceTable = document.getElementById('invoice-table').getElementsByTagName('tbody')[0];
    const invoiceRows = invoiceTable.getElementsByTagName('tr');
    let invoiceDetails = '';

    for (let row of invoiceRows) {
        const cells = row.getElementsByTagName('td');
        invoiceDetails += `Produit/Service: ${cells[0].innerText}, Prix Unitaire: ${cells[1].innerText}, Quantité: ${cells[2].innerText}, Total: ${cells[3].innerText}\n`;
    }

    const totalPrice = document.getElementById('total-price').innerText;

    const invoiceData = {
        email: email,
        message: message,
        invoiceDetails: invoiceDetails,
        totalPrice: totalPrice
    };

    // Envoyer les données au serveur via AJAX
    fetch('/send-invoice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoiceData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Facture envoyée avec succès!');
        } else {
            alert('Erreur lors de l\'envoi de la facture.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}
