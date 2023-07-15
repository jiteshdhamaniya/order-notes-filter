jQuery(document).ready(($) => {
    $('#woocommerce-order-notes .inside').prepend('<div id="filter-container"><select id="note_type_filter"><option value="">All</option><option value="note">Notes</option><option value="status">Statuses</option></select><input type="text" id="note_text_filter" placeholder="Filter by text or user..."></div>');

    $('#note_type_filter, #note_text_filter').on('change keyup', function () {
        const typeFilter = $('#note_type_filter').val();
        const textFilter = $('#note_text_filter').val().toLowerCase();

        $('#woocommerce-order-notes .order_notes .note').each(function () {
            const noteText = $(this).find('.note_content').text().toLowerCase();
            const noteUser = $(this).find('.meta').contents().filter(function() {
                return this.nodeType === 3; // Node.TEXT_NODE
            }).text().trim().toLowerCase();

            const matchesType = (
                typeFilter === '' ||
                typeFilter === 'note' && noteUser.length > 0 ||
                typeFilter === 'status' && noteText.includes('order status changed')           
            );
            const matchesText = textFilter === '' || noteText.indexOf(textFilter) !== -1 || noteUser.indexOf(textFilter) !== -1;

            if (matchesType && matchesText) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#note_text_filter').on('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

});
